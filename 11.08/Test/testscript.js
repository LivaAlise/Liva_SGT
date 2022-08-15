function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterCountriesByRegion(region) {
    let countries = document.getElementById("dataToFilter");

    for (let country of countries.children) {
        let countryRegion = country.children[2].innerText;

        if (countryRegion == region || region == "All") {
            country.style.display = "";
        }
        else {
            country.style.display = "none";
        }
    }
}