import React from 'react'
import Second from './Second'

export default function Mainbody() {
    return (
        <>
         <div className="ds" style={{ backgroundImage: "url('./qqq.png')" }}>
                <div className='row mt-2'>
                    <div className='col-sm-3 '>
                        <div class="card">
                            <img src="logo.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">International Student Club</h5>
                                <p class="card-text mb-0">Welcome to ISC club home page </p>
                                <b class="card-te0xt">ONE WORLD ONE COMMUNITY</b>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-6'>

                        <img src="aabb.png " class='mainimage' style={{ height: "80vh", width: "100vh" }} />

                    </div>
                    <div className='col-sm-3'>
                        <div class="card">
                            <img src="cmr.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">International Student Club</h5>
                                <p class="card-text mb-0">Welcome to ISC club home page </p>
                                <b class="card-te0xt">ONE WORLD ONE COMMUNITY</b>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="card">
                    <img src="logo.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">International Student Club</h5>
                        <p class="card-text mb-0">Welcome to ISC club home page </p>
                        <b class="card-te0xt">ONE WORLD ONE COMMUNITY</b>
                    </div>
                </div>
            </div>
            <Second/>
        </>
    )
}
