/**
 * Selection of the correct word form based on the number
 * @param count - number
 * @param wordForms - array of word forms
 * @returns - selected word form
 * @example
 * selectWordForm(5, ['product', 'products', 'products'])
 */

export function selectWordForm(count: number, wordForms: [string, string, string]): string {
	let idx;
	if (count % 100 >= 11 && count % 100 <= 19) {
		idx = 2;
	} else {
		switch (count % 10) {
			case 1:
				idx = 0;
				break;
			case 2:
			case 3:
			case 4:
				idx = 1;
				break;
			default:
				idx = 2;
				break;
		}
	}
	return wordForms[idx] || '';
}
