const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});


//login(button)
document.getElementById('loginBtn').addEventListener('click', (event) => {
  event.preventDefault(); 
  window.location.href = 'dashboard.html'; 
});

function handleLogin(event) {
  event.preventDefault();
  window.location.href = 'dashboard.html';
}


//available-items
const itemsImages = [
    ['images/jordan1.jpg', 'images/jordan2.jpg', 'images/jordan3.jpg'],
    ['images/camera.jpg', 'images/camera1.jpg', 'images/camera2.jpg'], 
    ['images/item3.jpg', 'images/item3_2.jpg', 'images/item3_3.jpg'],
  ];
  
  let currentImageIndex = 0;
  let currentItemIndex = 0;
  
  function openModal(itemIndex, imageIndex) {
    currentItemIndex = itemIndex;
    currentImageIndex = imageIndex;
    modalImage.src = itemsImages[currentItemIndex][currentImageIndex];
    modal.style.display = 'block';
  }
  
  function changeImage(direction) {
    const images = itemsImages[currentItemIndex];
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    modalImage.src = images[currentImageIndex];
  }


