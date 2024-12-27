

function generatePassword(len,spl_num,spl_char, )
{ 
     var  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
     
    if( spl_num)
    {
        charset +="0123456789"
    }
     if(spl_num)
    {
         charset +="!@#$%^&*?"    
    }
    let retVal=""
    for(let i =0 , n = charset.length ; i<len ; ++i)
    {
         
             retVal += charset.charAt(Math.floor(Math.random()*n))
    }

      return retVal
}

console.log(generatePassword(4,true,true))