let UnitedKingdom = "England"; "Wales", "Scotland"; "Ireland";
let BalticStates = "Latvia"; "Lithuania";"Estonia";
let Jutland = "Finnland"; "Germany";
let Scandinavia = "Sweeden"; "Norway"; "Finnland";

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function filterCountriesByRegion(region) {
    let countries = document.getElementById("dataToFilter");

    for (let country of countries.children) {
	let countryRegion = country.children[1].innerText;

	if (countryRegion == region) {
	    country.style.display = "";
	}
	else {
	    country.style.display = "none";
	}
    }
}



    /* function filterCountriesByRegion(region) {
        let countries = document.getElementById("dataToFilter");
    
        for (let country of countries.children) {
        let countryRegion = country.children[1].innerText;
            
        if (countryRegion == "UnitedKingdom") {
            country.style.display = "England", "Ireland", "Wales", "Scotland";
        }    
        else if (countryRegion == BalticStates) {
            country.style.display = "Latvia", "Lithuania", "Estonia";
        }
        else if (countryRegion == Jutland) {
            country.style.display = "Finnland", "Germany";
        }   
        else if (countryRegion == Scandinavia) {
            country.style.display = "Finnland", "Norway", "Sweeden";
        }
      }
     }*/
    