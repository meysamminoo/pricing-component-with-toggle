window.onload = function(){
  const checkbox = document.getElementById("switch");
  const priceMonth = document.querySelectorAll(".price-month");
  const priceYear = document.querySelectorAll(".price-year");
  checkbox.addEventListener("change", function(){
    changePrice();
  })
  function changePrice() {
    if(checkbox.checked){
      for (let i = 0; i < priceYear.length; i++) {
        priceYear[i].style.display = "block";
        
      }
      for (let i = 0; i < priceMonth.length; i++) {
        priceMonth[i].style.display = "none";
        
      }
    } else {
      for (let i = 0; i < priceMonth.length; i++) {
        priceMonth[i].style.display = "block";
        
      }
      for (let i = 0; i < priceYear.length; i++) {
        priceYear[i].style.display = "none";
        
      }
    }
  }
}