import React, { useState, useEffect } from "react";

import { Animate, Animate2 } from "./styles";

const AnimatedLetters = ({ letterClass, string, delay, timer = 4000 }) => {
  useEffect(() => {
    setTimeout(() => {
      setChange(true);
    }, timer);
  }, []);

  const [change, setChange] = useState(false);

  return (
    <span>
      {string.split("").map((letter, i) =>
        change ? (
          <Animate2 key={letter + i} delay={0.08 * i + delay}>
            {letter}
          </Animate2>
        ) : (
          <Animate key={letter + i} delay={0.08 * i + delay}>
            {letter}
          </Animate>
        )
      )}
    </span>
  );
};

export default AnimatedLetters;
