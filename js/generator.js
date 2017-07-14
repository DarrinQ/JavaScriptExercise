'use strict';

function * next_id()
{
	var x = 0;
	while (1)
	{
		x ++;
		yield x;
	}
}

var g = next_id();
for (var i = 0; i < 3; i++)
{
	console.log(g.next())
}