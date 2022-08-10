let stringDate = prompt("Enter the date as dd.mm.yyyy");
let dateArr= stringDate.split (".");
let dateObj = new Date (stringDate);
let dateNotCorrect = false;
if (dateArr [2]!= dateObj.getDate() +1|| dateArr [1] != dateObj.getMonth ||
dateArr[0] != dateObj.getFullYear());{
alert("Dare is not correct");
dateNotCorrect = true;
}

if (!dateNotCorrect) {
let result;
switch (dateObj.getMonth()){

    case 0 :
        if(dateObj.getDate() < 21 )
        result = " Capricorn" ;
        else
        result = " Aquarius";
    break;
}
alert ("Zodiak is" + result);
}
