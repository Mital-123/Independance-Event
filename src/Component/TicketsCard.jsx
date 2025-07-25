import React from 'react';
import { LuPointer } from 'react-icons/lu';
import { Link } from 'react-router-dom';

function TicketsCard() {
    return (
        <>
            <div className="ticket_bg py-5">
                <div className="container">
                    <div className="row g-3 py-2 py-lg-4 d-flex align-items-center justify-content-center">
                        <div className='text-white text-center fw-medium pera'>" तो आइए इस स्वतंत्रता पर्व की संध्या पर हमारे वीर जवानों के पराक्रम, साहस व शौर्यगाथा के साक्षी बने ओर उनके अनुभवों से सामाजिक जिम्मेदारी एवम् मानसिक रूप से स्वस्थ रहने का पाठ सीखे।
                            कृपया रजिस्ट्रेशन करे और कार्यक्रम में सहभागी बने। "
                        </div>
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
                                <div className='mt-3 fw-bold text-center' style={{ fontSize: "10px" }}>નોંધ - ટોકન રાશિ આપવી ફરજિયાત નથી. આપની રાશિ શહીદ પરિવારના સન્માનમાં રાષ્ટ્રીય ભાવનાથી અર્પિત થશે.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TicketsCard;