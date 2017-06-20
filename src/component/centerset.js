 
'use strict';

import React from 'react';
import ReactDom from 'react-dom';
 
import { HashRouter as Router, Route,Link ,hashHistory,IndexRoute,Switch} from 'react-router-dom';
 
export default class CenterSet extends React.Component{
	handleClick(){
		// location.href=document.referrer;
		window.history.back(-1);
	}
	setSubmit(){
		let oldpass=this.refs.oldpasses.value;
		let newpass=this.refs.newpasses.value;
		if(!oldpass||!newpass){
			alert("请填写完整在提交！");
		}else{
			alert('请再次确定：旧密码：'+oldpass+'新密码'+newpass);
		}
		
	}
	 
	render(){
		  
		return(
			 
			<div className="main-box">
			  	<div className="c-set">

			  	   <p className="s-back"><span className="arrow" onClick={this.handleClick.bind(this)}>&lt;</span>密码设置 <span className="sure" onClick={this.setSubmit.bind(this)}>完成</span></p>
			  	   <p className="reset"><span>旧密码:</span><input type="text" ref="oldpasses" placeholder="输入旧密码"/></p>
			  	   <p className="reset"><span>新密码:</span><input type="text" ref="newpasses" placeholder="6-16位字母、数字或下划线"/></p>

			  	</div>
			  
			</div> 

		)
	}
}