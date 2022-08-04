
let day = prompt("Please enter your date of birth");
let month = prompt("Please enter your month of birth");


let result = "";
switch (month) {
    case "1":
        if (day < 21 && day >= 1) {
            result = "Capricorn"
        } else if (day >= 21 && day <= 31) {
            result = "Aquarius"
        }
        break;
    case "2":
        if (day < 20 && day >= 1) {
            result = "Aquarius"
        } else if (day >= 20 && day <= 29) {
            result = "Pisces"
        }
        break;
    case "3":
        if (day < 22 && day >= 1) {
            result = "Pisces"
        } else if (day >= 22 && day <= 31) {
            result = "Aries"
        }
        break;
    case "4":
        if (day < 21 && day >= 1) {
            result = "Aries"
        } else if (day >= 21 && day <= 30) {
            result = "Taurus"
        }
        break;
    case "5":
        if (day < 22 && day >= 1) {
            result = "Taurus"
        } else if (day >= 22 && day <= 31) {
            result = "Gemini"
        }
        break;
    case "6":
        if (day < 21 && day >= 1) {
            result = "Gemini"
        } else if (day >= 21 && day <= 30) {
            result = "Cancer"
        }
        break;
    case "7":
        if (day < 23 && day >= 1) {
            result = "Cancer"
        } else if (day >= 230 && day <= 31) {
            result = "Leo"
        }
        break;
    case "8":
        if (day < 24 && day >= 1) {
            result = "Leo"
        } else if (day >= 24 && day <= 31) {
            result = "Virgo"
        }
        break;
    case "9":
        if (day < 24 && day >= 1) {
            result = "Virgo"
        } else if (day >= 24 && day <= 30) {

            result = "Libra"
        }
        break;
    case "10":
        if (day < 23 && day >= 1) {
            result = "Libra"
        } else if (day >= 23 && day <= 31) {
            result = "Scorpio"
        }
        break;
    case "11":
        if (day < 22 && day >= 1) {
            result = "Scorpio"
        } else if (day > -22 && day <= 30) {
            result = "Sagittarius"
        }
        break;
    case "12":
        if (day < 22 && day >= 1) {
            result = "Sagittarius"
        } else if (day >= 22 && day < 31) {
            result = "Capricorn"
        }
        break;
}

if (result != "") {
    alert("Your zodiac sign is " + result);
}
else {
    alert("Month or date is invalid!");
}



