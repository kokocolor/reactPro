'use strict';

import React from 'react';
import ReactDom from 'react-dom';

import { HashRouter as Router, Route,Link,browserHistory } from 'react-router-dom';

require ('./app.less');
var classNames = require('classnames');  
 
 
 
export default class Scene extends React.Component{
	constructor(props){
        super(props);
        this.state = { 
        	turnStateLeft: true,
        	turnStateRight: false

        	};
    }

	handleClickLeft(e) {
		if(this.state.turnStateLeft){
			this.setState({ 
	    		turnStateLeft: true,
	        	turnStateRight: false
	    	});
			 

		}else{
			this.setState({ 
	    		turnStateLeft: !this.state.turnStateLeft,
	        	turnStateRight: !this.state.turnStateRight
	    	});

		} 
		  
         
    }

    handleClickRight(e) {
		if(this.state.turnStateRight){
			this.setState({ 
	    		turnStateLeft: false,
	        	turnStateRight: true
	    	});
			 

		}else{
			this.setState({ 
	    		turnStateLeft: !this.state.turnStateLeft,
	        	turnStateRight: !this.state.turnStateRight
	    	});

		}  
         
    }

    

	 
	render(){
		var sLeft = classNames({
        	"_active":  this.state.turnStateLeft
        
	    });

	    var sRight = classNames({
	        
	        "_active": this.state.turnStateRight 
	    });

	    var sConLeft = classNames({
	        "s-con-left":true,
	        "show": this.state.turnStateLeft 
	    });
	    var sConRight = classNames({
	        "s-con-right":true,
	        "show": this.state.turnStateRight 
	    });

	    let img='../../dist/public/img/tu2.png';
		 
		  
		return(
			 
			<div className="main-box">
				<div className="scene">
					<div className="s-top">全部场景</div>

					<div className="s-tab">
						<p className={sLeft} onClick={this.handleClickLeft.bind(this)}>手机</p>
						<p className={sRight} onClick={this.handleClickRight.bind(this)}>电脑</p>
					</div>

					<div className="s-con">
						<div className={sConLeft}>
							<p>你还没有场景</p>
							<p className="btn">立即制作</p>
						</div>

						<div className={sConRight}>
							<img src={img}/>
						</div>
					</div>
				</div>

				

			  
			  
			</div> 

		)
	}
}