let nombres = ["Juan", "Pedro", "Pablo", "Adriana", "Mariana"];
let numeros = [6, 3, 8, 7, 1, 4, 2, 5];
let num = [1, 2, 3, 4, 5, 6, 8, 7];

////////////////////////////////////////////////////
// BUBBLE SORT ////////////////////////////////////
//compare each par en move up the higher and then compare
// it with the next. This way at the end of first pass
// highest number got moved to the end.

function bubbleSort(arr, asc = true) {
  //let comp = 0;
  //let swap = 0;
  //console.log({ arr: arr, comp: comp, swap: swap });
  if (asc) {
    for (let i = 0; i < arr.length - 1; i++) {
      let modificacion = false;
      for (let j = 0; j < arr.length - 1 - i; j++) {
        //comp++;
        if (arr[j] > arr[j + 1]) {
          //swap++;
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          modificacion = true;
        }
        //console.log({ arr: arr, comp: comp, swap: swap, i: i, j: j });
      }
      if (!modificacion) {
        break;
      }
    }
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      let modificacion = false;
      for (let j = 0; j < arr.length - 1 - i; j++) {
        //comp++;
        if (arr[j] < arr[j + 1]) {
          //swap++;
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          modificacion = true;
        }
        //console.log({ arr: arr, comp: comp, swap: swap, i: i, j: j });
      }
      if (!modificacion) {
        break;
      }
    }
  }
}

//var startTime = performance.now()
//bubbleSort(numeros); //comp = 27, swap = 17
//bubbleSort(num); //comp = 13, swap = 1
//bubbleSort(nombres); //comp = 10, swap = 6
//var endTime = performance.now()
//console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
//console.log(numeros)

//////////////////////////////////////////////
//// INSERT SORT /////////////////////////////
//the metod start with second position on the array and
// compare with left side. And put it in the correct order,
// move to the next position and keep till last number in
// array.

var startTime = performance.now();
function insertionSort(arr, asc = true) {
  //let comp = 0
  //let swap = 0
  //console.log({"arr":arr, "comp":comp, "swap": swap});
  if (asc) {
    for (let i = 1; i < arr.length; i++) {
      let currentValue = arr[i];
      let j;
      for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
        //swap++;
        //comp++
        arr[j + 1] = arr[j];
        //console.log({"arr":arr, "comp":comp, "swap": swap, "i":i,"j":j});
      }
      //comp++;
      arr[j + 1] = currentValue;
    }
  } else {
    let swaped = false;
    //let comp = 0
    //let swap = 0
    //console.log({"arr":arr, "comp":comp, "swap": swap});
    for (let i = 1; i < arr.length; i++) {
      let currentValue = arr[i];
      let j;
      swaped = false;
      for (j = i - 1; j >= 0 && arr[j] < currentValue; j--) {
        //swap++;
        //comp++
        swaped = true;
        arr[j + 1] = arr[j];
        //console.log({"arr":arr, "comp":comp, "swap": swap, "i":i,"j":j});
      }
      //comp++;
      if (swaped) {
        arr[j + 1] = currentValue;
      }
    }
  }
}

//var startTime = performance.now()
//insertionSort(numeros, false);
//var endTime = performance.now()
//console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
//console.log(numeros)

///////////////////////////////////////////////////////
// SELECTION SORT
// This method seearch for the lowest value and put it at
// beginning, the search again and move it to the next
// position till last one.

function selectionSort(arr, asc = true) {
  //let comp = 0;
  //let swap = 0;
  //console.log({ arr: arr, comp: comp, swap: swap });
  if (asc) {
    for (let i = 0; i < arr.length - 1; i++) {
      // Finding the smallest number in the subarray
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        //comp++;
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      if (min != i) {
        //swap++;
        // Swapping the elements
        let tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
      }
      //console.log({ arr: arr, comp: comp, swap: swap, i: i});
    }
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      // Finding the smallest number in the subarray
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        //comp++;
        if (arr[j] > arr[min]) {
          min = j;
        }
      }
      if (min != i) {
        //swap++;
        // Swapping the elements
        let tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
      }
      //console.log({ arr: arr, comp: comp, swap: swap, i: i});
    }
  }
}



/////////////////////////////////////////////////////////
////////////// COUNTING SORT ////////////////////////////
// Create an object indexed by values in array

function countingSort (arr) {
  // find min and max
  min = arr[0];
  max = arr[0];
  for (i=1; i < arr.length; i++){
    if (min > arr[i]){
      min = arr[i];}
    if (max < arr[i]){
      max = arr[i];
    }
    }
  
  let count = {};
  // First populate the count object
  //for (let i = min; i <= max; i++) {
  //    count[i] = 0;
  //}

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] in count){
        count[arr[i]] += 1;
      }else{
        count[arr[i]] = 1;
      }
      
  }
  
  // Then, iterate over count's properties from min to max:
  let sortedArr = [];
  for (let i= min; i <= max; i++) {// cambiando el sentido y e intercambiando limites se cambia de asc a desc
      while (count[i] > 0) {
          sortedArr.push(i);
          count[i]--;
      }
  }
  return sortedArr;
};








var startTime = performance.now();

//bubbleSort(numeros); //comp = 27, swap = 17
//insertionSort(numeros, false);
//selectionSort(numeros); //comp = 27, swap = 17
//numeros = countingSort(numeros);

var endTime = performance.now();
console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);

console.log(numeros);


