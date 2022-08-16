import { views } from "../constants";
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib('ALGO');


const { standardUnit } = reach;
const defaults = { defaultFundAmt: '10', defaultWager: '3', standardUnit };

export const initialState = {
    view: views.CONNECT_ACCOUNT,
    account: '',
    balance: '',
    gameOutcome: '',
    contractInfo: '',
    disableButton: false,
    budget: '',
    player: '',
    selectedSquare: '',
    board: [],
    defaults,
}
