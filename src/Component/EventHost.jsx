import React from 'react'
import SuroBharat from './SuroBharat'

function EventHost() {
    return (
        <>
            <div className='eventhost_bg pt-4 pb-4'>
                <SuroBharat />
                <div className='container pt-4'>
                    {/* <div className="d-flex justify-content-center">
                    <div className="event-host-box py-2 px-3">
                        <div className="fw-bold">⭐ Event Host ✨</div>
                    </div>
                </div> */}
                    <h2
                        className="ftittle m-0 p-0 text-capitalize main-title text-center"
                        data-aos="fade-down"
                        data-aos-duration="1500"
                        data-aos-once="true"
                        style={{ color: "green" }}
                    >
                        Anchoring the event with passion – Gopal Dave!
                    </h2>
                    <div className='row justify-content-center mt-4'>
                        <div className='col-12 col-lg-4'>
                            <div style={{ border: "5px ridge black" }} className='p-2 rounded-3'>
                                <img src={require("../assets/images/Social Army poster july 2025_13 (1)_new.jpg")} className='img-fluid w-100 h-100' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventHost