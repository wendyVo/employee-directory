(this["webpackJsonpemployee-dir2"]=this["webpackJsonpemployee-dir2"]||[]).push([[0],{3:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(13),r=n.n(a),l=n(19),s=n(14),i=n(15),h=n(16),d=n(21),u=n(20),m=(n(3),n(0));var p=function(e){return Object(m.jsx)("div",{className:"container px-3 mb-5 empContainer",children:e.children})};var j=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return Object(m.jsx)("div",{className:t,children:e.children})};var b=function(e){return Object(m.jsx)("div",{className:"row".concat(e.fluid?"-fluid":""),children:e.children})};var f=function(e){return Object(m.jsxs)("table",{className:"table table-striped table-bordered table-dark mt-3",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"Image"}),Object(m.jsx)("th",{scope:"col",onClick:e.handleSortName,className:"dropdown-toggle",role:"button","data-toggle":"dropdown",children:"Name"}),Object(m.jsx)("th",{scope:"col",onClick:e.handleSortPhone,className:"dropdown-toggle",role:"button","data-toggle":"dropdown",children:"Phone"}),Object(m.jsx)("th",{scope:"col",children:"Email"}),Object(m.jsx)("th",{scope:"col",children:"DOB"}),Object(m.jsx)("th",{scope:"col",onClick:e.handleSortLocation,className:"dropdown-toggle",role:"button","data-toggle":"dropdown",children:"Location"})]})}),Object(m.jsx)("tbody",{children:e.children})]})};var O=function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsxs)("th",{scope:"col",children:[" ",Object(m.jsx)("img",{alt:e.name,src:e.picture})]}),Object(m.jsx)("th",{scope:"col",children:e.name}),Object(m.jsx)("th",{scope:"col",children:e.phone}),Object(m.jsx)("th",{scope:"col",children:e.email}),Object(m.jsx)("th",{scope:"col",children:e.dob}),Object(m.jsx)("th",{scope:"col",children:e.location})]})},x=n(17),y=n.n(x);var v=function(){return y.a.get("https://randomuser.me/api/?results=20&nat=au")},g=n(18),S=n.n(g);var N=function(){return Object(m.jsx)("div",{className:"jumbotron jumbotron-fluid bg-info",children:Object(m.jsxs)("div",{className:"container text-center text-white",children:[Object(m.jsx)("h1",{className:"display-4",children:"Employee Directory"}),Object(m.jsx)("p",{className:"lead",children:"Use the search box to find an employee or sort by Name, Phone or Location  "})]})})};var C=function(e){return Object(m.jsxs)("div",{className:"input-group",children:[Object(m.jsx)("div",{className:"form-outline",children:Object(m.jsx)("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search For an employee",id:"search"})}),Object(m.jsx)("button",{type:"button",className:"btn btn-primary",onClick:e.handleFormSubmit,children:Object(m.jsx)("i",{className:"fa fa-search"})})]})},w=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={employees:[],search:""},e.inputRef=c.a.createRef(),e.searchEmployees=function(t){var n=e.state.employees.filter((function(t){return console.log(t,e.inputRef.current),t.name.toLowerCase().includes(e.inputRef.current.toLowerCase())}));e.setState({employees:n})},e.handleSortName=function(){var t=e.state.employees.sort((function(e,t){return e.name.localeCompare(t.name)}));e.setState({employees:t}),console.log("Sorted Name: ",t)},e.handleSortPhone=function(){var t=e.state.employees.sort((function(e,t){return parseInt(e.phone)-parseInt(t.phone)}));e.setState({employees:t}),console.log("Sorted Phone: ",t)},e.handleSortLocation=function(){var t=e.state.employees.sort((function(e,t){return e.location.localeCompare(t.location)}));e.setState({employees:t})},e.handleInputChange=function(t){var n=t.target.value;e.inputRef.current=n,console.log(e.inputRef);var o=t.target.name;e.setState(Object(s.a)({},o,n))},e.handleFormSubmit=function(t){t.preventDefault(),e.searchEmployees(e.state.search)},e.loadEmployee=function(){v().then((function(t){return e.setState({employees:t.data.results.map((function(e,t){return{picture:e.picture.large,name:e.name.first+" "+e.name.last,phone:e.phone,email:e.email,dob:S()(e.dob.date).format("L"),location:e.location.city,key:t}}))})})).catch((function(e){return console.log(e)}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.loadEmployee()}},{key:"render",value:function(){return Object(m.jsxs)(p,{children:[Object(m.jsx)(N,{}),Object(m.jsxs)(b,{children:[Object(m.jsx)(j,{size:"md-4",children:Object(m.jsx)(C,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit})}),Object(m.jsx)(j,{size:"md-12",children:Object(m.jsx)(f,{handleSortName:this.handleSortName,handleSortPhone:this.handleSortPhone,handleSortLocation:this.handleSortLocation,children:Object(l.a)(this.state.employees).map((function(e){return Object(m.jsx)(O,{picture:e.picture,name:e.name,phone:e.phone,email:e.email,dob:e.dob,location:e.location},e.key)}))})})]})]})}}]),n}(o.Component);var k=function(){return Object(m.jsx)(w,{})};n(46);r.a.render(Object(m.jsx)(k,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.4373bae3.chunk.js.map