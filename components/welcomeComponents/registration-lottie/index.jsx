import lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import styles from "./registrationLottie.module.css";

const RegistrationLottie = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("/public/registrationLottieAnimation/demo.json"),
    });
  }, []);
  return (
    <div>
      <div className={styles["lottie-container"]} ref={container}></div>{" "}
    </div>
  );
};

export default RegistrationLottie;
