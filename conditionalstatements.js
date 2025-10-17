let browserName = 'chrome1'
if(browserName==='chrome'){
	console.log('Launching Chrome browser...')
} else {
	console.log('Launching default browser...')
}

let testType = 'regression'

switch(testType) {
	case('smoke'):
		console.log('Running Smoke Tests...')
		break

	case('regression'):
		console.log('Running Regression Tests...')
		break
	
	case('sanity'):
		console.log('Running sanity Tests...')
		break

	default:
		console.log('Running Default Smoke Tests...')
}