 
'use strict';

import React from 'react';
import ReactDom from 'react-dom';
 
import { HashRouter as Router, Route,Link ,hashHistory,IndexRoute,Switch} from 'react-router-dom';
 
import App from './component/app';
import Create from './component/create';
import Scene from './component/scene';
import Center from './component/center';
import CenterSet from './component/centerset';

run(); 
function run(){
	ReactDom.render(
		(
			<div className="app">

		    	<Router >
			    	<Route path="/" component={App}>
			    		
		    		</Route> 
		    	</Router>


		    	<Router >
			    	 
		    		<Route path="/create" component={Create}>

		    		</Route>
		    		  
		    	</Router>


		    	<Router >
			    	 
		    		<Route path="/scene" component={Scene}>

		    		</Route>
		    		  
		    	</Router>


		    	<Router>
			    	 
		    		<Route path="/center" component={Center}>
		    		 
		    		</Route>
		    		  
		    	</Router>

		    	<Router>
			    	 
		    		<Route path="/sets" component={CenterSet}>
		    			
		    		 
		    		</Route>
		    		  
		    	</Router>

 			</div>

	),
	document.getElementById("box"));
};

  

 




