function algoQ51(name,dob,user_count){
 /*
    Function Description:
    Has two parameters: name:string and dob:string and user_count:int
    returns password of length 16.
 */
    //specialchar list
    let specialchar = ["!","$","@","#","%","^","&","*","(",")"]
    
    //starting with a empty password
    let password = ""
    //finding length of username
    var n=name.length;
     //Adding  5 random special character
    password +=specialchar[Math.floor((Math.random() * 10) )]
    password +=specialchar[Math.floor((Math.random() * 10) )]
    password +=specialchar[Math.floor((Math.random() * 10) )]
    password +=specialchar[Math.floor((Math.random() * 10) )]
    password +=specialchar[Math.floor((Math.random() * 10) )]
    //Generating a random upper case alphabet by adding a random number to first 3             character's ascii code from users name
      var n = name.charCodeAt(0);
password += String.fromCharCode(n+Math.floor((Math.random() * 10) + 1)).toUpperCase()
      var n = name.charCodeAt(1);
password += String.fromCharCode(n+Math.floor((Math.random() * 10) + 1)).toUpperCase()
      var n = name.charCodeAt(2);
password += String.fromCharCode(n+Math.floor((Math.random() * 10) + 1)).toUpperCase()

    //Adding second letter of name twice with first time being capital
    password += (name[1].toUpperCase())
    password += (name[1].toLowerCase())

    //Adding random elements of year of birth 4 times
    year = (dob.split("-")[2])
    password +=year[Math.floor((Math.random() * 4) )]
    password +=year[Math.floor((Math.random() * 4) )]
    password +=year[Math.floor((Math.random() * 4) )]
    password +=year[Math.floor((Math.random() * 4) )]
    
    //Get last two digit of user_count
    users=user_count.toString()
    last_twodigits_user=users.substring(users.length-2,users.length)

    //Get special number by adding year + n + last+twodigits+user
    let spec3 = (parseInt(year)+ parseInt(last_twodigits_user)).toString()


    //if spec3 is more then 2 characters then add only the last 2 chars
    if (spec3.length > 3)
        spec3 = spec3.substring(1,3)
    
    //Add spec3 to password
    password += spec3
    //return password
    return password

 
}