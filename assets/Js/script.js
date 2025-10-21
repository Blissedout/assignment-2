

  const calBtn = document.getElementById('calculate');

  calBtn.addEventListener('click', function() {
    
  let vat = parseFloat(document.getElementById('vat').value);

  let salesAmount = parseFloat(document.getElementById('salesAmount').value);



  if(vat > 10) {

      const total = salesAmount + vat;
       const saleResult = document.getElementById('result').textContent = "Sales Amount = $" + total;
 } else {

      const saleResult = document.getElementById('result').textContent = "Vat is not up to 10";
  }

});


 
 
