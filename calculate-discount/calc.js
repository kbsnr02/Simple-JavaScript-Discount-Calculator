
function calcDiscount() {
    var maxDiscount = 100;
    var totalAmount = Number(document.getElementById("totalAmount").value);
    var discount = Number(document.getElementById("totalDiscount").value);

    var discount1 = discount / maxDiscount;
    var lessDiscount = totalAmount - (totalAmount * discount1);
    
    if(lessDiscount >= 0){
        var netDisc = document.getElementById("netAmount");
        netDisc.innerHTML = lessDiscount;
    }else {
        alert("You can not give discount more then 100%");
        var netDisc = document.getElementById("netAmount");
        netDisc.innerHTML = "Invalid Amount!";
    }
    
}

var myBtn = document.getElementById("mybtn");
myBtn.addEventListener("click", function(e){
    e.preventDefault();
    //alert("Button Clicked!");
    calcDiscount();
});