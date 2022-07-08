function tiers2(num) {
	let st = "";

	for (let i = 1; i <= num; i++) {
		for (let j = 1; j <= num - i; j++) {
			st += " ";			
		}
		for (let k = num - i; k < num; k++) {			
			st += "*";
		}
		st += "\n";		
	}

	return st;
}

function tiers(num) {
	// mindbreaking functional version
	if (!/^\d+$/.test(num)) return "";
	return (
        [...Array(num).keys()]
        .reduce((total, value) => total + [...Array(num)].fill(value).map((v, i) => (v < num - i - 1)? " ": "*").join("") + "\n" , "")
    )
}

module.exports = tiers;
