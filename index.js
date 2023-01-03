let navbar = document.querySelector(".collapse").querySelectorAll("a");
navbar.forEach((ele) => {
  ele.addEventListener("click", function () {
    navbar.forEach((nav) => {
      nav.classList.remove("show");
    });
    this.classList.add("show");
  });
});



let typed = new Typed(".auto-text", {
  strings: [
    "FrontEnd Web Developer..!",
    "FrontEnd Web Designer..!",
    "UI/UX Designer..!",
  ],
  typeSpeed: 200,
  backSpeed: 100,
  loop: true,
});

// ============== Popup Code================
// window.addEventListener('scroll',(e)=>{
//   e.preventDefault();
  
//   if(window.scrollY>900){
//    let timeout= setTimeout(function () {
//       var popup = document.querySelector(".popup");
//       popup.style.display = "block";
//       let dismiss = document
//         .querySelector(".dismiss")
//         .addEventListener("click", () => {
//           popup.style.display = "none";
//         });
//     }, 7000);
//   }
//   if(window.scrollY<=0){
//     clearTimeout(timeout);
//   }
 
// });


// ============== Projects Section JS Code===================
let filterbtn=document.querySelectorAll('.gallery .Filter');
console.log(filterbtn);
let project=document.querySelectorAll('.projects .img-overlay');
console.log(project);

filterbtn.forEach((item)=>{
   item.addEventListener('click',()=>{
      filterbtn.forEach((btn)=>{
        btn.classList.remove('active');
      });
      item.classList.add('active');
      project.forEach((show)=>{
         show.style.display="none";
         let proj=item.textContent.toLowerCase();
         if(show.getAttribute('data-item')===proj || proj==='all'){
          show.style.display="block";
         }
      });
   });
});