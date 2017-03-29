import React from 'react';
import _ from 'lodash';
import Footer from './footer.jsx';

import styles from '../styles/style.scss';

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

		return (
			<div style={{color: styles.brandSecondary}}>
				<h1>Hello!</h1>
				<Footer/>
			</div>
		);
	}
}
export default Main;
