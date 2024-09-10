let date = new Date();
let dayofWeekNumber = date.getDay();
let nameOfTheDay;
let quote;

console.log(dayofWeekNumber);

switch(dayofWeekNumber){
    case 0:
        nameOfTheDay = "Sunday";
        quote = "Sit back and Relax!!"
        break;
    case 1:
        nameOfTheDay = 'Monday';
        quote = "Fight the Monday Blues!!"
        break; 
    case 2:
        nameOfTheDay = "Tuesday";
        quote = "Time for some Action!!"
        break;  
    case 3:
        nameOfTheDay = "Wednesday";
        quote = "Midweek crisis!!"
        break;   
    case 4:
        nameOfTheDay = "Thursday";
        quote = "Weekend is almost here!!"
        break;
    case 5:
        nameOfTheDay = "Friday";
        quote = "Weekend is here!!"
        break;
    case 6:
        nameOfTheDay = "Saturday";
        quote = "Let's Party!!"
        break;                      
}

let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfTheDay}`;

let quoteDiv = document.getElementById('quote');
quoteDiv.innerHTML = `${quote}`;