    const button = document.querySelector("#btn");
    const colorButton = document.querySelector("#colorBtn");
    const cardContainer = document.querySelector(".card-container");
    const detailsButton = document.querySelector(".details-button");
    const description = document.querySelector(".description");
    const deleteButton = document.querySelector("#deleteBtn");
   
    button.addEventListener("click", function (e) {
      const cardToClone = document.querySelector(".card-container");
      const cardCloned = cardToClone.cloneNode(true);
      
    cardCloned.querySelector(".details-button").addEventListener("click", function (e) { //59-63 toggle description cloned cards
    const description = cardCloned.querySelector(".description");
    if (description) {
    description.classList.toggle("hidden");
    }
});   
      cardCloned.addEventListener('mouseover' , (e) => {
      cardCloned.style.backgroundColor = getRandomColor();
        }) 
     cardCloned.addEventListener('mouseout' , (e) => {
      cardCloned.style.backgroundColor = '';
     });
      
    document.querySelector(".cards").appendChild(cardCloned);
      

    });

    
    colorButton.addEventListener("click", function (e) {
    
      const randomColor = getRandomColor();
      cardContainer.style.backgroundColor = randomColor;
    });
    
        cardContainer.addEventListener('mouseover' , (e) => {
      cardContainer.style.backgroundColor = getRandomColor();
        }) //LINES 73 - 78 ARE THE CHNAGE TO THE HOVER
     cardContainer.addEventListener('mouseout' , (e) => {
      cardContainer.style.backgroundColor = '';
     });
   

    
    
const cardTitle = document.getElementById('cardTitle');
const titleBtn = document.getElementById('titleBtn');

    
   titleBtn.addEventListener("click", function (e) {
     console.log(cardTitle);
     
     console.log((cardTitle.innerText == 'something else'))
    if (cardTitle.innerText == 'something else'){
      cardTitle.innerHTML = 'Penn State Blue and White Game';
     }
     else{
      cardTitle.innerHTML = 'something else';
     }
    });

    detailsButton.addEventListener("click", function (e) {
     
      description.classList.toggle("hidden");
     
      
    });

    deleteButton.addEventListener("click", function (e) {
      
      const cards = document.querySelectorAll(".card-container");
      if (cards.length > 1) {
        const lastCard = cards[cards.length - 1];
        lastCard.parentNode.removeChild(lastCard);
      }
    });
 
    titleButton.addEventListener("click", function (e) {
      
      
      cardTitle.textContent = "something else";
    });
    
  
    

    // Function to generate a random color
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }