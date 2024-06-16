let btn = document.querySelector("button");
let para = document.querySelector("p");
let writer = document.querySelector("h4");
let body = document.querySelector("body");
let quotes = [{quote : "The only limit to our realization of tomorrow is our doubts of today.",
person:"Franklin Roosevelt"},{quote: "In three words I can sum up everything I've learned about life: it goes on.", person: "Robert Frost"},{quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", person: "Ralph Waldo Emerson"},{quote: "The best way to predict the future is to invent it.", person: "Alan Kay"}
,{quote: "Life is what happens when you're busy making other plans.", person: "John Lennon"},{quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", person: "Buddha"},{quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", person: "Winston Churchill"},{quote: "You miss 100% of the shots you don't take.", person: "Wayne Gretzky"},{quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", person: "Martin Luther King Jr."},{quote: "It is never too late to be what you might have been.", person: "George Eliot"},{quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", person: "Ralph Waldo Emerson"}]

btn.addEventListener("click",function(){
      let random = Math.floor(Math.random()*quotes.length);
      para.innerText = quotes[random].quote;
      writer.innerText = quotes[random].person;
})