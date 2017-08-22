//Questions, answers, and images are captured in the variable qAndA
var qAndA = [
["Whose tennis serve was the fastest ever recorded?", "John Isner", "Andy Roddick", "Sam Groth", "Bill Tilden", "Sam Groth, from the UK, hit the fastest serve at 163.3 mph in 2012", "<img src=assets/images/samGroth.jpg />"],
["Which tennis player is known for yelling 'you cannot be serious' at an umpire?", "John McEnroe", "Ilie Nastase", "Jimmie Connors","Nick Kyrgios"],
["How much does a tennis ball weight?", "1 to 1.07 ounces", "2 to 2.07 ounces", "3 to 3.07 ounces", "4 to 4.07 ounces"],
["Which tennis player is/was nicknamed 'The Rocket'?", "Rod Laver", "Roy Emerson", "Novak Djokovic", "Rafael Nadal"]
]

var answerKey = [3,1,2,1]; //Answer key which gives correct answer indices in qAndA. For example, correct answers are qAndA[0][4], qAndA[1][1], qAndA[2][2], etc.
var i; //Index of list in qAndA
var j; //Index of selected answer within list in qAndA
var k; //Index of correct answer within list in qAndA
var t; //Duration of countdown clock
var cAnswers; //Number of correct answers
var iAnswers; //Number of incorrect answers
var timer; //Variable used to manage countdown timer

// Provides countdown clock for t seconds and changes each second
function clock(){
	t = 5;
	$(".timeLeft").html("Time remaining for this question: " +t+ " seconds");
	timer = setInterval(function(){
		t = t - 1;
		$(".timeLeft").html("Time remaining for this question: " +t+ " seconds");
		if (t ===0){
			clearInterval(timer);
		}
	},1000);
}

//Removes timer and questoins from view and gives correct answer
function answer(){
	//Timer, question and answers are removed from view
	$(".timeLeft").css({"font-size": "0px"});
	$(".q").html("");
	$(".a").html("");
	$(".a").css({"border-width": "0px"});

	if (j===answerKey[i]){
		$(".outcome").html("Correct! Awesome!");
		$(".outcomeE").html(qAndA[i][5]);
		$(".outcomeE").append(qAndA[i][6]);	
		cAnswers++;
	}
	if (j!==answerKey[i]){
		$(".outcome").html("Sorry, correct answer is: " + qAndA[i][answerKey[i]]);
		$(".outcomeE").html(qAndA[i][5]);
		$(".outcomeE").append(qAndA[i][6]);	
		iAnswers++;
	}
}

//Start game
$(".start").click(function(){
	// Removes start sign
	$(".start").html("");
	$(".start").css({"border-width": "0px"});

	i=0;
	clock();

	//Questions and potential answers are displayed
	$(".q").html(qAndA[i][0]);
	$(".a1").html(qAndA[i][1]);
	$(".a2").html(qAndA[i][2]);
	$(".a3").html(qAndA[i][3]);
	$(".a4").html(qAndA[i][4]);
	$(".a").css({"border-width": "3px"});
	//Specifies j value for selected answer
	$(".a1").click(function(){
		j=1;
		clearInterval(timer);		
		answer();
	})
	$(".a2").click(function(){
		j=2;
		clearInterval(timer);
		answer();
	})
	$(".a3").click(function(){
		j=3;
		clearInterval(timer);
		answer();
	})
	$(".a4").click(function(){
		j=4;
		clearInterval(timer);
		answer();
	})



});