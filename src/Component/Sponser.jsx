import React, { useState, useEffect } from 'react';

function Sponser() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`red-certificates-section py-5 ${isVisible ? 'visible' : ''}`}>
      {/* Animated Background Elements */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>

      <div className="container px-3">
        {/* Header Section */}
        <div className="row justify-content-center mb-3">
          <div className="col-lg-8 text-center">
            <div className="header-content">
              <h2
                className="ftittle m-0 p-0 text-capitalize main-title"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                Our Supporters
              </h2>
              <p className="pera pt-2">
                Join forces with us to make this event a success and enhance your company's social responsibility efforts and marketing strategy with Social Army.
              </p>
            </div>
          </div>
        </div>

        {/* Logos Section in Row/Cols */}
        <div className="">
          {/* Item 1 */}
          <div className="row g-4 justify-content-center mb-3">
            {/* Logo 1 */}
            <div className="col-12 col-md-3 col-lg-2 d-flex justify-content-center" data-aos="zoom-in" data-aos-duration="1000">
              <div className="certificate-item d-flex align-items-center justify-content-center">
                <img
                  src="https://baprerna.com/_next/image?url=%2Fassets%2Ffavicon.png&w=384&q=75"
                  alt="Sponsor 1"
                  className="img-fluid"
                />
                <div className="certificate-glow"></div>
              </div>
            </div>

            {/* Logo 2 */}
            <div className="col-12 col-md-3 col-lg-2 d-flex justify-content-center" data-aos="zoom-in" data-aos-duration="1000">
              <div className="certificate-item d-flex align-items-center justify-content-center">
                <img
                  src={require("../assets/images/WhatsApp Image 2025-07-22 at 16.03.34_259c768c.jpg")}
                  alt="Sponsor 2"
                  className="img-fluid"
                />
                <div className="certificate-glow"></div>
              </div>
            </div>
          </div>


          {/* Item 3 */}
          <div className="row g-4 justify-content-center">
            <div className="col-6 col-md-3 col-lg-2 d-flex justify-content-center" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200">
              <div className="certificate-item h-100 d-flex align-items-center justify-content-center">
                <img
                  src={require("../assets/images/sampada logo.png")}
                  alt="Sponsor 3"
                  className="img-fluid"
                />
                <div className="certificate-glow"></div>
              </div>
            </div>

            <div className="col-6 col-md-3 col-lg-2 d-flex justify-content-center" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200">
              <div className="certificate-item h-100 d-flex align-items-center justify-content-center">
                <img
                  src={require("../assets/images/city tadka logo.png")}
                  alt="Sponsor 4"
                  className="img-fluid"
                />
                <div className="certificate-glow"></div>
              </div>
            </div>

            <div className="col-6 col-md-3 col-lg-2 d-flex justify-content-center" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200">
              <div className="certificate-item h-100 d-flex align-items-center justify-content-center">
                <img
                  src={require("../assets/images/arjiv-exports.4ad8dfcfc8b6bac62735.png")}
                  alt="Sponsor 5"
                  className="img-fluid"
                />
                <div className="certificate-glow"></div>
              </div>
            </div>

            <div className="col-6 col-md-3 col-lg-2 d-flex justify-content-center" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200">
              <div className="certificate-item h-100 d-flex align-items-center justify-content-center">
                <img
                  src={require("../assets/images/Screenshot_22-7-2025_153612_.jpeg")}
                  alt="Sponsor 6"
                  className="img-fluid"
                />
                <div className="certificate-glow"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Sponser