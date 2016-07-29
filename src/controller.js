// This is ES6 module syntax now
export default 

class Controller {
	constructor(scope)
	{
		this.scope = scope;
	}

	isScopeDefined() {
		if(this.scope)
			return true;
		else
			return false;
	}
}