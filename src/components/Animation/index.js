import React, { useRef, useEffect } from "react";
import "./style.css";
import gsap from "gsap";

import { ReactComponent as Scene } from "../../assets/SVG/scene.svg";
import Title from "../Title";

const Animation = ({ title }) => {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;

    const woman = elements.getElementById("kobieta");
    const sun = elements.getElementById("slonce");
    const flowers = elements.getElementById("rosliny");
    const plane = elements.getElementById("samolot");

    gsap.set([woman, sun, plane, flowers], { autoAlpha: 0 });
    gsap.set(sun, { transformOrigin: "50% 100%" });

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl.fromTo(woman, { x: "-=500" }, { duration: 2, x: "+=500", autoAlpha: 1 });
    tl.fromTo(sun, { scaleY: 0 }, { duration: 1, autoAlpha: 1, scaleY: 1 });
    tl.fromTo(plane, { x: "+=400" }, { duration: 2, x: "-=400", autoAlpha: 1 });
    tl.fromTo(flowers, { scaleY: 0 }, { duration: 1, autoAlpha: 1, scaleY: 1 });
  });
  return (
    <>
      <Title title="Lets get to know each other better!" />
      <div ref={wrapper} className="scene">
        <Scene />
      </div>
    </>
  );
};

export default Animation;
