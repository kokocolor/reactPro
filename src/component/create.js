'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Route,Link,browserHistory } from 'react-router-dom';

  
let carouselData=require('../../dist/data/carousel1.json');
let turnData=require('../../dist/data/turndata.json');
require ('./app.less');
 

 
//轮播
class Carousel extends React.Component{

 	render(){
 		var items=[];
			 

		turnData.map(function(value,index){
				items.push(<CarouselList data={value} key={index}> </CarouselList>);

			});
 		return( 
	 		<div className="swiper-container">
		        <div className="swiper-wrapper">
		              {items}
		        </div>
         
		        <div className="swiper-pagination"></div>
		    </div>
		)
 	}
}

class CarouselList extends React.Component{

 	render(){
 		return( 
	 		 
            <div className="swiper-slide">
            	< img src = { this.props.data.fileName }
		            className = "img" />
		            <a href={this.props.data.url}>< p className="title"> { this.props.data.title } < /p></a>

            </div>
		         
		)
 	}
}

class Carouselmore extends React.Component{

 	render(){
 		var items=[];
			 

		carouselData.map(function(value,index){
				items.push(<CarouselMoreList data={value} key={index}> </CarouselMoreList>);

			});
 		return( 
	 		<div className="swiper-container1">
		        <div className="swiper-wrapper">
		              {items}
		        </div>
          
		    </div>
		)
 	}
}

class CarouselMoreList extends React.Component{

 	render(){
 		return( 
	 		 
            <div className="swiper-slide">
            	< img src = { this.props.data.fileName }
		            className = "img" />
		        <p className="p1">{this.props.data.title}</p> 
		        <p className="p2">{this.props.data.desc}</p>    

            </div>
		         
		)
 	}
}
//菜单
class Menu extends React.Component{
	render(){
		let attr=[
		{
			"url":'../../dist/public/img/1.jpg',
			"name":'创作',
			"title":"太阳"

		},{
			"url":'../../dist/public/img/1.jpg',
			"name":'场景',
			"title":"远方"

		},{
			"url":'../../dist/public/img/1.jpg',
			"name":'我的',
			"title":"夏季的味道"

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
	render(){
		return(
			<p className="p-list">
				<img src={this.props.data.url} className="icon"/>
				<span>{this.props.data.name}</span>
			</p>
		)
	}
}

class MenuBoxStyle extends React.Component{
	constructor(props){
		super(props);
		this.state={
			urls:""
		};

	}
	getClick(){
		this.componentDidMount();
		alert("点击后get请求到的数据连接："+this.state.urls);
	}

	componentDidMount(){

		$.get(this.props.source, function(result) {
	      var lastGist = result[0];
 
	        this.setState({
	           
	          urls: lastGist.html_url
	        });
	       
	    }.bind(this));
	}

	render(){
		return(
			<p className="menu-box-list" onClick={this.getClick.bind(this)}>
				<img src={this.props.data.fileicon} className="menu-box-img"/>
				<span>{this.props.data.mnane}</span>
			</p>
		)
	}
}

class MenuBox extends React.Component{
	render(){
		return(
			<div className="menu-box">
				 {
				 	 
			 		carouselData.map(function(value,index){
			 			return(
			 				<MenuBoxStyle data={value} key={index} source="https://api.github.com/users/octocat/gists"></MenuBoxStyle>

		 				)
			 		})  

				 }
			</div>
		)
	}
}

class Brand extends React.Component{
	render(){
		return(
			<li className="brand-li">
				<img src={this.props.data.url} className="icon"/>
				<p>{this.props.data.name}</p>
				<span>{this.props.data.price}</span>
			</li>
		)
	}
}

class Nav extends React.Component{
	

	render(){
		let items=[];
		let attrs=[
		{
			"url":'../../dist/public/img/b1.png',
			"name":'生命的色彩你知道多少呢不知道',
			"price":"免费"

		},{
			"url":'../../dist/public/img/b2.png',
			"name":'场景',
			"price":"￥50"

		},{
			"url":'../../dist/public/img/b3.png',
			"name":'我的',
			"price":"免费"

		},{
			"url":'../../dist/public/img/b4.png',
			"name":'创作',
			"price":"免费"

		},{
			"url":'../../dist/public/img/b5.png',
			"name":'场景',
			"price":"￥50"

		},{
			"url":'../../dist/public/img/b6.png',
			"name":'我的',
			"price":"免费"

		} ];
		attrs.map(function(value,index){
			items.push(<Brand data={value} key={index}></Brand>);
		});
		return(
			<div className="sec">
			<div className="nav"> 
				<p className="nav-left"><span className="line"> </span><span className="nav-tit">精选模板</span></p>
				<p className="reload">换一批</p>
			</div>
			<ul className="brand">
			{items}

			</ul>
			</div>
		)
	}


}

class Choice extends React.Component{
	

	render(){
		 
		return(
			<div className="sec choice">
				<div className="nav"> 
					<p className="nav-left"><span className="line"> </span><span className="nav-tit">精选专题</span></p>
					<p className="reload">全部></p>
				</div>
				<Carouselmore></Carouselmore>
			 
			</div>
		)
	}

	
}
class Navtitle extends React.Component{

	render(){
		let items=[];
		let attrs=[
		{
			"url":'../../dist/public/img/b8.png',
			"name":'创作',
			"price":"免费"

		},{
			"url":'../../dist/public/img/b3.png',
			"name":'场景',
			"price":"￥50"

		},{
			"url":'../../dist/public/img/b10.png',
			"name":'我的',
			"price":"免费"

		},{
			"url":'../../dist/public/img/b1.png',
			"name":'我的',
			"price":"免费"

		},{
			"url":'../../dist/public/img/b2.png',
			"name":'我的',
			"price":"免费"

		}];
		attrs.map(function(value,index){
			items.push(<Brand data={value} key={index}></Brand>);
		});
		return(
			<div className="sec">
			<div className="nav"> 
				<p className="nav-left"><span className="line"> </span><span className="nav-tit">最新推荐</span></p>
				<p className="reload">全部></p>
			</div>
			<ul className="brand">
			{items}

			</ul>
			</div>

		)

	}
}


 
 
 
export default class Create extends React.Component{
	moreClick(){
		let moreCon=this.refs.more.innerText;
		alert('你点击的文本是：'+moreCon);
	}
	 
	render(){
		let img="../../dist/public/img/pc.png";
		 
		 
		return(
			 
			<div className="main-box">
			 <Carousel/>
			 <MenuBox/>
			 <Nav/>

			 <Choice/> 
			 <Navtitle/>
			 <p className="look-more" ref="more" onClick={this.moreClick.bind(this)}>查看全部</p>
			 <img src={img} className="pc"/>
			  
			</div> 

		)
	}
}