// React
import { useState, useEffect } from "react";
// Styles
import { Animate, Animate2 } from "./styles";

// Interface
interface AnimatedLettersProps {
  string: string;
  delay: number;
  timer?: number;
}

const AnimatedLetters = ({
  string,
  delay,
  timer = 4000,
}: AnimatedLettersProps) => {
  // initState
  useEffect(() => {
    //
    setTimeout(() => {
      setChange(true);
    }, timer);
  }, [timer]);

  const [change, setChange] = useState(false);

  return (
    <span>
      {string.split("").map((letter, i) =>
        change ? (
          <Animate2 key={letter + i}>{letter}</Animate2>
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
