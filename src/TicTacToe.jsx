import React from "react";
import "./TicTacToe.css"
import circle_icon from "./images/circle.jpg"
import x_icon from "./images/cross.webp"

let data=["","","","","","","","",""];
const TicTacToe=()=>{
    const toggle=(w,num)=>{

    }
    return(
        <div className="container">
            <h1 className="title">Tic-Tac-Toe in <span>React</span></h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                </div>
                <div className="row2">
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                </div>
                <div className="row3">
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                </div>

            </div>
            <button className="reset">Reset</button>


        </div>
    )
       
    
}

export default TicTacToe;