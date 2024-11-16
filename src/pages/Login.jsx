import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import "../styles/login.css";
export default function Login() {
  return (
    <div className="container">
        <div className="img-section">
            <video src="../assets/gif/footer_robot.gif"></video>
            
        </div>
      <div className="form-section">
        <div className="Greeting">
          <h2>welcome back</h2>
          <span>we are glad to see you back dev..</span>
        </div>

        <form action="" className="d-flex flex-column">
          <div className="input-group mb-2">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input
              type="email"
              name="mailId"
              id="email"
              className="form-control"
              placeholder="email"
            />
          </div>

          <div className="input-group mb-2">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faKey} />
            </span>
            <input
              type="password"
              name="password"
              id="userPassword"
              className="form-control"
              placeholder="password"
            />
          </div>

          <button type="submit" className="btn btn-primary mb-2">
            Log in
          </button>
          <p>
            don't have an account? &nbsp; <a href="#">Sign up</a>
          </p>

          <div className="separator">
            <span>or</span>
          </div>

          <div>
            <button className="btn btn-secondary">
              <span>
                <FontAwesomeIcon icon={faGoogle} />
              </span>{" "}
              &nbsp; Sign up with Google
            </button>
          </div>
        </form>
      </div>

      
    </div>
  );
}
