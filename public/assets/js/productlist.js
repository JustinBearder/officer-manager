function openad() {
    var x = document.getElementById("modal")
    x.className = "";
    x.className = "modal show-modal";
}

function closemodal() {
    var x = document.getElementById("modal");
    x.className = "modal";
}

function opensuccess() 
{
    months=['January','February','March','April','April','June','July','August','September','October','November','December'];
    var today = new Date(document.getElementById('prodfulfill').value);
    var dd = today.getDate();
        var mm = today.getMonth();
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
            mm = months[mm];
        var today = dd + ' ' + mm + ' ' + yyyy;
    let product = {
        prodname: document.getElementById('prodname').value,
        prodprice: document.getElementById('prodprice').value,
        prodqty: document.getElementById('prodqty').value,
        prodfulfill:today
    }
    console.log(product);
    let json = JSON.stringify(product);

    const xhr = new XMLHttpRequest(); 
    xhr.open("POST", "api/product");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(json);
    var z = document.getElementById("successmodal")
         z.className = "";
         z.className = "modal show-modal";        
}
function closesuccess()
{
    var x = document.getElementById("successmodal");
    x.className = "modal";
    var x1 = document.getElementById("modal");
    x1.className = "modal";
    document.location.href = "/product";
}
var loadTable = document.getElementById('myTable');

var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001");
xmlhttp.onload = function() {
    loadAPI(JSON.parse(xmlhttp.responseText));
};

function loadAPI(xml) {
    var table = "<table><tr><th>Product</th><th>Farmer</th><th>Price</th><th>Quantity / KG</th><th>Farm Size</th><th>Start Date</th><th>End Date</th></tr>";
    for (var i = 0; i < xml.length; i++) {
        table += "<tr><td>" +
            xml[i].firstName +
            "</td><td>" +
            xml[i].lastName +
            "</td><td>" +
            xml[i].contactNumber +
            "</td><td>" +
            xml[i].age +
            "</td><td>" +
            xml[i].dob +
            "</td><td>" +
            xml[i].salary +
            "</td><td>" +
            xml[i].address +
            "</td></tr>";
    }
    table += "</table>";
    loadTable.insertAdjacentHTML('beforeend', table);
}
xmlhttp.send();

