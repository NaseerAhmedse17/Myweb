import React from 'react'
import { NavLink } from 'react-router-dom'
import image1 from '../images/image1.jpg'

function Common(props) {
    return (
        <React.Fragment>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.name}<strong className="brand-name">Website</strong></h1>
                                    <h3 className="my-3">We are the team of talented developer making websites</h3>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn btn-get-started">
                                            {props.btname}
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img" style={{ marginTop: "28px" }}>
                                    <img src={props.imgsrc} className="img-fluid animated" alt="home image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Common
