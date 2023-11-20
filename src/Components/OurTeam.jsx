import team1 from "/public/Team/Rectangle 2093.png";
import team2 from "/public/Team/Rectangle 2093 (1).png";
import team3 from "/public/Team/Rectangle 2093 (2).png";

const OurTeam = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {" "}
            <h6 className="text-uppercase">Our Team Member</h6>
            <h4>Check our awesome team members</h4>
          </div>
          <div className="col-md-12 py-5">
            <div className="row">
              <div className="col-md-4">
                <div className="card border-1" style={{ width: "18rem" }}>
                  <div className="card">
                    <img src={team1} className="card-img-top" alt="..." />
                    <div className="card-img-overlay d-flex justify-content-center ">
                      <div className="card-title d-flex flex-column">
                        <div className="h-25"></div>
                        <div className="h-25"></div>
                        <div className="h-25"></div>
                        <div className="h-25"></div>

                        <div className="rounded-pill bg-light p-2">
                          <i className="fa fa-facebook px-2" aria-hidden="true"></i>
                          <i className="fa fa-twitter px-2" aria-hidden="true"></i>
                          <i className="fa fa-instagram px-2" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-body text-center">
                    <h5 className="card-title">Devon Lane</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-1" style={{ width: "18rem" }}>
                  <div className="card">
                    <img src={team2} className="card-img-top" alt="..." />
                    <div className="card-img-overlay d-flex justify-content-center ">
                      <div className="card-title d-flex flex-column">
                        <div className="h-25"></div>
                        <div className="h-25"></div>
                        <div className="h-25"></div>
                        <div className="h-25"></div>

                        <div className="rounded-pill bg-light p-2">
                          <i className="fa fa-facebook px-2" aria-hidden="true"></i>
                          <i className="fa fa-twitter px-2" aria-hidden="true"></i>
                          <i className="fa fa-instagram px-2" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-body text-center">
                    <h5 className="card-title">Danny Bailey</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-1" style={{ width: "18rem" }}>
                  <div className="card">
                    <img src={team3} className="card-img-top" alt="..." />
                    <div className="card-img-overlay d-flex justify-content-center ">
                      <div className="card-title d-flex flex-column">
                        <div className="h-25"></div>
                        <div className="h-25"></div>
                        <div className="h-25"></div>
                        <div className="h-25"></div>

                        <div className="rounded-pill bg-light p-2">
                          <i className="fa fa-facebook px-2" aria-hidden="true"></i>
                          <i className="fa fa-twitter px-2" aria-hidden="true"></i>
                          <i className="fa fa-instagram px-2" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-body text-center">
                    <h5 className="card-title">Alex Lov</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
