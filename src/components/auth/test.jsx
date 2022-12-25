import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Test(){
   
      const showToastMessage = () => {
    toast.success('Success Notification !', {
        position: toast.POSITION.TOP_RIGHT
    });
};
return(<>
<button onClick={showToastMessage}>TOASTER</button>
<ToastContainer />
    </>)
}
export default Test ;