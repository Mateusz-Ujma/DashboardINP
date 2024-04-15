import { volumenList, on30minListValue, on30minListHour } from './saveData.js';

const ctx = document.getElementById('circle-chart');
const bar = document.getElementById('bar-chart');

let sumLeft = Math.abs(volumenList[0] - volumenList[1]);
let sumVol = Math.abs(sumLeft - volumenList[0]);
let value = [sumLeft, sumVol];

const plugin = {
  id: 'customCanvasBackgroundColor',
  beforeDraw: (chart, args, options) => {
    const { ctx } = chart;
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = options.color || '#99ffff';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};
export const circle = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [
      {
        data: value,
        backgroundColor: ['rgb(233, 229, 0,0.9)', 'rgb(210, 210, 210,0.5)'],
        borderColor: ['rgb(233, 229, 0,0.3)'],
        borderWidth: 0,
      },
    ],
  },
});

new Chart(bar, {
  type: 'bar',
  data: {
    ticks: ['test'],
    labels: on30minListHour,
    datasets: [
      {
        data: on30minListValue,
        backgroundColor: ['rgb(240, 200, 0)'],
        barThickness: 55,
      },
    ],
  },
  options: {
    scales: {
      x: {
        title: {
          font: {
            size: 45,
            weight: '900',
          },
          color: 'white',
        },

        ticks: {
          font: {
            size: 45,
            weight: '700',
          },
          color: 'black',
        },
      },

      y: {
        title: {
          font: {
            size: 45,
            weight: '900',
          },
          color: 'black',
        },

        ticks: {
          beginAtZero: true,
          font: {
            size: 40,
            weight: '800',
          },
          color: 'black',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      customCanvasBackgroundColor: {
        color: 'white',
      },
    },
  },
  plugins: [plugin],
});
