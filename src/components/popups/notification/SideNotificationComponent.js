import React, { useEffect, useState } from "react";
import { Transition } from "transition-component";

import AllIcons from "../../ui/all-icons";
import P from "../../ui/typography/p";

const SideNotificationComponent = ({ title, show }) => {
  const [localShow, setLocalShow] = useState(show);

  useEffect(() => {
    setLocalShow(show);
  }, [show]);

  useEffect(() => {
    if (show) {
      const showTimeout = setTimeout(() => {
        if (show) {
          setLocalShow(false);
        }
      }, 6000);
      return () => {
        setLocalShow(false);
        clearTimeout(showTimeout);
      };
    }
  }, [show]);

  return (
    <>
      <Transition
        show={localShow}
        enterFrom="translate-y-full sm:translate-y-0 sm:translate-x-full"
        enterTo="translate-y-0 opacity-100 sm:translate-y-0 sm:-translate-x-0"
        leave="opacity-0"
      >
        <div
          className={`fixed z-50 bottom-3 right-3 transition duration-750`}
        >
          <div className="w-auto shadow-trigger border border-gray-light rounded-8px flex overflow-hidden bg-white relative">
            {/* <div className="w-2/12 bg-green-base bg-opacity-10 flex items-center justify-center px-3 py-4">
            <AllIcons name="Check" className="w-5 text-green-base" />
          </div> */}
            <div className="w-10/12 px-3 py-4">
              {/* <P variant="sm" className="@ftf font-family-inter-semi-bold">
              Success
            </P> */}
              <P variant="sm" className="@fts text-12px @ttc text-gray-blue">
                {title}
              </P>
            </div>
            <button
              onClick={() => setLocalShow(false)}
              className="absolute top-2 right-2"
            >
              <AllIcons name="Close" className="w-4 text-gray-dark" />
            </button>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default SideNotificationComponent;
