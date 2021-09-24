import React from 'react';
import Pigs from './Pigs';
import hogs from '../porkers_data'

function PigPen() {
    return (
    <div className = "ui grid container">
        {hogs.map((hog)=> {
            console.log(hog.name)

           return <Pigs hog = {hog}/>
        })}
    
    </div>
    );
}

export default PigPen;
