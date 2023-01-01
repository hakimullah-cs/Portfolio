let navbar=document.querySelector('.collapse').querySelectorAll('a');
console.log(navbar);
navbar.forEach((ele)=>{
    ele.addEventListener('click',function(){
        navbar.forEach((nav)=>{nav.classList.remove('show')});
        this.classList.add('show');
    });
});
setTimeout(function(){
    alert("Hello Sir/Madam! Welcome to my personal Website & You have any query plx contact me!");
},7000);





let typed=new Typed(".auto-text",{
    strings: ["FrontEnd Web Developer..!","FrontEnd Web Designer..!","UI/UX Designer..!"],
    typeSpeed:200,
    backSpeed:100,
    loop: true
    });