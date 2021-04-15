setTimeout(function(){
        for (var elem in document.getElementsByClassName("random-emoji")) {
          elem.innerText=String.fromCharCode(Math.floor(Math.random()*3094)+0x231a)
        }
      }, 1000)
