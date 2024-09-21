// JavaScript to toggle content based on clicked sidebar item
document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function() {
        const selectedItem = this.querySelector('h4').textContent;
        
        document.querySelector('.content').innerHTML = `
            <h2>${selectedItem}</h2>
            <p>This is the information related to ${selectedItem.toLowerCase()}. Here you can provide more details.</p>
        `;
    });
});
