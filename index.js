var number1, name1, cost1, discount1, date1  ,description1= false;
var number2, name2, cost2, discount2, stock2, date2, description2;

function num() {
    var number = parseInt(document.getElementById("mobileNumber").value);
    if (isNaN == true) { window.alert("Number can't be empty"); number1 = false; }
    else if (number < 999999999 || number > 9999999999) { window.alert("Enter a valid Mobile Number!"); number1 = false; }
    else if (number > 999999999 && number < 9999999999) { number1 = true; number2 = number;}
    show();
    console.log(number2 , number1);
}

function dateCheck(){
    date2 = document.getElementById("date").value;
    date1 = true;
    show();
    console.log(date2);
}


function nameCheck() {
    var name = document.getElementById("name").value;
    if (name == "") { window.alert("Name can't be empty"); name1 = false; }
    else {name1 = true; name2 = name; } 
    show();
    console.log(name2, name1);
}

function descriptionCheck(){
    description2 = document.getElementById("description").value;
    if (description2 == "") { window.alert("Name can't be empty"); description1 = false; }
    else {description1 = true;} 
}

function costCheck() {
    var cost = parseFloat(document.getElementById("cost").value);
    if (cost < 1 || isNaN(cost)) { window.alert("Enter valid cost"); cost1 = false; }
    else { cost1 = true; cost2 = cost; } 
    show();
    console.log(cost2, cost1);
}

function discountCheck() {
    var discount = parseFloat(document.getElementById("discount").value);
    if (discount < 1 || discount > 100 || isNaN(discount)) { window.alert("Enter Discount in %"); discount1 = false; }
    else { discount1 = true; discount2 = discount; }
    show();
    console.log(discount2, discount1);
}

function stockCheck(){
    var stock = document.getElementById("checkBox").checked;
    if(stock == true){stock2 = "Yes";}
    else{stock2 = "No"}
    show();
    console.log(stock2);
}

function show(){
    if(number1 == true && name1 == true && cost1 == true && date1 == true && description1 == true && discount1 == true){
        document.getElementById("submit").disabled = false;
    }
    else{document.getElementById("submit").disabled = true;}
}

function submit() {
    document.getElementById("form1").style.display = "none";
    document.getElementById("submit").style.display = "none";
    var actualPrice, c, d;
    c = parseFloat(cost2);
    d = parseFloat(discount2);
    d = d/100;
    actualPrice = c * d;
    console.log(c , d ,actualPrice);
    
    
    document.getElementById("p_num").innerHTML = number2;
    document.getElementById("p_date").innerHTML = date2;
    document.getElementById("p_name").innerHTML = name2;
    document.getElementById("p_desc").innerHTML = description2;
    document.getElementById("p_cost").innerHTML = cost2;
    document.getElementById("p_discount").innerHTML = discount2;
    document.getElementById("p_price").innerHTML = actualPrice;
    document.getElementById("p_inStock").innerHTML = stock2;

    document.getElementById("details").style.display = "block";
}
// {/* <div id="details">
//var number2, name2, cost2, discount2, stock2, date2;
//         <h3 id="p_num"></h3>
//         <h3 id="p_date"></h3>
//         <h3 id="p_name"></h3>
//         <h3 id="p_desc"></h3>
//         <h3 id="p_cost"></h3>
//         <h3 id="p_discount"></h3>
//         <h3 id="p_inStock"></h3>    
//     </div> */}
