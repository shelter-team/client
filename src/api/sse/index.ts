const $token = Symbol('token')

class SSE {
	[$token] = ''
	
	constructor() {
		this[$token] = ''
	}

	set token(value: string) {
		// TODO: Whatever need todo when token changes
	}
}

export const sse = new SSE()