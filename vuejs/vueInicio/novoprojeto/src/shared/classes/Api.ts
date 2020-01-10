import axios from 'axios';

export default class Api{
	
	constructor(options,domain) {
		let domainUser = window.location.hostname;
		//let domainUser = '10.18.0.106';
		let path_api = 'http://'+domainUser+':5148/api/';
    	this.domain = domain;
    	this.api = path_api+domain;
    }
     
    get(data){
		return axios.get(this.api,{
			params:data
		});
    }

    get_path(path,data){
		return axios.get(this.api+'/'+path,{
			params:data
		});
    }
    
	post(data){
		return axios.post(this.api,data);
	}

	post_path(path,data){
	    return axios.post(this.api+'/'+path,data);
	}

	put(data,id){
		return axios.put(this.api+'/'+id,data);
	}

	put_path(path,data){
		return axios.put(this.api+'/'+path,{
			params:data
		});
    }
    
	delete(id){
		let itemId = typeof id!='undefined' ? '/'+id : '';
		return axios.delete(this.api+itemId);
	}

	delete_path(path,id){
		let itemId = typeof id!='undefined' ? '/'+id : '';
		return axios.delete(this.api+'/'+path+itemId);
	}
    
}