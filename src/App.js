import "./App.css";
import React,{ useState } from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// about one is for the react router
// import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);
  // alert is an object
  const showAlert=(message,type)=>{
    setAlert({
      msg :message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
    // ante Alert becomes null after 1500 sec of showing the alert message automatically
  }
  const[textMode,setTextMode]=useState('dark');
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      setTextMode('light');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success");
      // document.title="TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      setTextMode('dark');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
      // document.title="TextUtils - Light Mode";
    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title="textUtils" aboutUs="About" mode={mode} toggleMode={toggleMode} text={textMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
        {/* exact is used because it is better option to use it with the path for the finding of the exact path or else it will do the partial path */}
        {/* <About mode={mode}/> */}
        <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />

        {/* <Routes>
          <Route exact path="/about" element={<About  mode={mode}/>}>
          </Route>
          <Route exact path="/" element={<TextForm heading=" Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces"  mode={mode} showAlert={showAlert} />}>
          </Route>
        </Routes> */}
      </div>
    {/* </BrowserRouter> */}
    </>
  );
}
export default App;
// to create a production build use the 
// npm run build

// npm start

// npm install react-router-dom