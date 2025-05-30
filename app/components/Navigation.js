import React from "react";
import Link from "next/link";

const Navigation = () => {
    return(
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/tasks">Tasks</Link>
            <Link href="/numberDrag">Number-Drag</Link>
            <Link href="/hover">Hover</Link>
        </nav>
    )
}

export default Navigation