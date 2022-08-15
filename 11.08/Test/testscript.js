function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
function filterFunction() {
    var input, filter, div, a, i;
    input = document.getElementById("Country");
    filter = input.value.alphabeticalOrder(["A", "C", "E","F", "G","I", "L", "N", "S", "W"]);
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("A-Z");
    
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.alphabeticalOrder().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else if (input.value.UnitedKingdom().indexof(filter)) {
        
        }
      }
     }
     }
  