// //npm install @mui/material @emotion/react @emotion/styled   
import Jsxa from "./Componentyoutube/Jsxa";
import Componentsa from "./Componentyoutube/Componentsa";
import Statea from "./Componentyoutube/Statea";
import EventA from "./Componentyoutube/EventA";
import Event from "./Componentyoutube/Event";
import { Propsa } from "./Componentyoutube/Propsa";
import Propsclass from "./Componentyoutube/Propsclass";
import Fragments from "./Componentyoutube/Fragments";
import List from "./Componentyoutube/List";
import Keys from "./Componentyoutube/Keys";
import StyleCSS from "./Componentyoutube/StyleCSS";
import From from "./Componentyoutube/From";
import Router from "./Componentyoutube/Router";
import Lifeproduct from "./Componentyoutube/Lifeproduct";
import LifecycleA from "./Componentyoutube/LifecycleA";
import Table from "./Componentyoutube/Table";
import Map from "./Componentyoutube/Map";
import Animation from "./Componentyoutube/Animation";
import Ref from "./Componentyoutube/Ref";
import Comditional_rendring from "./Componentyoutube/Comditional_rending";
import Construtora from "./Componentyoutube/Construtora";
import Contextapi_A from "./Componentyoutube/Contextapi_A";
import Hocvikash from "./Componentyoutube/Hocvikash";
import Hocajay from "./Componentyoutube/Hocajay";
import Code_splitting from "./Componentyoutube/Code_splitting";
import ComponentsApi from "./Componentyoutube/ComponentsApi";
import Errorboundaries from "./Componentyoutube/Errorboundaries";
import Portals from "./Componentyoutube/Portals";
import Hookcounter from "./Componentyoutube/Hookcounter";
import Hookobject from "./Componentyoutube/Hookobject";
import Hookarrary from "./Componentyoutube/Hookarrary";
import HookClasscomponent from "./Componentyoutube/HookClasscomponent";
import Fromvalidation from "./Componentyoutube/Fromvalidation";

//redux
import { createStore } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Componentyoutube/CounterReduxjs";


//Projet avinash
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./AviComponentsprojet/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./AviComponentsprojet/About";
import Login from "./AviComponentsprojet/Login";
import Singup from "./AviComponentsprojet/Singup";
import Profile from "./AviComponentsprojet/Profile";
import ANavbar from "./AviComponentsprojet/ANavbar";
import Avicv from "./AviComponentsprojet/Avicv";

//games
import Board from "./Gamescomponents/Board";
import React, {useState} from "react";
import RenderedElement from "./Componentyoutube/Clock";
import LifecycleC from "./Componentyoutube/LifecycleC";
import LifecycleD from "./Componentyoutube/LifecycleD";
import Lifetest from "./Componentyoutube/Lifetest";


// Javascript ES6
import Rest from "./Javascript/Rest";
import Asxnc_await_promises from "./Javascript/Asxnc_await_promises" 
import Closure from "./Javascript/Closure"
import Apply_call_bind from "./Javascript/Apply_call_bind"
import Hoc_episode_5 from "./Javascript/Hoc_episode_5"
import Defind_undefind from "./Javascript/Defind_undefind"
import object_prototype from "./Javascript/object_prototype"
import map_set_weakset from "./Javascript/map_set_weakset"
import Fun_hoisting from "./Javascript/Fun_hoisting"
import Event_bubbling from "./Javascript/Event_bubbling"
import Currying from "./Javascript/Currying"
import Infintine_curring from "./Javascript/Infintine_curring"
import Implenenting_memoiz from "./Javascript/Implenenting_memoiz"
import Debounceing from "./Javascript/Debounceing"



// //Action = increment

// import { createStore } from "redux";

// const increment = () =>{
//  return{
//     type: 'INCREMENT'
//  }
// }

// Reducers = Check which action is performign annd modify and update the store
// const counter = (state = 0, action) => {
//     switch (action.type){
//         case'INCREMENT':
//           return state + 1;
//         case 'DECREMENT':
//           return state -1;
//         default:
//           return state;
//     }
// }
// store = globalized state
// let store = createStore(counter);

// store.subscribe(() =>console.log(store.getState()))

// Dispatch = Execte action
// store.dispatch(increment())

function App() {
  //redux
  // const counter = useSelector(state => state.counter)
  // const dispatch = useDispatch()
  // let newValue = 50;


// className="ui container"
  return (
    <div >
      {/* <Jsxa/> */}
    

{/* <Propsa name="devashish," email_id="deva@gmail.com" id="12323323"/>
<Propsa name="ashish," email_id="ashish@gmail.com" id="34536676"/>
<Propsa name="avinash," email_id="avinash@gmail.com" id="345345556"/>
<Propsa><a href=""> props URL</a></Propsa>
<Propsclass name="anil,"/> */}


{/* <Statea/> */}


{/* <Componentsa name="devashish," email_id="deva@gmail.com" id="12323323"/> */}


      <Event/>
      {/* <EventA roll="21"/> */}

     
       {/* <Fragments/> */}
       
       
     {/* <List /> */}

      {/* <Keys/> */}

     {/* <StyleCSS isvalue={false}></StyleCSS> */}

     {/* <From/>  */}

      {/* <Router></Router> */}

      {/* <LifecycleA></LifecycleA> rong*/}
      {/* <Lifeproduct></Lifeproduct> */}
      {/* <LifecycleC></LifecycleC>  */}
      {/* <Lifetest></Lifetest>  */}
    

      {/* <Table></Table> */}

      {/* <Map></Map> */}

      {/* <Animation></Animation> */}
      
      {/* <Ref></Ref> */}


      {/* <Comditional_rendring></Comditional_rendring> */}

      {/* <Construtora></Construtora> */}

      {/* <Contextapi_A></Contextapi_A> */}


       {/* height order components */}
      {/* <Hocvikash></Hocvikash>
      <Hocajay></Hocajay> */}


      {/* <Code_splitting></Code_splitting> */}

      {/* <ComponentsApi></ComponentsApi> */}

      {/* <Errorboundaries></Errorboundaries> */}

      {/* <Portals></Portals> */}

      {/* <Hookcounter></Hookcounter> */}
      {/* <Hookobject></Hookobject><br></br>
      <Hookarrary></Hookarrary> */}
      {/* <HookClasscomponent></HookClasscomponent> *  wrong/}

      {/* <Fromvalidation></Fromvalidation> */}

      {/* <h1>Redux</h1> 
      <h2>counter : {counter}</h2>
      <button onClick={()=>dispatch(increment(newValue))}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button> */}


      {/* project avinash */}
       {/* <BrowserRouter>
       <ANavbar></ANavbar>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/profile" element={<Profile />} />
          <Route path="/singup" element={<Singup />} />
           <Route path="/login" element={<Login />} />
           <Route path="/avicv" element={<Avicv/>} />
         </Routes>
       </BrowserRouter> */}


    {/* //games */}
      {/* <Board></Board> */}


      

    </div>
  );
}
export default App;