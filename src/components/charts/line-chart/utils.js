import * as R from "ramda";
import { getFormattedPrice } from "../../../functions/utils/vanilla-utils";

const monthsAbbreviations = [
  `Jan`,
  `Feb`,
  `Mar`,
  `Apr`,
  `May`,
  `June`,
  `July`,
  `Aug`,
  `Sept`,
  `Oct`,
  `Nov`,
  `Dec`,
];

const ticksFontSettings = {
  font: {
    size: 12,
    family: `Rubik`,
  },
  color: `#999999`,
};

const presentDay = new Date().getDate();

const getOptions = (params) => {
  const klinesClose = params.data.map((kline) => Number(kline.close));
  const max = Math.max(...klinesClose);
  const min = Math.min(...klinesClose);
  const maxWithGap = max + max * 0.01;
  const minWithGap = min - min * 0.01;

  return {
    elements: {
      point: {
        radius: 0,
      },
    },
    animation: {
      duration: 0,
    },
    scales: {
      y: {
        display: params.yAxisDisplay,
        beginAtZero: true,
        ticks: {
          ...ticksFontSettings,
          callback: (val) => ` $${val.toFixed(2)}`,
        },
        min: minWithGap,
        max: maxWithGap,
      },
      x: {
        display: params.xAxisDisplay,
        grid: {
          display: false,
        },
        ticks: {
          ...ticksFontSettings,
          color: `#999999`,
          callback: function (item) {
            const value = this.getLabelForValue(item);
            const date = new Date(+value);
            const valueDay = date.getDate();
            const month = date.getMonth();

            if (valueDay === presentDay && presentDay <= 28) {
              return `${monthsAbbreviations[month]}'${valueDay}`;
            } else {
              if (valueDay === 30 && presentDay === 30 && month !== 1) {
                return `${monthsAbbreviations[month]}'${valueDay}`;
              } else if (presentDay === 30 && month === 1 && valueDay === 28) {
                return `${monthsAbbreviations[month]}'${valueDay}`;
              } else if (presentDay === 31 && valueDay === 30 && month !== 1) {
                return `${monthsAbbreviations[month]}'${valueDay}`;
              } else if (month === 1 && presentDay === 31 && valueDay === 28) {
                return `${monthsAbbreviations[month]}'${valueDay}`;
              }
            }
          },
        },
      },
    },
    tooltip: {
      enabled: false,
      mode: null,
      boxWidth: 0,
      boxHeight: 0,
    },
    responsive: true,
    maintainAspectRatio: false,
    showLines: true,
    hover: { mode: null },
  };
};

const getGradient = (ctx, chartArea) => {
  let width, height, gradient;
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (gradient === null || width !== chartWidth || height !== chartHeight) {
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(1, `rgba(0, 101, 255, 0.25)`);
    gradient.addColorStop(0.1, `rgba(0, 101, 255, 0)`);
  }
  return gradient;
};

const createDataForDataset = (data) => {
  const labels = [];
  const datasetData = [];

  data.forEach((item) => {
    const timestamp = R.prop(`time`, item);
    const price = getFormattedPrice(R.prop(`close`, item));
    labels.push(`${timestamp}`);
    datasetData.push([`${timestamp}`, price]);
  });

  return { labels, datasetData };
};

export const createConfig = (tokenData, params) => {
  const { labels, datasetData } = createDataForDataset(tokenData);
  const options = getOptions(params);

  const data = {
    datasets: [
      {
        labels: labels,
        data: datasetData,
        fill: true,
        borderColor: `#0065FF`,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) return null;

          return getGradient(ctx, chartArea);
        },
        tension: 0.2,
        borderWidth: params.lineWidth,
      },
    ],
  };

  const chartConfig = {
    type: `line`,
    data,
    options,
  };

  return chartConfig;
};
