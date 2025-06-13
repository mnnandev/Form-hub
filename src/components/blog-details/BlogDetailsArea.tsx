"use client"

import NiceSelect from '@/ui/NiceSelect'
import Link from 'next/link'
import React from 'react'

export default function BlogDetailsArea() {
  const selectHandler = (e: unknown) => { };

  return (
    <>
      <section className="blog-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-4 justify-content-center">
            <div className="col-lg-8">
              <div className="blog-post-details">
                <div className="explore-details-content">
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">
                    Sustainable Agriculture: The Future of Farming
                  </h2>
                  <ul className="comment-inner wow fadeInUp" data-wow-delay=".3s">
                    <li>
                      <a href="#"><i className="fa-regular fa-user"></i> By FarmHub Team</a>
                    </li>
                    <li>
                      <a href="#"><i className="fa-solid fa-folder-open"></i> Sustainable Farming</a>
                    </li>
                    <li>
                      <a href="#"><i className="fa-solid fa-calendar-days"></i> October 19, 2024</a>
                    </li>
                  </ul>
                  <p className="fist-pra wow fadeInUp" data-wow-delay=".4s">
                    In today's rapidly evolving agricultural landscape, sustainable farming practices have become more crucial than ever. As we face global challenges like climate change and food security, innovative farming methods are essential for creating a resilient and eco-friendly food system.
                  </p>
                  <div className="thumb w-100 mb-40 wow fadeInUp" data-wow-delay=".4s">
                    <img src="assets/img/blog/bd1.jpg" alt="Sustainable Farming Practices" className="w-100" />
                  </div>
                  <p className="fist-pra wow fadeInUp" data-wow-delay=".5s">
                    Modern sustainable agriculture combines traditional farming wisdom with cutting-edge technology. From precision irrigation systems to organic pest management, farmers are adopting practices that protect the environment while maintaining high crop yields. These methods not only reduce the carbon footprint but also ensure long-term soil health and biodiversity.
                  </p>
                  <p className="fist-pra wow fadeInUp" data-wow-delay=".6s">
                    The integration of smart farming technologies has revolutionized how we approach agriculture. IoT sensors, drone monitoring, and AI-powered analytics help farmers make data-driven decisions, optimizing resource usage and minimizing waste. This technological advancement is crucial for meeting the growing global food demand sustainably.
                  </p>
                  <div className="quote-box wow fadeInUp" data-wow-delay=".7s">
                    <img src="assets/img/icon/quote-leftp2.svg" alt="Quote" />
                    <p>
                      "Sustainable agriculture is not just about growing food; it's about nurturing the land, supporting communities, and securing our future. Every seed we plant today is an investment in tomorrow's harvest."
                    </p>
                    <h5>
                      Sarah Johnson, Agricultural Expert
                    </h5>
                  </div>
                  <h3 className="wow fadeInUp" data-wow-delay=".3s">
                    The Impact of Sustainable Practices
                  </h3>
                  <p className="fist-pra wow fadeInUp" data-wow-delay=".4s">
                    The benefits of sustainable farming extend far beyond the field. By implementing eco-friendly practices, farmers contribute to water conservation, reduce soil erosion, and promote biodiversity. These efforts create a positive ripple effect throughout the ecosystem, benefiting both the environment and local communities.
                  </p>
                  <div className="blog-single-thumb mb-30 wow fadeInUp" data-wow-delay=".5s">
                    <div className="thumb w-100">
                      <img src="assets/img/blog/bd-single1.jpg" alt="Smart Farming Technology" className="w-100" />
                    </div>
                    <div className="thumb w-100">
                      <img src="assets/img/blog/bd-single2.jpg" alt="Organic Farming Methods" className="w-100" />
                    </div>
                  </div>
                  <p className="fist-pra wow fadeInUp" data-wow-delay=".6s">
                    As we look to the future, the role of sustainable agriculture becomes increasingly vital. By embracing innovation and traditional knowledge, we can create a farming system that nourishes both people and the planet. The journey towards sustainable agriculture is not just a choice—it's a necessity for ensuring food security and environmental preservation for generations to come.
                  </p>
                  <p className="wow fadeInUp" data-wow-delay=".7s">
                    Join us in exploring the transformative power of sustainable agriculture and discover how you can be part of this important movement towards a greener, more sustainable future.
                  </p>
                </div>
                <div className="component-arrows mt-40 mb-40 wow fadeInUp" data-wow-delay=".5s">
                  <div className="arrow-item">
                    <Link href="/blog-details" className="arrows">
                      <i className="fa-solid fa-arrow-left"></i>
                    </Link>
                    <h5>
                      Smart Farming <br /> Solutions
                    </h5>
                  </div>
                  <span className="cusline"></span>
                  <div className="arrow-item">
                    <h5 className="text-end">
                      Organic <br /> Agriculture
                    </h5>
                    <a href="#" className="arrows active">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="replay-single-box wow fadeInUp" data-wow-delay=".6s">
                  <img src="assets/img/blog/reply-kishan.png" alt="Expert Comment" className="krishana" />
                  <div className="content">
                    <div className="man-info-area mb-20">
                      <div className="man-info">
                        <h3>
                          Dr. Michael Chen
                        </h3>
                        <span>
                          Agricultural Scientist
                        </span>
                      </div>
                      <button className="replys" type="button">
                        Reply
                      </button>
                    </div>
                    <p>
                      "The integration of technology and sustainable practices is revolutionizing modern agriculture. This approach not only increases efficiency but also ensures environmental preservation for future generations."
                    </p>
                  </div>
                </div>
                <div className="maybe-liking wow fadeInUp" data-wow-delay=".8s">
                  <h3 className="mb-40">
                    You May Also Like
                  </h3>
                  <div className="thumb mb-30">
                    <img src="assets/img/blog/bd2.jpg" alt="Related Article" />
                  </div>
                  <h3 className="p900-clr mb-20">
                    Smart Technology in Modern Agriculture
                  </h3>
                  <p>
                    Discover how cutting-edge technology is transforming traditional farming methods, making agriculture more efficient and sustainable than ever before.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-right-bar mt-lg-0 mt-4">
                <div className="box common-style-box wow fadeInUp" data-wow-delay=".2s">
                  <div className="wid-title wow fadeInLeft" data-wow-delay=".3s">
                    <h3>Search</h3>
                  </div>
                  <div className="search-widget" data-aos="zoom-in" data-aos-duration="1400">
                    <form onSubmit={e => e.preventDefault()}>
                      <input type="text" placeholder="Search articles..." />
                      <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                  </div>
                </div>
                <div className="box common-style-box wow fadeInUp" data-wow-delay=".4s">
                  <div className="wid-title wow fadeInLeft" data-wow-delay=".3s">
                    <h3>Latest Articles</h3>
                  </div>
                  <div className="recent-postwrap">
                    <div className="recent-items">
                      <div className="recent-thumb">
                        <img src="assets/img/blog/details-small1.png" alt="Latest Article" />
                      </div>
                      <div className="recent-content">
                        <span className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-calendar-days"></i> Jan 10, 2024
                        </span>
                        <Link href="/blog-details">
                          Smart Irrigation Systems
                        </Link>
                      </div>
                    </div>
                    <div className="recent-items">
                      <div className="recent-thumb">
                        <img src="assets/img/blog/details-small2.png" alt="Latest Article" />
                      </div>
                      <div className="recent-content">
                        <span className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-calendar-days"></i> Jan 10, 2024
                        </span>
                        <Link href="/blog-details">
                          Organic Pest Control
                        </Link>
                      </div>
                    </div>
                    <div className="recent-items">
                      <div className="recent-thumb">
                        <img src="assets/img/blog/details-small13.png" alt="Latest Article" />
                      </div>
                      <div className="recent-content">
                        <span className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-calendar-days"></i> Jan 10, 2024
                        </span>
                        <Link href="/blog-details">
                          Soil Health Management
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box common-style-box wow fadeInUp" data-wow-delay=".5s">
                  <div className="wid-title wow fadeInLeft" data-wow-delay=".3s">
                    <h3>Categories</h3>
                  </div>
                  <div className="tagwrap">
                    <Link href="/blog-details">Smart Farming</Link>
                    <Link href="/blog-details">Organic</Link>
                    <Link href="/blog-details">Technology</Link>
                    <Link href="/blog-details">Sustainability</Link>
                    <Link href="/blog-details">Innovation</Link>
                    <Link href="/blog-details">Research</Link>
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
