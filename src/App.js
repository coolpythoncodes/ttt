
import { views } from './utils/';
import ConnectAccount from './component/ConnectAccount.js';
import { useStoreContext } from './context/store.js';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SelectRole from './component/SelectRole.js';
import WaitForAttacher from './component/WaitForAttacher';
import Loader from './utils/loader';


const App = () => {
  const { view } = useStoreContext()
  return (
    <div>
      <ToastContainer />
      {
        view === views.CONNECT_ACCOUNT &&
        <ConnectAccount />
      }
      {
        view === views.DEPLOY_OR_ATTACH &&
        <SelectRole />
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