import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { useState } from "react";

function App() {

  // here we are setting the alert function to show the alerts on our screen 
  const [alert, setAlert] = useState(null);

  // showAlert is the function which we will be calling
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    // this will autodismis alert after 3 seconds.
    setTimeout(() => {
      setAlert(null)
    }, 1500);

    // by using this syntax you can change the title of your page dynamically..😁
    document.title = "TextUtils - Alert";

    // this is we are setting to check how can we disturb the user by shining the title..
    // just to attract the user..
    // but never make such an evil😈 app..😂
    // setInterval(()=>{
    //   document.title = 'TextUtils is amazing....';
    //   // prompt("install textutils now..");
    //   // alert("hey");
    // },1000);

    // setInterval(()=>{
    //   document.title = 'TextUtils - Install TextUtils now..';
    // },1500);
  }

  return (
    <>

      {/* <Navbar/> */}
      {/* when i don't pass any argument to Navbar it will consider the default arguments which i have passed as defaultProps in Navba.js*/}
      <Navbar title="TextUtils" aboutText="About" />
      <Alert alert={alert} />
      <div className="container">
        <TextForm showAlert={showAlert}/>
      </div>
      {/* <About /> d*/}
    </>
  );
}
export default App;
