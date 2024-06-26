import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import {store} from './store/configureStore.ts'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import 'toastr/build/toastr.min.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
        
            <App />  
       <ToastContainer/>      
    </BrowserRouter>
  </Provider>
    
  
)
