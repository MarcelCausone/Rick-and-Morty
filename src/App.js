
import Cards from './components/Cards/Cards.jsx';
import './App.css';
import Nav from './components/Nav/Nav.jsx'
import { useState } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation} from "react-router-dom";
import Detail from './views/Detail/Detail.jsx';
import About from './views/About.jsx';
import ErrorPage from './views/ErrorPage.jsx';
import LogIn from './views/login/LogIn.jsx';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Favorites from "./components/Favorites/Favorites.jsx"





function App() {
   const [characters, setCharacters] = useState([]) 
   const location =useLocation()
   const navigate = useNavigate();

   const [access, setAccess] = useState(false);
   const EMAIL = 'marcel_causone@hotmail.com';
   const PASSWORD = '12345678a';

function loginHandler(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}

function logoutHandler(){
   setAccess(false);
}

useEffect(() => {
   !access && navigate('/');
}, [access]);
   

   // nueva API https://rym2-production.up.railway.app/api/character/$%7Bid%7D?key=henrym-usuariodegithub

   function searchHandler(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({data}) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function closeHandler(id){
     let filteredCharacters =characters.filter((character) => character.id !== Number(id))
     setCharacters(filteredCharacters)
   }

   function randomHandler(){
      let haveIt = []

      let random =(Math.random()*826).toFixed()

      random = Number(random)

      if(!haveIt.includes(random)){
         haveIt.push(random);
         fetch(`https://rickandmortyapi.com/api/character/${random}`)
         .then ((response)=> response.json())
         .then ((data)=>{
            if(data.name) {
               setCharacters((oldChars)=> [...oldChars, data]);
            } else {
               window.alert("No hay personajescon ese ID")
            }
         })
      } else {
         console.log("Ya agrgaste todos los personajes")
         return false;
      }
   }

   
   
   return (
      <div className='App'>
     {location.pathname !== "/" ? 
     <Nav onSearch={searchHandler} 
     random={randomHandler} 
     logout={logoutHandler}/> 
     : null}
      <Routes>
         <Route path='/'element={<LogIn login={loginHandler}/>}/>
         <Route path="/home" element={<Cards  characters={characters} onClose={closeHandler}/>} />
         <Route path="/detail/:id" element={<Detail />} />
         <Route path="/about" element={<About />}/>     
         <Route path='*' element={<ErrorPage/>}/>
         <Route path ="/favorites" element = {<Favorites/>}/>
      </Routes>
      </div>
   );
}

export default App;
