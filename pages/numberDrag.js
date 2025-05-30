import React from "react";
import Title from "@/app/components/Title";
import NumberBox from "@/app/components/numberBox";
import { useState } from "react";


export default function numberDrag(){

    const [numToAdd, setNumToAdd] = useState(0)
    const [currentNumber, setCurrentNumber] = useState(0)

    const numbers = []
    for(let i = 1; i < 10; i++){
        numbers.push(i)
    }

    function handleDragStart(num){
        setNumToAdd(num)
    }

    function handleDragEnd(num){
        setNumToAdd(0)
    }

    function handleDragOver(e){
        e.preventDefault()
    }

    function addNumber(e){
        e.preventDefault()
        setCurrentNumber(currentNumber + numToAdd)
    }

    function clear(){
        setCurrentNumber(0)
    }
    

    return(
        <div>
            <Title title="Number Drag"/>
            <p className="numberInstructions">Drag and drop the boxeds to add the value </p>
            <div className="boxLayout">
                <NumberBox 
                number={currentNumber}
                onDragOver={handleDragOver}
                onDragEnd={handleDragEnd}
                onDrop={(e) => addNumber(e)}
                />
                <div className="boxes">
                    {numbers.map((num) =>
                        <NumberBox 
                        number={num} 
                        key={num} 
                        onDragStart={(e)=>handleDragStart(num)}
                        onDragEnd={(e)=>handleDragEnd(num)}
                        />
                    )}
                </div>
                <button onClick={clear}>Clear</button>
            </div>
        </div>
    )
}