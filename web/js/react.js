import React from "react";
import { render } from 'react-dom';

const Box = () => {

      return (       
        <div className="card">
            <div className="box">
                <h2 className="card-title">BOX NUMBER !</h2>
                <h4>USELESS SUBTEXT</h4>
            </div>
            <div className="btn-group">
                <a>
                    <button className="card-btn but">VIEW LINK</button>
                </a>
            </div>
        </div>
      )
    }
    
render(<Box />, document.getElementById('react-cards'));