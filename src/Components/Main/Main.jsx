import React from 'react'
import './Main.css'
import { Link } from 'react-router-dom'

const Main = () => {

  return (
    <div>
      <div className="navstdhome">
        <div className="navfirst">
          <i class="fa fa-graduation-cap" aria-hidden="true"></i>
          <h5>ACADEMICS</h5>
        </div>
        <div className="navmid">
          <Link to={'/home'}><h6 id='homeactive'>HOME</h6></Link>
          <h6>PAGES</h6>
          <h6>COURSES</h6>
          <h6>RESEARCH</h6>
          <h6>NEWS</h6>
          <h6>GALLERY</h6>
          <h6>CONTACT</h6>
        </div>
        <div className="navlast">
          <Link to='/studentlogin'><button>LOGIN</button></Link>
        </div>

      </div>
      <div className="banner">
        <div className="backgroundimg">
          <h1>BEST EDUCATION FOR DEVELOPERS</h1>
          <p>Software developers create software to meet user needs by employing diagrams and models, writing code, and ensuring overall functionality. These professionals design, build, and implement computer programs and applications.</p>
        </div>

      </div>


      <div className="welcome">
        <h1>Welcome To Academics</h1>
        <p>Software developers create These professionals design, build, and implement computer programs and applications.</p>
      </div>


      <div className="firstimg">
        <div className="description">
          <div className="desfirst">
            <div className="textt">
              <h3>Scholarship Facility</h3>
              <p>Software developers create These professionals design</p>
            </div>
            <div className="icon">
              <i class="fa fa-graduation-cap" aria-hidden="true"></i>
            </div>
          </div>
          <div className="desfirst">
            <div className="textt">
              <h3>Skilled Lectures</h3>
              <p>Software developers create These professionals design</p>
            </div>
            <div className="icon">
            <i class="fa fa-user" aria-hidden="true"></i>
            </div>
          </div>
          <div className="desfirst">
            <div className="textt">
              <h3>Book Library & Store</h3>
              <p>Software developers create These professionals design</p>
            </div>
            <div className="icon">
            <i class="fa fa-book" aria-hidden="true"></i>
            </div>
          </div>

        </div>
      </div>


      {/* <h1>OL circle cards</h1> */}
      <ol>
        <li >
          <div class="icon"><i class="fa fa-university" aria-hidden="true"></i></div>
          <div class="title">Best Education</div>
          <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
        </li>
        <li >
          <div class="icon"><i class="fa fa-thumbs-up" aria-hidden="true"></i></div>
          <div class="title">Top Management</div>
          <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
        </li>
        <li >
          <div class="icon"><i class="fa fa-graduation-cap" aria-hidden="true"></i>
</div>
          <div class="title">Skilled Instructors</div>
          <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
        </li>
        <li >
          <div class="icon"><i class="fa fa-globe" aria-hidden="true"></i></div>
          <div class="title">Online Classes</div>
          <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
        </li>
        <li >
          <div class="icon"><i class="fa fa-home" aria-hidden="true"></i></div>
          <div class="title">Home Projects</div>
          <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
        </li>
        <li >
          <div class="icon"><i class="fa fa-book" aria-hidden="true"></i></div>
          <div class="title">Book Library</div>
          <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
        </li>
      </ol>
      <div class="credits">
        <a target="_blank" href="https://www.freepik.com/premium-vector/vector-infographic-design-template-with-icons-8-options-steps_10571883.htm">inspired by</a>
      </div>

     



     <div className="cors">
     <h3> Choose Your Course</h3>
     
     </div>
     


<footer className="kilimanjaro_area">
      
        <div className="foo_top_header_one section_padding_100_70">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="kilimanjaro_part">
                            <h5>About Us</h5>
                            <p>It includes rich features & contents. It's designed & developed based on One Page/ Multi-page Layout,blog themes,world press themes and blogspot. You can use any layout from any demo anywhere.</p>
                            <p>webblogoverflow is completely creative, clean & 100% responsive website. Put your business into next level with Webublogoverflow.</p>
                        </div>
                        <div className="kilimanjaro_part m-top-15">
                            <h5>Social Links</h5>
                            <ul className="kilimanjaro_social_links">
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i> Facebook</a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</a></li>
                                <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i> Pinterest</a></li>
                                <li><a href="#"><i className="fa fa-youtube" aria-hidden="true"></i> YouTube</a></li>
                                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i> Linkedin</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="kilimanjaro_part">
                            <h5>Tags Widget</h5>
                            <ul className=" kilimanjaro_widget">
                                <li><a href="#">Classy</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Creative</a></li>
                                <li><a href="#">One Page</a></li>
                                <li><a href="#">Multipurpose</a></li>
                                <li><a href="#">Minimal</a></li>
                                <li><a href="#">Classic</a></li>
                                <li><a href="#">Medical</a></li>
                            </ul>
                        </div>

                        <div className="kilimanjaro_part m-top-15">
                            <h5>Important Links</h5>
                            <ul className="kilimanjaro_links">
                                <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>Terms & Conditions</a></li>
                                <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>About Licences</a></li>
                                <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>Help & Support</a></li>
                                <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>Careers</a></li>
                                <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>Privacy Policy</a></li>
                                <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>Community & Forum</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="kilimanjaro_part">
                            <h5>Latest News</h5>
                            <div className="kilimanjaro_blog_area">
                                <div className="kilimanjaro_thumb">
								<img className="img-fluid" src="https://3.bp.blogspot.com/--C1wpaf_S4M/W7V__10nRoI/AAAAAAAAK24/1NSfapuYSIY0f0wzXY9NgoH0FjQLT07YACKgBGAs/s1600/maxresdefault.jpg" alt=""/>

                                </div>
                                <a href="#">Your Blog Title Goes Here</a>
                                <p className="kilimanjaro_date">21 Jan 2018</p>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                            </div>
                            <div className="kilimanjaro_blog_area">
                                <div className="kilimanjaro_thumb">
								<img className="img-fluid" src="https://3.bp.blogspot.com/--C1wpaf_S4M/W7V__10nRoI/AAAAAAAAK24/1NSfapuYSIY0f0wzXY9NgoH0FjQLT07YACKgBGAs/s1600/maxresdefault.jpg" alt=""/>
                                </div>
                                <a href="#">Your Blog Title Goes Here</a>
                                <p className="kilimanjaro_date">21 Jan 2018</p>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                            </div>
                            <div className="kilimanjaro_blog_area">
                                <div className="kilimanjaro_thumb">
								<img className="img-fluid" src="https://3.bp.blogspot.com/--C1wpaf_S4M/W7V__10nRoI/AAAAAAAAK24/1NSfapuYSIY0f0wzXY9NgoH0FjQLT07YACKgBGAs/s1600/maxresdefault.jpg" alt=""/>
                                </div>
                                <a href="#">Your Blog Title Goes Here</a>
                                <p className="kilimanjaro_date">21 Jan 2018</p>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="kilimanjaro_part">
                            <h5>Quick Contact</h5>
                            <div className="kilimanjaro_single_contact_info">
                                <h5>Phone:</h5>
                                <p>+255 789 54 50 40 <br/> +2255 766 90 94 00</p>
                            </div>
                            <div className="kilimanjaro_single_contact_info">
                                <h5>Email:</h5>
                                <p>support@webblogoverflow.com <br/> luckmoshy@gmail.com</p>
                            </div>
                        </div>
                        <div className="kilimanjaro_part">
                            <h5>Latest Works</h5>
                            <div className="kilimanjaro_works">
                                <a className="kilimanjaro_works_img" href="img/gallery/1.jpg"><img src="img/gallery/1.jpg" alt=""/></a>
                                <a className="kilimanjaro_works_img" href="img/gallery/4.jpg"><img src="img/gallery/4.jpg" alt=""/></a>
                                <a className="kilimanjaro_works_img" href="img/gallery/5.jpg"><img src="img/gallery/5.jpg" alt=""/></a>
                                <a className="kilimanjaro_works_img" href="img/gallery/7.jpg"><img src="img/gallery/7.jpg" alt=""/></a>
                                <a className="kilimanjaro_works_img" href="img/gallery/10.jpg"><img src="img/gallery/10.jpg" alt=""/></a>
                                <a className="kilimanjaro_works_img" href="img/gallery/11.jpg"><img src="img/gallery/11.jpg" alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className=" kilimanjaro_header_one section_padding_10 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>© All Rights Reserved by <a href="#">Webublogoverflow.blogspot -(with all love)<i className="fa fa-love"></i></a></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Main
