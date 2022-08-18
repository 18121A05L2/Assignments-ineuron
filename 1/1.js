// let year = prompt("enter a year");
let year = 200

function checkingLeapYear(year) {
    if (year % 4 == 0 ) {
        if (year % 100 == 0 && year % 400 != 0) {
            console.log(year + " is not a leap year");
        } else {
            console.log(year + " is a leap year");
        }
    } else {
        console.log(year + " is not leap year");
    }
}
checkingLeapYear(year)