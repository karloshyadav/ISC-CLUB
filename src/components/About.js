import React, { useContext } from 'react'
import { Context } from '../context/Sharedstate'

export default function About() {
    const state = useContext(Context)
    console.log(state.temp)
    return (
        <>
            <div class="card" style={{width: "18rem"}}>
                <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{state.temp.email}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
            <div class="card" style={{width: "18rem"}}>
                <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{state.temp.pass}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </>
    )
}
