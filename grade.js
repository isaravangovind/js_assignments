let score = 71

switch (true) {
	case(score >= 90):
		console.log('Grade: A')
		break

	case(80 <= score && score <= 89):
		console.log('Grade: B')
		break

	case(70 <= score && score <= 79):
		console.log('Grade: C')
		break

	case(60 <= score && score <= 69):
		console.log('Grade: D')
		break

	case(60 > score ):
		console.log('Grade: F')
		break

}