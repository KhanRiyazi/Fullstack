function addToCart(productFile) {
    // Add product to cart logic
    alert(productFile + " has been added to your cart!");
}

document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value
    };

    fetch('server.js', {  // Adapt this for your backend script
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Thank you for your purchase! Your cheatsheet will be sent to your email.');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
