(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(2),c=n.n(r),s=(n(13),n(3)),l=n(4),m=n(6),o=n(5),u=n(7);n(15);var h=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={bintime:[],time:[],currentHint:0,hints:[],blockNumbers:!1,theme:0,themes:["","indian","marine","france","typewriter","crazy"]},n.componentDidMount=function(){n.tick(),setInterval(n.tick,1e3),window.addEventListener("click",n.nextHint),window.addEventListener("keypress",n.nextTheme)},n.tick=function(){var e=(new Date).toTimeString().split(" ")[0].replace(/:/g,"").split(""),t=[];e.forEach(function(e){var n=function(e,t){var n=Number(e).toString(2);for(;n.length<t;)n="0"+n;return n}(e,4).split("");t.push(n)}),n.setState({time:e,bintime:t}),n.generateHints()},n.blocks=function(){var e=[];return n.state.bintime.map(function(t,a){var r=16,c=[];return t.map(function(e,t){return r/=2,c.push(i.a.createElement("div",{key:t,className:e>0?"item lit":"item"},n.state.blockNumbers&&e>0&&i.a.createElement("p",null,r)))}),e.push(i.a.createElement("div",{key:a,className:"col"},c))}),e},n.generateHints=function(){var e=[];e[0]="CLICK!".split(""),e[1]="HHMMSS".split(""),e[2]=n.state.time,e[3]=n.state.time,e[4]=[""],n.setState({hints:e})},n.nextHint=function(){var e=n.state,t=e.hints,a=e.blockNumbers,i=e.currentHint;i<t.length-1?i+=1:i=0,a=3===i,n.setState({currentHint:i,blockNumbers:a})},n.nextTheme=function(){var e=n.state,t=e.theme;t<e.themes.length-1?t+=1:t=0,n.setState({theme:t})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.hints,n=e.currentHint,a=e.themes,r=e.theme;return i.a.createElement("div",{className:"themed "+a[r]},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"clock"},this.blocks()),i.a.createElement("div",{className:"help-row"},t.length&&t[n].map(function(e,t){return i.a.createElement("div",{key:t,className:"item"},i.a.createElement("p",null,e))}))))}}]),t}(a.Component);c.a.render(i.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.7234c693.chunk.js.map