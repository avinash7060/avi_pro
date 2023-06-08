import React from 'react'

function changeEvent(e){
    e.preventDefault();
    document.write("hello avinash react js ..")
}
function Event() {
  return (
    <div>
    <h1> React js </h1>
     <button onClick={changeEvent}>click me</button>
     {/* <a href="https://www.google.com/" onClick={changeEvent}>click me</a> */}
    </div>
  )
}

export default Event