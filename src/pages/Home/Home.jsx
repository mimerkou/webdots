import React from 'react';
import LogoLarge from '../../assets/logo-large.png';
import { Link } from 'react-router-dom';
import { FaRegLightbulb } from 'react-icons/fa';
import { BsPencilSquare, BsTools, BsGraphUp } from 'react-icons/bs';

// import {
//   HomeContainer,
//   Left,
//   LineAndText,
//   Line,
//   Text,
//   WebdotsAndWorks,
//   Webdots,
//   DigitalAgency,
//   Description,
//   HomeLinks,
//   Right,
//   ImageContainer,
//   Image,
// } from './HomeElements';

import './Home.css';

const Home = () => {
  return (
    // <HomeContainer>
    //   <Left>
    //     <LineAndText>
    //       <Line />
    //       <Text>
    //         <WebdotsAndWorks>
    //           <Webdots>WebDots</Webdots>
    //           <Link to="/our-works" className="home-works-btn">
    //             View our
    //             <br />
    //             Works
    //           </Link>
    //         </WebdotsAndWorks>
    //         <DigitalAgency>Digital Agency</DigitalAgency>
    //         <Description>
    //           We leverage years of experience in online business and help our
    //           clients achieve their goals.
    //         </Description>
    //       </Text>
    //     </LineAndText>

    //     <HomeLinks>
    //       <Link to="/" className="strategy">
    //         <FaRegLightbulb />
    //         <p>Strategy</p>
    //       </Link>
    //       <Link to="/" className="design">
    //         <BsPencilSquare />
    //         <p>Design</p>
    //       </Link>
    //       <Link to="/" className="development">
    //         <BsTools />
    //         <p>Development</p>
    //       </Link>
    //       <Link to="/" className="marketing">
    //         <BsGraphUp />
    //         <p>Marketing</p>
    //       </Link>
    //     </HomeLinks>
    //   </Left>

    //   <Right>
    //     <ImageContainer>
    //       <Image src={LogoLarge} alt="Logo" />
    //     </ImageContainer>
    //   </Right>
    // </HomeContainer>

    <div className="home-container">
      <div className="left">
        <div className="line-and-text">
          <div className="line"></div>
          <div className="text">
            <div className="webdots-and-works">
              <h1 className="webdots">WebDots</h1>
              {/* <Link to="/works" className="home-works">
                Works
              </Link> */}
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
          <Link to="/" className="strategy">
            <FaRegLightbulb />
            <p>Strategy</p>
          </Link>
          <Link to="/" className="design">
            <BsPencilSquare />
            <p>Design</p>
          </Link>
          <Link to="/" className="development">
            <BsTools />
            <p>Development</p>
          </Link>
          <Link to="/" className="marketing">
            <BsGraphUp />
            <p>Marketing</p>
          </Link>
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
