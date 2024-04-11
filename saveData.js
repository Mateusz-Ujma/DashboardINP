//displays
const sortStart = document.querySelector('.value-sort-start');
const sortEnd = document.querySelector('.value-sort-end');
const lh = document.querySelector('.value-lh');
const lastLh = document.querySelector('.value-last-lh');
const apmPerc = document.querySelector('.vapmperc');
const apm = document.querySelector('.value-apm');
const d2dPerc = document.querySelector('.vd2dperc');
const d2d = document.querySelector('.value-d2d');
const volumen = document.querySelector('.value-volumen_data');
const leftToSort = document.querySelector('.value-LTS_data');
const on30min = document.querySelector('.on30min');
const on30minTable = document.getElementById('table-30min');
const on30minTrTable = document.getElementById('tr-table-30min');

//btns
const saveBtn = document.querySelector('.save');
const showButton = document.getElementById('reset');
const favDialog = document.getElementById('favDialog');
const confirmBtn = favDialog.querySelector('#confirmBtn');

//inputs
const sortStartInput = document.getElementById('start-sort-id');
const sortEndInput = document.getElementById('end-sort-id');
const lhInput = document.getElementById('lh-id');
const lastLhInput = document.getElementById('last-lh-id');
const apmPercInput = document.getElementById('apm-id-perc');
const apmInput = document.getElementById('apm-id');
const d2dPercInput = document.getElementById('d2d-id-perc');
const d2dInput = document.getElementById('d2d-id');
const volumenInput = document.getElementById('volumen-id');
const leftToSortInput = document.getElementById('left-to-sort-id');
const on30minIpnut = document.getElementById('min30-id');
const on30minHourIpnut = document.getElementById('min30-hour-id');

//let
let sortStartValue = localStorage.hasOwnProperty('sortStart')
  ? localStorage.getItem('sortStart')
  : localStorage.setItem('sortStart', '00:00');
let sortEndValue = localStorage.hasOwnProperty('sortEnd')
  ? localStorage.getItem('sortEnd')
  : localStorage.setItem('sortEnd', '00:00');
let lhValue = localStorage.hasOwnProperty('lh')
  ? localStorage.getItem('lh')
  : localStorage.setItem('lh', '0');
let lastLhValue = localStorage.hasOwnProperty('lastLh')
  ? localStorage.getItem('lastLh')
  : localStorage.setItem('lastLh', '00:00');
let apmPrecValue = localStorage.hasOwnProperty('apmPerc')
  ? localStorage.getItem('apmPerc')
  : localStorage.setItem('apmPerc', 0);
let apmValue = localStorage.hasOwnProperty('apmValue')
  ? localStorage.getItem('apmValue')
  : localStorage.setItem('apmValue', 0);
let d2dPrecValue = localStorage.hasOwnProperty('d2dPerc')
  ? localStorage.getItem('d2dPerc')
  : localStorage.setItem('d2dPerc', 0);
let d2dValue = localStorage.hasOwnProperty('d2dValue')
  ? localStorage.getItem('d2dValue')
  : localStorage.setItem('d2dValue', 0);
let howClicks = localStorage.hasOwnProperty('howClicks')
  ? localStorage.getItem('howClicks')
  : localStorage.setItem('howClicks', 0);
//exports
export let volumenList = [
  localStorage.hasOwnProperty('volumen')
    ? localStorage.getItem('volumen')
    : localStorage.setItem('volumen', 0),
  localStorage.hasOwnProperty('leftToSort')
    ? localStorage.getItem('leftToSort')
    : localStorage.setItem('leftToSort', 0),
];
export let on30minListValue = [
  localStorage.hasOwnProperty('30min0')
    ? localStorage.getItem('30min0')
    : localStorage.setItem('30min0', 0),
  localStorage.hasOwnProperty('30min1')
    ? localStorage.getItem('30min1')
    : localStorage.setItem('30min1', 0),
  localStorage.hasOwnProperty('30min2')
    ? localStorage.getItem('30min2')
    : localStorage.setItem('30min2', 0),
  localStorage.hasOwnProperty('30min3')
    ? localStorage.getItem('30min3')
    : localStorage.setItem('30min3', 0),
  localStorage.hasOwnProperty('30min4')
    ? localStorage.getItem('30min4')
    : localStorage.setItem('30min4', 0),
  localStorage.hasOwnProperty('30min5')
    ? localStorage.getItem('30min5')
    : localStorage.setItem('30min5', 0),
  localStorage.hasOwnProperty('30min6')
    ? localStorage.getItem('30min6')
    : localStorage.setItem('30min6', 0),
  localStorage.hasOwnProperty('30min7')
    ? localStorage.getItem('30min7')
    : localStorage.setItem('30min7', 0),
  localStorage.hasOwnProperty('30min8')
    ? localStorage.getItem('30min8')
    : localStorage.setItem('30min8', 0),
  localStorage.hasOwnProperty('30min9')
    ? localStorage.getItem('30min9')
    : localStorage.setItem('30min9', 0),
  localStorage.hasOwnProperty('30min10')
    ? localStorage.getItem('30min10')
    : localStorage.setItem('30min10', 0),
  localStorage.hasOwnProperty('30min11')
    ? localStorage.getItem('30min11')
    : localStorage.setItem('30min11', 0),
  localStorage.hasOwnProperty('30min12')
    ? localStorage.getItem('30min12')
    : localStorage.setItem('30min12', 0),
];

export let on30minListHour = [
  localStorage.hasOwnProperty('30min0Label')
    ? localStorage.getItem('30min0Label')
    : localStorage.setItem('30min0Label', '00:00'),
  localStorage.hasOwnProperty('30min1Label')
    ? localStorage.getItem('30min1Label')
    : localStorage.setItem('30min1Label', '00:00'),
  localStorage.hasOwnProperty('30min2Label')
    ? localStorage.getItem('30min2Label')
    : localStorage.setItem('30min2Label', '00:00'),
  localStorage.hasOwnProperty('30min3Label')
    ? localStorage.getItem('30min3Label')
    : localStorage.setItem('30min3Label', '00:00'),
  localStorage.hasOwnProperty('30min4Label')
    ? localStorage.getItem('30min4Label')
    : localStorage.setItem('30min4Label', '00:00'),
  localStorage.hasOwnProperty('30min5Label')
    ? localStorage.getItem('30min5Label')
    : localStorage.setItem('30min5Label', '00:00'),
  localStorage.hasOwnProperty('30min6Label')
    ? localStorage.getItem('30min6Label')
    : localStorage.setItem('30min6Label', '00:00'),
  localStorage.hasOwnProperty('30min7Label')
    ? localStorage.getItem('30min7Label')
    : localStorage.setItem('30min7Label', '00:00'),
  localStorage.hasOwnProperty('30min8Label')
    ? localStorage.getItem('30min8Label')
    : localStorage.setItem('30min8Label', '00:00'),
  localStorage.hasOwnProperty('30min9Label')
    ? localStorage.getItem('30min9Label')
    : localStorage.setItem('30min9Label', '00:00'),
  localStorage.hasOwnProperty('30min10Label')
    ? localStorage.getItem('30min10Label')
    : localStorage.setItem('30min10Label', '00:00'),
  localStorage.hasOwnProperty('30min11Label')
    ? localStorage.getItem('30min11Label')
    : localStorage.setItem('30min11Label', '00:00'),
  localStorage.hasOwnProperty('30min12Label')
    ? localStorage.getItem('30min12Label')
    : localStorage.setItem('30min12Label', '00:00'),
];

//dialog
showButton.addEventListener('click', () => {
  favDialog.showModal();
});
confirmBtn.addEventListener('click', (e) => {
  ResetSaveData();
  localStorage.setItem('isReset', true);
});
const ResetSaveData = () => {
  localStorage.setItem('30min0', 0);
  localStorage.setItem('30min1', 0);
  localStorage.setItem('30min2', 0);
  localStorage.setItem('30min3', 0);
  localStorage.setItem('30min4', 0);
  localStorage.setItem('30min5', 0);
  localStorage.setItem('30min6', 0);
  localStorage.setItem('30min7', 0);
  localStorage.setItem('30min8', 0);
  localStorage.setItem('30min9', 0);
  localStorage.setItem('30min10', 0);
  localStorage.setItem('30min11', 0);
  localStorage.setItem('30min12', 0);
  localStorage.setItem('30min0Label', '');
  localStorage.setItem('30min1Label', '');
  localStorage.setItem('30min2Label', '');
  localStorage.setItem('30min3Label', '');
  localStorage.setItem('30min4Label', '');
  localStorage.setItem('30min5Label', '');
  localStorage.setItem('30min6Label', '');
  localStorage.setItem('30min7Label', '');
  localStorage.setItem('30min8Label', '');
  localStorage.setItem('30min9Label', '');
  localStorage.setItem('30min10Label', '');
  localStorage.setItem('30min11Label', '');
  localStorage.setItem('30min12Label', '');
  localStorage.setItem('howClicks', -1);
  localStorage.setItem('lastLh', '00:00');
  localStorage.setItem('lh', '0');
  localStorage.setItem('sortEnd', '00:00');
  localStorage.setItem('sortStart', '00:00');
  localStorage.setItem('d2dValue', 0);
  localStorage.setItem('d2dPerc', 0);
  localStorage.setItem('apmPerc', 0);
  localStorage.setItem('apmValue', 0);
  localStorage.setItem('volumen', 0);
  localStorage.setItem('leftToSort', 0);
};

const Save30min = () => {
  var temp = on30minListHour.findIndex((el) => el == on30minHourIpnut.value);
  var tempV = on30minListHour[temp];

  if (tempV === on30minHourIpnut.value) {
    localStorage.setItem('30min' + temp, on30minIpnut.value);
  } else {
    if (howClicks > 12) {
      localStorage.setItem('howClicks', 0);
    }
    let tempor = localStorage.getItem('howClicks');
    tempor++;
    howClicks = tempor;
    localStorage.setItem('howClicks', tempor);
    localStorage.setItem('30min' + howClicks, on30minIpnut.value);
    localStorage.setItem('30min' + howClicks + 'Label', on30minHourIpnut.value);
  }
};

const rexAllDigits = /^\d+$/;

function createReversedGetProxy(a) {
  const pa = new Proxy(a, {
    get(target, key, receiver) {
      if (typeof key !== 'string' || !rexAllDigits.test(key)) {
        return Reflect.get(target, key, receiver);
      }
      const index = target.length - key - 1;
      return Reflect.get(target, index, receiver);
    },
  });
  return pa;
}
let revTabValue = [];
let revTabTempValue = createReversedGetProxy(on30minListValue).forEach(
  (v, index) => (revTabValue[index] = v)
);
let revTabHour = [];
let revTabTempHour = createReversedGetProxy(on30minListHour).forEach(
  (v, index) => (revTabHour[index] = v)
);

export const LoadData = () => {
  var header = on30minTable.createTHead();

  var row = header.insertRow(0);

  revTabValue.forEach((el) => {
    var cell = row.insertCell(0);
    cell.innerHTML = el;
  });
  var headerH = on30minTable.createTHead();

  var rowH = headerH.insertRow(0);

  revTabHour.forEach((el) => {
    var cellH = rowH.insertCell(0);
    cellH.innerHTML = el;
  });
  //inputs update
  sortStartInput.value = localStorage.getItem('sortStart');
  sortEndInput.value = localStorage.getItem('sortEnd');
  lhInput.value = localStorage.getItem('lh');
  lastLhInput.value = localStorage.getItem('lastLh');
  apmPercInput.value = localStorage.getItem('apmPerc');
  apmInput.value = localStorage.getItem('apmValue');
  d2dPercInput.value = localStorage.getItem('d2dPerc');
  d2dInput.value = localStorage.getItem('d2dValue');
  volumenInput.value = localStorage.getItem('volumen');
  leftToSortInput.value = localStorage.getItem('leftToSort');

  //views update
  sortStart.innerHTML = sortStartValue;
  sortEnd.innerHTML = sortEndValue;
  lh.innerHTML = lhValue;
  lastLh.innerHTML = lastLhValue;
  apmPerc.innerHTML = apmPrecValue;
  apm.innerHTML = apmValue;
  d2dPerc.innerHTML = d2dPrecValue;
  d2d.innerHTML = d2dValue;
  volumen.innerHTML = volumenList[0];
  leftToSort.innerHTML = volumenList[1];
};
const SaveData = () => {
  //save local

  localStorage.setItem('sortStart', sortStartInput.value);
  localStorage.setItem('sortEnd', sortEndInput.value);
  localStorage.setItem('lh', lhInput.value);
  localStorage.setItem('lastLh', lastLhInput.value);
  localStorage.setItem('apmPerc', apmPercInput.value);
  localStorage.setItem('apmValue', apmInput.value);
  localStorage.setItem('d2dPerc', d2dPercInput.value);
  localStorage.setItem('d2dValue', d2dInput.value);
  localStorage.setItem('volumen', volumenInput.value);
  localStorage.setItem('leftToSort', leftToSortInput.value);
  Save30min();
  location.reload();
};

saveBtn.addEventListener('click', SaveData);
