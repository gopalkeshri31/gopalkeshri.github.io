//Start Type Animation
var typed = new Typed('#element', {
    strings: ['Web Developer','App Developer','Web Designer','Software Developer'],
    typeSpeed: 80,
  });
  // End Type Animation
  //Start Tab Animation
  var x = document.getElementsByClassName("tab-links");
  var y = document.getElementsByClassName("tab-contents");
      function opentab(tabname){
          for(tablink of x){
              tablink.classList.remove("active-link");
      }
      for(tabcontent of y){
              tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
  }
  // End Tab Animation