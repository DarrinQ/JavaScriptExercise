'use strict';

var tom = {
	name : 'tom',
	age : 21,
	sex : 'female',
	adult : true,
	hobby : ['football', 'music', 'vedio-game']
};

var tom_json = JSON.stringify(tom, null, '----');
console.log(tom_json)