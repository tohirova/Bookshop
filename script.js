// hamburger menu

const cancelButton = document.querySelector('.cancel-btn');
const hamburgerButton = document.querySelector('.header-hamburger');

const menu = document.querySelector(".wrapper-left");
const menuItems = document.querySelectorAll(".menu-item");

hamburgerButton.addEventListener('click', ()=> {
  menu.classList.add('show');
})

cancelButton.addEventListener('click', ()=> {
  menu.classList.remove('show');
  menu.classList.add('wrapper-left')
})
// const hamburger= document.querySelector(".hamburger");
// const closeIcon= document.querySelector(".closeIcon");
// const menuIcon = document.querySelector(".menuIcon");

// function toggleMenu() {
//   if (menu.classList.contains("showMenu")) {
//     menu.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//     menuIcon.style.display = "block";
//   } else {
//     menu.classList.add("showMenu");
//     closeIcon.style.display = "block";
//     menuIcon.style.display = "none";
//   }
// }

// hamburger.addEventListener("click", toggleMenu);

// menuItems.forEach( 
//   function(menuItem) { 
//     menuItem.addEventListener("click", toggleMenu);
//   }
// )


// Rendering the books to the UI
function renderCards( title, description, price){
  let card = document.createElement('div');
  card.className = 'card';

  let cardLabel = document.createElement('h2');
  cardLabel.className = "card-label menu-title";
  cardLabel.innerHTML = 'Books';

  let cardInfo = document.createElement('div');
  cardInfo.className = 'card-info';

  let cardTitle = document.createElement('h3');
  cardTitle.className = 'card-title';
  cardTitle.innerHTML = title;

  let cardInfoText = document.createElement('p');
  cardInfoText.className = 'card-desc';
  cardInfoText.innerHTML = description;


  let cardPrize = document.createElement('p');
  cardPrize.className = 'card-prize';
  cardPrize.innerHTML = 'Price:  '
  
  let cardAllPrice = document.createElement('span');
  cardAllPrice.innerHTML = price;

  cardPrize.append(cardAllPrice , " so'm");

  cardInfo.append(cardTitle , cardInfoText, cardPrize);

  card.append(cardLabel , cardInfo);

  return card;
}

const getCard = (books) => {
  const cards = document.querySelector('.cards');
  cards.innerHTML = '';

  
  books.forEach(({ title, description, price }) => {
    let card = renderCards(title, description , price);

    cards.appendChild(card);
  });
};
getCard(data);


// total price of the books
const getTotalPrice = () => {
  let tprice = document.getElementById('headerSum');
  tprice.innerHTML = `Total price: ${data.reduce((acc, el) => acc + +el.price, 0)} so'm`;

};
getTotalPrice();

// Search books by their title when the search button onlicked
let search = document.querySelector(".seach");
let searchButton = document.querySelector('.search-button');

searchButton.addEventListener("click", function () {
  let new_products = data.filter((book) =>
    book.title.toLowerCase().includes(search.value)
  );

  getCard(new_products);

  if(search.value = ''){
    getCard(data);
  }
});

// Filter books when they onclicked ;
const filterAll = document.getElementById('all');
const filterExpensive = document.getElementById('expensive');
const filterCheep = document.getElementById('cheep');
const filterMiddle = document.getElementById('middle');

filterAll.addEventListener('click', ()=> {
  getCard(data);
  menu.classList.remove('show');
  menu.classList.add('wrapper-left')
});

filterExpensive.addEventListener('click', ()=> {
  let expensiveProducts = data.filter((book) =>
    book.status.includes('expensive')
  );

  menu.classList.remove('show');
  menu.classList.add('wrapper-left')

  getCard(expensiveProducts);
})

filterCheep.addEventListener('click', ()=> {
  let cheapProducts = data.filter((book) =>
    book.status.includes('cheep')
  );

  menu.classList.remove('show');
  menu.classList.add('wrapper-left')
  getCard(cheapProducts);
})

filterMiddle.addEventListener('click', ()=> {
  let cheapProducts = data.filter((book) =>
    book.status.includes('middle')
  );
  menu.classList.remove('show');
  menu.classList.add('wrapper-left')
  getCard(cheapProducts);
});

// Filter the books by its price

const filterInput = document.querySelector('.filter-input');
const minButton = document.querySelector('.min-button');
const maxButton = document.querySelector('.max-button');

minButton.addEventListener('click', ()=> {
  let minPrice = data.filter((book) =>
    book.price < Number(filterInput.value)
  );
  menu.classList.remove('show');
  menu.classList.add('wrapper-left')
  
  getCard(minPrice);
});

maxButton.addEventListener('click', ()=> {
  let maxPrice = data.filter((book) =>
    book.price > Number(filterInput.value)
  );
  menu.classList.remove('show');
  menu.classList.add('wrapper-left')
  if(maxPrice.length > 0){
    getCard(maxPrice);
  }else{
    const cards = document.querySelector('.cards');
    cards.innerHTML = `Unfortunately there is no any books more than this ${filterInput.value} so'm`
  }
})










