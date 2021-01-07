

	var pwd="";
	var cnt = 0;
	async function validate(e) {
	 // check if input is bigger than 4
	 var value = document.getElementById('name').value;
	 if (value.length < 4) {
	 	alert("Name should be atleast 4 characters long!");
	 }else{
	 	document.getElementById("done").hidden = true;
		document.getElementById("copy").hidden = true;
			
	 	
	 	//get user_count from firebase
	 	cnt = await firebase.firestore().collection("usage").doc("usage_doc").get()
		.then(snapshot => {
		return snapshot.data().user_count+1;
		
		}).catch(err=>{
			console.log("Failed to get user count!\n"+err)
		});

		//generate password
	 	generatePwd(cnt);
	 }
	 return false; 
	}


	
	function generatePwd(cnt){
		
		var name = document.getElementById("name").value;
		var dob = document.getElementById("dob").value;
		
		if(name){
			var algo_array = [algoK81, algoK82, algoK91, algoK92, algoM01, algoM02, algoP21, algoP22, algoQ51, algoQ52, algoQ91, algoQ92];
			var algo = algo_array[Math.floor(Math.random() * algo_array.length)]; 

			dob = dob.split("-");
			dob.reverse();
			dob = dob.join("-");
			
			pwd = algo(name,dob,cnt);
			
			document.getElementById("done").hidden = false;
			document.getElementById("copy").hidden = false;
			
			//update count to firebase
			firebase.firestore().collection("usage").doc("usage_doc").update({
				user_count: cnt
			}).catch(err=>{
			console.log("Failed to update user count!\n"+err)
			});
		}
	}
	
	function copyToClipboard(){
	  navigator.clipboard.writeText(pwd).then(function() {
	    	alert("Password copied successfully!");
	  	  }, function() {
	  	 	 alert("Failed to copy password!")
  		});

	}