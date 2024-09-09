const APILINK =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b64647d7c38cbdfbfd13f20e3c627373&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=b64647d7c38cbdfbfd13f20e3c627373&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK);
function returnMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data.results);
      data.results.forEach((element) => {
        const div_card = document.createElement("div");
        div_card.setAttribute("class", "card");
        const div_row = document.createElement("div");
        div_row.setAttribute("class", "row");
        const div_column = document.createElement("div");
        div_column.setAttribute("class", "col");
        const image = document.createElement("img");
        image.setAttribute("class", "thumbnail");
        const title = document.createElement("h3");

        title.innerHTML = `${element.title}`;
        image.src = IMG_PATH + element.poster_path;
        div_card.appendChild(image);
        div_card.appendChild(title);
        div_column.appendChild(div_card);
        div_row.appendChild(div_column);

        main.appendChild(div_row);
      });
    });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = "";
  const searchItem = search.value;
  if (searchItem) {
    returnMovies(SEARCHAPI + searchItem);
    search.value = "";
  }
});

// slider functionality

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slider").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slider").prepend(items[items.length - 1]);
});

//  <!-- function for popup viewer -->
let popupViews = document.getElementsByClassName(".popup-view");
let popupBtns = document.getElementsByClassName(".popup-btn");
let closeBtns = document.getElementsByClassName(".close-btn");
//  <!-- quickview function -->
let popup = function (popupClick) {
  popupViews[popupClick].classList.add("active");
};
popupBtns.forEach((popupBtn, i) => {
  popupBtn.addEventListener("click", () => {
    popup(i);
  });
});

// function for closeBtn

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    popupViews.forEach((popupView) => {
      popupView.classList.remove("active");
    });
  });
});



// slider functionality
let slideIndex =1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex += n);
}

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if(n > slides.length){
    slideIndex = 1;
  }
  if(n < 1){
    slideIndex = slides.length;
  }
  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//  <!-- contact us form -->
// Add event listener to the submit button
document.querySelector('button[type="submit"]').addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.querySelector('input[type="email"]').value;
  const message = document.querySelector('textarea').value;
  // Send the email and message to the server using AJAX or email API
  });