// import { useRouteError } from "react-router-dom";
// // import {BrowserRouter} from "react-router-dom";

// function ErrorBoundary() {
//     const error = useRouteError(); // Assuming useRouteError is a custom hook to get route errors
//     console.log(error);
//     return <div>Error: {error.message}</div>;
  

//   }
  
// export default ErrorBoundary
import { useRouteError } from "react-router-dom";



const MyComponent = () => {

  const [ error, isError, message ] = useRouteError();



  if (isError) {

    return (

      <div>

        <h1>Error</h1>

        <p>{message}</p>

      </div>

    );

  }



  return <div>No error</div>;

};
export default MyComponent