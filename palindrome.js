let word = 'Madam'
let rev = ''
let word1 = word.toLocaleLowerCase()
for(let i= word1.length; i>=0; i--){
	rev = rev + word1.charAt(i)
}
console.log(rev)

if(word1 === rev){
	console.log('The given word ' + word + ' is palindrome')
} else {
	console.log('The given word ' + word + ' is not a palindrome')
}