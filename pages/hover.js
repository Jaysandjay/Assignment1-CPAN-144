import HoverOval from "@/app/components/HoverOval";
import React, {useState} from "react";
import Title from "@/app/components/Title";

export default function hover(){

    const colors = [
        'blue',
        'red',
        'yellow',
        'green'
    ]


    return(
        <div>
            <Title title="Hover"/>
            <p className="instructions">Hover over to add to the count</p>
            <div className="ovalContainers">
                {colors.map((color, index) =>
                <HoverOval 
                key={index}
                id={index}
                color={color}
                />
                )}
            </div>
        </div>
    )
}