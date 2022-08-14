
import { views } from './utils/';
import ConnectAccount from './component/ConnectAccount.js';
import { useStoreContext } from './context/store.js';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SelectRole from './component/SelectRole.js';
import WaitForAttacher from './component/WaitForAttacher';
import Loader from './utils/loader';
import SetBudget from './component/SetBudget';
import Deploy from './component/Deploy';


const App = () => {
  const { view } = useStoreContext()
  return (
    <div>
      <ToastContainer />
      {/* connect account */}
      {
        view === views.CONNECT_ACCOUNT &&
        <ConnectAccount />
      }

      {/* select who plays X or O */}
      {
        view === views.DEPLOY_OR_ATTACH &&
        <SelectRole />
      }

      {/* set budget for the game */}
      {
        view === views.SET_BUDGET && 
        <SetBudget />
      }

      {/* Deploy */}
      {
        view === views.DEPLOY && 
        <Deploy />
      }

      {
        view === views.WAIT_FOR_ATTACHER &&
        <WaitForAttacher />
      }
      {
        view === views.DEPLOYING &&
        <Loader />
      }
    </div>
  )
}

export default App