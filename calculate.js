InterestType = {
	const ANNUAL : 1,
	const SEMI_ANNUAL : 2,
	const QUARTERLY : 4,
	const MONTHLY : 12,
	const DAILY : 365,
}

function strToInterestType(str) {
	switch(str) {
		case "ANNUAL": return ANNUAL;
		case "SEMI_ANNUAL": return SEMI_ANNUAL;
		case "QUARTERLY": return QUARTERLY;
		case "MONTHLY": return MONTHLY;
		case "DAILY": return DAILY;
		default: return ANNUAL;
	}
}

function getCompoundInterest(principle, rate, cycles, type) {
	for (var i = 0; i < cycles; i++) {
		principle += principle * rate * (1/type);
	}
	return principle;
}


function calcFromForm() {
	alert("$" + round(getCompoundInterest(
		document.forms["calcForm"]["principle"],
		document.forms["calcForm"]["rate"] / 100,
		document.forms["calcForm"]["time"],
		InterestType.MONTHLY
	)).toFixed(2));
}
