import React from 'react';

function Goals () {
    return (
        <>
        <h1 className="test-center mt-5"> Add new goals</h1>
        <form className="d-flex mt-5" >
            <label for ='sleep'>I want to sleep for </label>
            <select name='sleep'>
                <option>7 hours</option>
                <option>8 hours</option>
                <option>9 hours</option>
            </select>
            <label for ='eat'>I want to eat </label>
            <select name='eat'>
                <option>2400 calories</option>
                <option>2500 calories</option>
                <option>2600 calories</option>
            </select>
            <label for ='run'>I want to run for </label>
            <select name='run'>
                <option>1 mile</option>
                <option>2 miles</option>
                <option>3 miles</option>
            </select>
            
        </form>
        </>
    );
}

export default Goals;