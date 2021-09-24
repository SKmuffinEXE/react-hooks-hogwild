import React, {useState} from 'react';
import PigDetails from './PigDetails';

function Pigs({hog}) {

    const [visible, setVisible] = useState(false)

    function handleClick() {
        setVisible((visible) => !visible)

    }

    return (
        <div onClick = {handleClick}>
            <h1>{hog.name}</h1>
            <img src = {hog.image}/>
            {visible ? <PigDetails/> : null}
                    
        </div>
    );
}

export default Pigs;
