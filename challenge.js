// To begin comment out the script tag linking to index.min.js in the html file. Write your code in challenge.js
//


// As a user, i can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number
// As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'
// As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"
let isPause = false
const counter = document.getElementById('counter')
const decrease = document.getElementById('-')
const increase = document.getElementById('+')
const heart = document.getElementById('<3')
const pause = document.getElementById('pause')
const likes = document.getElementById('likes')
const list = document.getElementById('list')
const comment = document.getElementById('comment-form')
let counterNum = parseInt(counter.innerText)


increase.addEventListener("click", function(){
  if( isPause === false ){
  counterNum ++ }})

decrease.addEventListener("click", function(){
  if ( isPause === false ){
  counterNum -- }})


  pause.addEventListener("click", function(){
    if( isPause === false ){
      isPause = true
      pause.innerText = "resume"
    }else if( isPause === true){
      isPause = false
      pause.innerText = "pause"
    }
  })


  comment.addEventListener("submit", function(){
    event.preventDefault()
    let textBox = document.getElementById("textbox")
    let tempElement = document.createElement('p')
    tempElement.innerText = textBox.value
    list.appendChild(tempElement)
    comment.reset()
  })









function increment(){
  if( isPause === false ){
    i = counterNum++;
    counter.innerText = i
  }
}



function start() {
  setInterval(increment, 1000)
}

start()
