function checkdata(){
    var Fullname=document.getElementById("User")
    var email=document.getElementById("email")
    var pass=document.getElementById("pass2")

      var regExpFullName=/^[a-z A-Z]{3,} [a-z A-Z]{3,}$/
      var regExpEmail=/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
      var regExppassword=/^[a-z]{6,} [1-50]$/
     
     var resultname=regExpFullName.test(Fullname)
     var resultemail=regExpEmail.test(email)
     var resultpass=regExppassword.test(pass)

     if(resultname==true)
    {
        prompt("FullName is Valid")
     }
     else{
        prompt("FullName is not Valid")
    }
    if(resultemail==true)
    {
        prompt("Email is Valid")
     }
     else{
        prompt("Email is not Valid")
    }
    if(resultpass==true)
    {
        prompt("pass is Valid")
        
     }
     else{
        prompt("pass is not Valid")
    }
}

