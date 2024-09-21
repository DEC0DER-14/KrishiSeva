function bookTractor(id, model, location) {
    // Grab the booking info div where we will show the details
    const bookingInfoDiv = document.getElementById('booking-info');

    // Construct the message with tractor details
    const message = `
        <p>Your tractor booking is completed!</p>
        <p><strong>Tractor ID:</strong> ${id}</p>
        <p><strong>Model:</strong> ${model}</p>
        <p><strong>Location:</strong> ${location}</p>
    `;

    // Inject the message into the booking-info div
    bookingInfoDiv.innerHTML = message;
}
