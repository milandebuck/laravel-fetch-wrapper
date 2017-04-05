# Laravel-fetch-wrapper

## Description

A wrapper to use the fetch API with Laravel JSON API's
also extracts the json data out of the request.

## Usage


```javascript
//import the library
import fetchWrapper from 'laravel-fetch-wrapper'

//set the Laravel CSRF Token
fetchWrapper.setToken(window.csrfToken)

//GET request
fetchWrapper.get('url')
	.then(res =>{
		//do stuff with the json data
	})
	.catch(err => {
		//handle error
	})

//POST request
fetchWrapper.post('url',data)
	.then(res =>{
		//do stuff with the json data
	})
	.catch(err => {
		//handle error
	})

```