//Questions, answers, and images are captured in the variable qAndA
var qAndA = [
["Whose tennis serve was the fastest ever recorded?", "John Isner", "Andy Roddick", "Sam Groth", "Bill Tilden", "Sam Groth, from the UK, hit the fastest serve at 163.3 mph in 2012", "<img src=assets/images/samGroth.jpg />"],
["Which tennis player is known for yelling 'you cannot be serious' at an umpire?", "John McEnroe", "Ilie Nastase", "Jimmie Connors","Nick Kyrgios", "John McEnroe, tennis 'bad boy' is know for saying this and wrote a book by the same title", "<img src=assets/images/McEnroe.jpg />"],
["How much does a tennis ball weight?", "1 to 1.0625 ounces", "2 to 2.0625 ounces", "3 to 3.0625 ounces", "4 to 4.0625 ounces", "Tennis balls must weigh between 2 and 2-1/16 ounces (56.70 - 58.47 gms)", "<img src=assets/images/ballWeight.jpg />"],
["Which tennis player is/was nicknamed 'The Rocket'?", "Rod Laver", "Roy Emerson", "Novak Djokovic", "Rafael Nadal", "Rod Laver, who won two gram slams, was nicknamed 'The Rocket'", "<img src=assets/images/Laver.jpg />"],
["Which tennis player defeated Bobby Riggs in the 'Battle of the Sexes'?", "Martina Navratilova", "Chris Evert-Lloyd", "Serena Williams", "Billie Jean King", "Billie Jean King beat Bobby Riggs 6-4, 6-3, 6-3 after he claimed that 'no woman could beat a man in tennis.'", "<img src=assets/images/King.jpg />"],
["What year was tennis originally an olympic sport?", "1896", "1924", "1968", "1988", "Tennis was originally an olympic sport in 1896; it was removed in 1924 and re-introduced in 1988.", "<img src=assets/images/olympics.jpg />"]
]

var answerKey = [3,1,2,1,4,1]; //Answer key which gives correct answer indices in qAndA. For example, correct answers are qAndA[0][3], qAndA[1][1], qAndA[2][2], etc.
var i; //Index of list in qAndA
var j; //Index of selected answer within list in qAndA
var k; //Index of correct answer within list in qAndA
var t; //Duration of countdown clock
var cAnswers; //Number of correct answers
var iAnswers; //Number of incorrect answers
var timer; //Variable used to manage countdown timer
var n = 5; //Index of last question in qAndA

// Provides countdown clock for t seconds
function clock(){
	t = 20;
	$(".timeLeft").html("Time remaining for this question: " +t+ " seconds");
	timer = setInterval(function(){
		t = t - 1;
		$(".timeLeft").html("Time remaining for this question: " +t+ " seconds");
		if (t ===0){
			answer();
		}
	},1000);
}

//Removes timer and questions from view and gives correct answer for a few seconds. Then goes to next question. When last question is reached, gives overall scorecard.
function answer(){
	clearInterval(timer);
	//Timer, question and answers are removed from view
	$(".timeLeft").html("");
	$(".q").html("");
	$(".a").html("");
	$(".a").css({"border-width": "0px"});
	if (j===answerKey[i]) {
		$(".outcome").html("Correct! Awesome!");
		cAnswers++;		
		$(".outcomeE").html(qAndA[i][5] + "</br>");
		$(".outcomeE").append(qAndA[i][6]);
	} else if (j===5) {
		$(".outcome").html("Sorry, time up!");
		iAnswers++;		
		$(".outcomeE").html(qAndA[i][5] + "</br>");
		$(".outcomeE").append(qAndA[i][6]);
	} else {
		$(".outcome").html("Sorry, answer is incorrect.");
		iAnswers++;		
		$(".outcomeE").html(qAndA[i][5] + "</br>");
		$(".outcomeE").append(qAndA[i][6]);
	} 
	if (i<=n){
		setTimeout(function(){
			$(".outcome").html("");
			$(".outcomeE").html("");
			if (i === n){
				scorecard();
			}
			if (i<n){
				i++;
				playGame();
			}
		},5000);
	}
}

function playGame(){
	clock();
	//Questions and potential answers are displayed
	$(".q").html(qAndA[i][0]);
	$(".a1").html(qAndA[i][1]);
	$(".a2").html(qAndA[i][2]);
	$(".a3").html(qAndA[i][3]);
	$(".a4").html(qAndA[i][4]);
	$(".a").css({"border-width": "3px"});
	j=5;
}

function scorecard(){
	$(".sTitle").html("Thanks for playing! Here's how you did:");
	$(".s1").html("Correct answers: " + cAnswers);
	$(".s2").html("Incorrect answers: " + iAnswers);
	$(".s3").html("Incorrect answers: " + (n+1-cAnswers-iAnswers));
	$(".s4").html("Start Over");
	$(".s4").css({"border-width": "3px"});		
}

function restart(){
	$(".s").html("");
	$(".s4").css({"border-width": "0px"});
	i=0;
	cAnswers = 0;
	iAnswers = 0;
	playGame();	
}

//Start game
$(".start").click(function(){
	// Removes start sign
	$(".start").html("");
	$(".start").css({"border-width": "0px"});
	i=0;
	cAnswers = 0;
	iAnswers = 0;
	//Specifies on-click functions for each answer tag
	$(".a1").click(function(){
		j=1;
		answer();
	})
	$(".a2").click(function(){
		j=2;
		answer();
	})
	$(".a3").click(function(){
		j=3;
		answer();
	})
	$(".a4").click(function(){
		j=4;
		answer();
	})
	$(".s4").click(function(){
		restart();
	})
	playGame();
});







