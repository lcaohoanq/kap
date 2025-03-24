import{a3 as S,g as C}from"./index-CZBwRkMB.js";function P(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var a=C,i=P(a);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var s=function(){return s=Object.assign||function(r){for(var n,t=1,o=arguments.length;t<o;t++){n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(r[l]=n[l])}return r},s.apply(this,arguments)};function B(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]]);return n}function N(e,r){r===void 0&&(r={});var n=r.insertAt;if(!(typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var k=`.scroll-to-top {
  background-color: white;
  right: 40px;
  bottom: 40px;
  position: fixed;
  z-index: 2;
  cursor: pointer;
  border-radius: 7px;
  width: 40px;
  height: 40px;
  box-shadow: 0 9px 25px 0 rgba(132, 128, 177, 0.28);
  border: none;
}

.scroll-to-top:active {
  transform: matrix(0.95, 0, 0, 0.95, 0, 0);
}
`;N(k);function z(e){e===void 0&&(e=!1),e?window.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0}var L=function(e){var r=e.top,n=r===void 0?20:r,t=e.className,o=t===void 0?"":t,l=e.color,g=l===void 0?"black":l,d=e.smooth,b=d===void 0?!1:d,p=e.component,y=p===void 0?"":p,u=e.viewBox,x=u===void 0?"0 0 256 256":u,f=e.svgPath,w=f===void 0?"M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z":f,m=e.width,E=m===void 0?"28":m,v=e.height,O=v===void 0?"28":v,T=B(e,["top","className","color","smooth","component","viewBox","svgPath","width","height"]),h=a.useState(!1),_=h[0],j=h[1];return a.useEffect(function(){var c=function(){j(document.documentElement.scrollTop>=n)};return c(),document.addEventListener("scroll",c),function(){return document.removeEventListener("scroll",c)}},[n]),i.createElement(i.Fragment,null,_&&i.createElement("button",s({className:"scroll-to-top "+o,onClick:function(){return z(b)},"aria-label":"Scroll to top"},T),y||i.createElement("svg",{width:E,height:O,fill:g,viewBox:x},i.createElement("path",{d:w}))))},V=L;const D=S(V);export{D as S};
