function validEmail(str) {

  // your JS code here.
	let atTheRate = false;
	for(int i = 0; i < str.length; i++){
		if(str.charAt(0) === '@' ) {
			return false;
		}
		if(str.charAt(i) === '@' ) {
			atTheRate = i;
		}
		else if(str.charAt(i) === '.' && atTheRate === 0){
			return false;
		} else if(str.charAt(i) === '.' && i-atTheRate-1 < 1){
			return false;
		}
	}
	return true;                
}
// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
