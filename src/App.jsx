import React from "react";
import Navbar from "./Components/navbar/Navbar";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Home from "./Pages/home/Home";
import Footer from "./Components/footer/Footer";
import Gigs from "./Pages/gigs/Gigs";
import Gig from "./Pages/gig/Gig"
import Messages from "./Pages/messages/Messages"
import Orders from "./Pages/orders/Orders";
import MyGigs from "./Pages/myGigs/MyGigs";
import Message from "./Pages/message/Message"
import Add from "./Pages/add/Add"
import "./App.scss"


function App() {

  const  Layout = ()=>{
     return(
      <>
      <Navbar/>
      <Outlet/>
      <Footer/> 
      </>
     )
  }

  const router = createBrowserRouter([{
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Home/>
        
      },
      {
        path:"/add",
        element: <Add/>
        
      },
      {
        path:"/gigs",
        element: <Gigs/>
        
      },
      {
        path:"/gig/:id",
        element: <Gig/>
        
      },
      {
        path:"/messages/:id",
        element: <Message/>
        
      },

      {
        path:"/messages",
        element: <Messages/>
        
      },

      {
        path:"/mygigs",
        element: <MyGigs/>
        
      },
      {
        path:"/orders",
        element:<Orders/>
      }
    ]
  }])


  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  );
}
export default App;
