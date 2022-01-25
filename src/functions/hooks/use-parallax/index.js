import { useEffect, useState } from "react";
import { useSpring } from "react-spring";

const useParallax = (ref, deltaY = 0, deltaX = 0) => {
  const [domElParams, setDomElParams] = useState({});
  const [animationXParams, setAnimationXParams] = useState(0);
  const [animationYParams, setAnimationYParams] = useState(0);

  useEffect(() => {
    const handleWheel = (e) => {
      if (ref && ref.current) {
        const domEl = ref.current.getBoundingClientRect();
        setDomElParams(domEl);
      }
    };

    window.addEventListener("scroll", handleWheel, { passive: true });

    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const animationStyle = useSpring({
    transform: `translate3d(${animationXParams}%,${animationYParams}%,0)`,
  });

  useEffect(() => {
    if (domElParams && domElParams.y && window) {
      setAnimationYParams((domElParams.y * deltaY) / 100);
      setAnimationXParams(domElParams.x * deltaX) / 100;
    }
  }, [domElParams]);

  return [animationStyle, domElParams];
};

export default useParallax;
