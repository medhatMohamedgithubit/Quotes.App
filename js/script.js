var arr = [
    {othor: "Marilyn Monroe", 
     text: "I'm selfish, impatient and a little insecure. I make mistakes, ",
      
    },
    {othor: "William W. Purkey", 
    text: "You've gotta dance like there's nobody watching  Love like you'll never be hurt",
    },
    {othor: "Dr. Seuss", 
    text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams",
    },
    {author: "Elbert Hubbard", 
     text: "A friend is someone who knows all about you and still loves you.",
    },
    {othor: " John Green", 
     text: "As he read, I fell in love the way you fall asleep: slowly, and then all at once.",
    },
    {othor: " Friedrich Nietzsche", 
     text: "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
    },
    {othor: "Mark Twain", 
     text: "If you tell the truth, you don't have to remember anything.",
    },
    {othor: " Oscar Wilde", 
     text: "Always forgive your enemies; nothing annoys them so much.",
    },
];



function Quotes(){
    var quote = arr[Math.floor(Math.random() * arr.length)] 
    document.getElementById("quote").textContent = quote.text;
    document.getElementById("othor").textContent = quote.othor;
    
}
