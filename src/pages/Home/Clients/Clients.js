import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <div className="container">
      <h1 className="text-danger fw-bold text-center mt-5 mb-4">
        Our Happy Clients
      </h1>
      <hr className="w-50 m-auto mb-5" />
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        <div className="col">
          <div
            className="card border-danger mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">HI!</div>
            <div className="card-body text-danger">
              <p className="card-text">
                <FontAwesomeIcon className="fs-2 me-3" icon={faQuoteLeft} />
                It was a wonderful experience for us. All your arrangements were
                up to the mark. All hotels and transportation arrangements were
                excellent. Thanks for your support.
              </p>
              <h5 className="card-title blockquote-footer pt-2">
                NAZMUN NAHAR MISTI
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card border-danger mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">HI!</div>
            <div className="card-body text-danger">
              <p className="card-text">
                <FontAwesomeIcon className="fs-2 me-3" icon={faQuoteLeft} />
                Thank you very much for all your assistance for my safe trip to
                Sundarban. Your driver Mahesh was excellent. Will contact you
                again for my future trips.Thanks for your support and prompt
                response.
              </p>
              <h5 className="card-title blockquote-footer pt-2">
                MIR AFTAB UDDIN
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card border-danger mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">HELLO!</div>
            <div className="card-body text-danger">
              <p className="card-text">
                <FontAwesomeIcon className="fs-2 me-3" icon={faQuoteLeft} />I We
                had a great trip in India for 6days And my family and I we can
                say that we have received a great service from your team. All
                the hotels we stayed are very nice clean.
              </p>
              <h5 className="card-title blockquote-footer pt-2">
                SABBIR AHMED SAZAL
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
