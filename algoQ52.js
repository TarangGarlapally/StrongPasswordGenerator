function algoQ52(name,dob,user_count){
 /*
    Function Description:
    Has two parameters: name:string and dob:string and user_count:int
    returns password of length 16.
 */
    //specialchar list
    
    let specialchar = ["!","$","@","#","%","^","&","*","(",")"]
    //monthslist
    let months=["Ja1","Fe2","Ma3","Ap4","Ma5","Ju6","Ju7","Au8","Se9","O10","N11","D12"]
        //starting with a empty password
    let password = ""
    //adding random value from months
     
   password +=months[Math.floor((Math.random()*12))]
    
    //finding length of username
    var f=name.length;
     //Adding (f-1)th,(f-2)th characters
    password += (name[f-1].toUpperCase())
    password += (name[f-2].toLowerCase())
     //Adding  3 random special character
    password +=specialchar[Math.floor((Math.random() * 10) )]
    password +=specialchar[Math.floor((Math.random() * 10) )]
    password +=specialchar[Math.floor((Math.random() * 10) )]
     //Get last two digit of user_count
    users=user_count.toString()
    last_twodigits_user=users.substring(users.length-2,users.length)

    //Get special number by adding year + n + last+twodigits+user
    let spec3 = (parseInt(year)* parseInt(last_twodigits_user)).toString()
 
    //if spec3 is more then 2 characters then add only the last 2 chars
    if (spec3.length > 3)
        spec3 = spec3.substring(1,3)
    
    //Add spec3 to password
    password += spec3
    
    //Generating a random upper case alphabet by adding a random number to first 3 character's ascii code from users name
      var n = name.charCodeAt(0);
password += String.fromCharCode(n+Math.floor((Math.random() * 10) + 1)).toUpperCase()
      var n = name.charCodeAt(1);
password += String.fromCharCode(n+Math.floor((Math.random() * 10) + 1)).toUpperCase()
      var n = name.charCodeAt(2);
password += String.fromCharCode(n+Math.floor((Math.random() * 10) + 1)).toUpperCase()
    
    //Adding random elements of year of birth 1 time
    year = parseInt(dob.split("-")[2])

    password +=year[Math.floor((Math.random() * 4) )]
    
  
    //adding two random characters to password
    password +=specialchar[Math.floor((Math.random() * 5) )]
    password +=specialchar[Math.floor((Math.random() * 10) )]

    //return password
    return password

 
}