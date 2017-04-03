var name = "Princess Brunhilda von Nay Nay III"; 
var age = 8;
var tmpAge;
var drinkingAge;

console.log("My name is " + name + " and I am age " + age);

var counter = 1;

// prompt.start();

// prompt.get(['username', 'email'], function (err, result) ){
// 	if (err) { return onErr(err); }
// 	console.log('Command-line')
// }


for (var counter = 1; age <= (21 - counter); counter++){

// while(age <= (21 - counter)){
	tmpAge = age + counter;
	console.log("In " + counter + " I will be " + tmpAge);
	// counter = counter + 1;

	drinkingAge = 21 - tmpAge;

	if ( tmpAge < 21 ) {
		console.log("...and beer in " + drinkingAge + " years");
	} else if (tmpAge === 21){
		console.log("yeah... celebrate");
	} else {
		console.log("leave me alone I am drinking");
	}
}