export function setDefaultsValues(func, obj) {
	return function(a, b) {
		if(b !== undefined) {
			return func(a, b);
		} else if(obj.b !== undefined && typeof obj === 'object') {
			const defaultParameter = obj.b;
			return func(a, defaultParameter);
		}
	}
}
