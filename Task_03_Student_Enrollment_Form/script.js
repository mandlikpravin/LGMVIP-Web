var row = 1;

var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);


function displayDetails() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var ssc = document.getElementById("ssc").value;
    var hsc = document.getElementById("hsc").value;

    if(document.getElementById('gender1').checked == true){
        gender = document.getElementById('gender1').value
    }
    else{
        gender = document.getElementById('gender2').value
    }

    var check_values =''
    var checkboxes = document.querySelectorAll('input[name="check"]:checked')
    for (var checkbox of checkboxes){
        check_values +=  (checkbox.value + ',')
    }
    

    if(!name || !email || !mobile || !ssc || !hsc || !(gender) || !check_values) {
        alert("Please fill all the boxes");
        return;
    }

   
    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
  
    

    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = mobile;
    cell4.innerHTML = ssc;
    cell5.innerHTML = hsc;
    cell6.innerHTML = gender;
    cell7.innerHTML = check_values;

    row++;

}