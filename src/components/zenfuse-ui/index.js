import * as R from "ramda";
import H2 from "../ui/typography/h2";
import H3 from "../ui/typography/h3";

const ZenfuseUi = ({ colors, darkShadows, isDark }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col mb-6">
        <H2 className="@fts text-40px mb-4">Colors</H2>
        <div
          style={{ backgroundColor: isDark ? "#323232" : "white" }}
          className={`grid lg:grid-cols-6 gap-8 p-6 rounded-16px border `}
        >
          {colors && !R.isEmpty(colors)
            ? colors.map((item, index) => (
                <div
                  key={index}
                  className="col-span-1 justify-self-center flex flex-col justify-center"
                >
                  <div
                    className={`rounded-16px w-150px mb-2 shadow-dark-100 h-150px bg-${item.className}`}
                  />
                  <H3
                    className={`@ttc ${
                      isDark ? "text-white" : ""
                    } text-center mb-3`}
                  >
                    {item.className}
                  </H3>
                </div>
              ))
            : null}
        </div>
      </div>
      <div className="flex flex-col mb-6">
        <H2 className="@fts text-40px mb-4">Dark Shadows</H2>
        <div
          style={{ backgroundColor: "#323232" }}
          className={`grid lg:grid-cols-6 gap-8 p-6 rounded-16px border `}
        >
          {darkShadows && !R.isEmpty(darkShadows)
            ? darkShadows.map((item, index) => (
                <div
                  key={index}
                  className="col-span-1 justify-self-center flex flex-col justify-center"
                >
                  <div
                    className={`rounded-16px w-150px mb-2 h-150px bg-true-gray-700 shadow-${item.className}`}
                  />
                  <H3 className={`@ttc text-white text-center mb-3`}>
                    {item.className}
                  </H3>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default ZenfuseUi;
