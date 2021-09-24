import React from 'react'

function Filter({onCategoryChange}){

    return(
    <div className="Filter">
        <select name="filter" onChange={onCategoryChange}>
          <option value="All">All</option>
          <option value="Greased">Greased</option>
          <option value="Non-greased">Non-greased</option>
        </select>
    </div>
    )
}

export default Filter;