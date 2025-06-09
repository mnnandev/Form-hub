"use client";
import Link from 'next/link'
import React from 'react'
import useWow from '@/hooks/use-wow';

export default function AboutHomeTwo(): JSX.Element {
  useWow();
  
  return (
    <>
      <section className="about-section style-v02 section-padding white-bg">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-8">
              <div className="about-contentv02">
                <div className="section-title mb-40">
                  <h5 className="p1-clr text-uppercase wow fadeInLeft" data-wow-delay="0.4s">
                    About Us
                  </h5>
                  <h2 className="wow fadeInDown" data-wow-delay=".3s">
                    We are the best agriculture farming company
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dict facisem. Imperdiet
                    massa turpis sit Lorem ipsum
                    dolor sit amet consectetur. Amet the lectus mi ultricies dictum facilisis sem. Imperdiet
                  </p>
                </div>
                <div className="about-feature-list">
                  <div className="feature-item d-flex align-items-center wow fadeInUp" data-wow-delay=".5s">
                    <div className="icon">
                      <img src="assets/img/icon/feature-icon1.svg" alt="img" />
                    </div>
                    <div className="content">
                      <h5>Organic Farming</h5>
                      <p>Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies</p>
                    </div>
                  </div>
                  <div className="feature-item d-flex align-items-center wow fadeInUp" data-wow-delay=".6s">
                    <div className="icon">
                      <img src="assets/img/icon/feature-icon2.svg" alt="img" />
                    </div>
                    <div className="content">
                      <h5>Modern Equipment</h5>
                      <p>Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies</p>
                    </div>
                  </div>
                  <div className="feature-item d-flex align-items-center wow fadeInUp" data-wow-delay=".7s">
                    <div className="icon">
                      <img src="assets/img/icon/feature-icon3.svg" alt="img" />
                    </div>
                    <div className="content">
                      <h5>Quality Products</h5>
                      <p>Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies</p>
                    </div>
                  </div>
                </div>
                <Link href="/about" className="cmn-btn wow fadeInUp" data-wow-delay=".8s">
                  Read More
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-8 order-md-0 order-1">
              <div className="about-thumv02 position-relative">
                <img src="assets/img/about/choose-man.png" alt="img" className="mimg" />
                <img src="assets/img/about/f-food.png" alt="img" className="f-food wow fadeInRight" data-wow-delay=".3s" />
                <img src="assets/img/about/l-food.png" alt="img" className="l-food wow fadeInRight" data-wow-delay=".5s" />
                <img src="assets/img/about/t-food.png" alt="img" className="t-food wow fadeInRight" data-wow-delay=".7s" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 