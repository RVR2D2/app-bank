export function formatCardNumberWithDashed(cardNumber) {
	return cardNumber.replace(/(\d{4})(?=\d)/g, '$1-')
}
