 // Function to display the booking form
 function showBookingForm() {
    document.getElementById('booking-form').style.display = 'block';
}

// Add event listeners to all "Book Now" buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', showBookingForm);
});

// Function to confirm the booking
function confirmBooking() {
    const khasraNumber = document.getElementById('khasra').value;
    const timeSlot = document.getElementById('time-slot').value;
    
    if (khasraNumber && timeSlot) {
        alert("Booking confirmed! \nKhasra Number: ${khasraNumber} \nTime Slot: ${timeSlot}");
        document.getElementById('booking-form').style.display = 'none'; // Hide the form after confirmation
    } else {
        alert('Please fill in all details.');
    }
}
