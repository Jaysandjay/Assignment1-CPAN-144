import React from "react";
import Title from "@/app/components/Title";
import NumberBox from "@/app/components/numberBox";

export default function numberDrag(){

    const numbers = []
    for(let i = 1; i < 10; i++){
        numbers.push(i)
    }

    return(
        <>
            <Title title="Number Drag"/>
            <div>
                {numbers.map((num) =>
                    <NumberBox number={num}/>
                )}
            </div>
        </>
    )
}