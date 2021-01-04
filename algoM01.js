function NumToSingle(num){
	/*
	    Function Description:
        Has one parameter: num:int
        returns single digit num
	*/
	var sum = num;
	while(sum/10>=1){
		sum = 0;
		while(num>0){
			sum += num%10;
			num = Math.floor(num/10);
		}
		num = sum;
	}
	return sum.toString();
}



function algoM01(name,dob,user_count){
 /*
    Function Description:
    Has two parameters: name:string and dob:string and user_count:int
    returns password of length 10.
 */
    dob=dob.replace(/-/g,"");
    
    let password = "";
    
    //special character list
    var spl_char = "@#$_()!";
    
    //removing all spaces in name and converting name to lowercase
    name = name.replace(/ /g,"").toLowerCase();
    
    //Adding 1st character as random character from name
    if((name.length) %2==0){
    password += name.charAt(Math.floor(Math.random() * name.length)).toUpperCase();
    }
    else{
    password += name.charAt(Math.floor(Math.random() * name.length)).toLowerCase();
    }
    //2nd character
    if((name.length)%3==1){
    password += name.charAt(Math.floor(Math.random() * name.length)).toUpperCase();
    }
    else{
    password += spl_char.charAt(Math.floor(Math.random() * spl_char.length));
    }
    
    //adding 3rd character as special character
    
    password += spl_char.charAt(Math.floor(Math.random() * spl_char.length));
    
    //adding 4th character as a number
    
    password += dob.charAt(Math.floor(Math.random() * dob.length));
    
	//5th character
    if((name.length)%2!=0){
    password += name.charAt(Math.floor(Math.random() * name.length)).toUpperCase();
    }
    else{
    password += name.charAt(Math.floor(Math.random() * name.length)).toLowerCase();
    }
    //6th character
    if((name.length)%3==2){
    password += dob.charAt(Math.floor(Math.random() * dob.length));
    }
    else{
    password += spl_char.charAt(Math.floor(Math.random() * spl_char.length));
    }
    
    //7th character
    
    if((name.length)%3==0){
    password += name.charAt(Math.floor(Math.random() * name.length)).toLowerCase();
    }
    else{
    password += dob.charAt(Math.floor(Math.random() * dob.length));
    }
    
    //8th character
    let user= NumToSingle(user_count);
    password += user;
    
    //9th character
    
    if((name.length)%4==0){
    password += name.charAt(Math.floor(Math.random() * name.length)).toUpperCase();
    }
    else{
    password += name.charAt(Math.floor(Math.random() * name.length)).toLowerCase();
    }
    
    //10th character
    
    password += String.fromCharCode(parseInt(user)+32);
    
    //return password
    return password;
    
    }

