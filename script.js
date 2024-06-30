function bmi() {
  let weight = parseInt(document.getElementById("weight").value);
  let height = parseInt(document.getElementById("height").value);
  let results = document.getElementById("results");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    let result = (weight / ((height * height) / 10000)).toFixed(2);

    let bmimessge = "";
    if (result < 18.6) {
      bmimessge = "Underweight";
    } else if (result >= 18.6 && result <= 24.9) {
      bmimessge = "Normal weight";
    } else if (result > 24.9) {
      bmimessge = "Overweight";
    }

    results.innerHTML = `<span>Your BMI is ${result}, ${bmimessge}<span>`;
  }
}
