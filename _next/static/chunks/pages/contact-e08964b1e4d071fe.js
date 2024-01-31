(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{3328:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return r(289)}])},9764:function(e,s,r){"use strict";r.d(s,{Z:function(){return a}});var n=r(5893);function a(e){let{condition:s,changeCondition:r,offIcon:a,onIcon:t}=e;return(0,n.jsxs)("label",{htmlFor:"toggleTheme",className:"fixed top-8 right-4 w-[50px] h-[24px] rounded-3xl flex cursor-pointer bg-[#191919] dark:bg-gray-700 z-50",children:[(0,n.jsx)("input",{type:"checkbox",className:"hidden",name:"toggleTheme",id:"toggleTheme",onChange:r,checked:s}),(0,n.jsx)("span",{className:"w-1/2 text-base text-center pointer-events-none",dangerouslySetInnerHTML:{__html:a}}),(0,n.jsx)("span",{className:"w-1/2 text-base text-center pointer-events-none",dangerouslySetInnerHTML:{__html:t}}),(0,n.jsx)("span",{className:"absolute top-[1px] left-[1px] w-[22px] h-[22px] rounded-full bg-white transform transition-transform ".concat(s?"translate-x-6":"translate-x-0")})]})}},289:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return y}});var n=r(5893),a=r(6312),t=r(594),o=r(9764),l=r(5180),i=r(7294);function m(e){let{message:s,learnMore:r}=e,{tooltip:a,closeTooltip:t}=(0,i.useContext)(l.Z);return(0,n.jsx)(n.Fragment,{children:a.visible&&(0,n.jsx)("div",{className:"bg-primary-600 absolute bottom-0 w-full z-10",children:(0,n.jsx)("div",{className:"mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8",children:(0,n.jsxs)("div",{className:"flex flex-wrap items-center justify-between",children:[(0,n.jsxs)("div",{className:"flex w-0 flex-1 items-center",children:[(0,n.jsx)("span",{className:"flex rounded-lg bg-primary-800 p-2",children:(0,n.jsx)("svg",{className:"h-6 w-6 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"})})}),(0,n.jsxs)("p",{className:"ml-3 truncate font-medium text-white",children:[(0,n.jsx)("span",{className:"md:hidden",children:s||"Enviado com sucesso!"}),(0,n.jsx)("span",{className:"hidden md:inline",children:s||"Enviado com sucesso!"})]})]}),r&&(0,n.jsx)("div",{className:"order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto",children:(0,n.jsx)("a",{href:"#",className:"flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-primary-600 shadow-sm hover:bg-primary-50",children:r})}),(0,n.jsx)("div",{className:"order-2 flex-shrink-0 sm:order-3 sm:ml-3",children:(0,n.jsxs)("button",{type:"button",onClick:t,className:"-mr-1 flex rounded-md p-2 hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2",children:[(0,n.jsx)("span",{className:"sr-only",children:"Dismiss"}),(0,n.jsx)("svg",{className:"h-6 w-6 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})]})})]})})})})}var c=r(7195),d=r(1664),u=r.n(d),x=r(7536),h=r(1604);let p=h.z.object({name:h.z.string().min(3,"Nome deve conter pelo menos 3 caracteres"),email:h.z.string().email("Email inv\xe1lido"),message:h.z.string().min(5,"Mensagem deve conter pelo menos 5 caracteres")});var g=r(4529);let f=(0,g.Ue)(e=>({contact:{name:"",email:"",message:""},name:"",email:"",message:"",setContact:s=>e(e=>({contact:s})),setName:s=>e(e=>({name:s})),setEmail:s=>e(e=>({email:s})),setMessage:s=>e(e=>({message:s}))}));var v=r(3454);function y(){var e,s,r,d,h,g;let{setName:y,setEmail:j,setMessage:b,setContact:w}=f(),{register:N,handleSubmit:k,formState:{errors:_},reset:E}=(0,x.cI)({resolver:(0,a.F)(p)}),{darkTheme:C,toggleTheme:M}=(0,i.useContext)(c.Z),{tooltip:L,openTooltip:T,closeTooltip:z}=(0,i.useContext)(l.Z);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("main",{className:"h-screen flex justify-center items-center flex-col bg-gray-50 dark:bg-[#191919] text-black dark:text-gray-300",children:[(0,n.jsx)(o.Z,{condition:C,changeCondition:M,offIcon:"&#x2600;&#xFE0F;",onIcon:"&#127769;"}),(0,n.jsxs)("div",{className:" px-6 md:px-16 py-12 w-full lg:w-2/3 xl:w-1/3",children:[(0,n.jsx)("h1",{className:"mt-6 text-center text-3xl font-bold tracking-tight text-black dark:text-gray-100 mb-10",children:"Entre em Contato!"}),(0,n.jsxs)("form",{method:"post",onSubmit:k(F),children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"name",className:"sr-only",children:"Nome"}),(0,n.jsx)("input",{id:"name",name:"name",type:"name",...N("name"),required:!0,className:"relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm",placeholder:"Nome"})]}),(null===(e=_.name)||void 0===e?void 0:e.message)&&(0,n.jsx)("p",{children:null===(s=_.name)||void 0===s?void 0:s.message}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"email",className:"sr-only",children:"Email"}),(0,n.jsx)("input",{id:"email",name:"email",type:"email",...N("email"),required:!0,className:"relative block w-full appearance-none rounded-none rounded-b-md border-t-0 focus:border-t border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm",placeholder:"Email"})]}),(null===(r=_.email)||void 0===r?void 0:r.message)&&(0,n.jsx)("p",{children:null===(d=_.email)||void 0===d?void 0:d.message})]}),(0,n.jsxs)("div",{className:"my-8",children:[(0,n.jsx)("label",{htmlFor:"message",className:"sr-only",children:"Mensagem"}),(0,n.jsx)("textarea",{id:"message",name:"message",rows:6,...N("message"),required:!0,className:"relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm",placeholder:"Mensagem"})]}),(null===(h=_.message)||void 0===h?void 0:h.message)&&(0,n.jsx)("p",{children:null===(g=_.message)||void 0===g?void 0:g.message}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)(u(),{href:"/",className:"group relative flex py-2 pl-4 pr-8 text-sm font-medium justify-center rounded-l-md bg-gray-50 border border-transparent hover:border hover:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",children:(0,n.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3",children:(0,n.jsx)("svg",{className:"w-6 h-6 text-primary-500 group-hover:text-primary-700",fill:"currentColor","aria-hidden":"true",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"})})})}),(0,n.jsxs)("button",{type:"submit",className:"group relative flex w-full justify-center rounded-r-md bg-primary-600 py-2 px-4 text-sm font-medium text-gray-100 hover:text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",children:["Enviar",(0,n.jsx)("span",{className:"absolute inset-y-0 right-0 flex items-center pr-3",children:(0,n.jsx)("svg",{className:"w-6 h-6 text-gray-100 group-hover:text-white",fill:"currentColor","aria-hidden":"true",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"})})})]})]})]})]}),(0,n.jsx)(m,{message:L.message})]})});async function F(e){w({name:e.name,email:e.email,message:e.message}),y(e.name),j(e.email),b(e.message);try{await t.Z.post(v.env.NEXT_PUBLIC_BASE_PATH,{name:e.name,email:e.email,message:e.message}),E(),T("Mensagem enviada com sucesso!",5e3)}catch(s){console.error(s),T("Ops, ocorreu um erro, por favor, tente novamente!",5e3)}finally{setTimeout(()=>{z()},5e3)}}}}},function(e){e.O(0,[664,901,774,888,179],function(){return e(e.s=3328)}),_N_E=e.O()}]);