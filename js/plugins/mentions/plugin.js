/* Ephox mentions plugin
 *
 * Copyright 2010-2016 Ephox Corporation.  All rights reserved.
 *
 * Version: 1.1.1
 */

!function(){"use strict";var t,n,e,r,o,i=function(r,o){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=r.console;e&&o in e&&e[o].apply(e,arguments)}},b={log:i(window,"log"),error:i(window,"error"),warn:i(window,"warm")},c=function(t){return parseInt(t,10)},u=function(t,n,e){return{major:t,minor:n,patch:e}},l=function(t){var n=/([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(t);return n?u(c(n[1]),c(n[2]),c(n[3])):u(0,0,0)},a=function(t,n){var e=t-n;return 0===e?0:0<e?1:-1},w=function(t,n){return-1===function(t,n){var e=a(t.major,n.major);if(0!==e)return e;var r=a(t.minor,n.minor);if(0!==r)return r;var o=a(t.patch,n.patch);return 0!==o?o:0}((e=t)?l([(r=e).majorVersion,r.minorVersion].join(".").split(".").slice(0,3).join(".")):null,l(n));var e,r},T=function(t,n){return t.dom.is(n,s(t))},s=function(t){return t.settings.mentions_selector||".mention"},f=function(t){console.error(t)},x=function(t){return t&&"string"==typeof t.id&&"string"==typeof t.name},A=function(t){x(t)||f("mentions_fetch didn't produce a valid list of users.")},C=function(t,n){var e=T(t,n);return e||f("mentions_complete needs to produce a element that matches selector: "+s(t)),!e},R=function(t){var n=function(){},r=function(t,n){return"function"==typeof t?t:n},e=function(t,n){var o,e=r(t,n);return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r={};t=t.map(function(t){var e;return"function"==typeof t&&(e=t,t=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];r===o&&e.apply(null,t)}),t}),r=o={},e.apply(null,t)}},o=e(t.mentions_menu_hover,n),i=e(t.mentions_fetch,function(t,n){n([])}),c=r(t.mentions_menu_complete,function(t,n){var e;return(e=t.dom.create("span",{class:"mention"})).appendChild(t.dom.doc.createTextNode("@"+n.name)),e}),u=r(t.mentions_menu_cancel,n);return{hover:o,fetch:i,complete:c,select:e(t.mentions_select,n),cancel:u}},E=function(i){i.on("SetContent",function(){var t,n;n=!0,(t=i).$(s(t),n).prop("contentEditable",!1)}),i.on("PreProcess",function(t){var n,e,r,o;n=i,e=t.node,r=t.source_view,(o=n.$(s(n),e)).removeAttr("contenteditable"),r||o.removeAttr("data-mce-mentions-id")}),i.on("ResolveName",function(t){T(i,t.target)&&(t.name="mention")})},O=function(n,e){var r,t;return(t=function(){var t=arguments;clearTimeout(r),r=setTimeout(function(){n.apply(this,t)},e)}).stop=function(){clearTimeout(r)},t},m=Math.round,d=function(t,n,e){var r,o,i,c,u,l;r=n.x,o=n.y,i=t.w,c=t.h,u=n.w,l=n.h;var a=(e||"").split("");return"b"===a[0]&&(o+=l),"r"===a[1]&&(r+=u),"c"===a[0]&&(o+=m(l/2)),"c"===a[1]&&(r+=m(u/2)),"b"===a[3]&&(o-=c),"r"===a[4]&&(r-=i),"c"===a[3]&&(o-=m(c/2)),"c"===a[4]&&(r-=m(i/2)),p(r,o,i,c)},p=function(t,n,e,r){return{x:t,y:n,w:e,h:r}},y=tinymce.DOM,h=function(t,n,e){var r,o;return(r=y.getViewPort()).w-=30,r.h-=30,o=function(t,n,e,r){var o,i;for(i=0;i<r.length;i++)if((o=d(t,n,r[i])).x>=e.x&&o.x+o.w<=e.w+e.x&&o.y>=e.y&&o.y+o.h<=e.h+e.y)return r[i];return null}(t,n,r,e),t=d(t,n,o)},V=function(t,n,e,r){var o,i,c,u=(c=e,g(i=t,i.dom.getRect(c)));o=y.getRect(n),o=h(o,u,r),y.setStyles(n,{position:"absolute",left:o.x,top:o.y})},g=function(t,n){var e;return t.inline||(e=y.getPos(t.getContentAreaContainer()),n.x+=e.x,n.y+=e.y),n},k=function(i,t,n,e){var c,u,l=-1,a=tinymce.DOM,s=function(t,n){var e,r,o,i,c,u;r=f(((o=(o=t.rng).cloneRange()).setStart(o.startContainer,o.startOffset+1),o)),e=h(a.getRect(n.getEl()),(c=0,u=2,p((i=r).x-c,i.y-u,i.w+2*c,i.h+2*u)),["bl-tl","tl-bl","tl-br","bl-tr"]),n.moveTo(e.x,e.y)},f=function(t){var n;n=t.getClientRects()[0];var e=i.inline?a.getViewPort():{x:0,y:0};return g(i,{x:n.left+e.x,y:n.top+e.y,w:n.width,h:n.height})},m=function(){u&&(a.remove(u),u=null)},d=function(){m(),c&&(c.remove(),c=null)},r=function(){m(),c&&c.hide()},o=function(o){e(o.settings.data,function(t){var n,e,r;o.getEl().parentNode&&0!==c.items().length&&c.visible()&&(a.setStyles(t,{position:"absolute",left:-65535,top:-65535}),a.add(document.body,t),n=t,e=o.getEl(),r=h(a.getRect(n),a.getRect(e),["tr-tl","tl-tr","bl-br","br-bl"]),a.setStyles(n,{left:r.x,top:r.y}),m(),u=t)})},y=function(e){m(),c.items().each(function(t,n){t===e&&l!==n&&(e.hover(),o(e),l=n)})},v=function(){var t;r(),(t=c.items()[l])&&n(t.settings.data)};return{isVisible:function(){return c&&c.visible()},selectNext:function(){y(c.items()[l+1])},selectPrev:function(){y(c.items()[l-1])},showAt:function(o){t(function(t){var n,e,r;0!==t.length?(c=(c||(c=tinymce.ui.Factory.create("menu",{onhide:function(){m()},classes:"contextmenu"}).renderTo(),i.on("remove",d),c)).show(),(n=c).getEl().style.width="",n.getEl("body").style.width="",c.items().remove(),c.add((e=t,r=o.text,tinymce.util.Tools.map(e,function(t){return{text:t.fullName,data:t,match:r,onclick:function(){y(this),v()},onmouseenter:function(){y(this)}}}))),c.renderNew(),c.initLayoutRect(),s(o,c),l=-1,y(c.items()[0])):c&&c.hide()})},hide:r,complete:v}},v=/[\u00a0 \t\r\n]/,P=function(t){var n,e=(n=t).collapsed&&3===n.startContainer.nodeType?n.startContainer:null;if(null===e)return null;var r=t.startOffset,o=function(t,n){var e;for(e=n-1;0<=e;e--){if(v.test(t.charAt(e)))return null;if("@"===t.charAt(e))break}return-1===e||n-e<2?null:t.substring(e+1,n)}(e.data,r);if(null===o)return null;var i=t.cloneRange();return i.setStart(e,r-o.length-1),i.setEnd(e,r),{text:o,rng:i}},N=function(t){return function(){return t}},_=N(!1),j=N(!0),S=function(){return K},K=(r={fold:function(t,n){return t()},is:_,isSome:_,isNone:j,getOr:e=function(t){return t},getOrThunk:n=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){},or:e,orThunk:n,map:S,ap:S,each:function(){},bind:S,flatten:S,exists:_,forall:j,filter:S,equals:t=function(t){return t.isNone()},equals_:t,toArray:function(){return[]},toString:N("none()")},Object.freeze&&Object.freeze(r),r),M=(o="function",function(t){return function(t){if(null===t)return"null";var n=typeof t;return"object"===n&&Array.prototype.isPrototypeOf(t)?"array":"object"===n&&String.prototype.isPrototypeOf(t)?"string":n}(t)===o});Array.prototype.slice,M(Array.from)&&Array.from;tinymce.PluginManager.add("mentions",function(t){return w(tinymce,"4.3.13")?(b.error("The mentions plugin requires at least 4.3.13 version of TinyMCE."),function(){}):w(tinymce,"5.0.0")?(i=R((o=t).settings),c={},s="data-mce-mentions-id",f=function(){return P(o.selection.getRng())},m=function(){e&&(e.parentNode.removeChild(e),e=null)},d=k(o,function(e){var t=f();if(t){var n={term:t.text};i.fetch(n,function(t){tinymce.util.Tools.each(t,A);var n=t.slice(0,10);e(tinymce.util.Tools.grep(n,x))})}},function(t){var n,e;n=i.complete(o,t),C(o,n)||(e=P(o.selection.getRng()),n.contentEditable=!1,n.setAttribute("data-mce-mentions-id",t.id),c[t.id]=t,o.selection.setRng(e.rng),o.insertContent(n.outerHTML))},i.hover),y=function(){d.isVisible()&&i.cancel(),d.hide()},n=function(){if(!o.removed){var t,n=f();(t=n)&&1<=t.text.length?d.showAt(n):y()}},v=function(t,n){t.preventDefault(),n()},p=function(t){if(d.isVisible()&&!tinymce.util.VK.modifierPressed(t))switch(t.keyCode){case 27:v(t,y);break;case tinymce.util.VK.UP:v(t,d.selectPrev);break;case tinymce.util.VK.DOWN:v(t,d.selectNext);break;case tinymce.util.VK.ENTER:case tinymce.util.VK.TAB:v(t,d.complete)}else y()},h=function(t){t.keyCode===tinymce.util.VK.BACKSPACE&&n(),t.keyCode!==tinymce.util.VK.LEFT&&t.keyCode!==tinymce.util.VK.RIGHT||y()},g=function(t){var n=t.element;T(o,n)&&!1===o.selection.isCollapsed()?i.select(n,function(t){m(),e=t,document.body.appendChild(t),V(o,t,n,["bl-tl","tl-bl","tl-br","bl-tr"])}):m()},E(o),o.on("keypress",O(n,100)),o.on("keydown",p),o.on("keyup",h),o.on("nodechange",g),o.on("remove",m),{getUsers:function(){var n=[],e=tinymce.util.Tools.map(o.dom.select("["+s+"]"),function(t){return t.getAttribute(s)});return tinymce.util.Tools.each(c,function(t){-1!==tinymce.util.Tools.inArray(e,t.id)&&n.push(t)}),n}}):(M(Array.from)&&Array.from,l=R((u=t).settings),a={},r="data-mce-mentions-id",u.ui.registry.addAutocompleter("mentions",{type:"autocompleter",ch:"@",onAction:function(t,n,e,r){var o,i,c;o=r,i=n,c=l.complete(u,o),C(u,c)||(c.contentEditable=!1,c.setAttribute("data-mce-mentions-id",o.id),a[o.id]=o,u.selection.setRng(i),u.insertContent(c.outerHTML)),t.hide()},fetch:function(n,t){return new Promise(function(e){var t,r;t=n,r=function(t){var n=function(t,n){for(var e=t.length,r=new Array(e),o=0;o<e;o++){var i=t[o];r[o]=n(i,o,t)}return r}(t,function(t){return{value:t.id,text:t.name,meta:t}});e(n)},l.fetch({term:t},function(t){tinymce.util.Tools.each(t,A);var n=t.slice(0,10);r(tinymce.util.Tools.grep(n,x))})})},columns:1}),E(u),{getUsers:function(){var n=[],e=tinymce.util.Tools.map(u.dom.select("["+r+"]"),function(t){return t.getAttribute(r)});return tinymce.util.Tools.each(a,function(t){-1!==tinymce.util.Tools.inArray(e,t.id)&&n.push(t)}),n}});var u,l,a,r,o,e,i,c,s,f,m,d,y,n,v,p,h,g})}();