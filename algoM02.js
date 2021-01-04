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
function algoM02(name,dob,user_count){

    let date = parseInt(dob.split("-")[0])
    let month = parseInt(dob.split("-")[1])
    let year = parseInt(dob.split("-")[2])

    dob=dob.replace(/-/g,"");

    let password = "";
    
    

    //special character list
    var spl_char = "@#$_()!";

    //removing all spaces in name and converting name to lowercase
    name = name.replace(/ /g,"").toLowerCase();

    let user= NumToSingle(user_count);

    //1st character

    let number= dob.charAt(Math.floor(Math.random() * dob.length))
    
    if(date % 2==0){
        password += NumToSingle(parseInt(number)*user_count);
    }
    else{
        password += spl_char.charAt(Math.floor(Math.random() * spl_char.length));
        
    }

    //2nd character

    let n=name.charAt(Math.floor(Math.random() * name.length))
    n=n.toString()
    
    if((date+month)%2 ==1){
        
        password += name.charAt(Math.floor(Math.random() * name.length)).toUpperCase();
    }
    else{
        password += String.fromCharCode(n.charCodeAt(0)+month);
        
        
    }

    //3rd charcter

    let number1= dob.charAt(Math.floor(Math.random() * dob.length))
    
   
    if((date % 2) != 0){
        password += NumToSingle(parseInt(number1)*year);
    }
    else{
        password +=spl_char.charAt(Math.floor(Math.random() * spl_char.length));
    }
    

    //4th character

    let n1=name.charAt(Math.floor(Math.random() * name.length))
    n1=n1.toString();
    
    if((date+month)%2 != 1){
        password += String.fromCharCode(n1.charCodeAt(0)).toUpperCase();
    }
    else{
        password +=String.fromCharCode(n1.charCodeAt(0)+month);
    }

    //5th character

    password += String.fromCharCode(parseInt(user)+32);

    //6th character

    if((name.length) %3==1){
        password += name.charAt(Math.floor(Math.random() * name.length)).toUpperCase();
        }
    else{
        password += name.charAt(Math.floor(Math.random() * name.length)).toLowerCase();
    }

    //7th character

    password += NumToSingle(parseInt(user)+date*month);

    //8th character

    password += NumToSingle((year%date)*(month+user_count));

    //9th character


    if((name.length) %3==0){
        password += name.charAt(Math.floor(Math.random() * name.length)).toUpperCase();
    }
    else{
        password += name.charAt(Math.floor(Math.random() * name.length)).toLowerCase();
    }

    //10th character

    if((name.length) %4==0){
        password += name.charAt(Math.floor(Math.random() * name.length)).toUpperCase();
    }
    else{
        password += name.charAt(Math.floor(Math.random() * name.length)).toLowerCase();
    }

    return password;
}


