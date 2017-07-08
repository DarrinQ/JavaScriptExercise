"use strict";

var month = 7, day = 8, year = 2017;
var str = `today is ${month}-${day}-${year}.`; 
alert(str);

var ar = [1, 2.1, 'abc', true, null, {name:'bob', age:'19'}];
ar[6] = '黄飞鸿';
alert(`array is ${ar.slice(3)}.`);
alert(`name: ${ar[5].name}, age: ${ar[5].age}`);

var copy_ar = ar.slice();
copy_ar.sort()
alert(`copy_ar is ${copy_ar.join('-')}; copy_ar is equal ar? ${copy_ar == ar}; copy_ar is ar? ${copy_ar === ar}.`);
