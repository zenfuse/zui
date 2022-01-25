import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import Link from "next/link";

const ConfettiButton = ({ className, title, link }) => {
  const [hovered, setHovered] = useState(false);

  const confettiAnimatedProps = useSpring({
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: hovered ? "1" : "0",
    transform: hovered ? "scale(1.7)" : "scale(1.5)",
    pointerEvents: "none",
    config: { ...config.wobbly, duration: 90 },
  });

  const lineAnimatedProps = useSpring({
    color: hovered ? "#FC3388" : "#1D1D1D",
    config: {
      ...config.wobbly,
      duration: 10,
    },
  });

  return (
    <Link href={link || "/"} passHref>
      <a target="_blank" className="w-fit">
        <div
          onMouseMove={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            transform: hovered
              ? "rotate(-2deg) scale(1.05)"
              : "rotate(0) scale(1)",
            width: "270px",
            height: "62px",
            overflow: hovered ? "visible" : "hidden",
          }}
          className={className}
        >
          <animated.div
            style={lineAnimatedProps}
            className="absolute duration-200 w-full h-full"
          >
            <svg
              fill="none"
              viewBox="0 0 267 64"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current absolute w-full h-full"
            >
              <path
                d="M59.3948 19.5597C61.2165 12.6701 91.4314 0.280739 186.682 5.40844C305.746 11.8181 275.607 53.6992 196.577 59.341C134.863 63.7467 58.4139 63.0194 28.4343 58.488C-1.54519 53.9566 -10.6416 35.641 20.9208 21.7644C59.8474 4.65002 103.179 2.32249 124.068 1.43295"
                strokeWidth="1.76874"
                strokeLinecap="round"
              />
            </svg>
          </animated.div>
          <animated.div style={confettiAnimatedProps}>
            <svg
              viewBox="0 0 279 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current absolute w-full h-full"
            >
              <path
                d="M1.42139 71.8501C4.672 76.042 15.5694 84.7782 33.1539 86.1871"
                stroke="#FFB74B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M266 86.8501C261.932 84.038 257.998 82.0752 255.703 81.8502"
                stroke="#FC3388"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30.2278 27.5676C26.1599 24.7556 21.7473 22.0751 19.4527 21.8501"
                stroke="#FC3388"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M143.224 12.4972C141.419 7.89304 137.778 2.81789 136 1.35011"
                stroke="#31F3FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M156.176 102.85C155.649 97.933 155.278 92.0943 156.176 89.971"
                stroke="#FF4B4B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M239 8.85011C235.275 12.103 232.781 13.5933 232 15.7623"
                stroke="#FFB74B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M64.1512 88.2924C60.4264 91.5453 55.2813 95.681 54.4998 97.8501"
                stroke="#F14BFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M276.866 33.8904C273.52 29.7743 262.425 21.2909 244.813 20.2864"
                stroke="#F14BFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </animated.div>
          {title && <p>{title}</p>}
        </div>
      </a>
    </Link>
  );
};

export default ConfettiButton;
