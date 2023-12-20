let links = document.querySelectorAll("header nav a");
links[0].className = " active"

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
  });
}

const head = document.querySelector("header");

document.addEventListener("scroll", ()=>{
    if(window.scrollY > 10){
        head.style.backgroundColor = "#252525"
    }
    else{
        head.style.backgroundColor = "rgba(0,0,0,0)"
    }
    if(window.scrollY < 300){
        links[0].className = " active";
        links[1].className = "";
        links[2].className = "";
        links[3].className = "";
    }
    else if(window.scrollY > 550){
        links[1].className = " active";
        links[0].className = "";
        links[2].className = "";
        links[3].className = "";
    }
})

let cont = document.querySelector(".open");
let opens = document.querySelectorAll(".open div");
let close = document.querySelector(".close")

cont.addEventListener("mouseover", function(){
  opens.forEach(e => {
    e.className = "opens-active"
    e.style.width = "100%"
  })
})

cont.addEventListener("mouseout", function(){
  opens.forEach(e => {
    e.className = " "
  })

  opens[1].style.width = "80%"
  opens[2].style.width = "60%"
})

let nav = document.querySelector("nav");

cont.addEventListener("click", ()=>{
  nav.style.left = "0";
})

close.addEventListener("click", ()=>{
  nav.style.left = "-60%";
})
