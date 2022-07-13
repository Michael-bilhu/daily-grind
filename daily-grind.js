 //alert("It's working!");

/*
    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content
    Here are the items we need to change for each coffee:
    image - src of pic
    alt - alt tag of pic
    description - a paragraph of content about the coffee
    name - a name of today's coffee
    color - a color representing the coffee
    
    We may also use the following, but not part of the coffee itself
    
    today - the current day of the week
*/
function coffeeTemplate(coffee){
    let myReturn = "";

// load w/ data using += (the append operator). MUST use back ticks
    myReturn += 
    `
        <p>
             <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
             <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>
             <br>
             ${coffee.desc}
        </p>
    `;
    return myReturn;
}

let myDate = new Date();
let myDay = myDate.getDay();
let coffee = "";


//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);


if(urlParams.has("day")){//data on querystring, load from querystring
    myDay = urlParams.get("day");
}

// converts to integer a sit's a string from querystring
myDay = parseInt(myDay);

switch(myDay){

    case 0:
         today = "Sunday";

         coffee = {
            color : "sliver",
            name : "Caramel Latte",
            pic : "images/caramel-latte.jpg",
            alt: "A picture of a Caramel Latte",
            day: "Sunday",
            desc: `Caramel latte is the best!
                    Size- S,M,L`
        };
    break;

    case 1:
        today = "Monday";

        coffee = {
            color : "yellow",
            name : "Pumpkin-spice-latte",
            pic : "images/pumpkin-spice-latte.jpg",
            alt: "A picture of a Pumpkin-spice-latte",
            day: "Monday",
            desc: `Keep yourself by refresh Pumpkin-spice-latte !`
        };
    break;
    
    case 2:
        today = "Tuesday";

        coffee = {
            color : "green",
            name : "Drip",
            pic : "images/drip.jpg",
            alt: "A picture of a drip",
            day: "Tuesday",
            desc: `It's no surprise a lot of work went into creating this Drip for you!
            Sizes: 12oz | Hot ONLY`
        };
    break;

    
    case 3:
        today = "Wednesday";

        coffee = {
            color : "Pink",
            name : "Bubble Tea",
            pic : "images/bubble-tea.jpg",
            alt: "A picture of a Bubble Tea",
            day: "Wednesday",
            desc: `I like me some Bubble Tea!
            Sizes: 12oz - 32oz | Hot, iced, or blended `
        };
    break;

    case 4:
        today = "Thursday";

        coffee = {
            color : "brown",
            name : "Mocha",
            pic : "images/mocha.jpg",
            alt: "A picture of a mocha",
            day: "Thursday",
            desc: `I like mocha! Sizes: 12oz - 32oz | Hot, iced, or blended `
        };
    break;
    case 5:
        today = "friday";

        coffee = {
            color : "purple",
            name : "Frappaccino",
            pic : "images/frappaccino.jpg",
            alt: "A picture of a Frappaccino",
            day: "Friday",
            desc: `Frappaccino makes your day better!
            <br>
                Flavors: Vanilla bean, Strawberry, Matcha, Caramel, Mocha Chip`
        };
    break;
    
    case 6:
        today = "Saturday";

        coffee = {
            color : "red",
            name : "cold-brew",
            pic : "images/cold-brew.jpg",
            alt: "A picture of a cold-brew",
            day: "Saturday",
            desc: `Cold-brew coffee is the best coffee you feel comfortable paying for!
            Sizes: 12oz - 32oz`
        };
    break;
    
    default:
    today = "Something went wrong!";
    }


        
// let coffeeData = coffeeTemplate(coffee);
// alert(coffeeData);

// load coffee data to page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;

// console.log(coffee);

