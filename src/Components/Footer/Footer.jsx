import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Location */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">LOCATION</h5>
            <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
          </div>

          {/* Around the Web */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">AROUND THE WEB</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a className="btn btn-outline-light btn-social rounded-circle" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social rounded-circle" href="#"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social rounded-circle" href="#"><i className="fab fa-linkedin-in"></i></a>
              <a className="btn btn-outline-light btn-social rounded-circle" href="#"><i className="fab fa-regular fa-globe"></i></a>
            </div>
          </div>

          {/* About Freelancer */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">ABOUT FREELANCER</h5>
            <p>Freelancer is a free to use, licensed Bootstrap theme created by Youssef</p>
          </div>
        </div>

        <div className="text-center pt-4 border-top mt-4">
          <small>Copyright © Your Website 2025</small>
        </div>
      </div>
    </footer>
  );
}