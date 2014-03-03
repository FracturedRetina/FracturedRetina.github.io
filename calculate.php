abstract class InterestType {
	const ANNUAL = 1;
	const SEMI_ANNUAL = 2;
	const QUARTERLY = 4;
	const MONTHLY = 12;
	const DAILY = 365;
}

function strToInterestType($str) {
	switch($str) {
		case "ANNUAL": 
		case "SEMI_ANNUAL": 
		case "QUARTERLY": 
		case "MONTHLY": 
		case "DAILY": 
		default: return ANNUAL;
	}
}

function getCompoundInterest($principle, $rate, $cycles, $type) {
	for ($i = 0; $i < $cycles; $i++) {
		$principle += $principle * $rate * (1/$type);
	}
	return $principle;
}
//print "$" . round(getCompoundInterest(
//	floatval($_POST["principle"]),
//	floatval($_POST["rate"] / 100),
//	floatval($_POST["time"]),
//	InterestType::MONTHLY
//), 2);
