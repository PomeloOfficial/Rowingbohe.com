/*

Copyright (C) 2013 Powered by Hanggi Crown | hanggicrown@gamil.com

<!--  微博：@Eput | Eput.com -->

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. 

*/
var a=1;var b=20;var c=0;$(function(){$(".looklook a").click(function(U){U.preventDefault();$(".looklook a").html("").addClass("look_loading");f(b,c,false);$(".look_wrap").show();$(".looklook a").fadeOut()});$("#gogogo").click(function(){$("#gogogo").html("").addClass("go_loading");f(b,c,false)});$(".action.like").live("click",function(U){U.preventDefault()});$(".action.zan").live("click",function(U){U.preventDefault()})});var d;var e=0;function f(U,V,W){$.ajax({type:"get",url:site_url+"api/blockps_unlog/dynamic?limit="+U+"&excur="+V,async:true,dataType:"json",success:function(X){if(X.status<0){g(X,W,true)}else{g(X,W,false)}}})};function g(U,V,W){var X;if(V){e++;if(e>50)return;X=b-d.data.length;c=c+X;X=b-d.data.length-U.data.length;d==U?"":h(d,U)}else{d=0;d=U;X=b-d.data.length;if(!W)c=c+b};if(X>0&&!W){f(X,c,true)}else{e=0;a++;var Y=4;if(W){Y=Math.floor(d.data.length/5);if(Y==0){$("#gogogo").html("没有动态了，去关注更多摄影师吧！");}};for(var Z=0;Z<Y;Z++){l(i(d,Z*5));if(Z==(Y-1)){$("#gogogo").html("更多").removeClass("go_loading");$("img").not($('.immediate-img')).lazyload({effect:"fadeIn"})}};if(a<=2){$.scrollTo('.look_wrap',500)}}};function h(U,V){var W=U.data.length;for(var X=0;X<V.data.length;X++){U.data[W+X]=V.data[X]};return U};function i(U,V){var W={"item":[{}]};for(var X=0;X<5;X++){W.item[X]=U.data[V];V++};return j(W)};function j(U){var V=[{"item":[]},{"item":[]},{"item":[]},{"item":[]},{"item":[]}];var W=0;for(var X=0;X<5;X++){if(X==0){V[0].item[0]=U.item[0];W++}else{for(var Y=0;Y<=W;Y++){if(Y==W){V[W].item[0]=U.item[X];W++;break}else if(V[Y].item[0].uid==U.item[X].uid){var Z=V[Y].item.length;V[Y].item[Z]=U.item[X];break}}}};V.sort(k);return V};function k(U,V){return V.item.length-U.item.length};function l(U){var V=U[0].item.length;var W=U[1].item.length;var X=V+""+W;switch(X){case'11':o(U);break;case'21':p(U);break;case'22':q(U);break;case'31':r(U);break;case'32':s(U);break;case'41':t(U);break;case'50':v(U);break}};function m(){return Math.round(Math.random())};function n(U){var V=new Array();var W=0;var X=-1;for(var Y=0;Y<U.length;Y++){X=U.indexOf("h",X+1);if(X<0){break}else{V[W]=X;W++}};return V};function o(U){var V=U[0].item[0].type;var W=U[4].item[0].type;if(V=="w"&&W=="w"){A(U[0].item[0]);x(U[1].item[0],U[2].item[0],U[3].item[0],3);A(U[4].item[0])}else{x(U[0].item[0],U[1].item[0],U[2].item[0],3);w(U[3].item[0],U[4].item[0],2)}};function p(U){var V=U[0].item[0].type+U[0].item[1].type;if(V=="wh"||V=="hw"){if(U[1].item[0].type=="w"){w(U[0].item[0],U[0].item[1],1);A(U[1].item[0]);w(U[2].item[0],U[3].item[0],1)}else if(U[2].item[0].type=="w"){w(U[0].item[0],U[0].item[1],1);A(U[2].item[0]);w(U[1].item[0],U[3].item[0],1)}else if(U[3].item[0].type=="w"){w(U[0].item[0],U[0].item[1],1);A(U[3].item[0]);w(U[1].item[0],U[2].item[0],1)}else{w(U[0].item[0],U[0].item[1],1);x(U[1].item[0],U[2].item[0],U[3].item[0],3)}}else if(V=="ww"){y(U[1].item[0],U[0].item[0],U[0].item[1],2);w(U[2].item[0],U[3].item[0],2)}else{x(U[1].item[0],U[0].item[0],U[0].item[1],2);w(U[2].item[0],U[3].item[0],2)}};function q(U){var V=U[0].item[0].type+U[0].item[1].type;var W=U[1].item[0].type+U[1].item[1].type;var X=U[2].item[0].type;if(V=="ww"){y(U[2].item[0],U[0].item[0],U[0].item[1],2);w(U[1].item[0],U[1].item[1],1)}else if(X=="w"){w(U[0].item[0],U[0].item[1],1);A(U[2].item[0]);w(U[1].item[0],U[1].item[1],1)}else if(V=="hh"){x(U[2].item[0],U[0].item[0],U[0].item[1],2);w(U[1].item[0],U[1].item[1],1)}else{if(W=="ww"){w(U[0].item[0],U[0].item[1],1);y(U[2].item[0],U[1].item[0],U[1].item[1],2)}else if(W=="hh"){w(U[0].item[0],U[0].item[1],1);x(U[2].item[0],U[1].item[0],U[1].item[1],2)}else{x(U[2].item[0],U[0].item[0],U[0].item[1],2);w(U[1].item[0],U[1].item[1],1)}}};function r(U){var V=U[0].item[0].type+U[0].item[1].type+U[0].item[2].type;var W=n(V);if(V=="www"){y(U[0].item[0],U[0].item[1],U[0].item[2],1);w(U[1].item[0],U[2].item[0],2)}else if(V=="hhh"){x(U[0].item[0],U[0].item[1],U[0].item[2],1);w(U[1].item[0],U[2].item[0],2)}else{if(W.length==1){var X=u(W,3);if(m()){y(U[0].item[W[0]],U[0].item[X[0]],U[0].item[X[1]],1);w(U[1].item[0],U[2].item[0],2)}else{w(U[0].item[X[0]],U[0].item[W[0]],1);A(U[0].item[X[1]]);w(U[1].item[0],U[2].item[0],1)}}else{var X=u(W,3);if(m()){x(U[0].item[W[0]],U[0].item[X[0]],U[0].item[W[1]],1);w(U[1].item[0],U[2].item[0],2)}else{w(U[0].item[W[0]],U[0].item[W[1]],1);A(U[0].item[X[0]]);w(U[1].item[0],U[2].item[0],1)}}}};function s(U){var V=U[0].item[0].type+U[0].item[1].type+U[0].item[2].type;var W=n(V);if(V=="www"){y(U[0].item[0],U[0].item[1],U[0].item[2],1);w(U[1].item[0],U[1].item[1],1)}else if(V=="hhh"){x(U[0].item[0],U[0].item[1],U[0].item[2],1);w(U[1].item[0],U[1].item[1],1)}else{if(W.length==1){var X=u(W,3);if(m()){y(U[0].item[W[0]],U[0].item[X[0]],U[0].item[X[1]],1);w(U[1].item[0],U[1].item[1],1)}else{w(U[0].item[X[0]],U[0].item[W[0]],1);A(U[0].item[X[1]]);w(U[1].item[0],U[1].item[1],1)}}else{var X=u(W,3);if(m()){x(U[0].item[W[0]],U[0].item[X[0]],U[0].item[W[1]],1);w(U[1].item[0],U[1].item[1],2)}else{w(U[0].item[W[0]],U[0].item[W[1]],1);A(U[0].item[X[0]]);w(U[1].item[0],U[1].item[1],1)}}}};function t(U){var V=U[0].item[0].type+U[0].item[1].type+U[0].item[2].type+U[0].item[3].type;var W=n(V);if(V=="wwww"){z(U[0].item[0],U[0].item[1],U[0].item[2],U[0].item[3]);if(U[1].item[0].type=="w"){A(U[1].item[0])}}else{if(W.length==1){var X=u(W,4);w(U[0].item[W[0]],U[0].item[X[0]],1);y(U[1].item[0],U[0].item[X[1]],U[0].item[X[2]],2)}else if(W.length==2){var X=u(W,4);B(U[0].item[W[0]],U[0].item[X[0]],U[0].item[X[1]],U[0].item[W[1]]);if(U[1].item[0].type=="w"){A(U[1].item[0])}}else{var X=u(W,4);x(U[0].item[W[0]],U[0].item[W[1]],U[0].item[W[2]],1);w(U[1].item[0],U[0].item[X[0]],2)}}};function u(U,V){var W;if(V==4){W=[0,1,2,3]}else if(V==3){W=[0,1,2]}else if(V==5){W=[0,1,2,3,4]};for(var X=0;X<U.length;X++){W[U[X]]=-1};var Y=[];var Z=0;for(var X=0;X<W.length;X++){if(W[X]!=-1){Y[Z]=W[X];Z++}};return Y};function v(U){var V=U[0].item[0].type+U[0].item[1].type+U[0].item[2].type+U[0].item[3].type+U[0].item[4].type;var W=n(V);if(V=="wwwww"){if(m()){z(U[0].item[0],U[0].item[1],U[0].item[2],U[0].item[3]);if(U[0].item[4].type=="w"){A(U[0].item[4])}}else if(m()){y(U[0].item[0],U[0].item[1],U[0].item[2],1);w(U[0].item[3],U[0].item[4],1)}else{var X=U[0].item[0].type;var Y=U[0].item[4].type;var Z=U[0].item[2].type;if(X=="w"&&Y=="w"){A(U[0].item[0]);x(U[0].item[1],U[0].item[2],U[0].item[3],3);A(U[0].item[4])}else if(Z=="w"){w(U[0].item[0],U[0].item[1],1);A(U[0].item[2]);w(U[0].item[3],U[0].item[4],1)}else{y(U[0].item[0],U[0].item[1],U[0].item[2],1);w(U[0].item[3],U[0].item[4],1)}}}else{if(W.length==1){var X=u(W,5);w(U[0].item[W[0]],U[0].item[X[0]],1);y(U[0].item[X[3]],U[0].item[X[1]],U[0].item[X[2]],1)}else if(W.length==2){var X=u(W,5);B(U[0].item[W[0]],U[0].item[X[0]],U[0].item[X[1]],U[0].item[W[1]]);if(U[0].item[X[2]].type=="w"){A(U[0].item[X[2]])}}else if(W.length==3){var X=u(W,5);x(U[0].item[W[0]],U[0].item[W[1]],U[0].item[W[2]],1);w(U[0].item[X[1]],U[0].item[X[0]],2)}else if(W.length==4){var X=u(W,5);x(U[0].item[W[0]],U[0].item[W[1]],U[0].item[W[2]],1);w(U[0].item[W[3]],U[0].item[X[0]],2)}else{x(U[0].item[0],U[0].item[1],U[0].item[2],1);w(U[0].item[3],U[0].item[4],2)}}};function w(U,V,W){var X;if(W==1){X=F(U,V)}else{X=G(U,V)};$("#letsgo").before(X);P(U.width,U.height,V.width,V.height,W)};function x(U,V,W,X){var Y;if(X==3){Y=H(U,V,W)}else if(X==2){Y=J(U,V,W)}else{Y=I(U,V,W)};$("#letsgo").before(Y);R(U.width,U.height,V.width,V.height,W.width,W.height,X)};function y(U,V,W,X){var Y;if(X==1){Y=K(U,V,W)}else{Y=L(U,V,W)};$("#letsgo").before(Y);Q(U.width,U.height,V.width,V.height,W.width,W.height,X)};function z(U,V,W,X){var Y=N(U,V,W,X);$("#letsgo").before(Y);S(U.width,U.height,V.width,V.height,W.width,W.height,X.width,X.height)};function A(U){var V;V=E(U);$("#letsgo").before(V);O(U.width,U.height)};function B(U,V,W,X){var Y=M(U,V,W,X);$("#letsgo").before(Y);T(U.width,U.height,V.width,V.height,W.width,W.height,X.width,X.height)};function C(U,V){var W=U.dtype;var X="";switch(W){case"2":X="喜欢了";break;case"3":X="评论了";break;case"4":X="赞了";break;default:X="参与了"};var Y=V?"等"+V+"个作品":"";var Z='<div class="info"><div class="inside"><div class="avatar left"><a href="'+U.homeurl+'"><img src="'+U.avatar+'"alt=""width="50"></a></div><div class="actions left"><div><a href="'+U.homeurl+'">'+U.name+'</a> '+X+'</div><div><a href="'+U.phomeurl+'">'+U.pname+'</a>的<a href="'+U.purl+'">'+U.ptitle+'</a>'+Y+'</div><div class="time">'+U.time+' 以前</div></div><div class="clear"></div></div></div>';return Z};function D(U){var V=U.iszan?"atted":"";var W=U.islike?"atted":"";var X='<div class="pic_one"><a target="_blank" href="'+U.purl+'"><img src="images/pre-fff.gif" data-original="'+U.imgurl[0]+'" alt=""width="600"></a><div class="landz"><a href="'+U.likeurl+'"class="action like '+W+'"><span class="icon"></span><span class="count">'+U.like+'</span></a><a href="'+U.zanurl+'"class="action zan '+V+'"><span class="icon"></span><span class="count">'+U.zan+'</span></a></div></div>';return X};function E(U){var V='<div class="wrap_box big"><div class="flow_one">'+C(U)+'<div class="pic_wrap big_one">'+D(U)+'<div class="clear"></div> </div></div> <div class="clear"></div> </div>';return V};function F(U,V){var W='<div class="wrap_box ww"><div class="flow_one">'+C(U,2)+'<div class="pic_wrap">'+D(U)+D(V)+'<div class="clear"></div> </div></div> <div class="clear"></div> </div>';return W};function G(U,V){var W='<div class="wrap_box ww">'+'<div class="flow_one left">'+C(U)+'<div class="pic_wrap">'+D(U)+'<div class="clear"></div> </div></div>'+'<div class="flow_one right">'+C(V)+'<div class="pic_wrap">'+D(V)+'<div class="clear"></div> </div></div>'+' <div class="clear"></div> </div>';return W};function H(U,V,W){var X='<div class="wrap_box www">'+'<div class="flow_one left">'+C(U)+'<div class="pic_wrap">'+D(U)+'<div class="clear"></div> </div></div>'+'<div class="flow_one left">'+C(V)+'<div class="pic_wrap">'+D(V)+'<div class="clear"></div> </div></div>'+'<div class="flow_one right">'+C(W)+'<div class="pic_wrap">'+D(W)+'<div class="clear"></div> </div></div><div class="clear"></div></div>';return X};function I(U,V,W){var X='<div class="wrap_box www">'+'<div class="flow_one left">'+C(U,3)+'<div class="pic_wrap">'+D(U)+D(V)+D(W)+'<div class="clear"></div> </div></div><div class="clear"></div></div>';return X};function J(U,V,W){var X='<div class="wrap_box www">'+'<div class="flow_one left">'+C(U)+'<div class="pic_wrap">'+D(U)+'<div class="clear"></div> </div></div>'+'<div class="flow_one left">'+C(V,2)+'<div class="pic_wrap">'+D(V)+D(W)+'<div class="clear"></div> </div></div><div class="clear"></div></div>';return X};function K(U,V,W){var X='<div class="wrap_box xyy">'+'<div class="flow_one">'+C(U,3)+'<div class="pic_wrap"><div class="left_ps less">'+D(U)+'</div><div class="right_ps many">'+D(V)+D(W)+'</div>'+'<div class="clear"></div> </div></div><div class="clear"></div></div>';var Y='<div class="wrap_box yyx">'+'<div class="flow_one">'+C(U,3)+'<div class="pic_wrap"><div class="left_ps many">'+D(V)+D(W)+'</div><div class="right_ps less">'+D(U)+'</div>'+'<div class="clear"></div> </div></div><div class="clear"></div></div>';if(m()){return X}else{return Y}};function L(U,V,W){var X='<div class="wrap_box w_ww">'+'<div class="flow_one left">'+C(U)+'<div class="pic_wrap"><div class="left_ps less">'+D(U)+'<div class="clear"></div> </div></div></div>'+'<div class="flow_one right">'+C(V,2)+'<div class="pic_wrap"><div class="right_ps many">'+D(V)+D(W)+'<div class="clear"></div> </div></div></div><div class="clear"></div></div>';var Y='<div class="wrap_box ww_w">'+'<div class="flow_one left">'+C(V,2)+'<div class="pic_wrap"><div class="left_ps many">'+D(V)+D(W)+'<div class="clear"></div> </div></div></div>'+'<div class="flow_one right">'+C(U)+'<div class="pic_wrap"><div class="right_ps less">'+D(U)+'<div class="clear"></div> </div></div></div><div class="clear"></div></div>';if(m()){return X}else{return Y}};function M(U,V,W,X){var Y='<div class="wrap_box xyyx">'+'<div class="flow_one left">'+C(U,4)+'<div class="pic_wrap"><div class="left_ps less">'+D(U)+'</div><div class="right_ps many">'+D(V)+D(W)+'</div>'+'<div class="clear"></div> </div></div>'+'<div class="flow_one right">'+'<div class="pic_wrap">'+D(X)+'<div class="clear"></div> </div></div>'+'<div class="clear"></div></div>';return Y};function N(U,V,W,X){var Y='<div class="wrap_box xyyy">'+'<div class="flow_one">'+C(U,4)+'<div class="pic_wrap"><div class="left_ps less">'+D(U)+'</div><div class="right_ps many">'+D(V)+D(W)+D(X)+'</div>'+'<div class="clear"></div> </div></div><div class="clear"></div></div>';return Y};function O(U,V){var W=$(window).height();var X=$("#letsgo").prev();U=Number(U);V=Number(V);var Y=V*1180/U;if(W>Y+80||Y<500){X.find(".big_one img").css({"width":"1180px"})}else if(W>=500&&W<600||Y<600){X.find(".big_one").css({"height":"500px"});X.find(".big_one img").css({"width":"1180px","position":"absolute","top":"-"+(Y-500)/2+"px"})}else if(W>=600&&W<700||Y<650){X.find(".big_one").css({"height":"600px"});X.find(".big_one img").css({"width":"1180px","position":"absolute","top":"-"+(Y-600)/2+"px"})}else{X.find(".big_one").css({"height":"650px"});X.find(".big_one img").css({"width":"1180px","position":"absolute","top":"-"+(Y-650)/2+"px"})}};function P(U,V,W,X,Y){var Z=$("#letsgo").prev();U=Number(U);W=Number(W);V=Number(V);X=Number(X);var a0,a1,a2,a3;if(Y==1){a0=X/V;a1=1179/ ((U*X)/V+W);a2=Math.round(U*a0*a1);a3=Math.round(W*a1);if((a2+a3)>=1179){a2-=a2+a3-1179};Z.find(".pic_wrap img:eq(0)").css({"width":a2,"margin-right":"1px","border-radius":"3px 0 0 3px"});Z.find(".pic_wrap img:eq(1)").css({"width":a3,"border-radius":"0 3px 3px 0"})}else{a0=X/V;a1=1165/ (U*X/V+W);a2=Math.round(U*a0*a1);a3=Math.round(W*a1);if((a2+a3)>=1165){a2-=a2+a3-1165};Z.find(".pic_wrap:eq(0) img").css({"width":a2,"border-radius":"3px"});Z.find(".pic_wrap:eq(1) img").css({"width":a3,"border-radius":"3px"})};var a4=Math.round(a2*V/U),a5=Math.round(a3*X/W);var a6=a4<a5?(a4):a5;Z.css({"height":a6+"px"})};function Q(U,V,W,X,Y,Z,a0){var a1=$("#letsgo").prev();U=Number(U);W=Number(W);Y=Number(Y);V=Number(V);X=Number(X);Z=Number(Z);var a2,a3,a4,a5;if(a0==1){a3=(1179/U-1/V)/((X+Z*W/Y)/V+W/U);a2=(1179-W*a3)/U;a4=Math.round(U*a2);a5=Math.round(W*a3);if((a4+a5)>=1179){a4-=a4+a5-1179};a1.find(".pic_wrap .less img").css({"width":a4});a1.find(".pic_wrap .many img").css({"width":a5});a1.find(".pic_wrap .many img:eq(0)").css({"margin-bottom":"1px"})}else{a3=(1165/U-1/V)/((X+Z*W/Y)/V+W/U);a2=(1165-W*a3)/U;a4=Math.round(U*a2);a5=Math.round(W*a3);if((a4+a5)>=1165){a4-=a4+a5-1165};a1.find(".pic_wrap .less img").css({"width":a4});a1.find(".pic_wrap .many img").css({"width":a5});a1.find(".pic_wrap .many img:eq(0)").css({"margin-bottom":"1px"})};var a6=Math.round(a4*V/U),a7=Math.round(a5*X/W)+1+Math.round(a5*Z/Y);var a8=a6<a7?(a6):a7;a1.css({"height":a8+"px"})};function R(U,V,W,X,Y,Z,a0){var a1=$("#letsgo").prev();U=Number(U);W=Number(W);Y=Number(Y);V=Number(V);X=Number(X);Z=Number(Z);var a2,a3,a4,a5,a6,a7;if(a0==1){a2=Z/V;a3=Z/X;a4=1178/(U*a2+W*a3+Y);a5=Math.round(U*a2*a4);a6=Math.round(W*a3*a4);a7=Math.round(Y*a4);if((a5+a6+a7)>=1178){a5-=a5+a6+a7-1178};a1.find(".pic_wrap .pic_one:eq(0) img").css({"width":a5,"margin-right":"1px"});a1.find(".pic_wrap .pic_one:eq(1) img").css({"width":a6,"margin-right":"1px"});a1.find(".pic_wrap .pic_one:eq(2) img").css({"width":a7})}else if(a0==2){a2=Z/V;a3=Z/X;a4=1164/(U*a2+W*a3+Y);a5=Math.round(U*a2*a4);a6=Math.round(W*a3*a4);a7=Math.round(Y*a4);if((a5+a6+a7)>=1164){a5-=a5+a6+a7-1164};a1.find(".flow_one:eq(0) .pic_wrap img").css({"width":a5,"border-radius":"3px"});a1.find(".flow_one:eq(0)").css({"margin-right":"15px"});a1.find(".flow_one:eq(1) .pic_wrap .pic_one:eq(0) img").css({"width":a6,"margin-right":"1px"});a1.find(".flow_one:eq(1) .pic_wrap .pic_one:eq(1) img").css({"width":a7})}else{a2=Z/V;a3=Z/X;a4=1150/(U*a2+W*a3+Y);a5=Math.round(U*a2*a4);a6=Math.round(W*a3*a4);a7=Math.round(Y*a4);if((a5+a6+a7)>=1150){a5-=a5+a6+a7-1150};a1.find(".flow_one:eq(0) .pic_wrap img").css({"width":a5,"border-radius":"3px"});a1.find(".flow_one:eq(1) .pic_wrap img").css({"width":a6,"border-radius":"3px"});a1.find(".flow_one:eq(2) .pic_wrap img").css({"width":a7,"border-radius":"3px"});a1.find(".flow_one:eq(0)").css({"margin-right":"15px"})};var a8=Math.round(a5*V/U),a9=Math.round(a6*X/W),b0=Math.round(a7*Z/Y);var b1=a8<a9?(a8):a9;var b2=b1<b0?(b1):b0;a1.css({"height":b2+"px"})};function S(U,V,W,X,Y,Z,a0,a1){var a2=$("#letsgo").prev();U=Number(U);W=Number(W);Y=Number(Y);a0=Number(a0);V=Number(V);X=Number(X);Z=Number(Z);a1=Number(a1);var a3,a4,a5,a6;a4=(1179*V/U-1)/ (V*a0/U+X*a0/W+Z*a0/Y+a1);a3=(1179-a0*a4)/U;a5=Math.round(U*a3);a6=Math.round(a0*a4);if((a5+a6)>=1179){a5-=a5+a6-1179};a2.find(".pic_wrap .pic_one:eq(0) img").css({"width":a5,"margin-right":"1px"});a2.find(".pic_wrap .pic_one:eq(1) img").css({"width":a6,"margin-bottom":"1px"});a2.find(".pic_wrap .pic_one:eq(2) img").css({"width":a6,"margin-bottom":"1px"});a2.find(".pic_wrap .pic_one:eq(3) img").css({"width":a6});var a7=Math.round(a5*V/U),a8=Math.round(a6*X/W)+1+Math.round(a6*Z/Y)+1+Math.round(a6*a1/a0);var a9=a7<a8?(a7):a8;a2.css({"height":a9+"px"})};function T(U,V,W,X,Y,Z,a0,a1){var a2=$("#letsgo").prev();U=Number(U);W=Number(W);Y=Number(Y);a0=Number(a0);V=Number(V);X=Number(X);Z=Number(Z);a1=Number(a1);var a3,a4,a5;a3=(1180+W/(X+Z*W/Y))/(U+W*V/(X+Z*W/Y)+a0*V/a1);a4=(V*a3-1)/(X+Z*W/Y);a5=V*a3/a1;var a6=Math.round(U*a3),a7=Math.round(W*a4),a8=Math.round(a0*a5);if((a6+a7+a8)>=1178){a6-=a6+a7+a8-1178};a2.find(".flow_one:eq(0) .pic_wrap .less img").css({"width":a6,"margin-right":"1px"});a2.find(".flow_one:eq(0) .pic_wrap .many img").css({"width":a7,"margin-bottom":"1px"});a2.find(".flow_one:eq(1) .pic_wrap img").css({"width":a7,"margin-bottom":"1px"});a2.find(".pic_wrap .pic_one:eq(3) img").css({"width":a8});var a9=Math.round(a6*V/U),b0=Math.round(a7*X/W)+1+Math.round(a7*Z/Y),b1=Math.round(a8*a1/a0);var b2=a9<b0?(a9):b0;var b3=b2<b1?(b2):b1;a2.css({"height":b3+"px"})}