import React from 'react';
import LogoLarge from '../../assets/logo-large.png';
import { Link } from 'react-router-dom';
import { FaRegLightbulb } from 'react-icons/fa';
import { BsPencilSquare, BsTools, BsGraphUp } from 'react-icons/bs';

import {
  HomeContainer,
  Left,
  LineAndText,
  Line,
  Text,
  WebdotsAndWorks,
  Webdots,
  DigitalAgency,
  Description,
  HomeLinks,
  Right,
  ImageContainer,
  Image,
} from './HomeElements';

import './Home.css';

const Home = () => {
  return (
    <HomeContainer>
      <Left>
        <LineAndText>
          <Line />
          <Text>
            <WebdotsAndWorks>
              <Webdots>WebDots</Webdots>
              <Link to="/works" className="home-works">
                View our
                <br />
                Works
              </Link>
            </WebdotsAndWorks>
            <DigitalAgency>Digital Agency</DigitalAgency>
            <Description>
              We leverage years of experience in online business and help our
              clients achieve their goals.
            </Description>
          </Text>
        </LineAndText>

        <HomeLinks>
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
        </HomeLinks>
      </Left>

      <Right>
        <ImageContainer>
          <Image src={LogoLarge} alt="Logo" />
        </ImageContainer>
      </Right>
    </HomeContainer>
  );
};

export default Home;
