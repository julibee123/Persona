(function() {
  let i = 0;
  let pics = ["url('eringrab.jpg')", "url('ahmedstare.jpg')", "url('JullianMain.jpg')"];
  let el = document.getElementById('soloMain');
  function toggle() {
    el.style.backgroundImage = pics[i];
    i = (i + 1) % pics.length;
  }
  setInterval(toggle, 5000);
})();


(function() {
  let i = 0;
  let pics = ["url('ErinSlide.jpg')", "url('AhmedSlide.jpg')", "url('JullianSlide.jpg')","url('Family.png')", "url('productsbg.png')"];
  let el = document.getElementById('product');
  function toggle() {
    el.style.backgroundImage = pics[i];
    i = (i + 1) % pics.length;
  }
  setInterval(toggle, 5000);
})();


document.addEventListener('DOMContentLoaded', () => {
  const colorButtons = document.querySelectorAll('.color-button');

  colorButtons.forEach(button => {
      button.addEventListener('mouseenter', () => {
          // Navigate to the product image within the same product card
          const productCard = button.closest('.product-card');
          const productImage = productCard.querySelector('.product-image img');
          const newImage = button.id + '.png';
          productImage.src = newImage;
      });

      button.addEventListener('mouseleave', () => {
          // Reset to default image
          const productCard = button.closest('.product-card');
          const productImage = productCard.querySelector('.product-image img');
          productImage.src = productImage.dataset.default;
      });
  });
});

let mouseDown = false;
let startX, scrollLeft;
const sliderbox = document.querySelectorAll('.product-rows-overflow');

sliderbox.forEach(slider => {
const startDragging = (e) => {
mouseDown = true;
startX = e.pageX - slider.offsetLeft;
scrollLeft = slider.scrollLeft;
}

const stopDragging = (e) => {
mouseDown = false;
}

const move = (e) => {
e.preventDefault();
if(!mouseDown) { return; }
const x = e.pageX - slider.offsetLeft;
const scroll = x - startX;
slider.scrollLeft = scrollLeft - scroll;
}

slider.addEventListener('mousemove', move, false);
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);

});