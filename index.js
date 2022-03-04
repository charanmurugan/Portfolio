let myNav = document.getElementById("header");
window.onscroll = function () {
  "use strict";
  if (
    document.body.scrollTop >= 480 ||
    document.documentElement.scrollTop >= 480
  ) {
    myNav.classList.add("introContainer-headerColored");
    Circlle(".round");
  } else {
    myNav.classList.add("introContainer-header");
    myNav.classList.remove("introContainer-headerColored");
  }
};
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  myFunction()
  Circlle(".round");
  check=""
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
};

function displayMenu() {
  document.querySelector(".menu-barContainer").style.display = "flex";
  document.querySelector(".menu-barContainer").style.position = "fixed";
}
function closeMenu() {
  document.querySelector(".menu-barContainer").style.display = "none";
}
function hideMenu() {
  document.querySelector(".menu-barContainer").style.display = "none";
}
var date = new Date().getFullYear();
document.getElementById(
  "copyRight"
).innerHTML = `&copy; ${date} Charan Murugan `;

function Circlle(el) {
    $(el)
      .circleProgress({ fill: { color: "#ff5c5c" } })
      .on("circle-animation-progress", function (event, progress, stepValue) {
        $(this).find("round");
      });
}
var modal = document.getElementById("techSkills");

// Get the button that opens the modal
var techbtn = document.getElementById("techBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("tech-close")[0];

// When the user clicks the button, open the modal
techbtn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let image =["amazon clone","weather","newsLetter","login","musicapi","todoList"];
let projectName=["Amazon Clone","Weather","News Letter","Authentication with Social Media","Music Api","Todo List"];
let projectDetails=[
  "<span>Amazon clone</span> with full functionality, it includes user authentication with <span>firebase</span> and cloud storage with firebase. The payment process is done with <span>stripe payment</span>  with their functionality process and checks the card number and the payment is done. The project was done with <span>React</span>.",
  "It is a  weather application, used to display the current weather details implemented through<span> Weather Api</span>.It display the current weather details based on the <span>user input</span>.",
  "It is a  newsletter application, used as a contact form implemented through<span> Mailchimp</span>. Mailchimp is an <span>all-in-one marketing platform</span> that helps you manage and talk to your clients, customers, and other interested parties. ",
  "It is a  <span>Login/Register </span>application, implemented through passport.js,  where users can Login/register through <span>Google</span>, <span>Facebook</span>.",
  "It is a  <span>Music </span>application, implemented through <span>iTunes Api</span>,based on the <span>user input </span> such as actor, singer, the songs will be displayed they can play the song and can add to the <span> like list </span>.",
  "It is a Simple todo List, where the user can add the work to do and delete it after the work is completed"
];

let projectExplore=[
  "https://www.linkedin.com/posts/charan-murugan-2a84521b2_amazon-firebase-firebase-activity-6776485695700779008-bNrX",
  "https://ancient-sands-47871.herokuapp.com/",
  "https://calm-garden-64320.herokuapp.com/",
  "https://www.linkedin.com/posts/charan-murugan-2a84521b2_google-facebook-activity-6757287670004768768-oxiH",
  "https://drive.google.com/file/d/1k2mTiQSnDHnL-kSvAxiKsaJ9g-cSc-oL/view",
  "https://www.linkedin.com/posts/charan-murugan-2a84521b2_database-nosql-mongodb-activity-6755158210765742080-zV70"


];
let projectCode=[
  "https://github.com/charanmurugan/amazon-clone",
  "https://github.com/charanmurugan/weatherapp",
  "https://github.com/charanmurugan/newsletter",
  "https://github.com/charanmurugan/authentication",
  "https://github.com/charanmurugan/musicapi",
  "https://github.com/charanmurugan/todolist"
];


function getProjectNumber(event){
  let elems = document.querySelectorAll(".active");
  elems.forEach(el=>el.classList.remove("active"));
    let target = event.target || event.srcElement;
    event.target.classList.add("active");
    let number=event.target.innerHTML -1;
    // alert(`${image[number]}`);
   document.querySelector(".projectImage").src=`./images/projects/${image[number]}.jpeg`;
   document.querySelector(".project-name").innerText=`${projectName[number]}`;
   document.querySelector(".project-details").innerHTML=`${projectDetails[number]}`;
   document.querySelector(".projectExplore").href=`${projectExplore[number]}`;
   document.querySelector(".projectCode").href=`${projectCode[number]}`;
}



//  mobile view for project


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" mobile-active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}


$("#submit-form").submit((e)=>{
  e.preventDefault()
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbyLW1JsKJrCFmz4trtw1_hAZgFiFQTdDZoOlIySNDuIZN9mmH4UdFFE6c0F-HwsBWM6Zw/exec",
      data:$("#submit-form").serialize(),
      method:"post",
      success:function (response){
        let frm=document.querySelector("#submit-form");
        alert("Form submitted successfully")
        frm.reset();
          
          // window.location.reload()
      },
      error:function (err){
          alert("Something Error")

      }
  })
})

function formSubmitted() {
  window.scrollTo(0,0);
  }



let collegeYear=document.querySelector(".college");

let year=new Date().getFullYear();

year==2023?collegeYear.innerText="2020" : collegeYear.innerText="2019 - Present";



var myVar;

function myFunction() {
  myVar = setTimeout(showPage,3250);
}

function showPage() {
  document.getElementById("loaderContainer").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}