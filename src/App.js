import './App.css';
import Avatar2 from './Avatar';
import Avatar from './Avatar2';
import Main from './Main';
import React, {Component, useEffect} from 'react';
import { HashRouter, Routes ,Route, Router,BrowserRouter} from 'react-router-dom'

function App() {

  const setOneVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setOneVh()

  useEffect(()=>{
    setOneVh();

    function onResize(){ 
        setOneVh();
    }
    window.addEventListener('resize',onResize);
  },[])

  return (
    <div className="App">
     <React.StrictMode>
        <HashRouter>
            <Routes>
              <Route path="/" element={<Avatar/>} /> 
              {/* <Route path="/avatar" element={<Avatar/>} />  */}
            </Routes>
        </HashRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
