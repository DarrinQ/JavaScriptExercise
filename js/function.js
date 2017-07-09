'use strict';

function sum (x, y, ...arg) 
{
	if (typeof x != 'number' || typeof y != 'number')
	{
		console.log('parameters is not number.');
		return NaN;
	}


	for (var p in arguments)
	{
		console.log(arguments[p]);
	}

	console.log(arg);

	return x + y;
}

var z = sum(5, 8, 10, 20, 30);
console.log(z);