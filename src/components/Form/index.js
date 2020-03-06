import React from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import { Animated } from "react-animated-css";

import Title from "../Title";

const Form = ({ title }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
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
            <div>
              <input
                className="inputForm"
                name="name"
                type="text"
                placeholder="name"
                ref={register({ required: true })}
              ></input>
              {errors.name && <p style={{ color: "red" }}>Field is required</p>}

              <input
                className="inputForm"
                name="surname"
                type="text"
                placeholder="surname"
                ref={register({ required: true })}
              ></input>
              {errors.surname && (
                <p style={{ color: "red" }}>Field is required</p>
              )}
            </div>
            <div>
              <input
                className="inputForm"
                name="email"
                type="text"
                placeholder="email"
                ref={register({ required: true })}
              ></input>
              {errors.email && (
                <p style={{ color: "red" }}>Field is required</p>
              )}

              <input
                className="inputForm"
                name="number"
                type="text"
                placeholder="phone number"
                ref={register}
              ></input>
            </div>
            <div>
              <textarea
                className="inputForm areaForm"
                name="message"
                placeholder="Your message"
                ref={register({ required: true })}
              ></textarea>
              {errors.message && (
                <p style={{ color: "red" }}>Field is required</p>
              )}
            </div>
            <div>
              <button className="formButton" type="submit">
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
