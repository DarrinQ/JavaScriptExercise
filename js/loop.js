'use strict';

var ar = [1, 3, 3, 'good luck'];
var ob = {name : 'jack', age : 19};
var mp = new Map([['name' , 'tom'], ['age' , 20]]);
var st = new Set([1, 3, 3, 'good luck']);

for (var i in st)
{
	alert(i);
}
for (var j of mp)
{
	alert(j);	
}