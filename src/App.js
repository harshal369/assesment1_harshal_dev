import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from "./Compo/Login";
import Registration from "./Compo/Registration";
import Home from "./Compo/Home";

function App() {

    const router=createBrowserRouter([
      {
        path:"/",
        element:<Login />
      },
      {
        path:"reg",
        element:<Registration/>
      },
      {
        path:"/home",
        element:<Home/>
      }
    ])
   
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
