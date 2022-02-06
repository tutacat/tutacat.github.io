setTimeout(function(){
        for (elem of document.querySelectorAll(".random-emoji")) {
          elem.onclick=(e)=>{navigator.clipboard.writeText(e.target.innerText);e.target.value=e.target.innerText=String.fromCharCode(Math.floor(Math.random()*3094)+0x231a)}
        }
      }, 0)
