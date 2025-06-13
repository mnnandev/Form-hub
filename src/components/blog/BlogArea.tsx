"use client"
import Link from 'next/link'
import React from 'react'

export default function BlogArea() {
  return (
    <>
      <section className="blog-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-4 justify-content-center">
            <div className="col-lg-8">
              <div className="blog-details-big pe-xl-2">
                <div className="blog-details-leftitem wow fadeInUp" data-wow-delay=".2s">
                  <div className="thumb position-relative">
                    <img src="assets/img/blog/blog-big01.jpg" alt="Smart Farming Technology" />
                    <span className="date-badge">
                      Jan 22
                    </span>
                  </div>
                  <div className="content">
                    <ul className="comment-inner">
                      <li>
                        <a href="#"><i className="fa-regular fa-comments"></i> Comments (05)</a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-regular fa-user"></i> By FarmHub Team</a>
                      </li>
                    </ul>
                    <Link href="/blog-details" className="titles">
                      Revolutionizing Agriculture with Smart Technology
                    </Link>
                    <p>
                      Discover how cutting-edge technology is transforming traditional farming methods. From IoT sensors to AI-powered analytics, learn how smart farming solutions are increasing efficiency and sustainability in modern agriculture.
                    </p>
                    <Link href="/blog-details" className="cmn-btn primary-border">
                      Read More
                      <i className="fa-solid fa-arrow-right p1-clr"></i>
                    </Link>
                  </div>
                </div>
                <div className="blog-details-leftitem wow fadeInUp" data-wow-delay=".3s">
                  <div className="thumb position-relative">
                    <img src="assets/img/blog/blog-big02.jpg" alt="Sustainable Farming Practices" />
                    <span className="date-badge">
                      Jan 20
                    </span>
                  </div>
                  <div className="content">
                    <ul className="comment-inner">
                      <li>
                        <a href="#"><i className="fa-regular fa-comments"></i> Comments (03)</a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-regular fa-user"></i> By FarmHub Team</a>
                      </li>
                    </ul>
                    <Link href="/blog-details" className="titles">
                      Sustainable Agriculture: A Path to Food Security
                    </Link>
                    <p>
                      Explore the importance of sustainable farming practices in ensuring long-term food security. Learn about eco-friendly methods that protect the environment while maintaining high crop yields and supporting local communities.
                    </p>
                    <Link href="/blog-details" className="cmn-btn primary-border">
                      Read More
                      <i className="fa-solid fa-arrow-right p1-clr"></i>
                    </Link>
                  </div>
                </div>
                <div className="blog-details-leftitem wow fadeInUp" data-wow-delay=".4s">
                  <div className="thumb position-relative">
                    <img src="assets/img/blog/blog-big03.jpg" alt="Organic Farming Methods" />
                    <span className="date-badge">
                      Jan 18
                    </span>
                  </div>
                  <div className="content">
                    <ul className="comment-inner">
                      <li>
                        <a href="#"><i className="fa-regular fa-comments"></i> Comments (04)</a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-regular fa-user"></i> By FarmHub Team</a>
                      </li>
                    </ul>
                    <Link href="/blog-details" className="titles">
                      The Future of Organic Farming
                    </Link>
                    <p>
                      Dive into the world of organic farming and its growing importance in modern agriculture. Understand how natural methods and traditional wisdom are being combined with modern techniques to create healthier, more sustainable food systems.
                    </p>
                    <Link href="/blog-details" className="cmn-btn primary-border">
                      Read More
                      <i className="fa-solid fa-arrow-right p1-clr"></i>
                    </Link>
                  </div>
                </div>
                <div className="blog-details-leftitem wow fadeInUp" data-wow-delay=".5s">
                  <div className="thumb position-relative">
                    <img src="assets/img/blog/blog-big04.jpg" alt="Precision Agriculture" />
                    <span className="date-badge">
                      Jan 15
                    </span>
                  </div>
                  <div className="content">
                    <ul className="comment-inner">
                      <li>
                        <a href="#"><i className="fa-regular fa-comments"></i> Comments (06)</a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-regular fa-user"></i> By FarmHub Team</a>
                      </li>
                    </ul>
                    <Link href="/blog-details" className="titles">
                      Precision Agriculture: Maximizing Efficiency
                    </Link>
                    <p>
                      Learn about the latest advancements in precision agriculture and how they're helping farmers optimize resource usage. From GPS-guided equipment to data-driven decision making, discover how technology is revolutionizing farming efficiency.
                    </p>
                    <Link href="/blog-details" className="cmn-btn primary-border">
                      Read More
                      <i className="fa-solid fa-arrow-right p1-clr"></i>
                    </Link>
                  </div>
                </div>
                <div className="blog-details-leftitem wow fadeInUp" data-wow-delay=".6s">
                  <div className="thumb position-relative">
                    <img src="assets/img/blog/blog-big05.jpg" alt="Agricultural Innovation" />
                    <span className="date-badge">
                      Jan 12
                    </span>
                  </div>
                  <div className="content">
                    <ul className="comment-inner">
                      <li>
                        <a href="#"><i className="fa-regular fa-comments"></i> Comments (04)</a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-regular fa-user"></i> By FarmHub Team</a>
                      </li>
                    </ul>
                    <Link href="/blog-details" className="titles">
                      Innovation in Agricultural Technology
                    </Link>
                    <p>
                      Explore the cutting-edge innovations shaping the future of agriculture. From vertical farming to automated systems, discover how new technologies are addressing global food challenges and creating more sustainable farming practices.
                    </p>
                    <Link href="/blog-details" className="cmn-btn primary-border">
                      Read More
                      <i className="fa-solid fa-arrow-right p1-clr"></i>
                    </Link>
                  </div>
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
