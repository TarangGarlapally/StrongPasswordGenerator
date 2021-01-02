function algoQ91(name,dob,user_count){
 /*
    Function Description:
    Has two parameters: name:string and dob:string and user_count:int
    returns password of length 16.
 */
    //months list
    let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    
    //current date and month number
    var d = new Date();
    var n = d.getMonth()+1;
    let password = ""

    //Adding first letter of name thrice with first time being capital
    password += (name[0].toUpperCase())
    password += (name[0].toLowerCase())
    password += (name[0].toLowerCase())

    //Adding second letter of name twice with first time being capital
    password += (name[1].toUpperCase())
    password += (name[1].toLowerCase())

    //Adding third letter of name once as capital
    password += (name[2].toUpperCase())

    //seperating number from dob received
    let month_dob = months[parseInt(dob.split("-")[1])-1]

    //Adding first letter of month once as capital
    password += (month_dob[0].toUpperCase())

    //Adding second letter of month twice with first time being capital
    password += (month_dob[1].toUpperCase())
    password += (month_dob[1].toLowerCase())

    //Adding third letter of month thrice with first time being capital
    password += (month_dob[2].toUpperCase())
    password += (month_dob[2].toLowerCase())
    password += (month_dob[2].toLowerCase())

    //Get 1st special symbol using date of dob
    let spec1 = String.fromCharCode(parseInt(dob.split("-")[0])+30)

    //Get 2nd special symbol using month number of dob
    let spec2 = String.fromCharCode(parseInt(dob.split("-")[1])+30)

    //Add both specials to password
    password += spec1+spec2

    //Get last two digits of year in dob
    year = parseInt(dob.split("-")[2].substring(2,3))
    
    //Get last two digit of user_count
    users=user_count.toString()
    last_twodigits_user=users.substring(users.length-2,users.length)

    //Get special number by adding year + n + last+twodigits+user
    let spec3 = (year + n + parseInt(last_twodigits_user)).toString()

    //if spec3 is more then 2 characters then add only the last 2 chars
    if (spec3.length > 3)
        spec3 = spec3.substring(1,3)
    
    //Add spec3 to password
    password += spec3

    //return password
    return password

 
}


