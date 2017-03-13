(function(){
	'use strict';

    angular
    .module('ipaiban')
   	.directive('designCanvas',[function(){

   		return {
   			restrict:'E',
   			templateUrl:'app/components/design/design-canvas.html',
   			link:function(scope,elem){


               var idName = "#ytp-svg-0";
               var animateId = '#animate-btn-0';
   				

               scope.pause = function(){


                  elem.find(animateId)[0].beginElement();
                  animateId = animateId == '#animate-btn-0'? '#animate-btn-1' : '#animate-btn-0';


   idName = idName == '#ytp-svg-0'? '#ytp-svg-1' : '#ytp-svg-0';
                        elem.find('.ytp-svg-shadow').attr('xlink:href',idName);  
                  // setTimeout(function(){
                                  
                  // }, 2000);
             
                  
                  // console.log(d3.select('#animate-btn'));      
               }


   				var data = [10,15];
   				var svg;


   				function createSVG(){
   					svg = d3.select('.design-canvas-sec').append('svg').attr('class','axis')
   					.attr('width',500).attr('height',500).attr('padding',80);
   				}


   				function renderAxis(scale,orient){

   					var axis = d3.axisLeft()
   						.scale(scale).ticks(5);

   					svg.append('g')
   						.call(axis);


   				}

   				// createSVG();

   				// renderAxis(d3.scaleLinear().domain([0,1000]).range([0,200]),'bottom');

   				// d3.select('.design-canvas-sec').select('svg')

   				//进入模式
   				// d3.select(".design-canvas-sec").
   				// 	selectAll('div.h-bar'). //图形元素集合
   				// 	data(data). //数据集合
   				// 	enter().
   				// 	append('div').
   				// 	attr('class','h-bar');


   				// //更新模式  data() 函数直接返回图形元素集合与数据集合的交集
   				// d3.select('.design-canvas-sec').selectAll('div.h-bar')
   				// 	.data(data)
   				// 	.style("width",function(d){ 
   				// 		return (d*3) + "px";
   				// 	});

   				// d3.select('.design-canvas-sec').selectAll('div.h-bar')
   				// .data([10,15])
   				// .exit()
   				// .remove();







   			}

   		}

   	}]);

})();