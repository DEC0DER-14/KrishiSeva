const requestWorkerBtn = document.getElementById('requestWorkerBtn');
const statusMessage = document.getElementById('statusMessage');
const workerDetails = document.getElementById('workerDetails');

requestWorkerBtn.addEventListener('click', () => {
    // Reset previous status and hide worker details
    statusMessage.textContent = '';
    workerDetails.style.display = 'none';

    const worktype = document.getElementById('worktype').value;
    const location = document.getElementById('location').value;
    const timeslot = document.getElementById('timeslot').value;

    // Check if all fields are selected
    if (!worktype || !location || !timeslot) {
        alert('Please select all fields.');
        return;
    }

    // Simulate finding worker
    statusMessage.textContent = 'Finding nearby worker...';

    setTimeout(() => {
        statusMessage.textContent = '';
        workerDetails.style.display = 'block'; // Show worker details once found
        console.log("Worker details shown");
    }, 2000); // Simulating a 2-second delay for finding the worker
});

