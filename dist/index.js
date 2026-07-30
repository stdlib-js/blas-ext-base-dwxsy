"use strict";var y=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(o){throw (r=0, o)}};};var j=y(function(I,R){
var s=5;function h(e,r,o,p,v,f,q,a,m,g){var i,u,n,c,t;if(e<=0)return a;if(i=p,u=q,n=g,o===1&&f===1&&m===1){if(c=e%s,c>0)for(t=0;t<c;t++)a[n]=r[i]-v[u],i+=o,u+=f,n+=m;if(e<s)return a;for(t=c;t<e;t+=s)a[n]=r[i]-v[u],a[n+1]=r[i+1]-v[u+1],a[n+2]=r[i+2]-v[u+2],a[n+3]=r[i+3]-v[u+3],a[n+4]=r[i+4]-v[u+4],i+=s,u+=s,n+=s;return a}for(t=0;t<e;t++)a[n]=r[i]-v[u],i+=o,u+=f,n+=m;return a}R.exports=h
});var d=y(function(J,_){
var x=require('@stdlib/strided-base-stride2offset/dist'),k=j();function z(e,r,o,p,v,f,q){return k(e,r,o,x(e,o),p,v,x(e,v),f,q,x(e,q))}_.exports=z
});var O=y(function(K,M){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=d(),B=j();A(E,"ndarray",B);M.exports=E
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=O(),l,b=D(C(__dirname,"./native.js"));F(b)?l=G:l=b;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
