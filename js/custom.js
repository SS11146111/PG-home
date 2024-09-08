function register()
{
  
    alert("Registration Successful!!");

}

window.onload = function() {
    // Show the spinner initially
    //document.querySelector('.spinLoad').style.display = 'block';
    document.querySelector('.container').style.display = 'none';
    // Hide the spinner after 3 seconds
    setTimeout(function() {
      //document.querySelector('.spinLoad').style.display = 'none';
      document.querySelector('.container').style.display= 'block';
    }, 1000);

    
}

