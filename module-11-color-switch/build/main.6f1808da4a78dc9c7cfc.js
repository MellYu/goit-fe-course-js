(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,n,e){},QfWi:function(t,n,e){"use strict";e.r(n);e("L1EO");var i=document.querySelector('button[data-action="start"]'),o=document.querySelector('button[data-action="stop"]'),c=(document.querySelector(".serg"),["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"]),r={intervalID:null,isActive:!1,start:function(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((function(){var t,n;document.body.style="background-color: "+c[(t=0,n=c.length-1,Math.floor(Math.random()*(n-t+1)+t))]+";"}),1e3))},stop:function(){clearInterval(this.intervalId),this.intervalId=null,this.isActive=!1}};i.addEventListener("click",r.start.bind(r)),o.addEventListener("click",r.stop.bind(r))}},[["QfWi",1]]]);
//# sourceMappingURL=main.6f1808da4a78dc9c7cfc.js.map