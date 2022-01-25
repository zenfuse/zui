import React, { useEffect, useState } from "react";
import LineChart from "./index";
import { withNextRouter } from "storybook-addon-next-router";
import mock from "./mock.json";

export default {
  component: LineChart,
  title: "Components/Charts/LineChart",
  decorators: [withNextRouter, (story) => <div className="">{story()}</div>],
  argTypes: {
    xAxisDisplay: {
      control: { type: "boolean" },
    },
    yAxisDisplay: {
      control: { type: "boolean" },
    },
    lineWidth: {
      control: { type: "number" },
    },
  },
};

const Template = (args) => {
  const [data, setData] = useState(mock.historicalData);

  return (
    <div className="w-full">
      <LineChart
        xAxisDisplay={false}
        yAxisDisplay={false}
        lineWidth={2}
        data={data}
        {...args}
      />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {};
