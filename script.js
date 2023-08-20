function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal=="" || principal<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear() + parseInt(years);
    var output = document.getElementById("result");
    output.innerHTML = "If you deposit " + "<div class='h'>" + principal + "</div>"  + ", <br> at an interest rate of "+ "<div class='h'>" + rate + "</div>%." + "<br> You will receive an amount of " + "<div class='h'>" + interest + "</div>" + ", <br> in the year " + "<div class='h'>" + year + "</div>";
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        