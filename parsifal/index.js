const bookLists = document.querySelector(".book-lists");

function moreBooksFunction() {
  bookLists.classList.add("more-books");
}

const navMenu = document.querySelector(".navMenu");
const navbtn = document.querySelector("#opneMenyBtn");
const closeBtn = document.querySelector("#closeMenyBtn");

navMenu.style.right = "-300px";
navbtn.onclick = function () {
  if (navMenu.style.right == "-300px") {
    navMenu.style.right = "0px";
    closeBtn.style.display = "inline-block";
    navbtn.style.display = "none";
  }
};

closeBtn.onclick = function () {
  if (navMenu.style.right == "0px") {
    navMenu.style.right = "-300px";
    navbtn.style.display = "inline-block";
    closeBtn.style.display = "none";
  }
};

// navbtn.addEventListener("click", () => {
//   navMenu.style.display = "flex";
//   closeBtn.style.display = "inline-block";
//   navbtn.style.display = "none";
// });

// closeBtn.addEventListener("click", () => {
//   navMenu.style.display = "none";
//   navbtn.style.display = "inline-block";
//   closeBtn.style.display = "none";
// });
