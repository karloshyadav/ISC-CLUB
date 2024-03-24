import React, { useContext } from 'react'
import { Context } from '../context/Sharedstate'
import { useNavigate } from 'react-router-dom'

export default function Second() {
    const state=useContext(Context)
    const navigate=useNavigate()
    return (
        <>
            <form class="row g-3 m-2">
                <div class="col-md-6">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" name="email" onChange={state.handleChange}/>
                </div>
                <div class="col-md-6">
                    <label  class="form-label">Password</label>
                    <input type="password" class="form-control" name="pass" onChange={state.handleChange}/>
                </div>
               
                <div class="col-12">
                    <button type="submit" class="btn btn-primary" onClick={()=>navigate("/about")}>Sign in</button>
                </div>
            </form>
        </>
    )
}
