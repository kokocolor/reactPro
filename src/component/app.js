'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import Create from './create';
 
import Scene from './scene';
import Center from './center';
import { HashRouter as Router, Route,Link,browserHistory } from 'react-router-dom';
require ('./app.less');
var classNames = require('classnames');  
 
//菜单
class Menu extends React.Component{
	render(){
		let attr=[
		{
			"url":'../../dist/public/img/q1.png',
			"icon":"🌹",
			"name":'创作',
			"title":"太阳",
			"newurl":"create"

		},{
			"url":'../../dist/public/img/q2.png',
			"icon":"🔥",
			"name":'场景',
			"title":"远方",
			"newurl":"scene"

		},{
			"url":'../../dist/public/img/q3.png',
			"icon":"📚",
			"name":'我的',
			"title":"夏季的味道",
			"newurl":"center"

		},

		];
		return(
			<div className="footer-menu">
				{
					attr.map(function(value,index){
						return(
							 <Menulist data={value} key={index}></Menulist>
						)

					})
				}
			</div>

		)
	}
}
class Menulist extends React.Component{
	constructor(props){
		super(props);
		this.state={
			turnState:false
		}
	}
	cChange(){
		if(this.state.turnState){
			this.setState({
				turnState:false
			})
		}else{
			this.setState({
				turnState:true
			})
		}
		
		


	}
	render(){
		var colorChange = classNames({
	        
	        "_active": this.state.turnState 
	    });
		return(
			<Link to={this.props.data.newurl}><p className="p-list" onClick={this.cChange.bind(this)}>
				<img className="icon" src={this.props.data.url}></img>
				<span className="">{this.props.data.name}</span>
			</p></Link>
		)
	}
} 
 
export default class App extends React.Component{
	componentDidMount(){
		window.onload=function(){
 
		    var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true
		    });

		    var swiper = new Swiper('.swiper-container1', {
		       	pagination: '.swiper-pagination',
		        slidesPerView: 3,
		        paginationClickable: true,
		        spaceBetween: 15
		    });
		}
	}
	 
	render(){
		  
		return(
			  
			 <Menu/>
			 

		)
	}
}