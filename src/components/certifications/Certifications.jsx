import React from 'react'
import './Certifications.css'

import Cert1 from '../../assets/NIELIT.png'
import Cert2 from '../../assets/React Course-1.png'
import Cert3 from '../../assets/Certificate-1.png'

const Certifications = () => {
  return (
    <section className="cert container section" id="certifications">
      <h2 className="section__title">Certifications</h2>

      <div className="cert__container">
        {/* 1st Certificate */}
        <div className="cert__card">
          <div className="cert__thumb">
            <span className="cert__category">1st Cert.</span>
            <img src={Cert1} alt="Machine Learning" className="cert1__img" />
          </div>

          <div className="cert__details">
            <h3 className="cert__title">
              Machine Learning using Python Certificate
            </h3>
            <div className="cert__meta">
              <span>9th Aug, 2023</span>
              <span className="cert__dot">.</span>
              <span>NIELIT</span>
            </div>
          </div>
        </div>

        {/* 2nd Certificate */}
          <div className="cert__card">
            <div className="cert__thumb">
              <a href="#">
                <span className="cert__category">2nd Cert.</span>
              </a>
              <a href="#">
                <img src={Cert2} alt="" className="cert2__img" />
              </a>
            </div>
            <div className="cert__details">
              <h3 className="cert__title">React Certificate</h3>
              <div className="cert__meta">
                <span>23rd Sept, 2023</span>
                <span className="cert__dot">.</span>
                <span>Internshala</span>
              </div>
            </div>
          </div>

        {/* 3rd Certificate */}
          <div className="cert__card">
            <div className="cert__thumb">
                <span className="cert__category">3rd Cert.</span>
                <img src={Cert3} alt="Zidio" className="cert3__img" />
            </div>
            <div className="cert__details">
              <h3 className="cert__title">Certificate of Internship</h3>
              <div className="cert__meta">
                <span>20th June - 20th Sept, 2024</span>
                <span className="cert__dot">.</span>
                <span>Zidio Development pvt. ltd.</span>
              </div>
            </div>
          </div>

        {/* <div className="cert__container grid">
          <div className="cert__card">
            <div className="cert__thumb">
              <a href="#">
                <span className="cert__category">2nd Cert.</span>
              </a>
              <a href="#">
                <img src={Image2} alt="" className="cert1__img" />
              </a>
            </div>
            <div className="cert__details">
              <h3 className="cert__title">
                Machine Learning using Python Certificate
              </h3>
              <div className="cert__meta">
                <span>12 July, 2023</span>
                <span className="cert__dot">.</span>
                <span>NIELIT</span>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="cert__container grid">
          <div className="cert__card">
            <div className="cert__thumb">
              <a href="#">
                <span className="cert__category">2nd Cert.</span>
              </a>
              <a href="#">
                <img src={Image2} alt="" className="cert1__img" />
              </a>
            </div>
            <div className="cert__details">
              <h3 className="cert__title">
                Machine Learning using Python Certificate
              </h3>
              <div className="cert__meta">
                <span>12 July, 2023</span>
                <span className="cert__dot">.</span>
                <span>NIELIT</span>
              </div>
            </div>
          </div>
        </div>

        <div className="cert__container grid">
          <div className="cert__card">
            <div className="cert__thumb">
              <a href="#">
                <span className="cert__category">2nd Cert.</span>
              </a>
              <a href="#">
                <img src={Image2} alt="" className="cert1__img" />
              </a>
            </div>
            <div className="cert__details">
              <h3 className="cert__title">
                Machine Learning using Python Certificate
              </h3>
              <div className="cert__meta">
                <span>12 July, 2023</span>
                <span className="cert__dot">.</span>
                <span>NIELIT</span>
              </div>
            </div>
          </div>
        </div>

        <div className="cert__container grid">
          <div className="cert__card">
            <div className="cert__thumb">
              <a href="#">
                <span className="cert__category">2nd Cert.</span>
              </a>
              <a href="#">
                <img src={Image2} alt="" className="cert1__img" />
              </a>
            </div>
            <div className="cert__details">
              <h3 className="cert__title">
                Machine Learning using Python Certificate
              </h3>
              <div className="cert__meta">
                <span>12 July, 2023</span>
                <span className="cert__dot">.</span>
                <span>NIELIT</span>
              </div>
            </div>
          </div>
        </div>

        <div className="cert__container grid">
          <div className="cert__card">
            <div className="cert__thumb">
              <a href="#">
                <span className="cert__category">2nd Cert.</span>
              </a>
              <a href="#">
                <img src={Image2} alt="" className="cert1__img" />
              </a>
            </div>
            <div className="cert__details">
              <h3 className="cert__title">
                Machine Learning using Python Certificate
              </h3>
              <div className="cert__meta">
                <span>12 July, 2023</span>
                <span className="cert__dot">.</span>
                <span>NIELIT</span>
              </div>
            </div>
          </div>
        </div>

        <div className="cert__container grid">
          <div className="cert__card">
            <div className="cert__thumb">
              <a href="#">
                <span className="cert__category">2nd Cert.</span>
              </a>
              <a href="#">
                <img src={Image2} alt="" className="cert1__img" />
              </a>
            </div>
            <div className="cert__details">
              <h3 className="cert__title">
                Machine Learning using Python Certificate
              </h3>
              <div className="cert__meta">
                <span>12 July, 2023</span>
                <span className="cert__dot">.</span>
                <span>NIELIT</span>
              </div>
            </div>
          </div>
        </div>

        <div className="cert__container grid">
          <div className="cert__card">
            <div className="cert__thumb">
              <a href="#">
                <span className="cert__category">2nd Cert.</span>
              </a>
              <a href="#">
                <img src={Image2} alt="" className="cert1__img" />
              </a>
            </div>
            <div className="cert__details">
              <h3 className="cert__title">
                Machine Learning using Python Certificate
              </h3>
              <div className="cert__meta">
                <span>12 July, 2023</span>
                <span className="cert__dot">.</span>
                <span>NIELIT</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Certifications
