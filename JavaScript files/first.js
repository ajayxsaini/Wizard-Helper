document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit').addEventListener('click', function saveData(){
        let gender = document.getElementById('gendermorf').value.trim();
        let firstName = document.getElementById('firstname').value.trim();
        let lastName = document.getElementById('lastname').value.trim();
        let houseNo = document.getElementById('houseno').value.trim();
        let street = document.getElementById('street').value.trim();
        let area = document.getElementById('area').value.trim();
        let city = document.getElementById('city').value.trim();

        // Store values in local storage
        localStorage.setItem('gender', gender);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('houseNo', houseNo);
        localStorage.setItem('street', street)
        localStorage.setItem('area', area);
        localStorage.setItem('city', city);

        window.location.href = 'letter.html';
    });
});
