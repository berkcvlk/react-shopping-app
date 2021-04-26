import { Link } from "react-router-dom";
import React from "react";

import "./Login.scss";

const Modal = (props) => {
  return (
    <React.Fragment>
      <form>
        <div onClick={props.onClose} className="backdrop"></div>
        <div className="modal">
          <input placeholder="Email" type="email" />
          <input placeholder="*****" type="password" />
          <button onClick={props.onClose} className="close">
            Close
          </button>
          <button className="submit">Login</button>
          <Link to="/register">Create account</Link>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Modal;
