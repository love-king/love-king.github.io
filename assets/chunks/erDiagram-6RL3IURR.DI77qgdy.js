import{_ as u,d as U,s as kt,g as xt,c as Rt,b as Ot,p as bt,q as Nt,l as X,v as Tt,j as at,u as At,k as Mt,K as vt,Q as St,P as wt}from"../app.C4xsRNQ3.js";import{G as It}from"./graph.DD4I4Fuy.js";import{l as Dt}from"./layout.CzawQWPM.js";import"./framework.NyJcw88s.js";import"./theme.DbjJgHKG.js";import"./baseUniq.DQ2p_69C.js";import"./basePickBy.Cp41Itsj.js";const Lt=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Bt(t){return typeof t=="string"&&Lt.test(t)}const v=[];for(let t=0;t<256;++t)v.push((t+256).toString(16).slice(1));function Ct(t,e=0){return v[t[e+0]]+v[t[e+1]]+v[t[e+2]]+v[t[e+3]]+"-"+v[t[e+4]]+v[t[e+5]]+"-"+v[t[e+6]]+v[t[e+7]]+"-"+v[t[e+8]]+v[t[e+9]]+"-"+v[t[e+10]]+v[t[e+11]]+v[t[e+12]]+v[t[e+13]]+v[t[e+14]]+v[t[e+15]]}function Pt(t){if(!Bt(t))throw TypeError("Invalid UUID");let e;const r=new Uint8Array(16);return r[0]=(e=parseInt(t.slice(0,8),16))>>>24,r[1]=e>>>16&255,r[2]=e>>>8&255,r[3]=e&255,r[4]=(e=parseInt(t.slice(9,13),16))>>>8,r[5]=e&255,r[6]=(e=parseInt(t.slice(14,18),16))>>>8,r[7]=e&255,r[8]=(e=parseInt(t.slice(19,23),16))>>>8,r[9]=e&255,r[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,r[11]=e/4294967296&255,r[12]=e>>>24&255,r[13]=e>>>16&255,r[14]=e>>>8&255,r[15]=e&255,r}function Yt(t){t=unescape(encodeURIComponent(t));const e=[];for(let r=0;r<t.length;++r)e.push(t.charCodeAt(r));return e}const Zt="6ba7b810-9dad-11d1-80b4-00c04fd430c8",Ft="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function Wt(t,e,r){function f(c,_,y,o){var h;if(typeof c=="string"&&(c=Yt(c)),typeof _=="string"&&(_=Pt(_)),((h=_)===null||h===void 0?void 0:h.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let g=new Uint8Array(16+c.length);if(g.set(_),g.set(c,_.length),g=r(g),g[6]=g[6]&15|e,g[8]=g[8]&63|128,y){o=o||0;for(let m=0;m<16;++m)y[o+m]=g[m];return y}return Ct(g)}try{f.name=t}catch{}return f.DNS=Zt,f.URL=Ft,f}function Ut(t,e,r,f){switch(t){case 0:return e&r^~e&f;case 1:return e^r^f;case 2:return e&r^e&f^r&f;case 3:return e^r^f}}function it(t,e){return t<<e|t>>>32-e}function Ht(t){const e=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof t=="string"){const y=unescape(encodeURIComponent(t));t=[];for(let o=0;o<y.length;++o)t.push(y.charCodeAt(o))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);const f=t.length/4+2,c=Math.ceil(f/16),_=new Array(c);for(let y=0;y<c;++y){const o=new Uint32Array(16);for(let h=0;h<16;++h)o[h]=t[y*64+h*4]<<24|t[y*64+h*4+1]<<16|t[y*64+h*4+2]<<8|t[y*64+h*4+3];_[y]=o}_[c-1][14]=(t.length-1)*8/Math.pow(2,32),_[c-1][14]=Math.floor(_[c-1][14]),_[c-1][15]=(t.length-1)*8&4294967295;for(let y=0;y<c;++y){const o=new Uint32Array(80);for(let p=0;p<16;++p)o[p]=_[y][p];for(let p=16;p<80;++p)o[p]=it(o[p-3]^o[p-8]^o[p-14]^o[p-16],1);let h=r[0],g=r[1],m=r[2],k=r[3],x=r[4];for(let p=0;p<80;++p){const O=Math.floor(p/20),b=it(h,5)+Ut(O,g,m,k)+x+e[O]+o[p]>>>0;x=k,k=m,m=it(g,30)>>>0,g=h,h=b}r[0]=r[0]+h>>>0,r[1]=r[1]+g>>>0,r[2]=r[2]+m>>>0,r[3]=r[3]+k>>>0,r[4]=r[4]+x>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,r[0]&255,r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,r[1]&255,r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,r[2]&255,r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,r[3]&255,r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,r[4]&255]}const zt=Wt("v5",80,Ht);var nt=function(){var t=u(function(w,i,n,l){for(n=n||{},l=w.length;l--;n[w[l]]=i);return n},"o"),e=[6,8,10,20,22,24,26,27,28],r=[1,10],f=[1,11],c=[1,12],_=[1,13],y=[1,14],o=[1,15],h=[1,21],g=[1,22],m=[1,23],k=[1,24],x=[1,25],p=[6,8,10,13,15,18,19,20,22,24,26,27,28,41,42,43,44,45],O=[1,34],b=[27,28,46,47],Y=[41,42,43,44,45],Z=[17,34],F=[1,54],M=[1,53],S=[17,34,36,38],N={trace:u(function(){},"trace"),yy:{},symbols_:{error:2,start:3,ER_DIAGRAM:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,entityName:11,relSpec:12,":":13,role:14,BLOCK_START:15,attributes:16,BLOCK_STOP:17,SQS:18,SQE:19,title:20,title_value:21,acc_title:22,acc_title_value:23,acc_descr:24,acc_descr_value:25,acc_descr_multiline_value:26,ALPHANUM:27,ENTITY_NAME:28,attribute:29,attributeType:30,attributeName:31,attributeKeyTypeList:32,attributeComment:33,ATTRIBUTE_WORD:34,attributeKeyType:35,COMMA:36,ATTRIBUTE_KEY:37,COMMENT:38,cardinality:39,relType:40,ZERO_OR_ONE:41,ZERO_OR_MORE:42,ONE_OR_MORE:43,ONLY_ONE:44,MD_PARENT:45,NON_IDENTIFYING:46,IDENTIFYING:47,WORD:48,$accept:0,$end:1},terminals_:{2:"error",4:"ER_DIAGRAM",6:"EOF",8:"SPACE",10:"NEWLINE",13:":",15:"BLOCK_START",17:"BLOCK_STOP",18:"SQS",19:"SQE",20:"title",21:"title_value",22:"acc_title",23:"acc_title_value",24:"acc_descr",25:"acc_descr_value",26:"acc_descr_multiline_value",27:"ALPHANUM",28:"ENTITY_NAME",34:"ATTRIBUTE_WORD",36:"COMMA",37:"ATTRIBUTE_KEY",38:"COMMENT",41:"ZERO_OR_ONE",42:"ZERO_OR_MORE",43:"ONE_OR_MORE",44:"ONLY_ONE",45:"MD_PARENT",46:"NON_IDENTIFYING",47:"IDENTIFYING",48:"WORD"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,5],[9,4],[9,3],[9,1],[9,7],[9,6],[9,4],[9,2],[9,2],[9,2],[9,1],[11,1],[11,1],[16,1],[16,2],[29,2],[29,3],[29,3],[29,4],[30,1],[31,1],[32,1],[32,3],[35,1],[33,1],[12,3],[39,1],[39,1],[39,1],[39,1],[39,1],[40,1],[40,1],[14,1],[14,1],[14,1]],performAction:u(function(i,n,l,d,E,a,V){var s=a.length-1;switch(E){case 1:break;case 2:this.$=[];break;case 3:a[s-1].push(a[s]),this.$=a[s-1];break;case 4:case 5:this.$=a[s];break;case 6:case 7:this.$=[];break;case 8:d.addEntity(a[s-4]),d.addEntity(a[s-2]),d.addRelationship(a[s-4],a[s],a[s-2],a[s-3]);break;case 9:d.addEntity(a[s-3]),d.addAttributes(a[s-3],a[s-1]);break;case 10:d.addEntity(a[s-2]);break;case 11:d.addEntity(a[s]);break;case 12:d.addEntity(a[s-6],a[s-4]),d.addAttributes(a[s-6],a[s-1]);break;case 13:d.addEntity(a[s-5],a[s-3]);break;case 14:d.addEntity(a[s-3],a[s-1]);break;case 15:case 16:this.$=a[s].trim(),d.setAccTitle(this.$);break;case 17:case 18:this.$=a[s].trim(),d.setAccDescription(this.$);break;case 19:case 43:this.$=a[s];break;case 20:case 41:case 42:this.$=a[s].replace(/"/g,"");break;case 21:case 29:this.$=[a[s]];break;case 22:a[s].push(a[s-1]),this.$=a[s];break;case 23:this.$={attributeType:a[s-1],attributeName:a[s]};break;case 24:this.$={attributeType:a[s-2],attributeName:a[s-1],attributeKeyTypeList:a[s]};break;case 25:this.$={attributeType:a[s-2],attributeName:a[s-1],attributeComment:a[s]};break;case 26:this.$={attributeType:a[s-3],attributeName:a[s-2],attributeKeyTypeList:a[s-1],attributeComment:a[s]};break;case 27:case 28:case 31:this.$=a[s];break;case 30:a[s-2].push(a[s]),this.$=a[s-2];break;case 32:this.$=a[s].replace(/"/g,"");break;case 33:this.$={cardA:a[s],relType:a[s-1],cardB:a[s-2]};break;case 34:this.$=d.Cardinality.ZERO_OR_ONE;break;case 35:this.$=d.Cardinality.ZERO_OR_MORE;break;case 36:this.$=d.Cardinality.ONE_OR_MORE;break;case 37:this.$=d.Cardinality.ONLY_ONE;break;case 38:this.$=d.Cardinality.MD_PARENT;break;case 39:this.$=d.Identification.NON_IDENTIFYING;break;case 40:this.$=d.Identification.IDENTIFYING;break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:9,20:r,22:f,24:c,26:_,27:y,28:o},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:16,11:9,20:r,22:f,24:c,26:_,27:y,28:o},t(e,[2,5]),t(e,[2,6]),t(e,[2,11],{12:17,39:20,15:[1,18],18:[1,19],41:h,42:g,43:m,44:k,45:x}),{21:[1,26]},{23:[1,27]},{25:[1,28]},t(e,[2,18]),t(p,[2,19]),t(p,[2,20]),t(e,[2,4]),{11:29,27:y,28:o},{16:30,17:[1,31],29:32,30:33,34:O},{11:35,27:y,28:o},{40:36,46:[1,37],47:[1,38]},t(b,[2,34]),t(b,[2,35]),t(b,[2,36]),t(b,[2,37]),t(b,[2,38]),t(e,[2,15]),t(e,[2,16]),t(e,[2,17]),{13:[1,39]},{17:[1,40]},t(e,[2,10]),{16:41,17:[2,21],29:32,30:33,34:O},{31:42,34:[1,43]},{34:[2,27]},{19:[1,44]},{39:45,41:h,42:g,43:m,44:k,45:x},t(Y,[2,39]),t(Y,[2,40]),{14:46,27:[1,49],28:[1,48],48:[1,47]},t(e,[2,9]),{17:[2,22]},t(Z,[2,23],{32:50,33:51,35:52,37:F,38:M}),t([17,34,37,38],[2,28]),t(e,[2,14],{15:[1,55]}),t([27,28],[2,33]),t(e,[2,8]),t(e,[2,41]),t(e,[2,42]),t(e,[2,43]),t(Z,[2,24],{33:56,36:[1,57],38:M}),t(Z,[2,25]),t(S,[2,29]),t(Z,[2,32]),t(S,[2,31]),{16:58,17:[1,59],29:32,30:33,34:O},t(Z,[2,26]),{35:60,37:F},{17:[1,61]},t(e,[2,13]),t(S,[2,30]),t(e,[2,12])],defaultActions:{34:[2,27],41:[2,22]},parseError:u(function(i,n){if(n.recoverable)this.trace(i);else{var l=new Error(i);throw l.hash=n,l}},"parseError"),parse:u(function(i){var n=this,l=[0],d=[],E=[null],a=[],V=this.table,s="",j=0,lt=0,_t=2,ct=1,Et=a.slice.call(arguments,1),A=Object.create(this.lexer),H={yy:{}};for(var $ in this.yy)Object.prototype.hasOwnProperty.call(this.yy,$)&&(H.yy[$]=this.yy[$]);A.setInput(i,H.yy),H.yy.lexer=A,H.yy.parser=this,typeof A.yylloc>"u"&&(A.yylloc={});var tt=A.yylloc;a.push(tt);var gt=A.options&&A.options.ranges;typeof H.yy.parseError=="function"?this.parseError=H.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function mt(D){l.length=l.length-2*D,E.length=E.length-D,a.length=a.length-D}u(mt,"popStack");function ht(){var D;return D=d.pop()||A.lex()||ct,typeof D!="number"&&(D instanceof Array&&(d=D,D=d.pop()),D=n.symbols_[D]||D),D}u(ht,"lex");for(var I,z,B,et,G={},q,W,dt,J;;){if(z=l[l.length-1],this.defaultActions[z]?B=this.defaultActions[z]:((I===null||typeof I>"u")&&(I=ht()),B=V[z]&&V[z][I]),typeof B>"u"||!B.length||!B[0]){var rt="";J=[];for(q in V[z])this.terminals_[q]&&q>_t&&J.push("'"+this.terminals_[q]+"'");A.showPosition?rt="Parse error on line "+(j+1)+`:
`+A.showPosition()+`
Expecting `+J.join(", ")+", got '"+(this.terminals_[I]||I)+"'":rt="Parse error on line "+(j+1)+": Unexpected "+(I==ct?"end of input":"'"+(this.terminals_[I]||I)+"'"),this.parseError(rt,{text:A.match,token:this.terminals_[I]||I,line:A.yylineno,loc:tt,expected:J})}if(B[0]instanceof Array&&B.length>1)throw new Error("Parse Error: multiple actions possible at state: "+z+", token: "+I);switch(B[0]){case 1:l.push(I),E.push(A.yytext),a.push(A.yylloc),l.push(B[1]),I=null,lt=A.yyleng,s=A.yytext,j=A.yylineno,tt=A.yylloc;break;case 2:if(W=this.productions_[B[1]][1],G.$=E[E.length-W],G._$={first_line:a[a.length-(W||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(W||1)].first_column,last_column:a[a.length-1].last_column},gt&&(G._$.range=[a[a.length-(W||1)].range[0],a[a.length-1].range[1]]),et=this.performAction.apply(G,[s,lt,j,H.yy,B[1],E,a].concat(Et)),typeof et<"u")return et;W&&(l=l.slice(0,-1*W*2),E=E.slice(0,-1*W),a=a.slice(0,-1*W)),l.push(this.productions_[B[1]][0]),E.push(G.$),a.push(G._$),dt=V[l[l.length-2]][l[l.length-1]],l.push(dt);break;case 3:return!0}}return!0},"parse")},T=function(){var w={EOF:1,parseError:u(function(n,l){if(this.yy.parser)this.yy.parser.parseError(n,l);else throw new Error(n)},"parseError"),setInput:u(function(i,n){return this.yy=n||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:u(function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var n=i.match(/(?:\r\n?|\n).*/g);return n?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},"input"),unput:u(function(i){var n=i.length,l=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-n),this.offset-=n;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1&&(this.yylineno-=l.length-1);var E=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===d.length?this.yylloc.first_column:0)+d[d.length-l.length].length-l[0].length:this.yylloc.first_column-n},this.options.ranges&&(this.yylloc.range=[E[0],E[0]+this.yyleng-n]),this.yyleng=this.yytext.length,this},"unput"),more:u(function(){return this._more=!0,this},"more"),reject:u(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:u(function(i){this.unput(this.match.slice(i))},"less"),pastInput:u(function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:u(function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:u(function(){var i=this.pastInput(),n=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+n+"^"},"showPosition"),test_match:u(function(i,n){var l,d,E;if(this.options.backtrack_lexer&&(E={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(E.yylloc.range=this.yylloc.range.slice(0))),d=i[0].match(/(?:\r\n?|\n).*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],l=this.performAction.call(this,this.yy,this,n,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l)return l;if(this._backtrack){for(var a in E)this[a]=E[a];return!1}return!1},"test_match"),next:u(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,n,l,d;this._more||(this.yytext="",this.match="");for(var E=this._currentRules(),a=0;a<E.length;a++)if(l=this._input.match(this.rules[E[a]]),l&&(!n||l[0].length>n[0].length)){if(n=l,d=a,this.options.backtrack_lexer){if(i=this.test_match(l,E[a]),i!==!1)return i;if(this._backtrack){n=!1;continue}else return!1}else if(!this.options.flex)break}return n?(i=this.test_match(n,E[d]),i!==!1?i:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:u(function(){var n=this.next();return n||this.lex()},"lex"),begin:u(function(n){this.conditionStack.push(n)},"begin"),popState:u(function(){var n=this.conditionStack.length-1;return n>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:u(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:u(function(n){return n=this.conditionStack.length-1-Math.abs(n||0),n>=0?this.conditionStack[n]:"INITIAL"},"topState"),pushState:u(function(n){this.begin(n)},"pushState"),stateStackSize:u(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:u(function(n,l,d,E){switch(d){case 0:return this.begin("acc_title"),22;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),24;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 10;case 8:break;case 9:return 8;case 10:return 28;case 11:return 48;case 12:return 4;case 13:return this.begin("block"),15;case 14:return 36;case 15:break;case 16:return 37;case 17:return 34;case 18:return 34;case 19:return 38;case 20:break;case 21:return this.popState(),17;case 22:return l.yytext[0];case 23:return 18;case 24:return 19;case 25:return 41;case 26:return 43;case 27:return 43;case 28:return 43;case 29:return 41;case 30:return 41;case 31:return 42;case 32:return 42;case 33:return 42;case 34:return 42;case 35:return 42;case 36:return 43;case 37:return 42;case 38:return 43;case 39:return 44;case 40:return 44;case 41:return 44;case 42:return 44;case 43:return 41;case 44:return 42;case 45:return 43;case 46:return 45;case 47:return 46;case 48:return 47;case 49:return 47;case 50:return 46;case 51:return 46;case 52:return 46;case 53:return 27;case 54:return l.yytext[0];case 55:return 6}},"anonymous"),rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:[\s]+)/i,/^(?:"[^"%\r\n\v\b\\]+")/i,/^(?:"[^"]*")/i,/^(?:erDiagram\b)/i,/^(?:\{)/i,/^(?:,)/i,/^(?:\s+)/i,/^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i,/^(?:(.*?)[~](.*?)*[~])/i,/^(?:[\*A-Za-z_][A-Za-z0-9\-_\[\]\(\)]*)/i,/^(?:"[^"]*")/i,/^(?:[\n]+)/i,/^(?:\})/i,/^(?:.)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:one or zero\b)/i,/^(?:one or more\b)/i,/^(?:one or many\b)/i,/^(?:1\+)/i,/^(?:\|o\b)/i,/^(?:zero or one\b)/i,/^(?:zero or more\b)/i,/^(?:zero or many\b)/i,/^(?:0\+)/i,/^(?:\}o\b)/i,/^(?:many\(0\))/i,/^(?:many\(1\))/i,/^(?:many\b)/i,/^(?:\}\|)/i,/^(?:one\b)/i,/^(?:only one\b)/i,/^(?:1\b)/i,/^(?:\|\|)/i,/^(?:o\|)/i,/^(?:o\{)/i,/^(?:\|\{)/i,/^(?:\s*u\b)/i,/^(?:\.\.)/i,/^(?:--)/i,/^(?:to\b)/i,/^(?:optionally to\b)/i,/^(?:\.-)/i,/^(?:-\.)/i,/^(?:[A-Za-z_][A-Za-z0-9\-_]*)/i,/^(?:.)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},block:{rules:[14,15,16,17,18,19,20,21,22],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],inclusive:!0}}};return w}();N.lexer=T;function L(){this.yy={}}return u(L,"Parser"),L.prototype=N,N.Parser=L,new L}();nt.parser=nt;var Kt=nt,K=new Map,ot=[],Gt={ZERO_OR_ONE:"ZERO_OR_ONE",ZERO_OR_MORE:"ZERO_OR_MORE",ONE_OR_MORE:"ONE_OR_MORE",ONLY_ONE:"ONLY_ONE",MD_PARENT:"MD_PARENT"},Vt={NON_IDENTIFYING:"NON_IDENTIFYING",IDENTIFYING:"IDENTIFYING"},ft=u(function(t,e=void 0){return K.has(t)?!K.get(t).alias&&e&&(K.get(t).alias=e,X.info(`Add alias '${e}' to entity '${t}'`)):(K.set(t,{attributes:[],alias:e}),X.info("Added new entity :",t)),K.get(t)},"addEntity"),Xt=u(()=>K,"getEntities"),Qt=u(function(t,e){let r=ft(t),f;for(f=e.length-1;f>=0;f--)r.attributes.push(e[f]),X.debug("Added attribute ",e[f].attributeName)},"addAttributes"),jt=u(function(t,e,r,f){let c={entityA:t,roleA:e,entityB:r,relSpec:f};ot.push(c),X.debug("Added new relationship :",c)},"addRelationship"),qt=u(()=>ot,"getRelationships"),Jt=u(function(){K=new Map,ot=[],Tt()},"clear"),$t={Cardinality:Gt,Identification:Vt,getConfig:u(()=>U().er,"getConfig"),addEntity:ft,addAttributes:Qt,getEntities:Xt,addRelationship:jt,getRelationships:qt,clear:Jt,setAccTitle:kt,getAccTitle:xt,setAccDescription:Rt,getAccDescription:Ot,setDiagramTitle:bt,getDiagramTitle:Nt},C={ONLY_ONE_START:"ONLY_ONE_START",ONLY_ONE_END:"ONLY_ONE_END",ZERO_OR_ONE_START:"ZERO_OR_ONE_START",ZERO_OR_ONE_END:"ZERO_OR_ONE_END",ONE_OR_MORE_START:"ONE_OR_MORE_START",ONE_OR_MORE_END:"ONE_OR_MORE_END",ZERO_OR_MORE_START:"ZERO_OR_MORE_START",ZERO_OR_MORE_END:"ZERO_OR_MORE_END",MD_PARENT_END:"MD_PARENT_END",MD_PARENT_START:"MD_PARENT_START"},te=u(function(t,e){let r;t.append("defs").append("marker").attr("id",C.MD_PARENT_START).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",C.MD_PARENT_END).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",C.ONLY_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M9,0 L9,18 M15,0 L15,18"),t.append("defs").append("marker").attr("id",C.ONLY_ONE_END).attr("refX",18).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M3,0 L3,18 M9,0 L9,18"),r=t.append("defs").append("marker").attr("id",C.ZERO_OR_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",21).attr("cy",9).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M9,0 L9,18"),r=t.append("defs").append("marker").attr("id",C.ZERO_OR_ONE_END).attr("refX",30).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",9).attr("cy",9).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M21,0 L21,18"),t.append("defs").append("marker").attr("id",C.ONE_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"),t.append("defs").append("marker").attr("id",C.ONE_OR_MORE_END).attr("refX",27).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18"),r=t.append("defs").append("marker").attr("id",C.ZERO_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",48).attr("cy",18).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M0,18 Q18,0 36,18 Q18,36 0,18"),r=t.append("defs").append("marker").attr("id",C.ZERO_OR_MORE_END).attr("refX",39).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",9).attr("cy",18).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M21,18 Q39,0 57,18 Q39,36 21,18")},"insertMarkers"),P={ERMarkers:C,insertMarkers:te},ee=/[^\dA-Za-z](\W)*/g,R={},Q=new Map,re=u(function(t){const e=Object.keys(t);for(const r of e)R[r]=t[r]},"setConf"),ae=u((t,e,r)=>{const f=R.entityPadding/3,c=R.entityPadding/3,_=R.fontSize*.85,y=e.node().getBBox(),o=[];let h=!1,g=!1,m=0,k=0,x=0,p=0,O=y.height+f*2,b=1;r.forEach(M=>{M.attributeKeyTypeList!==void 0&&M.attributeKeyTypeList.length>0&&(h=!0),M.attributeComment!==void 0&&(g=!0)}),r.forEach(M=>{const S=`${e.node().id}-attr-${b}`;let N=0;const T=wt(M.attributeType),L=t.append("text").classed("er entityLabel",!0).attr("id",`${S}-type`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",U().fontFamily).style("font-size",_+"px").text(T),w=t.append("text").classed("er entityLabel",!0).attr("id",`${S}-name`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",U().fontFamily).style("font-size",_+"px").text(M.attributeName),i={};i.tn=L,i.nn=w;const n=L.node().getBBox(),l=w.node().getBBox();if(m=Math.max(m,n.width),k=Math.max(k,l.width),N=Math.max(n.height,l.height),h){const d=M.attributeKeyTypeList!==void 0?M.attributeKeyTypeList.join(","):"",E=t.append("text").classed("er entityLabel",!0).attr("id",`${S}-key`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",U().fontFamily).style("font-size",_+"px").text(d);i.kn=E;const a=E.node().getBBox();x=Math.max(x,a.width),N=Math.max(N,a.height)}if(g){const d=t.append("text").classed("er entityLabel",!0).attr("id",`${S}-comment`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",U().fontFamily).style("font-size",_+"px").text(M.attributeComment||"");i.cn=d;const E=d.node().getBBox();p=Math.max(p,E.width),N=Math.max(N,E.height)}i.height=N,o.push(i),O+=N+f*2,b+=1});let Y=4;h&&(Y+=2),g&&(Y+=2);const Z=m+k+x+p,F={width:Math.max(R.minEntityWidth,Math.max(y.width+R.entityPadding*2,Z+c*Y)),height:r.length>0?O:Math.max(R.minEntityHeight,y.height+R.entityPadding*2)};if(r.length>0){const M=Math.max(0,(F.width-Z-c*Y)/(Y/2));e.attr("transform","translate("+F.width/2+","+(f+y.height/2)+")");let S=y.height+f*2,N="attributeBoxOdd";o.forEach(T=>{const L=S+f+T.height/2;T.tn.attr("transform","translate("+c+","+L+")");const w=t.insert("rect","#"+T.tn.node().id).classed(`er ${N}`,!0).attr("x",0).attr("y",S).attr("width",m+c*2+M).attr("height",T.height+f*2),i=parseFloat(w.attr("x"))+parseFloat(w.attr("width"));T.nn.attr("transform","translate("+(i+c)+","+L+")");const n=t.insert("rect","#"+T.nn.node().id).classed(`er ${N}`,!0).attr("x",i).attr("y",S).attr("width",k+c*2+M).attr("height",T.height+f*2);let l=parseFloat(n.attr("x"))+parseFloat(n.attr("width"));if(h){T.kn.attr("transform","translate("+(l+c)+","+L+")");const d=t.insert("rect","#"+T.kn.node().id).classed(`er ${N}`,!0).attr("x",l).attr("y",S).attr("width",x+c*2+M).attr("height",T.height+f*2);l=parseFloat(d.attr("x"))+parseFloat(d.attr("width"))}g&&(T.cn.attr("transform","translate("+(l+c)+","+L+")"),t.insert("rect","#"+T.cn.node().id).classed(`er ${N}`,"true").attr("x",l).attr("y",S).attr("width",p+c*2+M).attr("height",T.height+f*2)),S+=T.height+f*2,N=N==="attributeBoxOdd"?"attributeBoxEven":"attributeBoxOdd"})}else F.height=Math.max(R.minEntityHeight,O),e.attr("transform","translate("+F.width/2+","+F.height/2+")");return F},"drawAttributes"),ie=u(function(t,e,r){const f=[...e.keys()];let c;return f.forEach(function(_){const y=pt(_,"entity");Q.set(_,y);const o=t.append("g").attr("id",y);c=c===void 0?y:c;const h="text-"+y,g=o.append("text").classed("er entityLabel",!0).attr("id",h).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","middle").style("font-family",U().fontFamily).style("font-size",R.fontSize+"px").text(e.get(_).alias??_),{width:m,height:k}=ae(o,g,e.get(_).attributes),p=o.insert("rect","#"+h).classed("er entityBox",!0).attr("x",0).attr("y",0).attr("width",m).attr("height",k).node().getBBox();r.setNode(y,{width:p.width,height:p.height,shape:"rect",id:y})}),c},"drawEntities"),ne=u(function(t,e){e.nodes().forEach(function(r){r!==void 0&&e.node(r)!==void 0&&t.select("#"+r).attr("transform","translate("+(e.node(r).x-e.node(r).width/2)+","+(e.node(r).y-e.node(r).height/2)+" )")})},"adjustEntities"),yt=u(function(t){return(t.entityA+t.roleA+t.entityB).replace(/\s/g,"")},"getEdgeName"),se=u(function(t,e){return t.forEach(function(r){e.setEdge(Q.get(r.entityA),Q.get(r.entityB),{relationship:r},yt(r))}),t},"addRelationships"),ut=0,oe=u(function(t,e,r,f,c){ut++;const _=r.edge(Q.get(e.entityA),Q.get(e.entityB),yt(e)),y=vt().x(function(b){return b.x}).y(function(b){return b.y}).curve(St),o=t.insert("path","#"+f).classed("er relationshipLine",!0).attr("d",y(_.points)).style("stroke",R.stroke).style("fill","none");e.relSpec.relType===c.db.Identification.NON_IDENTIFYING&&o.attr("stroke-dasharray","8,8");let h="";switch(R.arrowMarkerAbsolute&&(h=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,h=h.replace(/\(/g,"\\("),h=h.replace(/\)/g,"\\)")),e.relSpec.cardA){case c.db.Cardinality.ZERO_OR_ONE:o.attr("marker-end","url("+h+"#"+P.ERMarkers.ZERO_OR_ONE_END+")");break;case c.db.Cardinality.ZERO_OR_MORE:o.attr("marker-end","url("+h+"#"+P.ERMarkers.ZERO_OR_MORE_END+")");break;case c.db.Cardinality.ONE_OR_MORE:o.attr("marker-end","url("+h+"#"+P.ERMarkers.ONE_OR_MORE_END+")");break;case c.db.Cardinality.ONLY_ONE:o.attr("marker-end","url("+h+"#"+P.ERMarkers.ONLY_ONE_END+")");break;case c.db.Cardinality.MD_PARENT:o.attr("marker-end","url("+h+"#"+P.ERMarkers.MD_PARENT_END+")");break}switch(e.relSpec.cardB){case c.db.Cardinality.ZERO_OR_ONE:o.attr("marker-start","url("+h+"#"+P.ERMarkers.ZERO_OR_ONE_START+")");break;case c.db.Cardinality.ZERO_OR_MORE:o.attr("marker-start","url("+h+"#"+P.ERMarkers.ZERO_OR_MORE_START+")");break;case c.db.Cardinality.ONE_OR_MORE:o.attr("marker-start","url("+h+"#"+P.ERMarkers.ONE_OR_MORE_START+")");break;case c.db.Cardinality.ONLY_ONE:o.attr("marker-start","url("+h+"#"+P.ERMarkers.ONLY_ONE_START+")");break;case c.db.Cardinality.MD_PARENT:o.attr("marker-start","url("+h+"#"+P.ERMarkers.MD_PARENT_START+")");break}const g=o.node().getTotalLength(),m=o.node().getPointAtLength(g*.5),k="rel"+ut,x=e.roleA.split(/<br ?\/>/g),p=t.append("text").classed("er relationshipLabel",!0).attr("id",k).attr("x",m.x).attr("y",m.y).style("text-anchor","middle").style("dominant-baseline","middle").style("font-family",U().fontFamily).style("font-size",R.fontSize+"px");if(x.length==1)p.text(e.roleA);else{const b=-(x.length-1)*.5;x.forEach((Y,Z)=>{p.append("tspan").attr("x",m.x).attr("dy",`${Z===0?b:1}em`).text(Y)})}const O=p.node().getBBox();t.insert("rect","#"+k).classed("er relationshipLabelBox",!0).attr("x",m.x-O.width/2).attr("y",m.y-O.height/2).attr("width",O.width).attr("height",O.height)},"drawRelationshipFromLayout"),le=u(function(t,e,r,f){R=U().er,X.info("Drawing ER diagram");const c=U().securityLevel;let _;c==="sandbox"&&(_=at("#i"+e));const o=(c==="sandbox"?at(_.nodes()[0].contentDocument.body):at("body")).select(`[id='${e}']`);P.insertMarkers(o,R);let h;h=new It({multigraph:!0,directed:!0,compound:!1}).setGraph({rankdir:R.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel(function(){return{}});const g=ie(o,f.db.getEntities(),h),m=se(f.db.getRelationships(),h);Dt(h),ne(o,h),m.forEach(function(b){oe(o,b,h,g,f)});const k=R.diagramPadding;At.insertTitle(o,"entityTitleText",R.titleTopMargin,f.db.getDiagramTitle());const x=o.node().getBBox(),p=x.width+k*2,O=x.height+k*2;Mt(o,O,p,R.useMaxWidth),o.attr("viewBox",`${x.x-k} ${x.y-k} ${p} ${O}`)},"draw"),ce="28e9f9db-3c8d-5aa5-9faf-44286ae5937c";function pt(t="",e=""){const r=t.replace(ee,"");return`${st(e)}${st(r)}${zt(t,ce)}`}u(pt,"generateId");function st(t=""){return t.length>0?`${t}-`:""}u(st,"strWithHyphen");var he={setConf:re,draw:le},de=u(t=>`
  .entityBox {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxOdd {
    fill: ${t.attributeBackgroundColorOdd};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxEven {
    fill:  ${t.attributeBackgroundColorEven};
    stroke: ${t.nodeBorder};
  }

  .relationshipLabelBox {
    fill: ${t.tertiaryColor};
    opacity: 0.7;
    background-color: ${t.tertiaryColor};
      rect {
        opacity: 0.5;
      }
  }

    .relationshipLine {
      stroke: ${t.lineColor};
    }

  .entityTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }    
  #MD_PARENT_START {
    fill: #f5f5f5 !important;
    stroke: ${t.lineColor} !important;
    stroke-width: 1;
  }
  #MD_PARENT_END {
    fill: #f5f5f5 !important;
    stroke: ${t.lineColor} !important;
    stroke-width: 1;
  }
  
`,"getStyles"),ue=de,ke={parser:Kt,db:$t,renderer:he,styles:ue};export{ke as diagram};
