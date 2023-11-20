import { Link } from "react-router-dom";
import fb from "../assets/img/Frame.png";
import fb2 from "../assets/img/Group 32.png";
import fb3 from "../assets/img/Group 33.png";
import fb4 from "../assets/img/Group 34.png";

const Footer = () => {
  return (
    <div className="bg-dark pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 className="text-light">WEB LOGO</h2>
            <span className="text-light w-25">Some footer text about the Agency. Just a little description to help people understand you better</span>
            <div className="mt-3 row">
              <div className="col-md-3 icon_w">
                {" "}
                <img className="mx-1" src={fb} alt="" />
              </div>
              <div className="col-md-3 icon_w"><img className="mx-1" src={fb2} alt="" /></div>
              <div className="col-md-3 icon_w"><img className="mx-1" src={fb3} alt="" /></div>
              <div className="col-md-3 icon_w"> <img className="mx-1" src={fb4} alt="" /></div>
             
            </div>
          </div>
          <div className="col-md-4 px-lg-5">
            <h5 className="text-light">Qeick Links</h5>
            <div className="d-flex flex-column">
              <Link className="text-light">Services</Link>
              <Link className="text-light">Portfolio</Link>
              <Link className="text-light">About Us</Link>
              <Link className="text-light">Contact Us</Link>
            </div>
          </div>
          <div className="col-md-4">
            <h5 className="text-light">Address</h5>
            <div className="d-flex flex-column">
              <Link className="text-light">Design Agency Head Office</Link>
              <Link className="text-light">Airport Road</Link>
              <Link className="text-light">united Arab Emirate</Link>
            </div>
          </div>
        </div>
        <div className="row py-4 pt-5">
          <div className="col-md-12">
            <h6 className="text-light"> Copyright Design Agency 2022</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
