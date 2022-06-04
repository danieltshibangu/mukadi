let arrow = document.querySelectorAll(".arrow");


for (var i=0; i < arrow.length; i++) {
arrow[i].addEventListener('click', (e) => {
    let arrowParent = e.target.parentElement.parentElement;
    console.log(arrowParent);
    arrowParent.classList.toggle("showMenu");
});
}


let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".other-sidebar .adjacent-sidebar .bx-menu");
let briefSidebar = document.querySelector(".brief-sidebar");
let restOfScreen = document.querySelector(".other-sidebar");
    
console.log(sidebarBtn);

sidebarBtn.addEventListener("click", () => {
    event.preventDefault();
    sidebar.classList.toggle("close");
    restOfScreen.classList.toggle('covering');
});


let list = document.querySelectorAll('.list');
function setActiveClass() {
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}
    list.forEach((item) =>
    item.addEventListener('mouseover', setActiveClass))


function hover(description) {
    console.log(description);
    document.getElementById('item-description').innerHTML = description;
}

let cardSlideA = document.querySelector(".expense-tab .credit-cards .card-wrapper .credit1");
console.log(cardSlideA);

// ability for bar to slide when selecting recent or upcoming tabs

