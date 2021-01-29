let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(arr) {
  let count = {};
  for (let index = 0; index < arr.length; index++) {
    let item = arr[index];
    if (!count[item]) {
      count[item] = 0;
    }
    count[item] += 1;
  }
  logItems(count);
}

function logItems(count) {
  for (let item in count) {
    console.log(item + ' => ' + count[item]);
  }
}

countOccurrences(vehicles);