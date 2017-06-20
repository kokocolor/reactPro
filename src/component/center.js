'use strict';

import React from 'react';
import ReactDom from 'react-dom';


import { HashRouter as Router, Route,Link,browserHistory } from 'react-router-dom';
require ('./app.less');
var classNames = require('classnames');  
 
class Hline extends React.Component{
	render(){

		let Arr=[
			  
				 
				{
					"icon":"../../dist/public/img/icon1.png",
					"title":"秀点",
					"hot":""
				},
				{
					"icon":"../../dist/public/img/icon1.png",
					"title":"优惠券",
					"hot":"new"
				},
				{
					"icon":"../../dist/public/img/icon1.png",
					"title":"客户",
					"hot":""
				},
				{
					"icon":"../../dist/public/img/icon1.png",
					"title":"订单",
					"hot":""
				}  

		];
		
		return(

			<ul className="ul">
				
				{
					Arr.map(function(value,index){
						return(
							<Hlist data={value} key={index}></Hlist>

						)
					})
				}

			</ul>

		)
		
	}
}

class HLineFun extends React.Component{
	render(){

		let ArrFun=[
			  
				 
				{
					"icon":"../../dist/public/img/icon2.png",
					"title":"场景审核",
					"hot":""
				},
				{
					"icon":"../../dist/public/img/icon2.png",
					"title":"去尾页",
					"hot":""
				},
				{
					"icon":"../../dist/public/img/icon2.png",
					"title":"场景保障",
					"hot":"new"
				},
				{
					"icon":"../../dist/public/img/icon2.png",
					"title":"场景加密",
					"hot":""
				},{
					"icon":"../../dist/public/img/icon2.png",
					"title":"误删找回",
					"hot":""
				},
				{
					"icon":"",
					"title":"",
					"hot":""
				},
				{
					"icon":"",
					"title":"",
					"hot":""
				},{
					"icon":"",
					"title":"",
					"hot":""
				}   

		];
		
		return(

			<ul className="ul">
				
				{
					ArrFun.map(function(value,index){
						return(
							<Hlist data={value} key={index}></Hlist>

						)
					})
				}

			</ul>

		)
		
	}
}

class Hlist extends React.Component{
	render(){
		return(
			<li>
			<img src={this.props.data.icon}/>
			<p>{this.props.data.title}</p>
			<span className="new">{this.props.data.hot}</span>

			</li>

		)
	}
}
 
export default class Center extends React.Component{
	
	 
	render(){
		let list={
			"face":"../../dist/public/img/18.jpg",
			"name":"故乡"

		}
 
		  
		return(
			 
			<div className="main-box">
			  	<div className="c-con">
			  		<div className="c-header">
			  			<img src={list.face}/>
			  			<p>{list.name}</p>
			  			<Link to="/sets"><span>设置</span></Link> 
			  
					</div>
					<div className="c-main">
						<h2>我的资源</h2>
						<Hline/>
						<h2 className="h2">功能服务</h2>
						<HLineFun/>

					</div>


			  
				</div>
			  
			</div> 

		)
	}
}