document.addEventListener('DOMContentLoaded', function() {
    // Retrieve data from local storage
    let gender = localStorage.getItem('gender');
    let firstName = localStorage.getItem('firstName');
    let lastName = localStorage.getItem('lastName');
    let houseNo = localStorage.getItem('houseNo');
    let street = localStorage.getItem('street')
    let area = localStorage.getItem('area');
    let city = localStorage.getItem('city');

    // Example: Update HTML content with the retrieved values
    let mister = "Mr."
    let miss = "Miss."
    if (gender == 'Male'){
        document.getElementById('genderchange').innerText = mister;
    }else{
        document.getElementById('genderchange').innerText = miss;
    }
    document.getElementById('firstnamechange').innerText = firstName;
    document.getElementById('lastnamechange').innerText = lastName;
    document.getElementById('housenochange').innerText = houseNo;
    document.getElementById('streetchange').innerText = street;
    document.getElementById('areachange').innerText = area;
    document.getElementById('citychange').innerText = city;
    document.getElementById('lastnamefordear').innerText = lastName; 
    
});