var v=Object.defineProperty;var o=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var n=(t,e,a)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,c=(t,e)=>{for(var a in e||(e={}))b.call(e,a)&&n(t,a,e[a]);if(o)for(var a of o(e))h.call(e,a)&&n(t,a,e[a]);return t};import{S as g,a as u,i as _,c as w}from"./SocialLoginForm.1790310e.js";import{m as S}from"./vendor.57725b4a.js";import{n as d}from"./app.230eb5b8.js";var y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ValidationObserver",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(l){var f=l.handleSubmit;return[a("form",{staticClass:"mt-4",attrs:{novalidate:""},on:{submit:function(s){return s.preventDefault(),f(t.onSubmit)}}},[a("ValidationProvider",{attrs:{vid:"email",name:"E-mail",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(s){var i=s.errors;return[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"emailInput"}},[t._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],class:"form-control mb-0"+(i.length>0?" is-invalid":""),attrs:{type:"email",id:"emailInput","aria-describedby":"emailHelp",placeholder:"Enter email",required:""},domProps:{value:t.user.email},on:{input:function(r){r.target.composing||t.$set(t.user,"email",r.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[a("span",[t._v(t._s(i[0]))])])])]}}],null,!0)}),a("ValidationProvider",{attrs:{vid:"password",name:"Password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(s){var i=s.errors;return[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"passwordInput"}},[t._v("Password")]),a("router-link",{staticClass:"float-right",attrs:{to:"/auth/password-reset1"}},[t._v("Forgot password?")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],class:"form-control mb-0"+(i.length>0?" is-invalid":""),attrs:{type:"password",id:"passwordInput",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(r){r.target.composing||t.$set(t.user,"password",r.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[a("span",[t._v(t._s(i[0]))])])],1)]}}],null,!0)}),a("div",{staticClass:"d-inline-block w-100"},[a("div",{staticClass:"custom-control custom-checkbox d-inline-block mt-2 pt-1"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:t.formType}}),a("label",{staticClass:"custom-control-label",attrs:{for:t.formType}},[t._v("Remember Me")])]),a("button",{staticClass:"btn btn-primary float-right",attrs:{type:"submit"}},[t._v("Sign in")])]),a("div",{staticClass:"sign-info"},[a("span",{staticClass:"dark-color d-inline-block line-height-2"},[t._v(" Don't have an account? "),t.$route.meta.dark?a("router-link",{staticClass:"iq-waves-effect pr-4",attrs:{to:"/dark/auth/sign-up1"}},[t._v("Sign up")]):a("router-link",{staticClass:"iq-waves-effect pr-4",attrs:{to:"/auth/sign-up1"}},[t._v("Sign up")])],1),a("social-login-form")],1)],1)]}}])})},C=[];const k={name:"SignIn1Form",components:{SocialLoginForm:g},props:["formType","email","password"],data:()=>({user:{email:"",password:""}}),mounted(){this.user.email=this.$props.email,this.user.password=this.$props.password},computed:c({},S({stateUsers:"Setting/usersState"})),methods:{onSubmit(){this.formType==="passport"?this.passportLogin():this.formType==="jwt"?this.jwtLogin():this.formType==="firebase"&&this.firebaseLogin()},passportLogin(){u.login(this.user).then(t=>{t.status?(localStorage.setItem("user",JSON.stringify(t.data.access_token)),localStorage.setItem("access_token",t.data.access_token),this.$router.push({name:"dashboard.home-1"})):t.data.errors.length>0&&this.$refs.form.setErrors(t.data.errors)}).finally(()=>{this.loading=!1})},jwtLogin(){let t=this;u.jwtLogin(this.user).then(e=>{localStorage.setItem("user",JSON.stringify(t.user)),localStorage.setItem("access_token",e.data.access_token),this.$router.push({name:"dashboard.home-1"})})},firebaseLogin(){}}},p={};var j=d(k,y,C,!1,$,null,null,null);function $(t){for(let e in p)this[e]=p[e]}var I=function(){return j.exports}(),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"mb-0"},[t._v("Sign in")]),a("p",[t._v("Enter your email address and password to access admin panel.")]),a("tab-nav",{staticClass:"nav-fill mb-3",attrs:{pills:!0,id:"pills-tab-1"}},[a("tab-nav-items",{attrs:{active:!0,id:"pills-jwt-tab-fill",href:"#pills-jwt-fill",ariaControls:"pills-jwt-fill",role:"tab",ariaSelected:!0,title:"JWT"}}),a("tab-nav-items",{attrs:{active:!1,id:"pills-passport-tab-fill",href:"#pills-passport-fill",ariaControls:"pills-passport-fill",role:"tab",ariaSelected:!0,title:"Passport"}}),a("tab-nav-items",{attrs:{active:!1,id:"pills-firebase-tab-fill",href:"#pills-firebase-fill",ariaControls:"pills-firebase-fill",role:"tab",ariaSelected:!1,title:"Firebase"}}),a("tab-nav-items",{attrs:{active:!1,id:"pills-oauth0-tab-fill",href:"#pills-oauth0-fill",ariaControls:"pills-oauth0-fill",role:"tab",ariaSelected:!1,title:"OAuth0"}})],1),a("tab-content",{staticClass:"mt-0",attrs:{id:"pills-tabContent-1"}},[a("tab-content-item",{attrs:{active:!0,id:"pills-jwt-fill","aria-labelled-by":"pills-jwt-tab-fill"}},[a("sign-in1-form",{attrs:{formType:"jwt",email:"admin@vito.com",password:"admin123"}})],1),a("tab-content-item",{attrs:{active:!1,id:"pills-passport-fill","aria-labelled-by":"pills-passport-tab-fill"}},[a("sign-in1-form",{attrs:{formType:"passport",email:"admin@vito.com",password:"admin123"}})],1),a("tab-content-item",{attrs:{active:!1,id:"pills-firebase-fill","aria-labelled-by":"pills-firebase-tab-fill"}},[a("sign-in1-form",{attrs:{formType:"firebase",email:"admin@vito.com",password:"admin123"}})],1),a("tab-content-item",{attrs:{active:!1,id:"pills-oauth0-fill","aria-labelled-by":"pills-oauth0-tab-fill"}},[a("div",{staticClass:"height-300 pb-4 d-flex justify-content-center"},[a("a",{staticClass:"btn btn-danger align-self-center",attrs:{href:"javascript:void(0)"},on:{click:function(l){return t.loginOAuth0()}}},[t._v(" OAuth0 Login ")])])])],1)],1)},L=[];const T={name:"SignIn1",components:{SignIn1Form:I},data:()=>({}),mounted(){const t=localStorage.getItem("access_token");t!=null&&this.$router.push({name:"dashboard.home-1"})},methods:{loginOAuth0:function(){new _.WebAuth(w.auth0Config).authorize()}}},m={};var F=d(T,x,L,!1,P,null,null,null);function P(t){for(let e in m)this[e]=m[e]}var N=function(){return F.exports}();export{N as default};
