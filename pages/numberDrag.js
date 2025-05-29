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
    

    return(
        <div>
            <Title title="Number Drag"/>
            <div className="boxLayout">
                <NumberBox 
                number={currentNumber}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => addNumber(e)}
                />
                <div className="boxes">
                    {numbers.map((num) =>
                        <NumberBox 
                        number={num} 
                        key={num} 
                        onDragStart={()=>handleDragStart(num)}
                        onDragEnd={()=>handleDragEnd(num)}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}