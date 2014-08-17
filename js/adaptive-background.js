/*! Brian Gonzalez by jquery.adaptive-backgrounds.js 23-01-2014 */
(function(e){var c="data-ab-color",d="data-ab-parent",f="data-ab-css-background",b="ab-color-found",a={selector:'[data-adaptive-background="1"]',parent:null,normalizeTextColor:!1,normalizedTextColors:{light:"#fff",dark:"#000"},lumaClasses:{light:"ab-light",dark:"ab-dark"}};!function(j){var i=function(){return document.createElement("canvas").getContext("2d")},p=function(g,r){var q=new Image,h=g.src||g;"data:"!==h.substring(0,5)&&(q.crossOrigin="Anonymous"),q.onload=function(){var s=i();s.drawImage(q,0,0);var t=s.getImageData(0,0,q.width,q.height);r&&r(t.data)},q.src=h},o=function(g){return["rgb(",g,")"].join("")},n=function(g){return g.map(function(h){return o(h.name)})},m=5,l=10,k={};k.colors=function(q,g,r){p(q,function(t){for(var y=t.length,w={},v="",u=[],s={dominant:{name:"",count:0},palette:Array.apply(null,Array(r||l)).map(Boolean).map(function(){return{name:"0,0,0",count:0}})},h=0;y>h;){if(u[0]=t[h],u[1]=t[h+1],u[2]=t[h+2],v=u.join(","),w[v]=v in w?w[v]+1:1,"0,0,0"!==v&&"255,255,255"!==v){var x=w[v];x>s.dominant.count?(s.dominant.name=v,s.dominant.count=x):s.palette.some(function(z){return x>z.count?(z.name=v,z.count=x,!0):void 0})}h+=4*m}g&&g({dominant:o(s.dominant.name),palette:n(s.palette)})})},j.RGBaster=j.RGBaster||k}(window);e.adaptiveBackground={run:function(g){var h=e.extend({},a,g);e(h.selector).each(function(j,m){var n=e(this);var l=function(){var o=k()?i():n[0];RGBaster.colors(o,function(p){n.attr(c,p.dominant);n.trigger(b,{color:p.dominant,palette:p.palette})},20)};var k=function(){return n.attr(f)};var i=function(){return n.css("background-image").replace("url(","").replace(")","")};n.on(b,function(q,r){var o=r;var u;if(h.parent&&n.parents(h.parent).length){u=n.parents(h.parent)}else{if(n.attr(d)&&n.parents(n.attr(d)).length){u=n.parents(n.attr(d))}else{if(k()){u=n}else{u=n.parent()}}}u.css({backgroundColor:r.color});var t=function(v){var w=o.color.match(/\d+/g);return((w[0]*299)+(w[1]*587)+(w[2]*114))/1000};var s=function(v){return t(v)>=128?h.normalizedTextColors.dark:h.normalizedTextColors.light};var p=function(v){return t(v)<=128?h.lumaClasses.dark:h.lumaClasses.light};if(h.normalizeTextColor){u.css({color:s(r.color)})}u.addClass(p(r.color)).attr("data-ab-yaq",t(r.color))});l()})}}})(jQuery);