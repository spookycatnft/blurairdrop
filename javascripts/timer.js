setTimeout(function(){
 
  // Retrieve data
  let sold = document.querySelector('#countA').innerText;
  var min = 423;
  var max = 911;
 
  // Set Max
  document.getElementById("countB").innerHTML = max

   //Set Progress Bar Varible
  const progressBarFull = document.getElementById('progressBarFull');
 
 
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min));
  }
  setInterval(() => {
      // if (i >= max) i = max;
      // sold.innerHTML = i;
      min += getRandomInt(0, 0);
      var z = (min + sold)
      
      // If mint Ends
      if (min >= max) z = max;
 
      // Load Session 
      if (sessionStorage) {
        var cook = parseInt(JSON.parse(sessionStorage.getItem("Count")), 10);
        if (cook >= min) z = cook;
 
      }  

      // set varible from loop
      document.getElementById("countA").innerHTML = z;
      
      // Update Progress Bar
      progressBarFull.style.width = `${(z / max) * 100}%`;

      ///  Local Storing is getting cleared on refresh 
      if(sessionStorage){
            myJSON = JSON.stringify(z);
            sessionStorage.setItem("Count", myJSON);
        }
      
  
  }, 2200);
 })
 
 




window.addEventListener('load', function() {
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
} else if (window.web3) {
    web3.currentProvider.isMetaMask === true
    $('#connect').hide();
    $('#checkout').show();

} else {
    $('#metaMaskModal').modal("show");
}
});




