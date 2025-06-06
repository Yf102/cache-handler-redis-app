'use client'
import React, {useState} from 'react';
import {JokeType} from "../api/joke/route";
import {JokeForm} from "./components/JokeForm";

const JokeClient = () => {
    const [joke, setJoke] = useState<undefined | JokeType>()
    return (
        <>
            <div style={{marginBottom: '20px'}}>
                {joke ? <JokeComponent joke={joke} /> : <div>Smile...</div>}
            </div>
            <JokeForm setJoke={setJoke}/>
        </>
        );
};

const JokeComponent = ({joke}: {joke: JokeType}) => {
    return (
        <>
            <div className="pre-rendered-at">
                {joke?.setup}
            </div>
            <div className="pre-rendered-at">
                {joke?.punchline}
            </div>
        </>
    )
}
export default JokeClient;