function convert (form){
	let min;
	let sec;
	let deg;
	let dec;
	
	deg = parseFloat (form.degrees.value);
	min = parseFloat (form.minutes.value);
	sec = parseFloat (form.seconds.value);
	
	dec = (min/60) + (sec/3600) + deg
	form.decNum.value=dec;
}

	