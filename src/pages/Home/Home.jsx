import React from 'react';
import LogoLarge from '../../assets/logo-large.png';
import { Link } from 'react-router-dom';
import { FaRegLightbulb } from 'react-icons/fa';
import { BsPencilSquare, BsTools, BsGraphUp } from 'react-icons/bs';
import Button from '../../components/Button/Button';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="left">
        <div className="line-and-text">
          <div className="line"></div>
          <div className="text">
            <div className="webdots-and-works">
              <h1 className="webdots">WebDots</h1>
              <Link to="/our-works" className="home-works">
                View our
                <br />
                Works
              </Link>
            </div>
            <div className="digital-agency">
              <h2>Digital Agency</h2>
            </div>
            <div className="description">
              <p>
                We leverage years of experience in online business and help our
                clients achieve their goals.
              </p>
            </div>
          </div>
        </div>

        <div className="home-links">
          <div className="strategy">
            <FaRegLightbulb />
            <p>Strategy</p>
          </div>
          <div className="design">
            <BsPencilSquare />
            <p>Design</p>
          </div>
          <div className="development">
            <BsTools />
            <p>Development</p>
          </div>
          <div className="marketing">
            <BsGraphUp />
            <p>Marketing</p>
          </div>
        </div>

        <div className="btn-who-we-are">
          <Button path="/about" darkBg={true}>
            Who we are
          </Button>
        </div>
      </div>

      <div className="right">
        <div className="image">
          <img src={LogoLarge} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
