import { createContext, useContext, useState } from "react";
import { initialState, views } from "../utils";
import * as backend from '../reach/build/index.main.mjs'


import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import { loadStdlib } from '@reach-sh/stdlib';
import { toast } from "react-toastify";
const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback({ providerEnv: 'TestNet', MyAlgoConnect }));

const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    const OUTCOME = ['Alice Wins!', 'Bob Wins!',]

    const connect = async () => {
        setState(prev => ({
            ...prev,
            disableButton: true,
        }))
        try {
            const account = await reach.getDefaultAccount();
            setState(prev => ({
                ...prev,
                account,
                disableButton: false,
                view: views.DEPLOY_OR_ATTACH,
            }))

        } catch (error) {
            toast.error("Could not connect account")
            setState(prev => ({
                ...prev,
                disableButton: false,
            }))
        }
    }

    const deploy = async () => {
        const ctc = state.account.contract(backend);
        setState(prev => ({
            ...prev,
            disableButton: true,
            view: views.DEPLOYING,
        }))
        try {
            backend.Alice(ctc, Deployer);
            const ctcInfo = JSON.stringify(await ctc.getInfo(), null, 2)
            setState(prev => ({
                ...prev,
                contractInfo: ctcInfo,
                view: views.WAIT_FOR_ATTACHER,

            }))
        } catch (error) {
            console.log("error occurred")
            setState(prev => ({
                ...prev,
                view: views.CONNECT_ACCOUNT,
            }))
            console.log(error?.e?.message)
        }
    }
    

    const attach = (contractInfo) => {
        if (!contractInfo) {
            toast.error("Contract info is required")
        }
        const contract = state.account.contract(backend, JSON.parse(contractInfo));
        setState(prev => ({
            ...prev,
            view: views.ATTACHING
        }))
        backend.Bob(contract, Attacher)
    }

    const acceptBudget = async (_budget) => {  // Fun([UInt], Null)
        const budgetAmount = reach.formatCurrency(_budget, 4)
        return await new Promise(resolveAcceptedP => {
            setState(prev => ({
                ...prev,
                view: views.ACCEPT_TERMS,
                resolveAcceptedP,
                budget: budgetAmount,
            }))
        })
    }

    const getSquareSelected = async (_state) => {// Fun([STATE], UInt)
        const _board = _state.board
        while (_board) {
            const selectedSquare = await new Promise(resolveChooseSquareP => {
                setState(prev => ({
                    ...prev,
                    view: views.BOARD,
                    playable: true,
                    resolveChooseSquareP,
                }))
            })
            const isSquareFilled = _board[selectedSquare].toLowerCase() === 'x' || _board[selectedSquare].toLowerCase() === 'o'
            if (!isSquareFilled) {
                setState(prev => ({
                    ...prev,
                    board: _board,
                }))
                return selectedSquare
            } else {
                toast.error('Please select another square')
            }
        }
    }

    const chooseSquare = (square) => state.resolveChooseSquareP(square)

    //Participant Objects
    const commonInteract = {
        random: () => reach.hasRandom.random(),
        getSquareSelected,
        chooseSquare,
        seeOutcome: (outcome) => {
            console.log(OUTCOME[parseInt(outcome)]);
        },
        endsWith: (state) => {
            console.log(state);
        }
    }

    const Deployer = {
        ...commonInteract,
        budget: reach.parseCurrency(Number(state.budget)),
    }

    const Attacher = {
        ...commonInteract,
        acceptBudget,
    }

    return <StoreContext.Provider value={{
        state,
        setState,
        connect,
        deploy,
        attach,
        acceptBudget,
        chooseSquare,
        ...state
    }}>{children}</StoreContext.Provider>;
}

const useStoreContext = () => useContext(StoreContext);

export {
    StoreContextProvider,
    useStoreContext,
}