import './App.css';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import About from './Component/About';
import React, {useState} from 'react';
import Alert from './Component/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom';

function App() {

 const [mode, setMode] = useState('light'); // whether dark mode is enable or not.
 const [alert, setAlert] = useState(null);

 const showAlert = (message ,type) =>{
  setAlert({
    msg: message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 3000);
 }
const toggleMode =() =>{
  if(mode === 'dark'){
    setMode('light');
    document.body.style.backgroundColor = 'white'
    showAlert(" Light mode has been Enabled","success");
    // document.title= 'TextUtils - LightMode'; // titile name change hota h
  }
  else{ 
    setMode('dark');
    document.body.style.backgroundColor = '#042743'
    showAlert(" Dark mode has been Enabled","success");
    // document.title= 'TextUtils - DarkMode';
  }
}
  return (
    <> 
        <Router>
        <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
      <div className="container my-3">
     <Switch>
      <Route exact path='/about'><About mode={mode}/></Route>

      <Route exact path='/'>
      <Textform showAlert={showAlert} heading = "Try TextUtils - Word Counter, Character Counter,Remove extra Spaces" mode={mode}/>
      </Route>
     </Switch>
      
      </div> 
      </Router>
      
    </>
  );
}
export default App;