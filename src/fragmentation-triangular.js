!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(t="undefined"!=typeof globalThis?globalThis:t||self).Delaunator=i()}(this,(function(){"use strict";const t=134217729;function i(t,i,s,e,n){let h,r,l,o,a=i[0],f=e[0],c=0,u=0;f>a==f>-a?(h=a,a=i[++c]):(h=f,f=e[++u]);let _=0;if(c<t&&u<s)for(f>a==f>-a?(r=a+h,l=h-(r-a),a=i[++c]):(r=f+h,l=h-(r-f),f=e[++u]),h=r,0!==l&&(n[_++]=l);c<t&&u<s;)f>a==f>-a?(r=h+a,o=r-h,l=h-(r-o)+(a-o),a=i[++c]):(r=h+f,o=r-h,l=h-(r-o)+(f-o),f=e[++u]),h=r,0!==l&&(n[_++]=l);for(;c<t;)r=h+a,o=r-h,l=h-(r-o)+(a-o),a=i[++c],h=r,0!==l&&(n[_++]=l);for(;u<s;)r=h+f,o=r-h,l=h-(r-o)+(f-o),f=e[++u],h=r,0!==l&&(n[_++]=l);return 0===h&&0!==_||(n[_++]=h),_}function s(t){return new Float64Array(t)}const e=s(4),n=s(8),h=s(12),r=s(16),l=s(4);function o(s,o,a,f,c,u){const _=(o-u)*(a-c),d=(s-c)*(f-u),g=_-d;if(0===_||0===d||_>0!=d>0)return g;const y=Math.abs(_+d);return Math.abs(g)>=33306690738754716e-32*y?g:-function(s,o,a,f,c,u,_){let d,g,y,w,b,A,k,M,p,x,S,T,z,U,m,K,L,v;const F=s-c,P=a-c,E=o-u,H=f-u;U=F*H,A=t*F,k=A-(A-F),M=F-k,A=t*H,p=A-(A-H),x=H-p,m=M*x-(U-k*p-M*p-k*x),K=E*P,A=t*E,k=A-(A-E),M=E-k,A=t*P,p=A-(A-P),x=P-p,L=M*x-(K-k*p-M*p-k*x),S=m-L,b=m-S,e[0]=m-(S+b)+(b-L),T=U+S,b=T-U,z=U-(T-b)+(S-b),S=z-K,b=z-S,e[1]=z-(S+b)+(b-K),v=T+S,b=v-T,e[2]=T-(v-b)+(S-b),e[3]=v;let I=function(t,i){let s=i[0];for(let e=1;e<t;e++)s+=i[e];return s}(4,e),N=22204460492503146e-32*_;if(I>=N||-I>=N)return I;if(b=s-F,d=s-(F+b)+(b-c),b=a-P,y=a-(P+b)+(b-c),b=o-E,g=o-(E+b)+(b-u),b=f-H,w=f-(H+b)+(b-u),0===d&&0===g&&0===y&&0===w)return I;if(N=11093356479670487e-47*_+33306690738754706e-32*Math.abs(I),I+=F*w+H*d-(E*y+P*g),I>=N||-I>=N)return I;U=d*H,A=t*d,k=A-(A-d),M=d-k,A=t*H,p=A-(A-H),x=H-p,m=M*x-(U-k*p-M*p-k*x),K=g*P,A=t*g,k=A-(A-g),M=g-k,A=t*P,p=A-(A-P),x=P-p,L=M*x-(K-k*p-M*p-k*x),S=m-L,b=m-S,l[0]=m-(S+b)+(b-L),T=U+S,b=T-U,z=U-(T-b)+(S-b),S=z-K,b=z-S,l[1]=z-(S+b)+(b-K),v=T+S,b=v-T,l[2]=T-(v-b)+(S-b),l[3]=v;const j=i(4,e,4,l,n);U=F*w,A=t*F,k=A-(A-F),M=F-k,A=t*w,p=A-(A-w),x=w-p,m=M*x-(U-k*p-M*p-k*x),K=E*y,A=t*E,k=A-(A-E),M=E-k,A=t*y,p=A-(A-y),x=y-p,L=M*x-(K-k*p-M*p-k*x),S=m-L,b=m-S,l[0]=m-(S+b)+(b-L),T=U+S,b=T-U,z=U-(T-b)+(S-b),S=z-K,b=z-S,l[1]=z-(S+b)+(b-K),v=T+S,b=v-T,l[2]=T-(v-b)+(S-b),l[3]=v;const q=i(j,n,4,l,h);U=d*w,A=t*d,k=A-(A-d),M=d-k,A=t*w,p=A-(A-w),x=w-p,m=M*x-(U-k*p-M*p-k*x),K=g*y,A=t*g,k=A-(A-g),M=g-k,A=t*y,p=A-(A-y),x=y-p,L=M*x-(K-k*p-M*p-k*x),S=m-L,b=m-S,l[0]=m-(S+b)+(b-L),T=U+S,b=T-U,z=U-(T-b)+(S-b),S=z-K,b=z-S,l[1]=z-(S+b)+(b-K),v=T+S,b=v-T,l[2]=T-(v-b)+(S-b),l[3]=v;const D=i(q,h,4,l,r);return r[D-1]}(s,o,a,f,c,u,y)}const a=Math.pow(2,-52),f=new Uint32Array(512);class c{static from(t,i=w,s=b){const e=t.length,n=new Float64Array(2*e);for(let h=0;h<e;h++){const e=t[h];n[2*h]=i(e),n[2*h+1]=s(e)}return new c(n)}constructor(t){const i=t.length>>1;if(i>0&&"number"!=typeof t[0])throw new Error("Expected coords to contain numbers.");this.coords=t;const s=Math.max(2*i-5,0);this._triangles=new Uint32Array(3*s),this._halfedges=new Int32Array(3*s),this._hashSize=Math.ceil(Math.sqrt(i)),this._hullPrev=new Uint32Array(i),this._hullNext=new Uint32Array(i),this._hullTri=new Uint32Array(i),this._hullHash=new Int32Array(this._hashSize).fill(-1),this._ids=new Uint32Array(i),this._dists=new Float64Array(i),this.update()}update(){const{coords:t,_hullPrev:i,_hullNext:s,_hullTri:e,_hullHash:n}=this,h=t.length>>1;let r=1/0,l=1/0,f=-1/0,c=-1/0;for(let i=0;i<h;i++){const s=t[2*i],e=t[2*i+1];s<r&&(r=s),e<l&&(l=e),s>f&&(f=s),e>c&&(c=e),this._ids[i]=i}const _=(r+f)/2,y=(l+c)/2;let w,b,A,k=1/0;for(let i=0;i<h;i++){const s=u(_,y,t[2*i],t[2*i+1]);s<k&&(w=i,k=s)}const M=t[2*w],p=t[2*w+1];k=1/0;for(let i=0;i<h;i++){if(i===w)continue;const s=u(M,p,t[2*i],t[2*i+1]);s<k&&s>0&&(b=i,k=s)}let x=t[2*b],S=t[2*b+1],T=1/0;for(let i=0;i<h;i++){if(i===w||i===b)continue;const s=d(M,p,x,S,t[2*i],t[2*i+1]);s<T&&(A=i,T=s)}let z=t[2*A],U=t[2*A+1];if(T===1/0){for(let i=0;i<h;i++)this._dists[i]=t[2*i]-t[0]||t[2*i+1]-t[1];g(this._ids,this._dists,0,h-1);const i=new Uint32Array(h);let s=0;for(let t=0,e=-1/0;t<h;t++){const n=this._ids[t];this._dists[n]>e&&(i[s++]=n,e=this._dists[n])}return this.hull=i.subarray(0,s),this.triangles=new Uint32Array(0),void(this.halfedges=new Uint32Array(0))}if(o(M,p,x,S,z,U)<0){const t=b,i=x,s=S;b=A,x=z,S=U,A=t,z=i,U=s}const m=function(t,i,s,e,n,h){const r=s-t,l=e-i,o=n-t,a=h-i,f=r*r+l*l,c=o*o+a*a,u=.5/(r*a-l*o);return{x:t+(a*f-l*c)*u,y:i+(r*c-o*f)*u}}(M,p,x,S,z,U);this._cx=m.x,this._cy=m.y;for(let i=0;i<h;i++)this._dists[i]=u(t[2*i],t[2*i+1],m.x,m.y);g(this._ids,this._dists,0,h-1),this._hullStart=w;let K=3;s[w]=i[A]=b,s[b]=i[w]=A,s[A]=i[b]=w,e[w]=0,e[b]=1,e[A]=2,n.fill(-1),n[this._hashKey(M,p)]=w,n[this._hashKey(x,S)]=b,n[this._hashKey(z,U)]=A,this.trianglesLen=0,this._addTriangle(w,b,A,-1,-1,-1);for(let h,r,l=0;l<this._ids.length;l++){const f=this._ids[l],c=t[2*f],u=t[2*f+1];if(l>0&&Math.abs(c-h)<=a&&Math.abs(u-r)<=a)continue;if(h=c,r=u,f===w||f===b||f===A)continue;let _=0;for(let t=0,i=this._hashKey(c,u);t<this._hashSize&&(_=n[(i+t)%this._hashSize],-1===_||_===s[_]);t++);_=i[_];let d,g=_;for(;d=s[g],o(c,u,t[2*g],t[2*g+1],t[2*d],t[2*d+1])>=0;)if(g=d,g===_){g=-1;break}if(-1===g)continue;let y=this._addTriangle(g,f,s[g],-1,-1,e[g]);e[f]=this._legalize(y+2),e[g]=y,K++;let k=s[g];for(;d=s[k],o(c,u,t[2*k],t[2*k+1],t[2*d],t[2*d+1])<0;)y=this._addTriangle(k,f,d,e[f],-1,e[k]),e[f]=this._legalize(y+2),s[k]=k,K--,k=d;if(g===_)for(;d=i[g],o(c,u,t[2*d],t[2*d+1],t[2*g],t[2*g+1])<0;)y=this._addTriangle(d,f,g,-1,e[g],e[d]),this._legalize(y+2),e[d]=y,s[g]=g,K--,g=d;this._hullStart=i[f]=g,s[g]=i[k]=f,s[f]=k,n[this._hashKey(c,u)]=f,n[this._hashKey(t[2*g],t[2*g+1])]=g}this.hull=new Uint32Array(K);for(let t=0,i=this._hullStart;t<K;t++)this.hull[t]=i,i=s[i];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(t,i){return Math.floor(function(t,i){const s=t/(Math.abs(t)+Math.abs(i));return(i>0?3-s:1+s)/4}(t-this._cx,i-this._cy)*this._hashSize)%this._hashSize}_legalize(t){const{_triangles:i,_halfedges:s,coords:e}=this;let n=0,h=0;for(;;){const r=s[t],l=t-t%3;if(h=l+(t+2)%3,-1===r){if(0===n)break;t=f[--n];continue}const o=r-r%3,a=l+(t+1)%3,c=o+(r+2)%3,u=i[h],d=i[t],g=i[a],y=i[c];if(_(e[2*u],e[2*u+1],e[2*d],e[2*d+1],e[2*g],e[2*g+1],e[2*y],e[2*y+1])){i[t]=y,i[r]=u;const e=s[c];if(-1===e){let i=this._hullStart;do{if(this._hullTri[i]===c){this._hullTri[i]=t;break}i=this._hullPrev[i]}while(i!==this._hullStart)}this._link(t,e),this._link(r,s[h]),this._link(h,c);const l=o+(r+1)%3;n<f.length&&(f[n++]=l)}else{if(0===n)break;t=f[--n]}}return h}_link(t,i){this._halfedges[t]=i,-1!==i&&(this._halfedges[i]=t)}_addTriangle(t,i,s,e,n,h){const r=this.trianglesLen;return this._triangles[r]=t,this._triangles[r+1]=i,this._triangles[r+2]=s,this._link(r,e),this._link(r+1,n),this._link(r+2,h),this.trianglesLen+=3,r}}function u(t,i,s,e){const n=t-s,h=i-e;return n*n+h*h}function _(t,i,s,e,n,h,r,l){const o=t-r,a=i-l,f=s-r,c=e-l,u=n-r,_=h-l,d=f*f+c*c,g=u*u+_*_;return o*(c*g-d*_)-a*(f*g-d*u)+(o*o+a*a)*(f*_-c*u)<0}function d(t,i,s,e,n,h){const r=s-t,l=e-i,o=n-t,a=h-i,f=r*r+l*l,c=o*o+a*a,u=.5/(r*a-l*o),_=(a*f-l*c)*u,d=(r*c-o*f)*u;return _*_+d*d}function g(t,i,s,e){if(e-s<=20)for(let n=s+1;n<=e;n++){const e=t[n],h=i[e];let r=n-1;for(;r>=s&&i[t[r]]>h;)t[r+1]=t[r--];t[r+1]=e}else{let n=s+1,h=e;y(t,s+e>>1,n),i[t[s]]>i[t[e]]&&y(t,s,e),i[t[n]]>i[t[e]]&&y(t,n,e),i[t[s]]>i[t[n]]&&y(t,s,n);const r=t[n],l=i[r];for(;;){do{n++}while(i[t[n]]<l);do{h--}while(i[t[h]]>l);if(h<n)break;y(t,n,h)}t[s+1]=t[h],t[h]=r,e-n+1>=h-s?(g(t,i,n,e),g(t,i,s,h-1)):(g(t,i,s,h-1),g(t,i,n,e))}}function y(t,i,s){const e=t[i];t[i]=t[s],t[s]=e}function w(t){return t[0]}function b(t){return t[1]}return c})); 

registerPaint('fragmentation-triangular', class  {

  static get inputProperties() {
    return [
      '--f-n',
      '--f-o',
      '--f-seed'
    ]
  }
  paint(ctx, size, properties) {
    const n = properties.get('--f-n');
    const o = properties.get('--f-o');
    const w = size.width;
    const h = size.height;
    const l = 7; 
   
    /* seeded random */
    const mask = 0xffffffff;
    const seed = properties.get('--f-seed');
    let m_w  = (123456789 + seed) & mask;
    let m_z  = (987654321 - seed) & mask;
    let random =  function() {
      m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
      m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;

      var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
      result /= 4294967296;
      return result;
    }
    /**/
    var dots = [[0,0],[0,w],[h,0],[w,h]];
    for (var i = 0; i < n; i++) {
        dots.push([random() * w, random() * h]);
    }
    var delaunay = Delaunator.from(dots);
    var triangles = delaunay.triangles;
    for (var i = 0; i < triangles.length; i += 3) {
      ctx.beginPath();
      ctx.moveTo(dots[triangles[i]][0], dots[triangles[i]][1]);
      ctx.lineTo(dots[triangles[i + 1]][0], dots[triangles[i + 1]][1]);
      ctx.lineTo(dots[triangles[i + 2]][0], dots[triangles[i + 2]][1]);
      
      ctx.closePath();
      var alpha = (random()*(l-1) + 1) - (1-o)*l;
      ctx.fillStyle = 'rgba(0,0,0,'+alpha+')';
      ctx.strokeStyle = 'rgba(0,0,0,'+alpha+')';
      ctx.stroke();
      ctx.fill();
    }
  }
})
