import React from 'react';
// import OfficeImage from '../../assets/office.jpg';
import { BsFillPersonCheckFill, BsFillCalendar2Fill } from 'react-icons/bs';
import { HiViewGridAdd } from 'react-icons/hi';
import Testimonials from '../../components/Testimonials/Testimonials';
import ContactBox from '../../components/ContactBox/ContactBox';
import Footer from '../../components/Footer/Footer';
import './About.css';

const About = () => {
  const years = new Date().getFullYear() - 2010;

  return (
    <div className="about-container">
      <div className="about-title">
        <h2>About Us</h2>
      </div>

      <div className="about-text">
        <h3>WebDots Digital Agency</h3>
        <div className="underline"></div>
        <p>
          We started our journey in 2010 with one purpose: To meet the needs of
          our clients. We have helped a large number of people, businessmen and
          ordinary individuals, by building simple websites as well as online
          stores. We continued our course by providing digital marketing
          services.
        </p>
        <p>
          Today we can confidently say that we have achieved our initial goal.
          Having received the best feedback from our clients, who have immediate
          support for any need regarding maintenance or changes to their
          website, we continue to be dynamic in promoting and expanding their
          business online.
        </p>
        <div className="stats">
          <div className="team-members">
            <div className="team-members-icon">
              <BsFillPersonCheckFill />
            </div>
            <div className="team-members-desc">4 team members</div>
          </div>

          <div className="years-in-business">
            <div className="years-in-business-icon">
              <BsFillCalendar2Fill />
            </div>
            <div className="years-in-business-desc">
              {years} years in business
            </div>
          </div>
          <div className="successful-projects">
            <div className="successful-projects-icon">
              <HiViewGridAdd />
            </div>
            <div className="successful-projects-desc">
              100+ successful projects
            </div>
          </div>
        </div>
      </div>

      <div className="about-path">
        <div className="about-path-title">
          <h3>What makes us special?</h3>
          <div className="underline"></div>
          <p>
            It's simple: our remarkable team and our success-driven process. Our
            process is designed for successful collaboration and efficiency.
          </p>
        </div>

        <div className="steps">
          <div className="step-1">
            <div className="step-icon">1</div>
            <div className="step-text">
              <h4>Strategy</h4>
              <p>
                We uncover your goals and mission by creating your website's
                content based on our expertise.
              </p>
            </div>
          </div>
          <div className="step-2">
            <div className="step-icon">2</div>
            <div className="step-text">
              <h4>Design - Development</h4>
              <p>
                We design and develop your website with speed and flexibility,
                staying consistent to the timeframes.
              </p>
            </div>
          </div>
        </div>

        <div className="steps">
          <div className="step-3">
            <div className="step-icon">3</div>
            <div className="step-text">
              <h4>Marketing</h4>
              <p>
                We achieve your goals in the integrated online promotion of your
                business.
              </p>
            </div>
          </div>
          <div className="step-4">
            <div className="step-icon">4</div>
            <div className="step-text">
              <h4>Maintenance</h4>
              <p>
                We are always at your side for the maintenance and update of
                your website, whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />

      <div className="contact-box-container">
        <ContactBox />
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default About;
