import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="col-6 col-lg-2">
          {/* <h2>Follow Us</h2> */}
          <div className="row">
            <div className="col-3 mx-auto">
              <Link to="https://www.instagram.com/theindresh/">
                <i className="fa fa-instagram "></i>
              </Link>
            </div>
            <div className="col-3 mx-auto">
              <Link to="https://twitter.com/theindresh">
                <i className="fa fa-facebook "></i>
              </Link>
            </div>
            <div className="col-3 mx-auto">
              <Link to="https://in.linkedin.com/in/indresh-bharati-24775a202?original_referer=https%3A%2F%2Fwww.google.com%2F">
                <i className="fa fa-linkedin "></i>
              </Link>
            </div>
            <div className="col-3 mx-auto">
              <Link to="https://twitter.com/theindresh">
                <i className="fa fa-twitter "></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Company name
              </h6>
              <p>
                welcome imart on our website here you will find many items that
                too cheap prices don't delay click above.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">ABOUT</h6>
              <p>
                <Link to="/contact" className="text-reset">
                  Contact
                </Link>
              </p>
              <p>
                <Link to="/about" className="text-reset">
                  About Us
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Corporate Information
                </Link>
              </p>
              <p>
                <Link to="/store" className="text-reset">
                  Store
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">HELP</h6>
              <p>
                <Link to="#!" className="text-reset">
                  Payment
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Shipping
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Orders
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Help
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fa fa-at me-3"></i> N.I.E.T Greater Noida
              </p>
              <p>
                <i className="fa fa-inbox me-3"> </i>
                imart@gmail.com
              </p>
              <p>
                <i className="fa fa-phone me-3"></i> + 91 7054220354
              </p>
              <p>
                <i className="fa fa-whatsapp me-3"></i> + 91 7054220354
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        Copyright @ 2022 Indresh. All right reserved:
        <Link className="text-reset fw-bold" to="/">
          Imart.com
        </Link>
      </div>
    </MDBFooter>
  );
};
export default Footer;
