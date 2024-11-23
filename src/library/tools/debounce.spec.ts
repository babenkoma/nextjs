import { describe, expect, it } from 'vitest';
import { createDebounce } from './debounce';

describe('Testing debounce tool', () => {
	it('Checking debounce with synchronous function', () => {
		const debounce = createDebounce<[number], void>();
		const result: number[] = [1, 4, 5, 6];
		const stack: number[] = [];

		const handler = (arg: number): void => {
			stack.push(arg);
		};
		const debouncedHandler = debounce(handler, 100);
		stack.push(1);
		debouncedHandler(2)
			.then(() => {
				stack.push(3);
				expect(stack).toEqual(result);
			})
			.catch((error) => {
				console.log(error);
			});
		stack.push(4);
		debouncedHandler(5)
			.then(() => {
				stack.push(6);
				expect(stack).toEqual(result);
			})
			.catch((error) => {
				console.log(error);
			});
	});

	it('Checking debounce with asynchronous function', () => {
		const debounce = createDebounce<[number], void>();
		const result: number[] = [1, 4, 5, 6];
		const stack: number[] = [];

		const handler = async (arg: number): Promise<void> => {
			return new Promise((resolve) => {
				stack.push(arg);
				resolve();
			});
		};
		const debouncedHandler = debounce(handler, 100);
		stack.push(1);
		debouncedHandler(2)
			.then(() => {
				stack.push(3);
				expect(stack).toEqual(result);
			})
			.catch((error) => {
				console.log(error);
			});
		stack.push(4);
		debouncedHandler(5)
			.then(() => {
				stack.push(6);
				expect(stack).toEqual(result);
			})
			.catch((error) => {
				console.log(error);
			});
	});
});
