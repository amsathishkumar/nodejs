console.log("Calc");
var result = 0;
var calc = {
	add : function(x,y)
	{
		result = x+y;
	},
	getResults : function()
	{
		console.log(result);
	}
};


console.log(calc.add(10,20));

module.exports =  calc;