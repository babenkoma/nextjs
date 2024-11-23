/**
 * Creates a debounced function
 * @returns Debounced function
 * @example
 * const debounce = createDebounce<[], void>();
 * const func = async (text: string): Promise<void> => { console.log(text); return Promise.resolve(); };
 * const debouncedFunc = debounce(func, 1000);
 * debouncedFunc('Hello World').then(() => console.log('Done')).catch((error) => console.log(error));
 */

// eslint-disable-next-line
export const createDebounce = <A extends any[], R extends any>(): ((
	func: ((...args: A) => Promise<R>) | ((...args: A) => R),
	delay: number
) => (...args: A) => Promise<R>) => {
	let timer: ReturnType<typeof setTimeout>;

	return (func, delay) => {
		return (...args) => {
			clearTimeout(timer);
			return new Promise((resolve) => {
				timer = setTimeout(() => {
					resolve(func(...args));
				}, delay);
			});
		};
	};
};
