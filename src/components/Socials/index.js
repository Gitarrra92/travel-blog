import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

import Title from "../../components/Title";

const Socials = ({ title }) => {
  return (
    <div className="socials">
      <Title title="Here you can find us" />
      <div className="socialIcons">
        <Link className="socialIcon youtube" to="https://www.youtube.com">
          <FontAwesomeIcon icon={faYoutube} size="3x"></FontAwesomeIcon>
        </Link>
        <a className="socialIcon facebook" href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebook} size="3x"></FontAwesomeIcon>
        </a>
        <a className="socialIcon twitter" href="https://www.twitter.com">
          <FontAwesomeIcon icon={faTwitter} size="3x"></FontAwesomeIcon>
        </a>
        <a className="socialIcon instagram" href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} size="3x"></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );
};

export default Socials;
