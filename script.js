
//computer weapon
let computerweapon = function(){
  let computer = ['rock','paper','scissor'];
let randomnumber = Math.trunc(Math.random()*3);
return(computer[randomnumber]);
}
let userscore = 0;
let computerscore = 0;
//user weapon
let userweapon = function(userfinal){   
   document.getElementById('uc').innerHTML=userfinal;
   const computerfinal = computerweapon();
   document.getElementById('cc').innerHTML= computerfinal;
   let result = userfinal + computerfinal;
   
   if (userfinal == computerfinal) {
      document.getElementById('result').innerHTML = 'Match Draw';
   } else if (
     result === 'rockscissor' ||
     result === 'paperrock' ||
     result === 'scissorpaper'
   ) {
     document.getElementById('result').innerHTML = 'You Win';
     userscore += 2;
     computerscore -= 2;
   } else if (
     result === 'scissorrock' ||
     result === 'rockpaper' ||
     result === 'paperscissor'
   ) {
     document.getElementById('result').innerHTML = 'You Lose';
     userscore -= 2;
     computerscore += 2;
   } else {
     document.getElementById('result').innerHTML = 'Invalid Input';
   }
   document.getElementById('computer-score').innerHTML = computerscore;
   document.getElementById('user-score').innerHTML = userscore;
   
}

