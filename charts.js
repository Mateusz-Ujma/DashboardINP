import { volumenList, on30minListValue, on30minListHour } from './saveData.js';

const ctx = document.getElementById('circle-chart');
const bar = document.getElementById('bar-chart');

let sumLeft = Math.abs(volumenList[0] - volumenList[1]);
let sumVol = Math.abs(sumLeft - volumenList[0]);
let value = [sumLeft, sumVol];

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
    labels: on30minListHour,
    datasets: [
      {
        label: 'Wydajność na 30min',
        data: on30minListValue,
        backgroundColor: ['rgb(233, 229, 0)'],
        barThickness: 50,
      },
    ],
  },
  options: {
    scales: {
      x: {
        title: {
          font: {
            size: 20,
            weight: 'bold',
          },
          color: 'white',
        },

        ticks: {
          font: {
            size: 40,
            weight: 'bold',
          },
          color: 'white',
        },
      },

      y: {
        title: {
          font: {
            size: 40,
            weight: 'bold',
          },
          color: 'white',
        },

        ticks: {
          beginAtZero: true,
          font: {
            size: 40,
            weight: 'bold',
          },
          color: 'white',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
