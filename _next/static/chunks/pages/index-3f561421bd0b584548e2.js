(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9917:function(e,A,t){"use strict";var a=t(3038),i=t(319),n=t(5318);A.default=function(e){var A=e.src,t=e.sizes,i=e.unoptimized,n=void 0!==i&&i,d=e.priority,g=void 0!==d&&d,m=e.loading,p=e.className,h=e.quality,x=e.width,v=e.height,E=e.objectFit,y=e.objectPosition,j=e.loader,B=void 0===j?C:j,I=e.placeholder,Q=void 0===I?"empty":I,k=e.blurDataURL,S=(0,o.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader","placeholder","blurDataURL"]),D=t?"responsive":"intrinsic";"layout"in S&&(S.layout&&(D=S.layout),delete S.layout);var U="";if(function(e){return"object"===typeof e&&(f(e)||function(e){return void 0!==e.src}(e))}(A)){var z=f(A)?A.default:A;if(!z.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(z)));if(k=k||z.blurDataURL,U=z.src,(!D||"fill"!==D)&&(v=v||z.height,x=x||z.width,!z.height||!z.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(z)))}A="string"===typeof A?A:U;var N=w(x),M=w(v),F=w(h);0;var L=!g&&("lazy"===m||"undefined"===typeof m);A&&A.startsWith("data:")&&(n=!0,L=!1);var R,P,_,T=(0,u.useIntersection)({rootMargin:"200px",disabled:!L}),G=a(T,2),H=G[0],K=G[1],O=!L||K,Y=(0,r.default)({position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:E,objectPosition:y},"blur"===Q?{filter:"blur(20px)",backgroundSize:"cover",backgroundImage:'url("'.concat(k,'")')}:void 0);if("undefined"!==typeof N&&"undefined"!==typeof M&&"fill"!==D){var W=M/N,V=isNaN(W)?"100%":"".concat(100*W,"%");"responsive"===D?(R={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},P={display:"block",boxSizing:"border-box",paddingTop:V}):"intrinsic"===D?(R={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},P={boxSizing:"border-box",display:"block",maxWidth:"100%"},_='<svg width="'.concat(N,'" height="').concat(M,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===D&&(R={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:N,height:M})}else"undefined"===typeof N&&"undefined"===typeof M&&"fill"===D&&(R={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var q={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};O&&(q=b({src:A,unoptimized:n,layout:D,width:N,quality:F,sizes:t,loader:B}));return s.default.createElement("div",{style:R},P?s.default.createElement("div",{style:P},_?s.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,l.toBase64)(_))}):null):null,!O&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},S,b({src:A,unoptimized:n,layout:D,width:N,quality:F,sizes:t,loader:B}),{src:A,decoding:"async",sizes:t,style:Y,className:p}))),s.default.createElement("img",Object.assign({},S,q,{decoding:"async",className:p,ref:function(e){H(e),function(e,A){if("blur"===A&&e){var t=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"}))};e.complete?t():e.onload=t}}(e,Q)},style:Y})),g?s.default.createElement(c.default,null,s.default.createElement("link",{key:"__nimg-"+q.src+q.srcSet+q.sizes,rel:"preload",as:"image",href:q.srcSet?void 0:q.src,imagesrcset:q.srcSet,imagesizes:q.sizes})):null)};var o=n(t(7316)),r=n(t(7154)),s=n(t(7294)),c=n(t(2775)),l=t(8814),d=t(5655),u=t(7426);var g=new Map([["imgix",function(e){var A=e.root,t=e.src,a=e.width,i=e.quality,n=["auto=format","fit=max","w="+a],o="";i&&n.push("q="+i);n.length&&(o="?"+n.join("&"));return"".concat(A).concat(y(t)).concat(o)}],["cloudinary",function(e){var A=e.root,t=e.src,a=e.width,i=e.quality,n=["f_auto","c_limit","w_"+a,"q_"+(i||"auto")].join(",")+"/";return"".concat(A).concat(n).concat(y(t))}],["akamai",function(e){var A=e.root,t=e.src,a=e.width;return"".concat(A).concat(y(t),"?imwidth=").concat(a)}],["default",function(e){var A=e.root,t=e.src,a=e.width,i=e.quality;0;return"".concat(A,"?url=").concat(encodeURIComponent(t),"&w=").concat(a,"&q=").concat(i||75)}]]);function f(e){return void 0!==e.default}var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"imgix"}||d.imageConfigDefault,p=m.deviceSizes,h=m.imageSizes,x=m.loader,v=m.path,E=(m.domains,[].concat(i(p),i(h)));function b(e){var A=e.src,t=e.unoptimized,a=e.layout,n=e.width,o=e.quality,r=e.sizes,s=e.loader;if(t)return{src:A,srcSet:void 0,sizes:void 0};var c=function(e,A,t){if(t&&("fill"===A||"responsive"===A)){for(var a,n=/(^|\s)(1?\d?\d)vw/g,o=[];a=n.exec(t);a)o.push(parseInt(a[2]));if(o.length){var r=.01*Math.min.apply(Math,o);return{widths:E.filter((function(e){return e>=p[0]*r})),kind:"w"}}return{widths:E,kind:"w"}}return"number"!==typeof e||"fill"===A||"responsive"===A?{widths:p,kind:"w"}:{widths:i(new Set([e,2*e].map((function(e){return E.find((function(A){return A>=e}))||E[E.length-1]})))),kind:"x"}}(n,a,r),l=c.widths,d=c.kind,u=l.length-1;return{sizes:r||"w"!==d?r:"100vw",srcSet:l.map((function(e,t){return"".concat(s({src:A,quality:o,width:e})," ").concat("w"===d?e:t+1).concat(d)})).join(", "),src:s({src:A,quality:o,width:l[u]})}}function w(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function C(e){var A=g.get(x);if(A)return A((0,r.default)({root:v},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(x))}function y(e){return"/"===e[0]?e.slice(1):e}p.sort((function(e,A){return e-A})),E.sort((function(e,A){return e-A}))},2167:function(e,A,t){"use strict";var a=t(3038),i=t(862);A.default=void 0;var n=i(t(7294)),o=t(9414),r=t(4651),s=t(7426),c={};function l(e,A,t,a){if(e&&(0,o.isLocalURL)(A)){e.prefetch(A,t,a).catch((function(e){0}));var i=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;c[A+"%"+t+(i?"%"+i:"")]=!0}}var d=function(e){var A,t=!1!==e.prefetch,i=(0,r.useRouter)(),d=n.default.useMemo((function(){var A=(0,o.resolveHref)(i,e.href,!0),t=a(A,2),n=t[0],r=t[1];return{href:n,as:e.as?(0,o.resolveHref)(i,e.as):r||n}}),[i,e.href,e.as]),u=d.href,g=d.as,f=e.children,m=e.replace,p=e.shallow,h=e.scroll,x=e.locale;"string"===typeof f&&(f=n.default.createElement("a",null,f));var v=(A=n.Children.only(f))&&"object"===typeof A&&A.ref,E=(0,s.useIntersection)({rootMargin:"200px"}),b=a(E,2),w=b[0],C=b[1],y=n.default.useCallback((function(e){w(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,w]);(0,n.useEffect)((function(){var e=C&&t&&(0,o.isLocalURL)(u),A="undefined"!==typeof x?x:i&&i.locale,a=c[u+"%"+g+(A?"%"+A:"")];e&&!a&&l(i,u,g,{locale:A})}),[g,u,C,x,t,i]);var j={ref:y,onClick:function(e){A.props&&"function"===typeof A.props.onClick&&A.props.onClick(e),e.defaultPrevented||function(e,A,t,a,i,n,r,s){("A"!==e.currentTarget.nodeName||!function(e){var A=e.currentTarget.target;return A&&"_self"!==A||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(t))&&(e.preventDefault(),null==r&&a.indexOf("#")>=0&&(r=!1),A[i?"replace":"push"](t,a,{shallow:n,locale:s,scroll:r}))}(e,i,u,g,m,p,h,x)},onMouseEnter:function(e){(0,o.isLocalURL)(u)&&(A.props&&"function"===typeof A.props.onMouseEnter&&A.props.onMouseEnter(e),l(i,u,g,{priority:!0}))}};if(e.passHref||"a"===A.type&&!("href"in A.props)){var B="undefined"!==typeof x?x:i&&i.locale,I=i&&i.isLocaleDomain&&(0,o.getDomainLocale)(g,B,i&&i.locales,i&&i.domainLocales);j.href=I||(0,o.addBasePath)((0,o.addLocale)(g,B,i&&i.defaultLocale))}return n.default.cloneElement(A,j)};A.default=d},7426:function(e,A,t){"use strict";var a=t(3038);A.__esModule=!0,A.useIntersection=function(e){var A=e.rootMargin,t=e.disabled||!o,s=(0,i.useRef)(),c=(0,i.useState)(!1),l=a(c,2),d=l[0],u=l[1],g=(0,i.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),t||d||e&&e.tagName&&(s.current=function(e,A,t){var a=function(e){var A=e.rootMargin||"",t=r.get(A);if(t)return t;var a=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var A=a.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;A&&t&&A(t)}))}),e);return r.set(A,t={id:A,observer:i,elements:a}),t}(t),i=a.id,n=a.observer,o=a.elements;return o.set(e,A),n.observe(e),function(){o.delete(e),n.unobserve(e),0===o.size&&(n.disconnect(),r.delete(i))}}(e,(function(e){return e&&u(e)}),{rootMargin:A}))}),[t,A,d]);return(0,i.useEffect)((function(){if(!o&&!d){var e=(0,n.requestIdleCallback)((function(){return u(!0)}));return function(){return(0,n.cancelIdleCallback)(e)}}}),[d]),[g,d]};var i=t(7294),n=t(3447),o="undefined"!==typeof IntersectionObserver;var r=new Map},8814:function(e,A){"use strict";A.__esModule=!0,A.toBase64=function(e){return window.btoa(e)}},8789:function(e,A,t){"use strict";t.r(A),t.d(A,{default:function(){return v}});var a=t(5893),i=t(7294),n=t(2007),o=t(1664);function r(e){var A=e.condition,t=e.changeCondition,i=e.offIcon,n=e.onIcon;return(0,a.jsxs)("label",{htmlFor:"toggleTheme",className:"fixed top-8 right-4 w-[50px] h-[24px] rounded-3xl flex cursor-pointer bg-[#191919] dark:bg-gray-700 z-50",children:[(0,a.jsx)("input",{type:"checkbox",className:"hidden",name:"toggleTheme",id:"toggleTheme",onChange:t,checked:A}),(0,a.jsx)("span",{className:"w-1/2 text-base text-center pointer-events-none",dangerouslySetInnerHTML:{__html:i}}),(0,a.jsx)("span",{className:"w-1/2 text-base text-center pointer-events-none",dangerouslySetInnerHTML:{__html:n}}),(0,a.jsx)("span",{className:"absolute top-[1px] left-[1px] w-[22px] h-[22px] rounded-full bg-white transform transition-transform ".concat(A?"translate-x-6":"translate-x-0")})]})}var s=t(5675),c=t(1903),l=t.n(c);function d(e){var A=e.link,t=e.image,i=e.title,n=e.content;return(0,a.jsx)("a",{href:A,className:"".concat(l().card," dark:hover:text-white dark:border-white"),target:"_blank",children:(0,a.jsxs)("div",{className:"grid grid-flow-col grid-cols-1 grid-rows-2min md:grid-flow-row md:grid-rows-1 md:grid-cols-3 h-full",children:[(0,a.jsx)("div",{className:"".concat(l().imageWrapper," lg:order-2"),children:(0,a.jsx)("div",{className:"aspect-w-16 aspect-h-9",children:(0,a.jsx)(s.default,{src:t,alt:"Imagem do ".concat(i),className:"rounded-t-md md:rounded-none md:rounded-l-md lg:rounded-r-md",objectFit:"cover",layout:"fill"})})}),(0,a.jsxs)("div",{className:"p-5 pb-12 md:pb-5 md:col-span-2",children:[(0,a.jsxs)("div",{className:"flex items-center mb-4 space-x-2",children:[(0,a.jsx)("h3",{children:i}),(0,a.jsx)("span",{children:"\u2192"})]}),(0,a.jsx)("p",{className:"text-lg md:text-sm",children:n})]})]})})}function u(){var e=(0,i.useContext)(n.Z).darkTheme;return(0,a.jsx)("footer",{className:"p-1 border-t border-white w-full",children:(0,a.jsx)("a",{href:"https://github.com/t4zo",target:"_blank",rel:"noopener noreferrer",className:"flex justify-center items-center",children:(0,a.jsx)("img",{src:"/assets/images/".concat(e?"github_white":"github",".png"),alt:"Github Repository",className:"h-6"})})})}var g={src:"/_next/static/image/public/assets/images/saca.e020f1b9e5dc2c1023f8ea06cfabc9ef.jpg",height:426,width:640,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAF/9oACAEBAAAAAB//xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAECEAAAAB//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAG//xAAcEAABBAMBAAAAAAAAAAAAAAACAQMEEQAFEjH/2gAIAQEAAT8A1QjJR+BXItQVfUverz//xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIxQf/aAAgBAgEBPwC6jvJ//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k="},f={src:"/_next/static/image/public/assets/images/saed.6c0b6c3e396cbbe7ef354e09775533d5.jpg",height:426,width:640,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAD/9oACAEBAAAAAF//xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECEAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDEAAAAH//xAAbEAACAQUAAAAAAAAAAAAAAAABAgMABBYxQv/aAAgBAQABPwDHg6SBL+dFOuiK/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERUf/aAAgBAgEBPwCLD//EABcRAAMBAAAAAAAAAAAAAAAAAAABElH/2gAIAQMBAT8Ap6f/2Q=="},m={src:"/_next/static/image/public/assets/images/netflix.1b7ec3c911bc42c88a3816e031b663f4.jpg",height:426,width:640,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAH/9oACAEBAAAAADz/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAECEAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAF//xAAcEAACAgIDAAAAAAAAAAAAAAABAwISAAQRIUH/2gAIAQEAAT8AauRTqtLSbFh4Ij0Vyr4M/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERUf/aAAgBAgEBPwCLD//EABgRAQEAAwAAAAAAAAAAAAAAAAECABIh/9oACAEDAQE/ANqetK5//9k="},p={src:"/_next/static/image/public/assets/images/pgp.8905c25385cfd831f0098868a9222223.png",height:635,width:1091,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAnElEQVR4nA3IMQ6CMBQG4P9ZBBJ0YNIzuLFqnI0DF9XExSs4OrBoYqIeoIOBWtHCa58k3/SRNU1Q45hUnIL1A/p0wbzconOt9OyJTFNLnGSI3A2mOqNvBflqDSczuN8HZK0JSTal8H6KvdcAXpgsCpIoF9dakNFaFHtgELhD6BniPVSkgCwB6f0hfHdH4mUBdAxKh1QjqOoqabmhP/7NTmRBfO9cAAAAAElFTkSuQmCC"},h={src:"/_next/static/image/public/assets/images/osfederas.6f69b98f51057def701e276bd7f4dd0a.png",height:626,width:1252,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAfklEQVR4nGNkYGD4HxwS/H/hgoWM3Nzc/4F8sBgQg2gw8S85JYUhLjyc4fnjlwwcfNwMH758Yfjy+T2DgoIcWMH/vLy8/6pyyoy5Jfn/Q3wTGG2Muf9ffvmL4SWjBCNYQWJi4v+stAzGBw/u/xcWFWfkYPv/n51HiOHTN0ZGAE2hK5uVW4vFAAAAAElFTkSuQmCC"},x={src:"/_next/static/image/public/assets/images/covid19.b20826a4a4f8879c65808bdbb1ccd774.jpg",height:426,width:640,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAG/9oACAEBAAAAAHn/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAECEAAAAF//xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDEAAAAD//xAAcEAABAwUAAAAAAAAAAAAAAAADAAECESEiUbH/2gAIAQEAAT8AiIdy0yfml//EABcRAAMBAAAAAAAAAAAAAAAAAAABAlL/2gAIAQIBAT8AUzlH/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERUf/aAAgBAwEBPwCvT//Z"};function v(){var e=(0,i.useContext)(n.Z),A=e.darkTheme,t=e.toggleTheme;return(0,a.jsxs)("div",{className:"m-auto min-h-screen flex flex-col justify-center items-center bg-white dark:bg-[#191919] text-black dark:text-gray-300",children:[(0,a.jsxs)("main",{className:"px-10 py-20 m-auto flex flex-col flex-1 justify-center items-center",children:[(0,a.jsx)(r,{condition:A,changeCondition:t,offIcon:"&#x2600;&#xFE0F;",onIcon:"&#127769;"}),(0,a.jsxs)("h1",{className:"text-center m-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight",children:[(0,a.jsxs)("span",{className:"hover:text-primary-600 hover:cursor-pointer dark:text-gray-200 dark:hover:text-primary-600",children:[(0,a.jsx)("span",{className:"text-primary-600",children:"T"}),"\xe1cio de ",(0,a.jsx)("span",{className:"text-primary-600",children:"S"}),"ouza ",(0,a.jsx)("span",{className:"text-primary-600",children:"C"}),"ampos"]}),(0,a.jsx)("span",{children:" | "}),(0,a.jsx)(o.default,{href:"/contact",children:(0,a.jsx)("a",{className:"text-primary-600 no-underline hover:underline focus:underline",children:"Contato"})})]}),(0,a.jsxs)("div",{className:"grid gap-5 grid-cols-1 lg:grid-cols-2 w-full mt-12 lg:max-w-6xl",children:[(0,a.jsx)(d,{link:"https://play.google.com/store/apps/details?id=xyz.saca",image:g,title:"SACA",content:"Aplicativo m\xf3vel voltado para ajudar crian\xe7as com problemas de comunica\xe7\xe3o"}),(0,a.jsx)(d,{link:"http://159.89.244.218",image:f,title:"SAED",content:"Sistema de avalia\xe7\xe3o de desempenho escolar atrav\xe9s da resolu\xe7\xe3o de quest\xf5es elobaradas pelos professores"}),(0,a.jsx)(d,{link:"https://pgpjuazeiroba.com.br",image:p,title:"PGP",content:"Programa de Governo Participativo, um portal feito em 2020 para o ent\xe3o candidato a prefeito de Juazeiro, Paulo Bomfim no per\xedodo eleitoral"}),(0,a.jsx)(d,{link:"https://netflix-9zvv4lgoy-tacio.vercel.app",image:m,title:"Netflix",content:"Projeto pessoal realizando um clone com a possibilidade de cria\xe7\xe3o de contas e atualiza\xe7\xe3o peri\xf3dica do cat\xe1logo de S\xe9ries e Filmes"}),(0,a.jsx)(d,{link:"https://covid19-tracker-azure.vercel.app",image:x,title:"Covid19",content:"Sistema para rastreamento de casos e mortes confirmadas da Covid19 por pa\xeds ou globalmente"}),(0,a.jsx)(d,{link:"https://osfedera.netlify.app",image:h,title:"Os Federa",content:"Projeto para o professor, afim de atualizar seu site pessoal"})]})]}),(0,a.jsx)(u,{})]})}},5301:function(e,A,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8789)}])},1903:function(e){e.exports={card:"card_card__3bMT5",imageWrapper:"card_imageWrapper__2G3Pu"}},5655:function(e,A){"use strict";A.__esModule=!0,A.imageConfigDefault=A.VALID_LOADERS=void 0;A.VALID_LOADERS=["default","imgix","cloudinary","akamai"];A.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1}},5675:function(e,A,t){e.exports=t(9917)},1664:function(e,A,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return A=5301,e(e.s=A);var A}));var A=e.O();_N_E=A}]);