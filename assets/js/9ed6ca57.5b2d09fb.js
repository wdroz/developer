"use strict";(self.webpackChunkdeveloper_site=self.webpackChunkdeveloper_site||[]).push([[703],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,k=c["".concat(m,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(k,l(l({ref:t},o),{},{components:a})):n.createElement(k,l({ref:t},o))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8559:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return o},default:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],p={title:"Survey Application",sidebar_label:"Survey Application"},m=void 0,s={unversionedId:"tech/usecase/survey-app",id:"tech/usecase/survey-app",isDocsHomePage:!1,title:"Survey Application",description:"Survey app components",source:"@site/docs/tech/usecase/survey-app.md",sourceDirName:"tech/usecase",slug:"/tech/usecase/survey-app",permalink:"/developer/docs/tech/usecase/survey-app",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tech/usecase/survey-app.md",tags:[],version:"current",lastUpdatedAt:1636036369,formattedLastUpdatedAt:"11/4/2021",frontMatter:{title:"Survey Application",sidebar_label:"Survey Application"},sidebar:"tech",previous:{title:"Ask for Help v2",permalink:"/developer/docs/tech/usecase/ask-for-helpv2"}},o=[{value:"Survey app components",id:"survey-app-components",children:[]},{value:"Creating a survey form on Tally",id:"creating-a-survey-form-on-tally",children:[]},{value:"Using a survey template on Tally",id:"using-a-survey-template-on-tally",children:[]},{value:"Adding required permissions on wenet developer hub",id:"adding-required-permissions-on-wenet-developer-hub",children:[]},{value:"List of questions and answers",id:"list-of-questions-and-answers",children:[]}],d={toc:o};function c(e){var t=e.components,p=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"survey-app-components"},"Survey app components"),(0,i.kt)("p",null,"The following steps are required for creating a survey "),(0,i.kt)("h3",{id:"creating-a-survey-form-on-tally"},"Creating a survey form on Tally"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:a(7791).Z,title:"Tally form"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"https://tally.so"},"Tally")," and create your workspace"),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("em",{parentName:"li"},"create workspace")," on the left side of the page"),(0,i.kt)("li",{parentName:"ul"},"Assign a name"),(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("em",{parentName:"li"},"Integrations")," column to add webhook endpoint"),(0,i.kt)("li",{parentName:"ul"},"Webhook endpoint should be filled as ",(0,i.kt)("a",{parentName:"li",href:"https://survey.wenet.u-hopper.com/survey/event/"},"https://survey.wenet.u-hopper.com/survey/event/")),(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("em",{parentName:"li"},"Edit")," button on top right to start adding surveys")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:a(4406).Z,title:"Tally form"})),(0,i.kt)("h3",{id:"using-a-survey-template-on-tally"},"Using a survey template on Tally"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Login to your Tally page"),(0,i.kt)("li",{parentName:"ul"},"Access the following ",(0,i.kt)("a",{parentName:"li",href:"https://tally.so/templates/wenet-survey-app/l3jBE3"},"link")),(0,i.kt)("li",{parentName:"ul"},"Click on the ",(0,i.kt)("em",{parentName:"li"},"Use this template")," button on the top right corner and edit the questions/answers\n",(0,i.kt)("img",{alt:"Alt text",src:a(166).Z,title:"Tally form"})),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("em",{parentName:"li"},"Publish")," button on top of the page to save the survey after the edit")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE")),(0,i.kt)("p",null,"Pay attention to the logic and hidden field triggers and selections. Make sure the logic stays the same after changing the answer texts.\n",(0,i.kt)("img",{alt:"Alt text",src:a(1350).Z,title:"Tally form"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Once the survey is saved, the Tally form ID should be shared with the developers.\nThe survey ID is a six-character ID and it can be found in ",(0,i.kt)("em",{parentName:"p"},"Share")," column.\n",(0,i.kt)("img",{alt:"Alt text",src:a(1662).Z,title:"Tally form"})),(0,i.kt)("h3",{id:"adding-required-permissions-on-wenet-developer-hub"},"Adding required permissions on wenet developer hub"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable the wenet user profile permissions on ",(0,i.kt)("a",{parentName:"li",href:"https://wenet.u-hopper.com/dev/hub/frontend/developer/index"},"wenet hub -> developers -> survey app"),(0,i.kt)("img",{alt:"Alt text",src:a(109).Z,title:"wenet permissions"}))),(0,i.kt)("h3",{id:"list-of-questions-and-answers"},"List of questions and answers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Full list of ",(0,i.kt)("em",{parentName:"p"},"Questions and answers")," codes can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1SyTqCyAmXLVuIPa2CqOf4z7n8B1Qsv5O/edit#gid=1590011795"},"this spreadsheet"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"List of APIs related with the user profile can be found ",(0,i.kt)("a",{parentName:"p",href:"https://swagger.u-hopper.com/?url=https://bitbucket.org/wenet/wenet-components-documentation/raw/master/sources/wenet-profile_manager-openapi.yaml"},"here"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"List of ",(0,i.kt)("em",{parentName:"p"},"Questions, answers and fields")," and their assigned profile entries used in Pre-Pilot are shown below"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Question Code"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Answers"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Competences Meanings Materials"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Ontology Category Classification"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Variable Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Q01"),(0,i.kt)("td",{parentName:"tr",align:"center"},"list"),(0,i.kt)("td",{parentName:"tr",align:"center"},"None"),(0,i.kt)("td",{parentName:"tr",align:"center"},"None"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"gender"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Q02"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"None"),(0,i.kt)("td",{parentName:"tr",align:"center"},"None"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"date_of_birth"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Q03"),(0,i.kt)("td",{parentName:"tr",align:"center"},"list"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Materials"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"university_status")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"department"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Q04"),(0,i.kt)("td",{parentName:"tr",align:"center"},"list"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Materials"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"university_status")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"degree_programme"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Q05"),(0,i.kt)("td",{parentName:"tr",align:"center"},"list"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Materials"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"university_status")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"accommodation"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Q06a-0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number 1-5 mapped to 0-1 values"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Competences"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"interest")),(0,i.kt)("td",{parentName:"tr",align:"center"},"see column ",(0,i.kt)("a",{parentName:"td",href:"https://docs.google.com/spreadsheets/d/1SyTqCyAmXLVuIPa2CqOf4z7n8B1Qsv5O/edit#gid=1590011795"},"G"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Q07a-h"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number 1-5 mapped to 0-1 values"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Competences"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"university_activity")),(0,i.kt)("td",{parentName:"tr",align:"center"},"see column ",(0,i.kt)("a",{parentName:"td",href:"https://docs.google.com/spreadsheets/d/1SyTqCyAmXLVuIPa2CqOf4z7n8B1Qsv5O/edit#gid=1590011795"},"G"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Q08a-r"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number 1-5 calculated to 0-1 values"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Meanings"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"guiding_principles")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"excitement"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Q08a-r"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number 1-5 calculated to 0-1 values"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Meanings"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"guiding_principles")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"promotion"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Q08a-r"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number 1-5 calculated to 0-1 values"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Meanings"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"guiding_principles")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"existence"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Q08a-r"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number 1-5 calculated to 0-1 values"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Meanings"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"guiding_principles")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"suprapersonal"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Q08a-r"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number 1-5 calculated to 0-1 values"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Meanings"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"guiding_principles")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"interactive"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Q08a-r"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number 1-5 calculated to 0-1 values"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Meanings"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"guiding_principles")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"normative"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Q09a-t"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number 1-5 calculated to 0-1 values"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Meanings"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"big_five")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"extraversion"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Q09a-t"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number 1-5 calculated to 0-1 values"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Meanings"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"big_five")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"agreeableness"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Q09a-t"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number 1-5 calculated to 0-1 values"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Meanings"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"big_five")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"conscientiousness"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Q09a-t"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number 1-5 calculated to 0-1 values"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Meanings"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"big_five")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"neuroticism"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Q09a-t"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number 1-5 calculated to 0-1 values"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Meanings"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"big_five")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"openness"))))))}c.isMDXComponent=!0},7791:function(e,t,a){t.Z=a.p+"assets/images/tally1-23e9a476fb467368f9f6d15a72cbfd49.png"},4406:function(e,t,a){t.Z=a.p+"assets/images/tally2-8886820bbbea19afad7fac4558254acb.png"},1662:function(e,t,a){t.Z=a.p+"assets/images/tally_id-d524f3355d0581ab15432e233de83b54.png"},166:function(e,t,a){t.Z=a.p+"assets/images/tally_template-f3890735e8d78ff59a8588711201d0fc.png"},1350:function(e,t,a){t.Z=a.p+"assets/images/tally_template2-29611b491b2984cdd52bdd965b7b262a.png"},109:function(e,t,a){t.Z=a.p+"assets/images/wenet1-5f0e752a975b7e2646ba57c1ef53378c.png"}}]);