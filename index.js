const url = "https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json";

fetch(url)
.then(response => response.json())
.then(data => {
    const countrySelect = document.getElementById("country");
    const stateSelect = document.getElementById("state");
    data.forEach(country => {
        const option = document.createElement("option");
        option.value = country.name;
        option.text = country.name;
        countrySelect.add(option);
    });

    // attach event handler on the country select to change the state options based on the selected country
    countrySelect.addEventListener("change", e => {
    stateSelect.innerHTML = "";
    const selectedCountry = data.find(
        country => country.name === e.target.value
    );
    if (selectedCountry) {
        selectedCountry.states.forEach(state => {
        const option = document.createElement("option");
        option.value = state.name;
        option.text = state.name;
        stateSelect.add(option);
        });
    }
    });
    // attach event listener on the form submit event
    const form = document.querySelector("form");
    form.addEventListener("submit", e => {
        e.preventDefault();
        if (form.checkValidity()) {
            document.getElementById("success").style.display = "block";
        } else {
            document.getElementById("error").style.display = "block";
        }
    });
});