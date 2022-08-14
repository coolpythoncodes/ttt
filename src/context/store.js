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


    //Participant Objects
    const commonInteract = {
        random: () => reach.hasRandom.random(),
    }

    const Deployer = {
        ...commonInteract,
        getSquareSelected: (state) => {
            return 5;
        },
        getBudget: () => {
            return reach.parseCurrency(state.budget)
        },
        seeOutcome: (outcome) => {
            console.log(outcome);
        },
        endsWith: (state) => {
            console.log(state);
        }
    }

    const Attacher = {
        ...commonInteract,
    }


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
                disableButton: true,
                view: views.DEPLOY_OR_ATTACH,
            }))

        } catch (error) {
            toast.error("Could not connect account")
            setState(prev => ({
                ...prev,
                disabledButton: true,
            }))
        }
    }

    const deploy = async () => {
        setState(prev => ({
            ...prev,
            disableButton: true,
        }))
        try {
            const ctc = state.account.contract(backend);
            backend.Alice(ctc, Deployer);
            setState(prev => ({
                ...prev,
                view: views.DEPLOYING,
            }))
            const ctcInfo = JSON.stringify(await ctc.getInfo(), null, 2)
            setState(prev => ({
                ...prev,
                contractInfo: ctcInfo,
                view: views.WAIT_FOR_ATTACHER,

            }))
        } catch (error) {
            console.log({ error })
        }
    }

    return <StoreContext.Provider value={{
        state,
        setState,
        connect,
        deploy,
        ...state
    }}>{children}</StoreContext.Provider>;
}

const useStoreContext = () => useContext(StoreContext);

export {
    StoreContextProvider,
    useStoreContext,
}