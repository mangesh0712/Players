(this.webpackJsonpplayers=this.webpackJsonpplayers||[]).push([[0],{45:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s.n(a),n=s(17),r=s.n(n),i=(s(8),s(6)),l=s.n(i),o=s(18),m=s(7),d=s(19),x=s.n(d),j=s(0);var u=function(e){var t=e.onSearch,s=Object(a.useRef)("");return Object(j.jsx)("div",{style:{backgroundColor:"ghostwhite"},className:"sticky z-20 inset-0 py-10 ",children:Object(j.jsx)("form",{className:"flex justify-center",children:Object(j.jsx)("input",{onChange:function(e){e.preventDefault(),t(s.current.value)},ref:s,type:"text",placeholder:"Search Player by Name or Team ...",className:"p-3 mx-3 sm:mx-12 md:mx-24 w-full outline-none rounded-sm shadow-sm text-gray-500 border-none"})})})},b=s(20);var h=function(e){var t=e.PFName,s=e.Id,a=e.Value,c=e.SkillDesc,n=e.UpComingMatchesList[0],r=n.CCode,i=n.VsCCode,l=n.MDate;return Object(j.jsxs)("div",{className:"bg-white rounded-sm shadow-md p-3 mx-4 sm:mx-40 md:mx-0",children:[Object(j.jsx)("div",{className:"flex justify-center",children:Object(j.jsx)("img",{src:"/player-images/".concat(s,".jpg"),className:" h-60 w-60"})}),Object(j.jsxs)("div",{className:"w-full  rounded-sm h-28 my-2 px-7",children:[Object(j.jsxs)("div",{className:"subDataContainer",children:[Object(j.jsx)("p",{className:"font-semibold text-lg",children:t}),Object(j.jsx)("p",{className:"font-semibold text-md p-1 px-4 bg-green-500 text-white rounded-sm",children:c})]}),Object(j.jsxs)("div",{className:"subDataContainer mt-2",children:[Object(j.jsx)("p",{className:"text-sm font-mono text-gray-500",children:"Value"}),Object(j.jsxs)("p",{className:"text-sm font-mono text-gray-500",children:["$",a]})]}),Object(j.jsxs)("div",{className:"subDataContainer mt-2",children:[Object(j.jsx)("p",{className:"text-sm font-mono text-gray-500",children:"Upcoming Match"}),Object(j.jsxs)("div",{className:"flex items-center",children:[Object(j.jsx)("p",{className:"px-3 py-1 bg-red-400 text-white rounded-sm text-xs",children:r}),Object(j.jsx)("p",{className:"mx-2 text-sm",children:"VS"}),Object(j.jsx)("p",{className:"px-3 py-1 bg-red-400 text-white rounded-sm text-xs",children:i})]})]}),Object(j.jsxs)("div",{className:"subDataContainer mt-2",children:[Object(j.jsx)("p",{className:"text-sm font-mono text-gray-500",children:"Match Time"}),Object(j.jsx)("p",{className:"text-sm font-mono text-gray-500",children:l})]})]})]})};var p=function(e){var t=e.playersList;return Object(j.jsx)("div",{className:"max-w-6xl mx-auto",children:Object(j.jsx)("div",{className:"grid lg:grid-cols-3 xs:grid-cols-1 md:grid-cols-2 gap-4",children:t.map((function(e){return Object(j.jsx)(h,Object(b.a)({},e),e.Id)}))})})};var f=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)([]),r=Object(m.a)(n,2),i=r[0],d=r[1],b=function(){var e=Object(o.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://api.npoint.io/20c1afef1661881ddc9c");case 2:t=e.sent,s=t.data.playerList.map((function(e){return{Id:e.Id,PFName:e.PFName,TName:e.TName,Value:e.Value,SkillDesc:e.SkillDesc,UpComingMatchesList:e.UpComingMatchesList}})),c(s.sort((function(e,t){return e-t}))),d(s.sort((function(e,t){return e-t})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){b()}),[]),Object(j.jsx)("div",{className:"",children:Object(j.jsxs)("div",{className:"relative",children:[Object(j.jsx)(u,{onSearch:function(e){var t=""===e?s:s.filter((function(t){return-1!=t.PFName.toLowerCase().indexOf(e.trim().toLowerCase())})),a=t.length?t:s.filter((function(t){return-1!=t.TName.toLowerCase().indexOf(e.trim().toLowerCase())}));d(a)}}),Object(j.jsx)(p,{playersList:i})]})})};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))},8:function(e,t,s){}},[[45,1,2]]]);
//# sourceMappingURL=main.f5d71f49.chunk.js.map