// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useCookies} from "react-cookie";
import { Navigate } from "react-router-dom";


// import 'font-awesome/css/font-awesome.min.css'; //import in react app


function App() {
      const [cookie,setCookie] = useCookies(["access_token"]);
    if (!cookie.access_token) {
     return <Navigate to="/" />;
    }
   // alert(window.localStorage.getItem("userID"));
  return (
    <div className="App">
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
