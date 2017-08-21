
var questions = [
["Whose tennis serve was the fastest ever recorded?", "John Isner", "Andy Roddick", "Pancho Gonzalez", "Bill Tilden"],
["Which tennis player yelled 'you cannot be serious' at an umpire?", "John McEnroe", "Ilie Nastase", "Jimmie Connors","Nick Kyrgios"],
["How much does a tennis ball weight?", "1 to 1.07 ounces", "2 to 2.07 ounces", "3 to 3.07 ounces", "4 to 4.07 ounces"],
["Which tennis player is/was nicknamed 'The Rocket'?", "Rod Laver", "Roy Emerson", "Novak Djokovic", "Rafael Nadal"]
]

var answers = [4,1,2,1];
var images = [];

var i = 0;
$(".start").click(function(){
	$(".start").html("");
	$(".start").css({"border-width": "0px"});

	$(".q").html(questions[i][0]);
	$(".a").css({"border-width": "3px"});
	$(".a1").html(questions[i][1]);
	$(".a2").html(questions[i][2]);
	$(".a3").html(questions[i][3]);
	$(".a4").html(questions[i][4]);

	$(".a1").click(function)(){
		j=1
		if (j === answers[i]) {

		}
	}
	$(".a2").click(function)(){
		j=2
	}
	$(".a1").click(function)(){
		j=3
	}
	$(".a1").click(function)(){
		j=4
	}






});