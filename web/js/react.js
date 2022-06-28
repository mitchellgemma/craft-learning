import React from "react";
import { render } from 'react-dom';
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { request, gql } from 'graphql-request'


const endpoint = "https://bonfire-craft.nitro/api";

const boxQuery = gql`
    {entries {
    ... on boxes_boxes_Entry {
      boxTitle
      boxSubtext
      boxCategory {
        id
      }
      boxButton
      buttonUrl
    }
  }}`

const Box = () => {
    const el = useRef();
    const title = useRef();
    const subtext = useRef();
    const btn = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();
    const [data, setData] = useState(null)

    
    useEffect(() => {            
        request(endpoint, boxQuery).then((res) => setData(res.entries))
            tl.current = gsap.timeline({paused: true})
            .to(el.current, {y: -15, duration: .05, boxShadow: '0px 2px 18px 0px rgba(11, 11, 11, 0.56)'})
            .to(title.current, {color: 'black', duration: .05})
            .from(subtext.current, {opacity: 0, ease: Power4.easeOut, duration: .5}, ">")
            .to(btn.current, {opacity: 1, ease: Power4.easeOut, duration: .01}, ">")
       }, []);
    
    if (!data){
        return(
            <div>Loading...</div>
        )
    }
    
    
    
    if (data){
            return (   
                   data.map((box) => {
                       return (
                           <div className="card" ref={el} onMouseEnter={() => tl.current.play()} onMouseLeave={() => tl.current.reverse()}>
                    <div className="box">
                        <h2 className="card-title" ref={title} onMouseEnter={() => tl.current.play()} onMouseLeave={() => tl.current.reverse()}>{box.boxTitle}</h2>
                        <h4 className="card-subtext" ref={subtext} onMouseEnter={() => tl.current.play()} onMouseLeave={() => tl.current.reverse()}>{box.boxSubtext}</h4>
                    </div>
                    <div className="btn-group">
                        <a>
                            <button className="card-btn but" ref={btn} onMouseEnter={() => tl.current.play()} onMouseLeave={() => tl.current.reverse()}>{box.boxButton}</button>
                        </a>
                    </div>
                </div>
                )
            })
            )
        }
        
    }
    
render(<Box />, document.getElementById('react-cards'));