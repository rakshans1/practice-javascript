!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){},function(e,t,r){"use strict";r.r(t);const n=(e,t)=>{const[r,n]=[t.matrix,t.pos];for(let t=0;t<r.length;++t)for(let o=0;o<r[t].length;++o)if(0!==r[t][o]&&0!==(e[t+n.y]&&e[t+n.y][o+n.x]))return!0;return!1},o=(e,t)=>{for(let t=0;t<e.length;++t)for(let r=0;r<t;++r)[e[r][t],e[t][r]]=[e[t][r],e[r][t]];t>0?e.forEach(e=>e.reverse()):e.reverse()},l=["black","yellow","gray","magenta","blue","green","red","cyan"],c=((e,t)=>{const r=[];for(;t--;)r.push(new Array(e).fill(0));return r})(12,20),i={pos:{x:0,y:0},matrix:[],score:0},s=()=>{i.matrix=(e=>{switch(e){case"T":return[[0,0,0],[1,1,1],[0,1,0]];case"O":return[[2,2],[2,2]];case"L":return[[0,3,0],[0,3,0],[0,3,3]];case"J":return[[0,4,0],[0,4,0],[4,4,0]];case"S":return[[0,5,5],[5,5,0],[0,0,0]];case"Z":return[[6,6,0],[0,6,6],[0,0,0]];default:return[[0,7,0,0],[0,7,0,0],[0,7,0,0],[0,7,0,0]]}})("ILJOSTZ"["ILJOSTZ".length*Math.random()|0]),i.pos.y=0,i.pos.x=(c[0].length/2|0)-(i.matrix[0].length/2|0),n(c,i)&&(c.forEach(e=>e.fill(0)),i.score=0,h())},u=(e,t,r)=>{t.forEach((t,n)=>{t.forEach((t,o)=>{t&&(e.fillStyle=l[t],e.fillRect(o+r.x,n+r.y,1,1))})})};let f=0,a=0;const d=(e,t)=>(r=0)=>{const n=r-f;f=r,(a+=n)>1e3&&p(),((e,t)=>{e.fillStyle="#000",e.fillRect(0,0,t.width,t.height),u(e,c,{x:0,y:0}),u(e,i.matrix,i.pos)})(e,t),requestAnimationFrame(d(e,t))},p=()=>{i.pos.y++,n(c,i)&&(i.pos.y--,((e,t)=>{t.matrix.forEach((r,n)=>{r.forEach((r,o)=>{r&&(e[n+t.pos.y][o+t.pos.x]=r)})})})(c,i),s(),(()=>{let e=1;e:for(let t=c.length-1;t>0;--t){for(let e=0;e<c[t].length;++e)if(0===c[t][e])continue e;const r=c.splice(t,1)[0].fill(0);c.unshift(r),++t,i.score+=10*e,e*=2}})(),h()),a=0},y=e=>{i.pos.x+=e,n(c,i)&&(i.pos.x-=e)},x=e=>{const t=i.pos.x;let r=1;for(o(i.matrix,e);n(c,i);)if(i.pos.x+=r,(r=-(r+(r>0?1:-1)))>i.matrix[0].length)return o(i.matrix,-e),void(i.pos.x=t)},h=()=>{const e=document.getElementById("score");e&&(e.innerText=`Score: ${i.score}`)};(()=>{const e=document.getElementById("tetris"),t=e.getContext("2d");t&&(t.scale(20,20),t.fillStyle="#000",t.fillRect(0,0,e.width,e.height),s(),h(),d(t,e)(),document.addEventListener("keydown",e=>{const{keyCode:t}=e;37===t?y(-1):39===t?y(1):40===t?p():81===t?x(-1):87===t&&x(1)}))})();r(0)}]);