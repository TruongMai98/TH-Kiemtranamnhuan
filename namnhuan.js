let year = parseInt(prompt('Enter a year'));
let isLeapYear = false;
let isLeapYearBy4 = year % 4 == 0;

if (isLeapYearBy4){
    let isLeapYearBy100 = year % 100 == 0;
    if (isLeapYearBy100){
        let isLeapYearBy400 = year % 400 == 0;
        if (isLeapYearBy400){
            isLeapYear = true;
        }
    }else {
        isLeapYear = true;
    }
}
if (isLeapYear){
    alert(year + " is a leap year");
}else {
    alert(year + ' is not a leap year');
}