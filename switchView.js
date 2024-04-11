import { LoadData } from './saveData.js';

const startEndView = document.querySelector('.start-end_sort');
const lhLastLhView = document.querySelector('.lh-last-lh');
const updateView = document.querySelector('.update-view');
const couriersView = document.querySelector('.couriers');
const chartCircleView = document.querySelector('.chart-circle');
const chartBarsView = document.querySelector('.chart-bars');

const saveBtn = document.querySelector('.save');
const updateBtn = document.querySelector('.update');

let view = 'SE';
let isReset = localStorage.hasOwnProperty('isReset')
  ? localStorage.getItem('isReset')
  : localStorage.setItem('isReset', false);
let inter;

const SwitchView = () => {
  if (view === 'SE') {
    startEndView.classList.add('disp');
    lhLastLhView.classList.remove('disp');
    updateView.classList.remove('disp');
    couriersView.classList.remove('disp');
    chartCircleView.classList.remove('disp');
    chartBarsView.classList.remove('disp');
    view = 'LH';
  } else if (view === 'LH') {
    startEndView.classList.remove('disp');
    lhLastLhView.classList.add('disp');
    updateView.classList.remove('disp');
    couriersView.classList.remove('disp');
    chartCircleView.classList.remove('disp');
    chartBarsView.classList.remove('disp');
    view = 'CR';
  } else if (view === 'CR') {
    startEndView.classList.remove('disp');
    lhLastLhView.classList.remove('disp');
    updateView.classList.remove('disp');
    couriersView.classList.add('disp');
    chartCircleView.classList.remove('disp');
    chartBarsView.classList.remove('disp');
    view = 'CC';
  } else if (view === 'CC') {
    startEndView.classList.remove('disp');
    lhLastLhView.classList.remove('disp');
    updateView.classList.remove('disp');
    couriersView.classList.remove('disp');
    chartCircleView.classList.add('disp');
    chartBarsView.classList.remove('disp');
    view = 'CB';
  } else if (view === 'CB') {
    startEndView.classList.remove('disp');
    lhLastLhView.classList.remove('disp');
    updateView.classList.remove('disp');
    couriersView.classList.remove('disp');
    chartCircleView.classList.remove('disp');
    chartBarsView.classList.add('disp');
    view = 'SE';
  }
};

saveBtn.addEventListener('click', () => {
  startEndView.classList.add('disp');
  lhLastLhView.classList.remove('disp');
  updateView.classList.remove('disp');
  couriersView.classList.remove('disp');
  chartCircleView.classList.remove('disp');
  chartBarsView.classList.remove('disp');
  updateView.classList.remove('disp');
  localStorage.setItem('isReset', false);
});
updateBtn.addEventListener('click', () => {
  clearInterval(inter);
  startEndView.classList.remove('disp');
  lhLastLhView.classList.remove('disp');
  updateView.classList.remove('disp');
  couriersView.classList.remove('disp');
  chartCircleView.classList.remove('disp');
  chartBarsView.classList.remove('disp');
  updateView.classList.add('disp');
});

window.onload = () => {
  LoadData();

  inter = setInterval(SwitchView, 15000);
};
