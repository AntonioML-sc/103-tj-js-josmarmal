function tiers(num) {
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
module.exports = tiers;
