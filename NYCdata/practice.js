// function removeBanner() {
//   document.querySelector('.banner').style.display = 'none';
// }

var marquee = document.querySelector('.marquee');
var closeBtn = marquee.querySelector('.close');

// Add event listener to the close button
closeBtn.addEventListener('click', function() {
  marquee.style.display = 'none';
})