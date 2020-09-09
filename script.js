function compute() {
    var principal = document.getElementById("principal").value;
    if (!(principal > 0)) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    var interest = principal * years * rate / 100;
    var future_year = (new Date()).getFullYear() + Number(years);

    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br/>";
    document.getElementById("result").innerHTML += "at an interest rate of <mark>" + rate + "</mark>.<br/>";
    document.getElementById("result").innerHTML += "You will receive an amount of <mark>" + interest + "</mark>,<br/>";
    document.getElementById("result").innerHTML += "in the year <mark>" + future_year + "</mark>.";
}

function update_slider() {
    document.getElementById("rate_span").innerHTML = document.getElementById("rate").value + "%";
}
