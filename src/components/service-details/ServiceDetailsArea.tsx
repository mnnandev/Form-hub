"use client"
import React, { useState } from 'react'

const accordioa_data = [
  {
    id: 1,
    title: 'Smart Farming Solutions',
    description: 'Our advanced technology integration helps farmers optimize crop yields through precision agriculture, automated irrigation systems, and real-time monitoring.',
  },
  {
    id: 2,
    title: 'Sustainable Agriculture',
    description: 'We implement eco-friendly farming practices that reduce environmental impact while maintaining high productivity and crop quality.',
  },
  {
    id: 3,
    title: 'Crop Management',
    description: 'Expert guidance on crop selection, rotation, and management techniques to maximize yield and minimize resource usage.',
  },
  {
    id: 4,
    title: 'Soil Health',
    description: 'Comprehensive soil analysis and improvement programs to ensure optimal growing conditions and long-term soil fertility.',
  },
  {
    id: 5,
    title: 'Agricultural Consulting',
    description: 'Professional consulting services to help farmers implement modern farming techniques and improve operational efficiency.',
  },
]

export default function ServiceDetailsArea() {

  const [isOpen, setIsOpen] = useState(0);
  
  const toggle = (i: number) => {
    setIsOpen(i === isOpen ? 0 : i);
  }


  return (
    <>
      <section className="servicevm-details-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-3 justify-content-center">
            <div className="col-lg-4">
              <div className="service-details-left">
                <div className="tab-faq faq mb-40 wow fadeInUp" data-wow-delay=".3s">
                  <div className="accordion-section d-grid gap-xxl-4 gap-lg-3 gap-2">
                    {accordioa_data.map((item, i) => (
                      <div key={i} className={`accordion-single ${isOpen === i ? "active" : ""}`}>
                        <h5 className="header-area">
                          <button
                            onClick={() => toggle(i)}
                            className="accordion-btn d-flex align-items-center d-flex position-relative w-100"
                            type="button">
                            {item.title}
                          </button>
                        </h5>
                        <div className="content-area" style={{ display: isOpen === i ? "block" : "none" }}>
                          <div className="content-body">
                            <p>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
                <div className="service-bambo-box wow fadeInUp" data-wow-delay=".4s">
                  <h3 className="text-uppercase">
                    GET IN TOUCH
                  </h3>
                  <span className="fast">
                    For immediate assistance
                  </span>
                  <a href="#" className="call">
                    <span className="call-icon">
                      <i className="fa-solid fa-phone"></i>
                    </span>
                    (+888) 123 456 765
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="service-wrapper-right ps-xl-2">
                <div className="thumb mb-30 wow fadeInUp" data-wow-delay=".3s">
                  <img src="assets/img/service/service-single2.jpg" alt="Modern Farming" />
                </div>
                <div className="cont-box wow fadeInUp" data-wow-delay=".4">
                  <h3>
                    Revolutionizing Agriculture Through Innovation
                  </h3>
                  <p>
                    At FarmHub, we combine traditional farming wisdom with cutting-edge technology to create sustainable and efficient agricultural solutions. Our comprehensive services help farmers increase productivity while reducing environmental impact. From smart irrigation systems to precision farming techniques, we're committed to transforming the future of agriculture.
                  </p>
                </div>
                <div className="working-process-details">
                  <div className="working-proces-items01 wow fadeInUp" data-wow-delay=".4s">
                    <h3 className="white-clr">
                      Soil <br /> Preparation
                    </h3>
                    <div className="details-iconbox d-center">
                      <img src="assets/img/icon/details-desert.svg" alt="Soil Preparation" />
                    </div>
                  </div>
                  <div className="working-proces-items01 wow fadeInUp" data-wow-delay=".5s">
                    <h3 className="white-clr">
                      Smart <br /> Planting
                    </h3>
                    <div className="details-iconbox d-center">
                      <img src="assets/img/icon/details-flower.svg" alt="Smart Planting" />
                    </div>
                  </div>
                </div>
                <div className="cont-box mb-40 wow fadeInUp" data-wow-delay=".6s">
                  <h3>
                    Sustainable Farming Practices
                  </h3>
                  <p>
                    Our sustainable farming approach focuses on maintaining soil health, conserving water resources, and implementing eco-friendly pest management solutions. We help farmers adopt practices that ensure long-term productivity while protecting the environment. Through our innovative techniques, we're creating a more sustainable future for agriculture.
                  </p>
                </div>
                <div className="service-single-thumb">
                  <div className="thumb wow fadeInUp" data-wow-delay=".7s">
                    <img src="assets/img/service/service-details-big.jpg" alt="Sustainable Farming" />
                  </div>
                  <div className="thumb wow fadeInUp" data-wow-delay=".8s">
                    <img src="assets/img/service/service-single1.jpg" alt="Modern Agriculture" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
