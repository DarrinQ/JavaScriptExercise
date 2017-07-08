'use strict';

var height = parseFloat(prompt('请输入身高，单位(m):', '1.75'));
var weight = parseFloat(prompt('请输入体重，单位(kg):', '75'));

var bmi = weight / (height * height);
alert(`BMI is ${bmi}.`);

if (bmi < 18.5)
{
    alert('Too thin');
}
else if (bmi >= 18.5 && bmi < 25)
{
    alert('normal');
}
else if (bmi >= 25 && bmi < 25)
{
    alert('A little fat');
}
else if (bmi >= 28 && bmi < 35)
{
    alert('fat');
}
else
{
    alert('Too fat.');
}