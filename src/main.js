/*
 *=================================================================================================
 * @author Milan De Buck
 *
 * extra layer on top of the Fetch api to fetch from laravel applications using csrf tokens
 *=================================================================================================
*/
module.exports ={

	//sets a permanent header value used for all requests
	setHeader(name,value){
		if(typeof name !== 'string')throw new Error('name of the header should be a String not an ' + typeof name)
		if(!this.headers)this.headers=[];
		this.headers.push({name:name,value:value});
	},

	//remove a Header from the permanent header list
	removeHeader(name){

	},
	//middleware to apply the laravel header to the fetch api headers
	_applyHeaders(headers){
		if(!this.csrfToken) throw new Error('No CSRF Token provided use the setToken method first')
		headers.append('X-CSRF-TOKEN',this.csrfToken)
		headers.append('X-Requested-With','XMLHttpRequest')
		if(this.headers)this.headers.forEach(h => headers.append(h.name,h.value));
		return headers
	},

	//set a token
	setToken(token){
		if(!token || token ===  undefined || token.length === 0)throw new Error('Invalid token');
		if(typeof token !== 'string')throw new Error('Token schould be a string not an' + typeof token)
		this.csrfToken=token;
	},

	//get request
	get(url,headers = new Headers()){
		let fetchData= {
			method:'GET',
			headers:this._applyHeaders(headers)
		}
		return new Promise((resolve,reject) => {
			fetch(url,fetchData)
				.then(res => res.json())
				.then(res => resolve(res))
				.catch(err => reject(err))
		})
	},

	//post request
	post(url,data,headers = new Headers()){
		let fetchData= {
			method:'POST',
			body:data,
			headers:this._applyHeaders(headers)
		}
		return new Promise((resolve,reject) => {
			fetch(url,fetchData)
				.then(res => res.json())
				.then(res => resolve(res))
				.catch(err => reject(err))
		})
	},

	//put request
	put(url,data,headers = new Headers()){
		let fetchData= {
			method:'PUT',
			body:data,
			headers:this._applyHeaders(headers)
		}
		return new Promise((resolve,reject) => {
			fetch(url,fetchData)
				.then(res => res.json())
				.then(res => resolve(res))
				.catch(err => reject(err))
		})
	},

	//patch request
	patch(url,data,headers = new Headers()){
		let fetchData= {
			method:'PATCH',
			body:data,
			headers:this._applyHeaders(headers)
		}
		return new Promise((resolve,reject) => {
			fetch(url,fetchData)
				.then(res => res.json())
				.then(res => resolve(res))
				.catch(err => reject(err))
		})
	},

	//delete request
	delete(url,data,headers = new Headers()){
		let fetchData= {
			method:'DELETE',
			body:data,
			headers:this._applyHeaders(headers)
		}
		return new Promise((resolve,reject) => {
			fetch(url,fetchData)
				.then(res => res.json())
				.then(res => resolve(res))
				.catch(err => reject(err))
		})
	}
}


