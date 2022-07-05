import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';

const Box = (props) => {
  const el = useRef();
  const title = useRef();
  const subtext = useRef();
  const btn = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();
  const { data } = props;

  useEffect(() => {
    console.log("hello", data.boxImages[0].url)
    tl.current = gsap
      .timeline({ paused: true })
      .to(el.current, {
        y: -15,
        duration: 0.05,
        boxShadow: '0px 2px 18px 0px rgba(11, 11, 11, 0.56)',
      })
      .to(title.current, { color: 'black', duration: 0.05 })
      .from(
        subtext.current,
        { opacity: 0, ease: Power4.easeOut, duration: 0.5 },
        '>'
      )
      .to(
        btn.current,
        { opacity: 1, ease: Power4.easeOut, duration: 0.01 },
        '>'
      );
  }, []);


  if (data.boxTitle) {
    return (
      <div
        className="card"
        ref={el}
        onMouseEnter={() => tl.current.play()}
        onMouseLeave={() => tl.current.reverse()}

      >
        <div className="box"
        >
          <h2
            className="card-title"
            ref={title}
          >
            {data.boxTitle}
          </h2>
          <h4
            className="card-subtext"
            ref={subtext}
          >
            {data.boxSubtext}
          </h4>
        </div>
        <img data-src={data.boxImages[0].url} alt="box image" className='lazyload box-image' />
        <div className="btn-group">
          <a href={data.buttonUrl}>
            <button
              className="card-btn but"
              ref={btn}
            >
              {data.boxButton}
            </button>
          </a>
        </div>
      </div>
    );
  };
}

export default Box;
