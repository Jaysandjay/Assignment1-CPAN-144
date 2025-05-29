'use client'
import React from "react";
import Navigation from "@/app/components/Navigation";
import Title from "@/app/components/Title";


export default function Home() {
  
  return (
    <div className="homeMessage">
        <Title title="Welcome!"/>
        <p>Use the navigation to explore the different components</p>
        <div className="objectives">
          <h2>Assignment 1 Objectives</h2>
          <ol>
            <li>Set up a basic web application using React and Next.js.</li>
            <li>Create multiple components and manage their state effectively.</li>
            <li>Implement event handling for user interactions.</li>
            <li> Use conditional rendering to display different content based on <br/> user actions or application state.</li>
            <li>Style your application using CSS for a polished look.</li>
          </ol>
        </div>
    </div>
  )
}
