import React from 'react';
import _ from 'lodash';

export class Main extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}
	setStore(store){
		this.setState(store);
	}
	updateUserData(obj){
		let updatedData = Object.assign(_.cloneDeep(this.state.userData), obj);
		if(updatedData.id) {
			console.log(updatedData);
		}
		else
			this.setStore({userData: updatedData});
	}
	componentDidMount(){
	}
	render() {

		return (<div><h1>Hello!</h1></div>);
	}
}
export default Main;
