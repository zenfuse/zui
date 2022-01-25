import React from 'react'
import { useRef } from "react";

const Range = ({
  id = Math.random(),
  value,
  onChange,
  maxValue = 100,
  range = [0, maxValue * 0.25, maxValue * 0.50, maxValue * 0.75, maxValue],
  minValue = 0,
  tooltip = false
}) => {
  const rangeRef = useRef(null);

  return (
    <div className="w-full flex items-center justify-center">
      <div className="group w-full h-1 flex flex-col items-center justify-center relative">
        <div
          style={{
            width: "calc(100% - 12px)",
            left: "6px"
          }}
          className="bg-true-gray-300 w-full left-0 h-1 rounded-full absolute z-10"
        >
          <div
            style={{ width: `${(value / maxValue) * 100}%` }}
            className="bg-blue-650 h-1 rounded-full absolute z-40"
          />
          <div
            style={{
              left: `${(value / maxValue) * 100}%`
            }}
            className="h-3 w-3 rounded-full bg-blue-650 absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-50"
          >
            <div
              className={
                "absolute h-2 w-2 rounded-full bg-white left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2"
              }
            />
          </div>
        </div>
        {tooltip && (
          <div
            className={"absolute left-0 z-50"}
            style={{
              width: "calc(100% - 12px)",
              left: "6px"
            }}
          >
            <div
              style={{
                left: `${(value / maxValue) * 100}%`
              }}
              className={
                "opacity-0 group-hover:opacity-100 absolute -top-10 bg-blue-650 text-white text-xs left-1/2 transform -translate-x-1/2 p-1 rounded-4px"
              }
            >
              <div
                className={
                  "absolute -bottom-1 bg-blue-650 left-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 rounded-1px"
                }
              />
              {((value / maxValue) * 100).toFixed(0)}%
            </div>
          </div>
        )}
        <input
          list={id}
          ref={rangeRef}
          style={{
            cursor: "grab"
          }}
          min={minValue}
          max={maxValue}
          step={0.1}
          onMouseDown={() => (rangeRef.current.style.cursor = "grabbing")}
          onMouseUp={() => (rangeRef.current.style.cursor = "grab")}
          onChange={e => onChange(e.target.value)}
          type="range"
          className="w-full absolute opacity-0 z-20"
          id={id}
          value={value}
        />
        {range && <Datalist id={id} value={value} range={range} />}
      </div>
    </div>
  );
};

const Datalist = ({id, range, value}) => {
  return (
    <datalist
      className={
        "absolute flex justify-between left-0 w-full h-full top-0 z-0"
      }
      id={id}
    >
      {range.map((item, index) => (
        <option
          style={{
            borderWidth: "4px",
            borderColor: value >= item ? "#0065FF" : "#D4D4D4",
            background: value >= item ? "#0065FF" : "#D4D4D4",
            borderRadius: "50%",
            minHeight: "12px"
          }}
          className={`relative top-1/2 transform -translate-y-1/2`}
          key={index}
          value={item}
        />
      ))}
    </datalist>
  );
};

export default Range;
