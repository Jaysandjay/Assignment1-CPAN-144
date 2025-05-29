import React from "react";

export default function NumberBox({number}){
    return(
        <div className='numberBox' draggable="true">
            {number}
        </div>
    )
}