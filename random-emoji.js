/* random-emoji.js */
setTimeout(() => {
  for (elem of document.querySelectorAll(".random-emoji")) {
      elem.onclick = (e) => {
          setTimeout(() => {
              navigator.clipboard.writeText(e.target.innerText);
              e.target.style.fontSize = "initial";
              e.target.value = e.target.innerText = String.fromCharCode(
                  Math.floor(Math.random()*3094)+0x231a
                );
          },100);
          e.target.style.fontSize = "1.5em";
          e.target.innerText = "*boop*";
        }
    }
}, 0);
