import React, { useEffect, useState } from 'react'
import "./scoreBoard.css"


function ScoreBoardj({score,totalScore,}) {
const[resultStatus,setResultStatus]=useState(false)

const showStatus=(score)=>{
    if(score<=totalScore-2){
        setResultStatus(true)
    }
}
useEffect(()=>{
    showStatus(score)
},[])

console.log(resultStatus);
  return (
    <>
    {resultStatus? 
 (<div className='fail'>
 <i className="fa-regular fa-face-frown"></i>
 <h1>Quiz Finished !</h1>
 </div>

 )   
:
(
<div className='success'>
        <i className="fa-regular fa-face-smile"></i>
        <h1>You Won :)</h1>
        </div>
)
}
        <h3><span className='light'>Your Score: {score} / {totalScore} </span></h3>
    </>
  )
}

export default ScoreBoardj