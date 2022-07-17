import React, { useState, useEffect } from 'react';
import { data } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import './Testimonials.css';

const Testimonials = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="testimonials-container">
      <div className="testimonials-title">
        <h3>Testimonials</h3>
      </div>

      <div className="quote-right">
        <FaQuoteRight />
      </div>

      <div className="center">
        {people.map((person, personIndex) => {
          const { id, name, company, quote } = person;

          let position = 'nextSlide';

          if (personIndex === index) {
            position = 'activeSlide';
          }

          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article key={id} className={position}>
              <p>{quote}</p>
              <h4>{name}</h4>
              <h5>{company}</h5>
            </article>
          );
        })}

        <div className="prev" onClick={() => setIndex(index - 1)}>
          <AiOutlineDoubleLeft />
        </div>

        <div className="next" onClick={() => setIndex(index + 1)}>
          <AiOutlineDoubleRight />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
