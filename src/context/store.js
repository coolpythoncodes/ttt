import { createContext, useContext, useEffect, useState } from "react";
import { initialState, views } from "../utils";
import * as backend from '../reach/build/index.main.mjs'
import { loadStdlib } from '@reach-sh/stdlib';
import { toast } from "react-toastify";
const reach = loadStdlib('ALGO');


// import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
// reach.setWalletFallback(reach.walletFallback({ providerEnv: 'TestNet', MyAlgoConnect }));

const startingBalance = reach.parseCurrency(100)

const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    const OUTCOME = ['X Wins!', 'O Wins!', "Draw"]


    const connect = async () => {
        setState(prev => ({
            ...prev,
            disableButton: true,
        }))
        try {
            // const account = await reach.getDefaultAccount();
            const account = await reach.newTestAccount(startingBalance)
            setState((prev) => ({
                ...prev,
                account,
                disableButton: false,
                view: views.DEPLOY_OR_ATTACH,
            }));

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

    const acceptBudget = async (_budget) => {  // Fun([UInt], Bool)
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
        setState(prev => ({
            ...prev,
            board: _board,
        }))
        while (_board) {
            const _selectedSquare = await new Promise(resolveChooseSquareP => {
                setState(prev => ({
                    ...prev,
                    view: views.BOARD,
                    playable: true,
                    resolveChooseSquareP,
                    board: _board,
                }))
            })
            const isSquareFilled = _board[_selectedSquare].toLowerCase() === 'x' || _board[_selectedSquare].toLowerCase() === 'o'
            if (!isSquareFilled) {
                return _selectedSquare
            } else {
                toast.error('Please select another square')
            }

        }
        setState(prev => ({
            ...prev,
            board: _board,
        }))
    }

    const chooseSquare = (square) => state.resolveChooseSquareP(square)

    //Participant Objects
    const commonInteract = {
        random: () => reach.hasRandom.random(),
        getSquareSelected,
        chooseSquare,
        seeOutcome: (outcome) => {
            setState(prev => ({
                ...prev,
                gameOutcome: OUTCOME[parseInt(outcome)],
                view: views.DONE,
            }))
        },
        seeBoard: (state) => {
            setState(prev => ({
                ...prev,
                board: state.board,
            }))
        },
        endsWith: (state) => {
            setState(prev => ({
                ...prev,
                board: state.board,
            }))
        },
        informTimeOut: () => {
            setState(prev => ({
                ...prev,
                view: views.TIMEOUT,
            }))
        }

    }


    const getBalance = async () => {
        const balAtomic = await reach.balanceOf(state.account)
        const balance = reach.formatCurrency(balAtomic, 4)
        return balance

    }
    const Deployer = {
        ...commonInteract,
        budget: reach.parseCurrency(Number(state.budget)),
        deadline: { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector],
    }

    const Attacher = {
        ...commonInteract,
        acceptBudget,
    }

    useEffect(() => {
        if (state.account) {
            getBalance().then(res => setState(prev => ({
                ...prev,
                balance: res,
            })))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.view])

    return <StoreContext.Provider value={{
        state,
        setState,
        connect,
        deploy,
        attach,
        acceptBudget,
        chooseSquare,
        getBalance,
        ...state
    }}>{children}</StoreContext.Provider>;
}

const useStoreContext = () => useContext(StoreContext);

export {
    StoreContextProvider,
    useStoreContext,
}