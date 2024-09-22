document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const worktype = document.getElementById('worktype').value;
    const location = document.getElementById('location').value;
    const availability = document.querySelector('input[name="availability"]:checked').value;

    alert("Submitted!\nName: ${name}\nID: ${id}\nWork Type: ${worktype}\nLocation: ${location}\nAvailability: ${availability}");
});


let btn=document.querySelector("#butn");
btn.addEventListener("click",()=>{
    alert("Availability updated");
})
