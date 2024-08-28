// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter , Route, Routes } from "react-router-dom"
//let x=2;//to use variables we can access it with via {} curly braces
// function App() {
//   return (
//     //<div className="blank">Lovely{x}</div>
//     <></>
//   );
// }
//export default app; there if we access with any name in other file still we can access
//export {a}; this is named export where in other file same name should be there
// export default App;
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000)
  }

  const toggleMode=()=>{
    if(mode==="dark")
    {
      setMode("light");
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showAlert("light mode is enabled","success");
      document.title="light mode";
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor='black'
      document.body.style.color='black'
      showAlert("dark mode is enabled","success")
      document.title="dark mode";
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="Text Analyzer" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      
        <Routes>
        <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} Heading="Word Counter Character Counter Remove Extra Spaces" mode={mode} />} />
        </Routes>
      
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;