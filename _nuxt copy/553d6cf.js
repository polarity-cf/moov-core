(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{497:function(t,e,n){"use strict";n.r(e);n(58),n(72);var o={name:"InspirePage",computed:{wholeData:function(){return this.$store.state.movie.wholeData},loading:function(){return this.$store.state.movie.loading}},methods:{chooseOption:function(t){this.stepIdx++,console.log(t),this.$store.dispatch("movie/push",t)},procQ:function(){this.$store.dispatch("movie/proc")},clDel:function(){localStorage.removeItem("MOOV_DATA")},reset:function(){this.stepIdx=1,this.$store.dispatch("movie/reset")},getTag:function(){for(var t=this,e=[this.select1,this.select2,this.select3],n=function(){var e=r[o];e&&t.$store.dispatch("movie/push",{op:function(t){return t.genres.includes(e)}})},o=0,r=e;o<r.length;o++)n();this.stepIdx++,this.$store.dispatch("movie/proc")}},watch:{loading:function(t){if(!t){var e=Math.floor(Math.random()*this.wholeData.length);this.sl=this.wholeData[e]}}},data:function(){return{stepIdx:1,select1:null,select2:null,select3:null,sl:{id:"tt3882074",rating:7.4,votes:3895,title:"The Eagle Huntress",year:2016,runtime:87,genres:["Adventure","Documentary","Sport"]},tags:["Adventure","Drama","Fantasy","Crime","Horror","History","Comedy","War","Romance","Action","Mystery","Thriller","Sci-Fi","Western","Family","Documentary","Biography","Animation","Sport","Music","Musical","Film-Noir","Adult","News"],stepData:[{question:"How old should the movie be ?",answers:[{title:"Newly released",op:function(t){return t.year>=2021}},{title:"The last 5 years",op:function(t){return t.year>=2017}},{title:"The last 20 years",op:function(t){return t.year>=2e3}},{title:"The old school (from 70s til now)",op:function(t){return t.year>=1970}},{title:"I'm a historian (all time)",op:function(t){return!0}}]},{question:"How long should your movie be ?",answers:[{title:"At most 1 hours",op:function(t){return t.runtime<=60}},{title:"From 1 to 1.5 hours",op:function(t){return t.runtime>=60&&t.runtime<=150}},{title:"From 1.5 to 2 hours",op:function(t){return t.runtime>=90&&t.runtime<=120}},{title:"From 2 to 2.5 hours",op:function(t){return t.runtime>=120&&t.runtime<=150}},{title:"I have the whole day",op:function(t){return!0}}]},{question:"How quality should the movie be ?",answers:[{title:"Whatever",op:function(t){return!0}},{title:"An okay movie",op:function(t){return t.rating>=6}},{title:"A nice movie (maybe)",op:function(t){return t.rating>=7}},{title:"Superb",op:function(t){return t.rating>=8}},{title:"One of the bst",op:function(t){return t.rating>=9}}]},{question:"How popular should the movie be ?",answers:[{title:"Whatever",op:function(t){return!0}},{title:"Small fanclub on reddit",op:function(t){return t.rating>=1e4}},{title:"Very well-known",op:function(t){return t.votes>=1e5}},{title:"Every movies fan knows",op:function(t){return t.votes>=5e5}}]}]}}},r=n(93),l=n(156),c=n.n(l),v=n(276),m=n(490),h=n(491),d=n(492),f=n(496),_=n(493),y=n(494),w=n(495),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{staticClass:"text-center"},[n("v-btn",{staticStyle:{color:"green"},attrs:{block:""},on:{click:t.reset}},[t._v("\n      RESET\n    ")]),t._v(" "),n("v-stepper",{attrs:{vertical:""},model:{value:t.stepIdx,callback:function(e){t.stepIdx=e},expression:"stepIdx"}},[n("v-stepper-step",{attrs:{complete:t.stepIdx>1,step:"1"}},[t._v("\n        "+t._s(t.stepData[0].question)+"\n      ")]),t._v(" "),n("v-stepper-content",{attrs:{step:"1"}},t._l(t.stepData[0].answers,(function(e,o){return n("div",{key:o,staticClass:"pa-2 ma-1"},[n("v-btn",{attrs:{block:""},on:{click:function(n){return t.chooseOption(e)}}},[t._v("\n            "+t._s(e.title)+"\n          ")])],1)})),0),t._v(" "),n("v-stepper-step",{attrs:{complete:t.stepIdx>2,step:"2"}},[t._v("\n        "+t._s(t.stepData[1].question)+"\n      ")]),t._v(" "),n("v-stepper-content",{attrs:{step:"2"}},t._l(t.stepData[1].answers,(function(e,o){return n("div",{key:o,staticClass:"pa-2 ma-1"},[n("v-btn",{attrs:{block:""},on:{click:function(n){return t.chooseOption(e)}}},[t._v("\n            "+t._s(e.title)+"\n          ")])],1)})),0),t._v(" "),n("v-stepper-step",{attrs:{complete:t.stepIdx>3,step:"3"}},[t._v("\n        "+t._s(t.stepData[2].question)+"\n      ")]),t._v(" "),n("v-stepper-content",{attrs:{step:"3"}},t._l(t.stepData[2].answers,(function(e,o){return n("div",{key:o,staticClass:"pa-2 ma-1"},[n("v-btn",{attrs:{block:""},on:{click:function(n){return t.chooseOption(e)}}},[t._v("\n            "+t._s(e.title)+"\n          ")])],1)})),0),t._v(" "),n("v-stepper-step",{attrs:{complete:t.stepIdx>4,step:"4"}},[t._v("\n        "+t._s(t.stepData[3].question)+"\n      ")]),t._v(" "),n("v-stepper-content",{attrs:{step:"4"}},t._l(t.stepData[3].answers,(function(e,o){return n("div",{key:o,staticClass:"pa-2 ma-1"},[n("v-btn",{attrs:{block:""},on:{click:function(n){return t.chooseOption(e)}}},[t._v("\n            "+t._s(e.title)+"\n          ")])],1)})),0),t._v(" "),n("v-stepper-step",{attrs:{complete:t.stepIdx>5,step:"5"}},[t._v("\n        Pick your poison (at most 3)\n      ")]),t._v(" "),n("v-stepper-content",{attrs:{step:"5"}},[n("v-select",{attrs:{items:t.tags,label:"Standard",dense:""},model:{value:t.select1,callback:function(e){t.select1=e},expression:"select1"}}),t._v(" "),n("v-select",{attrs:{items:t.tags,label:"Standard",dense:""},model:{value:t.select2,callback:function(e){t.select2=e},expression:"select2"}}),t._v(" "),n("v-select",{attrs:{items:t.tags,label:"Standard",dense:""},model:{value:t.select3,callback:function(e){t.select3=e},expression:"select3"}}),t._v(" "),n("v-btn",{attrs:{block:""},on:{click:t.getTag}},[t._v("\n          Get your movies\n        ")])],1),t._v(" "),n("v-stepper-step",{attrs:{step:"6"}},[t._v("\n        Your Movie\n      ")]),t._v(" "),n("v-stepper-content",{attrs:{step:"6"}},[t.loading?n("v-card",[t._v("\n          We are getting you your movies\n        ")]):n("v-card",[0===t.wholeData.length?n("div",[t._v("\n            Sorry, no movie fits your criteria :( Please reset :(\n          ")]):n("div",[n("p",[t._v('Your movie is "'+t._s(t.sl.title)+'", created in '+t._s(t.sl.year)+" with the length of "+t._s(t.sl.runtime)+" minutes. The movie's genres are "+t._s(t.sl.genres))]),t._v(" "),n("v-btn",{attrs:{href:"https://www.imdb.com/title/"+t.sl.id,target:"_blank"}},[t._v("\n              Link to your movie on IMDB\n            ")])],1)])],1)],1),t._v(" "),n("v-btn",{staticStyle:{color:"green"},attrs:{block:""},on:{click:t.reset}},[t._v("\n      RESET\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VCard:m.a,VCol:h.a,VRow:d.a,VSelect:f.a,VStepper:_.a,VStepperContent:y.a,VStepperStep:w.a})}}]);