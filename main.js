"use strict";
let arr = [];
let swap;
let i=0;
function sortOnce(array) {
    swap = false;
    if (i===arr.length-1){
        i=0;
    }
    if (arr[i] > arr[i+1]) {
        let temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
        swap = true;
    }
    i++;
}