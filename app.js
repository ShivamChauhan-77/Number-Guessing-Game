let maxNum = prompt("Enter the maximum number:");

let num = Math.floor(Math.random()*maxNum)+1;

let guess = prompt("Enter your guess");

while(true){
    if(guess == "quit"){
        console.log("You quit.");
        break;
    }
    if(guess == num){
        console.log("Congrats.You guessed it right.The number was", num);
        break;
    } else if(guess < num){
        guess = prompt("Try guessing a bigger number.")
    } else{
        guess = prompt("Try guessing a smaller number");
    }
}