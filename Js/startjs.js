// const cardContainer = document.getElementById("card-container");
// const cards = cardContainer.querySelectorAll( ".card" );
// const filterButton = document.querySelector( '#button' );
// const Decending = document.querySelector( '#buttondec' );

// function sortCards(  )
// {
  
//   const sortedCards = Array.from(cards).sort((a, b) => {
//     const priceA = parseInt(a.querySelector("li:nth-child(3)").textContent.replace(/\D/g, ""));
//     const priceB = parseInt(b.querySelector("li:nth-child(3)").textContent.replace(/\D/g, ""));
//     return priceB - priceA;
//   });
//   sortedCards.forEach(card => cardContainer.appendChild(card));
// }

// filterButton.addEventListener( 'click',() => {
    
//     sortCards();
// })
// //  dedening order


// function sortCardsDescending() {
//   const sortedCards = Array.from(cards).sort((a, b) => {
//     const priceA = parseInt(a.querySelector("li:nth-child(3)").textContent.replace(/\D/g, ""));
//     const priceB = parseInt(b.querySelector("li:nth-child(3)").textContent.replace(/\D/g, ""));
//     return priceA-priceB;
//   });
//   sortedCards.forEach(card => cardContainer.appendChild(card));
// }

// Decending.addEventListener( 'click', () =>
// {
//     sortCardsDescending();

    
// } )







// Gets a reference to the card container element using document.getElementById("card-container"). This assumes that the card container has an ID of "card-container".
// Gets a list of all the card elements inside the card container using cardContainer.querySelectorAll(".card"). This assumes that the card elements have a class of "card".
// Defines a function called sortCards() that will sort the list of card elements based on their price.
// Inside the sortCards() function, it creates a new array of the card elements using Array.from(cards). This converts the NodeList of card elements to an array so that it can be sorted.
// The sort() method is then called on the array, which takes a function as an argument that defines the sort order. In this case, the sort order is based on the price of each card, which is extracted from the third <li> element inside each card using a.querySelector("li:nth-child(3)").textContent.replace(/\D/g, ""). This finds the third <li> element inside the a card element and extracts its text content, which is assumed to be a price in the format "xx$". The .replace(/\D/g, "") part removes all non-digit characters from the text, leaving just the price as a number.
// The sort() method returns a negative value if priceB is greater than priceA, which causes the card elements to be sorted in descending order by price.
// The sorted array of card elements is then looped over using sortedCards.forEach(), and each card element is appended back to the card container using cardContainer.appendChild(card).
// Finally, the sortCards() function is called once at the end to initialize the card sorting based on the initial prices.







// Get the search input and filter select elements
const searchInput = document.querySelector('#search');

const levelSelect = document.querySelector('#level');
const durationSelect = document.querySelector('#duration');
const priceSelect = document.querySelector( '#price' );
const LanguageSelect = document.querySelector( '#language' );

// Get all the course cards
const cards = document.querySelectorAll('.card');
// Add event listeners to the search input and filter select elements
searchInput.addEventListener('keyup', filterCourses);

levelSelect.addEventListener('change', filterCourses);
durationSelect.addEventListener('change', filterCourses);
priceSelect.addEventListener( 'change', filterCourses );
LanguageSelect.addEventListener( 'change', filterCourses );

function filterCourses() {
  // Get the values of the search input and filter select elements
  const searchValue = searchInput.value.toLowerCase();
  const levelValue = levelSelect.value.toLowerCase();
  const durationValue = durationSelect.value.toLowerCase();
  const priceValue = priceSelect.value.toLowerCase();
  const languageValue = LanguageSelect.value.toLowerCase();

  // Loop through all the course cards and hide/show them based on the filter values
  cards.forEach(card => {
  
    const titleElement = document.querySelector( 'h2' );
    const title = titleElement.textContent;
    const topic = card.querySelector('.topic').textContent.toLowerCase();
    const level = card.querySelector('.level').textContent.toLowerCase();
    const duration = card.querySelector( '.duration' ).textContent.toLowerCase();
    const language = card.querySelector( '.language' ).textContent.toLocaleLowerCase();
    const price = card.querySelector('.price').textContent.toLowerCase();
    if (topic.includes(searchValue) && (level === levelValue || !levelValue) && (duration === durationValue || !durationValue) && (price === priceValue || !priceValue)&&(languageValue===language||!languageValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Add hover effect to course cards
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('hover');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('hover');
  });
}); 