import logo from './logo.svg';
import './App.css';
import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import AllCountries from './components/AllCountries'
function App() {
  React.useEffect(()=>{
    if(window.localStorage.getItem('countries')){
      store.dispatch({type:'UPDATECOUNTRIES',payload:{'countries':JSON.parse(window.localStorage.getItem("countries"))}});
    }
    else{
      fetch("https://restcountries.eu/rest/v2/all")
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        window.localStorage.setItem('allcountries',JSON.stringify(data));
        store.dispatch({type:'UPDATECOUNTRIES',payload:{'countries':data}})
      })
    }    
  },[])
  return (
    <Provider store={store}>
      <div>
        <h1>Lets understand the Magic Redux</h1>
        <AllCountries></AllCountries>
      </div>
    </Provider>
  );
}

export default App;
