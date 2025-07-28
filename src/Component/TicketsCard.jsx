import React from 'react';
import { LuPointer } from 'react-icons/lu';
import { Link } from 'react-router-dom';

function TicketsCard() {
    return (
        <>
            <div style={{ background: "rgba(31, 28, 28, 1)" }}>
                <div className='container py-3'>
                    <div className='text-white text-center fw-medium pera rounded-4 px-2 py-3' style={{ background: "#8080808f" }}>" तो आइए इस स्वतंत्रता पर्व की संध्या पर हमारे वीर जवानों के पराक्रम, साहस व शौर्यगाथा के साक्षी बने ओर उनके अनुभवों से सामाजिक जिम्मेदारी एवम् मानसिक रूप से स्वस्थ रहने का पाठ सीखे।
                        कृपया रजिस्ट्रेशन करे और कार्यक्रम में सहभागी बने। "
                    </div>
                </div>
            </div>
            <div className="ticket_bg py-2">
                <div className="container">
                    <div className="row g-3 py-2 py-lg-4 d-flex align-items-center justify-content-center">

                        <div className="col-12 col-lg-6 ">
                            <div className="h-100 shadow rounded-4 p-3 d-flex flex-column justify-content-between" style={{ background: "rgba(255, 255, 255, 0.64)" }}>
                                <div
                                    className="text-center rounded p-3 py-4 text-white"
                                    style={{
                                        background: "#ff993381"
                                        // background: 'linear-gradient(to right, #ff9800, #fdd835, #388e3c)',
                                    }}
                                >
                                    <div className="fw-bold display-6 text-dark">Token Amount</div>
                                    <div className="fw-bold display-6 text-dark">₹ 100</div>
                                </div>

                                <div className='mt-2'>
                                    <Link to={"/buynow"} className='text-decoration-none'>
                                        <button className='buttons w-100 btn ' type="button" style={{ fontFamily: "Sora, Sans-serif", fontWeight: 700 }}><span className='fs-5'><LuPointer /></span> Register Now</button>
                                    </Link>
                                </div>
                                {/* <div className='mt-3 fw-bold text-center' style={{ fontSize: "10px" }}>નોંધ - ટોકન રાશિ આપવી ફરજિયાત નથી. આપની રાશિ શહીદ પરિવારના સન્માનમાં રાષ્ટ્રીય ભાવનાથી અર્પિત થશે.</div> */}
                            </div>
                            <div className="mt-3 text-white rounded-4 p-3 shadow" style={{ background: "rgba(31, 28, 28, 0.74)" }}>
                                <div><span className="fw-bold">📅 Date :</span> <span className='pera'>15 August 2025</span></div>
                                <div className="my-2"><span className="fw-bold ">🕒 Time :</span> <span className='pera'>08:00 PM to 11:30 PM</span></div>
                                <div><span className="fw-bold ">📍Venue :</span> <span className='pera'>Sampada Festivity, Near <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Anthems Circle, Kosmada</div><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ring Road, Surat.</div></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TicketsCard;