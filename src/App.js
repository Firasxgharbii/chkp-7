// import logo from './logo.svg';

import './App.css';

import Component from './Profile/Component ';
function App() {
  let fullName= 'Firas Gharbi';
  let bio= 'i have good vibes';
  let profession= 'developper'
  let handleName= (Y) => {
    alert (`the user Name is ${Y}`)
  }
  return (

    <div className="App">
     <Component name={(fullName)} bio={bio} job={profession} handlename={handleName} >  
  <img src='https://img.huffingtonpost.com/asset/5c122f2d240000ff008c80ee.jpeg?ops=scalefit_630_noupscale' ></img>
  </Component>
  </div>
  );
  }
  export default App;

