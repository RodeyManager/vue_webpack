
import AppService from './app.service';

export default class TestService{
	constructor(){}

	getTestData(){
		return AppService.test({ 
			params: { 
				id: 1000
			} 
		}).then(res => res.data.data).catch(this.error.bind(this));
	}

	error(err){
		console.log(err);
	}

}