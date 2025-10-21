

  const calBtn = document.getElementById('calculate');

  calBtn.addEventListener('click', function() {
    event.preventDefault();
  let vat = parseFloat(document.getElementById('vat').value);

  let price = parseFloat(document.getElementById('price').value);



  if(vat > 10)  {
      const vatPercent = (vat / 100) * price;
      const total = price + vatPercent;
       const vatResult = document.getElementById('result').textContent = "VAT Amount = $" + vatPercent;
       const productResult = document.getElementById('results').textContent = "Total = $" + total;
 } else {
      const vatResult = document.getElementById('result').textContent = "Could not calculate Vat %";
      const productResult = total;
  }

});


 
 
