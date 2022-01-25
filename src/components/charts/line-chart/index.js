import { useEffect } from "react";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Filler,
} from "chart.js";
import { createConfig } from "./utils";

const LineChart = ({ data, xAxisDisplay, yAxisDisplay, lineWidth }) => {
  const config = createConfig(data, {
    xAxisDisplay,
    data,
    yAxisDisplay,
    lineWidth,
  });

  useEffect(() => {
    const ctx = document.getElementById(`line-chart`).getContext(`2d`);

    Chart.register(
      ArcElement,
      LineElement,
      BarElement,
      PointElement,
      LineController,
      CategoryScale,
      LinearScale,
      Filler
    );

    window.myBar = new Chart(ctx, config);

    return () => {
      window.myBar.destroy();
    };
  }, [data, xAxisDisplay, yAxisDisplay, lineWidth]);

  return <canvas id="line-chart" className="z-30" />;
};

export default LineChart;
