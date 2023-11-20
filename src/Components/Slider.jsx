
import mobile from "/public/slider/Rectangle 1241.png";
import web from "/public/slider/Rectangle 1242.png";
import analytice from "/public/slider/Rectangle 1243.png";
import flegent from "/public/slider/Rectangle 1244.png";
import {sliderItem} from '../api/AllInfo'
import SliderItem from "./SliderItem";

const Slider = () => {
  
  return (
    <>
      <div className="bg_color py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5">
              <h1>Increase Your Customers Loyalty and Satisfaction</h1>
              <p>We help businesses like yours earn more customers, standout from competitors, make more money</p>
              <button type="button" className="btn btn-success">
                Get Started
              </button>
            </div>
            <div className="col-md-6 mb-5">
              <div className="row">
                <div className="col-md-8 mb-4">
                 <div className="card">
                 <img src={mobile} alt="" />
                 </div>
                </div>
                <div className="col-md-4 mb-4">
                 <div className="card">
                 <img src={web} alt="" />
                 </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 mb-4">
                 <div className="card">
                 <img src={analytice} alt="" />
                 </div>
                </div>
                <div className="col-md-7 mb-4">
                  <div className="card">
                  <img src={flegent} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light py-4 mt-lg-5">
          <div className="container">
            <div className="row d-flex justify-content-between">
              {sliderItem.map(obj=>(
                <SliderItem key={Math.random()} img={obj.img}/>
                
              ))}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
