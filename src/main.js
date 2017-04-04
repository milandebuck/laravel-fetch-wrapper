/*
 *=================================================================================================
 * @author Milan De Buck
 *
 * extra layer on top of the Fetch api to fetch from laravel applications using csrf tokens
 *=================================================================================================
*/
module.exports ={

	//middleware to apply the laravel header to the fetch api headers
	_applyHeaders(){
		const headers = new Headers()
		if(!this.csrfToken) throw new Error('No CSRF Token provided use the setToken method first')
		headers.append('X-CSRF-TOKEN',this.csrfToken)
		headers.append('X-Requested-With','XMLHttpRequest')
		return headers
	},

	//set a token
	setToken(token){
		if(token.length === 0)throw new Error('Invalid token');
		this.csrfToken=token;
	},

	//get request
	get(url){
		let fetchData= {
			method:'GET',
			headers:_applyHeaders()
		}
		return new Promise((resolve,reject) => {
			fetch(url,fetchData)
				.then(res => res.json())
				.then(res => resolve(res))
				.catch(err => reject(err))
		})
	},

	//post request
	post(url,data){
		let fetchData= {
			method:'POST',
			body:data,
			headers:_applyHeaders()
		}
		return new Promise((resolve,reject) => {
			fetch(url,fetchData)
				.then(res => res.json())
				.then(res => resolve(res))
				.catch(err => reject(err))
		})
	},

	//put request
	put(url,data){
		let fetchData= {
			method:'PUT',
			body:data,
			headers:_applyHeaders()
		}
		return new Promise((resolve,reject) => {
			fetch(url,fetchData)
				.then(res => res.json())
				.then(res => resolve(res))
				.catch(err => reject(err))
		})
	},

	//patch request
	patch(url,data){
		let fetchData= {
			method:'PATCH',
			body:data,
			headers:_applyHeaders()
		}
		return new Promise((resolve,reject) => {
			fetch(url,fetchData)
				.then(res => res.json())
				.then(res => resolve(res))
				.catch(err => reject(err))
		})
	},

	//delete request
	delete(url,data){
		let fetchData= {
			method:'DELETE',
			body:data,
			headers:_applyHeaders()
		}
		return new Promise((resolve,reject) => {
			fetch(url,fetchData)
				.then(res => res.json())
				.then(res => resolve(res))
				.catch(err => reject(err))
		})
	}
}


