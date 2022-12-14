let audio = document.querySelector('.mus')
let play = document.querySelector('.play')
let pause = document.querySelector('.pause')
let info = document.querySelector('.info')
let fast = document.querySelector('.forward')
let slow = document.querySelector('.backward')
let playrate = document.querySelector('.playrate')
let songs = ["harry/0.mp3","harry/1.mp3","harry/2.mp3","harry/3.mp3","harry/4.mp3"]
let next = document.querySelector('.next')
let previous = document.querySelector('.previous')
let i = 0;
let backw = document.querySelector('.backw')
let forw = document.querySelector('.forw')
let mydiv = document.querySelector('.mydiv')

play.addEventListener('click', function (e) {
  play.style.display = 'none'
  pause.style.display = 'inline-block'
  audio.play()
})
pause.addEventListener('click', function () {
  pause.style.display = 'none'
  play.style.display = 'inline-block'
  audio.pause()
})
info.addEventListener('click', function () {
  console.log(`${Math.floor(audio.duration / 60)}:${Math.floor(audio.duration % 60)}`)
})
fast.addEventListener('click', function () {
  audio.playbackRate += 0.25;
})
slow.addEventListener('click', function () {
  audio.playbackRate -= 0.25;
})
next.addEventListener('click', function () {
  i = (i + 1) % 5;
  audio.src = songs[i];
})
previous.addEventListener('click', function () {
  i = (i - 1) % 5;
  audio.src = songs[i];
})
backw.addEventListener('click', function () {
  audio.currentTime -= 5;
})
forw.addEventListener('click', function () {
  audio.currentTime += 5;
})
setInterval(function() {
  playrate.innerHTML = `${Math.floor(audio.currentTime / 600)}${Math.floor((audio.currentTime / 60) % 10)}:${Math.floor((audio.currentTime / 10)%6)}${Math.floor(audio.currentTime % 10)}`
}, 1000)

audio.src = songs[i]