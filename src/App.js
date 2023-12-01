import React from 'react';
import './App.css';
import Footers from './Footer'

import Navbar from './components/Navbar'
import Body from './Body'
import About from './components/About';
import ReactDOM from 'react-dom/client';
import Contacts from './components/Contacts';
import Profile from './components/Profile';
import {BrowserRouter as Router, Routes , Route,Outlet} from "react-router-dom";
// import Error from './components/Error';
import { useRouteError } from "react-router-dom";
import { Provider } from 'react-redux';
import appStore from './components/Utils/appStore';

import RestaurantDetails from './components/RestaurantDetails';
function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return <div>{error.message}</div>;
}
function App() {
  const breakSomething = () => {
    throw new Error('Intentional error for testing.');
  };
  return (
    <Provider store = {appStore}>
   < Router>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Body/>} />
        <Route
          path="/about"
          element={
            <About />
          }
        >
          {/* Nested route for Profile */}
          <Route path="profile" 
          element={<Profile />} />
        </Route>
        {/* //or jaise ki mereko baki component m dhikhana h ki" Error Element"
        tho yhe error element baki saare component m jake link kardo. */}
        {/* <Route path = "/error" element = {<Error/>}/> */}
        
<Route
  errorElement={<ErrorBoundary />}
  loader={() => {
    // Intentionally breaking something in the loader
    breakSomething();
  }}
  action={() => {
    // Intentionally throwing a 400 Bad Request error in the action
    throw new Response('Bad Request', { status: 400 });
  }}
/>

        <Route path="/contacts" 
        element={<Contacts/>} />

        <Route path="/restaurant/:id" 
        element={<RestaurantDetails/>}/>
      </Routes>
     
      <Footers/> 
    
         
  </Router>
  </Provider>
  );
}

// root.render(<RouterProvider router={appRouter}/>);
export default App;
