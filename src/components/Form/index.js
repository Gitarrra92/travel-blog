import React, { useState } from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import { Animated } from "react-animated-css";

import Title from "../Title";

const Form = ({ title }) => {
  const { register, handleSubmit, errors } = useForm();
  const [message, setMessage] = useState(false);

  const displayMessage = () => {
    setMessage(true);
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    displayMessage();
    e.target.reset();
  };

  return (
    <div className="formContainer">
      <Title title="Lets stay in touch" />
      <div className="form">
        <Animated
          animationIn="bounceInLeft"
          animationOut="fadeOut"
          isVisible={true}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            {message ? <Title title="Thank you for your message"></Title> : ""}

            <div className="form__row">
              <input
                className={`inputForm ${errors.name ? "inputFormError" : ""}`}
                name="name"
                type="text"
                placeholder="name"
                ref={register({ required: true })}
              />

              <input
                className={`inputForm ${
                  errors.surname ? "inputFormError" : ""
                }`}
                name="surname"
                type="text"
                placeholder="surname"
                ref={register({ required: true })}
              />
            </div>
            <div className="form__row">
              <input
                className={`inputForm ${errors.email ? "inputFormError" : ""}`}
                name="email"
                type="text"
                placeholder="email"
                ref={register({ required: true })}
              />

              <input
                className="inputForm"
                name="number"
                type="text"
                placeholder="phone number"
                ref={register}
              />
            </div>
            <div>
              <textarea
                className={`inputForm areaForm ${
                  errors.message ? "inputFormError" : ""
                }`}
                name="message"
                placeholder="Your message"
                ref={register({ required: true })}
              ></textarea>
            </div>
            <div>
              <button className="form__formButton" type="submit">
                Send
              </button>
            </div>
          </form>
        </Animated>
      </div>
    </div>
  );
};

export default Form;
