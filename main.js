// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.querySelector('#modal')
// modal.hidden = true

const heart = document.querySelector('.like-glyph')

const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const changeColor = {
  "red": "",
  "": "red"
}

heart.addEventListener("click", e => {
  mimicServerCall('http://mimicServer.example.com')
    .then(resp => {
        heart.innerText = glyphStates[heart.innerText]
        heart.style.color = changeColor[heart.style.color]
    })

    .catch(error => {
      modal.className = ""
      modal.innerText = error
      setTimeout(() => { modal.className = "hidden", 3000})
    })
})





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
