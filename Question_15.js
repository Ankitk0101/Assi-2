

function generatePassword(len,spl_num,spl_char, )
{ 
     
     
    if( spl_num==true)
    {
        var length = len,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
       for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }

    return retVal;
    
    }
    else if(spl_char==true && spl_num==true)
    {
        var length = len,
        charset = "!@#$%^&*()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
        retVal = "";
       for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }

    return retVal;
    
         
    }
}

console.log(generatePassword(10,true,true))