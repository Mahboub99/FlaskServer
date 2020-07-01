function submitForm(event) {
  event.preventDefault();
  alert("request sent");
  let name = document.getElementById("name").value;
  let charge = document.getElementById("charge").value;

  const xhttp = new XMLHttpRequest();
  const toSend = {
    name: name,
    charge: charge
  };
  const jsonString = JSON.stringify(toSend);
  console.log(jsonString);
  xhttp.open("POST", "http://127.0.0.1:5000/api/quarks", true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(jsonString);
}

function getData(event) {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://127.0.0.1:5000/api/quarks", true);
  xhttp.responseType = "json";
  xhttp.send();

  xhttp.onload = () => {
    console.log(xhttp.response);
    document.getElementById("response").innerHTML = xhttp.response.quarks.map(
      quark => `
    <div>
      <div>name: ${quark.name}</div>
      <div>charge: ${quark.charge}</div>
    
    `
    );
  };
  alert("request sent check the consle also F12");
}
