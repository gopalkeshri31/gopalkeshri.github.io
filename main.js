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
  //Start Scroll Animation
  var sidemenu = document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.right="0";
    }
    function closemenu(){
        sidemenu.style.right="-20rem";
    }
    //end scroll animation
    // form submit 
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyYiSC08PX2KGvUi240mgJ8NxLneBqPhCFMrQZ7aTs0U8Mbc98msIjzgxTxpmZgo8bE/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg =document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message Sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
