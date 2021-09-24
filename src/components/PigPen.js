import React, { useState } from 'react';
import Pigs from './Pigs';
import hogs from '../porkers_data'
import Filter from './Filter'


function PigPen() {
    const [selectedCat, setSelectedCat] = useState("All")
    //const [selecteSort, setSelectedSort] = useState("name")
    function handleCategoryChange(e){
        setSelectedCat(e.target.value)
    }

    const pigsDisplay = hogs.filter(hog => {
        if(selectedCat === "All") {return true;}
        else if(selectedCat === "Greased") {
            if(hog.greased){
                return hog
            }
        } else {
            if(!hog.greased){
                return hog
            }
        }
    })
    return (
    <>
    <div>
    <button>Name</button>
    <button>Weight</button>
    <Filter onCategoryChange={handleCategoryChange}/>
    </div>
        <br/>
        <br/>
    <div className = "ui grid container">
        {pigsDisplay.map((hog)=> {
            console.log(hog.name)

           return <Pigs hog = {hog}/>
        })}
    
    </div>
    </>
    );
}

export default PigPen;
