import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

const styles= {
  'font-size': '6rem',
  'font-weight': 'bold'
}

export const HowItWorks = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>How it Works</h2>
          <p>
            Everything is easy with us. Follow these simple steps to get started:
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4 col-sm-6 team">
                <div className="thumbnail">
                {console.log(i+1)}
                  {" "}
                  {/* <img src={d.img} alt="..." className="team-img" /> */}
                  {/* <FontAwesomeIcon icon={byPrefixAndName.fas['house']} /> */}
                  {/* <h1><FontAwesomeIcon icon="fa-solid fa-gear" /></h1> */}
                  <h1 className="fa fa-circle-o" style={{ fontSize: '5rem', color: '#da627a' }}>{i+1}</h1>
                  {/* <h1 className="fa fa-circle-o" style={{ fontSize: '5rem', color: '#dc143c' }}>{i+1}</h1> */}
                  {/* <h1 className="styles">{i+1}</h1> */}
                  {/* <h1 className="">1</h1> */}
                  <div className="caption">
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
                  </div>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
