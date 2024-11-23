import { describe, expect, it } from 'vitest';
import { selectWordForm } from './select-word-form';

describe('Selection word form', () => {
	it('Count: 1', () => {
		const result = selectWordForm(1, ['product', 'products', 'products']);
		const sample: string = 'product';

		expect(result).toStrictEqual(sample);
	});

	it('Count: 2', () => {
		const result = selectWordForm(2, ['product', 'products', 'products']);
		const sample: string = 'products';

		expect(result).toStrictEqual(sample);
	});

	it('Count: many', () => {
		const result = selectWordForm(10, ['product', 'products', 'products']);
		const sample: string = 'products';

		expect(result).toStrictEqual(sample);
	});

	it('Count: 0', () => {
		const result = selectWordForm(0, ['product', 'products', 'products']);
		const sample: string = 'products';

		expect(result).toStrictEqual(sample);
	});
});
