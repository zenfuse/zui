import { useEffect, useState } from "react";
import { useSpring, animated, config } from "react-spring";

const AcceptCookiesMessage = ({
  message = `We use cookies`,
  containerClasses = "",
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setShow(!+localStorage.getItem(`acceptCookies`));
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem(`acceptCookies`, `1`);
    setShow(false);
  };

  const messageAnimation = useSpring({
    opacity: show ? `1` : `0`,
    transform: show ? `scale(1)` : `scale(0.75)`,
    config: { ...config.default },
    delay: 200,
  });

  return show ? (
    <animated.div
      style={messageAnimation}
      className={`${containerBaseClasses} ${containerClasses}`}
    >
      <span className="mr-2 text-base sm:text-lg">🍪</span>
      <p className="text-gray-850">{message}</p>
      <button
        className="px-6 py-2 ml-4 bg-white border rounded-16px text-blue-650 border-true-gray-150 shadow-sm hover:border-blue-650 focus:bg-blue-650 focus:text-white duration-200"
        onClick={handleAcceptCookies}
      >
        Ok
      </button>
    </animated.div>
  ) : null;
};

export default AcceptCookiesMessage;

const containerBaseClasses =
  "flex flex-row items-center z-50 p-1 pl-3 border rounded-18px border-true-gray-150 bg-true-gray-100 font-family-rubik-medium text-14px leading-20px sm:text-12px md:leading-14px";
