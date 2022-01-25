import React from 'react';
import {useState} from "react"
function Goals () {
    const [fitness, SetFitness] = useState("")
    const [nutrition, SetNutrition]  = useState("")
    const [exercise, SetExercise]  = useState("")
    const onSubmit = async e =>{
        e.preventDefault()
        try{
            const body = {fitness,nutrition,exercise}
            const response = await fetch("http://localhost:5001/goals", {
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            document.getElementById('sscuess').innerText = 'Your goal was added to the database'
        }catch(err){
            console.error(err.messenge)
        }
    }

    return (
        <>
        <h1 className="test-center mt-5"> Add new goals</h1>
        <form className="d-flex mt-5" onSubmit={onSubmit} >
            <label for ='sleep'>I want to sleep for </label>
            <select name='sleep' onChange={e => SetFitness(e.target.value)}>
                <option>7 hours</option>
                <option>8 hours</option>
                <option>9 hours</option>
            </select>
            <div className='new-line divdown'>
            <label for ='eat'> I want to eat </label>
            <select name='eat' onChange={e => SetNutrition(e.target.value)}>
                <option>2400 calories</option>
                <option>2500 calories</option>
                <option>2600 calories</option>
            </select>
            
            
            <label for ='run'>I want to run for </label>
            <select name='run'  onChange={e => SetExercise(e.target.value)}>
                <option>1 mile</option>
                <option>2 miles</option>
                <option>3 miles</option>
            </select>
            </div>
            <button> onSubmit</button>
        </form>
        <div id = 'sscuess'></div>
        </>
    );
}

export default Goals;