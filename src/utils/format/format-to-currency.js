export function formatToCurrency(number) {
	return new Intl.NumberFormat('kz-KZ', {
		currency: 'KZT',
		style: 'currency'
	}).format(number)
}
