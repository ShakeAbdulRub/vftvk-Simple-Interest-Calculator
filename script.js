function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years =document.getElementById("years").value;
    var intrest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerText="If you deposit "+principal;
    document.getElementById("hello1").innerText="at an interest rate of  "+rate;
    document.getElementById("hello2").innerText="You will receive an amount of "+intrest;
    document.getElementById("hello3").innerText="in the year "+year;


}
function updateRate()
{
    var rateval =document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        