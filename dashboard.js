// Example function to handle logout
function logout() {
    alert("Logging out...");
    window.location.href = "login.html"; // Redirects back to the login page
}
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}
function searchItems() {
    var input = document.getElementById('search').value.toLowerCase();
    var items = document.querySelectorAll('.item-card');

    items.forEach(function(item) {
        var title = item.querySelector('h3').textContent.toLowerCase();
        if (title.indexOf(input) > -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
// Function to filter items based on the search query
function searchItems() {
    var input = document.getElementById('searchInput');
    var filter = input.value.toLowerCase();
    var itemList = document.getElementById('itemList');
    var items = itemList.getElementsByClassName('item-card');
    
    // Loop through all item cards and hide those that don't match the search query
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var title = item.getElementsByTagName("h3")[0];
        
        if (title) {
            var textValue = title.textContent || title.innerText;
            if (textValue.toLowerCase().indexOf(filter) > -1) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        }
    }
}

//modal function
function openModal(item) {
    // Set the image source and caption based on the item clicked
    let modalImage = document.getElementById('modalImage');
    let caption = document.getElementById('caption');

    if (item === 'tent') {
        modalImage.src = 'images/camera.jpg';  // Update with actual image path
        caption.textContent = 'Tent - Rent for $25/day';
    } else if (item === 'shoes') {
        modalImage.src = 'images/shoes.jpg';  // Update with actual image path
        caption.textContent = 'Shoes - Rent for $30/day';
    } else if (item === 'camera') {
        modalImage.src = 'images/camera.jpg';  // Update with actual image path
        caption.textContent = 'Camera - Rent for $15/day';
    } else if (item === 'car') {
        modalImage.src = 'images/car.jpg';  // Update with actual image path
        caption.textContent = 'Car - Rent for $10/day';
    }
    // Show the modal
    document.getElementById('imageModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}


