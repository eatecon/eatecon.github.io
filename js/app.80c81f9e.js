(function(e){function t(t){for(var o,r,n=t[0],u=t[1],a=t[2],h=0,l=[];h<n.length;h++)r=n[h],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&l.push(i[r][0]),i[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(l.length)l.shift()();return c.push.apply(c,a||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var s=c[t],o=!0,n=1;n<s.length;n++){var u=s[n];0!==i[u]&&(o=!1)}o&&(c.splice(t--,1),e=r(r.s=s[0]))}return e}var o={},i={app:0},c=[];function r(t){if(o[t])return o[t].exports;var s=o[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=o,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(s,o,function(t){return e[t]}.bind(null,o));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],u=n.push.bind(n);n.push=t,n=n.slice();for(var a=0;a<n.length;a++)t(n[a]);var d=u;c.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"18a9":function(e,t,s){"use strict";var o=s("65d3"),i=s.n(o);t["default"]=i.a},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var o=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("keep-alive",[s("router-view")],1)],1)},c=[],r={name:"app",components:{}},n=r,u=(s("5c0b"),s("2877")),a=Object(u["a"])(n,i,c,!1,null,null,null),d=a.exports,h=s("2f62"),l=s("0e44"),w={listPopularSurveys:function(e){return e.surveys}},A={getSurveys:function(){},addSurvey:function(e,t){e.commit("addSurvey",t)},deleteSurvey:function(e,t){e.commit("deleteSurvey",t)}},I=(s("c740"),s("a434"),{setSurvey:function(e,t){o["a"].set(e,"surveys",t)},addSurvey:function(e,t){var s=e.surveys;s.push(t),o["a"].set(e,"surveys",t)},deleteSurveys:function(e,t){var s=e.surveys;s.splice(s.findIndex((function(e){return e.id==t.id})),1),o["a"].set(e,"surveys",s)}}),x={surveys:[],status:null},m=!0,p={namespaced:m,state:x,getters:w,actions:A,mutations:I};o["a"].use(h["a"]);var f=new h["a"].Store({modules:{surveys:p},plugins:[Object(l["a"])()]}),q=s("8c4f"),v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"columns is-multiline is-desktop"},[s("div",{staticClass:"column is-full"},[s("section",{staticClass:"hero is-primary is-small"},[s("nav-bar"),e._m(0)],1)]),e._m(1),s("div",{staticClass:"column"},[s("b-button",{attrs:{type:"is-danger is-large",tag:"router-link",to:{path:"/mbti"},expanded:""}},[e._v("MBTI")])],1),s("div",{staticClass:"column"},[s("b-button",{attrs:{type:"is-info is-large",tag:"router-link",to:{path:"/mindset"},expanded:""}},[e._v("Mindset")])],1),s("div",{staticClass:"column"},[s("b-button",{attrs:{type:"is-primary is-large",tag:"router-link",to:{path:"/factfulness"},expanded:""}},[e._v("Factfulness Survey")])],1)])},b=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[e._v("แบบทดสอบทางความคิด และพฤติกรรมการกิน")]),s("h2",{staticClass:"subtitle"},[e._v("ยินดีต้อนรับเข้าสู่ EatEcon Survey")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"column is-full"},[s("p",{staticClass:"content has-text-centered"},[e._v("กรุณาเลือกแบบทดสอบที่คุณสนใจ")])])}],y=s("9540"),T={components:{NavBar:y["default"]}},B=T,C=Object(u["a"])(B,v,b,!1,null,null,null),_=C.exports,g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"columns is-multiline is-desktop"},[s("div",{staticClass:"column is-full"},[s("section",{staticClass:"hero is-primary is-small"},[s("nav-bar"),e._m(0)],1)]),s("div",{staticClass:"column is-full"},e._l(e.questionItems,(function(t){return s("mulitple-choices",{key:t.questionId,model:{value:e.questionItems[t.questionId-1],callback:function(s){e.$set(e.questionItems,t.questionId-1,s)},expression:"questionItems[question.questionId-1]"}})})),1),s("div",{staticClass:"column is-full"},[s("b-field",{staticClass:"buttons",attrs:{position:"is-centered",grouped:""}},[s("b-button",{attrs:{type:"is-primary",rounded:""},on:{click:e.computeScore}},[e._v("คำนวณคะแนน")]),s("b-button",{attrs:{type:"is-primary",rounded:""},on:{click:e.reset}},[e._v("เริ่มใหม่อีกครั้ง")])],1),s("b-message",{directives:[{name:"show",rawName:"v-show",value:this.showScore,expression:"this.showScore"}],attrs:{type:"is-primary",expanded:""}},[e._v("คะแนนรวมของคุณคือ "+e._s(this.score))]),s("b-field",{staticClass:"buttons",attrs:{position:"is-centered",grouped:""}},[s("b-button",{attrs:{size:"is-small","icon-left":"arrow-expand-up"},on:{click:e.backToTop}},[e._v("กลับขึ้นด้านบน")])],1)],1)])},S=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[e._v("แบบทดสอบทางความคิด และพฤติกรรมการกิน")]),s("h2",{staticClass:"subtitle"},[e._v("จริงๆ แล้วโลกดีขึ้นทุกวัน คุณเชื่อหรือไม่?")])])])}],O=(s("4de4"),s("4160"),s("159b"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"box"},[s("b-field",{attrs:{label:e.questionLabel}}),e._l(e.questionObject.choices,(function(t){return s("b-field",{key:t.choiceId,staticClass:"buttons"},[s("b-radio-button",{attrs:{"native-value":t.choiceId},on:{click:e.fireChanges},model:{value:e.questionObject.userAnswer,callback:function(t){e.$set(e.questionObject,"userAnswer",t)},expression:"questionObject.userAnswer"}},[e._v(e._s(t.choiceId+". "+t.text))])],1)})),s("b-message",{directives:[{name:"show",rawName:"v-show",value:e.questionObject.showAnswer,expression:"questionObject.showAnswer"}],attrs:{type:"is-danger"}},[e._v(" คำตอบที่ถูกคือ "+e._s(e.questionObject.correctedAnswer)+" ")])],2)}),j=[],k={props:["value"],data:function(){return{questionObject:this.value}},methods:{fireChanges:function(){this.$emit("input",this.questionObject)}},computed:{questionLabel:function(){return this.questionObject.questionId+". "+this.questionObject.questionText}}},E=k,$=Object(u["a"])(E,O,j,!1,null,null,null),M=$.exports,L={questions:[{questionId:1,questionText:"ในประเทศทั้งหมดในโลกที่มีรายได้น้อยทุกวันนี้ มีเด็กผู้หญิงจำนวนเท่าไหร่ ที่จบการศึกษาระดับประถม",choices:[{choiceId:"A",text:"ร้อยละ 20"},{choiceId:"B",text:"ร้อยละ 40"},{choiceId:"C",text:"ร้อยละ 60"}],showAnswer:!1,correctedAnswer:"C",userAnswer:""},{questionId:2,questionText:"ประชากรส่วนใหญ่ของโลกอาศัยอยู่ใน",choices:[{choiceId:"A",text:"ประเทศที่มีรายได้น้อย"},{choiceId:"B",text:"ประเทศที่มีรายได้ปานกลาง"},{choiceId:"C",text:"ประเทศที่มีรายได้สูง"}],showAnswer:!1,correctedAnswer:"B",userAnswer:""},{questionId:3,questionText:"20 ปีที่ผ่านมา สัดส่วนของประชากรโลกที่อยู่อย่างยากจนข้นแค้นมีจำนวน...",choices:[{choiceId:"A",text:"เพิ่มขึ้นเกือบเท่าตัว"},{choiceId:"B",text:"ใกล้เคียงเดิม"},{choiceId:"C",text:"ลดลงเกือบครึ่งหนึ่ง"}],showAnswer:!1,correctedAnswer:"C",userAnswer:""},{questionId:4,questionText:"อายุเฉลี่ยของคนในโลกปัจจุบันนี้อยู่ที่",choices:[{choiceId:"A",text:"50 ปี"},{choiceId:"B",text:"60 ปี"},{choiceId:"C",text:"70 ปี"}],showAnswer:!1,correctedAnswer:"C",userAnswer:""},{questionId:5,questionText:"ทุกวันนี้มีเด็กอายุ 0 - 15 ปีจำนวนสองพันล้านคนบนโลก ในปี 2100 จะมีเด็กจำนวนเท่าไหร่ตามข้อมูลขององค์การสหประชาชาติ",choices:[{choiceId:"A",text:"สี่พันล้านคน"},{choiceId:"B",text:"สามพันล้านคน"},{choiceId:"C",text:"สองพันล้านคน"}],showAnswer:!1,correctedAnswer:"C",userAnswer:""},{questionId:6,questionText:"องค์การสหประชาชาติคาดการณ์ว่าในปี 2100 ประชากรโลกจะเพิ่มขึ้นอีกสี่พันล้านคน ด้วยเหตุผลหลักคือ",choices:[{choiceId:"A",text:"มีเด็ก​ (อายุน้อยกว่า 15 ปี) จำนวนมากขึ้น"},{choiceId:"B",text:"มีผู้ใหญ่ (อายุ 15 - 17 ปี) จำนวนมากขึ้น"},{choiceId:"C",text:"มีคนสูงอายุ (อายุมากกว่า 75 ปี) จำนวนมากขึ้น"}],showAnswer:!1,correctedAnswer:"B",userAnswer:""},{questionId:7,questionText:"จำนวนคนที่เสียชีวิตจากภัยธรรมชาติในช่วงหนึ่งร้อยปีที่ผ่านมาเปลี่ยนแปลงไปอย่างไร",choices:[{choiceId:"A",text:"เพิ่มขึ้นมากกว่าเท่าตัว"},{choiceId:"B",text:"ใกล้เคียงเดิม"},{choiceId:"C",text:"ลดลงน้อยกว่าครึ่ง"}],showAnswer:!1,correctedAnswer:"C",userAnswer:""},{questionId:8,questionText:"ปัจจุบันมีคนอาศัยอยู่บนโลกประมาณเจ็ดพันล้านคน ภาพใดแสดงที่อยู่ของคนบนโลกได้ดีที่สุด (ภาพ 1 คนแทนประชากรหนึ่งพันล้านคน)",choices:[{choiceId:"A",text:"ภาพแรก"},{choiceId:"B",text:"ภาพที่สอง"},{choiceId:"C",text:"ภาพที่สาม"}],showAnswer:!1,correctedAnswer:"A",userAnswer:""},{questionId:9,questionText:"มีเด็กอายุ 1 ปีจำนวนเท่าไหร่ที่ได้รับวัคซีนป้องกันโรคในปัจจุบัน",choices:[{choiceId:"A",text:"ร้อยละ 20"},{choiceId:"B",text:"ร้อยละ 50"},{choiceId:"C",text:"ร้อยละ 80"}],showAnswer:!1,correctedAnswer:"C",userAnswer:""},{questionId:10,questionText:"ผู้ชายอายุ 30 ปีทั่วโลกเคยผ่านการเรียนหนังสือในโรงเรียนเฉลี่ย 10 ปี ผู้หญิงอายุเท่ากันมีเวลาเรียนเฉลี่ยเท่าไหร่",choices:[{choiceId:"A",text:"9 ปี"},{choiceId:"B",text:"6 ปี"},{choiceId:"C",text:"3 ปี"}],showAnswer:!1,correctedAnswer:"A",userAnswer:""},{questionId:11,questionText:"ในปี 1996 เสือ หมีแพนด้า และแรดดำถูกจัดเป็นสัตว์ที่ใกล้สูญพันธุ์ สัตว์ในกลุ่มนี้ปัจจุบันยังเหลือกี่ชนิดที่ใกล้สูญพันธุ์",choices:[{choiceId:"A",text:"2 ชนิด"},{choiceId:"B",text:"1 ชนิด"},{choiceId:"C",text:"0 ชนิด"}],showAnswer:!1,correctedAnswer:"C",userAnswer:""},{questionId:12,questionText:"ประชากรโลกจำนวนเท่าไหร่ที่เข้าถึงไฟฟ้า",choices:[{choiceId:"A",text:"ร้อยละ 20"},{choiceId:"B",text:"ร้อยละ 50"},{choiceId:"C",text:"ร้อยละ 80"}],showAnswer:!1,correctedAnswer:"C",userAnswer:""},{questionId:13,questionText:"ผู้เชี่ยวชาญด้านภูมิอากาศโลกเชื่อว่า อีก 100 ปีข้างหน้าอุณหภูมิเฉลี่ยของโลกจะ...",choices:[{choiceId:"A",text:"เพิ่มขึ้น"},{choiceId:"B",text:"เท่าเดิม"},{choiceId:"C",text:"ลดลง"}],showAnswer:!1,correctedAnswer:"A",userAnswer:""}]},P={components:{MulitpleChoices:M,NavBar:y["default"]},data:function(){return{score:0,showScore:!1,questionItems:L.questions}},methods:{computeScore:function(){this.score=this.questionItems.filter((function(e){return e.correctedAnswer===e.userAnswer})).length,this.questionItems.forEach((function(e){return e.showAnswer=!0})),this.showScore=!0,this.$buefy.dialog.alert({type:"is-primary",title:"คะแนนรวม",message:"<b>คะแนนรวมของคุณคือ "+this.score+"</b>",confirmText:"ปิดหน้าต่างนี้!",onConfirm:this.goToBottom})},reset:function(){this.questionItems.forEach((function(e){e.userAnswer="",e.showAnswer=!1})),this.showScore=!1},backToTop:function(){window.scroll({top:0,behavior:"smooth"})},goToBottom:function(){window.scrollTo(0,document.body.scrollHeight||document.documentElement.scrollHeight)}}},N=P,H=Object(u["a"])(N,g,S,!1,null,null,null),G=H.exports,X=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"columns is-multiline is-desktop"},[s("div",{staticClass:"column is-full"},[s("div",{staticClass:"hero is-small is-primary"},[s("div",{staticClass:"hero-head"},[s("nav-bar")],1),e._m(0)])]),s("div",{staticClass:"column is-full"},e._l(e.questionItems,(function(t){return s("mulitple-choice-panel",{key:t.questionId,model:{value:e.questionItems[t.questionId-1],callback:function(s){e.$set(e.questionItems,t.questionId-1,s)},expression:"questionItems[question.questionId-1]"}})})),1),s("div",{staticClass:"column is-full"},[s("b-field",{staticClass:"buttons",attrs:{position:"is-centered",grouped:""}},[s("b-button",{attrs:{type:"is-primary",rounded:""},on:{click:e.computeScore}},[e._v("คำนวณคะแนน")]),s("b-button",{attrs:{type:"is-primary",rounded:""},on:{click:e.reset}},[e._v("เริ่มใหม่อีกครั้ง")])],1)],1),e._m(1),s("div",{staticClass:"column"},[s("b-message",{directives:[{name:"show",rawName:"v-show",value:this.showScore,expression:"this.showScore"}],attrs:{type:"is-primary",expanded:""}},[e._v("คะแนนรวมของคุณคือ "+e._s(e.fourLetterScore))]),s("b-field",{staticClass:"buttons",attrs:{position:"is-centered",grouped:""}},[s("b-button",{attrs:{size:"is-small is-tall-container","icon-left":"arrow-expand-up"},on:{click:e.backToTop}},[e._v("กลับขึ้นด้านบน")])],1)],1)])},z=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[e._v("แบบทดสอบทางความคิด และพฤติกรรมการกิน")]),s("h2",{staticClass:"subtitle"},[e._v("MBTI อย่าคิดว่าฉันเหมือนเขา อย่าคิดว่าเราเหมือนกัน")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"column is-full"},[s("footer",{staticClass:"footer"},[s("div",{staticClass:"content has-text-centered"},[s("p",[s("strong",[e._v("อ้างอิงคำถามจาก")]),e._v(" กิตติมา หงส์ศิริกาญจน์. (2559), Which one is real? What is your true type in MBTI อย่าคิดว่าฉันเหมือนเขา อย่าคิดว่าเราเหมือนกัน, ทริปเพิ้ล เอ็ดดูเคชั่น, กรุงเทพฯ.")])])])])}],F=(s("fb6a"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-parent"},[s("article",{staticClass:"tile is-child box notification is-primary"},[s("p",{staticClass:"subtitle"},[e._v(e._s(e.questionLabel))])])])]),s("div",{staticClass:"tile is-ancestor"},e._l(e.questionObject.choices,(function(t){return s("div",{key:t.choiceId,staticClass:"tile is-parent"},[s("article",{staticClass:"tile is-child box"},[s("b-radio",{attrs:{"native-value":t.choiceId},on:{click:e.fireChanges},model:{value:e.questionObject.userAnswer,callback:function(t){e.$set(e.questionObject,"userAnswer",t)},expression:"questionObject.userAnswer"}},[e._v(e._s(t.text))])],1)])})),0),s("b-message",{directives:[{name:"show",rawName:"v-show",value:e.questionObject.showAnswer,expression:"questionObject.showAnswer"}],attrs:{type:"is-danger"}},[e._v("คำตอบที่ถูกคือ "+e._s(e.questionObject.correctedAnswer))])],1)}),J=[],W={props:["value"],data:function(){return{questionObject:this.value}},methods:{fireChanges:function(){this.$emit("input",this.questionObject)}},computed:{questionLabel:function(){return this.questionObject.questionId+". "+this.questionObject.questionText}}},D=W,K=Object(u["a"])(D,F,J,!1,null,null,null),Q=K.exports,R={questions:[{questionId:1,questionText:"คุณต้องการเพื่อนแบบไหนมากกว่ากันระหว่าง...",choices:[{choiceId:"A",text:"คนที่ดูเป็นมิตร สดใส ร่าเริง เข้ากับคนได้ไม่ยาก"},{choiceId:"B",text:"คนที่มองตาก็รู้ใจและเข้าใจคุณว่าบางครั้งชั้นก็อยากอยู่คนเดียวบ้าง"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:2,questionText:"เมื่อเพื่อนของคุณชวนให้คุณไปงานสังสรรค์ คุณชอบเพื่อนที่...",choices:[{choiceId:"A",text:"เฮฮาพาไปแล้วขำ ๆ คุยกับใครก็ได้ ชอบเจ๊าะแจ๊ะคนนั้นคนนี้"},{choiceId:"B",text:"ไม่กดดันให้ฉันต้องไปคุยกับคนนั้นคนนี้"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:3,questionText:"เมื่ออยู่ในกลุ่มของเพื่อน คุณชอบที่จะ...",choices:[{choiceId:"A",text:"เป็นจุดสนใจและเป็นจุดเด่นภายในกลุ่ม"},{choiceId:"B",text:"เป็นคน ๆ หนึ่งที่คอยรับฟังและสังเกตความเป็นไปของเพื่อนรอบข้าง"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:4,questionText:"เมื่ออยู่ในงานสังสรรค์ คุณมักจะอยู่ส่วนไหนของงาน?",choices:[{choiceId:"A",text:"อยู่หน้าเวที หรือส่วนที่มีคนอยู่เป็นกลุ่มเยอะ ๆ"},{choiceId:"B",text:"อยู่ตรงมุมสงบของงาน ที่ ๆ ไม่ค่อยมีคนพลุกพล่านและเสียงไม่ดังมาก"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:5,questionText:"เมื่อคุณต้องอยู่บ้านคนเดียวเวลานาน ๆ หลายวันมันทำให้คุณ...",choices:[{choiceId:"A",text:"รู้สึกเหนื่อยและคิดว่าฉันคงต้องออกไปเดินเล่นข้างนอก"},{choiceId:"B",text:"เหมือนกับได้เติมพลัง ได้อยู่คนเดียว ทำกิจกรรมที่อยากทำคนเดียว"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:6,questionText:"เมื่อคุณต้องอยู่กับกลุ่มคนเป็นจำนวนมากคุณรู้สึกว่า...",choices:[{choiceId:"A",text:"การที่มีเสียงจอแจบ้างทำให้บรรยากาศดูครึกครื้นดี"},{choiceId:"B",text:"รำคาญ อยากจะให้อยู่ในความสงบ เงียบ ๆ มากกว่า"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:7,questionText:"โดยปกติคุณคิดว่า ตัวเป็นคนที่...",choices:[{choiceId:"A",text:"พูดมากกว่าฟัง"},{choiceId:"B",text:"ฟังมากกว่าพูด"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:8,questionText:"เมื่อเวลาที่คุณต้องทำงานที่ต้องใช้สมาธิมาก ๆ คุณพบว่าตัวเองเป็นคนที่...",choices:[{choiceId:"A",text:"เสียสมาธิได้ง่าย"},{choiceId:"B",text:"มีสมาธิในการทำงานดี"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:9,questionText:"โดยปกติคุณเป็นคนที่รู้จักเพื่อนใหม่อย่างไร?",choices:[{choiceId:"A",text:"มักจะเข้าไปแนะนำตัวเองและเริ่มบทสนทนากับผู้อื่น"},{choiceId:"B",text:"มักรู้จักคนอื่นจากการแนะนำของเพื่อนที่รู้จักอีกที"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:10,questionText:"เวลาที่คุณรู้สึกเหนื่อย คุณจะเติมพลังด้วยการ...",choices:[{choiceId:"A",text:"สังสรรค์ หากิจกรรมคลายเครียดนอกบ้าน"},{choiceId:"B",text:"หยุดพักโดยลำพัง"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:11,questionText:"เวลาที่คุยประชุมเรื่องโครงงานต่าง ๆ ที่ผ่านมาคุณมักจะรู้สึกรำคาญคนที่...",choices:[{choiceId:"A",text:"เสนอความคิดเห็นมากมายแต่ไม่สามารถจับต้องอะไรได้เลย"},{choiceId:"B",text:"ทำให้เสียเวลาคุยเรื่องรายละเอียดปลีกย่อยในการแบ่งหน้าที่รับผิดชอบอย่างถี่ยิบ"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:12,questionText:"เวลาที่ได้รับงานมาคุณจะมีการจัดการทำงานในหัวอย่างไร?",choices:[{choiceId:"A",text:"เป็นขั้นเป็นตอน ไล่จาก 1 ไป 2 ไป 3"},{choiceId:"B",text:"ไม่ต้องมีแบบแผนใด ๆ ทั้งสิ้น คิดอะไรได้ก็เชื่อมโยงต่อ ๆ กันไป"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:13,questionText:"คุณเชื่อถือคนที่...",choices:[{choiceId:"A",text:"สามารถทำในสิ่งที่พูดได้จริง"},{choiceId:"B",text:"มีความคิดสร้างสรรค์ กล้าฉีกตัวเองออกจากกรอบ"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:14,questionText:"คุณให้ความสำคัญอะไรมากกว่ากันระหว่าง...",choices:[{choiceId:"A",text:"ปัจจุบัน"},{choiceId:"B",text:"อนาคต"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:15,questionText:"เมื่อคุณต้องเรียนรู้สิ่งใหม่ ๆ คุณจะเรียนรู้ได้ดีเมื่อ...",choices:[{choiceId:"A",text:"ได้สังเกตว่าคนอื่นทำอย่างไร และนำมาปรับใช้เป็นแบบฉบับของตัวเอง"},{choiceId:"B",text:"ลองแนวคิดใหม่ที่ฉีกจากสิ่งที่มีมาก่อนอย่างสิ้นเชิง"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:16,questionText:"คุณชอบโครงการที่มีลักษณะใดมากกว่ากันระหว่าง...",choices:[{choiceId:"A",text:"โครงการที่มีหลักการแนวคิดเป็นระบบ มีขั้นตอนที่แน่นอน"},{choiceId:"B",text:"โครงการใหม่ ๆ ที่ไม่เคยมีใครทำ เป็นโครงการที่ไม่ธรรมดา และสร้างแรงบันดาลใจได้อย่างแท้จริง"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:17,questionText:"คุณคิดว่าหัวหน้าแบบไหนที่คุณจะให้ความนับถือมากกว่ากัน?",choices:[{choiceId:"A",text:"หัวหน้าที่มีประสบการณ์ทำงานจริงมาอย่างโชกโชน"},{choiceId:"B",text:"หัวหน้าที่สามารถคาดการณ์ถึงความเป็นไปได้ที่กำลังจะเกิดขึ้นในอนาคตได้อย่างแม่นยำ"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:18,questionText:"เวลาที่หัวหน้าสั่งงาน คุณจะรู้สึกหงุดหงิดเมื่อเจอหัวหน้าสั่งงานแบบใดมากกว่ากันระหว่าง...",choices:[{choiceId:"A",text:"สั่งแบบรวม ๆ ให้ข้อมูลกว้าง ๆ โดยไม่เจาะจงว่าต้องการอะไรกันแน่ ชอบท้าทายความคิดให้คิดเอาเองว่าต้องการอะไร"},{choiceId:"B",text:"สั่งแบบบอกข้อกำหนดในการทำโครงการมาอย่างถี่ยิบ และตรวจเช็คความถูกต้องในทุกรายละเอียด"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:19,questionText:"คุณคิดว่าอะไรเป็นปัจจัยสำคัญในการจะประสบความสำเร็จในชีวิต?",choices:[{choiceId:"A",text:"การทำสิ่งที่ถูกต้อง สมเหตุสมผล"},{choiceId:"B",text:"การเป็นคนมีความคิดสร้างสรรค์"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:20,questionText:"เมื่อถึงเวลาที่ต้องตัดสินใจว่าจะทำอะไร คุณเชื่ออะไรมากกว่ากันระหว่าง...",choices:[{choiceId:"A",text:"ประสบการณ์ในอดีตและข้อมูลที่สนับสนุน"},{choiceId:"B",text:"สัญชาตญาณ ลางสังหรณ์"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:21,questionText:"เวลาที่คุณอยู่กับกลุ่มเพื่อนที่ทำงาน คุณจะหงุดหงิดเมื่อพวกเขาคุยกันเรื่องอะไร?",choices:[{choiceId:"A",text:"เรื่องส่วนตัวเกี่ยวกับความสัมพันธ์ของคนรอบตัวของพวกเขา ซึ่งนับเป็นเรื่องไร้สาระและเป็นเรื่องส่วนตัวที่ไม่ควรเอามาป่าวประกาศให้ทุกคนรู้"},{choiceId:"B",text:"เอาแต่คุยเรื่องงานและความคืบหน้าของหน้าที่ความรับผิดชอบที่เขาต้องรับผิดชอบ"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:22,questionText:"ถ้าคุณเป็นหัวหน้าที่ต้องคอยแบ่งงาน คุณจะแบ่งงานอย่างไร?",choices:[{choiceId:"A",text:"แบ่งหน้าที่ตามความรับผิดชอบ และหัวข้อที่แต่ละคนต้องรับไปทำ"},{choiceId:"B",text:"แบ่งตามความพร้อมและความสามารถของแต่ละคนว่าใครชอบที่จะทำหัวข้อไหนบ้าง"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:23,questionText:"คุณคิดว่าคุณเป็นคนที่...",choices:[{choiceId:"A",text:"ใจแข็ง"},{choiceId:"B",text:"ใจอ่อน"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:24,questionText:"เมื่ออยู่ในสถานการณ์ที่เพื่อนสองคนทะเลาะกัน คุณคิดว่ามันจะดีกว่าถ้าทั้งสองคน...",choices:[{choiceId:"A",text:"คุยกันให้เคลียร์ไปเลยว่าเกิดอะไรขึ้น และนับจากนี้จะทำอย่างไรต่อไป"},{choiceId:"B",text:"ประนีประนอมค่อย ๆ พูด ค่อย ๆ จากัน ปรับความเข้าใจกันดี ๆ จะดีกว่า"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:25,questionText:"เมื่อคุณรู้ว่าเพื่อนของคุณทำผิดกฎและถูกจับได้ จึงถูกทำโทษ ลึก ๆ แล้วคุณคิดว่า...",choices:[{choiceId:"A",text:"ก็เธอผิด เธอก็ควรที่จะรับผิดชอบในสิ่งที่เธอทำไปอยู่แล้ว"},{choiceId:"B",text:"สงสาร เห็นใจ เราน่าจะฟังเหตุผลส่วนตัวของเขาก่อนนะ เขาไม่น่าได้รับโทษที่รุนแรงขนาดนี้เลย"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:26,questionText:"สำหรับคุณแล้ว คำว่าความยุติธรรมหมายถึงอะไรระหว่าง...",choices:[{choiceId:"A",text:"ทุกคนต้องเท่ากัน ถ้าทำอย่างเดียวกันก็ควรได้รับผลเท่ากัน"},{choiceId:"B",text:"ทุกคนไม่เท่ากัน ความพยายามไม่เท่ากัน ความใส่ใจตั้งใจไม่เท่ากัน ต่อให้ผลออกมาเท่ากัน รางวัลก็ไม่ควรเท่ากัน"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:27,questionText:"เมื่อคุณต้องตัดสินใจเรื่องอะไรสักอย่าง คุณจะเชื่อ...",choices:[{choiceId:"A",text:"ข้อมูลเหตุผลในการตัดสินใจ"},{choiceId:"B",text:"ความรู้สึก อารมณ์ และความสัมพันธ์ในการตัดสินใจ"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:28,questionText:"เมื่ออยู่ในสถานการณ์ที่คุณต้องพูดอะไรบางอย่างออกไป คุณจะพูดสิ่งที่...",choices:[{choiceId:"A",text:"เป็นความจริง เป็นความถูกต้อง มากกว่าจะพูดในสิ่งที่เหมาะสม"},{choiceId:"B",text:"พูดในสิ่งที่เหมาะสม มากกว่าที่จะพูดในสิ่งที่เป็นความจริง"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:29,questionText:"ในการอยู่ร่วมกันในสังคม คุณคิดว่าสิ่งที่สำคัญคือการที่เราแต่ละคนต้อง...",choices:[{choiceId:"A",text:"ทำสิ่งที่ถูกต้อง สมเหตุสมผล"},{choiceId:"B",text:"เป็นคนมีความคิดสร้างสรรค์"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:30,questionText:"เวลาที่คุณรู้ว่าเพื่อนมีปัญหา คุณมักจะ...",choices:[{choiceId:"A",text:"วิเคราะห์ว่าเกิดอะไรขึ้น และทำการเสนอแนวทางที่ถูกต้องให้"},{choiceId:"B",text:"ก้าวเข้าไปอยู่กับสถานการณ์นั้นด้วย ชนิดที่ว่าเพื่อนเจ็บเราก็เจ็บ"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:31,questionText:"คุณคิดว่าอะไรเป็นสำคัญในการดำเนินชีวิตมากกว่ากันระหว่าง...",choices:[{choiceId:"A",text:"การใช้ชีวิตอย่างมีเป้าหมาย รู้ว่าเรากำลังทำอะไร และกำลังจะไปที่ไหน"},{choiceId:"B",text:"การใช้ชีวิตโดยรู้จักปรับตัวเข้ากับสถานการณ์รอบตัวให้ได้"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:32,questionText:"ในการทำโปรเจ็กต์ต่าง ๆ คุณมักจะเริ่มต้นทำเมื่อใด?",choices:[{choiceId:"A",text:"เริ่มต้นทำเลย และค่อย ๆ ทยอยทำไปเรื่อย ๆ"},{choiceId:"B",text:"เก็บข้อมูลก่อนว่าอะไรดีไม่ดี เอาไว้ใกล้ ๆ ถึงเวลาก่อนแล้วค่อยทำ"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:33,questionText:"คุณคิดว่าคุณเป็นคนที่...",choices:[{choiceId:"A",text:"ใจแข็ง"},{choiceId:"B",text:"ใจอ่อน"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:34,questionText:"คุณมักจะทำงานเสร็จพร้อมส่งหัวหน้าได้เมื่อใด",choices:[{choiceId:"A",text:"เสร็จก่อนเวลาสักพัก เพื่อให้คนอื่นลองอ่านและให้คำแนะนำก่อนส่ง"},{choiceId:"B",text:"เสร็จทันเวลาเป๊ะ ทำเสร็จแบบสด ๆ ร้อน ๆ"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:35,questionText:"ลักษณะการทำงานของคุณเป็นอย่างไร ระหว่าง...",choices:[{choiceId:"A",text:"มีความขยันที่คงเส้นคงวา ทยอยทำไปเรื่อย ๆ ไม่ชอบภาระในช่วงท้าย"},{choiceId:"B",text:"ทุ่มเทเป็นช่วง ๆ เวลาไหนส่งค่อยมาไล่ทำทีเดียวทั้งหมด"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:36,questionText:"ถ้าคุณได้เริ่มทำอะไรไปแล้วครึ่งหนึ่ง และต้องล้มเลิกกลางคัน คุณจะรู้สึกว่า...",choices:[{choiceId:"A",text:"โกรธ หงุดหงิดที่ทำให้แผนในการทำงานที่ผ่านมาต้องล้มเลิกไปหมด"},{choiceId:"B",text:"รู้สึกแย่บ้างแต่ก็ไม่เป็นไร เรื่องนี้ไม่ต้องทำแล้วก็เรื่องใหม่ทำก็สิ้นเรื่อง"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:37,questionText:"ถ้าเพื่อนจะชวนคุณไปเที่ยวต่างจังหวัดด้วยกัน คุณหวังว่าเขาจะบอกคุณล่วงหน้านานสักขนาดไหน?",choices:[{choiceId:"A",text:"บอกก่อนสักอาทิตย์นึงก็ดีนะจะได้เตรียมตัวถูกว่าไปได้หรือเปล่า"},{choiceId:"B",text:"บอกมาเลย ถ้าพรุ่งนี้ว่างก็ไปเลยก็ได้นะไม่ต้องเตรียมตัวอะไรมากมาย ก็เราไปเที่ยวกันนี่นา"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:38,questionText:"เวลาหัวหน้าขอให้คุณส่งหัวข้อโปรเจ็กต์ที่คุณอยากจะทำ ในตอนนี้คุณจะ...",choices:[{choiceId:"A",text:"รู้สึกดีขึ้นเมื่อหาหัวข้อได้แล้วและสรุปกับหัวหน้าไปเลยว่าจะทำเรื่องอะไร"},{choiceId:"B",text:"รู้สึกดีกว่าถ้าหัวหน้าจะไม่มากดดันเอาเวลานี้ ขอดูข้อมูลทั้งหลายก่อน"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:39,questionText:"ในการทำงานเป็นทีม คุณค้นพบว่าตัวเองเป็นคนที่...",choices:[{choiceId:"A",text:"เก่งเรื่องการปิดงาน และสรุปงานให้เสร็จก่อนเวลา"},{choiceId:"B",text:"เก่งเรื่องการเปิดประเด็น เริ่มต้นทำสิ่งต่าง ๆ"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:40,questionText:"มักจะมีคนบอกว่าคุณเป็นคนที่มีพรสวรรค์ในการ...",choices:[{choiceId:"A",text:"จัดการ วางแผน"},{choiceId:"B",text:"ปรับตัวเข้ากับสถานการณ์"}],showAnswer:!1,correctedAnswer:"",userAnswer:""}]},U={components:{MulitpleChoicePanel:Q,NavBar:y["default"]},data:function(){return{score:[{start:0,stop:10,letterA:"E",letterB:"I",priorityLetter:"I",sumA:0,sumB:0,result:""},{start:10,stop:20,letterA:"S",letterB:"N",priorityLetter:"N",sumA:0,sumB:0,result:""},{start:20,stop:30,letterA:"T",letterB:"F",priorityLetter:"F",sumA:0,sumB:0,result:""},{start:30,stop:40,letterA:"J",letterB:"P",priorityLetter:"P",sumA:0,sumB:0,result:""}],fourLetterScore:"XXXX",showScore:!1,questionItems:R.questions}},methods:{computeScore:function(){var e=this;this.score.forEach((function(t){e.questionItems.slice(t.start,t.stop).forEach((function(e){"A"===e.userAnswer&&t.sumA++,"B"===e.userAnswer&&t.sumB++})),t.result="X",t.sumA>t.sumB&&(t.result=t.letterA),t.sumB>t.sumA&&(t.result=t.letterB),t.sumA===t.sumB&&0!=t.sumA&&0!=t.sumB&&(t.result=t.priorityLetter)})),this.fourLetterScore="",this.score.forEach((function(t){return e.fourLetterScore=e.fourLetterScore+t.result})),this.showScore=!0,this.$buefy.dialog.alert({type:"is-primary",title:"ผลการประเมิน MBTI",message:"<b>Type Indicator ของคุณคือ "+this.fourLetterScore+"</b>",confirmText:"ตกลง!",onConfirm:this.goToBottom})},reset:function(){this.questionItems.forEach((function(e){e.userAnswer="",e.showAnswer=!1})),this.fourLetterScore="",this.showScore=!1},backToTop:function(){window.scroll({top:0,behavior:"smooth"})},goToBottom:function(){window.scrollTo(0,document.body.scrollHeight||document.documentElement.scrollHeight)}}},V=U,Y=Object(u["a"])(V,X,z,!1,null,null,null),Z=Y.exports,ee=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"columns is-multiline is-desktop"},[s("div",{staticClass:"column is-full"},[s("section",{staticClass:"hero is-primary is-small"},[s("nav-bar"),e._m(0)],1)]),s("div",{staticClass:"column is-full"},e._l(e.questionItems,(function(t){return s("mulitple-choice-panel",{key:t.questionId,model:{value:e.questionItems[t.questionId-1],callback:function(s){e.$set(e.questionItems,t.questionId-1,s)},expression:"questionItems[question.questionId-1]"}})})),1),s("div",{staticClass:"column is-full"},[s("b-field",{staticClass:"buttons",attrs:{position:"is-centered",grouped:""}},[s("b-button",{attrs:{type:"is-primary",rounded:""},on:{click:e.computeScore}},[e._v("ประเมินกรอบคิด")]),s("b-button",{attrs:{type:"is-primary",rounded:""},on:{click:e.reset}},[e._v("เริ่มใหม่อีกครั้ง")])],1),s("b-message",{directives:[{name:"show",rawName:"v-show",value:this.showScore,expression:"this.showScore"}],attrs:{type:"is-primary",expanded:""}},[e._v(" "+e._s(this.score.message))]),s("b-field",{staticClass:"buttons",attrs:{position:"is-centered",grouped:""}},[s("b-button",{attrs:{size:"is-small","icon-left":"arrow-expand-up"},on:{click:e.backToTop}},[e._v("กลับขึ้นด้านบน")])],1)],1)])},te=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[e._v("แบบทดสอบทางความคิด และพฤติกรรมการกิน")]),s("h2",{staticClass:"subtitle"},[e._v("พัฒนากรอบคิด ใช้ความคิดเอาชนะโชคชะตา")])])])}],se=(s("a623"),s("45fc"),{questions:[{questionId:1,questionText:"โปรดเลือก...",choices:[{choiceId:"A",text:"ท่านรู้ว่าตัวเองเป็นคนแบบไหน และไม่มีอะไรสามารถเปลี่ยนแปลงมันได้"},{choiceId:"B",text:"ไม่ว่าท่านจะเป็นคนแบบไหน ท่านสามารถเปลี่ยนแปลงตัวเองได้อย่างมหาศาล"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:2,questionText:"โปรดเลือก...",choices:[{choiceId:"A",text:"ท่านสามารถเปลี่ยนแปลงวิธีทำสิ่งต่าง ๆ ได้ แต่ตัวตนของท่านซึ่งเป็นส่วนสำคัญนั้นไม่สามารถเปลี่ยนแปลงได้จริง ๆ"},{choiceId:"B",text:"ท่านสามารถเปลี่ยนแปลงคุณสมบัติพื้นฐานเกี่ยวกับตัวตนของท่านได้เสมอ"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:3,questionText:"โปรดเลือก...",choices:[{choiceId:"A",text:"ความฉลาดเป็นคุณสมบัติที่ติดตัวมาแต่เกิด ซึ่งไม่สามารถเปลี่ยนแปลงได้"},{choiceId:"B",text:"ไม่ว่าคุณจะฉลาดแค่ไหน คุณก็สามารถพัฒนาตัวเองให้ฉลาดขึ้นอีกเล็กน้อยได้"}],showAnswer:!1,correctedAnswer:"",userAnswer:""},{questionId:4,questionText:"โปรดเลือก...",choices:[{choiceId:"A",text:"คุณเรียนรู้สิ่งใหม่ ๆ ได้ แต่พัฒนาตัวเองให้ฉลาดขึ้นไม่ได้"},{choiceId:"B",text:"คุณสามารถพัฒนาตัวเองให้ฉลาดขึ้นได้อย่างมหาศาล"}],showAnswer:!1,correctedAnswer:"",userAnswer:""}]}),oe={components:{MulitpleChoicePanel:Q,NavBar:y["default"]},data:function(){return{score:{cognitiveGrowthMindset:!1,traitsGrowthMindset:!1,message:""},showScore:!1,questionItems:se.questions}},methods:{computeScore:function(){this.questionItems.some((function(e){return""===e.userAnswer}))?this.$buefy.dialog.alert({type:"is-warning",title:"คำเตือน",message:"กรุณาตอบคำถามให้ครบทุกข้อ",confirmText:"ปิดหน้าต่างนี้!",onConfirm:this.goToBottom}):(this.score.cognitiveGrowthMindset=this.questionItems.slice(0,2).every((function(e){return"B"===e.userAnswer})),this.score.traitsGrowthMindset=this.questionItems.slice(2,4).every((function(e){return"B"===e.userAnswer})),this.score.message="คุณมีกรอบคิดเกี่ยวกับสติปัญญา"+(this.score.cognitiveGrowthMindset?' "แบบยืดหยุ่น"':'"แบบตายตัว"')+" และกรอบคิดเกี่ยวกับบุคลิกภาพ "+(this.score.traitsGrowthMindset?'"แบบยืดหยุ่น"':'"แบบตายตัว"'),this.$buefy.dialog.alert({type:"is-primary",title:"ผลการประเมิน",message:this.score.message,confirmText:"ปิดหน้าต่างนี้!",onConfirm:this.goToBottom}),this.showScore=!0)},reset:function(){this.questionItems.forEach((function(e){e.userAnswer="",e.showAnswer=!1})),this.showScore=!1},backToTop:function(){window.scroll({top:0,behavior:"smooth"})},goToBottom:function(){window.scrollTo(0,document.body.scrollHeight||document.documentElement.scrollHeight)}}},ie=oe,ce=Object(u["a"])(ie,ee,te,!1,null,null,null),re=ce.exports;o["a"].use(q["a"]);var ne=[{path:"/",component:_},{path:"/factfulness",component:G},{path:"/mbti",component:Z},{path:"/mindset",component:re},{path:"*",component:_}],ue=new q["a"]({mode:"history",routes:ne}),ae=s("289d");o["a"].use(ae["a"]);var de=s("1dce"),he=s.n(de);o["a"].use(he.a),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(d)},store:f,router:ue}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var o=s("9c0c"),i=s.n(o);i.a},"65d3":function(e,t){},9540:function(e,t,s){"use strict";var o=s("a65d"),i=s("18a9"),c=s("2877"),r=Object(c["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=r.exports},"9c0c":function(e,t,s){},a65d:function(e,t,s){"use strict";var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-navbar",[s("template",{slot:"start"},[s("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[e._v("Home")])],1)],2)],1)},i=[];s.d(t,"a",(function(){return o})),s.d(t,"b",(function(){return i}))}});
//# sourceMappingURL=app.80c81f9e.js.map