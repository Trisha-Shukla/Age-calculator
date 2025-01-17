let calculate=document.getElementsByClassName("container-1")[0].children[1];
let Year=document.getElementById("Years");
let Month=document.getElementById("Months");
let Day=document.getElementById("Days");

const months = [31,28,31,30,31,30,31,31,30,31,30,31];

calculate.addEventListener("click", ageCalculate);
function ageCalculate(){
    let today = new Date();
    let inputDate=new Date(document.getElementsByClassName("container-1")[0].children[0].value);
    let birthMonth,birthDate,birthYear;
    let birthDetails = {
        date:inputDate.getDate(),
        month:inputDate.getMonth()+1,
        year:inputDate.getFullYear()
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();

    leapChecker(currentYear);

    if(
        birthDetails.year > currentYear ||
        ( birthDetails.month > currentMonth && birthDetails.year == currentYear) || 
        (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
    ){
        alert("Not Born Yet");
        displayResult("-","-","-");
        return;
    }

    birthYear = currentYear - birthDetails.year;

    if(currentMonth >= birthDetails.month){
        birthMonth = currentMonth - birthDetails.month;
    }
    else{
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if(currentDate >= birthDetails.date){
        birthDate = currentDate - birthDetails.date;
    }
    else{
        birthMonth--;
        let days = months[currentMonth - 2];
        birthDate = days + currentDate - birthDetails.date;
        if(birthMonth < 0){
            birthMonth = 11;
            birthYear--;
        }
    }
    displayResult(birthDate,birthMonth,birthYear);
}

function displayResult(bDate,bMonth,bYear){
    Year.textContent =bYear;
    Month.textContent = bMonth;
    Day.textContent = bDate;
}
function leapChecker(year){
    if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
        months[1] = 29;
    }
    else{
        months[1] = 28;
    }
}
