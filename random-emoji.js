/* random-emoji.js */
setTimeout(() => {
  for (elem of document.querySelectorAll(".random-emoji")) {
      elem.onclick = (e) => {
          setTimeout(() => {
              e.target.style.fontSize = "initial";e.target.innerText = String.fromCharCode(
                  Math.floor(Math.random()*3094)+0x231a
                );
              navigator.clipboard.writeText(e.target.innerText);
          },100);
          e.target.style.fontSize = "1.5em";
          e.target.innerText = "*boop*";
        }
    }
}, 0);
