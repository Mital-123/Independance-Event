import React from 'react'

function SuroBharat() {
    return (
        <>
            <div className=''>
                <div className='overflow-hidden'>
                    <div className="text-center header-section">
                        <div className="brdstart-wrapper d-flex justify-content-center align-items-center">
                            <div className="text-center mx-auto" style={{ maxWidth: "800px" }}>
                                <span className="gradient-text" style={{ marginLeft: "-100px" }}>"Suro Mein Bharat –
                                    <div className="gradient-text ms-5 ps-5">The Live In Concert"</div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-10 col-lg-3">
                            <div className="h-100">
                                <div className='p-2'
                                    style={{
                                        border: "5px groove green",
                                        boxShadow: "7px 7px 0px green",
                                    }}>
                                    <img src={require("../assets/images/IMG-20250726-WA0007 (1) new.jpg")} className="img-fluid w-100 h-100 object-fit-cover" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SuroBharat