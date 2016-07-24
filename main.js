function askQuestions(){

var firstName = prompt ('What is your first name?');
var lastName = prompt ('What is your last name?');

var fullName = firstName + ' ' + lastName;
console.log ('User is called ' + fullName);

var age = prompt ('How old are you?');
age = parseInt (age);	

if (age >= 18) {
	console.log('User is an adult');
} else if (age >= 13) {
	console.log('USer is a teenage');
	} else {
	console.log('User is a a child');
}

if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() != 'assembly'){
	console.log ('Hello General');
	}

var faveColour = prompt ('What is your favourite colour?');
	faveColour = faveColour.toLowerCase();

	if (faveColour == 'red' || 
		faveColour == 'green'|| 
		faveColour == 'blue'|| 
		faveColour == 'orange') {
		$('h1').css('color', faveColour);
	}

}		

//when the page loads
$(function() {

	//When the user clicks the image, ask the questions
	$ ('img').on('click', askQuestions);

	//When the user clicks a heading
	$('h3').on('click', function(){


	//Toggle the next element
	$ (this).next().slideToggle(200);
	});
});
