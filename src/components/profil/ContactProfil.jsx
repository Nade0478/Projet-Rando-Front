import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";

const ContactProfil = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="card">
              <h2>Demande de contact</h2>
              <div className="card-body">
                <h4 className="card-title">
                  Envoyez une demande via ce lien :
                </h4>
                <Link
                  to="/contact"
                  className="btn btn-success btn-lg mx-auto d-block"
                >
                  Demande de contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactProfil;

