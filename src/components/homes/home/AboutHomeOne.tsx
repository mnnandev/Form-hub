"use client";
import Link from 'next/link'
import React from 'react'
import useWow from '@/hooks/use-wow';
import Image from 'next/image';

export default function AboutHomeOne(): JSX.Element {
  useWow();
  
  return (
    <>
      <section className="about-section style-v01 section-padding white-bg">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-8 order-md-0 order-1">
              <div className="about-thumv01 position-relative">
                <Image 
                  src="/assets/img/about/choose-man.png" 
                  alt="Modern Farmer" 
                  className="mimg"
                  width={500}
                  height={600}
                  style={{ opacity: 1 }}
                />
                <Image 
                  src="/assets/img/about/f-food.png" 
                  alt="Organic Produce" 
                  className="f-food wow fadeInLeft" 
                  data-wow-delay=".3s"
                  width={200}
                  height={200}
                  style={{ opacity: 1 }}
                />
                <Image 
                  src="/assets/img/about/l-food.png" 
                  alt="Smart Farming" 
                  className="l-food wow fadeInLeft" 
                  data-wow-delay=".5s"
                  width={200}
                  height={200}
                  style={{ opacity: 1 }}
                />
                <Image 
                  src="/assets/img/about/t-food.png" 
                  alt="Sustainable Agriculture" 
                  className="t-food wow fadeInLeft" 
                  data-wow-delay=".7s"
                  width={200}
                  height={200}
                  style={{ opacity: 1 }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-8">
              <div className="about-contentv01">
                <div className="section-title mb-40">
                  <h5 className="p1-clr text-uppercase wow fadeInLeft" data-wow-delay="0.4s" style={{ opacity: 1, color: '#000', marginBottom: '20px' }}>
                    Welcome to FarmHub
                  </h5>
                  <h2 className="wow fadeInDown" data-wow-delay=".3s" style={{ opacity: 1, color: '#000', marginBottom: '25px' }}>
                    Revolutionizing Agriculture Through Innovation
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s" style={{ opacity: 1, color: '#000', marginBottom: '35px', lineHeight: '1.8' }}>
                    FarmHub is at the forefront of agricultural innovation, combining sustainable practices 
                    with cutting-edge technology. Our mission is to transform traditional farming into a 
                    more efficient, eco-friendly, and productive industry for future generations.
                  </p>
                </div>
                <div className="about-feature-list" style={{ marginBottom: '40px' }}>
                  <div className="feature-item d-flex align-items-center wow fadeInUp" data-wow-delay=".5s" style={{ opacity: 1, marginBottom: '25px' }}>
                    <div className="content" style={{ width: '100%' }}>
                      <h5 style={{ color: '#000', marginBottom: '12px', fontSize: '20px' }}>Smart Technology Integration</h5>
                      <p style={{ color: '#000', marginBottom: 0, lineHeight: '1.6' }}>Leveraging IoT, AI, and data analytics to optimize farming operations and increase efficiency</p>
                    </div>
                  </div>
                  <div className="feature-item d-flex align-items-center wow fadeInUp" data-wow-delay=".6s" style={{ opacity: 1, marginBottom: '25px' }}>
                    <div className="content" style={{ width: '100%' }}>
                      <h5 style={{ color: '#000', marginBottom: '12px', fontSize: '20px' }}>Eco-Conscious Practices</h5>
                      <p style={{ color: '#000', marginBottom: 0, lineHeight: '1.6' }}>Implementing sustainable methods that reduce environmental impact while maintaining productivity</p>
                    </div>
                  </div>
                  <div className="feature-item d-flex align-items-center wow fadeInUp" data-wow-delay=".7s" style={{ opacity: 1, marginBottom: '25px' }}>
                    <div className="content" style={{ width: '100%' }}>
                      <h5 style={{ color: '#000', marginBottom: '12px', fontSize: '20px' }}>Premium Quality Standards</h5>
                      <p style={{ color: '#000', marginBottom: 0, lineHeight: '1.6' }}>Ensuring the highest quality produce through rigorous quality control and certification processes</p>
                    </div>
                  </div>
                </div>
                <div className="about-stats mt-4 wow fadeInUp" data-wow-delay=".8s" style={{ opacity: 1, marginBottom: '35px' }}>
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="stat-item">
                        <h3 style={{ color: '#000', marginBottom: '8px', fontSize: '32px' }}>15+</h3>
                        <p style={{ color: '#000', marginBottom: 0 }}>Years Experience</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="stat-item">
                        <h3 style={{ color: '#000', marginBottom: '8px', fontSize: '32px' }}>1000+</h3>
                        <p style={{ color: '#000', marginBottom: 0 }}>Happy Farmers</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/about" className="cmn-btn wow fadeInUp" data-wow-delay=".9s" style={{ opacity: 1, display: 'inline-block', padding: '15px 30px', fontSize: '16px' }}>
                  Discover More
                  <i className="fa-solid fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
