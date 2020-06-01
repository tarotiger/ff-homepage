(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){e.exports=a.p+"static/media/placeholder.786923ca.jpg"},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),s=a.n(i),c=a(13),o=a(14),l=a(16),u=a(15),m=a(181),d=a(184),h=a(177),p=(a(61),a(100),a(50)),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"about-img-container"},r.a.createElement("img",{alt:"about-me",className:"about-img",src:a(101)})),r.a.createElement(p.a,{variant:"h5"},"Introduction"),r.a.createElement("br",null),r.a.createElement(p.a,{className:"about-text",variant:"body1"},"Hi, I 'm Kenneth Lu. I am currently completing my education in Computer Science at the University of New South Wales."),r.a.createElement("br",null),r.a.createElement(p.a,{variant:"h5"},"What I enjoy"),r.a.createElement("br",null),r.a.createElement(p.a,{className:"about-text",variant:"body1"},"I am passionate about building practical software and I mainly focus on the frontend. This site was built using ReactJS and with the help of libraries such as ",r.a.createElement("i",null,"material-ui")," and ",r.a.createElement("i",null,"react-transition-group"),"."),r.a.createElement("br",null),r.a.createElement(p.a,{variant:"h5"},"Skills"),r.a.createElement("br",null),r.a.createElement(p.a,{className:"about-text",variant:"body1"},"I have worked with and have experience in these languages:"),r.a.createElement(p.a,{variant:"button"},"[HTML, CSS, JS] [ReactJS] [C] [Java] [SQL]"))}}]),n}(r.a.Component),f=a(76),g=a.n(f),v=a(178),E=a(170),j=a(183),y=a(180),k=(a(122),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",message:"",sending:!1,sent:!1,status:"",error:!1},n}return Object(o.a)(a,[{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onMailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.resetForm(),this.setState({sending:!0}),g()({method:"POST",url:"http://localhost:5000/send",data:this.state}).then((function(e){"success"===e.data.status?t.setState({sending:!1,sent:!0,status:"Message sent successfully!"}):t.setState({error:!0,sending:!1,sent:!0,status:"".concat(e.data.status)})})).catch((function(e){t.setState({error:!0,sending:!1,sent:!0,status:"".concat(e)})}))}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST"},r.a.createElement(p.a,null,"Feel free to email me at kenlu.me08@gmail.com"),r.a.createElement("br",null),r.a.createElement(p.a,{variant:"h5"},"OR"),r.a.createElement(v.a,{className:"form-textfield",fullWidth:!0,id:"filled-basic",label:"Name",onChange:this.onNameChange.bind(this),value:this.state.name,variant:"outlined"}),r.a.createElement(v.a,{className:"form-textfield",fullWidth:!0,id:"filled-basic",label:"Email",onChange:this.onMailChange.bind(this),type:"email",value:this.state.email,variant:"outlined"}),r.a.createElement(v.a,{className:"form-textfield",fullWidth:!0,id:"filled-basic",label:"Message",multiline:!0,onChange:this.onMessageChange.bind(this),rows:"4",value:this.state.message,variant:"outlined"}),r.a.createElement(E.a,{color:"primary",size:"large",type:"submit"},"Submit")),r.a.createElement(j.a,{open:this.state.sending,autoHideDuration:5e3},r.a.createElement(y.a,{severity:"info"},"Sending...")),r.a.createElement(j.a,{open:this.state.sent,autoHideDuration:5e3},this.state.error?r.a.createElement(y.a,{severity:"error",autoHideDuration:5e3},this.state.status):r.a.createElement(y.a,{severity:"success",autoHideDuration:5e3},"Mail successfully sent!")))}}]),a}(r.a.Component)),w=(a(123),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"content-container"},this.props.children)}}]),a}(r.a.Component)),C=a(39),N=a(55),S=a(3),O=(a(124),a(4)),x=a(172),L=a(48),M=a.n(L),U=a(174),D=a(182),I=a(169),H=a(175),T=a(176),W=a(171),B=a(173),J=a(78),P=a.n(J),R=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={projects:!0,about:!1,contact:!1,drawer:!1},n}return Object(o.a)(a,[{key:"handleClick",value:function(e){this.props.handleClick(e),"projects"===e?this.setState({projects:!0,about:!1,contact:!1}):"about"===e?this.setState({projects:!1,about:!0,contact:!1}):this.setState({projects:!1,about:!1,contact:!0})}},{key:"handleDrawerOpen",value:function(){this.setState({drawer:!0})}},{key:"handleDrawerClose",value:function(){this.setState({drawer:!1})}},{key:"render",value:function(){var e,t=this,a=this.props.classes;return e=!0===this.state.projects?"My Projects":!0===this.state.about?"About Me":"Contact Me",r.a.createElement("div",{className:a.root},r.a.createElement(x.a,{color:"inherit",position:"fixed",className:Object(S.a)(a.appBar,Object(C.a)({},a.appBarShift,this.state.drawer))},r.a.createElement(B.a,null,r.a.createElement(W.a,{className:Object(S.a)(a.menuButton,Object(C.a)({},a.hide,this.state.drawer)),color:"inherit","aria-label":"open drawer",onClick:function(){return t.handleDrawerOpen()},edge:"start"},r.a.createElement(P.a,null)),r.a.createElement(p.a,{variant:"h6",noWrap:!0},e))),r.a.createElement(D.a,{className:a.drawer,variant:"persistent",anchor:"left",open:this.state.drawer,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(W.a,{onClick:function(){return t.handleDrawerClose()}},r.a.createElement(M.a,null))),r.a.createElement(U.a,null),r.a.createElement(I.a,null,["projects","about","contact"].map((function(e,a){return r.a.createElement(H.a,{button:!0,key:e,onClick:function(){return t.handleClick(e)}},r.a.createElement(T.a,{primary:e.charAt(0).toUpperCase()+e.slice(1)}))})))))}}]),a}(r.a.Component),A=Object(O.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(N.a)(Object(N.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"})}}))(R),F=(a(126),a(83)),G=a.n(F),K=(a(127),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={show:!1},a}return Object(o.a)(n,[{key:"handleClick",value:function(){!1===this.state.show&&this.setState({show:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"projects-container"},r.a.createElement("div",{className:"project-thumbnail"},r.a.createElement("a",{href:this.props.url},r.a.createElement("span",{className:"project-image-helper"}),r.a.createElement("img",{alt:"dnd-soundboard",className:"project-image",src:this.props.img}))),r.a.createElement("div",{className:"project-description"},r.a.createElement("div",{className:"project-name"},this.props.title),r.a.createElement("p",{className:"project-info"},this.props.lang),r.a.createElement("div",{className:"".concat(this.state.show?"project-summary-full":"project-summary"),onClick:function(){return e.handleClick()}},this.props.children),this.props.host?r.a.createElement("div",{className:"button-container"},r.a.createElement(E.a,{variant:"outlined",onClick:function(){return window.open(e.props.projectUrl)}},"Try it"),r.a.createElement(E.a,{variant:"outlined",onClick:function(){return window.open(e.props.githubUrl)}},r.a.createElement("img",{alt:"github",className:"project-github",src:a(71)}))):r.a.createElement(E.a,{variant:"outlined",className:"button-github-only",onClick:function(){return window.open(e.props.githubUrl)}},r.a.createElement("img",{alt:"github",className:"project-github",src:a(71)}))))}}]),n}(r.a.Component)),X=a(79),z=a.n(X),Q=a(80),q=a.n(Q),V=a(81),Y=a.n(V),Z=a(82),$=a.n(Z),_=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(c.a)(this,a),n=t.call(this,e);var r=Array(4).fill(!1);return r[0]=!0,n.state={current:0,project:r},n}return Object(o.a)(a,[{key:"moveLeft",value:function(){var e=((this.state.current-1)%4+4)%4,t=Array(4).fill(!1);t[e]=!0,this.setState({current:e,project:t})}},{key:"moveRight",value:function(){var e=((this.state.current+1)%4+4)%4,t=Array(4).fill(!1);t[e]=!0,this.setState({current:e,project:t})}},{key:"render",value:function(){var e=this,t=null;return this.state.project[0]?t=r.a.createElement(m.a,{key:0,addEndListener:function(e,t){e.addEventListener("transitionend",t,!1)},classNames:"fade"},r.a.createElement(K,{url:"https://kenxmel.github.io/dnd-soundboard/",projectUrl:"https://kenxmel.github.io/dnd-soundboard/",githubUrl:"https://github.com/kenxmel/dnd-soundboard",img:z.a,key:"dnd",title:"D&D Soundboard",lang:"React, rc-slider",host:!0},"Soundboard for the biggest tabletop role-playing game Dungeon & Dragons. Comes with an interactive and simple user interface which allows users to combine multiple tracks to create their desired ambient sound for any situation. Instant sounds which add flavour to the soundboard are also readily available. A search bar is included to allow users to easily locate their desired sounds.")):this.state.project[1]?t=r.a.createElement(m.a,{key:1,addEndListener:function(e,t){e.addEventListener("transitionend",t,!1)},classNames:"fade"},r.a.createElement(K,{url:"https://github.com/kenxmel/web-dev-workshop",githubUrl:"https://github.com/kenxmel/web-dev-workshop",img:Y.a,key:"webdev",title:"Web Dev Workshop",lang:"HTML, CSS, Javascript",host:!1},"Web development workshop made for the Winter CSESoc Workshop for highschool students. Covers the basics of web development through a practical tutorial which has students create their Olympic themed website. Students learn the interaction between the HTML DOM and Javascript as well as the basics of CSS.")):this.state.project[2]?t=r.a.createElement(m.a,{key:2,addEndListener:function(e,t){e.addEventListener("transitionend",t,!1)},classNames:"fade"},r.a.createElement(K,{url:"https://github.com/kenxmel/uni-projects",githubUrl:"https://github.com/kenxmel/uni-projects",img:q.a,key:"uni",title:"Uni Projects",lang:"C, Javscript, Python, Bash, Perl",host:!1},"Condensed list of fun university projects I have done. This includes a ",r.a.createElement("a",{href:"https://github.com/kenxmel/uni-projects/tree/master/Git%20Clone"},"Git Clone")," written using Bash and perl. Has basic Git functionality such as add, commit, init etc. as well as the ability to create branches. Another interesting project is creating a ",r.a.createElement("a",{href:"https://github.com/kenxmel/uni-projects/tree/master/UNIX%20Shell"},"UNIX shell")," using C which has the ability to pipe commands from the system environment. For more info and projects visit the github.")):this.state.project[3]&&(t=r.a.createElement(m.a,{key:3,addEndListener:function(e,t){e.addEventListener("transitionend",t,!1)},classNames:"fade"},r.a.createElement(K,{url:"https://github.com/kenxmel/homepage",githubUrl:"https://github.com/kenxmel/homepage",img:$.a,key:"homepage",title:"Homepage",lang:"React, material-ui, react-transition-group, Express",host:!1},"Interactive portfolio implemented with ReactJS and hosted using GitHub Pages. Uses React UI Framework material-ui for a modern and mobile-friendly website. Uses the animation library react-transition-group to handle animations. Backed with Express for mail handling and response"))),r.a.createElement("div",{className:"container-navigator"},r.a.createElement("div",{className:"container-navigator-button-left",onClick:function(){return e.moveLeft()}},r.a.createElement(M.a,null)),r.a.createElement("div",{className:"dot-container"},r.a.createElement("span",{className:"dot ".concat(this.state.project[0]?"dot-active":"")}),r.a.createElement("span",{className:"dot ".concat(this.state.project[1]?"dot-active":"")}),r.a.createElement("span",{className:"dot ".concat(this.state.project[2]?"dot-active":"")}),r.a.createElement("span",{className:"dot ".concat(this.state.project[3]?"dot-active":"")})),r.a.createElement("div",{className:"projects"},r.a.createElement(d.a,null,r.a.createElement(h.a,null,t))),r.a.createElement("div",{className:"container-navigator-button-right",onClick:function(){return e.moveRight()}},r.a.createElement(G.a,null)))}}]),a}(r.a.Component),ee=(a(128),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"title-wrapper"},r.a.createElement("div",{className:"title",onClick:function(){return e.props.handleClick("home")}},r.a.createElement("p",{className:"title-name"},"Kenneth Lu.")))}}]),a}(r.a.Component)),te=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={projects:!0,about:!1,contact:!1},n}return Object(o.a)(a,[{key:"switchTabs",value:function(e){var t={projects:!1,about:!1,contact:!1};t[e]=!0,console.log(t),console.log("Tabs is",e),this.setState(t)}},{key:"render",value:function(){var e,t;return!0===this.state.projects?(e="My Projects",t=r.a.createElement(m.a,{key:0,addEndListener:function(e,t){e.addEventListener("transitionend",t,!1)},classNames:"fade"},r.a.createElement(_,null))):!0===this.state.about?(e="About Me",t=r.a.createElement(m.a,{key:1,addEndListener:function(e,t){e.addEventListener("transitionend",t,!1)},classNames:"fade"},r.a.createElement(b,null))):(e="Contact Me",t=r.a.createElement(m.a,{key:2,addEndListener:function(e,t){e.addEventListener("transitionend",t,!1)},classNames:"fade"},r.a.createElement(k,null))),r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{handleClick:this.switchTabs.bind(this)}),r.a.createElement(ee,{handleClick:this.switchTabs.bind(this)}),r.a.createElement(w,{title:e},r.a.createElement(d.a,null,r.a.createElement(h.a,null,t))))}}]),a}(r.a.Component);a(129);s.a.render(r.a.createElement(te,null),document.getElementById("root"))},71:function(e,t,a){e.exports=a.p+"static/media/github.33b0dc3e.jpg"},79:function(e,t,a){e.exports=a.p+"static/media/dnd.f5509bef.png"},80:function(e,t,a){e.exports=a.p+"static/media/uni.9e7b1031.png"},81:function(e,t,a){e.exports=a.p+"static/media/webdev.e28523f1.png"},82:function(e,t,a){e.exports=a.p+"static/media/homepage.4f5bfd26.png"},95:function(e,t,a){e.exports=a(130)}},[[95,1,2]]]);
//# sourceMappingURL=main.24853d37.chunk.js.map