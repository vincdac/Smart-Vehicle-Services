import React from "react";

const About = () => {
  return (
    <div className="container-xl my-2 "><br></br><br></br>
      <div class="shadow-lg p-3 mb-5 bg-white rounded"><br></br>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img src="tyre.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Tyres and Wheel Care</h5>
                <p className="card-text">
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="ac.webp" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">AC Services and Repair</h5>
                <p className="card-text">
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="clutch.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Clutch and Fitments</h5>
                <p className="card-text">
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="wind.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Windshields</h5>
                <p className="card-text">
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="light2.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lights</h5>
                <p className="card-text">
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
