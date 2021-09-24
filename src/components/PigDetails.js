import React from 'react';

function PigDetails({hog}) {
    return (
        <>
            <h3>Specialty: {hog.specialty}</h3>
            <h3>Weight: {hog.weight}</h3>
            <h3>Greased: {hog.greased ? "Yes" : "No"}</h3>
            <h3>Highest Medal Achieved: {hog["highest medal achieved"]}</h3>
        </>
    );
}

export default PigDetails