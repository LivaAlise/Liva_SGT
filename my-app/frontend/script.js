$($.getJSON("http://localhost:5000/get-allCustomer",
    function(data) {

        const customer = data.response.customer;
        const customerTabElement = $("#customerTab");
        for (let i = 0; i < customer.length; i++) {
            const customer = customer[i];

            const row = document.createElement("tr");

            const firstName = document.createElement("td");
            firstName.innerHTML = customer.firstname;
            row.append(firstName);

            const lastName = document.createElement("td");
            lastName.innerHTML = customer.lastname;
            row.append(lastName);

            const email = document.createElement("td");
            email.innerHTML = customer.email;
            row.append(email);

            const phone = document.createElement("td");
            phone.innerHTML = customer.phone;
            row.append(phone);

            const vip = document.createElement("td");
            vip.innerHTML = Number(customer.vip) === 1 ? 'Yes' : "No";
            row.append(vip);

            customerTabElement.append(row);
        }
    }))