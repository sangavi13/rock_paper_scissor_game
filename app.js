
function computer(){
    var arr=["Rock","Papers","Scissors"];
    var brr=Math.floor(Math.random()*3);
    return arr[brr];
}
function user(choice){
    document.getElementById("player_choice").innerHTML=choice;
    var computerchoice=computer();
    document.getElementById("computer_choice").innerHTML=computerchoice;

if(choice===computerchoice){
    document.getElementById("result").innerHTML="Draw";   
}

else if(((choice==="Papers")&&(computerchoice==="Rock"))||((choice==="Scissors")&&(computerchoice==="Papers"))||((choice==="Rock")&&(computerchoice==="Scissors)"))){
    document.getElementById("result").innerHTML="user won"; 
}
else{
    document.getElementById("result").innerHTML="computer won"; 
}
               
}
/*
    switch(choice+computerchoice){
        case "RockScissors":
        case "PapersRock":
        case "ScissorsPapers":
            document.getElementById("result").innerHTML="user won"; 
            break;
    
        case "ScissorsRock":
        case "RockPapers": 
        case "PapersScissors":   
                document.getElementById("result").innerHTML="computer won"; 
                break;
        
    case "ScissorsScissors":
    case "RockRock": 
    case "PapersPapers":   
            document.getElementById("result").innerHTML="Match draw"; 
            break;
           
}*/




