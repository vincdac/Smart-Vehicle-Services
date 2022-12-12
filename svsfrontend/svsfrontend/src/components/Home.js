import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div class="shadow-lg p-3 mb-5 bg-white rounded">
      <section id="intro"><br></br><br></br>
        <div class="container-lg my-3">
          <div class="row g-4 justify-content-center align-items-centre">
            <div class="col-md-4 text-center text-md-start">
              <h1>
                <div class="display-5">Give Your Car a Best Service </div>
                <div class="display-6 text-muted">Come and join us..</div>
              </h1>
              <p class="lead my-4 text-muted">Give Your Car a Best Service</p>
              <Link as to="/Registation" class="btn btn-secondary btn-lg">Register Now</Link>
            </div>
            <div class="col-md-8 text-center d-none d-md-block">
              <img src="h.jpg" class="img-fluid" alt="ebook" />
            </div>
          </div>
        </div>
      </section>
      <div className="container"> <br></br><br></br> <br></br><br></br> <br></br></div>
    </div>
  );
};

export default Home;