var Lb=Object.defineProperty,Fb=Object.defineProperties;var Ob=Object.getOwnPropertyDescriptors;var Tm=Object.getOwnPropertySymbols;var Ub=Object.prototype.hasOwnProperty,kb=Object.prototype.propertyIsEnumerable;var Am=(n,e,t)=>e in n?Lb(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ge=(n,e)=>{for(var t in e||={})Ub.call(e,t)&&Am(n,t,e[t]);if(Tm)for(var t of Tm(e))kb.call(e,t)&&Am(n,t,e[t]);return n},St=(n,e)=>Fb(n,Ob(e));var go=(n,e,t)=>new Promise((r,i)=>{var o=c=>{try{a(t.next(c))}catch(l){i(l)}},s=c=>{try{a(t.throw(c))}catch(l){i(l)}},a=c=>c.done?r(c.value):Promise.resolve(c.value).then(o,s);a((t=t.apply(n,e)).next())});function Im(n,e){return Object.is(n,e)}var Ot=null,Nc=!1,Ad=1,vo=Symbol("SIGNAL");function ct(n){let e=Ot;return Ot=n,e}function Rm(){return Ot}var Pc={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Nm(n){if(Nc)throw new Error("");if(Ot===null)return;Ot.consumerOnSignalRead(n);let e=Ot.nextProducerIndex++;if(Fc(Ot),e<Ot.producerNode.length&&Ot.producerNode[e]!==n&&Ys(Ot)){let t=Ot.producerNode[e];Lc(t,Ot.producerIndexOfThis[e])}Ot.producerNode[e]!==n&&(Ot.producerNode[e]=n,Ot.producerIndexOfThis[e]=Ys(Ot)?Om(n,Ot,e):0),Ot.producerLastReadVersion[e]=n.version}function Bb(){Ad++}function Pm(n){if(!(Ys(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Ad)){if(!n.producerMustRecompute(n)&&!Rd(n)){Td(n);return}n.producerRecomputeValue(n),Td(n)}}function Lm(n){if(n.liveConsumerNode===void 0)return;let e=Nc;Nc=!0;try{for(let t of n.liveConsumerNode)t.dirty||Hb(t)}finally{Nc=e}}function Vb(){return Ot?.consumerAllowSignalWrites!==!1}function Hb(n){n.dirty=!0,Lm(n),n.consumerMarkedDirty?.(n)}function Td(n){n.dirty=!1,n.lastCleanEpoch=Ad}function Id(n){return n&&(n.nextProducerIndex=0),ct(n)}function Fm(n,e){if(ct(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(Ys(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Lc(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Rd(n){Fc(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],r=n.producerLastReadVersion[e];if(r!==t.version||(Pm(t),r!==t.version))return!0}return!1}function Nd(n){if(Fc(n),Ys(n))for(let e=0;e<n.producerNode.length;e++)Lc(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function Om(n,e,t){if(Um(n),n.liveConsumerNode.length===0&&km(n))for(let r=0;r<n.producerNode.length;r++)n.producerIndexOfThis[r]=Om(n.producerNode[r],n,r);return n.liveConsumerIndexOfThis.push(t),n.liveConsumerNode.push(e)-1}function Lc(n,e){if(Um(n),n.liveConsumerNode.length===1&&km(n))for(let r=0;r<n.producerNode.length;r++)Lc(n.producerNode[r],n.producerIndexOfThis[r]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let r=n.liveConsumerIndexOfThis[e],i=n.liveConsumerNode[e];Fc(i),i.producerIndexOfThis[r]=e}}function Ys(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function Fc(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function Um(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function km(n){return n.producerNode!==void 0}function zb(){throw new Error}var Bm=zb;function Gb(){Bm()}function Vm(n){Bm=n}var jb=null;function Hm(n,e){Vb()||Gb(),n.equal(n.value,e)||(n.value=e,Wb(n))}var zm=St(ge({},Pc),{equal:Im,value:void 0});function Wb(n){n.version++,Bb(),Lm(n),jb?.()}function xe(n){return typeof n=="function"}function _o(n){let t=n(r=>{Error.call(r),r.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Oc=_o(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((r,i)=>`${i+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Ai(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var It=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let o of t)o.remove(this);else t.remove(this);let{initialTeardown:r}=this;if(xe(r))try{r()}catch(o){e=o instanceof Oc?o.errors:[o]}let{_finalizers:i}=this;if(i){this._finalizers=null;for(let o of i)try{Gm(o)}catch(s){e=e??[],s instanceof Oc?e=[...e,...s.errors]:e.push(s)}}if(e)throw new Oc(e)}}add(e){var t;if(e&&e!==this)if(this.closed)Gm(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Ai(t,e)}remove(e){let{_finalizers:t}=this;t&&Ai(t,e),e instanceof n&&e._removeParent(this)}};It.EMPTY=(()=>{let n=new It;return n.closed=!0,n})();var Pd=It.EMPTY;function Uc(n){return n instanceof It||n&&"closed"in n&&xe(n.remove)&&xe(n.add)&&xe(n.unsubscribe)}function Gm(n){xe(n)?n():n.unsubscribe()}var Kn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var yo={setTimeout(n,e,...t){let{delegate:r}=yo;return r?.setTimeout?r.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=yo;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function kc(n){yo.setTimeout(()=>{let{onUnhandledError:e}=Kn;if(e)e(n);else throw n})}function Lr(){}var jm=Ld("C",void 0,void 0);function Wm(n){return Ld("E",void 0,n)}function $m(n){return Ld("N",n,void 0)}function Ld(n,e,t){return{kind:n,value:e,error:t}}var Ii=null;function xo(n){if(Kn.useDeprecatedSynchronousErrorHandling){let e=!Ii;if(e&&(Ii={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:r}=Ii;if(Ii=null,t)throw r}}else n()}function qm(n){Kn.useDeprecatedSynchronousErrorHandling&&Ii&&(Ii.errorThrown=!0,Ii.error=n)}var Ri=class extends It{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Uc(e)&&e.add(this)):this.destination=Xb}static create(e,t,r){return new Eo(e,t,r)}next(e){this.isStopped?Od($m(e),this):this._next(e)}error(e){this.isStopped?Od(Wm(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Od(jm,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},$b=Function.prototype.bind;function Fd(n,e){return $b.call(n,e)}var Ud=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(r){Bc(r)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(r){Bc(r)}else Bc(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Bc(t)}}},Eo=class extends Ri{constructor(e,t,r){super();let i;if(xe(e)||!e)i={next:e??void 0,error:t??void 0,complete:r??void 0};else{let o;this&&Kn.useDeprecatedNextContext?(o=Object.create(e),o.unsubscribe=()=>this.unsubscribe(),i={next:e.next&&Fd(e.next,o),error:e.error&&Fd(e.error,o),complete:e.complete&&Fd(e.complete,o)}):i=e}this.destination=new Ud(i)}};function Bc(n){Kn.useDeprecatedSynchronousErrorHandling?qm(n):kc(n)}function qb(n){throw n}function Od(n,e){let{onStoppedNotification:t}=Kn;t&&yo.setTimeout(()=>t(n,e))}var Xb={closed:!0,next:Lr,error:qb,complete:Lr};var So=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Mn(n){return n}function kd(...n){return Bd(n)}function Bd(n){return n.length===0?Mn:n.length===1?n[0]:function(t){return n.reduce((r,i)=>i(r),t)}}var Qe=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let r=new n;return r.source=this,r.operator=t,r}subscribe(t,r,i){let o=Zb(t)?t:new Eo(t,r,i);return xo(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(t){try{return this._subscribe(t)}catch(r){t.error(r)}}forEach(t,r){return r=Xm(r),new r((i,o)=>{let s=new Eo({next:a=>{try{t(a)}catch(c){o(c),s.unsubscribe()}},error:o,complete:i});this.subscribe(s)})}_subscribe(t){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(t)}[So](){return this}pipe(...t){return Bd(t)(this)}toPromise(t){return t=Xm(t),new t((r,i)=>{let o;this.subscribe(s=>o=s,s=>i(s),()=>r(o))})}}return n.create=e=>new n(e),n})();function Xm(n){var e;return(e=n??Kn.Promise)!==null&&e!==void 0?e:Promise}function Yb(n){return n&&xe(n.next)&&xe(n.error)&&xe(n.complete)}function Zb(n){return n&&n instanceof Ri||Yb(n)&&Uc(n)}function Vd(n){return xe(n?.lift)}function Xe(n){return e=>{if(Vd(e))return e.lift(function(t){try{return n(t,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Je(n,e,t,r,i){return new Hd(n,e,t,r,i)}var Hd=class extends Ri{constructor(e,t,r,i,o,s){super(e),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=i?function(a){try{i(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function Mo(){return Xe((n,e)=>{let t=null;n._refCount++;let r=Je(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let i=n._connection,o=t;t=null,i&&(!o||i===o)&&i.unsubscribe(),e.unsubscribe()});n.subscribe(r),r.closed||(t=n.connect())})}var ti=class extends Qe{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,Vd(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new It;let t=this.getSubject();e.add(this.source.subscribe(Je(t,void 0,()=>{this._teardown(),t.complete()},r=>{this._teardown(),t.error(r)},()=>this._teardown()))),e.closed&&(this._connection=null,e=It.EMPTY)}return e}refCount(){return Mo()(this)}};var Ym=_o(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var bt=(()=>{class n extends Qe{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let r=new Vc(this,this);return r.operator=t,r}_throwIfClosed(){if(this.closed)throw new Ym}next(t){xo(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(t)}})}error(t){xo(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:r}=this;for(;r.length;)r.shift().error(t)}})}complete(){xo(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:r,isStopped:i,observers:o}=this;return r||i?Pd:(this.currentObservers=null,o.push(t),new It(()=>{this.currentObservers=null,Ai(o,t)}))}_checkFinalizedStatuses(t){let{hasError:r,thrownError:i,isStopped:o}=this;r?t.error(i):o&&t.complete()}asObservable(){let t=new Qe;return t.source=this,t}}return n.create=(e,t)=>new Vc(e,t),n})(),Vc=class extends bt{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,r;(r=(t=this.destination)===null||t===void 0?void 0:t.next)===null||r===void 0||r.call(t,e)}error(e){var t,r;(r=(t=this.destination)===null||t===void 0?void 0:t.error)===null||r===void 0||r.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,r;return(r=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&r!==void 0?r:Pd}};var $t=class extends bt{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:r}=this;if(e)throw t;return this._throwIfClosed(),r}next(e){super.next(this._value=e)}};var zd={now(){return(zd.delegate||Date).now()},delegate:void 0};var Hc=class extends It{constructor(e,t){super()}schedule(e,t=0){return this}};var Zs={setInterval(n,e,...t){let{delegate:r}=Zs;return r?.setInterval?r.setInterval(n,e,...t):setInterval(n,e,...t)},clearInterval(n){let{delegate:e}=Zs;return(e?.clearInterval||clearInterval)(n)},delegate:void 0};var zc=class extends Hc{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){var r;if(this.closed)return this;this.state=e;let i=this.id,o=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(o,i,t)),this.pending=!0,this.delay=t,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(o,this.id,t),this}requestAsyncId(e,t,r=0){return Zs.setInterval(e.flush.bind(e,this),r)}recycleAsyncId(e,t,r=0){if(r!=null&&this.delay===r&&this.pending===!1)return t;t!=null&&Zs.clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let r=this._execute(e,t);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let r=!1,i;try{this.work(e)}catch(o){r=!0,i=o||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){let{id:e,scheduler:t}=this,{actions:r}=t;this.work=this.state=this.scheduler=null,this.pending=!1,Ai(r,this),e!=null&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null,super.unsubscribe()}}};var bo=class n{constructor(e,t=n.now){this.schedulerActionCtor=e,this.now=t}schedule(e,t=0,r){return new this.schedulerActionCtor(this,e).schedule(r,t)}};bo.now=zd.now;var Gc=class extends bo{constructor(e,t=bo.now){super(e,t),this.actions=[],this._active=!1}flush(e){let{actions:t}=this;if(this._active){t.push(e);return}let r;this._active=!0;do if(r=e.execute(e.state,e.delay))break;while(e=t.shift());if(this._active=!1,r){for(;e=t.shift();)e.unsubscribe();throw r}}};var Gd=new Gc(zc),Zm=Gd;var sn=new Qe(n=>n.complete());function jc(n){return n&&xe(n.schedule)}function jd(n){return n[n.length-1]}function Km(n){return xe(jd(n))?n.pop():void 0}function vr(n){return jc(jd(n))?n.pop():void 0}function Qm(n,e){return typeof jd(n)=="number"?n.pop():e}function eg(n,e,t,r){function i(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(u){try{l(r.next(u))}catch(d){s(d)}}function c(u){try{l(r.throw(u))}catch(d){s(d)}}function l(u){u.done?o(u.value):i(u.value).then(a,c)}l((r=r.apply(n,e||[])).next())})}function Jm(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],r=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&r>=n.length&&(n=void 0),{value:n&&n[r++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ni(n){return this instanceof Ni?(this.v=n,this):new Ni(n)}function tg(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t.apply(n,e||[]),i,o=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),i[Symbol.asyncIterator]=function(){return this},i;function s(p){return function(g){return Promise.resolve(g).then(p,d)}}function a(p,g){r[p]&&(i[p]=function(y){return new Promise(function(m,h){o.push([p,y,m,h])>1||c(p,y)})},g&&(i[p]=g(i[p])))}function c(p,g){try{l(r[p](g))}catch(y){f(o[0][3],y)}}function l(p){p.value instanceof Ni?Promise.resolve(p.value.v).then(u,d):f(o[0][2],p)}function u(p){c("next",p)}function d(p){c("throw",p)}function f(p,g){p(g),o.shift(),o.length&&c(o[0][0],o[0][1])}}function ng(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Jm=="function"?Jm(n):n[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(o){t[o]=n[o]&&function(s){return new Promise(function(a,c){s=n[o](s),i(a,c,s.done,s.value)})}}function i(o,s,a,c){Promise.resolve(c).then(function(l){o({value:l,done:a})},s)}}var wo=n=>n&&typeof n.length=="number"&&typeof n!="function";function Wc(n){return xe(n?.then)}function $c(n){return xe(n[So])}function qc(n){return Symbol.asyncIterator&&xe(n?.[Symbol.asyncIterator])}function Xc(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Kb(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Yc=Kb();function Zc(n){return xe(n?.[Yc])}function Kc(n){return tg(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:r,done:i}=yield Ni(t.read());if(i)return yield Ni(void 0);yield yield Ni(r)}}finally{t.releaseLock()}})}function Qc(n){return xe(n?.getReader)}function yt(n){if(n instanceof Qe)return n;if(n!=null){if($c(n))return Qb(n);if(wo(n))return Jb(n);if(Wc(n))return ew(n);if(qc(n))return rg(n);if(Zc(n))return tw(n);if(Qc(n))return nw(n)}throw Xc(n)}function Qb(n){return new Qe(e=>{let t=n[So]();if(xe(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Jb(n){return new Qe(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function ew(n){return new Qe(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,kc)})}function tw(n){return new Qe(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function rg(n){return new Qe(e=>{rw(n,e).catch(t=>e.error(t))})}function nw(n){return rg(Kc(n))}function rw(n,e){var t,r,i,o;return eg(this,void 0,void 0,function*(){try{for(t=ng(n);r=yield t.next(),!r.done;){let s=r.value;if(e.next(s),e.closed)return}}catch(s){i={error:s}}finally{try{r&&!r.done&&(o=t.return)&&(yield o.call(t))}finally{if(i)throw i.error}}e.complete()})}function gn(n,e,t,r=0,i=!1){let o=e.schedule(function(){t(),i?n.add(this.schedule(null,r)):this.unsubscribe()},r);if(n.add(o),!i)return o}function Jc(n,e=0){return Xe((t,r)=>{t.subscribe(Je(r,i=>gn(r,n,()=>r.next(i),e),()=>gn(r,n,()=>r.complete(),e),i=>gn(r,n,()=>r.error(i),e)))})}function el(n,e=0){return Xe((t,r)=>{r.add(n.schedule(()=>t.subscribe(r),e))})}function ig(n,e){return yt(n).pipe(el(e),Jc(e))}function og(n,e){return yt(n).pipe(el(e),Jc(e))}function sg(n,e){return new Qe(t=>{let r=0;return e.schedule(function(){r===n.length?t.complete():(t.next(n[r++]),t.closed||this.schedule())})})}function ag(n,e){return new Qe(t=>{let r;return gn(t,e,()=>{r=n[Yc](),gn(t,e,()=>{let i,o;try{({value:i,done:o}=r.next())}catch(s){t.error(s);return}o?t.complete():t.next(i)},0,!0)}),()=>xe(r?.return)&&r.return()})}function tl(n,e){if(!n)throw new Error("Iterable cannot be null");return new Qe(t=>{gn(t,e,()=>{let r=n[Symbol.asyncIterator]();gn(t,e,()=>{r.next().then(i=>{i.done?t.complete():t.next(i.value)})},0,!0)})})}function cg(n,e){return tl(Kc(n),e)}function lg(n,e){if(n!=null){if($c(n))return ig(n,e);if(wo(n))return sg(n,e);if(Wc(n))return og(n,e);if(qc(n))return tl(n,e);if(Zc(n))return ag(n,e);if(Qc(n))return cg(n,e)}throw Xc(n)}function wt(n,e){return e?lg(n,e):yt(n)}function Ie(...n){let e=vr(n);return wt(n,e)}function ni(n,e){let t=xe(n)?n:()=>n,r=i=>i.error(t());return new Qe(e?i=>e.schedule(r,0,i):r)}function Wd(n){return!!n&&(n instanceof Qe||xe(n.lift)&&xe(n.subscribe))}var Fr=_o(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function ug(n){return n instanceof Date&&!isNaN(n)}function Ue(n,e){return Xe((t,r)=>{let i=0;t.subscribe(Je(r,o=>{r.next(n.call(e,o,i++))}))})}var{isArray:iw}=Array;function ow(n,e){return iw(e)?n(...e):n(e)}function nl(n){return Ue(e=>ow(n,e))}var{isArray:sw}=Array,{getPrototypeOf:aw,prototype:cw,keys:lw}=Object;function dg(n){if(n.length===1){let e=n[0];if(sw(e))return{args:e,keys:null};if(uw(e)){let t=lw(e);return{args:t.map(r=>e[r]),keys:t}}}return{args:n,keys:null}}function uw(n){return n&&typeof n=="object"&&aw(n)===cw}function fg(n,e){return n.reduce((t,r,i)=>(t[r]=e[i],t),{})}function rl(...n){let e=vr(n),t=Km(n),{args:r,keys:i}=dg(n);if(r.length===0)return wt([],e);let o=new Qe(dw(r,e,i?s=>fg(i,s):Mn));return t?o.pipe(nl(t)):o}function dw(n,e,t=Mn){return r=>{hg(e,()=>{let{length:i}=n,o=new Array(i),s=i,a=i;for(let c=0;c<i;c++)hg(e,()=>{let l=wt(n[c],e),u=!1;l.subscribe(Je(r,d=>{o[c]=d,u||(u=!0,a--),a||r.next(t(o.slice()))},()=>{--s||r.complete()}))},r)},r)}}function hg(n,e,t){n?gn(t,n,e):e()}function pg(n,e,t,r,i,o,s,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},p=y=>l<r?g(y):c.push(y),g=y=>{o&&e.next(y),l++;let m=!1;yt(t(y,u++)).subscribe(Je(e,h=>{i?.(h),o?p(h):e.next(h)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<r;){let h=c.shift();s?gn(e,s,()=>g(h)):g(h)}f()}catch(h){e.error(h)}}))};return n.subscribe(Je(e,p,()=>{d=!0,f()})),()=>{a?.()}}function Dt(n,e,t=1/0){return xe(e)?Dt((r,i)=>Ue((o,s)=>e(r,o,i,s))(yt(n(r,i))),t):(typeof e=="number"&&(t=e),Xe((r,i)=>pg(r,i,n,t)))}function Ks(n=1/0){return Dt(Mn,n)}function mg(){return Ks(1)}function _r(...n){return mg()(wt(n,vr(n)))}function Pi(n){return new Qe(e=>{yt(n()).subscribe(e)})}var fw=["addListener","removeListener"],hw=["addEventListener","removeEventListener"],pw=["on","off"];function Do(n,e,t,r){if(xe(t)&&(r=t,t=void 0),r)return Do(n,e,t).pipe(nl(r));let[i,o]=vw(n)?hw.map(s=>a=>n[s](e,a,t)):mw(n)?fw.map(gg(n,e)):gw(n)?pw.map(gg(n,e)):[];if(!i&&wo(n))return Dt(s=>Do(s,e,t))(yt(n));if(!i)throw new TypeError("Invalid event target");return new Qe(s=>{let a=(...c)=>s.next(1<c.length?c:c[0]);return i(a),()=>o(a)})}function gg(n,e){return t=>r=>n[t](e,r)}function mw(n){return xe(n.addListener)&&xe(n.removeListener)}function gw(n){return xe(n.on)&&xe(n.off)}function vw(n){return xe(n.addEventListener)&&xe(n.removeEventListener)}function vg(n=0,e,t=Zm){let r=-1;return e!=null&&(jc(e)?t=e:r=e),new Qe(i=>{let o=ug(n)?+n-t.now():n;o<0&&(o=0);let s=0;return t.schedule(function(){i.closed||(i.next(s++),0<=r?this.schedule(void 0,r):i.complete())},o)})}function il(...n){let e=vr(n),t=Qm(n,1/0),r=n;return r.length?r.length===1?yt(r[0]):Ks(t)(wt(r,e)):sn}var Li=new Qe(Lr);function Yt(n,e){return Xe((t,r)=>{let i=0;t.subscribe(Je(r,o=>n.call(e,o,i++)&&r.next(o)))})}function ri(n){return Xe((e,t)=>{let r=null,i=!1,o;r=e.subscribe(Je(t,void 0,void 0,s=>{o=yt(n(s,ri(n)(e))),r?(r.unsubscribe(),r=null,o.subscribe(t)):i=!0})),i&&(r.unsubscribe(),r=null,o.subscribe(t))})}function _g(n,e,t,r,i){return(o,s)=>{let a=t,c=e,l=0;o.subscribe(Je(s,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),r&&s.next(c)},i&&(()=>{a&&s.next(c),s.complete()})))}}function Co(n,e){return xe(e)?Dt(n,e,1):Dt(n,1)}function yg(n){return new Qe(e=>n.subscribe(e))}var _w={connector:()=>new bt};function ol(n,e=_w){let{connector:t}=e;return Xe((r,i)=>{let o=t();yt(n(yg(o))).subscribe(i),i.add(r.subscribe(o))})}function ii(n){return Xe((e,t)=>{let r=!1;e.subscribe(Je(t,i=>{r=!0,t.next(i)},()=>{r||t.next(n),t.complete()}))})}function Ut(n){return n<=0?()=>sn:Xe((e,t)=>{let r=0;e.subscribe(Je(t,i=>{++r<=n&&(t.next(i),n<=r&&t.complete())}))})}function xg(){return Xe((n,e)=>{n.subscribe(Je(e,Lr))})}function Eg(n){return Ue(()=>n)}function $d(n,e){return e?t=>_r(e.pipe(Ut(1),xg()),t.pipe($d(n))):Dt((t,r)=>yt(n(t,r)).pipe(Ut(1),Eg(t)))}function qd(n,e=Gd){let t=vg(n,e);return $d(()=>t)}function sl(n=yw){return Xe((e,t)=>{let r=!1;e.subscribe(Je(t,i=>{r=!0,t.next(i)},()=>r?t.complete():t.error(n())))})}function yw(){return new Fr}function Qs(n){return Xe((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function Or(n,e){let t=arguments.length>=2;return r=>r.pipe(n?Yt((i,o)=>n(i,o,r)):Mn,Ut(1),t?ii(e):sl(()=>new Fr))}function To(n){return n<=0?()=>sn:Xe((e,t)=>{let r=[];e.subscribe(Je(t,i=>{r.push(i),n<r.length&&r.shift()},()=>{for(let i of r)t.next(i);t.complete()},void 0,()=>{r=null}))})}function Xd(n,e){let t=arguments.length>=2;return r=>r.pipe(n?Yt((i,o)=>n(i,o,r)):Mn,To(1),t?ii(e):sl(()=>new Fr))}function Sg(n,e){let t=xe(n)?n:()=>n;return xe(e)?ol(e,{connector:t}):r=>new ti(r,t)}function Yd(n){return n?e=>ol(n)(e):e=>Sg(new bt)(e)}function Zd(n,e){return Xe(_g(n,e,arguments.length>=2,!0))}function Kd(...n){let e=vr(n);return Xe((t,r)=>{(e?_r(n,t,e):_r(n,t)).subscribe(r)})}function Zt(n,e){return Xe((t,r)=>{let i=null,o=0,s=!1,a=()=>s&&!i&&r.complete();t.subscribe(Je(r,c=>{i?.unsubscribe();let l=0,u=o++;yt(n(c,u)).subscribe(i=Je(r,d=>r.next(e?e(c,d,u,l++):d),()=>{i=null,a()}))},()=>{s=!0,a()}))})}function Qd(n){return Xe((e,t)=>{yt(n).subscribe(Je(t,()=>t.complete(),Lr)),!t.closed&&e.subscribe(t)})}function kt(n,e,t){let r=xe(n)||e||t?{next:n,error:e,complete:t}:n;return r?Xe((i,o)=>{var s;(s=r.subscribe)===null||s===void 0||s.call(r);let a=!0;i.subscribe(Je(o,c=>{var l;(l=r.next)===null||l===void 0||l.call(r,c),o.next(c)},()=>{var c;a=!1,(c=r.complete)===null||c===void 0||c.call(r),o.complete()},c=>{var l;a=!1,(l=r.error)===null||l===void 0||l.call(r,c),o.error(c)},()=>{var c,l;a&&((c=r.unsubscribe)===null||c===void 0||c.call(r)),(l=r.finalize)===null||l===void 0||l.call(r)}))}):Mn}var Ae=class extends Error{code;constructor(e,t){super(Yf(e,t)),this.code=e}};function Yf(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}var sv=Symbol("InputSignalNode#UNSET"),xw=St(ge({},zm),{transformFn:void 0,applyValueToInputSignal(n,e){Hm(n,e)}});function av(n,e){let t=Object.create(xw);t.value=n,t.transformFn=e?.transform;function r(){if(Nm(t),t.value===sv)throw new Ae(-950,!1);return t.value}return r[vo]=t,r}function Zf(n){return{toString:n}.toString()}function vt(n){for(let e in n)if(n[e]===vt)return e;throw Error("Could not find renamed property on target object.")}function wn(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(wn).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function Mg(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var Ew=vt({__forward_ref__:vt});function cv(n){return n.__forward_ref__=cv,n.toString=function(){return wn(this())},n}function Bn(n){return lv(n)?n():n}function lv(n){return typeof n=="function"&&n.hasOwnProperty(Ew)&&n.__forward_ref__===cv}function Te(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Nl(n){return bg(n,dv)||bg(n,fv)}function uv(n){return Nl(n)!==null}function bg(n,e){return n.hasOwnProperty(e)?n[e]:null}function Sw(n){let e=n&&(n[dv]||n[fv]);return e||null}function wg(n){return n&&(n.hasOwnProperty(Dg)||n.hasOwnProperty(Mw))?n[Dg]:null}var dv=vt({\u0275prov:vt}),Dg=vt({\u0275inj:vt}),fv=vt({ngInjectableDef:vt}),Mw=vt({ngInjectorDef:vt}),Le=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Te({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function hv(n){return n&&!!n.\u0275providers}var bw=vt({\u0275cmp:vt}),ww=vt({\u0275dir:vt}),Dw=vt({\u0275pipe:vt}),Cw=vt({\u0275mod:vt}),hl=vt({\u0275fac:vt}),na=vt({__NG_ELEMENT_ID__:vt}),Cg=vt({__NG_ENV_ID__:vt});function pv(n){return typeof n=="string"?n:n==null?"":String(n)}function Tw(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():pv(n)}function Aw(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new Ae(-200,n)}function Kf(n,e){throw new Ae(-201,!1)}var $e=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}($e||{}),af;function mv(){return af}function kn(n){let e=af;return af=n,e}function gv(n,e,t){let r=Nl(n);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(t&$e.Optional)return null;if(e!==void 0)return e;Kf(n,"Injector")}var Iw={},ra=Iw,Rw="__NG_DI_FLAG__",pl="ngTempTokenPath",Nw="ngTokenPath",Pw=/\n/gm,Lw="\u0275",Tg="__source",No;function Fw(){return No}function oi(n){let e=No;return No=n,e}function Ow(n,e=$e.Default){if(No===void 0)throw new Ae(-203,!1);return No===null?gv(n,void 0,e):No.get(n,e&$e.Optional?null:void 0,e)}function Ye(n,e=$e.Default){return(mv()||Ow)(Bn(n),e)}function ae(n,e=$e.Default){return Ye(n,Pl(e))}function Pl(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function cf(n){let e=[];for(let t=0;t<n.length;t++){let r=Bn(n[t]);if(Array.isArray(r)){if(r.length===0)throw new Ae(900,!1);let i,o=$e.Default;for(let s=0;s<r.length;s++){let a=r[s],c=Uw(a);typeof c=="number"?c===-1?i=a.token:o|=c:i=a}e.push(Ye(i,o))}else e.push(Ye(r))}return e}function Uw(n){return n[Rw]}function kw(n,e,t,r){let i=n[pl];throw e[Tg]&&i.unshift(e[Tg]),n.message=Bw(`
`+n.message,i,t,r),n[Nw]=i,n[pl]=null,n}function Bw(n,e,t,r=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==Lw?n.slice(2):n;let i=wn(e);if(Array.isArray(e))i=e.map(wn).join(" -> ");else if(typeof e=="object"){let o=[];for(let s in e)if(e.hasOwnProperty(s)){let a=e[s];o.push(s+":"+(typeof a=="string"?JSON.stringify(a):wn(a)))}i=`{${o.join(", ")}}`}return`${t}${r?"("+r+")":""}[${i}]: ${n.replace(Pw,`
  `)}`}function Lo(n,e){let t=n.hasOwnProperty(hl);return t?n[hl]:null}function Vw(n,e,t){if(n.length!==e.length)return!1;for(let r=0;r<n.length;r++){let i=n[r],o=e[r];if(t&&(i=t(i),o=t(o)),o!==i)return!1}return!0}function Hw(n){return n.flat(Number.POSITIVE_INFINITY)}function Qf(n,e){n.forEach(t=>Array.isArray(t)?Qf(t,e):e(t))}function vv(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function ml(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var ia={},Fo=[],Oo=new Le(""),_v=new Le("",-1),yv=new Le(""),gl=class{get(e,t=ra){if(t===ra){let r=new Error(`NullInjectorError: No provider for ${wn(e)}!`);throw r.name="NullInjectorError",r}return t}};function xv(n,e){let t=n[Cw]||null;if(!t&&e===!0)throw new Error(`Type ${wn(n)} does not have '\u0275mod' property.`);return t}function Ui(n){return n[bw]||null}function Ev(n){return n[ww]||null}function Sv(n){return n[Dw]||null}function Mv(n){let e=Ui(n)||Ev(n)||Sv(n);return e!==null&&e.standalone}function Go(n){return{\u0275providers:n}}function zw(...n){return{\u0275providers:bv(!0,n),\u0275fromNgModule:!0}}function bv(n,...e){let t=[],r=new Set,i,o=s=>{t.push(s)};return Qf(e,s=>{let a=s;lf(a,o,[],r)&&(i||=[],i.push(a))}),i!==void 0&&wv(i,o),t}function wv(n,e){for(let t=0;t<n.length;t++){let{ngModule:r,providers:i}=n[t];Jf(i,o=>{e(o,r)})}}function lf(n,e,t,r){if(n=Bn(n),!n)return!1;let i=null,o=wg(n),s=!o&&Ui(n);if(!o&&!s){let c=n.ngModule;if(o=wg(c),o)i=c;else return!1}else{if(s&&!s.standalone)return!1;i=n}let a=r.has(i);if(s){if(a)return!1;if(r.add(i),s.dependencies){let c=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of c)lf(l,e,t,r)}}else if(o){if(o.imports!=null&&!a){r.add(i);let l;try{Qf(o.imports,u=>{lf(u,e,t,r)&&(l||=[],l.push(u))})}finally{}l!==void 0&&wv(l,e)}if(!a){let l=Lo(i)||(()=>new i);e({provide:i,useFactory:l,deps:Fo},i),e({provide:yv,useValue:i,multi:!0},i),e({provide:Oo,useValue:()=>Ye(i),multi:!0},i)}let c=o.providers;if(c!=null&&!a){let l=n;Jf(c,u=>{e(u,l)})}}else return!1;return i!==n&&n.providers!==void 0}function Jf(n,e){for(let t of n)hv(t)&&(t=t.\u0275providers),Array.isArray(t)?Jf(t,e):e(t)}var Gw=vt({provide:String,useValue:vt});function Dv(n){return n!==null&&typeof n=="object"&&Gw in n}function jw(n){return!!(n&&n.useExisting)}function Ww(n){return!!(n&&n.useFactory)}function uf(n){return typeof n=="function"}var Ll=new Le(""),al={},$w={},Jd;function eh(){return Jd===void 0&&(Jd=new gl),Jd}var Vn=class{},oa=class extends Vn{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,r,i){super(),this.parent=t,this.source=r,this.scopes=i,ff(e,s=>this.processProvider(s)),this.records.set(_v,Ao(void 0,this)),i.has("environment")&&this.records.set(Vn,Ao(void 0,this));let o=this.records.get(Ll);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(yv,Fo,$e.Self))}destroy(){ea(this),this._destroyed=!0;let e=ct(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of t)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),ct(e)}}onDestroy(e){return ea(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){ea(this);let t=oi(this),r=kn(void 0),i;try{return e()}finally{oi(t),kn(r)}}get(e,t=ra,r=$e.Default){if(ea(this),e.hasOwnProperty(Cg))return e[Cg](this);r=Pl(r);let i,o=oi(this),s=kn(void 0);try{if(!(r&$e.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=Qw(e)&&Nl(e);l&&this.injectableDefInScope(l)?c=Ao(df(e),al):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=r&$e.Self?eh():this.parent;return t=r&$e.Optional&&t===ra?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[pl]=a[pl]||[]).unshift(wn(e)),o)throw a;return kw(a,e,"R3InjectorError",this.source)}else throw a}finally{kn(s),oi(o)}}resolveInjectorInitializers(){let e=ct(null),t=oi(this),r=kn(void 0),i;try{let o=this.get(Oo,Fo,$e.Self);for(let s of o)s()}finally{oi(t),kn(r),ct(e)}}toString(){let e=[],t=this.records;for(let r of t.keys())e.push(wn(r));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=Bn(e);let t=uf(e)?e:Bn(e&&e.provide),r=Xw(e);if(!uf(e)&&e.multi===!0){let i=this.records.get(t);i||(i=Ao(void 0,al,!0),i.factory=()=>cf(i.multi),this.records.set(t,i)),t=e,i.multi.push(e)}this.records.set(t,r)}hydrate(e,t){let r=ct(null);try{return t.value===al&&(t.value=$w,t.value=t.factory()),typeof t.value=="object"&&t.value&&Kw(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{ct(r)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=Bn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function df(n){let e=Nl(n),t=e!==null?e.factory:Lo(n);if(t!==null)return t;if(n instanceof Le)throw new Ae(204,!1);if(n instanceof Function)return qw(n);throw new Ae(204,!1)}function qw(n){if(n.length>0)throw new Ae(204,!1);let t=Sw(n);return t!==null?()=>t.factory(n):()=>new n}function Xw(n){if(Dv(n))return Ao(void 0,n.useValue);{let e=Yw(n);return Ao(e,al)}}function Yw(n,e,t){let r;if(uf(n)){let i=Bn(n);return Lo(i)||df(i)}else if(Dv(n))r=()=>Bn(n.useValue);else if(Ww(n))r=()=>n.useFactory(...cf(n.deps||[]));else if(jw(n))r=()=>Ye(Bn(n.useExisting));else{let i=Bn(n&&(n.useClass||n.provide));if(Zw(n))r=()=>new i(...cf(n.deps));else return Lo(i)||df(i)}return r}function ea(n){if(n.destroyed)throw new Ae(205,!1)}function Ao(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function Zw(n){return!!n.deps}function Kw(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function Qw(n){return typeof n=="function"||typeof n=="object"&&n instanceof Le}function ff(n,e){for(let t of n)Array.isArray(t)?ff(t,e):t&&hv(t)?ff(t.\u0275providers,e):e(t)}function tr(n,e){n instanceof oa&&ea(n);let t,r=oi(n),i=kn(void 0);try{return e()}finally{oi(r),kn(i)}}function Jw(){return mv()!==void 0||Fw()!=null}function eD(n){return typeof n=="function"}var Br=0,qe=1,Re=2,Kt=3,Jn=4,nr=5,vl=6,_l=7,Ur=8,Uo=9,ai=10,Hn=11,sa=12,Ag=13,fa=14,Er=15,ki=16,Io=17,kr=18,Fl=19,Cv=20,si=21,ef=22,yl=23,Dn=24,Bi=25,Tv=1;var Vi=7,xl=8,ko=9,Cn=10,El=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n}(El||{});function Fi(n){return Array.isArray(n)&&typeof n[Tv]=="object"}function Vr(n){return Array.isArray(n)&&n[Tv]===!0}function Av(n){return(n.flags&4)!==0}function th(n){return n.componentOffset>-1}function Iv(n){return(n.flags&1)===1}function ha(n){return!!n.template}function hf(n){return(n[Re]&512)!==0}var pf=class{previousValue;currentValue;firstChange;constructor(e,t,r){this.previousValue=e,this.currentValue=t,this.firstChange=r}isFirstChange(){return this.firstChange}};function Rv(n,e,t,r){e!==null?e.applyValueToInputSignal(e,r):n[t]=r}var nh=(()=>{let n=()=>Nv;return n.ngInherit=!0,n})();function Nv(n){return n.type.prototype.ngOnChanges&&(n.setInput=nD),tD}function tD(){let n=Lv(this),e=n?.current;if(e){let t=n.previous;if(t===ia)n.previous=e;else for(let r in e)t[r]=e[r];n.current=null,this.ngOnChanges(e)}}function nD(n,e,t,r,i){let o=this.declaredInputs[r],s=Lv(n)||rD(n,{previous:ia,current:null}),a=s.current||(s.current={}),c=s.previous,l=c[o];a[o]=new pf(l&&l.currentValue,t,c===ia),Rv(n,e,i,t)}var Pv="__ngSimpleChanges__";function Lv(n){return n[Pv]||null}function rD(n,e){return n[Pv]=e}var Ig=null;var yr=function(n,e,t){Ig?.(n,e,t)},iD="svg",oD="math";function Sr(n){for(;Array.isArray(n);)n=n[Br];return n}function sD(n,e){return Sr(e[n])}function wr(n,e){return Sr(e[n.index])}function aD(n,e){return n.data[e]}function jo(n,e){let t=e[n];return Fi(t)?t:t[Br]}function cD(n){return(n[Re]&4)===4}function rh(n){return(n[Re]&128)===128}function lD(n){return Vr(n[Kt])}function Rg(n,e){return e==null?null:n[e]}function Fv(n){n[Io]=0}function ih(n){n[Re]&1024||(n[Re]|=1024,rh(n)&&Ul(n))}function Ol(n){return!!(n[Re]&9216||n[Dn]?.dirty)}function mf(n){n[ai].changeDetectionScheduler?.notify(9),n[Re]&64&&(n[Re]|=1024),Ol(n)&&Ul(n)}function Ul(n){n[ai].changeDetectionScheduler?.notify(0);let e=Hi(n);for(;e!==null&&!(e[Re]&8192||(e[Re]|=8192,!rh(e)));)e=Hi(e)}function Ov(n,e){if((n[Re]&256)===256)throw new Ae(911,!1);n[si]===null&&(n[si]=[]),n[si].push(e)}function uD(n,e){if(n[si]===null)return;let t=n[si].indexOf(e);t!==-1&&n[si].splice(t,1)}function Hi(n){let e=n[Kt];return Vr(e)?e[Kt]:e}var dt={lFrame:jv(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var gf=!1;function dD(){return dt.lFrame.elementDepthCount}function fD(){dt.lFrame.elementDepthCount++}function hD(){dt.lFrame.elementDepthCount--}function Uv(){return dt.bindingsEnabled}function pD(){return dt.skipHydrationRootTNode!==null}function mD(n){return dt.skipHydrationRootTNode===n}function gD(){dt.skipHydrationRootTNode=null}function zt(){return dt.lFrame.lView}function ji(){return dt.lFrame.tView}function rr(){let n=kv();for(;n!==null&&n.type===64;)n=n.parent;return n}function kv(){return dt.lFrame.currentTNode}function vD(){let n=dt.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function kl(n,e){let t=dt.lFrame;t.currentTNode=n,t.isParent=e}function Bv(){return dt.lFrame.isParent}function _D(){dt.lFrame.isParent=!1}function Vv(){return gf}function Ng(n){let e=gf;return gf=n,e}function yD(n){return dt.lFrame.bindingIndex=n}function xD(){return dt.lFrame.bindingIndex++}function ED(){return dt.lFrame.inI18n}function SD(n,e){let t=dt.lFrame;t.bindingIndex=t.bindingRootIndex=n,vf(e)}function MD(){return dt.lFrame.currentDirectiveIndex}function vf(n){dt.lFrame.currentDirectiveIndex=n}function Hv(){return dt.lFrame.currentQueryIndex}function oh(n){dt.lFrame.currentQueryIndex=n}function bD(n){let e=n[qe];return e.type===2?e.declTNode:e.type===1?n[nr]:null}function zv(n,e,t){if(t&$e.SkipSelf){let i=e,o=n;for(;i=i.parent,i===null&&!(t&$e.Host);)if(i=bD(o),i===null||(o=o[fa],i.type&10))break;if(i===null)return!1;e=i,n=o}let r=dt.lFrame=Gv();return r.currentTNode=e,r.lView=n,!0}function sh(n){let e=Gv(),t=n[qe];dt.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function Gv(){let n=dt.lFrame,e=n===null?null:n.child;return e===null?jv(n):e}function jv(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function Wv(){let n=dt.lFrame;return dt.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var $v=Wv;function ah(){let n=Wv();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function ch(){return dt.lFrame.selectedIndex}function zi(n){dt.lFrame.selectedIndex=n}function wD(){return dt.lFrame.currentNamespace}var qv=!0;function Xv(){return qv}function Yv(n){qv=n}function DD(n,e,t){let{ngOnChanges:r,ngOnInit:i,ngDoCheck:o}=e.type.prototype;if(r){let s=Nv(e);(t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s)}i&&(t.preOrderHooks??=[]).push(0-n,i),o&&((t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o))}function Zv(n,e){for(let t=e.directiveStart,r=e.directiveEnd;t<r;t++){let o=n.data[t].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=o;s&&(n.contentHooks??=[]).push(-t,s),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function cl(n,e,t){Kv(n,e,3,t)}function ll(n,e,t,r){(n[Re]&3)===t&&Kv(n,e,t,r)}function tf(n,e){let t=n[Re];(t&3)===e&&(t&=16383,t+=1,n[Re]=t)}function Kv(n,e,t,r){let i=r!==void 0?n[Io]&65535:0,o=r??-1,s=e.length-1,a=0;for(let c=i;c<s;c++)if(typeof e[c+1]=="number"){if(a=e[c],r!=null&&a>=r)break}else e[c]<0&&(n[Io]+=65536),(a<o||o==-1)&&(CD(n,t,e,c),n[Io]=(n[Io]&4294901760)+c+2),c++}function Pg(n,e){yr(4,n,e);let t=ct(null);try{e.call(n)}finally{ct(t),yr(5,n,e)}}function CD(n,e,t,r){let i=t[r]<0,o=t[r+1],s=i?-t[r]:t[r],a=n[s];i?n[Re]>>14<n[Io]>>16&&(n[Re]&3)===e&&(n[Re]+=16384,Pg(a,o)):Pg(a,o)}var Po=-1,aa=class{factory;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,r){this.factory=e,this.canSeeViewProviders=t,this.injectImpl=r}};function TD(n){return n instanceof aa}function AD(n){return(n.flags&8)!==0}function ID(n){return(n.flags&16)!==0}function _f(n,e,t){let r=0;for(;r<t.length;){let i=t[r];if(typeof i=="number"){if(i!==0)break;r++;let o=t[r++],s=t[r++],a=t[r++];n.setAttribute(e,s,a,o)}else{let o=i,s=t[++r];ND(o)?n.setProperty(e,o,s):n.setAttribute(e,o,s),r++}}return r}function RD(n){return n===3||n===4||n===6}function ND(n){return n.charCodeAt(0)===64}function lh(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let r=0;r<e.length;r++){let i=e[r];typeof i=="number"?t=i:t===0||(t===-1||t===2?Lg(n,t,i,null,e[++r]):Lg(n,t,i,null,null))}}return n}function Lg(n,e,t,r,i){let o=0,s=n.length;if(e===-1)s=-1;else for(;o<n.length;){let a=n[o++];if(typeof a=="number"){if(a===e){s=-1;break}else if(a>e){s=o-1;break}}}for(;o<n.length;){let a=n[o];if(typeof a=="number")break;if(a===t){if(r===null){i!==null&&(n[o+1]=i);return}else if(r===n[o+1]){n[o+2]=i;return}}o++,r!==null&&o++,i!==null&&o++}s!==-1&&(n.splice(s,0,e),o=s+1),n.splice(o++,0,t),r!==null&&n.splice(o++,0,r),i!==null&&n.splice(o++,0,i)}var nf={},yf=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,r){r=Pl(r);let i=this.injector.get(e,nf,r);return i!==nf||t===nf?i:this.parentInjector.get(e,t,r)}};function Qv(n){return n!==Po}function Sl(n){return n&32767}function PD(n){return n>>16}function Ml(n,e){let t=PD(n),r=e;for(;t>0;)r=r[fa],t--;return r}var xf=!0;function Fg(n){let e=xf;return xf=n,e}var LD=256,Jv=LD-1,e_=5,FD=0,xr={};function OD(n,e,t){let r;typeof t=="string"?r=t.charCodeAt(0)||0:t.hasOwnProperty(na)&&(r=t[na]),r==null&&(r=t[na]=FD++);let i=r&Jv,o=1<<i;e.data[n+(i>>e_)]|=o}function t_(n,e){let t=n_(n,e);if(t!==-1)return t;let r=e[qe];r.firstCreatePass&&(n.injectorIndex=e.length,rf(r.data,n),rf(e,null),rf(r.blueprint,null));let i=uh(n,e),o=n.injectorIndex;if(Qv(i)){let s=Sl(i),a=Ml(i,e),c=a[qe].data;for(let l=0;l<8;l++)e[o+l]=a[s+l]|c[s+l]}return e[o+8]=i,o}function rf(n,e){n.push(0,0,0,0,0,0,0,0,e)}function n_(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function uh(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,r=null,i=e;for(;i!==null;){if(r=a_(i),r===null)return Po;if(t++,i=i[fa],r.injectorIndex!==-1)return r.injectorIndex|t<<16}return Po}function UD(n,e,t){OD(n,e,t)}function r_(n,e,t){if(t&$e.Optional||n!==void 0)return n;Kf(e,"NodeInjector")}function i_(n,e,t,r){if(t&$e.Optional&&r===void 0&&(r=null),!(t&($e.Self|$e.Host))){let i=n[Uo],o=kn(void 0);try{return i?i.get(e,r,t&$e.Optional):gv(e,r,t&$e.Optional)}finally{kn(o)}}return r_(r,e,t)}function o_(n,e,t,r=$e.Default,i){if(n!==null){if(e[Re]&2048&&!(r&$e.Self)){let s=HD(n,e,t,r,xr);if(s!==xr)return s}let o=s_(n,e,t,r,xr);if(o!==xr)return o}return i_(e,t,r,i)}function s_(n,e,t,r,i){let o=BD(t);if(typeof o=="function"){if(!zv(e,n,r))return r&$e.Host?r_(i,t,r):i_(e,t,r,i);try{let s;if(s=o(r),s==null&&!(r&$e.Optional))Kf(t);else return s}finally{$v()}}else if(typeof o=="number"){let s=null,a=n_(n,e),c=Po,l=r&$e.Host?e[Er][nr]:null;for((a===-1||r&$e.SkipSelf)&&(c=a===-1?uh(n,e):e[a+8],c===Po||!Ug(r,!1)?a=-1:(s=e[qe],a=Sl(c),e=Ml(c,e)));a!==-1;){let u=e[qe];if(Og(o,a,u.data)){let d=kD(a,e,t,s,r,l);if(d!==xr)return d}c=e[a+8],c!==Po&&Ug(r,e[qe].data[a+8]===l)&&Og(o,a,e)?(s=u,a=Sl(c),e=Ml(c,e)):a=-1}}return i}function kD(n,e,t,r,i,o){let s=e[qe],a=s.data[n+8],c=r==null?th(a)&&xf:r!=s&&(a.type&3)!==0,l=i&$e.Host&&o===a,u=ul(a,s,t,c,l);return u!==null?Bo(e,s,u,a):xr}function ul(n,e,t,r,i){let o=n.providerIndexes,s=e.data,a=o&1048575,c=n.directiveStart,l=n.directiveEnd,u=o>>20,d=r?a:a+u,f=i?a+u:l;for(let p=d;p<f;p++){let g=s[p];if(p<c&&t===g||p>=c&&g.type===t)return p}if(i){let p=s[c];if(p&&ha(p)&&p.type===t)return c}return null}function Bo(n,e,t,r){let i=n[t],o=e.data;if(TD(i)){let s=i;s.resolving&&Aw(Tw(o[t]));let a=Fg(s.canSeeViewProviders);s.resolving=!0;let c,l=s.injectImpl?kn(s.injectImpl):null,u=zv(n,r,$e.Default);try{i=n[t]=s.factory(void 0,o,n,r),e.firstCreatePass&&t>=r.directiveStart&&DD(t,o[t],e)}finally{l!==null&&kn(l),Fg(a),s.resolving=!1,$v()}}return i}function BD(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(na)?n[na]:void 0;return typeof e=="number"?e>=0?e&Jv:VD:e}function Og(n,e,t){let r=1<<n;return!!(t[e+(n>>e_)]&r)}function Ug(n,e){return!(n&$e.Self)&&!(n&$e.Host&&e)}var Oi=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,r){return o_(this._tNode,this._lView,e,Pl(r),t)}};function VD(){return new Oi(rr(),zt())}function dh(n){return Zf(()=>{let e=n.prototype.constructor,t=e[hl]||Ef(e),r=Object.prototype,i=Object.getPrototypeOf(n.prototype).constructor;for(;i&&i!==r;){let o=i[hl]||Ef(i);if(o&&o!==t)return o;i=Object.getPrototypeOf(i)}return o=>new o})}function Ef(n){return lv(n)?()=>{let e=Ef(Bn(n));return e&&e()}:Lo(n)}function HD(n,e,t,r,i){let o=n,s=e;for(;o!==null&&s!==null&&s[Re]&2048&&!(s[Re]&512);){let a=s_(o,s,t,r|$e.Self,xr);if(a!==xr)return a;let c=o.parent;if(!c){let l=s[Cv];if(l){let u=l.get(t,xr,r);if(u!==xr)return u}c=a_(s),s=s[fa]}o=c}return i}function a_(n){let e=n[qe],t=e.type;return t===2?e.declTNode:t===1?n[nr]:null}function kg(n,e=null,t=null,r){let i=c_(n,e,t,r);return i.resolveInjectorInitializers(),i}function c_(n,e=null,t=null,r,i=new Set){let o=[t||Fo,zw(n)];return r=r||(typeof n=="object"?void 0:wn(n)),new oa(o,e||eh(),r||null,i)}var Mr=class n{static THROW_IF_NOT_FOUND=ra;static NULL=new gl;static create(e,t){if(Array.isArray(e))return kg({name:""},t,e,"");{let r=e.name??"";return kg({name:r},e.parent,e.providers,r)}}static \u0275prov=Te({token:n,providedIn:"any",factory:()=>Ye(_v)});static __NG_ELEMENT_ID__=-1};var zD=new Le("");zD.__NG_ELEMENT_ID__=n=>{let e=rr();if(e===null)throw new Ae(204,!1);if(e.type&2)return e.value;if(n&$e.Optional)return null;throw new Ae(204,!1)};var l_=!1,u_=(()=>{class n{static __NG_ELEMENT_ID__=GD;static __NG_ENV_ID__=t=>t}return n})(),Sf=class extends u_{_lView;constructor(e){super(),this._lView=e}onDestroy(e){return Ov(this._lView,e),()=>uD(this._lView,e)}};function GD(){return new Sf(zt())}var ca=class{},Bl=new Le("",{providedIn:"root",factory:()=>!1});var d_=new Le(""),f_=new Le(""),Wo=(()=>{class n{taskId=0;pendingTasks=new Set;get _hasPendingTasks(){return this.hasPendingTasks.value}hasPendingTasks=new $t(!1);add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static \u0275prov=Te({token:n,providedIn:"root",factory:()=>new n})}return n})();var Mf=class extends bt{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,Jw()&&(this.destroyRef=ae(u_,{optional:!0})??void 0,this.pendingTasks=ae(Wo,{optional:!0})??void 0)}emit(e){let t=ct(null);try{super.next(e)}finally{ct(t)}}subscribe(e,t,r){let i=e,o=t||(()=>null),s=r;if(e&&typeof e=="object"){let c=e;i=c.next?.bind(c),o=c.error?.bind(c),s=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),i&&(i=this.wrapInTimeout(i)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:i,error:o,complete:s});return e instanceof It&&e.add(a),a}wrapInTimeout(e){return t=>{let r=this.pendingTasks?.add();setTimeout(()=>{e(t),r!==void 0&&this.pendingTasks?.remove(r)})}}},bn=Mf;function bl(...n){}function h_(n){let e,t;function r(){n=bl;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),r()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),r()})),()=>r()}function Bg(n){return queueMicrotask(()=>n()),()=>{n=bl}}var fh="isAngularZone",wl=fh+"_ID",jD=0,Nt=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new bn(!1);onMicrotaskEmpty=new bn(!1);onStable=new bn(!1);onError=new bn(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:i=!1,scheduleInRootZone:o=l_}=e;if(typeof Zone>"u")throw new Ae(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!i&&r,s.shouldCoalesceRunChangeDetection=i,s.callbackScheduled=!1,s.scheduleInRootZone=o,qD(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(fh)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Ae(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Ae(909,!1)}run(e,t,r){return this._inner.run(e,t,r)}runTask(e,t,r,i){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+i,e,WD,bl,bl);try{return o.runTask(s,t,r)}finally{o.cancelTask(s)}}runGuarded(e,t,r){return this._inner.runGuarded(e,t,r)}runOutsideAngular(e){return this._outer.run(e)}},WD={};function hh(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function $D(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){h_(()=>{n.callbackScheduled=!1,bf(n),n.isCheckStableRunning=!0,hh(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),bf(n)}function qD(n){let e=()=>{$D(n)},t=jD++;n._inner=n._inner.fork({name:"angular",properties:{[fh]:!0,[wl]:t,[wl+t]:!0},onInvokeTask:(r,i,o,s,a,c)=>{if(XD(c))return r.invokeTask(o,s,a,c);try{return Vg(n),r.invokeTask(o,s,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),Hg(n)}},onInvoke:(r,i,o,s,a,c,l)=>{try{return Vg(n),r.invoke(o,s,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!YD(c)&&e(),Hg(n)}},onHasTask:(r,i,o,s)=>{r.hasTask(o,s),i===o&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,bf(n),hh(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(r,i,o,s)=>(r.handleError(o,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function bf(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Vg(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function Hg(n){n._nesting--,hh(n)}var wf=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new bn;onMicrotaskEmpty=new bn;onStable=new bn;onError=new bn;run(e,t,r){return e.apply(t,r)}runGuarded(e,t,r){return e.apply(t,r)}runOutsideAngular(e){return e()}runTask(e,t,r,i){return e.apply(t,r)}};function XD(n){return p_(n,"__ignore_ng_zone__")}function YD(n){return p_(n,"__scheduler_tick__")}function p_(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var ci=class{_console=console;handleError(e){this._console.error("ERROR",e)}},ZD=new Le("",{providedIn:"root",factory:()=>{let n=ae(Nt),e=ae(ci);return t=>n.runOutsideAngular(()=>e.handleError(t))}});function zg(n,e){return av(n,e)}function KD(n){return av(sv,n)}var m_=(zg.required=KD,zg);function QD(){return $o(rr(),zt())}function $o(n,e){return new Wi(wr(n,e))}var Wi=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=QD}return n})();function JD(n){return n instanceof Wi?n.nativeElement:n}function eC(){return this._results[Symbol.iterator]()}var Df=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new bt}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let r=Hw(e);(this._changesDetected=!Vw(this._results,r,t))&&(this._results=r,this.length=r.length,this.last=r[this.length-1],this.first=r[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=eC};function g_(n){return(n.flags&128)===128}var v_=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(v_||{}),__=new Map,tC=0;function nC(){return tC++}function rC(n){__.set(n[Fl],n)}function Cf(n){__.delete(n[Fl])}var Gg="__ngContext__";function Vo(n,e){Fi(e)?(n[Gg]=e[Fl],rC(e)):n[Gg]=e}function y_(n){return E_(n[sa])}function x_(n){return E_(n[Jn])}function E_(n){for(;n!==null&&!Vr(n);)n=n[Jn];return n}var Tf;function S_(n){Tf=n}function iC(){if(Tf!==void 0)return Tf;if(typeof document<"u")return document;throw new Ae(210,!1)}var ph=new Le("",{providedIn:"root",factory:()=>oC}),oC="ng",mh=new Le(""),Hr=new Le("",{providedIn:"platform",factory:()=>"unknown"});var gh=new Le("",{providedIn:"root",factory:()=>iC().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var sC="h",aC="b";var M_=!1,cC=new Le("",{providedIn:"root",factory:()=>M_});var b_=function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n}(b_||{}),w_=new Le(""),jg=new Set;function vh(n){jg.has(n)||(jg.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var lC=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=Te({token:n,providedIn:"root",factory:()=>new n})}return n})();var uC=()=>null;function _h(n,e,t=!1){return uC(n,e,t)}var br=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(br||{});function D_(n){return n.ownerDocument.defaultView}function C_(n){return n instanceof Function?n():n}var li=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(li||{}),$i=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}($i||{}),dC;function yh(n,e){return dC(n,e)}function Ro(n,e,t,r,i){if(r!=null){let o,s=!1;Vr(r)?o=r:Fi(r)&&(s=!0,r=r[Br]);let a=Sr(r);n===0&&t!==null?i==null?N_(e,t,a):Dl(e,t,a,i||null,!0):n===1&&t!==null?Dl(e,t,a,i||null,!0):n===2?DC(e,a,s):n===3&&e.destroyNode(a),o!=null&&TC(e,n,o,t,i)}}function fC(n,e){return n.createText(e)}function hC(n,e,t){n.setValue(e,t)}function T_(n,e,t){return n.createElement(e,t)}function pC(n,e){A_(n,e),e[Br]=null,e[nr]=null}function mC(n,e,t,r,i,o){r[Br]=i,r[nr]=e,Vl(n,r,t,1,i,o)}function A_(n,e){e[ai].changeDetectionScheduler?.notify(10),Vl(n,e,e[Hn],2,null,null)}function gC(n){let e=n[sa];if(!e)return of(n[qe],n);for(;e;){let t=null;if(Fi(e))t=e[sa];else{let r=e[Cn];r&&(t=r)}if(!t){for(;e&&!e[Jn]&&e!==n;)Fi(e)&&of(e[qe],e),e=e[Kt];e===null&&(e=n),Fi(e)&&of(e[qe],e),t=e&&e[Jn]}e=t}}function vC(n,e,t,r){let i=Cn+r,o=t.length;r>0&&(t[i-1][Jn]=e),r<o-Cn?(e[Jn]=t[i],vv(t,Cn+r,e)):(t.push(e),e[Jn]=null),e[Kt]=t;let s=e[ki];s!==null&&t!==s&&I_(s,e);let a=e[kr];a!==null&&a.insertView(n),mf(e),e[Re]|=128}function I_(n,e){let t=n[ko],r=e[Kt];if(Fi(r))n[Re]|=El.HasTransplantedViews;else{let i=r[Kt][Er];e[Er]!==i&&(n[Re]|=El.HasTransplantedViews)}t===null?n[ko]=[e]:t.push(e)}function xh(n,e){let t=n[ko],r=t.indexOf(e);t.splice(r,1)}function Af(n,e){if(n.length<=Cn)return;let t=Cn+e,r=n[t];if(r){let i=r[ki];i!==null&&i!==n&&xh(i,r),e>0&&(n[t-1][Jn]=r[Jn]);let o=ml(n,Cn+e);pC(r[qe],r);let s=o[kr];s!==null&&s.detachView(o[qe]),r[Kt]=null,r[Jn]=null,r[Re]&=-129}return r}function R_(n,e){if(!(e[Re]&256)){let t=e[Hn];t.destroyNode&&Vl(n,e,t,3,null,null),gC(e)}}function of(n,e){if(e[Re]&256)return;let t=ct(null);try{e[Re]&=-129,e[Re]|=256,e[Dn]&&Nd(e[Dn]),yC(n,e),_C(n,e),e[qe].type===1&&e[Hn].destroy();let r=e[ki];if(r!==null&&Vr(e[Kt])){r!==e[Kt]&&xh(r,e);let i=e[kr];i!==null&&i.detachView(n)}Cf(e)}finally{ct(t)}}function _C(n,e){let t=n.cleanup,r=e[_l];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let a=t[s+3];a>=0?r[a]():r[-a].unsubscribe(),s+=2}else{let a=r[t[s+1]];t[s].call(a)}r!==null&&(e[_l]=null);let i=e[si];if(i!==null){e[si]=null;for(let s=0;s<i.length;s++){let a=i[s];a()}}let o=e[yl];if(o!==null){e[yl]=null;for(let s of o)s.destroy()}}function yC(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let r=0;r<t.length;r+=2){let i=e[t[r]];if(!(i instanceof aa)){let o=t[r+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=i[o[s]],c=o[s+1];yr(4,a,c);try{c.call(a)}finally{yr(5,a,c)}}else{yr(4,i,o);try{o.call(i)}finally{yr(5,i,o)}}}}}function xC(n,e,t){return EC(n,e.parent,t)}function EC(n,e,t){let r=e;for(;r!==null&&r.type&168;)e=r,r=e.parent;if(r===null)return t[Br];{let{componentOffset:i}=r;if(i>-1){let{encapsulation:o}=n.data[r.directiveStart+i];if(o===br.None||o===br.Emulated)return null}return wr(r,t)}}function Dl(n,e,t,r,i){n.insertBefore(e,t,r,i)}function N_(n,e,t){n.appendChild(e,t)}function Wg(n,e,t,r,i){r!==null?Dl(n,e,t,r,i):N_(n,e,t)}function P_(n,e){return n.parentNode(e)}function SC(n,e){return n.nextSibling(e)}function MC(n,e,t){return wC(n,e,t)}function bC(n,e,t){return n.type&40?wr(n,t):null}var wC=bC,$g;function L_(n,e,t,r){let i=xC(n,r,e),o=e[Hn],s=r.parent||e[nr],a=MC(s,r,e);if(i!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)Wg(o,i,t[c],a,!1);else Wg(o,i,t,a,!1);$g!==void 0&&$g(o,r,e,t,i)}function ta(n,e){if(e!==null){let t=e.type;if(t&3)return wr(e,n);if(t&4)return If(-1,n[e.index]);if(t&8){let r=e.child;if(r!==null)return ta(n,r);{let i=n[e.index];return Vr(i)?If(-1,i):Sr(i)}}else{if(t&128)return ta(n,e.next);if(t&32)return yh(e,n)()||Sr(n[e.index]);{let r=F_(n,e);if(r!==null){if(Array.isArray(r))return r[0];let i=Hi(n[Er]);return ta(i,r)}else return ta(n,e.next)}}}return null}function F_(n,e){if(e!==null){let r=n[Er][nr],i=e.projection;return r.projection[i]}return null}function If(n,e){let t=Cn+n+1;if(t<e.length){let r=e[t],i=r[qe].firstChild;if(i!==null)return ta(r,i)}return e[Vi]}function DC(n,e,t){n.removeChild(null,e,t)}function Eh(n,e,t,r,i,o,s){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=r[t.index],c=t.type;if(s&&e===0&&(a&&Vo(Sr(a),r),t.flags|=2),(t.flags&32)!==32)if(c&8)Eh(n,e,t.child,r,i,o,!1),Ro(e,n,i,a,o);else if(c&32){let l=yh(t,r),u;for(;u=l();)Ro(e,n,i,u,o);Ro(e,n,i,a,o)}else c&16?CC(n,e,r,t,i,o):Ro(e,n,i,a,o);t=s?t.projectionNext:t.next}}function Vl(n,e,t,r,i,o){Eh(t,r,n.firstChild,e,i,o,!1)}function CC(n,e,t,r,i,o){let s=t[Er],c=s[nr].projection[r.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Ro(e,n,i,u,o)}else{let l=c,u=s[Kt];g_(r)&&(l.flags|=128),Eh(n,e,l,u,i,o,!0)}}function TC(n,e,t,r,i){let o=t[Vi],s=Sr(t);o!==s&&Ro(e,n,r,o,i);for(let a=Cn;a<t.length;a++){let c=t[a];Vl(c[qe],c,n,e,r,o)}}function AC(n,e,t){n.setAttribute(e,"style",t)}function O_(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function U_(n,e,t){let{mergedAttrs:r,classes:i,styles:o}=t;r!==null&&_f(n,e,r),i!==null&&O_(n,e,i),o!==null&&AC(n,e,o)}function IC(n,e,t){let r=n.length;for(;;){let i=n.indexOf(e,t);if(i===-1)return i;if(i===0||n.charCodeAt(i-1)<=32){let o=e.length;if(i+o===r||n.charCodeAt(i+o)<=32)return i}t=i+1}}var k_="ng-template";function RC(n,e,t,r){let i=0;if(r){for(;i<e.length&&typeof e[i]=="string";i+=2)if(e[i]==="class"&&IC(e[i+1].toLowerCase(),t,0)!==-1)return!0}else if(Sh(n))return!1;if(i=e.indexOf(1,i),i>-1){let o;for(;++i<e.length&&typeof(o=e[i])=="string";)if(o.toLowerCase()===t)return!0}return!1}function Sh(n){return n.type===4&&n.value!==k_}function NC(n,e,t){let r=n.type===4&&!t?k_:n.value;return e===r}function PC(n,e,t){let r=4,i=n.attrs,o=i!==null?OC(i):0,s=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!s&&!Qn(r)&&!Qn(c))return!1;if(s&&Qn(c))continue;s=!1,r=c|r&1;continue}if(!s)if(r&4){if(r=2|r&1,c!==""&&!NC(n,c,t)||c===""&&e.length===1){if(Qn(r))return!1;s=!0}}else if(r&8){if(i===null||!RC(n,i,c,t)){if(Qn(r))return!1;s=!0}}else{let l=e[++a],u=LC(c,i,Sh(n),t);if(u===-1){if(Qn(r))return!1;s=!0;continue}if(l!==""){let d;if(u>o?d="":d=i[u+1].toLowerCase(),r&2&&l!==d){if(Qn(r))return!1;s=!0}}}}return Qn(r)||s}function Qn(n){return(n&1)===0}function LC(n,e,t,r){if(e===null)return-1;let i=0;if(r||!t){let o=!1;for(;i<e.length;){let s=e[i];if(s===n)return i;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=e[++i];for(;typeof a=="string";)a=e[++i];continue}else{if(s===4)break;if(s===0){i+=4;continue}}i+=o?1:2}return-1}else return UC(e,n)}function FC(n,e,t=!1){for(let r=0;r<e.length;r++)if(PC(n,e[r],t))return!0;return!1}function OC(n){for(let e=0;e<n.length;e++){let t=n[e];if(RD(t))return e}return n.length}function UC(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let r=n[t];if(typeof r=="number")return-1;if(r===e)return t;t++}return-1}function qg(n,e){return n?":not("+e.trim()+")":e}function kC(n){let e=n[0],t=1,r=2,i="",o=!1;for(;t<n.length;){let s=n[t];if(typeof s=="string")if(r&2){let a=n[++t];i+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else r&8?i+="."+s:r&4&&(i+=" "+s);else i!==""&&!Qn(s)&&(e+=qg(o,i),i=""),r=s,o=o||!Qn(r);t++}return i!==""&&(e+=qg(o,i)),e}function BC(n){return n.map(kC).join(",")}function VC(n){let e=[],t=[],r=1,i=2;for(;r<n.length;){let o=n[r];if(typeof o=="string")i===2?o!==""&&e.push(o,n[++r]):i===8&&t.push(o);else{if(!Qn(i))break;i=o}r++}return{attrs:e,classes:t}}var Hl={};function B_(n=1){V_(ji(),zt(),ch()+n,!1)}function V_(n,e,t,r){if(!r)if((e[Re]&3)===3){let o=n.preOrderCheckHooks;o!==null&&cl(e,o,t)}else{let o=n.preOrderHooks;o!==null&&ll(e,o,0,t)}zi(t)}function qi(n,e=$e.Default){let t=zt();if(t===null)return Ye(n,e);let r=rr();return o_(r,t,Bn(n),e)}function H_(n,e,t,r,i,o){let s=ct(null);try{let a=null;i&li.SignalBased&&(a=e[r][vo]),a!==null&&a.transformFn!==void 0&&(o=a.transformFn(o)),i&li.HasDecoratorInputTransform&&(o=n.inputTransforms[r].call(e,o)),n.setInput!==null?n.setInput(e,a,o,t,r):Rv(e,a,r,o)}finally{ct(s)}}function HC(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let r=0;r<t.length;r++){let i=t[r];if(i<0)zi(~i);else{let o=i,s=t[++r],a=t[++r];SD(s,o);let c=e[o];a(2,c)}}}finally{zi(-1)}}function zl(n,e,t,r,i,o,s,a,c,l,u){let d=e.blueprint.slice();return d[Br]=i,d[Re]=r|4|128|8|64|1024,(l!==null||n&&n[Re]&2048)&&(d[Re]|=2048),Fv(d),d[Kt]=d[fa]=n,d[Ur]=t,d[ai]=s||n&&n[ai],d[Hn]=a||n&&n[Hn],d[Uo]=c||n&&n[Uo]||null,d[nr]=o,d[Fl]=nC(),d[vl]=u,d[Cv]=l,d[Er]=e.type==2?n[Er]:d,d}function Mh(n,e,t,r,i){let o=n.data[e];if(o===null)o=zC(n,e,t,r,i),ED()&&(o.flags|=32);else if(o.type&64){o.type=t,o.value=r,o.attrs=i;let s=vD();o.injectorIndex=s===null?-1:s.injectorIndex}return kl(o,!0),o}function zC(n,e,t,r,i){let o=kv(),s=Bv(),a=s?o:o&&o.parent,c=n.data[e]=ZC(n,a,t,e,r,i);return n.firstChild===null&&(n.firstChild=c),o!==null&&(s?o.child==null&&c.parent!==null&&(o.child=c):o.next===null&&(o.next=c,c.prev=o)),c}function z_(n,e,t,r){if(t===0)return-1;let i=e.length;for(let o=0;o<t;o++)e.push(r),n.blueprint.push(r),n.data.push(null);return i}function G_(n,e,t,r,i){let o=ch(),s=r&2;try{zi(-1),s&&e.length>Bi&&V_(n,e,Bi,!1),yr(s?2:0,i),t(r,i)}finally{zi(o),yr(s?3:1,i)}}function j_(n,e,t){if(Av(e)){let r=ct(null);try{let i=e.directiveStart,o=e.directiveEnd;for(let s=i;s<o;s++){let a=n.data[s];if(a.contentQueries){let c=t[s];a.contentQueries(1,c,s)}}}finally{ct(r)}}}function GC(n,e,t){Uv()&&(tT(n,e,t,wr(t,e)),(t.flags&64)===64&&X_(n,e,t))}function jC(n,e,t=wr){let r=e.localNames;if(r!==null){let i=e.index+1;for(let o=0;o<r.length;o+=2){let s=r[o+1],a=s===-1?t(e,n):n[s];n[i++]=a}}}function W_(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=$_(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function $_(n,e,t,r,i,o,s,a,c,l,u){let d=Bi+r,f=d+i,p=WC(d,f),g=typeof l=="function"?l():l;return p[qe]={type:n,blueprint:p,template:t,queries:null,viewQuery:a,declTNode:e,data:p.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function WC(n,e){let t=[];for(let r=0;r<e;r++)t.push(r<n?null:Hl);return t}function $C(n,e,t,r){let o=r.get(cC,M_)||t===br.ShadowDom,s=n.selectRootElement(e,o);return qC(s),s}function qC(n){XC(n)}var XC=()=>null;function YC(n,e,t,r){let i=K_(e);i.push(t),n.firstCreatePass&&Q_(n).push(r,i.length-1)}function ZC(n,e,t,r,i,o){let s=e?e.injectorIndex:-1,a=0;return pD()&&(a|=128),{type:t,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:i,attrs:o,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Xg(n,e,t,r,i){for(let o in e){if(!e.hasOwnProperty(o))continue;let s=e[o];if(s===void 0)continue;r??={};let a,c=li.None;Array.isArray(s)?(a=s[0],c=s[1]):a=s;let l=o;if(i!==null){if(!i.hasOwnProperty(o))continue;l=i[o]}n===0?Yg(r,t,l,a,c):Yg(r,t,l,a)}return r}function Yg(n,e,t,r,i){let o;n.hasOwnProperty(t)?(o=n[t]).push(e,r):o=n[t]=[e,r],i!==void 0&&o.push(i)}function KC(n,e,t){let r=e.directiveStart,i=e.directiveEnd,o=n.data,s=e.attrs,a=[],c=null,l=null;for(let u=r;u<i;u++){let d=o[u],f=t?t.get(d):null,p=f?f.inputs:null,g=f?f.outputs:null;c=Xg(0,d.inputs,u,c,p),l=Xg(1,d.outputs,u,l,g);let y=c!==null&&s!==null&&!Sh(e)?uT(c,u,s):null;a.push(y)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function QC(n,e,t,r){if(Uv()){let i=r===null?null:{"":-1},o=rT(n,t),s,a;o===null?s=a=null:[s,a]=o,s!==null&&q_(n,e,t,s,i,a),i&&iT(t,r,i)}t.mergedAttrs=lh(t.mergedAttrs,t.attrs)}function q_(n,e,t,r,i,o){for(let l=0;l<r.length;l++)UD(t_(t,e),n,r[l].type);sT(t,n.data.length,r.length);for(let l=0;l<r.length;l++){let u=r[l];u.providersResolver&&u.providersResolver(u)}let s=!1,a=!1,c=z_(n,e,r.length,null);for(let l=0;l<r.length;l++){let u=r[l];t.mergedAttrs=lh(t.mergedAttrs,u.hostAttrs),aT(n,t,e,c,u),oT(c,u,i),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!s&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),s=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}KC(n,t,o)}function JC(n,e,t,r,i){let o=i.hostBindings;if(o){let s=n.hostBindingOpCodes;s===null&&(s=n.hostBindingOpCodes=[]);let a=~e.index;eT(s)!=a&&s.push(a),s.push(t,r,o)}}function eT(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function tT(n,e,t,r){let i=t.directiveStart,o=t.directiveEnd;th(t)&&cT(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||t_(t,e),Vo(r,e);let s=t.initialInputs;for(let a=i;a<o;a++){let c=n.data[a],l=Bo(e,n,a,t);if(Vo(l,e),s!==null&&lT(e,a-i,l,c,t,s),ha(c)){let u=jo(t.index,e);u[Ur]=Bo(e,n,a,t)}}}function X_(n,e,t){let r=t.directiveStart,i=t.directiveEnd,o=t.index,s=MD();try{zi(o);for(let a=r;a<i;a++){let c=n.data[a],l=e[a];vf(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&nT(c,l)}}finally{zi(-1),vf(s)}}function nT(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function rT(n,e){let t=n.directiveRegistry,r=null,i=null;if(t)for(let o=0;o<t.length;o++){let s=t[o];if(FC(e,s.selectors,!1))if(r||(r=[]),ha(s))if(s.findHostDirectiveDefs!==null){let a=[];i=i||new Map,s.findHostDirectiveDefs(s,a,i),r.unshift(...a,s);let c=a.length;Rf(n,e,c)}else r.unshift(s),Rf(n,e,0);else i=i||new Map,s.findHostDirectiveDefs?.(s,r,i),r.push(s)}return r===null?null:[r,i]}function Rf(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function iT(n,e,t){if(e){let r=n.localNames=[];for(let i=0;i<e.length;i+=2){let o=t[e[i+1]];if(o==null)throw new Ae(-301,!1);r.push(e[i],o)}}}function oT(n,e,t){if(t){if(e.exportAs)for(let r=0;r<e.exportAs.length;r++)t[e.exportAs[r]]=n;ha(e)&&(t[""]=n)}}function sT(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function aT(n,e,t,r,i){n.data[r]=i;let o=i.factory||(i.factory=Lo(i.type,!0)),s=new aa(o,ha(i),qi);n.blueprint[r]=s,t[r]=s,JC(n,e,r,z_(n,t,i.hostVars,Hl),i)}function Y_(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function cT(n,e,t){let r=wr(e,n),i=W_(t),o=n[ai].rendererFactory,s=bh(n,zl(n,i,null,Y_(t),r,e,null,o.createRenderer(r,t),null,null,null));n[e.index]=s}function lT(n,e,t,r,i,o){let s=o[e];if(s!==null)for(let a=0;a<s.length;){let c=s[a++],l=s[a++],u=s[a++],d=s[a++];H_(r,t,c,l,u,d)}}function uT(n,e,t){let r=null,i=0;for(;i<t.length;){let o=t[i];if(o===0){i+=4;continue}else if(o===5){i+=2;continue}if(typeof o=="number")break;if(n.hasOwnProperty(o)){r===null&&(r=[]);let s=n[o];for(let a=0;a<s.length;a+=3)if(s[a]===e){r.push(o,s[a+1],s[a+2],t[i+1]);break}}i+=2}return r}function dT(n,e,t,r){return[n,!0,0,e,null,r,null,t,null,null]}function Z_(n,e){let t=n.contentQueries;if(t!==null){let r=ct(null);try{for(let i=0;i<t.length;i+=2){let o=t[i],s=t[i+1];if(s!==-1){let a=n.data[s];oh(o),a.contentQueries(2,e[s],s)}}}finally{ct(r)}}}function bh(n,e){return n[sa]?n[Ag][Jn]=e:n[sa]=e,n[Ag]=e,e}function Nf(n,e,t){oh(0);let r=ct(null);try{e(n,t)}finally{ct(r)}}function K_(n){return n[_l]??=[]}function Q_(n){return n.cleanup??=[]}function J_(n,e){let t=n[Uo],r=t?t.get(ci,null):null;r&&r.handleError(e)}function ey(n,e,t,r,i){for(let o=0;o<t.length;){let s=t[o++],a=t[o++],c=t[o++],l=e[s],u=n.data[s];H_(u,l,r,a,c,i)}}function fT(n,e,t){let r=sD(e,n);hC(n[Hn],r,t)}function hT(n,e){let t=jo(e,n),r=t[qe];pT(r,t);let i=t[Br];i!==null&&t[vl]===null&&(t[vl]=_h(i,t[Uo])),wh(r,t,t[Ur])}function pT(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function wh(n,e,t){sh(e);try{let r=n.viewQuery;r!==null&&Nf(1,r,t);let i=n.template;i!==null&&G_(n,e,i,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[kr]?.finishViewCreation(n),n.staticContentQueries&&Z_(n,e),n.staticViewQueries&&Nf(2,n.viewQuery,t);let o=n.components;o!==null&&mT(e,o)}catch(r){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),r}finally{e[Re]&=-5,ah()}}function mT(n,e){for(let t=0;t<e.length;t++)hT(n,e[t])}function gT(n,e,t,r){let i=ct(null);try{let o=e.tView,a=n[Re]&4096?4096:16,c=zl(n,o,t,a,null,e,null,null,r?.injector??null,r?.embeddedViewInjector??null,r?.dehydratedView??null),l=n[e.index];c[ki]=l;let u=n[kr];return u!==null&&(c[kr]=u.createEmbeddedView(o)),wh(o,c,t),c}finally{ct(i)}}function Zg(n,e){return!e||e.firstChild===null||g_(n)}function vT(n,e,t,r=!0){let i=e[qe];if(vC(i,e,n,t),r){let s=If(t,n),a=e[Hn],c=P_(a,n[Vi]);c!==null&&mC(i,n[nr],a,e,c,s)}let o=e[vl];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function Cl(n,e,t,r,i=!1){for(;t!==null;){if(t.type===128){t=i?t.projectionNext:t.next;continue}let o=e[t.index];o!==null&&r.push(Sr(o)),Vr(o)&&_T(o,r);let s=t.type;if(s&8)Cl(n,e,t.child,r);else if(s&32){let a=yh(t,e),c;for(;c=a();)r.push(c)}else if(s&16){let a=F_(e,t);if(Array.isArray(a))r.push(...a);else{let c=Hi(e[Er]);Cl(c[qe],c,a,r,!0)}}t=i?t.projectionNext:t.next}return r}function _T(n,e){for(let t=Cn;t<n.length;t++){let r=n[t],i=r[qe].firstChild;i!==null&&Cl(r[qe],r,i,e)}n[Vi]!==n[Br]&&e.push(n[Vi])}var ty=[];function yT(n){return n[Dn]??xT(n)}function xT(n){let e=ty.pop()??Object.create(ST);return e.lView=n,e}function ET(n){n.lView[Dn]!==n&&(n.lView=null,ty.push(n))}var ST=St(ge({},Pc),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{Ul(n.lView)},consumerOnSignalRead(){this.lView[Dn]=this}});function MT(n){let e=n[Dn]??Object.create(bT);return e.lView=n,e}var bT=St(ge({},Pc),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{let e=Hi(n.lView);for(;e&&!ny(e[qe]);)e=Hi(e);e&&ih(e)},consumerOnSignalRead(){this.lView[Dn]=this}});function ny(n){return n.type!==2}function ry(n){if(n[yl]===null)return;let e=!0;for(;e;){let t=!1;for(let r of n[yl])r.dirty&&(t=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()));e=t&&!!(n[Re]&8192)}}var wT=100;function iy(n,e=!0,t=0){let i=n[ai].rendererFactory,o=!1;o||i.begin?.();try{DT(n,t)}catch(s){throw e&&J_(n,s),s}finally{o||i.end?.()}}function DT(n,e){let t=Vv();try{Ng(!0),Pf(n,e);let r=0;for(;Ol(n);){if(r===wT)throw new Ae(103,!1);r++,Pf(n,1)}}finally{Ng(t)}}function CT(n,e,t,r){let i=e[Re];if((i&256)===256)return;let o=!1,s=!1;sh(e);let a=!0,c=null,l=null;o||(ny(n)?(l=yT(e),c=Id(l)):Rm()===null?(a=!1,l=MT(e),c=Id(l)):e[Dn]&&(Nd(e[Dn]),e[Dn]=null));try{Fv(e),yD(n.bindingStartIndex),t!==null&&G_(n,e,t,2,r);let u=(i&3)===3;if(!o)if(u){let p=n.preOrderCheckHooks;p!==null&&cl(e,p,null)}else{let p=n.preOrderHooks;p!==null&&ll(e,p,0,null),tf(e,0)}if(s||TT(e),ry(e),oy(e,0),n.contentQueries!==null&&Z_(n,e),!o)if(u){let p=n.contentCheckHooks;p!==null&&cl(e,p)}else{let p=n.contentHooks;p!==null&&ll(e,p,1),tf(e,1)}HC(n,e);let d=n.components;d!==null&&ay(e,d,0);let f=n.viewQuery;if(f!==null&&Nf(2,f,r),!o)if(u){let p=n.viewCheckHooks;p!==null&&cl(e,p)}else{let p=n.viewHooks;p!==null&&ll(e,p,2),tf(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[ef]){for(let p of e[ef])p();e[ef]=null}o||(e[Re]&=-73)}catch(u){throw o||Ul(e),u}finally{l!==null&&(Fm(l,c),a&&ET(l)),ah()}}function oy(n,e){for(let t=y_(n);t!==null;t=x_(t))for(let r=Cn;r<t.length;r++){let i=t[r];sy(i,e)}}function TT(n){for(let e=y_(n);e!==null;e=x_(e)){if(!(e[Re]&El.HasTransplantedViews))continue;let t=e[ko];for(let r=0;r<t.length;r++){let i=t[r];ih(i)}}}function AT(n,e,t){let r=jo(e,n);sy(r,t)}function sy(n,e){rh(n)&&Pf(n,e)}function Pf(n,e){let r=n[qe],i=n[Re],o=n[Dn],s=!!(e===0&&i&16);if(s||=!!(i&64&&e===0),s||=!!(i&1024),s||=!!(o?.dirty&&Rd(o)),s||=!1,o&&(o.dirty=!1),n[Re]&=-9217,s)CT(r,n,r.template,n[Ur]);else if(i&8192){ry(n),oy(n,1);let a=r.components;a!==null&&ay(n,a,1)}}function ay(n,e,t){for(let r=0;r<e.length;r++)AT(n,e[r],t)}function Dh(n,e){let t=Vv()?64:1088;for(n[ai].changeDetectionScheduler?.notify(e);n;){n[Re]|=t;let r=Hi(n);if(hf(n)&&!r)return n;n=r}return null}var Gi=class{_lView;_cdRefInjectingView;notifyErrorHandler;_appRef=null;_attachedToViewContainer=!1;get rootNodes(){let e=this._lView,t=e[qe];return Cl(t,e,t.firstChild,[])}constructor(e,t,r=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=r}get context(){return this._lView[Ur]}get dirty(){return!!(this._lView[Re]&9280)||!!this._lView[Dn]?.dirty}set context(e){this._lView[Ur]=e}get destroyed(){return(this._lView[Re]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Kt];if(Vr(e)){let t=e[xl],r=t?t.indexOf(this):-1;r>-1&&(Af(e,r),ml(t,r))}this._attachedToViewContainer=!1}R_(this._lView[qe],this._lView)}onDestroy(e){Ov(this._lView,e)}markForCheck(){Dh(this._cdRefInjectingView||this._lView,4)}markForRefresh(){ih(this._cdRefInjectingView||this._lView)}detach(){this._lView[Re]&=-129}reattach(){mf(this._lView),this._lView[Re]|=128}detectChanges(){this._lView[Re]|=1024,iy(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Ae(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=hf(this._lView),t=this._lView[ki];t!==null&&!e&&xh(t,this._lView),A_(this._lView[qe],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Ae(902,!1);this._appRef=e;let t=hf(this._lView),r=this._lView[ki];r!==null&&!t&&I_(r,this._lView),mf(this._lView)}},la=(()=>{class n{static __NG_ELEMENT_ID__=NT}return n})(),IT=la,RT=class extends IT{_declarationLView;_declarationTContainer;elementRef;constructor(e,t,r){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,r){let i=gT(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:t,dehydratedView:r});return new Gi(i)}};function NT(){return Ch(rr(),zt())}function Ch(n,e){return n.type&4?new RT(e,n,$o(n,e)):null}var pB=new RegExp(`^(\\d+)*(${aC}|${sC})*(.*)`);var PT=()=>null;function Kg(n,e){return PT(n,e)}var Lf=class{},Tl=class{},Ff=class{resolveComponentFactory(e){throw Error(`No component factory found for ${wn(e)}.`)}},Ho=class{static NULL=new Ff},zo=class{};var LT=(()=>{class n{static \u0275prov=Te({token:n,providedIn:"root",factory:()=>null})}return n})();function Of(n,e,t){let r=t?n.styles:null,i=t?n.classes:null,o=0;if(e!==null)for(let s=0;s<e.length;s++){let a=e[s];if(typeof a=="number")o=a;else if(o==1)i=Mg(i,a);else if(o==2){let c=a,l=e[++s];r=Mg(r,c+": "+l+";")}}t?n.styles=r:n.stylesWithoutHost=r,t?n.classes=i:n.classesWithoutHost=i}var Al=class extends Ho{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=Ui(e);return new ua(t,this.ngModule)}};function Qg(n,e){let t=[];for(let r in n){if(!n.hasOwnProperty(r))continue;let i=n[r];if(i===void 0)continue;let o=Array.isArray(i),s=o?i[0]:i,a=o?i[1]:li.None;e?t.push({propName:s,templateName:r,isSignal:(a&li.SignalBased)!==0}):t.push({propName:s,templateName:r})}return t}function FT(n){let e=n.toLowerCase();return e==="svg"?iD:e==="math"?oD:null}var ua=class extends Tl{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;get inputs(){let e=this.componentDef,t=e.inputTransforms,r=Qg(e.inputs,!0);if(t!==null)for(let i of r)t.hasOwnProperty(i.propName)&&(i.transform=t[i.propName]);return r}get outputs(){return Qg(this.componentDef.outputs,!1)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=BC(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,r,i){let o=ct(null);try{i=i||this.ngModule;let s=i instanceof Vn?i:i?.injector;s&&this.componentDef.getStandaloneInjector!==null&&(s=this.componentDef.getStandaloneInjector(s)||s);let a=s?new yf(e,s):e,c=a.get(zo,null);if(c===null)throw new Ae(407,!1);let l=a.get(LT,null),u=a.get(ca,null),d={rendererFactory:c,sanitizer:l,changeDetectionScheduler:u},f=c.createRenderer(null,this.componentDef),p=this.componentDef.selectors[0][0]||"div",g=r?$C(f,r,this.componentDef.encapsulation,a):T_(f,p,FT(p)),y=512;this.componentDef.signals?y|=4096:this.componentDef.onPush||(y|=16);let m=null;g!==null&&(m=_h(g,a,!0));let h=$_(0,null,null,1,0,null,null,null,null,null,null),w=zl(null,h,null,y,null,null,d,f,a,null,m);sh(w);let b,S,P=null;try{let T=this.componentDef,D,N=null;T.findHostDirectiveDefs?(D=[],N=new Map,T.findHostDirectiveDefs(T,D,N),D.push(T)):D=[T];let E=OT(w,g);P=UT(E,g,T,D,w,d,f),S=aD(h,Bi),g&&VT(f,T,g,r),t!==void 0&&HT(S,this.ngContentSelectors,t),b=BT(P,T,D,N,w,[zT]),wh(h,w,null)}catch(T){throw P!==null&&Cf(P),Cf(w),T}finally{ah()}return new Uf(this.componentType,b,$o(S,w),w,S)}finally{ct(o)}}},Uf=class extends Lf{location;_rootLView;_tNode;instance;hostView;changeDetectorRef;componentType;previousInputValues=null;constructor(e,t,r,i,o){super(),this.location=r,this._rootLView=i,this._tNode=o,this.instance=t,this.hostView=this.changeDetectorRef=new Gi(i,void 0,!1),this.componentType=e}setInput(e,t){let r=this._tNode.inputs,i;if(r!==null&&(i=r[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let o=this._rootLView;ey(o[qe],o,i,e,t),this.previousInputValues.set(e,t);let s=jo(this._tNode.index,o);Dh(s,1)}}get injector(){return new Oi(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function OT(n,e){let t=n[qe],r=Bi;return n[r]=e,Mh(t,r,2,"#host",null)}function UT(n,e,t,r,i,o,s){let a=i[qe];kT(r,n,e,s);let c=null;e!==null&&(c=_h(e,i[Uo]));let l=o.rendererFactory.createRenderer(e,t),u=zl(i,W_(t),null,Y_(t),i[n.index],n,o,l,null,null,c);return a.firstCreatePass&&Rf(a,n,r.length-1),bh(i,u),i[n.index]=u}function kT(n,e,t,r){for(let i of n)e.mergedAttrs=lh(e.mergedAttrs,i.hostAttrs);e.mergedAttrs!==null&&(Of(e,e.mergedAttrs,!0),t!==null&&U_(r,t,e))}function BT(n,e,t,r,i,o){let s=rr(),a=i[qe],c=wr(s,i);q_(a,i,s,t,null,r);for(let u=0;u<t.length;u++){let d=s.directiveStart+u,f=Bo(i,a,d,s);Vo(f,i)}X_(a,i,s),c&&Vo(c,i);let l=Bo(i,a,s.directiveStart+s.componentOffset,s);if(n[Ur]=i[Ur]=l,o!==null)for(let u of o)u(l,e);return j_(a,s,i),l}function VT(n,e,t,r){if(r)_f(n,t,["ng-version","19.0.6"]);else{let{attrs:i,classes:o}=VC(e.selectors[0]);i&&_f(n,t,i),o&&o.length>0&&O_(n,t,o.join(" "))}}function HT(n,e,t){let r=n.projection=[];for(let i=0;i<e.length;i++){let o=t[i];r.push(o!=null&&o.length?Array.from(o):null)}}function zT(){let n=rr();Zv(zt()[qe],n)}var qo=(()=>{class n{static __NG_ELEMENT_ID__=GT}return n})();function GT(){let n=rr();return ly(n,zt())}var jT=qo,cy=class extends jT{_lContainer;_hostTNode;_hostLView;constructor(e,t,r){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=r}get element(){return $o(this._hostTNode,this._hostLView)}get injector(){return new Oi(this._hostTNode,this._hostLView)}get parentInjector(){let e=uh(this._hostTNode,this._hostLView);if(Qv(e)){let t=Ml(e,this._hostLView),r=Sl(e),i=t[qe].data[r+8];return new Oi(i,t)}else return new Oi(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=Jg(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-Cn}createEmbeddedView(e,t,r){let i,o;typeof r=="number"?i=r:r!=null&&(i=r.index,o=r.injector);let s=Kg(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},o,s);return this.insertImpl(a,i,Zg(this._hostTNode,s)),a}createComponent(e,t,r,i,o){let s=e&&!eD(e),a;if(s)a=t;else{let g=t||{};a=g.index,r=g.injector,i=g.projectableNodes,o=g.environmentInjector||g.ngModuleRef}let c=s?e:new ua(Ui(e)),l=r||this.parentInjector;if(!o&&c.ngModule==null){let y=(s?l:this.parentInjector).get(Vn,null);y&&(o=y)}let u=Ui(c.componentType??{}),d=Kg(this._lContainer,u?.id??null),f=d?.firstChild??null,p=c.create(l,i,f,o);return this.insertImpl(p.hostView,a,Zg(this._hostTNode,d)),p}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,r){let i=e._lView;if(lD(i)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=i[Kt],l=new cy(c,c[nr],c[Kt]);l.detach(l.indexOf(e))}}let o=this._adjustIndex(t),s=this._lContainer;return vT(s,i,o,r),e.attachToViewContainerRef(),vv(sf(s),o,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=Jg(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),r=Af(this._lContainer,t);r&&(ml(sf(this._lContainer),t),R_(r[qe],r))}detach(e){let t=this._adjustIndex(e,-1),r=Af(this._lContainer,t);return r&&ml(sf(this._lContainer),t)!=null?new Gi(r):null}_adjustIndex(e,t=0){return e??this.length+t}};function Jg(n){return n[xl]}function sf(n){return n[xl]||(n[xl]=[])}function ly(n,e){let t,r=e[n.index];return Vr(r)?t=r:(t=dT(r,e,null,n),e[n.index]=t,bh(e,t)),$T(t,e,n,r),new cy(t,n,e)}function WT(n,e){let t=n[Hn],r=t.createComment(""),i=wr(e,n),o=P_(t,i);return Dl(t,o,r,SC(t,i),!1),r}var $T=qT;function qT(n,e,t,r){if(n[Vi])return;let i;t.type&8?i=Sr(r):i=WT(e,t),n[Vi]=i}var kf=class n{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Bf=class n{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let r=e.contentQueries!==null?e.contentQueries[0]:t.length,i=[];for(let o=0;o<r;o++){let s=t.getByIndex(o),a=this.queries[s.indexInDeclarationView];i.push(a.clone())}return new n(i)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)Th(e,t).matches!==null&&this.queries[t].setDirty()}},Vf=class{flags;read;predicate;constructor(e,t,r=null){this.flags=t,this.read=r,typeof e=="string"?this.predicate=tA(e):this.predicate=e}},Hf=class n{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let r=0;r<this.length;r++){let i=t!==null?t.length:0,o=this.getByIndex(r).embeddedTView(e,i);o&&(o.indexInDeclarationView=r,t!==null?t.push(o):t=[o])}return t!==null?new n(t):null}template(e,t){for(let r=0;r<this.queries.length;r++)this.queries[r].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},zf=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,r=e.parent;for(;r!==null&&r.type&8&&r.index!==t;)r=r.parent;return t===(r!==null?r.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let r=this.metadata.predicate;if(Array.isArray(r))for(let i=0;i<r.length;i++){let o=r[i];this.matchTNodeWithReadOption(e,t,XT(t,o)),this.matchTNodeWithReadOption(e,t,ul(t,e,o,!1,!1))}else r===la?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,ul(t,e,r,!1,!1))}matchTNodeWithReadOption(e,t,r){if(r!==null){let i=this.metadata.read;if(i!==null)if(i===Wi||i===qo||i===la&&t.type&4)this.addMatch(t.index,-2);else{let o=ul(t,e,i,!1,!1);o!==null&&this.addMatch(t.index,o)}else this.addMatch(t.index,r)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function XT(n,e){let t=n.localNames;if(t!==null){for(let r=0;r<t.length;r+=2)if(t[r]===e)return t[r+1]}return null}function YT(n,e){return n.type&11?$o(n,e):n.type&4?Ch(n,e):null}function ZT(n,e,t,r){return t===-1?YT(e,n):t===-2?KT(n,e,r):Bo(n,n[qe],t,e)}function KT(n,e,t){if(t===Wi)return $o(e,n);if(t===la)return Ch(e,n);if(t===qo)return ly(e,n)}function uy(n,e,t,r){let i=e[kr].queries[r];if(i.matches===null){let o=n.data,s=t.matches,a=[];for(let c=0;s!==null&&c<s.length;c+=2){let l=s[c];if(l<0)a.push(null);else{let u=o[l];a.push(ZT(e,u,s[c+1],t.metadata.read))}}i.matches=a}return i.matches}function Gf(n,e,t,r){let i=n.queries.getByIndex(t),o=i.matches;if(o!==null){let s=uy(n,e,i,t);for(let a=0;a<o.length;a+=2){let c=o[a];if(c>0)r.push(s[a/2]);else{let l=o[a+1],u=e[-c];for(let d=Cn;d<u.length;d++){let f=u[d];f[ki]===f[Kt]&&Gf(f[qe],f,l,r)}if(u[ko]!==null){let d=u[ko];for(let f=0;f<d.length;f++){let p=d[f];Gf(p[qe],p,l,r)}}}}}return r}function QT(n,e){return n[kr].queries[e].queryList}function JT(n,e,t){let r=new Df((t&4)===4);return YC(n,e,r,r.destroy),(e[kr]??=new Bf).queries.push(new kf(r))-1}function eA(n,e,t){let r=ji();return r.firstCreatePass&&(nA(r,new Vf(n,e,t),-1),(e&2)===2&&(r.staticViewQueries=!0)),JT(r,zt(),e)}function tA(n){return n.split(",").map(e=>e.trim())}function nA(n,e,t){n.queries===null&&(n.queries=new Hf),n.queries.track(new zf(e,t))}function Th(n,e){return n.queries.getByIndex(e)}function rA(n,e){let t=n[qe],r=Th(t,e);return r.crossesNgTemplate?Gf(t,n,e,[]):uy(t,n,r,e)}var ui=class{},da=class{};var jf=class extends ui{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Al(this);constructor(e,t,r,i=!0){super(),this.ngModuleType=e,this._parent=t;let o=xv(e);this._bootstrapComponents=C_(o.bootstrap),this._r3Injector=c_(e,t,[{provide:ui,useValue:this},{provide:Ho,useValue:this.componentFactoryResolver},...r],wn(e),new Set(["environment"])),i&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Wf=class extends da{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new jf(this.moduleType,e,[])}};var Il=class extends ui{injector;componentFactoryResolver=new Al(this);instance=null;constructor(e){super();let t=new oa([...e.providers,{provide:ui,useValue:this},{provide:Ho,useValue:this.componentFactoryResolver}],e.parent||eh(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function Ah(n,e,t=null){return new Il({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var iA=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let r=bv(!1,t.type),i=r.length>0?Ah([r],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,i)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Te({token:n,providedIn:"environment",factory:()=>new n(Ye(Vn))})}return n})();function di(n){return Zf(()=>{let e=dy(n),t=St(ge({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===v_.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?i=>i.get(iA).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||br.Emulated,styles:n.styles||Fo,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&vh("NgStandalone"),fy(t);let r=n.dependencies;return t.directiveDefs=tv(r,!1),t.pipeDefs=tv(r,!0),t.id=aA(t),t})}function oA(n){return Ui(n)||Ev(n)}function sA(n){return n!==null}function ev(n,e){if(n==null)return ia;let t={};for(let r in n)if(n.hasOwnProperty(r)){let i=n[r],o,s,a=li.None;Array.isArray(i)?(a=i[0],o=i[1],s=i[2]??o):(o=i,s=i),e?(t[o]=a!==li.None?[r,a]:r,e[o]=s):t[o]=r}return t}function Ih(n){return Zf(()=>{let e=dy(n);return fy(e),e})}function dy(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||ia,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||Fo,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:ev(n.inputs,e),outputs:ev(n.outputs),debugInfo:null}}function fy(n){n.features?.forEach(e=>e(n))}function tv(n,e){if(!n)return null;let t=e?Sv:oA;return()=>(typeof n=="function"?n():n).map(r=>t(r)).filter(sA)}function aA(n){let e=0,t=typeof n.consts=="function"?"":n.consts,r=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let o of r.join("|"))e=Math.imul(31,e)+o.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function cA(n,e,t){let r=n[e];return Object.is(r,t)?!1:(n[e]=t,!0)}function lA(n){return(n.flags&32)===32}var Gl=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(r){return new(r||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var hy=new Le("");function pa(n){return!!n&&typeof n.then=="function"}function py(n){return!!n&&typeof n.subscribe=="function"}var jl=new Le("");var my=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,r)=>{this.resolve=t,this.reject=r});appInits=ae(jl,{optional:!0})??[];injector=ae(Mr);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let i of this.appInits){let o=tr(this.injector,i);if(pa(o))t.push(o);else if(py(o)){let s=new Promise((a,c)=>{o.subscribe({complete:a,error:c})});t.push(s)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{r()}).catch(i=>{this.reject(i)}),t.length===0&&r(),this.initialized=!0}static \u0275fac=function(r){return new(r||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),uA=(()=>{class n{static \u0275prov=Te({token:n,providedIn:"root",factory:()=>new $f})}return n})(),$f=class{queuedEffectCount=0;queues=new Map;schedule(e){this.enqueue(e)}remove(e){let t=e.zone,r=this.queues.get(t);r.has(e)&&(r.delete(e),this.queuedEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let r=this.queues.get(t);r.has(e)||(this.queuedEffectCount++,r.add(e))}flush(){for(;this.queuedEffectCount>0;)for(let[e,t]of this.queues)e===null?this.flushQueue(t):e.run(()=>this.flushQueue(t))}flushQueue(e){for(let t of e)e.delete(t),this.queuedEffectCount--,t.run()}},Rh=new Le("");function dA(){Vm(()=>{throw new Ae(600,!1)})}function fA(n){return n.isBoundToModule}var hA=10;function pA(n,e,t){try{let r=t();return pa(r)?r.catch(i=>{throw e.runOutsideAngular(()=>n.handleError(i)),i}):r}catch(r){throw e.runOutsideAngular(()=>n.handleError(r)),r}}var er=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=ae(ZD);afterRenderManager=ae(lC);zonelessEnabled=ae(Bl);rootEffectScheduler=ae(uA);dirtyFlags=0;deferredDirtyFlags=0;tracingSnapshot=null;externalTestViews=new Set;afterTick=new bt;get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];isStable=ae(Wo).hasPendingTasks.pipe(Ue(t=>!t));constructor(){ae(w_,{optional:!0})}whenStable(){let t;return new Promise(r=>{t=this.isStable.subscribe({next:i=>{i&&r()}})}).finally(()=>{t.unsubscribe()})}_injector=ae(Vn);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,r){let i=t instanceof Tl;if(!this._injector.get(my).done){let f=!i&&Mv(t),p=!1;throw new Ae(405,p)}let s;i?s=t:s=this._injector.get(Ho).resolveComponentFactory(t),this.componentTypes.push(s.componentType);let a=fA(s)?void 0:this._injector.get(ui),c=r||s.selector,l=s.create(Mr.NULL,[],c,a),u=l.location.nativeElement,d=l.injector.get(hy,null);return d?.registerApplication(u),l.onDestroy(()=>{this.detachView(l.hostView),dl(this.components,l),d?.unregisterApplication(u)}),this._loadComponent(l),l}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick=()=>{if(this.tracingSnapshot!==null){let r=this.tracingSnapshot;this.tracingSnapshot=null,r.run(b_.CHANGE_DETECTION,this._tick),r.dispose();return}if(this._runningTick)throw new Ae(101,!1);let t=ct(null);try{this._runningTick=!0,this.synchronize()}catch(r){this.internalErrorHandler(r)}finally{this._runningTick=!1,ct(t),this.afterTick.next()}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(zo,null,{optional:!0})),this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0;let t=0;for(;this.dirtyFlags!==0&&t++<hA;)this.synchronizeOnce()}synchronizeOnce(){if(this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0,this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush()),this.dirtyFlags&7){let t=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r,notifyErrorHandler:i}of this.allViews)mA(r,i,t,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}else this._rendererFactory?.begin?.(),this._rendererFactory?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Ol(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let r=t;this._views.push(r),r.attachToAppRef(this)}detachView(t){let r=t;dl(this._views,r),r.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(Rh,[]).forEach(i=>i(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>dl(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Ae(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(r){return new(r||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function dl(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function mA(n,e,t,r){if(!t&&!Ol(n))return;iy(n,e,t&&!r?0:1)}function gA(n,e,t,r){return cA(n,xD(),t)?e+pv(t)+r:Hl}function nv(n,e,t,r,i){let o=e.inputs,s=i?"class":"style";ey(n,t,o[s],s,r)}function vA(n,e,t,r,i,o){let s=e.consts,a=Rg(s,i),c=Mh(e,n,2,r,a);return QC(e,t,c,Rg(s,o)),c.attrs!==null&&Of(c,c.attrs,!1),c.mergedAttrs!==null&&Of(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function Xo(n,e,t,r){let i=zt(),o=ji(),s=Bi+n,a=i[Hn],c=o.firstCreatePass?vA(s,o,i,e,t,r):o.data[s],l=_A(o,i,c,a,e,n);i[s]=l;let u=Iv(c);return kl(c,!0),U_(a,l,c),!lA(c)&&Xv()&&L_(o,i,l,c),dD()===0&&Vo(l,i),fD(),u&&(GC(o,i,c),j_(o,c,i)),r!==null&&jC(i,c),Xo}function Yo(){let n=rr();Bv()?_D():(n=n.parent,kl(n,!1));let e=n;mD(e)&&gD(),hD();let t=ji();return t.firstCreatePass&&(Zv(t,n),Av(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&AD(e)&&nv(t,e,zt(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&ID(e)&&nv(t,e,zt(),e.stylesWithoutHost,!1),Yo}function Xi(n,e,t,r){return Xo(n,e,t,r),Yo(),Xi}var _A=(n,e,t,r,i,o)=>(Yv(!0),T_(r,i,wD()));var Rl="en-US";var yA=Rl;function xA(n){typeof n=="string"&&(yA=n.toLowerCase().replace(/_/g,"-"))}var EA=(n,e,t)=>{};function Yi(n,e,t,r){let i=zt(),o=ji(),s=rr();return MA(o,i,i[Hn],s,n,e,r),Yi}function SA(n,e,t,r){let i=n.cleanup;if(i!=null)for(let o=0;o<i.length-1;o+=2){let s=i[o];if(s===t&&i[o+1]===r){let a=e[_l],c=i[o+2];return a.length>c?a[c]:null}typeof s=="string"&&(o+=2)}return null}function MA(n,e,t,r,i,o,s){let a=Iv(r),l=n.firstCreatePass&&Q_(n),u=e[Ur],d=K_(e),f=!0;if(r.type&3||s){let y=wr(r,e),m=s?s(y):y,h=d.length,w=s?S=>s(Sr(S[r.index])):r.index,b=null;if(!s&&a&&(b=SA(n,e,i,r.index)),b!==null){let S=b.__ngLastListenerFn__||b;S.__ngNextListenerFn__=o,b.__ngLastListenerFn__=o,f=!1}else{o=iv(r,e,u,o),EA(y,i,o);let S=t.listen(m,i,o);d.push(o,S),l&&l.push(i,w,h,h+1)}}else o=iv(r,e,u,o);let p=r.outputs,g;if(f&&p!==null&&(g=p[i])){let y=g.length;if(y)for(let m=0;m<y;m+=2){let h=g[m],w=g[m+1],P=e[h][w].subscribe(o),T=d.length;d.push(o,P),l&&l.push(i,r.index,T,-(T+1))}}}function rv(n,e,t,r){let i=ct(null);try{return yr(6,e,t),t(r)!==!1}catch(o){return J_(n,o),!1}finally{yr(7,e,t),ct(i)}}function iv(n,e,t,r){return function i(o){if(o===Function)return r;let s=n.componentOffset>-1?jo(n.index,e):e;Dh(s,5);let a=rv(e,t,r,o),c=i.__ngNextListenerFn__;for(;c;)a=rv(e,t,c,o)&&a,c=c.__ngNextListenerFn__;return a}}function gy(n,e,t){eA(n,e,t)}function Nh(n){let e=zt(),t=ji(),r=Hv();oh(r+1);let i=Th(t,r);if(n.dirty&&cD(e)===((i.metadata.flags&2)===2)){if(i.matches===null)n.reset([]);else{let o=rA(e,r);n.reset(o,JD),n.notifyOnChanges()}return!0}return!1}function Ph(){return QT(zt(),Hv())}function Wl(n,e=""){let t=zt(),r=ji(),i=n+Bi,o=r.firstCreatePass?Mh(r,i,1,e,null):r.data[i],s=bA(r,t,o,e,n);t[i]=s,Xv()&&L_(r,t,s,o),kl(o,!1)}var bA=(n,e,t,r,i)=>(Yv(!0),fC(e[Hn],r));function Lh(n,e,t){let r=zt(),i=gA(r,n,e,t);return i!==Hl&&fT(r,ch(),i),Lh}var qf=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},Fh=(()=>{class n{compileModuleSync(t){return new Wf(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let r=this.compileModuleSync(t),i=xv(t),o=C_(i.declarations).reduce((s,a)=>{let c=Ui(a);return c&&s.push(new ua(c)),s},[]);return new qf(r,o)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(r){return new(r||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var wA=(()=>{class n{zone=ae(Nt);changeDetectionScheduler=ae(ca);applicationRef=ae(er);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(r){return new(r||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),DA=new Le("",{factory:()=>!1});function vy({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new Nt(St(ge({},yy()),{scheduleInRootZone:t})),[{provide:Nt,useFactory:n},{provide:Oo,multi:!0,useFactory:()=>{let r=ae(wA,{optional:!0});return()=>r.initialize()}},{provide:Oo,multi:!0,useFactory:()=>{let r=ae(CA);return()=>{r.initialize()}}},e===!0?{provide:d_,useValue:!0}:[],{provide:f_,useValue:t??l_}]}function _y(n){let e=n?.ignoreChangesOutsideZone,t=n?.scheduleInRootZone,r=vy({ngZoneFactory:()=>{let i=yy(n);return i.scheduleInRootZone=t,i.shouldCoalesceEventChangeDetection&&vh("NgZone_CoalesceEvent"),new Nt(i)},ignoreChangesOutsideZone:e,scheduleInRootZone:t});return Go([{provide:DA,useValue:!0},{provide:Bl,useValue:!1},r])}function yy(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var CA=(()=>{class n{subscription=new It;initialized=!1;zone=ae(Nt);pendingTasks=ae(Wo);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Nt.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Nt.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(r){return new(r||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var TA=(()=>{class n{appRef=ae(er);taskService=ae(Wo);ngZone=ae(Nt);zonelessEnabled=ae(Bl);tracing=ae(w_,{optional:!0});disableScheduling=ae(d_,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new It;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(wl):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(ae(f_,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof wf||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let r=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 8:{this.appRef.deferredDirtyFlags|=8;break}case 6:{this.appRef.dirtyFlags|=2,r=!0;break}case 13:{this.appRef.dirtyFlags|=16,r=!0;break}case 14:{this.appRef.dirtyFlags|=2,r=!0;break}case 12:{r=!0;break}case 10:case 9:case 7:case 11:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(r))return;let i=this.useMicrotaskScheduler?Bg:h_;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(wl+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){throw this.taskService.remove(t),r}finally{this.cleanup()}this.useMicrotaskScheduler=!0,Bg(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(r){return new(r||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function AA(){return typeof $localize<"u"&&$localize.locale||Rl}var Oh=new Le("",{providedIn:"root",factory:()=>ae(Oh,$e.Optional|$e.SkipSelf)||AA()});var Xf=new Le(""),IA=new Le("");function Js(n){return!n.moduleRef}function RA(n){let e=Js(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Nt);return t.run(()=>{Js(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let r=e.get(ci,null),i;if(t.runOutsideAngular(()=>{i=t.onError.subscribe({next:o=>{r.handleError(o)}})}),Js(n)){let o=()=>e.destroy(),s=n.platformInjector.get(Xf);s.add(o),e.onDestroy(()=>{i.unsubscribe(),s.delete(o)})}else{let o=()=>n.moduleRef.destroy(),s=n.platformInjector.get(Xf);s.add(o),n.moduleRef.onDestroy(()=>{dl(n.allPlatformModules,n.moduleRef),i.unsubscribe(),s.delete(o)})}return pA(r,t,()=>{let o=e.get(my);return o.runInitializers(),o.donePromise.then(()=>{let s=e.get(Oh,Rl);if(xA(s||Rl),!e.get(IA,!0))return Js(n)?e.get(er):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(Js(n)){let c=e.get(er);return n.rootComponent!==void 0&&c.bootstrap(n.rootComponent),c}else return NA(n.moduleRef,n.allPlatformModules),n.moduleRef})})})}function NA(n,e){let t=n.injector.get(er);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(r=>t.bootstrap(r));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(t);else throw new Ae(-403,!1);e.push(n)}var fl=null;function PA(n=[],e){return Mr.create({name:e,providers:[{provide:Ll,useValue:"platform"},{provide:Xf,useValue:new Set([()=>fl=null])},...n]})}function LA(n=[]){if(fl)return fl;let e=PA(n);return fl=e,dA(),FA(e),e}function FA(n){let e=n.get(mh,null);tr(n,()=>{e?.forEach(t=>t())})}function xy(){return!1}var ma=(()=>{class n{static __NG_ELEMENT_ID__=OA}return n})();function OA(n){return UA(rr(),zt(),(n&16)===16)}function UA(n,e,t){if(th(n)&&!t){let r=jo(n.index,e);return new Gi(r,r)}else if(n.type&175){let r=e[Er];return new Gi(r,e)}return null}function Ey(n){try{let{rootComponent:e,appProviders:t,platformProviders:r}=n,i=LA(r),o=[vy({}),{provide:ca,useExisting:TA},...t||[]],s=new Il({providers:o,parent:i,debugName:"",runEnvironmentInitializers:!1});return RA({r3Injector:s.injector,platformInjector:i,rootComponent:e})}catch(e){return Promise.reject(e)}}var ov=class{[vo];constructor(e){this[vo]=e}destroy(){this[vo].destroy()}};var Dy=null;function Zo(){return Dy}function Cy(n){Dy??=n}var $l=class{};var zn=new Le(""),Ty=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(r){return new(r||n)};static \u0275prov=Te({token:n,factory:()=>ae(zA),providedIn:"platform"})}return n})();var zA=(()=>{class n extends Ty{_location;_history;_doc=ae(zn);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Zo().getBaseHref(this._doc)}onPopState(t){let r=Zo().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",t,!1),()=>r.removeEventListener("popstate",t)}onHashChange(t){let r=Zo().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",t,!1),()=>r.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,r,i){this._history.pushState(t,r,i)}replaceState(t,r,i){this._history.replaceState(t,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||n)};static \u0275prov=Te({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function Ay(n,e){if(n.length==0)return e;if(e.length==0)return n;let t=0;return n.endsWith("/")&&t++,e.startsWith("/")&&t++,t==2?n+e.substring(1):t==1?n+e:n+"/"+e}function Sy(n){let e=n.match(/#|\?|$/),t=e&&e.index||n.length,r=t-(n[t-1]==="/"?1:0);return n.slice(0,r)+n.slice(t)}function Zi(n){return n&&n[0]!=="?"?"?"+n:n}var Xl=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(r){return new(r||n)};static \u0275prov=Te({token:n,factory:()=>ae(Iy),providedIn:"root"})}return n})(),GA=new Le(""),Iy=(()=>{class n extends Xl{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,r){super(),this._platformLocation=t,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??ae(zn).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return Ay(this._baseHref,t)}path(t=!1){let r=this._platformLocation.pathname+Zi(this._platformLocation.search),i=this._platformLocation.hash;return i&&t?`${r}${i}`:r}pushState(t,r,i,o){let s=this.prepareExternalUrl(i+Zi(o));this._platformLocation.pushState(t,r,s)}replaceState(t,r,i,o){let s=this.prepareExternalUrl(i+Zi(o));this._platformLocation.replaceState(t,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(r){return new(r||n)(Ye(Ty),Ye(GA,8))};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ga=(()=>{class n{_subject=new bt;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let r=this._locationStrategy.getBaseHref();this._basePath=$A(Sy(My(r))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,r=""){return this.path()==this.normalize(t+Zi(r))}normalize(t){return n.stripTrailingSlash(WA(this._basePath,My(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,r="",i=null){this._locationStrategy.pushState(i,"",t,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Zi(r)),i)}replaceState(t,r="",i=null){this._locationStrategy.replaceState(i,"",t,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Zi(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",r){this._urlChangeListeners.forEach(i=>i(t,r))}subscribe(t,r,i){return this._subject.subscribe({next:t,error:r??void 0,complete:i??void 0})}static normalizeQueryParams=Zi;static joinWithSlash=Ay;static stripTrailingSlash=Sy;static \u0275fac=function(r){return new(r||n)(Ye(Xl))};static \u0275prov=Te({token:n,factory:()=>jA(),providedIn:"root"})}return n})();function jA(){return new ga(Ye(Xl))}function WA(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function My(n){return n.replace(/\/index.html$/,"")}function $A(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function Ry(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let r=t.indexOf("="),[i,o]=r==-1?[t,""]:[t.slice(0,r),t.slice(r+1)];if(i.trim()===e)return decodeURIComponent(o)}return null}var Bh="browser",qA="server";function Vh(n){return n===Bh}function Hh(n){return n===qA}var ql=class{};var Gh=class extends $l{supportsDOMEvents=!0},jh=class n extends Gh{static makeCurrent(){Cy(new n)}onAndCancel(e,t,r){return e.addEventListener(t,r),()=>{e.removeEventListener(t,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=YA();return t==null?null:ZA(t)}resetBaseElement(){va=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Ry(document.cookie,e)}},va=null;function YA(){return va=va||document.querySelector("base"),va?va.getAttribute("href"):null}function ZA(n){return new URL(n,document.baseURI).pathname}var KA=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})(),Wh=new Le(""),Uy=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,r){this._zone=r,t.forEach(i=>{i.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,r,i){return this._findPluginFor(r).addEventListener(t,r,i)}getZone(){return this._zone}_findPluginFor(t){let r=this._eventNameToPlugin.get(t);if(r)return r;if(r=this._plugins.find(o=>o.supports(t)),!r)throw new Ae(5101,!1);return this._eventNameToPlugin.set(t,r),r}static \u0275fac=function(r){return new(r||n)(Ye(Wh),Ye(Nt))};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})(),Zl=class{_doc;constructor(e){this._doc=e}manager},Yl="ng-app-id";function Ny(n){for(let e of n)e.remove()}function Py(n,e){let t=e.createElement("style");return t.textContent=n,t}function QA(n,e,t,r){let i=n.head?.querySelectorAll(`style[${Yl}="${e}"],link[${Yl}="${e}"]`);if(i)for(let o of i)o.removeAttribute(Yl),o instanceof HTMLLinkElement?r.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&t.set(o.textContent,{usage:0,elements:[o]})}function $h(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var ky=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,r,i,o={}){this.doc=t,this.appId=r,this.nonce=i,this.isServer=Hh(o),QA(t,r,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,r){for(let i of t)this.addUsage(i,this.inline,Py);r?.forEach(i=>this.addUsage(i,this.external,$h))}removeStyles(t,r){for(let i of t)this.removeUsage(i,this.inline);r?.forEach(i=>this.removeUsage(i,this.external))}addUsage(t,r,i){let o=r.get(t);o?o.usage++:r.set(t,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,i(t,this.doc)))})}removeUsage(t,r){let i=r.get(t);i&&(i.usage--,i.usage<=0&&(Ny(i.elements),r.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Ny(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[r,{elements:i}]of this.inline)i.push(this.addElement(t,Py(r,this.doc)));for(let[r,{elements:i}]of this.external)i.push(this.addElement(t,$h(r,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,r){return this.nonce&&r.setAttribute("nonce",this.nonce),this.isServer&&r.setAttribute(Yl,this.appId),t.appendChild(r)}static \u0275fac=function(r){return new(r||n)(Ye(zn),Ye(ph),Ye(gh,8),Ye(Hr))};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})(),zh={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Xh=/%COMP%/g,By="%COMP%",JA=`_nghost-${By}`,eI=`_ngcontent-${By}`,tI=!0,nI=new Le("",{providedIn:"root",factory:()=>tI});function rI(n){return eI.replace(Xh,n)}function iI(n){return JA.replace(Xh,n)}function Vy(n,e){return e.map(t=>t.replace(Xh,n))}var Ly=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,r,i,o,s,a,c,l=null){this.eventManager=t,this.sharedStylesHost=r,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=s,this.platformId=a,this.ngZone=c,this.nonce=l,this.platformIsServer=Hh(a),this.defaultRenderer=new _a(t,s,c,this.platformIsServer)}createRenderer(t,r){if(!t||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===br.ShadowDom&&(r=St(ge({},r),{encapsulation:br.Emulated}));let i=this.getOrCreateRenderer(t,r);return i instanceof Kl?i.applyToHost(t):i instanceof ya&&i.applyStyles(),i}getOrCreateRenderer(t,r){let i=this.rendererByCompId,o=i.get(r.id);if(!o){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer;switch(r.encapsulation){case br.Emulated:o=new Kl(c,l,r,this.appId,u,s,a,d);break;case br.ShadowDom:return new qh(c,l,t,r,s,a,this.nonce,d);default:o=new ya(c,l,r,u,s,a,d);break}i.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(r){return new(r||n)(Ye(Uy),Ye(ky),Ye(ph),Ye(nI),Ye(zn),Ye(Hr),Ye(Nt),Ye(gh))};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})(),_a=class{eventManager;doc;ngZone;platformIsServer;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,r,i){this.eventManager=e,this.doc=t,this.ngZone=r,this.platformIsServer=i}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(zh[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(Fy(e)?e.content:e).appendChild(t)}insertBefore(e,t,r){e&&(Fy(e)?e.content:e).insertBefore(t,r)}removeChild(e,t){t.remove()}selectRootElement(e,t){let r=typeof e=="string"?this.doc.querySelector(e):e;if(!r)throw new Ae(-5104,!1);return t||(r.textContent=""),r}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,r,i){if(i){t=i+":"+t;let o=zh[i];o?e.setAttributeNS(o,t,r):e.setAttribute(t,r)}else e.setAttribute(t,r)}removeAttribute(e,t,r){if(r){let i=zh[r];i?e.removeAttributeNS(i,t):e.removeAttribute(`${r}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,r,i){i&($i.DashCase|$i.Important)?e.style.setProperty(t,r,i&$i.Important?"important":""):e.style[t]=r}removeStyle(e,t,r){r&$i.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,r){e!=null&&(e[t]=r)}setValue(e,t){e.nodeValue=t}listen(e,t,r){if(typeof e=="string"&&(e=Zo().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(r))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function Fy(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var qh=class extends _a{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,r,i,o,s,a,c){super(e,o,s,c),this.sharedStylesHost=t,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=Vy(i.id,i.styles);for(let d of l){let f=document.createElement("style");a&&f.setAttribute("nonce",a),f.textContent=d,this.shadowRoot.appendChild(f)}let u=i.getExternalStyles?.();if(u)for(let d of u){let f=$h(d,o);a&&f.setAttribute("nonce",a),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,r){return super.insertBefore(this.nodeOrShadowRoot(e),t,r)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},ya=class extends _a{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,r,i,o,s,a,c){super(e,o,s,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=i,this.styles=c?Vy(c,r.styles):r.styles,this.styleUrls=r.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Kl=class extends ya{contentAttr;hostAttr;constructor(e,t,r,i,o,s,a,c){let l=i+"-"+r.id;super(e,t,r,o,s,a,c,l),this.contentAttr=rI(l),this.hostAttr=iI(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let r=super.createElement(e,t);return super.setAttribute(r,this.contentAttr,""),r}},oI=(()=>{class n extends Zl{constructor(t){super(t)}supports(t){return!0}addEventListener(t,r,i){return t.addEventListener(r,i,!1),()=>this.removeEventListener(t,r,i)}removeEventListener(t,r,i){return t.removeEventListener(r,i)}static \u0275fac=function(r){return new(r||n)(Ye(zn))};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})(),Oy=["alt","control","meta","shift"],sI={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},aI={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},cI=(()=>{class n extends Zl{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,r,i){let o=n.parseEventName(r),s=n.eventCallback(o.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Zo().onAndCancel(t,o.domEventName,s))}static parseEventName(t){let r=t.toLowerCase().split("."),i=r.shift();if(r.length===0||!(i==="keydown"||i==="keyup"))return null;let o=n._normalizeKey(r.pop()),s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),Oy.forEach(l=>{let u=r.indexOf(l);u>-1&&(r.splice(u,1),s+=l+".")}),s+=o,r.length!=0||o.length===0)return null;let c={};return c.domEventName=i,c.fullKey=s,c}static matchEventFullKeyCode(t,r){let i=sI[t.key]||t.key,o="";return r.indexOf("code.")>-1&&(i=t.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),Oy.forEach(s=>{if(s!==i){let a=aI[s];a(t)&&(o+=s+".")}}),o+=i,o===r)}static eventCallback(t,r,i){return o=>{n.matchEventFullKeyCode(o,t)&&i.runGuarded(()=>r(o))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(r){return new(r||n)(Ye(zn))};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})();function Hy(n,e){return Ey(ge({rootComponent:n},lI(e)))}function lI(n){return{appProviders:[...pI,...n?.providers??[]],platformProviders:hI}}function uI(){jh.makeCurrent()}function dI(){return new ci}function fI(){return S_(document),document}var hI=[{provide:Hr,useValue:Bh},{provide:mh,useValue:uI,multi:!0},{provide:zn,useFactory:fI,deps:[]}];var pI=[{provide:Ll,useValue:"root"},{provide:ci,useFactory:dI,deps:[]},{provide:Wh,useClass:oI,multi:!0,deps:[zn,Nt,Hr]},{provide:Wh,useClass:cI,multi:!0,deps:[zn]},Ly,ky,Uy,{provide:zo,useExisting:Ly},{provide:ql,useClass:KA,deps:[]},[]];var zy=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(r){return new(r||n)(Ye(zn))};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var He="primary",Oa=Symbol("RouteTitle"),Jh=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function ns(n){return new Jh(n)}function gI(n,e,t){let r=t.path.split("/");if(r.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||r.length<n.length))return null;let i={};for(let o=0;o<r.length;o++){let s=r[o],a=n[o];if(s[0]===":")i[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:n.slice(0,r.length),posParams:i}}function vI(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!Dr(n[t],e[t]))return!1;return!0}function Dr(n,e){let t=n?ep(n):void 0,r=e?ep(e):void 0;if(!t||!r||t.length!=r.length)return!1;let i;for(let o=0;o<t.length;o++)if(i=t[o],!Zy(n[i],e[i]))return!1;return!0}function ep(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Zy(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),r=[...e].sort();return t.every((i,o)=>r[o]===i)}else return n===e}function Ky(n){return n.length>0?n[n.length-1]:null}function hi(n){return Wd(n)?n:pa(n)?wt(Promise.resolve(n)):Ie(n)}var _I={exact:Jy,subset:ex},Qy={exact:yI,subset:xI,ignored:()=>!0};function Gy(n,e,t){return _I[t.paths](n.root,e.root,t.matrixParams)&&Qy[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function yI(n,e){return Dr(n,e)}function Jy(n,e,t){if(!Qi(n.segments,e.segments)||!eu(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let r in e.children)if(!n.children[r]||!Jy(n.children[r],e.children[r],t))return!1;return!0}function xI(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>Zy(n[t],e[t]))}function ex(n,e,t){return tx(n,e,e.segments,t)}function tx(n,e,t,r){if(n.segments.length>t.length){let i=n.segments.slice(0,t.length);return!(!Qi(i,t)||e.hasChildren()||!eu(i,t,r))}else if(n.segments.length===t.length){if(!Qi(n.segments,t)||!eu(n.segments,t,r))return!1;for(let i in e.children)if(!n.children[i]||!ex(n.children[i],e.children[i],r))return!1;return!0}else{let i=t.slice(0,n.segments.length),o=t.slice(n.segments.length);return!Qi(n.segments,i)||!eu(n.segments,i,r)||!n.children[He]?!1:tx(n.children[He],e,o,r)}}function eu(n,e,t){return e.every((r,i)=>Qy[t](n[i].parameters,r.parameters))}var Gr=class{root;queryParams;fragment;_queryParamMap;constructor(e=new ft([],{}),t={},r=null){this.root=e,this.queryParams=t,this.fragment=r}get queryParamMap(){return this._queryParamMap??=ns(this.queryParams),this._queryParamMap}toString(){return MI.serialize(this)}},ft=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return tu(this)}},Ki=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=ns(this.parameters),this._parameterMap}toString(){return rx(this)}};function EI(n,e){return Qi(n,e)&&n.every((t,r)=>Dr(t.parameters,e[r].parameters))}function Qi(n,e){return n.length!==e.length?!1:n.every((t,r)=>t.path===e[r].path)}function SI(n,e){let t=[];return Object.entries(n.children).forEach(([r,i])=>{r===He&&(t=t.concat(e(i,r)))}),Object.entries(n.children).forEach(([r,i])=>{r!==He&&(t=t.concat(e(i,r)))}),t}var Dp=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275prov=Te({token:n,factory:()=>new Da,providedIn:"root"})}return n})(),Da=class{parse(e){let t=new np(e);return new Gr(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${xa(e.root,!0)}`,r=DI(e.queryParams),i=typeof e.fragment=="string"?`#${bI(e.fragment)}`:"";return`${t}${r}${i}`}},MI=new Da;function tu(n){return n.segments.map(e=>rx(e)).join("/")}function xa(n,e){if(!n.hasChildren())return tu(n);if(e){let t=n.children[He]?xa(n.children[He],!1):"",r=[];return Object.entries(n.children).forEach(([i,o])=>{i!==He&&r.push(`${i}:${xa(o,!1)}`)}),r.length>0?`${t}(${r.join("//")})`:t}else{let t=SI(n,(r,i)=>i===He?[xa(n.children[He],!1)]:[`${i}:${xa(r,!1)}`]);return Object.keys(n.children).length===1&&n.children[He]!=null?`${tu(n)}/${t[0]}`:`${tu(n)}/(${t.join("//")})`}}function nx(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ql(n){return nx(n).replace(/%3B/gi,";")}function bI(n){return encodeURI(n)}function tp(n){return nx(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function nu(n){return decodeURIComponent(n)}function jy(n){return nu(n.replace(/\+/g,"%20"))}function rx(n){return`${tp(n.path)}${wI(n.parameters)}`}function wI(n){return Object.entries(n).map(([e,t])=>`;${tp(e)}=${tp(t)}`).join("")}function DI(n){let e=Object.entries(n).map(([t,r])=>Array.isArray(r)?r.map(i=>`${Ql(t)}=${Ql(i)}`).join("&"):`${Ql(t)}=${Ql(r)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var CI=/^[^\/()?;#]+/;function Yh(n){let e=n.match(CI);return e?e[0]:""}var TI=/^[^\/()?;=#]+/;function AI(n){let e=n.match(TI);return e?e[0]:""}var II=/^[^=?&#]+/;function RI(n){let e=n.match(II);return e?e[0]:""}var NI=/^[^&#]+/;function PI(n){let e=n.match(NI);return e?e[0]:""}var np=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ft([],{}):new ft([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(r[He]=new ft(e,t)),r}parseSegment(){let e=Yh(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Ae(4009,!1);return this.capture(e),new Ki(nu(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=AI(this.remaining);if(!t)return;this.capture(t);let r="";if(this.consumeOptional("=")){let i=Yh(this.remaining);i&&(r=i,this.capture(r))}e[nu(t)]=nu(r)}parseQueryParam(e){let t=RI(this.remaining);if(!t)return;this.capture(t);let r="";if(this.consumeOptional("=")){let s=PI(this.remaining);s&&(r=s,this.capture(r))}let i=jy(t),o=jy(r);if(e.hasOwnProperty(i)){let s=e[i];Array.isArray(s)||(s=[s],e[i]=s),s.push(o)}else e[i]=o}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Yh(this.remaining),i=this.remaining[r.length];if(i!=="/"&&i!==")"&&i!==";")throw new Ae(4010,!1);let o;r.indexOf(":")>-1?(o=r.slice(0,r.indexOf(":")),this.capture(o),this.capture(":")):e&&(o=He);let s=this.parseChildren();t[o]=Object.keys(s).length===1?s[He]:new ft([],s),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Ae(4011,!1)}};function ix(n){return n.segments.length>0?new ft([],{[He]:n}):n}function ox(n){let e={};for(let[r,i]of Object.entries(n.children)){let o=ox(i);if(r===He&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))e[s]=a;else(o.segments.length>0||o.hasChildren())&&(e[r]=o)}let t=new ft(n.segments,e);return LI(t)}function LI(n){if(n.numberOfChildren===1&&n.children[He]){let e=n.children[He];return new ft(n.segments.concat(e.segments),e.children)}return n}function Ca(n){return n instanceof Gr}function FI(n,e,t=null,r=null){let i=sx(n);return ax(i,e,t,r)}function sx(n){let e;function t(o){let s={};for(let c of o.children){let l=t(c);s[c.outlet]=l}let a=new ft(o.url,s);return o===n&&(e=a),a}let r=t(n.root),i=ix(r);return e??i}function ax(n,e,t,r){let i=n;for(;i.parent;)i=i.parent;if(e.length===0)return Zh(i,i,i,t,r);let o=OI(e);if(o.toRoot())return Zh(i,i,new ft([],{}),t,r);let s=UI(o,i,n),a=s.processChildren?Ma(s.segmentGroup,s.index,o.commands):lx(s.segmentGroup,s.index,o.commands);return Zh(i,s.segmentGroup,a,t,r)}function ru(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Ta(n){return typeof n=="object"&&n!=null&&n.outlets}function Zh(n,e,t,r,i){let o={};r&&Object.entries(r).forEach(([c,l])=>{o[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let s;n===e?s=t:s=cx(n,e,t);let a=ix(ox(s));return new Gr(a,o,i)}function cx(n,e,t){let r={};return Object.entries(n.children).forEach(([i,o])=>{o===e?r[i]=t:r[i]=cx(o,e,t)}),new ft(n.segments,r)}var iu=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,r){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=r,e&&r.length>0&&ru(r[0]))throw new Ae(4003,!1);let i=r.find(Ta);if(i&&i!==Ky(r))throw new Ae(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function OI(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new iu(!0,0,n);let e=0,t=!1,r=n.reduce((i,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...i,{outlets:a}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!="string"?[...i,o]:s===0?(o.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&i.push(a))}),i):[...i,o]},[]);return new iu(t,e,r)}var Jo=class{segmentGroup;processChildren;index;constructor(e,t,r){this.segmentGroup=e,this.processChildren=t,this.index=r}};function UI(n,e,t){if(n.isAbsolute)return new Jo(e,!0,0);if(!t)return new Jo(e,!1,NaN);if(t.parent===null)return new Jo(t,!0,0);let r=ru(n.commands[0])?0:1,i=t.segments.length-1+r;return kI(t,i,n.numberOfDoubleDots)}function kI(n,e,t){let r=n,i=e,o=t;for(;o>i;){if(o-=i,r=r.parent,!r)throw new Ae(4005,!1);i=r.segments.length}return new Jo(r,!1,i-o)}function BI(n){return Ta(n[0])?n[0].outlets:{[He]:n}}function lx(n,e,t){if(n??=new ft([],{}),n.segments.length===0&&n.hasChildren())return Ma(n,e,t);let r=VI(n,e,t),i=t.slice(r.commandIndex);if(r.match&&r.pathIndex<n.segments.length){let o=new ft(n.segments.slice(0,r.pathIndex),{});return o.children[He]=new ft(n.segments.slice(r.pathIndex),n.children),Ma(o,0,i)}else return r.match&&i.length===0?new ft(n.segments,{}):r.match&&!n.hasChildren()?rp(n,e,t):r.match?Ma(n,0,i):rp(n,e,t)}function Ma(n,e,t){if(t.length===0)return new ft(n.segments,{});{let r=BI(t),i={};if(Object.keys(r).some(o=>o!==He)&&n.children[He]&&n.numberOfChildren===1&&n.children[He].segments.length===0){let o=Ma(n.children[He],e,t);return new ft(n.segments,o.children)}return Object.entries(r).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(i[o]=lx(n.children[o],e,s))}),Object.entries(n.children).forEach(([o,s])=>{r[o]===void 0&&(i[o]=s)}),new ft(n.segments,i)}}function VI(n,e,t){let r=0,i=e,o={match:!1,pathIndex:0,commandIndex:0};for(;i<n.segments.length;){if(r>=t.length)return o;let s=n.segments[i],a=t[r];if(Ta(a))break;let c=`${a}`,l=r<t.length-1?t[r+1]:null;if(i>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!$y(c,l,s))return o;r+=2}else{if(!$y(c,{},s))return o;r++}i++}return{match:!0,pathIndex:i,commandIndex:r}}function rp(n,e,t){let r=n.segments.slice(0,e),i=0;for(;i<t.length;){let o=t[i];if(Ta(o)){let c=HI(o.outlets);return new ft(r,c)}if(i===0&&ru(t[0])){let c=n.segments[e];r.push(new Ki(c.path,Wy(t[0]))),i++;continue}let s=Ta(o)?o.outlets[He]:`${o}`,a=i<t.length-1?t[i+1]:null;s&&a&&ru(a)?(r.push(new Ki(s,Wy(a))),i+=2):(r.push(new Ki(s,{})),i++)}return new ft(r,{})}function HI(n){let e={};return Object.entries(n).forEach(([t,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(e[t]=rp(new ft([],{}),0,r))}),e}function Wy(n){let e={};return Object.entries(n).forEach(([t,r])=>e[t]=`${r}`),e}function $y(n,e,t){return n==t.path&&Dr(e,t.parameters)}var ba="imperative",qt=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(qt||{}),Gn=class{id;url;constructor(e,t){this.id=e,this.url=t}},Aa=class extends Gn{type=qt.NavigationStart;navigationTrigger;restoredState;constructor(e,t,r="imperative",i=null){super(e,t),this.navigationTrigger=r,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ji=class extends Gn{urlAfterRedirects;type=qt.NavigationEnd;constructor(e,t,r){super(e,t),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},An=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(An||{}),ip=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(ip||{}),zr=class extends Gn{reason;code;type=qt.NavigationCancel;constructor(e,t,r,i){super(e,t),this.reason=r,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},eo=class extends Gn{reason;code;type=qt.NavigationSkipped;constructor(e,t,r,i){super(e,t),this.reason=r,this.code=i}},Ia=class extends Gn{error;target;type=qt.NavigationError;constructor(e,t,r,i){super(e,t),this.error=r,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ou=class extends Gn{urlAfterRedirects;state;type=qt.RoutesRecognized;constructor(e,t,r,i){super(e,t),this.urlAfterRedirects=r,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},op=class extends Gn{urlAfterRedirects;state;type=qt.GuardsCheckStart;constructor(e,t,r,i){super(e,t),this.urlAfterRedirects=r,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},sp=class extends Gn{urlAfterRedirects;state;shouldActivate;type=qt.GuardsCheckEnd;constructor(e,t,r,i,o){super(e,t),this.urlAfterRedirects=r,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},ap=class extends Gn{urlAfterRedirects;state;type=qt.ResolveStart;constructor(e,t,r,i){super(e,t),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},cp=class extends Gn{urlAfterRedirects;state;type=qt.ResolveEnd;constructor(e,t,r,i){super(e,t),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},lp=class{route;type=qt.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},up=class{route;type=qt.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},dp=class{snapshot;type=qt.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},fp=class{snapshot;type=qt.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},hp=class{snapshot;type=qt.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},pp=class{snapshot;type=qt.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Ra=class{},rs=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function zI(n,e){return n.providers&&!n._injector&&(n._injector=Ah(n.providers,e,`Route: ${n.path}`)),n._injector??e}function ir(n){return n.outlet||He}function GI(n,e){let t=n.filter(r=>ir(r)===e);return t.push(...n.filter(r=>ir(r)!==e)),t}function Ua(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var mp=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Ua(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new fu(this.rootInjector)}},fu=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,r){let i=this.getOrCreateContext(t);i.outlet=r,this.contexts.set(t,i)}onChildOutletDestroyed(t){let r=this.getContext(t);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let r=this.getContext(t);return r||(r=new mp(this.rootInjector),this.contexts.set(t,r)),r}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(r){return new(r||n)(Ye(Vn))};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),su=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=gp(e,this._root);return t?t.children.map(r=>r.value):[]}firstChild(e){let t=gp(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=vp(e,this._root);return t.length<2?[]:t[t.length-2].children.map(i=>i.value).filter(i=>i!==e)}pathFromRoot(e){return vp(e,this._root).map(t=>t.value)}};function gp(n,e){if(n===e.value)return e;for(let t of e.children){let r=gp(n,t);if(r)return r}return null}function vp(n,e){if(n===e.value)return[e];for(let t of e.children){let r=vp(n,t);if(r.length)return r.unshift(e),r}return[]}var Tn=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Qo(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var au=class extends su{snapshot;constructor(e,t){super(e),this.snapshot=t,Cp(this,e)}toString(){return this.snapshot.toString()}};function ux(n){let e=jI(n),t=new $t([new Ki("",{})]),r=new $t({}),i=new $t({}),o=new $t({}),s=new $t(""),a=new is(t,r,o,s,i,He,n,e.root);return a.snapshot=e.root,new au(new Tn(a,[]),e)}function jI(n){let e={},t={},r={},i="",o=new es([],e,r,i,t,He,n,null,{});return new lu("",new Tn(o,[]))}var is=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,r,i,o,s,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=r,this.fragmentSubject=i,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(Ue(l=>l[Oa]))??Ie(void 0),this.url=e,this.params=t,this.queryParams=r,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Ue(e=>ns(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Ue(e=>ns(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function cu(n,e,t="emptyOnly"){let r,{routeConfig:i}=n;return e!==null&&(t==="always"||i?.path===""||!e.component&&!e.routeConfig?.loadComponent)?r={params:ge(ge({},e.params),n.params),data:ge(ge({},e.data),n.data),resolve:ge(ge(ge(ge({},n.data),e.data),i?.data),n._resolvedData)}:r={params:ge({},n.params),data:ge({},n.data),resolve:ge(ge({},n.data),n._resolvedData??{})},i&&fx(i)&&(r.resolve[Oa]=i.title),r}var es=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[Oa]}constructor(e,t,r,i,o,s,a,c,l){this.url=e,this.params=t,this.queryParams=r,this.fragment=i,this.data=o,this.outlet=s,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ns(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ns(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(r=>r.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},lu=class extends su{url;constructor(e,t){super(t),this.url=e,Cp(this,t)}toString(){return dx(this._root)}};function Cp(n,e){e.value._routerState=n,e.children.forEach(t=>Cp(n,t))}function dx(n){let e=n.children.length>0?` { ${n.children.map(dx).join(", ")} } `:"";return`${n.value}${e}`}function Kh(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,Dr(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),Dr(e.params,t.params)||n.paramsSubject.next(t.params),vI(e.url,t.url)||n.urlSubject.next(t.url),Dr(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function _p(n,e){let t=Dr(n.params,e.params)&&EI(n.url,e.url),r=!n.parent!=!e.parent;return t&&!r&&(!n.parent||_p(n.parent,e.parent))}function fx(n){return typeof n.title=="string"||n.title===null}var WI=new Le(""),$I=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=He;activateEvents=new bn;deactivateEvents=new bn;attachEvents=new bn;detachEvents=new bn;routerOutletData=m_(void 0);parentContexts=ae(fu);location=ae(qo);changeDetector=ae(ma);inputBinder=ae(Tp,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:r,previousValue:i}=t.name;if(r)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Ae(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Ae(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Ae(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,r){this.activated=t,this._activatedRoute=r,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,r){if(this.isActivated)throw new Ae(4013,!1);this._activatedRoute=t;let i=this.location,s=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new yp(t,a,i.injector,this.routerOutletData);this.activated=i.createComponent(s,{index:i.length,injector:c,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(r){return new(r||n)};static \u0275dir=Ih({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[nh]})}return n})(),yp=class n{route;childContexts;parent;outletData;__ngOutletInjector(e){return new n(this.route,this.childContexts,e,this.outletData)}constructor(e,t,r,i){this.route=e,this.childContexts=t,this.parent=r,this.outletData=i}get(e,t){return e===is?this.route:e===fu?this.childContexts:e===WI?this.outletData:this.parent.get(e,t)}},Tp=new Le("");function qI(n,e,t){let r=Na(n,e._root,t?t._root:void 0);return new au(r,e)}function Na(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let r=t.value;r._futureSnapshot=e.value;let i=XI(n,e,t);return new Tn(r,i)}else{if(n.shouldAttach(e.value)){let o=n.retrieve(e.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=e.value,s.children=e.children.map(a=>Na(n,a)),s}}let r=YI(e.value),i=e.children.map(o=>Na(n,o));return new Tn(r,i)}}function XI(n,e,t){return e.children.map(r=>{for(let i of t.children)if(n.shouldReuseRoute(r.value,i.value.snapshot))return Na(n,r,i);return Na(n,r)})}function YI(n){return new is(new $t(n.url),new $t(n.params),new $t(n.queryParams),new $t(n.fragment),new $t(n.data),n.outlet,n.component,n)}var Pa=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},hx="ngNavigationCancelingError";function uu(n,e){let{redirectTo:t,navigationBehaviorOptions:r}=Ca(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,i=px(!1,An.Redirect);return i.url=t,i.navigationBehaviorOptions=r,i}function px(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[hx]=!0,t.cancellationCode=e,t}function ZI(n){return mx(n)&&Ca(n.url)}function mx(n){return!!n&&n[hx]}var KI=(n,e,t,r)=>Ue(i=>(new xp(e,i.targetRouterState,i.currentRouterState,t,r).activate(n),i)),xp=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,r,i,o){this.routeReuseStrategy=e,this.futureState=t,this.currState=r,this.forwardEvent=i,this.inputBindingEnabled=o}activate(e){let t=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,r,e),Kh(this.futureState.root),this.activateChildRoutes(t,r,e)}deactivateChildRoutes(e,t,r){let i=Qo(t);e.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,i[s],r),delete i[s]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,r)})}deactivateRoutes(e,t,r){let i=e.value,o=t?t.value:null;if(i===o)if(i.component){let s=r.getContext(i.outlet);s&&this.deactivateChildRoutes(e,t,s.children)}else this.deactivateChildRoutes(e,t,r);else o&&this.deactivateRouteAndItsChildren(t,r)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let r=t.getContext(e.value.outlet),i=r&&e.value.component?r.children:t,o=Qo(e);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,i);if(r&&r.outlet){let s=r.outlet.detach(),a=r.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:s,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let r=t.getContext(e.value.outlet),i=r&&e.value.component?r.children:t,o=Qo(e);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,i);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(e,t,r){let i=Qo(t);e.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],r),this.forwardEvent(new pp(o.value.snapshot))}),e.children.length&&this.forwardEvent(new fp(e.value.snapshot))}activateRoutes(e,t,r){let i=e.value,o=t?t.value:null;if(Kh(i),i===o)if(i.component){let s=r.getOrCreateContext(i.outlet);this.activateChildRoutes(e,t,s.children)}else this.activateChildRoutes(e,t,r);else if(i.component){let s=r.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let a=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Kh(a.route.value),this.activateChildRoutes(e,null,s.children)}else s.attachRef=null,s.route=i,s.outlet&&s.outlet.activateWith(i,s.injector),this.activateChildRoutes(e,null,s.children)}else this.activateChildRoutes(e,null,r)}},du=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},ts=class{component;route;constructor(e,t){this.component=e,this.route=t}};function QI(n,e,t){let r=n._root,i=e?e._root:null;return Ea(r,i,t,[r.value])}function JI(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function ss(n,e){let t=Symbol(),r=e.get(n,t);return r===t?typeof n=="function"&&!uv(n)?n:e.get(n):r}function Ea(n,e,t,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=Qo(e);return n.children.forEach(s=>{eR(s,o[s.value.outlet],t,r.concat([s.value]),i),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>wa(a,t.getContext(s),i)),i}function eR(n,e,t,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,s=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let c=tR(s,o,o.routeConfig.runGuardsAndResolvers);c?i.canActivateChecks.push(new du(r)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?Ea(n,e,a?a.children:null,r,i):Ea(n,e,t,r,i),c&&a&&a.outlet&&a.outlet.isActivated&&i.canDeactivateChecks.push(new ts(a.outlet.component,s))}else s&&wa(e,a,i),i.canActivateChecks.push(new du(r)),o.component?Ea(n,null,a?a.children:null,r,i):Ea(n,null,t,r,i);return i}function tR(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!Qi(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Qi(n.url,e.url)||!Dr(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!_p(n,e)||!Dr(n.queryParams,e.queryParams);case"paramsChange":default:return!_p(n,e)}}function wa(n,e,t){let r=Qo(n),i=n.value;Object.entries(r).forEach(([o,s])=>{i.component?e?wa(s,e.children.getContext(o),t):wa(s,null,t):wa(s,e,t)}),i.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new ts(e.outlet.component,i)):t.canDeactivateChecks.push(new ts(null,i)):t.canDeactivateChecks.push(new ts(null,i))}function ka(n){return typeof n=="function"}function nR(n){return typeof n=="boolean"}function rR(n){return n&&ka(n.canLoad)}function iR(n){return n&&ka(n.canActivate)}function oR(n){return n&&ka(n.canActivateChild)}function sR(n){return n&&ka(n.canDeactivate)}function aR(n){return n&&ka(n.canMatch)}function gx(n){return n instanceof Fr||n?.name==="EmptyError"}var Jl=Symbol("INITIAL_VALUE");function os(){return Zt(n=>rl(n.map(e=>e.pipe(Ut(1),Kd(Jl)))).pipe(Ue(e=>{for(let t of e)if(t!==!0){if(t===Jl)return Jl;if(t===!1||cR(t))return t}return!0}),Yt(e=>e!==Jl),Ut(1)))}function cR(n){return Ca(n)||n instanceof Pa}function lR(n,e){return Dt(t=>{let{targetSnapshot:r,currentSnapshot:i,guards:{canActivateChecks:o,canDeactivateChecks:s}}=t;return s.length===0&&o.length===0?Ie(St(ge({},t),{guardsResult:!0})):uR(s,r,i,n).pipe(Dt(a=>a&&nR(a)?dR(r,o,n,e):Ie(a)),Ue(a=>St(ge({},t),{guardsResult:a})))})}function uR(n,e,t,r){return wt(n).pipe(Dt(i=>gR(i.component,i.route,t,e,r)),Or(i=>i!==!0,!0))}function dR(n,e,t,r){return wt(e).pipe(Co(i=>_r(hR(i.route.parent,r),fR(i.route,r),mR(n,i.path,t),pR(n,i.route,t))),Or(i=>i!==!0,!0))}function fR(n,e){return n!==null&&e&&e(new hp(n)),Ie(!0)}function hR(n,e){return n!==null&&e&&e(new dp(n)),Ie(!0)}function pR(n,e,t){let r=e.routeConfig?e.routeConfig.canActivate:null;if(!r||r.length===0)return Ie(!0);let i=r.map(o=>Pi(()=>{let s=Ua(e)??t,a=ss(o,s),c=iR(a)?a.canActivate(e,n):tr(s,()=>a(e,n));return hi(c).pipe(Or())}));return Ie(i).pipe(os())}function mR(n,e,t){let r=e[e.length-1],o=e.slice(0,e.length-1).reverse().map(s=>JI(s)).filter(s=>s!==null).map(s=>Pi(()=>{let a=s.guards.map(c=>{let l=Ua(s.node)??t,u=ss(c,l),d=oR(u)?u.canActivateChild(r,n):tr(l,()=>u(r,n));return hi(d).pipe(Or())});return Ie(a).pipe(os())}));return Ie(o).pipe(os())}function gR(n,e,t,r,i){let o=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!o||o.length===0)return Ie(!0);let s=o.map(a=>{let c=Ua(e)??i,l=ss(a,c),u=sR(l)?l.canDeactivate(n,e,t,r):tr(c,()=>l(n,e,t,r));return hi(u).pipe(Or())});return Ie(s).pipe(os())}function vR(n,e,t,r){let i=e.canLoad;if(i===void 0||i.length===0)return Ie(!0);let o=i.map(s=>{let a=ss(s,n),c=rR(a)?a.canLoad(e,t):tr(n,()=>a(e,t));return hi(c)});return Ie(o).pipe(os(),vx(r))}function vx(n){return kd(kt(e=>{if(typeof e!="boolean")throw uu(n,e)}),Ue(e=>e===!0))}function _R(n,e,t,r){let i=e.canMatch;if(!i||i.length===0)return Ie(!0);let o=i.map(s=>{let a=ss(s,n),c=aR(a)?a.canMatch(e,t):tr(n,()=>a(e,t));return hi(c)});return Ie(o).pipe(os(),vx(r))}var La=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},Fa=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function Ko(n){return ni(new La(n))}function yR(n){return ni(new Ae(4e3,!1))}function xR(n){return ni(px(!1,An.GuardRejected))}var Ep=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let r=[],i=t.root;for(;;){if(r=r.concat(i.segments),i.numberOfChildren===0)return Ie(r);if(i.numberOfChildren>1||!i.children[He])return yR(`${e.redirectTo}`);i=i.children[He]}}applyRedirectCommands(e,t,r,i,o){if(typeof t!="string"){let a=t,{queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,params:p,data:g,title:y}=i,m=tr(o,()=>a({params:p,data:g,queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,title:y}));if(m instanceof Gr)throw new Fa(m);t=m}let s=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,r);if(t[0]==="/")throw new Fa(s);return s}applyRedirectCreateUrlTree(e,t,r,i){let o=this.createSegmentGroup(e,t.root,r,i);return new Gr(o,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let r={};return Object.entries(e).forEach(([i,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);r[i]=t[a]}else r[i]=o}),r}createSegmentGroup(e,t,r,i){let o=this.createSegments(e,t.segments,r,i),s={};return Object.entries(t.children).forEach(([a,c])=>{s[a]=this.createSegmentGroup(e,c,r,i)}),new ft(o,s)}createSegments(e,t,r,i){return t.map(o=>o.path[0]===":"?this.findPosParam(e,o,i):this.findOrReturn(o,r))}findPosParam(e,t,r){let i=r[t.path.substring(1)];if(!i)throw new Ae(4001,!1);return i}findOrReturn(e,t){let r=0;for(let i of t){if(i.path===e.path)return t.splice(r),i;r++}return e}},Sp={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function ER(n,e,t,r,i){let o=_x(n,e,t);return o.matched?(r=zI(e,r),_R(r,e,t,i).pipe(Ue(s=>s===!0?o:ge({},Sp)))):Ie(o)}function _x(n,e,t){if(e.path==="**")return SR(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?ge({},Sp):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let i=(e.matcher||gI)(t,n,e);if(!i)return ge({},Sp);let o={};Object.entries(i.posParams??{}).forEach(([a,c])=>{o[a]=c.path});let s=i.consumed.length>0?ge(ge({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:t.slice(i.consumed.length),parameters:s,positionalParamSegments:i.posParams??{}}}function SR(n){return{matched:!0,parameters:n.length>0?Ky(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function qy(n,e,t,r){return t.length>0&&wR(n,t,r)?{segmentGroup:new ft(e,bR(r,new ft(t,n.children))),slicedSegments:[]}:t.length===0&&DR(n,t,r)?{segmentGroup:new ft(n.segments,MR(n,t,r,n.children)),slicedSegments:t}:{segmentGroup:new ft(n.segments,n.children),slicedSegments:t}}function MR(n,e,t,r){let i={};for(let o of t)if(hu(n,e,o)&&!r[ir(o)]){let s=new ft([],{});i[ir(o)]=s}return ge(ge({},r),i)}function bR(n,e){let t={};t[He]=e;for(let r of n)if(r.path===""&&ir(r)!==He){let i=new ft([],{});t[ir(r)]=i}return t}function wR(n,e,t){return t.some(r=>hu(n,e,r)&&ir(r)!==He)}function DR(n,e,t){return t.some(r=>hu(n,e,r))}function hu(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function CR(n,e,t){return e.length===0&&!n.children[t]}var Mp=class{};function TR(n,e,t,r,i,o,s="emptyOnly"){return new bp(n,e,t,r,i,s,o).recognize()}var AR=31,bp=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,r,i,o,s,a){this.injector=e,this.configLoader=t,this.rootComponentType=r,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.applyRedirects=new Ep(this.urlSerializer,this.urlTree)}noMatchError(e){return new Ae(4002,`'${e.segmentGroup}'`)}recognize(){let e=qy(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(Ue(({children:t,rootSnapshot:r})=>{let i=new Tn(r,t),o=new lu("",i),s=FI(r,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}))}match(e){let t=new es([],Object.freeze({}),Object.freeze(ge({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),He,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,He,t).pipe(Ue(r=>({children:r,rootSnapshot:t})),ri(r=>{if(r instanceof Fa)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof La?this.noMatchError(r):r}))}processSegmentGroup(e,t,r,i,o){return r.segments.length===0&&r.hasChildren()?this.processChildren(e,t,r,o):this.processSegment(e,t,r,r.segments,i,!0,o).pipe(Ue(s=>s instanceof Tn?[s]:[]))}processChildren(e,t,r,i){let o=[];for(let s of Object.keys(r.children))s==="primary"?o.unshift(s):o.push(s);return wt(o).pipe(Co(s=>{let a=r.children[s],c=GI(t,s);return this.processSegmentGroup(e,c,a,s,i)}),Zd((s,a)=>(s.push(...a),s)),ii(null),Xd(),Dt(s=>{if(s===null)return Ko(r);let a=yx(s);return IR(a),Ie(a)}))}processSegment(e,t,r,i,o,s,a){return wt(t).pipe(Co(c=>this.processSegmentAgainstRoute(c._injector??e,t,c,r,i,o,s,a).pipe(ri(l=>{if(l instanceof La)return Ie(null);throw l}))),Or(c=>!!c),ri(c=>{if(gx(c))return CR(r,i,o)?Ie(new Mp):Ko(r);throw c}))}processSegmentAgainstRoute(e,t,r,i,o,s,a,c){return ir(r)!==s&&(s===He||!hu(i,o,r))?Ko(i):r.redirectTo===void 0?this.matchSegmentAgainstRoute(e,i,r,o,s,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,i,t,r,o,s,c):Ko(i)}expandSegmentAgainstRouteUsingRedirect(e,t,r,i,o,s,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:f}=_x(t,i,o);if(!c)return Ko(t);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>AR&&(this.allowRedirects=!1));let p=new es(o,l,Object.freeze(ge({},this.urlTree.queryParams)),this.urlTree.fragment,Xy(i),ir(i),i.component??i._loadedComponent??null,i,Yy(i)),g=cu(p,a,this.paramsInheritanceStrategy);p.params=Object.freeze(g.params),p.data=Object.freeze(g.data);let y=this.applyRedirects.applyRedirectCommands(u,i.redirectTo,d,p,e);return this.applyRedirects.lineralizeSegments(i,y).pipe(Dt(m=>this.processSegment(e,r,t,m.concat(f),s,!1,a)))}matchSegmentAgainstRoute(e,t,r,i,o,s){let a=ER(t,r,i,e,this.urlSerializer);return r.path==="**"&&(t.children={}),a.pipe(Zt(c=>c.matched?(e=r._injector??e,this.getChildConfig(e,r,i).pipe(Zt(({routes:l})=>{let u=r._loadedInjector??e,{parameters:d,consumedSegments:f,remainingSegments:p}=c,g=new es(f,d,Object.freeze(ge({},this.urlTree.queryParams)),this.urlTree.fragment,Xy(r),ir(r),r.component??r._loadedComponent??null,r,Yy(r)),y=cu(g,s,this.paramsInheritanceStrategy);g.params=Object.freeze(y.params),g.data=Object.freeze(y.data);let{segmentGroup:m,slicedSegments:h}=qy(t,f,p,l);if(h.length===0&&m.hasChildren())return this.processChildren(u,l,m,g).pipe(Ue(b=>new Tn(g,b)));if(l.length===0&&h.length===0)return Ie(new Tn(g,[]));let w=ir(r)===o;return this.processSegment(u,l,m,h,w?He:o,!0,g).pipe(Ue(b=>new Tn(g,b instanceof Tn?[b]:[])))}))):Ko(t)))}getChildConfig(e,t,r){return t.children?Ie({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Ie({routes:t._loadedRoutes,injector:t._loadedInjector}):vR(e,t,r,this.urlSerializer).pipe(Dt(i=>i?this.configLoader.loadChildren(e,t).pipe(kt(o=>{t._loadedRoutes=o.routes,t._loadedInjector=o.injector})):xR(t))):Ie({routes:[],injector:e})}};function IR(n){n.sort((e,t)=>e.value.outlet===He?-1:t.value.outlet===He?1:e.value.outlet.localeCompare(t.value.outlet))}function RR(n){let e=n.value.routeConfig;return e&&e.path===""}function yx(n){let e=[],t=new Set;for(let r of n){if(!RR(r)){e.push(r);continue}let i=e.find(o=>r.value.routeConfig===o.value.routeConfig);i!==void 0?(i.children.push(...r.children),t.add(i)):e.push(r)}for(let r of t){let i=yx(r.children);e.push(new Tn(r.value,i))}return e.filter(r=>!t.has(r))}function Xy(n){return n.data||{}}function Yy(n){return n.resolve||{}}function NR(n,e,t,r,i,o){return Dt(s=>TR(n,e,t,r,s.extractedUrl,i,o).pipe(Ue(({state:a,tree:c})=>St(ge({},s),{targetSnapshot:a,urlAfterRedirects:c}))))}function PR(n,e){return Dt(t=>{let{targetSnapshot:r,guards:{canActivateChecks:i}}=t;if(!i.length)return Ie(t);let o=new Set(i.map(c=>c.route)),s=new Set;for(let c of o)if(!s.has(c))for(let l of xx(c))s.add(l);let a=0;return wt(s).pipe(Co(c=>o.has(c)?LR(c,r,n,e):(c.data=cu(c,c.parent,n).resolve,Ie(void 0))),kt(()=>a++),To(1),Dt(c=>a===s.size?Ie(t):sn))})}function xx(n){let e=n.children.map(t=>xx(t)).flat();return[n,...e]}function LR(n,e,t,r){let i=n.routeConfig,o=n._resolve;return i?.title!==void 0&&!fx(i)&&(o[Oa]=i.title),FR(o,n,e,r).pipe(Ue(s=>(n._resolvedData=s,n.data=cu(n,n.parent,t).resolve,null)))}function FR(n,e,t,r){let i=ep(n);if(i.length===0)return Ie({});let o={};return wt(i).pipe(Dt(s=>OR(n[s],e,t,r).pipe(Or(),kt(a=>{if(a instanceof Pa)throw uu(new Da,a);o[s]=a}))),To(1),Ue(()=>o),ri(s=>gx(s)?sn:ni(s)))}function OR(n,e,t,r){let i=Ua(e)??r,o=ss(n,i),s=o.resolve?o.resolve(e,t):tr(i,()=>o(e,t));return hi(s)}function Qh(n){return Zt(e=>{let t=n(e);return t?wt(t).pipe(Ue(()=>e)):Ie(e)})}var Ex=(()=>{class n{buildTitle(t){let r,i=t.root;for(;i!==void 0;)r=this.getResolvedTitleForRoute(i)??r,i=i.children.find(o=>o.outlet===He);return r}getResolvedTitleForRoute(t){return t.data[Oa]}static \u0275fac=function(r){return new(r||n)};static \u0275prov=Te({token:n,factory:()=>ae(UR),providedIn:"root"})}return n})(),UR=(()=>{class n extends Ex{title;constructor(t){super(),this.title=t}updateTitle(t){let r=this.buildTitle(t);r!==void 0&&this.title.setTitle(r)}static \u0275fac=function(r){return new(r||n)(Ye(zy))};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ap=new Le("",{providedIn:"root",factory:()=>({})}),kR=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=di({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(r,i){r&1&&Xi(0,"router-outlet")},dependencies:[$I],encapsulation:2})}return n})();function Ip(n){let e=n.children&&n.children.map(Ip),t=e?St(ge({},n),{children:e}):ge({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==He&&(t.component=kR),t}var Rp=new Le(""),BR=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=ae(Fh);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Ie(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=hi(t.loadComponent()).pipe(Ue(Sx),kt(o=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=o}),Qs(()=>{this.componentLoaders.delete(t)})),i=new ti(r,()=>new bt).pipe(Mo());return this.componentLoaders.set(t,i),i}loadChildren(t,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Ie({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let o=VR(r,this.compiler,t,this.onLoadEndListener).pipe(Qs(()=>{this.childrenLoaders.delete(r)})),s=new ti(o,()=>new bt).pipe(Mo());return this.childrenLoaders.set(r,s),s}static \u0275fac=function(r){return new(r||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function VR(n,e,t,r){return hi(n.loadChildren()).pipe(Ue(Sx),Dt(i=>i instanceof da||Array.isArray(i)?Ie(i):wt(e.compileModuleAsync(i))),Ue(i=>{r&&r(n);let o,s,a=!1;return Array.isArray(i)?(s=i,a=!0):(o=i.create(t).injector,s=o.get(Rp,[],{optional:!0,self:!0}).flat()),{routes:s.map(Ip),injector:o}}))}function HR(n){return n&&typeof n=="object"&&"default"in n}function Sx(n){return HR(n)?n.default:n}var Np=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275prov=Te({token:n,factory:()=>ae(zR),providedIn:"root"})}return n})(),zR=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,r){return t}static \u0275fac=function(r){return new(r||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),GR=new Le("");var jR=new Le(""),WR=(()=>{class n{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new bt;transitionAbortSubject=new bt;configLoader=ae(BR);environmentInjector=ae(Vn);urlSerializer=ae(Dp);rootContexts=ae(fu);location=ae(ga);inputBindingEnabled=ae(Tp,{optional:!0})!==null;titleStrategy=ae(Ex);options=ae(Ap,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=ae(Np);createViewTransition=ae(GR,{optional:!0});navigationErrorHandler=ae(jR,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Ie(void 0);rootComponentType=null;constructor(){let t=i=>this.events.next(new lp(i)),r=i=>this.events.next(new up(i));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=t}complete(){this.transitions?.complete()}handleNavigationRequest(t){let r=++this.navigationId;this.transitions?.next(St(ge(ge({},this.transitions.value),t),{id:r}))}setupNavigations(t,r,i){return this.transitions=new $t({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:ba,restoredState:null,currentSnapshot:i.snapshot,targetSnapshot:null,currentRouterState:i,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(Yt(o=>o.id!==0),Ue(o=>St(ge({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),Zt(o=>{let s=!1,a=!1;return Ie(o).pipe(Zt(c=>{if(this.navigationId>o.id)return this.cancelNavigationTransition(o,"",An.SupersededByNewNavigation),sn;this.currentTransition=o,this.currentNavigation={id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,targetBrowserUrl:typeof c.extras.browserUrl=="string"?this.urlSerializer.parse(c.extras.browserUrl):c.extras.browserUrl,trigger:c.source,extras:c.extras,previousNavigation:this.lastSuccessfulNavigation?St(ge({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let l=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=c.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!l&&u!=="reload"){let d="";return this.events.next(new eo(c.id,this.urlSerializer.serialize(c.rawUrl),d,ip.IgnoredSameUrlNavigation)),c.resolve(!1),sn}if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return Ie(c).pipe(Zt(d=>{let f=this.transitions?.getValue();return this.events.next(new Aa(d.id,this.urlSerializer.serialize(d.extractedUrl),d.source,d.restoredState)),f!==this.transitions?.getValue()?sn:Promise.resolve(d)}),NR(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),kt(d=>{o.targetSnapshot=d.targetSnapshot,o.urlAfterRedirects=d.urlAfterRedirects,this.currentNavigation=St(ge({},this.currentNavigation),{finalUrl:d.urlAfterRedirects});let f=new ou(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(f)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:d,extractedUrl:f,source:p,restoredState:g,extras:y}=c,m=new Aa(d,this.urlSerializer.serialize(f),p,g);this.events.next(m);let h=ux(this.rootComponentType).snapshot;return this.currentTransition=o=St(ge({},c),{targetSnapshot:h,urlAfterRedirects:f,extras:St(ge({},y),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=f,Ie(o)}else{let d="";return this.events.next(new eo(c.id,this.urlSerializer.serialize(c.extractedUrl),d,ip.IgnoredByUrlHandlingStrategy)),c.resolve(!1),sn}}),kt(c=>{let l=new op(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(l)}),Ue(c=>(this.currentTransition=o=St(ge({},c),{guards:QI(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),o)),lR(this.environmentInjector,c=>this.events.next(c)),kt(c=>{if(o.guardsResult=c.guardsResult,c.guardsResult&&typeof c.guardsResult!="boolean")throw uu(this.urlSerializer,c.guardsResult);let l=new sp(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);this.events.next(l)}),Yt(c=>c.guardsResult?!0:(this.cancelNavigationTransition(c,"",An.GuardRejected),!1)),Qh(c=>{if(c.guards.canActivateChecks.length)return Ie(c).pipe(kt(l=>{let u=new ap(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),Zt(l=>{let u=!1;return Ie(l).pipe(PR(this.paramsInheritanceStrategy,this.environmentInjector),kt({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(l,"",An.NoDataFromResolver)}}))}),kt(l=>{let u=new cp(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}))}),Qh(c=>{let l=u=>{let d=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(u.routeConfig).pipe(kt(f=>{u.component=f}),Ue(()=>{})));for(let f of u.children)d.push(...l(f));return d};return rl(l(c.targetSnapshot.root)).pipe(ii(null),Ut(1))}),Qh(()=>this.afterPreactivation()),Zt(()=>{let{currentSnapshot:c,targetSnapshot:l}=o,u=this.createViewTransition?.(this.environmentInjector,c.root,l.root);return u?wt(u).pipe(Ue(()=>o)):Ie(o)}),Ue(c=>{let l=qI(t.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);return this.currentTransition=o=St(ge({},c),{targetRouterState:l}),this.currentNavigation.targetRouterState=l,o}),kt(()=>{this.events.next(new Ra)}),KI(this.rootContexts,t.routeReuseStrategy,c=>this.events.next(c),this.inputBindingEnabled),Ut(1),kt({next:c=>{s=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Ji(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0)},complete:()=>{s=!0}}),Qd(this.transitionAbortSubject.pipe(kt(c=>{throw c}))),Qs(()=>{!s&&!a&&this.cancelNavigationTransition(o,"",An.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation=null,this.currentTransition=null)}),ri(c=>{if(a=!0,mx(c))this.events.next(new zr(o.id,this.urlSerializer.serialize(o.extractedUrl),c.message,c.cancellationCode)),ZI(c)?this.events.next(new rs(c.url,c.navigationBehaviorOptions)):o.resolve(!1);else{let l=new Ia(o.id,this.urlSerializer.serialize(o.extractedUrl),c,o.targetSnapshot??void 0);try{let u=tr(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(u instanceof Pa){let{message:d,cancellationCode:f}=uu(this.urlSerializer,u);this.events.next(new zr(o.id,this.urlSerializer.serialize(o.extractedUrl),d,f)),this.events.next(new rs(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(l),c}catch(u){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(u)}}return sn}))}))}cancelNavigationTransition(t,r,i){let o=new zr(t.id,this.urlSerializer.serialize(t.extractedUrl),r,i);this.events.next(o),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==r?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(r){return new(r||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function $R(n){return n!==ba}var qR=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275prov=Te({token:n,factory:()=>ae(XR),providedIn:"root"})}return n})(),wp=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},XR=(()=>{class n extends wp{static \u0275fac=(()=>{let t;return function(i){return(t||(t=dh(n)))(i||n)}})();static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Mx=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275prov=Te({token:n,factory:()=>ae(YR),providedIn:"root"})}return n})(),YR=(()=>{class n extends Mx{location=ae(ga);urlSerializer=ae(Dp);options=ae(Ap,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";urlHandlingStrategy=ae(Np);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Gr;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}routerState=ux(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(r=>{r.type==="popstate"&&t(r.url,r.state)})}handleRouterEvent(t,r){if(t instanceof Aa)this.stateMemento=this.createStateMemento();else if(t instanceof eo)this.rawUrlTree=r.initialUrl;else if(t instanceof ou){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let i=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(r.targetBrowserUrl??i,r)}}else t instanceof Ra?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&!r.extras.skipLocationChange&&this.setBrowserUrl(r.targetBrowserUrl??this.rawUrlTree,r)):t instanceof zr&&(t.code===An.GuardRejected||t.code===An.NoDataFromResolver)?this.restoreHistory(r):t instanceof Ia?this.restoreHistory(r,!0):t instanceof Ji&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,r){let i=t instanceof Gr?this.urlSerializer.serialize(t):t;if(this.location.isCurrentPathEqualTo(i)||r.extras.replaceUrl){let o=this.browserPageId,s=ge(ge({},r.extras.state),this.generateNgRouterState(r.id,o));this.location.replaceState(i,"",s)}else{let o=ge(ge({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(i,"",o)}}restoreHistory(t,r=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.currentUrlTree===t.finalUrl&&o===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,r){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:r}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(i){return(t||(t=dh(n)))(i||n)}})();static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Sa=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(Sa||{});function ZR(n,e){n.events.pipe(Yt(t=>t instanceof Ji||t instanceof zr||t instanceof Ia||t instanceof eo),Ue(t=>t instanceof Ji||t instanceof eo?Sa.COMPLETE:(t instanceof zr?t.code===An.Redirect||t.code===An.SupersededByNewNavigation:!1)?Sa.REDIRECTING:Sa.FAILED),Yt(t=>t!==Sa.REDIRECTING),Ut(1)).subscribe(()=>{e()})}var KR={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},QR={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},bx=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=ae(Gl);stateManager=ae(Mx);options=ae(Ap,{optional:!0})||{};pendingTasks=ae(Wo);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=ae(WR);urlSerializer=ae(Dp);location=ae(ga);urlHandlingStrategy=ae(Np);_events=new bt;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=ae(qR);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=ae(Rp,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!ae(Tp,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new It;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(r=>{try{let i=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof zr&&r.code!==An.Redirect&&r.code!==An.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof Ji)this.navigated=!0;else if(r instanceof rs){let s=r.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(r.url,i.currentRawUrl),c=ge({browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||$R(i.source)},s);this.scheduleNavigation(a,ba,null,c,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}eN(r)&&this._events.next(r)}catch(i){this.navigationTransitions.transitionAbortSubject.next(i)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ba,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",r)},0)})}navigateToSyncWithBrowser(t,r,i){let o={replaceUrl:!0},s=i?.navigationId?i:null;if(i){let c=ge({},i);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(o.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,r,s,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Ip),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,r={}){let{relativeTo:i,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:c}=r,l=c?this.currentUrlTree.fragment:s,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=ge(ge({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=i?i.snapshot:this.routerState.snapshot.root;d=sx(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return ax(d,t,u,l??null)}navigateByUrl(t,r={skipLocationChange:!1}){let i=Ca(t)?t:this.parseUrl(t),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,ba,null,r)}navigate(t,r={skipLocationChange:!1}){return JR(t),this.navigateByUrl(this.createUrlTree(t,r),r)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,r){let i;if(r===!0?i=ge({},KR):r===!1?i=ge({},QR):i=r,Ca(t))return Gy(this.currentUrlTree,t,i);let o=this.parseUrl(t);return Gy(this.currentUrlTree,o,i)}removeEmptyProps(t){return Object.entries(t).reduce((r,[i,o])=>(o!=null&&(r[i]=o),r),{})}scheduleNavigation(t,r,i,o,s){if(this.disposed)return Promise.resolve(!1);let a,c,l;s?(a=s.resolve,c=s.reject,l=s.promise):l=new Promise((d,f)=>{a=d,c=f});let u=this.pendingTasks.add();return ZR(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:o,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(d=>Promise.reject(d))}static \u0275fac=function(r){return new(r||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function JR(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Ae(4008,!1)}function eN(n){return!(n instanceof Ra)&&!(n instanceof rs)}var tN=new Le("");function wx(n,...e){return Go([{provide:Rp,multi:!0,useValue:n},[],{provide:is,useFactory:nN,deps:[bx]},{provide:Rh,multi:!0,useFactory:rN},e.map(t=>t.\u0275providers)])}function nN(n){return n.routerState.root}function rN(){let n=ae(Mr);return e=>{let t=n.get(er);if(e!==t.components[0])return;let r=n.get(bx),i=n.get(iN);n.get(oN)===1&&r.initialNavigation(),n.get(sN,null,$e.Optional)?.setUpPreloading(),n.get(tN,null,$e.Optional)?.init(),r.resetRootComponentType(t.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var iN=new Le("",{factory:()=>new bt}),oN=new Le("",{providedIn:"root",factory:()=>1});var sN=new Le("");var Dx=[];var Va="Service workers are disabled or not supported by this browser";function aN(n){return Pi(()=>ni(new Error(n)))}var as=class{serviceWorker;worker;registration;events;constructor(e){if(this.serviceWorker=e,!e)this.worker=this.events=this.registration=aN(Va);else{let r=Do(e,"controllerchange").pipe(Ue(()=>e.controller)),i=Pi(()=>Ie(e.controller)),o=_r(i,r);this.worker=o.pipe(Yt(u=>!!u)),this.registration=this.worker.pipe(Zt(()=>e.getRegistration()));let l=Do(e,"message").pipe(Ue(u=>u.data)).pipe(Yt(u=>u&&u.type)).pipe(Yd());l.connect(),this.events=l}}postMessage(e,t){return this.worker.pipe(Ut(1),kt(r=>{r.postMessage(ge({action:e},t))})).toPromise().then(()=>{})}postMessageWithOperation(e,t,r){let i=this.waitForOperationCompleted(r),o=this.postMessage(e,t);return Promise.all([o,i]).then(([,s])=>s)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(e){let t;return typeof e=="string"?t=r=>r.type===e:t=r=>e.includes(r.type),this.events.pipe(Yt(t))}nextEventOfType(e){return this.eventsOfType(e).pipe(Ut(1))}waitForOperationCompleted(e){return this.eventsOfType("OPERATION_COMPLETED").pipe(Yt(t=>t.nonce===e),Ut(1),Ue(t=>{if(t.result!==void 0)return t.result;throw new Error(t.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}},cN=(()=>{class n{sw;messages;notificationClicks;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new bt;constructor(t){if(this.sw=t,!t.isEnabled){this.messages=Li,this.notificationClicks=Li,this.subscription=Li;return}this.messages=this.sw.eventsOfType("PUSH").pipe(Ue(i=>i.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(Ue(i=>i.data)),this.pushManager=this.sw.registration.pipe(Ue(i=>i.pushManager));let r=this.pushManager.pipe(Zt(i=>i.getSubscription()));this.subscription=il(r,this.subscriptionChanges)}requestSubscription(t){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(Va));let r={userVisibleOnly:!0},i=this.decodeBase64(t.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),o=new Uint8Array(new ArrayBuffer(i.length));for(let s=0;s<i.length;s++)o[s]=i.charCodeAt(s);return r.applicationServerKey=o,this.pushManager.pipe(Zt(s=>s.subscribe(r)),Ut(1)).toPromise().then(s=>(this.subscriptionChanges.next(s),s))}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(Va));let t=r=>{if(r===null)throw new Error("Not subscribed to push notifications.");return r.unsubscribe().then(i=>{if(!i)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})};return this.subscription.pipe(Ut(1),Zt(t)).toPromise()}decodeBase64(t){return atob(t)}static \u0275fac=function(r){return new(r||n)(Ye(as))};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})(),lN=(()=>{class n{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}constructor(t){if(this.sw=t,!t.isEnabled){this.versionUpdates=Li,this.unrecoverable=Li;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Va));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:t},t)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Va));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:t},t)}static \u0275fac=function(r){return new(r||n)(Ye(as))};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})();var Cx=new Le("");function uN(n,e,t,r){return()=>{if(!(Vh(r)&&"serviceWorker"in navigator&&t.enabled!==!1))return;let i=n.get(Nt),o=n.get(er);i.runOutsideAngular(()=>{let a=navigator.serviceWorker,c=()=>a.controller?.postMessage({action:"INITIALIZE"});a.addEventListener("controllerchange",c),o.onDestroy(()=>{a.removeEventListener("controllerchange",c)})});let s;if(typeof t.registrationStrategy=="function")s=t.registrationStrategy();else{let[a,...c]=(t.registrationStrategy||"registerWhenStable:30000").split(":");switch(a){case"registerImmediately":s=Ie(null);break;case"registerWithDelay":s=Tx(+c[0]||0);break;case"registerWhenStable":let l=wt(n.get(er).whenStable());s=c[0]?il(l,Tx(+c[0])):l;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${t.registrationStrategy}`)}}i.runOutsideAngular(()=>s.pipe(Ut(1)).subscribe(()=>navigator.serviceWorker.register(e,{scope:t.scope}).catch(a=>console.error("Service worker registration failed with:",a))))}}function Tx(n){return Ie(null).pipe(qd(n))}function dN(n,e){return new as(Vh(e)&&n.enabled!==!1?navigator.serviceWorker:void 0)}var Ba=class{enabled;scope;registrationStrategy};function Ax(n,e={}){return Go([cN,lN,{provide:Cx,useValue:n},{provide:Ba,useValue:e},{provide:as,useFactory:dN,deps:[Ba,Hr]},{provide:jl,useFactory:uN,deps:[Mr,Cx,Ba,Hr],multi:!0}])}var Ix={providers:[_y({eventCoalescing:!0}),wx(Dx),Ax("ngsw-worker.js",{enabled:!xy(),registrationStrategy:"registerWhenStable:30000"})]};var Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var pu=Math.PI/180,Ha=180/Math.PI;function Cr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[r&255]+Qt[r>>8&255]+Qt[r>>16&255]+Qt[r>>24&255]).toLowerCase()}function ze(n,e,t){return Math.max(e,Math.min(t,n))}function Rx(n,e){return(n%e+e)%e}function mu(n,e,t){return(1-t)*n+t*e}function Nx(n,e){return n+Math.random()*(e-n)}function cs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function an(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var za="172";var Px=0,Pp=1,Lx=2;var gu=1,Fx=2,or=3,In=0,Ct=1,Rn=2,jn=0,jr=1,Lp=2,Fp=3,Op=4,Ox=5,Wr=100,Ux=101,kx=102,Bx=103,Vx=104,Hx=200,zx=201,Gx=202,jx=203,Ga=204,ja=205,Wx=206,$x=207,qx=208,Xx=209,Yx=210,Zx=211,Kx=212,Qx=213,Jx=214,vu=0,_u=1,yu=2,pi=3,xu=4,Eu=5,Su=6,Mu=7,bu=0,eE=1,tE=2,Wn=0,nE=1,rE=2,iE=3,oE=4,sE=5,aE=6,cE=7;var Up=300,sr=301,Tr=302,Wa=303,$a=304,mi=306,qa=1e3,ar=1001,Xa=1002,Jt=1003,lE=1004;var Ya=1005;var cn=1006,wu=1007;var cr=1008;var en=1009,Du=1010,Cu=1011,$r=1012,ls=1013,Nn=1014,ln=1015,Ar=1016,us=1017,ds=1018,lr=1020,Tu=35902,Au=1021,Iu=1022,Gt=1023,Ru=1024,Nu=1025,Ir=1026,Rr=1027,Pu=1028,fs=1029,Lu=1030,hs=1031;var ps=1033,ms=33776,gs=33777,vs=33778,_s=33779,Za=35840,Ka=35841,Qa=35842,Ja=35843,ec=36196,tc=37492,nc=37496,rc=37808,ic=37809,oc=37810,sc=37811,ac=37812,cc=37813,lc=37814,uc=37815,dc=37816,fc=37817,hc=37818,pc=37819,mc=37820,gc=37821,ys=36492,vc=36494,_c=36495,Fu=36283,yc=36284,xc=36285,Ec=36286;var uE=3200,dE=3201;var fE=0,hE=1,$n="",un="srgb",ur="srgb-linear",to="linear",rt="srgb";var no=7680;var kp=519,pE=512,mE=513,gE=514,Ou=515,vE=516,_E=517,yE=518,xE=519,Bp=35044;var Vp="300 es",vn=2e3,ro=2001;var _n=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let o=i.indexOf(t);o!==-1&&i.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let r=this._listeners[e.type];if(r!==void 0){e.target=this;let i=r.slice(0);for(let o=0,s=i.length;o<s;o++)i[o].call(this,e);e.target=null}}};var Ge=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,r=this.y,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6],this.y=i[1]*t+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){let r=this.length();return this.divideScalar(r||1).multiplyScalar(ze(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let r=this.dot(e)/t;return Math.acos(ze(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let r=Math.cos(t),i=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*r-s*i+e.x,this.y=o*i+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};var we=class n{constructor(e,t,r,i,o,s,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,i,o,s,a,c,l)}set(e,t,r,i,o,s,a,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=o,u[5]=c,u[6]=r,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let r=e.elements,i=t.elements,o=this.elements,s=r[0],a=r[3],c=r[6],l=r[1],u=r[4],d=r[7],f=r[2],p=r[5],g=r[8],y=i[0],m=i[3],h=i[6],w=i[1],b=i[4],S=i[7],P=i[2],T=i[5],D=i[8];return o[0]=s*y+a*w+c*P,o[3]=s*m+a*b+c*T,o[6]=s*h+a*S+c*D,o[1]=l*y+u*w+d*P,o[4]=l*m+u*b+d*T,o[7]=l*h+u*S+d*D,o[2]=f*y+p*w+g*P,o[5]=f*m+p*b+g*T,o[8]=f*h+p*S+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*a*l-r*o*u+r*a*c+i*o*l-i*s*c}invert(){let e=this.elements,t=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*s-a*l,f=a*c-u*o,p=l*o-s*c,g=t*d+r*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(i*l-u*r)*y,e[2]=(a*r-i*s)*y,e[3]=f*y,e[4]=(u*t-i*c)*y,e[5]=(i*o-a*t)*y,e[6]=p*y,e[7]=(r*c-l*t)*y,e[8]=(s*t-r*o)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,i,o,s,a){let c=Math.cos(o),l=Math.sin(o);return this.set(r*c,r*l,-r*(c*s+l*a)+s+e,-i*l,i*c,-i*(-l*s+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Hp.makeScale(e,t)),this}rotate(e){return this.premultiply(Hp.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,r=e.elements;for(let i=0;i<9;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){let r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Hp=new we;function Uu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function SE(){let n=xs("canvas");return n.style.display="block",n}var EE={};function gi(n){n in EE||(EE[n]=!0,console.warn(n))}function ME(n,e,t){return new Promise(function(r,i){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:i();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:r()}}setTimeout(o,t)})}function bE(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wE(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var DE=new we().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),CE=new we().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fN(){let n={enabled:!0,workingColorSpace:ur,spaces:{},convert:function(i,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===rt&&(i.r=dr(i.r),i.g=dr(i.g),i.b=dr(i.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===rt&&(i.r=io(i.r),i.g=io(i.g),i.b=io(i.b))),i},fromWorkingColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},toWorkingColorSpace:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===$n?to:this.spaces[i].transfer},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,s){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[ur]:{primaries:e,whitePoint:r,transfer:to,toXYZ:DE,fromXYZ:CE,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:r,transfer:rt,toXYZ:DE,fromXYZ:CE,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),n}var We=fN();function dr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function io(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Es,ku=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Es===void 0&&(Es=xs("canvas")),Es.width=e.width,Es.height=e.height;let r=Es.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xs("canvas");t.width=e.width,t.height=e.height;let r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);let i=r.getImageData(0,0,e.width,e.height),o=i.data;for(let s=0;s<o.length;s++)o[s]=dr(o[s]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(dr(t[r]/255)*255):t[r]=dr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};var hN=0,Ss=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hN++}),this.uuid=Cr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?o.push(zp(i[s].image)):o.push(zp(i[s]))}else o=zp(i);r.url=o}return t||(e.images[this.uuid]=r),r}};function zp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ku.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pN=0,yn=(()=>{class n extends _n{constructor(t=n.DEFAULT_IMAGE,r=n.DEFAULT_MAPPING,i=ar,o=ar,s=cn,a=cr,c=Gt,l=en,u=n.DEFAULT_ANISOTROPY,d=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pN++}),this.uuid=Cr(),this.name="",this.source=new Ss(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new we,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let r=t===void 0||typeof t=="string";if(!r&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),r||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Up)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qa:t.x=t.x-Math.floor(t.x);break;case ar:t.x=t.x<0?0:1;break;case Xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qa:t.y=t.y-Math.floor(t.y);break;case ar:t.y=t.y<0?0:1;break;case Xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=Up,n.DEFAULT_ANISOTROPY=1,n})();var pt=class n{constructor(e=0,t=0,r=0,i=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,r=this.y,i=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*i+s[12]*o,this.y=s[1]*t+s[5]*r+s[9]*i+s[13]*o,this.z=s[2]*t+s[6]*r+s[10]*i+s[14]*o,this.w=s[3]*t+s[7]*r+s[11]*i+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,i,o,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],p=c[5],g=c[9],y=c[2],m=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,S=(p+1)/2,P=(h+1)/2,T=(u+f)/4,D=(d+y)/4,N=(g+m)/4;return b>S&&b>P?b<.01?(r=0,i=.707106781,o=.707106781):(r=Math.sqrt(b),i=T/r,o=D/r):S>P?S<.01?(r=.707106781,i=0,o=.707106781):(i=Math.sqrt(S),r=T/i,o=N/i):P<.01?(r=.707106781,i=.707106781,o=0):(o=Math.sqrt(P),r=D/o,i=N/o),this.set(r,i,o,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-y)/w,this.z=(f-u)/w,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){let r=this.length();return this.divideScalar(r||1).multiplyScalar(ze(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};var Bu=class extends _n{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let i={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);let o=new yn(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);o.flipY=!1,o.generateMipmaps=r.generateMipmaps,o.internalFormat=r.internalFormat,this.textures=[];let s=r.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,i=e.textures.length;r<i;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;let t=Object.assign({},e.texture.image);return this.texture.source=new Ss(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}};var xn=class extends Bu{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}};var Ms=class extends yn{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vu=class extends yn{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,o,s,a){let c=r[i+0],l=r[i+1],u=r[i+2],d=r[i+3],f=o[s+0],p=o[s+1],g=o[s+2],y=o[s+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(d!==y||c!==f||l!==p||u!==g){let m=1-a,h=c*f+l*p+u*g+d*y,w=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){let P=Math.sqrt(b),T=Math.atan2(P,h*w);m=Math.sin(m*T)/P,a=Math.sin(a*T)/P}let S=a*w;if(c=c*m+f*S,l=l*m+p*S,u=u*m+g*S,d=d*m+y*S,m===1-a){let P=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=P,l*=P,u*=P,d*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,r,i,o,s){let a=r[i],c=r[i+1],l=r[i+2],u=r[i+3],d=o[s],f=o[s+1],p=o[s+2],g=o[s+3];return e[t]=a*g+u*d+c*p-l*f,e[t+1]=c*g+u*f+l*d-a*p,e[t+2]=l*g+u*p+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let r=e._x,i=e._y,o=e._z,s=e._order,a=Math.cos,c=Math.sin,l=a(r/2),u=a(i/2),d=a(o/2),f=c(r/2),p=c(i/2),g=c(o/2);switch(s){case"XYZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"YZX":this._x=f*u*d+l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d-f*p*g;break;case"XZY":this._x=f*u*d-l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,r=t[0],i=t[4],o=t[8],s=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=r+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(o-l)*p,this._z=(s-i)*p}else if(r>a&&r>d){let p=2*Math.sqrt(1+r-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(o+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-r-d);this._w=(o-l)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+d-r-a);this._w=(s-i)/p,this._x=(o+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){let r=this.angleTo(e);if(r===0)return this;let i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let r=e._x,i=e._y,o=e._z,s=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=r*u+s*a+i*l-o*c,this._y=i*u+s*c+o*a-r*l,this._z=o*u+s*l+r*c-i*a,this._w=s*u-r*a-i*c-o*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let r=this._x,i=this._y,o=this._z,s=this._w,a=s*e._w+r*e._x+i*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=r,this._y=i,this._z=o,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*s+t*this._w,this._x=p*r+t*this._x,this._y=p*i+t*this._y,this._z=p*o+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=s*d+this._w*f,this._x=r*d+this._x*f,this._y=i*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};var F=class n{constructor(e=0,t=0,r=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(TE.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(TE.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,r=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6]*i,this.y=o[1]*t+o[4]*r+o[7]*i,this.z=o[2]*t+o[5]*r+o[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,r=this.y,i=this.z,o=e.elements,s=1/(o[3]*t+o[7]*r+o[11]*i+o[15]);return this.x=(o[0]*t+o[4]*r+o[8]*i+o[12])*s,this.y=(o[1]*t+o[5]*r+o[9]*i+o[13])*s,this.z=(o[2]*t+o[6]*r+o[10]*i+o[14])*s,this}applyQuaternion(e){let t=this.x,r=this.y,i=this.z,o=e.x,s=e.y,a=e.z,c=e.w,l=2*(s*i-a*r),u=2*(a*t-o*i),d=2*(o*r-s*t);return this.x=t+c*l+s*d-a*u,this.y=r+c*u+a*l-o*d,this.z=i+c*d+o*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,r=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*i,this.y=o[1]*t+o[5]*r+o[9]*i,this.z=o[2]*t+o[6]*r+o[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){let r=this.length();return this.divideScalar(r||1).multiplyScalar(ze(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let r=e.x,i=e.y,o=e.z,s=t.x,a=t.y,c=t.z;return this.x=i*c-o*a,this.y=o*s-r*c,this.z=r*a-i*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Gp.copy(this).projectOnVector(e),this.sub(Gp)}reflect(e){return this.sub(Gp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let r=this.dot(e)/t;return Math.acos(ze(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return t*t+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){let i=Math.sin(t)*e;return this.x=i*Math.sin(r),this.y=Math.cos(t)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gp=new F,TE=new dn;var Xr=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(fr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(fr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let r=fr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let r=e.geometry;if(r!==void 0){let o=r.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,fr):fr.fromBufferAttribute(o,s),fr.applyMatrix4(e.matrixWorld),this.expandByPoint(fr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Hu.copy(r.boundingBox)),Hu.applyMatrix4(e.matrixWorld),this.union(Hu)}let i=e.children;for(let o=0,s=i.length;o<s;o++)this.expandByObject(i[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fr),fr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sc),zu.subVectors(this.max,Sc),bs.subVectors(e.a,Sc),ws.subVectors(e.b,Sc),Ds.subVectors(e.c,Sc),vi.subVectors(ws,bs),_i.subVectors(Ds,ws),oo.subVectors(bs,Ds);let t=[0,-vi.z,vi.y,0,-_i.z,_i.y,0,-oo.z,oo.y,vi.z,0,-vi.x,_i.z,0,-_i.x,oo.z,0,-oo.x,-vi.y,vi.x,0,-_i.y,_i.x,0,-oo.y,oo.x,0];return!jp(t,bs,ws,Ds,zu)||(t=[1,0,0,0,1,0,0,0,1],!jp(t,bs,ws,Ds,zu))?!1:(Gu.crossVectors(vi,_i),t=[Gu.x,Gu.y,Gu.z],jp(t,bs,ws,Ds,zu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},qr=[new F,new F,new F,new F,new F,new F,new F,new F],fr=new F,Hu=new Xr,bs=new F,ws=new F,Ds=new F,vi=new F,_i=new F,oo=new F,Sc=new F,zu=new F,Gu=new F,so=new F;function jp(n,e,t,r,i){for(let o=0,s=n.length-3;o<=s;o+=3){so.fromArray(n,o);let a=i.x*Math.abs(so.x)+i.y*Math.abs(so.y)+i.z*Math.abs(so.z),c=e.dot(so),l=t.dot(so),u=r.dot(so);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var mN=new Xr,Mc=new F,Wp=new F,yi=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let r=this.center;t!==void 0?r.copy(t):mN.setFromPoints(e).getCenter(r);let i=0;for(let o=0,s=e.length;o<s;o++)i=Math.max(i,r.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mc.subVectors(e,this.center);let t=Mc.lengthSq();if(t>this.radius*this.radius){let r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.addScaledVector(Mc,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mc.copy(e.center).add(Wp)),this.expandByPoint(Mc.copy(e.center).sub(Wp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};var Yr=new F,$p=new F,ju=new F,xi=new F,qp=new F,Wu=new F,Xp=new F,$u=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yr.copy(this.origin).addScaledVector(this.direction,t),Yr.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){$p.copy(e).add(t).multiplyScalar(.5),ju.copy(t).sub(e).normalize(),xi.copy(this.origin).sub($p);let o=e.distanceTo(t)*.5,s=-this.direction.dot(ju),a=xi.dot(this.direction),c=-xi.dot(ju),l=xi.lengthSq(),u=Math.abs(1-s*s),d,f,p,g;if(u>0)if(d=s*c-a,f=s*a-c,g=o*u,d>=0)if(f>=-g)if(f<=g){let y=1/u;d*=y,f*=y,p=d*(d+s*f+2*a)+f*(s*d+f+2*c)+l}else f=o,d=Math.max(0,-(s*f+a)),p=-d*d+f*(f+2*c)+l;else f=-o,d=Math.max(0,-(s*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-c),o),p=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-o,-c),o),p=f*(f+2*c)+l):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-c),o),p=-d*d+f*(f+2*c)+l);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),p=-d*d+f*(f+2*c)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy($p).addScaledVector(ju,f),p}intersectSphere(e,t){Yr.subVectors(e.center,this.origin);let r=Yr.dot(this.direction),i=Yr.dot(Yr)-r*r,o=e.radius*e.radius;if(i>o)return null;let s=Math.sqrt(o-i),a=r-s,c=r+s;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){let r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,o,s,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(r=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(r=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(o=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),r>s||o>i||((o>r||isNaN(r))&&(r=o),(s<i||isNaN(i))&&(i=s),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),r>c||a>i)||((a>r||r!==r)&&(r=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,Yr)!==null}intersectTriangle(e,t,r,i,o){qp.subVectors(t,e),Wu.subVectors(r,e),Xp.crossVectors(qp,Wu);let s=this.direction.dot(Xp),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;xi.subVectors(this.origin,e);let c=a*this.direction.dot(Wu.crossVectors(xi,Wu));if(c<0)return null;let l=a*this.direction.dot(qp.cross(xi));if(l<0||c+l>s)return null;let u=-a*xi.dot(Xp);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};var mt=class n{constructor(e,t,r,i,o,s,a,c,l,u,d,f,p,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,i,o,s,a,c,l,u,d,f,p,g,y,m)}set(e,t,r,i,o,s,a,c,l,u,d,f,p,g,y,m){let h=this.elements;return h[0]=e,h[4]=t,h[8]=r,h[12]=i,h[1]=o,h[5]=s,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){let t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,r=e.elements,i=1/Cs.setFromMatrixColumn(e,0).length(),o=1/Cs.setFromMatrixColumn(e,1).length(),s=1/Cs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*i,t[1]=r[1]*i,t[2]=r[2]*i,t[3]=0,t[4]=r[4]*o,t[5]=r[5]*o,t[6]=r[6]*o,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,r=e.x,i=e.y,o=e.z,s=Math.cos(r),a=Math.sin(r),c=Math.cos(i),l=Math.sin(i),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){let f=s*u,p=s*d,g=a*u,y=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=g+p*l,t[10]=s*c}else if(e.order==="YXZ"){let f=c*u,p=c*d,g=l*u,y=l*d;t[0]=f+y*a,t[4]=g*a-p,t[8]=s*l,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=p*a-g,t[6]=y+f*a,t[10]=s*c}else if(e.order==="ZXY"){let f=c*u,p=c*d,g=l*u,y=l*d;t[0]=f-y*a,t[4]=-s*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=s*u,t[9]=y-f*a,t[2]=-s*l,t[6]=a,t[10]=s*c}else if(e.order==="ZYX"){let f=s*u,p=s*d,g=a*u,y=a*d;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+y,t[1]=c*d,t[5]=y*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=s*c}else if(e.order==="YZX"){let f=s*c,p=s*l,g=a*c,y=a*l;t[0]=c*u,t[4]=y-f*d,t[8]=g*d+p,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*d+g,t[10]=f-y*d}else if(e.order==="XZY"){let f=s*c,p=s*l,g=a*c,y=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+y,t[5]=s*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gN,e,vN)}lookAt(e,t,r){let i=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Ei.crossVectors(r,Pn),Ei.lengthSq()===0&&(Math.abs(r.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Ei.crossVectors(r,Pn)),Ei.normalize(),qu.crossVectors(Pn,Ei),i[0]=Ei.x,i[4]=qu.x,i[8]=Pn.x,i[1]=Ei.y,i[5]=qu.y,i[9]=Pn.y,i[2]=Ei.z,i[6]=qu.z,i[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let r=e.elements,i=t.elements,o=this.elements,s=r[0],a=r[4],c=r[8],l=r[12],u=r[1],d=r[5],f=r[9],p=r[13],g=r[2],y=r[6],m=r[10],h=r[14],w=r[3],b=r[7],S=r[11],P=r[15],T=i[0],D=i[4],N=i[8],E=i[12],x=i[1],A=i[5],V=i[9],B=i[13],j=i[2],Y=i[6],G=i[10],K=i[14],z=i[3],ie=i[7],de=i[11],Ee=i[15];return o[0]=s*T+a*x+c*j+l*z,o[4]=s*D+a*A+c*Y+l*ie,o[8]=s*N+a*V+c*G+l*de,o[12]=s*E+a*B+c*K+l*Ee,o[1]=u*T+d*x+f*j+p*z,o[5]=u*D+d*A+f*Y+p*ie,o[9]=u*N+d*V+f*G+p*de,o[13]=u*E+d*B+f*K+p*Ee,o[2]=g*T+y*x+m*j+h*z,o[6]=g*D+y*A+m*Y+h*ie,o[10]=g*N+y*V+m*G+h*de,o[14]=g*E+y*B+m*K+h*Ee,o[3]=w*T+b*x+S*j+P*z,o[7]=w*D+b*A+S*Y+P*ie,o[11]=w*N+b*V+S*G+P*de,o[15]=w*E+b*B+S*K+P*Ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],r=e[4],i=e[8],o=e[12],s=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],y=e[7],m=e[11],h=e[15];return g*(+o*c*d-i*l*d-o*a*f+r*l*f+i*a*p-r*c*p)+y*(+t*c*p-t*l*f+o*s*f-i*s*p+i*l*u-o*c*u)+m*(+t*l*d-t*a*p-o*s*d+r*s*p+o*a*u-r*l*u)+h*(-i*a*u-t*c*d+t*a*f+i*s*d-r*s*f+r*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=r),this}invert(){let e=this.elements,t=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],y=e[13],m=e[14],h=e[15],w=d*m*l-y*f*l+y*c*p-a*m*p-d*c*h+a*f*h,b=g*f*l-u*m*l-g*c*p+s*m*p+u*c*h-s*f*h,S=u*y*l-g*d*l+g*a*p-s*y*p-u*a*h+s*d*h,P=g*d*c-u*y*c-g*a*f+s*y*f+u*a*m-s*d*m,T=t*w+r*b+i*S+o*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/T;return e[0]=w*D,e[1]=(y*f*o-d*m*o-y*i*p+r*m*p+d*i*h-r*f*h)*D,e[2]=(a*m*o-y*c*o+y*i*l-r*m*l-a*i*h+r*c*h)*D,e[3]=(d*c*o-a*f*o-d*i*l+r*f*l+a*i*p-r*c*p)*D,e[4]=b*D,e[5]=(u*m*o-g*f*o+g*i*p-t*m*p-u*i*h+t*f*h)*D,e[6]=(g*c*o-s*m*o-g*i*l+t*m*l+s*i*h-t*c*h)*D,e[7]=(s*f*o-u*c*o+u*i*l-t*f*l-s*i*p+t*c*p)*D,e[8]=S*D,e[9]=(g*d*o-u*y*o-g*r*p+t*y*p+u*r*h-t*d*h)*D,e[10]=(s*y*o-g*a*o+g*r*l-t*y*l-s*r*h+t*a*h)*D,e[11]=(u*a*o-s*d*o-u*r*l+t*d*l+s*r*p-t*a*p)*D,e[12]=P*D,e[13]=(u*y*i-g*d*i+g*r*f-t*y*f-u*r*m+t*d*m)*D,e[14]=(g*a*i-s*y*i-g*r*c+t*y*c+s*r*m-t*a*m)*D,e[15]=(s*d*i-u*a*i+u*r*c-t*d*c-s*r*f+t*a*f)*D,this}scale(e){let t=this.elements,r=e.x,i=e.y,o=e.z;return t[0]*=r,t[4]*=i,t[8]*=o,t[1]*=r,t[5]*=i,t[9]*=o,t[2]*=r,t[6]*=i,t[10]*=o,t[3]*=r,t[7]*=i,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,i))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let r=Math.cos(t),i=Math.sin(t),o=1-r,s=e.x,a=e.y,c=e.z,l=o*s,u=o*a;return this.set(l*s+r,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+r,u*c-i*s,0,l*c-i*a,u*c+i*s,o*c*c+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,i,o,s){return this.set(1,r,o,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,r){let i=this.elements,o=t._x,s=t._y,a=t._z,c=t._w,l=o+o,u=s+s,d=a+a,f=o*l,p=o*u,g=o*d,y=s*u,m=s*d,h=a*d,w=c*l,b=c*u,S=c*d,P=r.x,T=r.y,D=r.z;return i[0]=(1-(y+h))*P,i[1]=(p+S)*P,i[2]=(g-b)*P,i[3]=0,i[4]=(p-S)*T,i[5]=(1-(f+h))*T,i[6]=(m+w)*T,i[7]=0,i[8]=(g+b)*D,i[9]=(m-w)*D,i[10]=(1-(f+y))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,r){let i=this.elements,o=Cs.set(i[0],i[1],i[2]).length(),s=Cs.set(i[4],i[5],i[6]).length(),a=Cs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),e.x=i[12],e.y=i[13],e.z=i[14],hr.copy(this);let l=1/o,u=1/s,d=1/a;return hr.elements[0]*=l,hr.elements[1]*=l,hr.elements[2]*=l,hr.elements[4]*=u,hr.elements[5]*=u,hr.elements[6]*=u,hr.elements[8]*=d,hr.elements[9]*=d,hr.elements[10]*=d,t.setFromRotationMatrix(hr),r.x=o,r.y=s,r.z=a,this}makePerspective(e,t,r,i,o,s,a=vn){let c=this.elements,l=2*o/(t-e),u=2*o/(r-i),d=(t+e)/(t-e),f=(r+i)/(r-i),p,g;if(a===vn)p=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===ro)p=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,r,i,o,s,a=vn){let c=this.elements,l=1/(t-e),u=1/(r-i),d=1/(s-o),f=(t+e)*l,p=(r+i)*u,g,y;if(a===vn)g=(s+o)*d,y=-2*d;else if(a===ro)g=o*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,r=e.elements;for(let i=0;i<16;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){let r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}},Cs=new F,hr=new mt,gN=new F(0,0,0),vN=new F(1,1,1),Ei=new F,qu=new F,Pn=new F;var AE=new mt,IE=new dn,pr=(()=>{class n{constructor(t=0,r=0,i=0,o=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=r,this._z=i,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,r,i,o=this._order){return this._x=t,this._y=r,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,r=this._order,i=!0){let o=t.elements,s=o[0],a=o[4],c=o[8],l=o[1],u=o[5],d=o[9],f=o[2],p=o[6],g=o[10];switch(r){case"XYZ":this._y=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,r,i){return AE.makeRotationFromQuaternion(t),this.setFromRotationMatrix(AE,r,i)}setFromVector3(t,r=this._order){return this.set(t.x,t.y,t.z,r)}reorder(t){return IE.setFromEuler(this),this.setFromQuaternion(IE,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],r=0){return t[r]=this._x,t[r+1]=this._y,t[r+2]=this._z,t[r+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})();var Ts=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};var _N=0,RE=new F,As=new dn,Zr=new mt,Xu=new F,bc=new F,yN=new F,xN=new dn,NE=new F(1,0,0),PE=new F(0,1,0),LE=new F(0,0,1),FE={type:"added"},EN={type:"removed"},Is={type:"childadded",child:null},Yp={type:"childremoved",child:null},fn=(()=>{class n extends _n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_N++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,r=new pr,i=new dn,o=new F(1,1,1);function s(){i.setFromEuler(r,!1)}function a(){r.setFromQuaternion(i,void 0,!1)}r._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new mt},normalMatrix:{value:new we}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,r){this.quaternion.setFromAxisAngle(t,r)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,r){return As.setFromAxisAngle(t,r),this.quaternion.multiply(As),this}rotateOnWorldAxis(t,r){return As.setFromAxisAngle(t,r),this.quaternion.premultiply(As),this}rotateX(t){return this.rotateOnAxis(NE,t)}rotateY(t){return this.rotateOnAxis(PE,t)}rotateZ(t){return this.rotateOnAxis(LE,t)}translateOnAxis(t,r){return RE.copy(t).applyQuaternion(this.quaternion),this.position.add(RE.multiplyScalar(r)),this}translateX(t){return this.translateOnAxis(NE,t)}translateY(t){return this.translateOnAxis(PE,t)}translateZ(t){return this.translateOnAxis(LE,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zr.copy(this.matrixWorld).invert())}lookAt(t,r,i){t.isVector3?Xu.copy(t):Xu.set(t,r,i);let o=this.parent;this.updateWorldMatrix(!0,!1),bc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zr.lookAt(bc,Xu,this.up):Zr.lookAt(Xu,bc,this.up),this.quaternion.setFromRotationMatrix(Zr),o&&(Zr.extractRotation(o.matrixWorld),As.setFromRotationMatrix(Zr),this.quaternion.premultiply(As.invert()))}add(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(FE),Is.child=t,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let r=this.children.indexOf(t);return r!==-1&&(t.parent=null,this.children.splice(r,1),t.dispatchEvent(EN),Yp.child=t,this.dispatchEvent(Yp),Yp.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zr.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(FE),Is.child=t,this.dispatchEvent(Is),Is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,r){if(this[t]===r)return this;for(let i=0,o=this.children.length;i<o;i++){let a=this.children[i].getObjectByProperty(t,r);if(a!==void 0)return a}}getObjectsByProperty(t,r,i=[]){this[t]===r&&i.push(this);let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].getObjectsByProperty(t,r,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bc,t,yN),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bc,xN,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let r=this.matrixWorld.elements;return t.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(t){t(this);let r=this.children;for(let i=0,o=r.length;i<o;i++)r[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let r=this.children;for(let i=0,o=r.length;i<o;i++)r[i].traverseVisible(t)}traverseAncestors(t){let r=this.parent;r!==null&&(t(r),r.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let r=this.children;for(let i=0,o=r.length;i<o;i++)r[i].updateMatrixWorld(t)}updateWorldMatrix(t,r){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),r===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0)}}toJSON(t){let r=t===void 0||typeof t=="string",i={};r&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function s(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(s(t.materials,this.material[l]));o.material=c}else o.material=s(t.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];o.animations.push(s(t.animations,l))}}if(r){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),p=a(t.skeletons),g=a(t.animations),y=a(t.nodes);c.length>0&&(i.geometries=c),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=o,i;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,r=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),r===!0)for(let i=0;i<t.children.length;i++){let o=t.children[i];this.add(o.clone())}return this}}return n.DEFAULT_UP=new F(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})();var mr=new F,Kr=new F,Zp=new F,Qr=new F,Rs=new F,Ns=new F,OE=new F,Kp=new F,Qp=new F,Jp=new F,em=new pt,tm=new pt,nm=new pt,Si=class n{constructor(e=new F,t=new F,r=new F){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,i){i.subVectors(r,t),mr.subVectors(e,t),i.cross(mr);let o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(e,t,r,i,o){mr.subVectors(i,t),Kr.subVectors(r,t),Zp.subVectors(e,t);let s=mr.dot(mr),a=mr.dot(Kr),c=mr.dot(Zp),l=Kr.dot(Kr),u=Kr.dot(Zp),d=s*l-a*a;if(d===0)return o.set(0,0,0),null;let f=1/d,p=(l*c-a*u)*f,g=(s*u-a*c)*f;return o.set(1-p-g,g,p)}static containsPoint(e,t,r,i){return this.getBarycoord(e,t,r,i,Qr)===null?!1:Qr.x>=0&&Qr.y>=0&&Qr.x+Qr.y<=1}static getInterpolation(e,t,r,i,o,s,a,c){return this.getBarycoord(e,t,r,i,Qr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Qr.x),c.addScaledVector(s,Qr.y),c.addScaledVector(a,Qr.z),c)}static getInterpolatedAttribute(e,t,r,i,o,s){return em.setScalar(0),tm.setScalar(0),nm.setScalar(0),em.fromBufferAttribute(e,t),tm.fromBufferAttribute(e,r),nm.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(em,o.x),s.addScaledVector(tm,o.y),s.addScaledVector(nm,o.z),s}static isFrontFacing(e,t,r,i){return mr.subVectors(r,t),Kr.subVectors(e,t),mr.cross(Kr).dot(i)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,i){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,r,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mr.subVectors(this.c,this.b),Kr.subVectors(this.a,this.b),mr.cross(Kr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,i,o){return n.getInterpolation(e,this.a,this.b,this.c,t,r,i,o)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let r=this.a,i=this.b,o=this.c,s,a;Rs.subVectors(i,r),Ns.subVectors(o,r),Kp.subVectors(e,r);let c=Rs.dot(Kp),l=Ns.dot(Kp);if(c<=0&&l<=0)return t.copy(r);Qp.subVectors(e,i);let u=Rs.dot(Qp),d=Ns.dot(Qp);if(u>=0&&d<=u)return t.copy(i);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(r).addScaledVector(Rs,s);Jp.subVectors(e,o);let p=Rs.dot(Jp),g=Ns.dot(Jp);if(g>=0&&p<=g)return t.copy(o);let y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(r).addScaledVector(Ns,a);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return OE.subVectors(o,i),a=(d-u)/(d-u+(p-g)),t.copy(i).addScaledVector(OE,a);let h=1/(m+y+f);return s=y*h,a=f*h,t.copy(r).addScaledVector(Rs,s).addScaledVector(Ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};var UE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Yu={h:0,s:0,l:0};function rm(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ke=class{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,r,i=We.workingColorSpace){return this.r=e,this.g=t,this.b=r,We.toWorkingColorSpace(this,i),this}setHSL(e,t,r,i=We.workingColorSpace){if(e=Rx(e,1),t=ze(t,0,1),r=ze(r,0,1),t===0)this.r=this.g=this.b=r;else{let o=r<=.5?r*(1+t):r+t-r*t,s=2*r-o;this.r=rm(s,o,e+1/3),this.g=rm(s,o,e),this.b=rm(s,o,e-1/3)}return We.toWorkingColorSpace(this,i),this}setStyle(e,t=un){function r(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=i[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){let r=UE[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return We.fromWorkingColorSpace(tn.copy(this),e),Math.round(ze(tn.r*255,0,255))*65536+Math.round(ze(tn.g*255,0,255))*256+Math.round(ze(tn.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(tn.copy(this),t);let r=tn.r,i=tn.g,o=tn.b,s=Math.max(r,i,o),a=Math.min(r,i,o),c,l,u=(a+s)/2;if(a===s)c=0,l=0;else{let d=s-a;switch(l=u<=.5?d/(s+a):d/(2-s-a),s){case r:c=(i-o)/d+(i<o?6:0);break;case i:c=(o-r)/d+2;break;case o:c=(r-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=un){We.fromWorkingColorSpace(tn.copy(this),e);let t=tn.r,r=tn.g,i=tn.b;return e!==un?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,t,r){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(Yu);let r=mu(Mi.h,Yu.h,t),i=mu(Mi.s,Yu.s,t),o=mu(Mi.l,Yu.l,t);return this.setHSL(r,i,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,r=this.g,i=this.b,o=e.elements;return this.r=o[0]*t+o[3]*r+o[6]*i,this.g=o[1]*t+o[4]*r+o[7]*i,this.b=o[2]*t+o[5]*r+o[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new ke;ke.NAMES=UE;var SN=0,Nr=class extends _n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:SN++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=jr,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=ja,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(r.blending=this.blending),this.side!==In&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ga&&(r.blendSrc=this.blendSrc),this.blendDst!==ja&&(r.blendDst=this.blendDst),this.blendEquation!==Wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==pi&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==no&&(r.stencilFail=this.stencilFail),this.stencilZFail!==no&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==no&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(o){let s=[];for(let a in o){let c=o[a];delete c.metadata,s.push(c)}return s}if(t){let o=i(e.textures),s=i(e.images);o.length>0&&(r.textures=o),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,r=null;if(t!==null){let i=t.length;r=new Array(i);for(let o=0;o!==i;++o)r[o]=t[o].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};var Jr=class extends Nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.combine=bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Lt=new F,Zu=new Ge,hn=class{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Bp,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Zu.fromBufferAttribute(this,t),Zu.applyMatrix3(e),this.setXY(t,Zu.x,Zu.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=cs(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=an(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),r=an(r,this.array),i=an(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,o){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),r=an(r,this.array),i=an(i,this.array),o=an(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bp&&(e.usage=this.usage),e}};var Ps=class extends hn{constructor(e,t,r){super(new Uint16Array(e),t,r)}};var Ls=class extends hn{constructor(e,t,r){super(new Uint32Array(e),t,r)}};var nn=class extends hn{constructor(e,t,r){super(new Float32Array(e),t,r)}};var MN=0,qn=new mt,im=new fn,Fs=new F,Ln=new Xr,wc=new Xr,jt=new F,En=class n extends _n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MN++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uu(e)?Ls:Ps)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let o=new we().getNormalMatrix(e);r.applyNormalMatrix(o),r.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,r){return qn.makeTranslation(e,t,r),this.applyMatrix4(qn),this}scale(e,t,r){return qn.makeScale(e,t,r),this.applyMatrix4(qn),this}lookAt(e){return im.lookAt(e),im.updateMatrix(),this.applyMatrix4(im.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let r=[];for(let i=0,o=e.length;i<o;i++){let s=e[i];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new nn(r,3))}else{let r=Math.min(e.length,t.count);for(let i=0;i<r;i++){let o=e[i];t.setXYZ(i,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,i=t.length;r<i;r++){let o=t[r];Ln.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let r=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){let a=t[o];wc.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(Ln.min,wc.min),Ln.expandByPoint(jt),jt.addVectors(Ln.max,wc.max),Ln.expandByPoint(jt)):(Ln.expandByPoint(wc.min),Ln.expandByPoint(wc.max))}Ln.getCenter(r);let i=0;for(let o=0,s=e.count;o<s;o++)jt.fromBufferAttribute(e,o),i=Math.max(i,r.distanceToSquared(jt));if(t)for(let o=0,s=t.length;o<s;o++){let a=t[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)jt.fromBufferAttribute(a,l),c&&(Fs.fromBufferAttribute(e,l),jt.add(Fs)),i=Math.max(i,r.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=t.position,i=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*r.count),4));let s=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<r.count;N++)a[N]=new F,c[N]=new F;let l=new F,u=new F,d=new F,f=new Ge,p=new Ge,g=new Ge,y=new F,m=new F;function h(N,E,x){l.fromBufferAttribute(r,N),u.fromBufferAttribute(r,E),d.fromBufferAttribute(r,x),f.fromBufferAttribute(o,N),p.fromBufferAttribute(o,E),g.fromBufferAttribute(o,x),u.sub(l),d.sub(l),p.sub(f),g.sub(f);let A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(A),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(A),a[N].add(y),a[E].add(y),a[x].add(y),c[N].add(m),c[E].add(m),c[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,E=w.length;N<E;++N){let x=w[N],A=x.start,V=x.count;for(let B=A,j=A+V;B<j;B+=3)h(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let b=new F,S=new F,P=new F,T=new F;function D(N){P.fromBufferAttribute(i,N),T.copy(P);let E=a[N];b.copy(E),b.sub(P.multiplyScalar(P.dot(E))).normalize(),S.crossVectors(T,E);let A=S.dot(c[N])<0?-1:1;s.setXYZW(N,b.x,b.y,b.z,A)}for(let N=0,E=w.length;N<E;++N){let x=w[N],A=x.start,V=x.count;for(let B=A,j=A+V;B<j;B+=3)D(e.getX(B+0)),D(e.getX(B+1)),D(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let f=0,p=r.count;f<p;f++)r.setXYZ(f,0,0,0);let i=new F,o=new F,s=new F,a=new F,c=new F,l=new F,u=new F,d=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),o.fromBufferAttribute(t,y),s.fromBufferAttribute(t,m),u.subVectors(s,o),d.subVectors(i,o),u.cross(d),a.fromBufferAttribute(r,g),c.fromBufferAttribute(r,y),l.fromBufferAttribute(r,m),a.add(u),c.add(u),l.add(u),r.setXYZ(g,a.x,a.y,a.z),r.setXYZ(y,c.x,c.y,c.z),r.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,o),d.subVectors(i,o),u.cross(d),r.setXYZ(f+0,u.x,u.y,u.z),r.setXYZ(f+1,u.x,u.y,u.z),r.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),p=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?p=c[y]*a.data.stride+a.offset:p=c[y]*u;for(let h=0;h<u;h++)f[g++]=l[p++]}return new hn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,r=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,r);t.setAttribute(a,l)}let o=this.morphAttributes;for(let a in o){let c=[],l=o[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],p=e(f,r);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,c=s.length;a<c;a++){let l=s[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let r=this.attributes;for(let c in r){let l=r[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},o=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(i[c]=u,o=!0)}o&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let r=e.index;r!==null&&this.setIndex(r.clone(t));let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let o=e.morphAttributes;for(let l in o){let u=[],d=o[l];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,u=s.length;l<u;l++){let d=s[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var kE=new mt,ao=new $u,Ku=new yi,BE=new F,Qu=new F,Ju=new F,ed=new F,om=new F,td=new F,VE=new F,nd=new F,Bt=class extends fn{constructor(e=new En,t=new Jr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){let i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=i.length;o<s;o++){let a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let r=this.geometry,i=r.attributes.position,o=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(o&&a){td.set(0,0,0);for(let c=0,l=o.length;c<l;c++){let u=a[c],d=o[c];u!==0&&(om.fromBufferAttribute(d,e),s?td.addScaledVector(om,u):td.addScaledVector(om.sub(t),u))}t.add(td)}return t}raycast(e,t){let r=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ku.copy(r.boundingSphere),Ku.applyMatrix4(o),ao.copy(e.ray).recast(e.near),!(Ku.containsPoint(ao.origin)===!1&&(ao.intersectSphere(Ku,BE)===null||ao.origin.distanceToSquared(BE)>(e.far-e.near)**2))&&(kE.copy(o).invert(),ao.copy(e.ray).applyMatrix4(kE),!(r.boundingBox!==null&&ao.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ao)))}_computeIntersections(e,t,r){let i,o=this.geometry,s=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,y=f.length;g<y;g++){let m=f[g],h=s[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=w,P=b;S<P;S+=3){let T=a.getX(S),D=a.getX(S+1),N=a.getX(S+2);i=rd(this,h,e,r,l,u,d,T,D,N),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,h=y;m<h;m+=3){let w=a.getX(m),b=a.getX(m+1),S=a.getX(m+2);i=rd(this,s,e,r,l,u,d,w,b,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,y=f.length;g<y;g++){let m=f[g],h=s[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=w,P=b;S<P;S+=3){let T=S,D=S+1,N=S+2;i=rd(this,h,e,r,l,u,d,T,D,N),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=g,h=y;m<h;m+=3){let w=m,b=m+1,S=m+2;i=rd(this,s,e,r,l,u,d,w,b,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function bN(n,e,t,r,i,o,s,a){let c;if(e.side===Ct?c=r.intersectTriangle(s,o,i,!0,a):c=r.intersectTriangle(i,o,s,e.side===In,a),c===null)return null;nd.copy(a),nd.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(nd);return l<t.near||l>t.far?null:{distance:l,point:nd.clone(),object:n}}function rd(n,e,t,r,i,o,s,a,c,l){n.getVertexPosition(a,Qu),n.getVertexPosition(c,Ju),n.getVertexPosition(l,ed);let u=bN(n,e,t,r,Qu,Ju,ed,VE);if(u){let d=new F;Si.getBarycoord(VE,Qu,Ju,ed,d),i&&(u.uv=Si.getInterpolatedAttribute(i,a,c,l,d,new Ge)),o&&(u.uv1=Si.getInterpolatedAttribute(o,a,c,l,d,new Ge)),s&&(u.normal=Si.getInterpolatedAttribute(s,a,c,l,d,new F),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new F,materialIndex:0};Si.getNormal(Qu,Ju,ed,f.normal),u.face=f,u.barycoord=d}return u}var bi=class n extends En{constructor(e=1,t=1,r=1,i=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:i,heightSegments:o,depthSegments:s};let a=this;i=Math.floor(i),o=Math.floor(o),s=Math.floor(s);let c=[],l=[],u=[],d=[],f=0,p=0;g("z","y","x",-1,-1,r,t,e,s,o,0),g("z","y","x",1,-1,r,t,-e,s,o,1),g("x","z","y",1,1,e,r,t,i,s,2),g("x","z","y",1,-1,e,r,-t,i,s,3),g("x","y","z",1,-1,e,t,r,i,o,4),g("x","y","z",-1,-1,e,t,-r,i,o,5),this.setIndex(c),this.setAttribute("position",new nn(l,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(d,2));function g(y,m,h,w,b,S,P,T,D,N,E){let x=S/D,A=P/N,V=S/2,B=P/2,j=T/2,Y=D+1,G=N+1,K=0,z=0,ie=new F;for(let de=0;de<G;de++){let Ee=de*A-B;for(let Ze=0;Ze<Y;Ze++){let gt=Ze*x-V;ie[y]=gt*w,ie[m]=Ee*b,ie[h]=j,l.push(ie.x,ie.y,ie.z),ie[y]=0,ie[m]=0,ie[h]=T>0?1:-1,u.push(ie.x,ie.y,ie.z),d.push(Ze/D),d.push(1-de/N),K+=1}}for(let de=0;de<N;de++)for(let Ee=0;Ee<D;Ee++){let Ze=f+Ee+Y*de,gt=f+Ee+Y*(de+1),$=f+(Ee+1)+Y*(de+1),ee=f+(Ee+1)+Y*de;c.push(Ze,gt,ee),c.push(gt,$,ee),z+=6}a.addGroup(p,z,E),p+=z,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ei(n){let e={};for(let t in n){e[t]={};for(let r in n[t]){let i=n[t][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=i.clone():Array.isArray(i)?e[t][r]=i.slice():e[t][r]=i}}return e}function rn(n){let e={};for(let t=0;t<n.length;t++){let r=ei(n[t]);for(let i in r)e[i]=r[i]}return e}function HE(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function id(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}var zE={clone:ei,merge:rn};var GE=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var jE=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;var pn=class extends Nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GE,this.fragmentShader=jE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ei(e.uniforms),this.uniformsGroups=HE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let r={};for(let i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}};var Os=class extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};var wi=new F,WE=new Ge,$E=new Ge,Ft=class extends Os{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ha*2*Math.atan(Math.tan(pu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,WE,$E),t.subVectors($E,WE)}setViewOffset(e,t,r,i,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pu*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,o=-.5*i,s=this.view;if(this.view!==null&&this.view.enabled){let c=s.fullWidth,l=s.fullHeight;o+=s.offsetX*i/c,t-=s.offsetY*r/l,i*=s.width/c,r*=s.height/l}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Us=-90,ks=1,od=class extends fn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ft(Us,ks,e,t);i.layers=this.layers,this.add(i);let o=new Ft(Us,ks,e,t);o.layers=this.layers,this.add(o);let s=new Ft(Us,ks,e,t);s.layers=this.layers,this.add(s);let a=new Ft(Us,ks,e,t);a.layers=this.layers,this.add(a);let c=new Ft(Us,ks,e,t);c.layers=this.layers,this.add(c);let l=new Ft(Us,ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[r,i,o,s,a,c]=t;for(let l of t)this.remove(l);if(e===vn)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ro)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(t,o),e.setRenderTarget(r,1,i),e.render(t,s),e.setRenderTarget(r,2,i),e.render(t,a),e.setRenderTarget(r,3,i),e.render(t,c),e.setRenderTarget(r,4,i),e.render(t,l),r.texture.generateMipmaps=y,e.setRenderTarget(r,5,i),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}};var Bs=class extends yn{constructor(e,t,r,i,o,s,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:sr,super(e,t,r,i,o,s,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var sd=class extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new Bs(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new bi(5,5,5),o=new pn({name:"CubemapFromEquirect",uniforms:ei(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ct,blending:jn});o.uniforms.tEquirect.value=t;let s=new Bt(i,o),a=t.minFilter;return t.minFilter===cr&&(t.minFilter=cn),new od(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,i){let o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,i);e.setRenderTarget(o)}};var Dc=class extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pr,this.environmentIntensity=1,this.environmentRotation=new pr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var sm=new F,wN=new F,DN=new we,gr=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){let i=sm.subVectors(r,t).cross(wN.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let r=e.delta(sm),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let r=t||DN.getNormalMatrix(e),i=this.coplanarPoint(sm).applyMatrix4(e),o=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};var co=new yi,ad=new F,Vs=class{constructor(e=new gr,t=new gr,r=new gr,i=new gr,o=new gr,s=new gr){this.planes=[e,t,r,i,o,s]}set(e,t,r,i,o,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(r),a[3].copy(i),a[4].copy(o),a[5].copy(s),this}copy(e){let t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=vn){let r=this.planes,i=e.elements,o=i[0],s=i[1],a=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],g=i[9],y=i[10],m=i[11],h=i[12],w=i[13],b=i[14],S=i[15];if(r[0].setComponents(c-o,f-l,m-p,S-h).normalize(),r[1].setComponents(c+o,f+l,m+p,S+h).normalize(),r[2].setComponents(c+s,f+u,m+g,S+w).normalize(),r[3].setComponents(c-s,f-u,m-g,S-w).normalize(),r[4].setComponents(c-a,f-d,m-y,S-b).normalize(),t===vn)r[5].setComponents(c+a,f+d,m+y,S+b).normalize();else if(t===ro)r[5].setComponents(a,d,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),co.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),co.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(co)}intersectsSprite(e){return co.center.set(0,0,0),co.radius=.7071067811865476,co.applyMatrix4(e.matrixWorld),this.intersectsSphere(co)}intersectsSphere(e){let t=this.planes,r=e.center,i=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let r=0;r<6;r++){let i=t[r];if(ad.x=i.normal.x>0?e.max.x:e.min.x,ad.y=i.normal.y>0?e.max.y:e.min.y,ad.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ad)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var lo=class extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}};var Hs=class extends yn{constructor(e,t,r,i,o,s,a,c,l,u=Ir){if(u!==Ir&&u!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===Ir&&(r=Nn),r===void 0&&u===Rr&&(r=lr),super(null,i,o,s,a,c,u,r,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Jt,this.minFilter=c!==void 0?c:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var cd=class n extends En{constructor(e=1,t=1,r=1,i=32,o=1,s=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:i,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),o=Math.floor(o);let u=[],d=[],f=[],p=[],g=0,y=[],m=r/2,h=0;w(),s===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new nn(d,3)),this.setAttribute("normal",new nn(f,3)),this.setAttribute("uv",new nn(p,2));function w(){let S=new F,P=new F,T=0,D=(t-e)/r;for(let N=0;N<=o;N++){let E=[],x=N/o,A=x*(t-e)+e;for(let V=0;V<=i;V++){let B=V/i,j=B*c+a,Y=Math.sin(j),G=Math.cos(j);P.x=A*Y,P.y=-x*r+m,P.z=A*G,d.push(P.x,P.y,P.z),S.set(Y,D,G).normalize(),f.push(S.x,S.y,S.z),p.push(B,1-x),E.push(g++)}y.push(E)}for(let N=0;N<i;N++)for(let E=0;E<o;E++){let x=y[E][N],A=y[E+1][N],V=y[E+1][N+1],B=y[E][N+1];(e>0||E!==0)&&(u.push(x,A,B),T+=3),(t>0||E!==o-1)&&(u.push(A,V,B),T+=3)}l.addGroup(h,T,0),h+=T}function b(S){let P=g,T=new Ge,D=new F,N=0,E=S===!0?e:t,x=S===!0?1:-1;for(let V=1;V<=i;V++)d.push(0,m*x,0),f.push(0,x,0),p.push(.5,.5),g++;let A=g;for(let V=0;V<=i;V++){let j=V/i*c+a,Y=Math.cos(j),G=Math.sin(j);D.x=E*G,D.y=m*x,D.z=E*Y,d.push(D.x,D.y,D.z),f.push(0,x,0),T.x=Y*.5+.5,T.y=G*.5*x+.5,p.push(T.x,T.y),g++}for(let V=0;V<i;V++){let B=P+V,j=A+V;S===!0?u.push(j,j+1,B):u.push(j+1,j,B),N+=3}l.addGroup(h,N,S===!0?1:2),h+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ld=class n extends cd{constructor(e=1,t=1,r=32,i=1,o=!1,s=0,a=Math.PI*2){super(0,e,t,r,i,o,s,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:i,openEnded:o,thetaStart:s,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var zs=class n extends En{constructor(e=1,t=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:i};let o=e/2,s=t/2,a=Math.floor(r),c=Math.floor(i),l=a+1,u=c+1,d=e/a,f=t/c,p=[],g=[],y=[],m=[];for(let h=0;h<u;h++){let w=h*f-s;for(let b=0;b<l;b++){let S=b*d-o;g.push(S,-w,0),y.push(0,0,1),m.push(b/a),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let w=0;w<a;w++){let b=w+l*h,S=w+l*(h+1),P=w+1+l*(h+1),T=w+1+l*h;p.push(b,S,T),p.push(S,P,T)}this.setIndex(p),this.setAttribute("position",new nn(g,3)),this.setAttribute("normal",new nn(y,3)),this.setAttribute("uv",new nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var ud=class extends Nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};var dd=class extends Nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var fd=class extends Os{constructor(e=-1,t=1,r=1,i=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2,o=r-e,s=r+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,s=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var hd=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}};function am(n,e,t,r){let i=CN(r);switch(t){case Au:return n*e;case Ru:return n*e;case Nu:return n*e*2;case Pu:return n*e/i.components*i.byteLength;case fs:return n*e/i.components*i.byteLength;case Lu:return n*e*2/i.components*i.byteLength;case hs:return n*e*2/i.components*i.byteLength;case Iu:return n*e*3/i.components*i.byteLength;case Gt:return n*e*4/i.components*i.byteLength;case ps:return n*e*4/i.components*i.byteLength;case ms:case gs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vs:case _s:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ka:case Ja:return Math.max(n,16)*Math.max(e,8)/4;case Za:case Qa:return Math.max(n,8)*Math.max(e,8)/2;case ec:case tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case oc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case cc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case lc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case uc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case dc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case hc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case pc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case gc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ys:case vc:case _c:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Fu:case yc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case xc:case Ec:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function CN(n){switch(n){case en:case Du:return{byteLength:1,components:1};case $r:case Cu:case Ar:return{byteLength:2,components:1};case us:case ds:return{byteLength:2,components:4};case Nn:case ls:case ln:return{byteLength:4,components:1};case Tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=za);var pd=class n{static speed=.01;rotation=new dn().random();mesh=new Bt(new ld(.25,1),new Jr({color:"gray"}));constructor(e){this.mesh.position.setScalar(Nx(-5,5)),this.mesh.setRotationFromQuaternion(this.rotation),e.add(this.mesh)}get getRotation(){return this.rotation}move(e){this.rotation=n.avgQuaternion(this.calculateAlignment(e),this.calculateCohesion(e)),this.mesh.quaternion.slerp(this.rotation,n.speed),this.mesh.translateOnAxis(this.mesh.up,n.speed)}remove(e){e.remove(this.mesh)}calculateSeparation(e){return new dn(0,0,0,0)}calculateAlignment(e){let t=[];for(let r of e)t.push(r.mesh.quaternion);return n.avgQuaternion(...t)}calculateCohesion(e){let t=new F(0,0,0);for(let i of e)t.add(i.mesh.position);t.divideScalar(e.length);let r=new fn;return r.position.set(...this.mesh.position.toArray()),r.lookAt(t),r.quaternion}static avgQuaternion(...e){let t=new dn(0,0,0,0);for(let r of e)t.x+=r.x,t.y+=r.y,t.z+=r.z,t.w+=r.w;return t.x/=e.length,t.y/=e.length,t.z/=e.length,t.w/=e.length,t}};function md(){let n=null,e=!1,t=null,r=null;function i(o,s){t(o,s),r=n.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(i),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function qE(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function r(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){let g=d[f],y=d[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){let y=d[p];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function s(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(l.buffer,a,c),l.version=a.version}}return{get:i,remove:o,update:s}}var XE=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`;var YE=`
#ifdef USE_ALPHAHASH

	/**
	 * See: https://casual-effects.com/research/Wyman2017Hashed/index.html
	 */

	const float ALPHA_HASH_SCALE = 0.05; // Derived from trials only, and may be changed.

	float hash2D( vec2 value ) {

		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );

	}

	float hash3D( vec3 value ) {

		return hash2D( vec2( hash2D( value.xy ), value.z ) );

	}

	float getAlphaHashThreshold( vec3 position ) {

		// Find the discretized derivatives of our coordinates
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );

		// Find two nearest log-discretized noise scales
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);

		// Compute alpha thresholds at our two noise scales
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);

		// Factor to interpolate lerp with
		float lerpFactor = fract( log2( pixScale ) );

		// Interpolate alpha threshold from noise at two scales
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;

		// Pass into CDF to compute uniformly distrib threshold
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);

		// Find our final, uniformly distributed alpha threshold (\u03B1\u03C4)
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;

		// Avoids \u03B1\u03C4 == 0. Could also do \u03B1\u03C4 =1-\u03B1\u03C4
		return clamp( threshold , 1.0e-6, 1.0 );

	}

#endif
`;var ZE=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`;var KE=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var QE=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`;var JE=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`;var e0=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`;var t0=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;var n0=`
#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif

	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {

		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );

	}

	float getIndirectIndex( const in int i ) {

		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );

	}

#endif

#ifdef USE_BATCHING_COLOR

	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {

		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;

	}

#endif
`;var r0=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`;var i0=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`;var o0=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;var s0=`

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( specularColor, 1.0, dotVH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

`;var a0=`

#ifdef USE_IRIDESCENCE

	// XYZ to linear-sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	// Assume air interface for top
	// Note: We don't handle the case fresnel0 == 1
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float IorToFresnel0( float transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));

	}

	// Fresnel equations for dielectric/dielectric interfaces.
	// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	// Evaluation XYZ sensitivity curves in Fourier space
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;

		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;

	}

	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;

		// Phase shift
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

#endif

`;var c0=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );

		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// normalize is done to ensure that the bump map looks the same regardless of the texture's scale
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm; // normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`;var l0=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#ifdef ALPHA_TO_COVERAGE

		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;

		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			if ( clipOpacity == 0.0 ) discard;

		}
		#pragma unroll_loop_end

		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

			float unionClipOpacity = 1.0;

			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			}
			#pragma unroll_loop_end

			clipOpacity *= 1.0 - unionClipOpacity;

		#endif

		diffuseColor.a *= clipOpacity;

		if ( diffuseColor.a == 0.0 ) discard;

	#else

		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;

		}
		#pragma unroll_loop_end

		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

			bool clipped = true;

			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;

			}
			#pragma unroll_loop_end

			if ( clipped ) discard;

		#endif

	#endif

#endif
`;var u0=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;var d0=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;var f0=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;var h0=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`;var p0=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`;var m0=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec3 vColor;

#endif
`;var g0=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif

#ifdef USE_BATCHING_COLOR

	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );

	vColor.xyz *= batchingColor.xyz;

#endif
`;var v0=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {

	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );

	return fract( sin( sn ) * c );

}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

#ifdef USE_ALPHAHASH

	varying vec3 vPosition;

#endif

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated
`;var _0=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

	float getFace( vec3 direction ) {

		vec3 absDirection = abs( direction );

		float face = - 1.0;

		if ( absDirection.x > absDirection.z ) {

			if ( absDirection.x > absDirection.y )

				face = direction.x > 0.0 ? 0.0 : 3.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		} else {

			if ( absDirection.z > absDirection.y )

				face = direction.z > 0.0 ? 2.0 : 5.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		}

		return face;

	}

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0; // #25071

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		uv.x += filterInt * 3.0 * cubeUV_minTileSize;

		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );

		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;

		#ifdef texture2DGradEXT

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= cubeUV_r1 ) {

			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;

		} else if ( roughness >= cubeUV_r4 ) {

			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;

		} else if ( roughness >= cubeUV_r5 ) {

			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;

		} else if ( roughness >= cubeUV_r6 ) {

			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );

		float mipF = fract( mip );

		float mipInt = floor( mip );

		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );

		if ( mipF == 0.0 ) {

			return vec4( color0, 1.0 );

		} else {

			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );

			return vec4( mix( color0, color1, mipF ), 1.0 );

		}

	}

#endif
`;var y0=`

vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT

	vec3 transformedTangent = objectTangent;

#endif

#ifdef USE_BATCHING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = bm * transformedTangent;

	#endif

#endif

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = im * transformedTangent;

	#endif

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`;var x0=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;var E0=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`;var S0=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;var M0=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;var b0=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;var w0=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`;var D0=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`;var C0=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`;var T0=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`;var A0=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`;var I0=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`;var R0=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`;var N0=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`;var P0=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;var L0=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`;var F0=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );

	#endif

}
`;var O0=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;var U0=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`;var k0=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`;var B0=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;

#if defined( USE_LIGHT_PROBES )

	uniform vec3 lightProbe[ 9 ];

#endif

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	// based upon Frostbite 3 Moving to Physically-based Rendering
	// page 32, equation 26: E[window1]
	// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

	if ( cutoffDistance > 0.0 ) {

		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

	}

	return distanceFalloff;

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif
`;var V0=`
#ifdef USE_ENVMAP

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	#ifdef USE_ANISOTROPY

		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {

			#ifdef ENVMAP_TYPE_CUBE_UV

			  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

				return getIBLRadiance( viewDir, bentNormal, roughness );

			#else

				return vec3( 0.0 );

			#endif

		}

	#endif

#endif
`;var H0=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;var z0=`
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
`;var G0=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;var j0=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`;var W0=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef IOR

	material.ior = ior;

	#ifdef USE_SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULAR_COLORMAP

			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;

		#endif

		#ifdef USE_SPECULAR_INTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;

		#endif

		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );

	#else

		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;

	#endif

	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;

#endif

#ifdef USE_CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_DISPERSION

	material.dispersion = dispersion;

#endif

#ifdef USE_IRIDESCENCE

	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;

	#ifdef USE_IRIDESCENCEMAP

		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;

	#endif

	#ifdef USE_IRIDESCENCE_THICKNESSMAP

		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;

	#else

		material.iridescenceThickness = iridescenceThicknessMaximum;

	#endif

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEEN_COLORMAP

		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

	#ifdef USE_SHEEN_ROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;

	#endif

#endif

#ifdef USE_ANISOTROPY

	#ifdef USE_ANISOTROPYMAP

		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;

	#else

		vec2 anisotropyV = anisotropyVector;

	#endif

	material.anisotropy = length( anisotropyV );

	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}

	// Roughness along the anisotropy bitangent is the material roughness, while the tangent roughness increases with anisotropy.
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );

	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;

#endif
`;var $0=`

struct PhysicalMaterial {

	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;

	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif

	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif

	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif

	#ifdef IOR
		float ior;
	#endif

	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif

	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif

};

// temporary
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );

vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );

    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney\u2019s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// https://google.github.io/filament/Filament.md.html#materialsystem/anisotropicmodel/anisotropicspecularbrdf
#ifdef USE_ANISOTROPY

	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {

		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );

		return saturate(v);

	}

	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {

		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;

		return RECIPROCAL_PI * a2 * pow2 ( w2 );

	}

#endif

#ifdef USE_CLEARCOAT

	// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {

		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;

		float alpha = pow2( roughness ); // UE4's roughness

		vec3 halfDir = normalize( lightDir + viewDir );

		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );

		vec3 F = F_Schlick( f0, f90, dotVH );

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

		return F * ( V * D );

	}

#endif

vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {

	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	#ifdef USE_IRIDESCENCE

		F = mix( F, material.iridescenceFresnel, material.iridescence );

	#endif

	#ifdef USE_ANISOTROPY

		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );

		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );

		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );

	#else

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

	#endif

	return F * ( V * D );

}

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see reference)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

}

vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );

	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );

	return sheenColor * ( D * V );

}

#endif

// This is a curve-fit approximation to the "Charlie sheen" BRDF integrated over the hemisphere from
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;

	return fab;

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Ag\xFCera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	#ifdef USE_IRIDESCENCE

		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );

	#else

		vec3 Fr = specularColor;

	#endif

	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );

	#endif

	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );

	#else

		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

	#endif

	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );

	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`;var q0=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

vec3 geometryClearcoatNormal = vec3( 0.0 );

#ifdef USE_CLEARCOAT

	geometryClearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometryViewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometryPosition, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometryPosition, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	#if defined( USE_LIGHT_PROBES )

		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );

	#endif

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`;var X0=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometryNormal );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	#ifdef USE_ANISOTROPY

		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );

	#else

		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );

	#endif

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`;var Y0=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`;var Z0=`
#if defined( USE_LOGDEPTHBUF )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;var K0=`
#if defined( USE_LOGDEPTHBUF )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var Q0=`
#ifdef USE_LOGDEPTHBUF

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var J0=`
#ifdef USE_LOGDEPTHBUF

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`;var eS=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`;var tS=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;var nS=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	#if defined( USE_POINTS_UV )

		vec2 uv = vUv;

	#else

		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

	#endif

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`;var rS=`
#if defined( USE_POINTS_UV )

	varying vec2 vUv;

#else

	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

		uniform mat3 uvTransform;

	#endif

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var iS=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;var oS=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;var sS=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`;var aS=`
#if defined( USE_MORPHCOLORS )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`;var cS=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var lS=`
#ifdef USE_MORPHTARGETS

	#ifndef USE_INSTANCING_MORPH

		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	#endif

	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;

	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {

		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;

		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );

	}

#endif
`;var uS=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var dS=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal *= faceDirection;

	#endif

#endif

#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )

	#ifdef USE_TANGENT

		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;

	#endif

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	#ifdef USE_TANGENT

		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 nonPerturbedNormal = normal;

`;var fS=`

#ifdef USE_NORMALMAP_OBJECTSPACE

	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( USE_NORMALMAP_TANGENTSPACE )

	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	normal = normalize( tbn * mapN );

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`;var hS=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var pS=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var mS=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`;var gS=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef USE_NORMALMAP_OBJECTSPACE

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

		return mat3( T * scale, B * scale, N );

	}

#endif
`;var vS=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`;var _S=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`;var yS=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif
`;var xS=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`;var ES=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`;var SS=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)
const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;

const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );

const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );

vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}

vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	// the 0.9999 tweak is unimportant, very tiny empirical improvement
	// return vec3( vuf * Inv255, gf * PackUpscale, bf * 0.9999 );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}

vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}

float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}

float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}

vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( viewZ + near ) / ( near - far );
}

float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps orthographic depth in [ 0, 1 ] to viewZ
	return depth * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}

float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps perspective depth in [ 0, 1 ] to viewZ
	return ( near * far ) / ( ( far - near ) * depth - far );
}
`;var MS=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;var bS=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;var wS=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;var DS=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`;var CS=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;var TS=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;var AS=`
#if NUM_SPOT_LIGHT_COORDS > 0

	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#if NUM_SPOT_LIGHT_MAPS > 0

	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;

			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;

			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		float shadow = 1.0;

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );

		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {

			// dp = normalized distance from light to fragment position
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
			dp += shadowBias;

			// bd3D = base direction 3D
			vec3 bd3D = normalize( lightToPosition );

			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );

			#else // no percentage-closer filtering

				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

			#endif

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

#endif
`;var IS=`

#if NUM_SPOT_LIGHT_COORDS > 0

	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`;var RS=`

#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;

#endif

#if defined( USE_SHADOWMAP )

	#if NUM_DIR_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif

// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)

#if NUM_SPOT_LIGHT_COORDS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {

		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

#endif


`;var NS=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`;var PS=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;var LS=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	uniform highp sampler2D boneTexture;

	mat4 getBoneMatrix( const in float i ) {

		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );

		return mat4( v1, v2, v3, v4 );

	}

#endif
`;var FS=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;var OS=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`;var US=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;var kS=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;var BS=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;var VS=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return saturate( toneMappingExposure * color );

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 CineonToneMapping( vec3 color ) {

	// filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

// Matrices for rec 2020 <> rec 709 color space conversion
// matrix provided in row-major order so it has been transposed
// https://www.itu.int/pub/R-REP-BT.2407-2017
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);

const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);

// https://iolite-engine.com/blog_posts/minimal_agx_implementation
// Mean error^2: 3.6705141e-06
vec3 agxDefaultContrastApprox( vec3 x ) {

	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;

	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;

}

// AgX Tone Mapping implementation based on Filament, which in turn is based
// on Blender's implementation using rec 2020 primaries
// https://github.com/google/filament/pull/7236
// Inputs and outputs are encoded as Linear-sRGB.

vec3 AgXToneMapping( vec3 color ) {

	// AgX constants
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);

	// explicit AgXOutsetMatrix generated from Filaments AgXOutsetMatrixInv
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);

	// LOG2_MIN      = -10.0
	// LOG2_MAX      =  +6.5
	// MIDDLE_GRAY   =  0.18
	const float AgxMinEv = - 12.47393;  // log2( pow( 2, LOG2_MIN ) * MIDDLE_GRAY )
	const float AgxMaxEv = 4.026069;    // log2( pow( 2, LOG2_MAX ) * MIDDLE_GRAY )

	color *= toneMappingExposure;

	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;

	color = AgXInsetMatrix * color;

	// Log2 encoding
	color = max( color, 1e-10 ); // avoid 0 or negative numbers for log2
	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );

	color = clamp( color, 0.0, 1.0 );

	// Apply sigmoid
	color = agxDefaultContrastApprox( color );

	// Apply AgX look
	// v = agxLook(v, look);

	color = AgXOutsetMatrix * color;

	// Linearize
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );

	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;

	// Gamut mapping. Simple clamp for now.
	color = clamp( color, 0.0, 1.0 );

	return color;

}

// https://modelviewer.dev/examples/tone-mapping

vec3 NeutralToneMapping( vec3 color ) {

	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;

	color *= toneMappingExposure;

	float x = min( color.r, min( color.g, color.b ) );

	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;

	color -= offset;

	float peak = max( color.r, max( color.g, color.b ) );

	if ( peak < StartCompression ) return color;

	float d = 1. - StartCompression;

	float newPeak = 1. - d * d / ( peak + d - StartCompression );

	color *= newPeak / peak;

	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );

	return mix( color, vec3( newPeak ), g );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`;var HS=`
#ifdef USE_TRANSMISSION

	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );

	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );

	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );

#endif
`;var zS=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		uniform sampler2D transmissionMap;

	#endif

	#ifdef USE_THICKNESSMAP

		uniform sampler2D thicknessMap;

	#endif

	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;

	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;

	varying vec3 vWorldPosition;

	// Mipped Bicubic Texture Filtering by N8
	// https://www.shadertoy.com/view/Dl2SDW

	float w0( float a ) {

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );

	}

	float w1( float a ) {

		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );

	}

	float w2( float a ){

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );

	}

	float w3( float a ) {

		return ( 1.0 / 6.0 ) * ( a * a * a );

	}

	// g0 and g1 are the two amplitude functions
	float g0( float a ) {

		return w0( a ) + w1( a );

	}

	float g1( float a ) {

		return w2( a ) + w3( a );

	}

	// h0 and h1 are the two offset functions
	float h0( float a ) {

		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );

	}

	float h1( float a ) {

		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );

	}

	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {

		uv = uv * texelSize.zw + 0.5;

		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );

		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );

		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;

		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );

	}

	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {

		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );

	}

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independent scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );

	}

	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +\u221E, i.e. the transmitted color is not attenuated at all.
			return vec3( 1.0 );

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec4 transmittedLight;
		vec3 transmittance;

		#ifdef USE_DISPERSION

			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );

			for ( int i = 0; i < 3; i ++ ) {

				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;

				// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;

				// Sample framebuffer to get pixel the refracted ray hits.
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;

				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];

			}

			transmittedLight.a /= 3.0;

		#else

			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;

			// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;

			// Sample framebuffer to get pixel the refracted ray hits.
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );

		#endif

		vec3 attenuatedColor = transmittance * transmittedLight.rgb;

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		// As less light is transmitted, the opacity should be increased. This simple approximation does a decent job
		// of modulating a CSS background, and has no effect when the buffer is opaque, due to a solid object or clear color.
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;

		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );

	}
#endif
`;var GS=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	varying vec2 vNormalMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_SPECULARMAP

	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`;var jS=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;

#endif
#ifdef USE_DISPLACEMENTMAP

	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SPECULARMAP

	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`;var WS=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	vUv = vec3( uv, 1 ).xy;

#endif
#ifdef USE_MAP

	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ALPHAMAP

	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_LIGHTMAP

	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_AOMAP

	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_BUMPMAP

	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_NORMALMAP

	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_DISPLACEMENTMAP

	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_EMISSIVEMAP

	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_METALNESSMAP

	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ROUGHNESSMAP

	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ANISOTROPYMAP

	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOATMAP

	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCEMAP

	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_COLORMAP

	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULARMAP

	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_COLORMAP

	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_TRANSMISSIONMAP

	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_THICKNESSMAP

	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;

#endif
`;var $S=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_BATCHING

		worldPosition = batchingMatrix * worldPosition;

	#endif

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`;var qS=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,XS=`
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_APLHA8 with video textures

		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`;var YS=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,ZS=`

#ifdef ENVMAP_TYPE_CUBE

	uniform samplerCube envMap;

#elif defined( ENVMAP_TYPE_CUBE_UV )

	uniform sampler2D envMap;

#endif

uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	#ifdef ENVMAP_TYPE_CUBE

		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );

	#else

		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`;var KS=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,QS=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`;var JS=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`,eM=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#elif DEPTH_PACKING == 3202

		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );

	#elif DEPTH_PACKING == 3203

		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );

	#endif

}
`;var tM=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,nM=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`;var rM=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,iM=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`;var oM=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,sM=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`;var aM=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,cM=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var lM=`
#define LAMBERT

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,uM=`
#define LAMBERT

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var dM=`
#define MATCAP

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,fM=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var hM=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,pM=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`;var mM=`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,gM=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var vM=`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

#ifdef USE_TRANSMISSION

	vWorldPosition = worldPosition.xyz;

#endif
}
`,_M=`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif

	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_DISPERSION
	uniform float dispersion;
#endif

#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;

	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;

	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;

	#endif

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var yM=`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,xM=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var EM=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_POINTS_UV

	varying vec2 vUv;
	uniform mat3 uvTransform;

#endif

void main() {

	#ifdef USE_POINTS_UV

		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	#endif

	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`,SM=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`;var MM=`
#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,bM=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	#include <logdepthbuf_fragment>

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`;var wM=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix[ 3 ];

	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,DM=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`;var Be={alphahash_fragment:XE,alphahash_pars_fragment:YE,alphamap_fragment:ZE,alphamap_pars_fragment:KE,alphatest_fragment:QE,alphatest_pars_fragment:JE,aomap_fragment:e0,aomap_pars_fragment:t0,batching_pars_vertex:n0,batching_vertex:r0,begin_vertex:i0,beginnormal_vertex:o0,bsdfs:s0,iridescence_fragment:a0,bumpmap_pars_fragment:c0,clipping_planes_fragment:l0,clipping_planes_pars_fragment:u0,clipping_planes_pars_vertex:d0,clipping_planes_vertex:f0,color_fragment:h0,color_pars_fragment:p0,color_pars_vertex:m0,color_vertex:g0,common:v0,cube_uv_reflection_fragment:_0,defaultnormal_vertex:y0,displacementmap_pars_vertex:x0,displacementmap_vertex:E0,emissivemap_fragment:S0,emissivemap_pars_fragment:M0,colorspace_fragment:b0,colorspace_pars_fragment:w0,envmap_fragment:D0,envmap_common_pars_fragment:C0,envmap_pars_fragment:T0,envmap_pars_vertex:A0,envmap_physical_pars_fragment:V0,envmap_vertex:I0,fog_vertex:R0,fog_pars_vertex:N0,fog_fragment:P0,fog_pars_fragment:L0,gradientmap_pars_fragment:F0,lightmap_pars_fragment:O0,lights_lambert_fragment:U0,lights_lambert_pars_fragment:k0,lights_pars_begin:B0,lights_toon_fragment:H0,lights_toon_pars_fragment:z0,lights_phong_fragment:G0,lights_phong_pars_fragment:j0,lights_physical_fragment:W0,lights_physical_pars_fragment:$0,lights_fragment_begin:q0,lights_fragment_maps:X0,lights_fragment_end:Y0,logdepthbuf_fragment:Z0,logdepthbuf_pars_fragment:K0,logdepthbuf_pars_vertex:Q0,logdepthbuf_vertex:J0,map_fragment:eS,map_pars_fragment:tS,map_particle_fragment:nS,map_particle_pars_fragment:rS,metalnessmap_fragment:iS,metalnessmap_pars_fragment:oS,morphinstance_vertex:sS,morphcolor_vertex:aS,morphnormal_vertex:cS,morphtarget_pars_vertex:lS,morphtarget_vertex:uS,normal_fragment_begin:dS,normal_fragment_maps:fS,normal_pars_fragment:hS,normal_pars_vertex:pS,normal_vertex:mS,normalmap_pars_fragment:gS,clearcoat_normal_fragment_begin:vS,clearcoat_normal_fragment_maps:_S,clearcoat_pars_fragment:yS,iridescence_pars_fragment:xS,opaque_fragment:ES,packing:SS,premultiplied_alpha_fragment:MS,project_vertex:bS,dithering_fragment:wS,dithering_pars_fragment:DS,roughnessmap_fragment:CS,roughnessmap_pars_fragment:TS,shadowmap_pars_fragment:AS,shadowmap_pars_vertex:IS,shadowmap_vertex:RS,shadowmask_pars_fragment:NS,skinbase_vertex:PS,skinning_pars_vertex:LS,skinning_vertex:FS,skinnormal_vertex:OS,specularmap_fragment:US,specularmap_pars_fragment:kS,tonemapping_fragment:BS,tonemapping_pars_fragment:VS,transmission_fragment:HS,transmission_pars_fragment:zS,uv_pars_fragment:GS,uv_pars_vertex:jS,uv_vertex:WS,worldpos_vertex:$S,background_vert:qS,background_frag:XS,backgroundCube_vert:YS,backgroundCube_frag:ZS,cube_vert:KS,cube_frag:QS,depth_vert:JS,depth_frag:eM,distanceRGBA_vert:tM,distanceRGBA_frag:nM,equirect_vert:rM,equirect_frag:iM,linedashed_vert:oM,linedashed_frag:sM,meshbasic_vert:aM,meshbasic_frag:cM,meshlambert_vert:lM,meshlambert_frag:uM,meshmatcap_vert:dM,meshmatcap_frag:fM,meshnormal_vert:hM,meshnormal_frag:pM,meshphong_vert:mM,meshphong_frag:gM,meshphysical_vert:vM,meshphysical_frag:_M,meshtoon_vert:yM,meshtoon_frag:xM,points_vert:EM,points_frag:SM,shadow_vert:MM,shadow_frag:bM,sprite_vert:wM,sprite_frag:DM};var te={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new we}},envmap:{envMap:{value:null},envMapRotation:{value:new we},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new we}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new we}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new we},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new we},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new we},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new we}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new we}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new we}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0},uvTransform:{value:new we}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}}};var Xn={basic:{uniforms:rn([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:rn([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new ke(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:rn([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:rn([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:rn([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new ke(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:rn([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:rn([te.points,te.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:rn([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:rn([te.common,te.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:rn([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:rn([te.sprite,te.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new we},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new we}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:rn([te.common,te.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:rn([te.lights,te.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Xn.physical={uniforms:rn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new we},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new we},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new we},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new we},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new we},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new we},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new we},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new we},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new we},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new we},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new we},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new we}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var gd={r:0,b:0,g:0},uo=new pr,WN=new mt;function CM(n,e,t,r,i,o,s){let a=new ke(0),c=o===!0?0:1,l,u,d=null,f=0,p=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function y(b){let S=!1,P=g(b);P===null?h(a,c):P&&P.isColor&&(h(P,1),S=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?r.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(n.autoClear||S)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,S){let P=g(S);P&&(P.isCubeTexture||P.mapping===mi)?(u===void 0&&(u=new Bt(new bi(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:ei(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,D,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),uo.copy(S.backgroundRotation),uo.x*=-1,uo.y*=-1,uo.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(uo.y*=-1,uo.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(WN.makeRotationFromEuler(uo)),u.material.toneMapped=We.getTransfer(P.colorSpace)!==rt,(d!==P||f!==P.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=P,f=P.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new Bt(new zs(2,2),new pn({name:"BackgroundMaterial",uniforms:ei(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=We.getTransfer(P.colorSpace)!==rt,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||f!==P.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=P,f=P.version,p=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function h(b,S){b.getRGB(gd,id(n)),r.buffers.color.setClear(gd.r,gd.g,gd.b,S,s)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),c=S,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,h(a,c)},render:y,addToRenderList:m,dispose:w}}function TM(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},i=f(null),o=i,s=!1;function a(x,A,V,B,j){let Y=!1,G=d(B,V,A);o!==G&&(o=G,l(o.object)),Y=p(x,B,V,j),Y&&g(x,B,V,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,S(x,A,V,B),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,A,V){let B=V.wireframe===!0,j=r[x.id];j===void 0&&(j={},r[x.id]=j);let Y=j[A.id];Y===void 0&&(Y={},j[A.id]=Y);let G=Y[B];return G===void 0&&(G=f(c()),Y[B]=G),G}function f(x){let A=[],V=[],B=[];for(let j=0;j<t;j++)A[j]=0,V[j]=0,B[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:V,attributeDivisors:B,object:x,attributes:{},index:null}}function p(x,A,V,B){let j=o.attributes,Y=A.attributes,G=0,K=V.getAttributes();for(let z in K)if(K[z].location>=0){let de=j[z],Ee=Y[z];if(Ee===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(Ee=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(Ee=x.instanceColor)),de===void 0||de.attribute!==Ee||Ee&&de.data!==Ee.data)return!0;G++}return o.attributesNum!==G||o.index!==B}function g(x,A,V,B){let j={},Y=A.attributes,G=0,K=V.getAttributes();for(let z in K)if(K[z].location>=0){let de=Y[z];de===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(de=x.instanceColor));let Ee={};Ee.attribute=de,de&&de.data&&(Ee.data=de.data),j[z]=Ee,G++}o.attributes=j,o.attributesNum=G,o.index=B}function y(){let x=o.newAttributes;for(let A=0,V=x.length;A<V;A++)x[A]=0}function m(x){h(x,0)}function h(x,A){let V=o.newAttributes,B=o.enabledAttributes,j=o.attributeDivisors;V[x]=1,B[x]===0&&(n.enableVertexAttribArray(x),B[x]=1),j[x]!==A&&(n.vertexAttribDivisor(x,A),j[x]=A)}function w(){let x=o.newAttributes,A=o.enabledAttributes;for(let V=0,B=A.length;V<B;V++)A[V]!==x[V]&&(n.disableVertexAttribArray(V),A[V]=0)}function b(x,A,V,B,j,Y,G){G===!0?n.vertexAttribIPointer(x,A,V,j,Y):n.vertexAttribPointer(x,A,V,B,j,Y)}function S(x,A,V,B){y();let j=B.attributes,Y=V.getAttributes(),G=A.defaultAttributeValues;for(let K in Y){let z=Y[K];if(z.location>=0){let ie=j[K];if(ie===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(ie=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(ie=x.instanceColor)),ie!==void 0){let de=ie.normalized,Ee=ie.itemSize,Ze=e.get(ie);if(Ze===void 0)continue;let gt=Ze.buffer,$=Ze.type,ee=Ze.bytesPerElement,ve=$===n.INT||$===n.UNSIGNED_INT||ie.gpuType===ls;if(ie.isInterleavedBufferAttribute){let oe=ie.data,Ce=oe.stride,Fe=ie.offset;if(oe.isInstancedInterleavedBuffer){for(let Ke=0;Ke<z.locationSize;Ke++)h(z.location+Ke,oe.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ke=0;Ke<z.locationSize;Ke++)m(z.location+Ke);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let Ke=0;Ke<z.locationSize;Ke++)b(z.location+Ke,Ee/z.locationSize,$,de,Ce*ee,(Fe+Ee/z.locationSize*Ke)*ee,ve)}else{if(ie.isInstancedBufferAttribute){for(let oe=0;oe<z.locationSize;oe++)h(z.location+oe,ie.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let oe=0;oe<z.locationSize;oe++)m(z.location+oe);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let oe=0;oe<z.locationSize;oe++)b(z.location+oe,Ee/z.locationSize,$,de,Ee*ee,Ee/z.locationSize*oe*ee,ve)}}else if(G!==void 0){let de=G[K];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(z.location,de);break;case 3:n.vertexAttrib3fv(z.location,de);break;case 4:n.vertexAttrib4fv(z.location,de);break;default:n.vertexAttrib1fv(z.location,de)}}}}w()}function P(){N();for(let x in r){let A=r[x];for(let V in A){let B=A[V];for(let j in B)u(B[j].object),delete B[j];delete A[V]}delete r[x]}}function T(x){if(r[x.id]===void 0)return;let A=r[x.id];for(let V in A){let B=A[V];for(let j in B)u(B[j].object),delete B[j];delete A[V]}delete r[x.id]}function D(x){for(let A in r){let V=r[A];if(V[x.id]===void 0)continue;let B=V[x.id];for(let j in B)u(B[j].object),delete B[j];delete V[x.id]}}function N(){E(),s=!0,o!==i&&(o=i,l(o.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:N,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:m,disableUnusedAttributes:w}}function AM(n,e,t){let r;function i(l){r=l}function o(l,u){n.drawArrays(r,l,u),t.update(u,r,1)}function s(l,u,d){d!==0&&(n.drawArraysInstanced(r,l,u,d),t.update(u,r,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,r,1)}function c(l,u,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)s(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(r,l,0,u,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y]*f[y];t.update(g,r,1)}}this.setMode=i,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function IM(n,e,t,r){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(D){return!(D!==Gt&&r.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let N=D===Ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==en&&r.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==ln&&!N)}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:P,maxSamples:T}}function RM(n){let e=this,t=null,r=0,i=!1,o=!1,s=new gr,a=new we,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||r!==0||i;return i=f,r=d.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!i||g===null||g.length===0||o&&!m)o?u(null):l();else{let w=o?0:r,b=w*4,S=h.clippingState||null;c.value=S,S=u(g,f,b,p);for(let P=0;P!==b;++P)S[P]=t[P];h.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(d,f,p,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let h=p+y*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<h)&&(m=new Float32Array(h));for(let b=0,S=p;b!==y;++b,S+=4)s.copy(d[b]).applyMatrix4(w,a),s.normal.toArray(m,S),m[S+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function NM(n){let e=new WeakMap;function t(s,a){return a===Wa?s.mapping=sr:a===$a&&(s.mapping=Tr),s}function r(s){if(s&&s.isTexture){let a=s.mapping;if(a===Wa||a===$a)if(e.has(s)){let c=e.get(s).texture;return t(c,s.mapping)}else{let c=s.image;if(c&&c.height>0){let l=new sd(c.height);return l.fromEquirectangularTexture(n,s),e.set(s,l),s.addEventListener("dispose",i),t(l.texture,s.mapping)}else return null}}return s}function i(s){let a=s.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap}return{get:r,dispose:o}}var js=4,PM=[.125,.215,.35,.446,.526,.582],ho=20,cm=new fd,LM=new ke,lm=null,um=0,dm=0,fm=!1,fo=(1+Math.sqrt(5))/2,Gs=1/fo,FM=[new F(-fo,Gs,0),new F(fo,Gs,0),new F(-Gs,0,fo),new F(Gs,0,fo),new F(0,fo,-Gs),new F(0,fo,Gs),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Cc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100){lm=this._renderer.getRenderTarget(),um=this._renderer.getActiveCubeFace(),dm=this._renderer.getActiveMipmapLevel(),fm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,r,i,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=UM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lm,um,dm),this._renderer.xr.enabled=fm,e.scissorTest=!1,vd(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lm=this._renderer.getRenderTarget(),um=this._renderer.getActiveCubeFace(),dm=this._renderer.getActiveMipmapLevel(),fm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Ar,format:Gt,colorSpace:ur,depthBuffer:!1},i=OM(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=OM(e,t,r);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$N(o)),this._blurMaterial=qN(o,e,t)}return i}_compileMaterial(e){let t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,cm)}_sceneToCubeUV(e,t,r,i){let a=new Ft(90,1,t,r),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(LM),u.toneMapping=Wn,u.autoClear=!1;let p=new Jr({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),g=new Bt(new bi,p),y=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(LM),y=!0);for(let h=0;h<6;h++){let w=h%3;w===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):w===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));let b=this._cubeSize;vd(i,w*b,h>2?b:0,b,b),u.setRenderTarget(i),y&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){let r=this._renderer,i=e.mapping===sr||e.mapping===Tr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=kM()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=UM());let o=i?this._cubemapMaterial:this._equirectMaterial,s=new Bt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;let c=this._cubeSize;vd(t,0,0,3*c,2*c),r.setRenderTarget(t),r.render(s,cm)}_applyPMREM(e){let t=this._renderer,r=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let o=1;o<i;o++){let s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=FM[(i-o-1)%FM.length];this._blur(e,o-1,o,s,a)}t.autoClear=r}_blur(e,t,r,i,o){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,i,"latitudinal",o),this._halfBlur(s,e,r,r,i,"longitudinal",o)}_halfBlur(e,t,r,i,o,s,a){let c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Bt(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[r]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*ho-1),y=o/g,m=isFinite(o)?1+Math.floor(u*y):ho;m>ho&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ho}`);let h=[],w=0;for(let D=0;D<ho;++D){let N=D/y,E=Math.exp(-N*N/2);h.push(E),D===0?w+=E:D<m&&(w+=2*E)}for(let D=0;D<h.length;D++)h[D]=h[D]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-r;let S=this._sizeLods[i],P=3*S*(i>b-js?i-b+js:0),T=4*(this._cubeSize-S);vd(t,P,T,3*S,2*S),c.setRenderTarget(t),c.render(d,cm)}};function $N(n){let e=[],t=[],r=[],i=n,o=n-js+1+PM.length;for(let s=0;s<o;s++){let a=Math.pow(2,i);t.push(a);let c=1/a;s>n-js?c=PM[s-n+js-1]:s===0&&(c=0),r.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,y=3,m=2,h=1,w=new Float32Array(y*g*p),b=new Float32Array(m*g*p),S=new Float32Array(h*g*p);for(let T=0;T<p;T++){let D=T%3*2/3-1,N=T>2?0:-1,E=[D,N,0,D+2/3,N,0,D+2/3,N+1,0,D,N,0,D+2/3,N+1,0,D,N+1,0];w.set(E,y*g*T),b.set(f,m*g*T);let x=[T,T,T,T,T,T];S.set(x,h*g*T)}let P=new En;P.setAttribute("position",new hn(w,y)),P.setAttribute("uv",new hn(b,m)),P.setAttribute("faceIndex",new hn(S,h)),e.push(P),i>js&&i--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function OM(n,e,t){let r=new xn(n,e,t);return r.texture.mapping=mi,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vd(n,e,t,r,i){n.viewport.set(e,t,r,i),n.scissor.set(e,t,r,i)}function qN(n,e,t){let r=new Float32Array(ho),i=new F(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:ho,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:hm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function UM(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function kM(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function hm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function BM(n){let e=new WeakMap,t=null;function r(a){if(a&&a.isTexture){let c=a.mapping,l=c===Wa||c===$a,u=c===sr||c===Tr;if(l||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Cc(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new Cc(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function i(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){let c=a.target;c.removeEventListener("dispose",o);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function VM(n){let e={};function t(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(r)}return e[r]=i,i}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){let i=t(r);return i===null&&gi("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function HM(n,e,t,r){let i={},o=new WeakMap;function s(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete i[f.id];let p=o.get(f);p&&(e.remove(p),o.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let p in f)e.update(f[p],n.ARRAY_BUFFER)}function l(d){let f=[],p=d.index,g=d.attributes.position,y=0;if(p!==null){let w=p.array;y=p.version;for(let b=0,S=w.length;b<S;b+=3){let P=w[b+0],T=w[b+1],D=w[b+2];f.push(P,T,T,D,D,P)}}else if(g!==void 0){let w=g.array;y=g.version;for(let b=0,S=w.length/3-1;b<S;b+=3){let P=b+0,T=b+1,D=b+2;f.push(P,T,T,D,D,P)}}else return;let m=new(Uu(f)?Ls:Ps)(f,1);m.version=y;let h=o.get(d);h&&e.remove(h),o.set(d,m)}function u(d){let f=o.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function zM(n,e,t){let r;function i(f){r=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function c(f,p){n.drawElements(r,p,o,f*s),t.update(p,r,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(r,p,o,f*s,g),t.update(p,r,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,p,0,o,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,r,1)}function d(f,p,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)l(f[h]/s,p[h],y[h]);else{m.multiDrawElementsInstancedWEBGL(r,p,0,o,f,0,y,0,g);let h=0;for(let w=0;w<g;w++)h+=p[w]*y[w];t.update(h,r,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function GM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:r}}function jM(n,e,t){let r=new WeakMap,i=new pt;function o(s,a,c){let l=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=r.get(a);if(f===void 0||f.count!==d){let x=function(){N.dispose(),r.delete(a),a.removeEventListener("dispose",x)};var p=x;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],S=0;g===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let P=a.attributes.position.count*S,T=1;P>e.maxTextureSize&&(T=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);let D=new Float32Array(P*T*4*d),N=new Ms(D,P,T,d);N.type=ln,N.needsUpdate=!0;let E=S*4;for(let A=0;A<d;A++){let V=h[A],B=w[A],j=b[A],Y=P*T*4*A;for(let G=0;G<V.count;G++){let K=G*E;g===!0&&(i.fromBufferAttribute(V,G),D[Y+K+0]=i.x,D[Y+K+1]=i.y,D[Y+K+2]=i.z,D[Y+K+3]=0),y===!0&&(i.fromBufferAttribute(B,G),D[Y+K+4]=i.x,D[Y+K+5]=i.y,D[Y+K+6]=i.z,D[Y+K+7]=0),m===!0&&(i.fromBufferAttribute(j,G),D[Y+K+8]=i.x,D[Y+K+9]=i.y,D[Y+K+10]=i.z,D[Y+K+11]=j.itemSize===4?i.w:1)}}f={count:d,texture:N,size:new Ge(P,T)},r.set(a,f),a.addEventListener("dispose",x)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let y=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:o}}function WM(n,e,t,r){let i=new WeakMap;function o(c){let l=r.render.frame,u=c.geometry,d=e.get(c,u);if(i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return d}function s(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:s}}var JM=new yn,$M=new Hs(1,1),eb=new Ms,tb=new Vu,nb=new Bs,qM=[],XM=[],YM=new Float32Array(16),ZM=new Float32Array(9),KM=new Float32Array(4);function Ws(n,e,t){let r=n[0];if(r<=0||r>0)return n;let i=e*t,o=qM[i];if(o===void 0&&(o=new Float32Array(i),qM[i]=o),e!==0){r.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function Vt(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function _d(n,e){let t=XM[e];t===void 0&&(t=new Int32Array(e),XM[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function XN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function YN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function ZN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function KN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function QN(n,e){let t=this.cache,r=e.elements;if(r===void 0){if(Vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,r))return;KM.set(r),n.uniformMatrix2fv(this.addr,!1,KM),Ht(t,r)}}function JN(n,e){let t=this.cache,r=e.elements;if(r===void 0){if(Vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,r))return;ZM.set(r),n.uniformMatrix3fv(this.addr,!1,ZM),Ht(t,r)}}function e1(n,e){let t=this.cache,r=e.elements;if(r===void 0){if(Vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,r))return;YM.set(r),n.uniformMatrix4fv(this.addr,!1,YM),Ht(t,r)}}function t1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function n1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function r1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function i1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function o1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function s1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function a1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function c1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function l1(n,e,t){let r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i);let o;this.type===n.SAMPLER_2D_SHADOW?($M.compareFunction=Ou,o=$M):o=JM,t.setTexture2D(e||o,i)}function u1(n,e,t){let r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture3D(e||tb,i)}function d1(n,e,t){let r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTextureCube(e||nb,i)}function f1(n,e,t){let r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture2DArray(e||eb,i)}function h1(n){switch(n){case 5126:return XN;case 35664:return YN;case 35665:return ZN;case 35666:return KN;case 35674:return QN;case 35675:return JN;case 35676:return e1;case 5124:case 35670:return t1;case 35667:case 35671:return n1;case 35668:case 35672:return r1;case 35669:case 35673:return i1;case 5125:return o1;case 36294:return s1;case 36295:return a1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return u1;case 35680:case 36300:case 36308:case 36293:return d1;case 36289:case 36303:case 36311:case 36292:return f1}}function p1(n,e){n.uniform1fv(this.addr,e)}function m1(n,e){let t=Ws(e,this.size,2);n.uniform2fv(this.addr,t)}function g1(n,e){let t=Ws(e,this.size,3);n.uniform3fv(this.addr,t)}function v1(n,e){let t=Ws(e,this.size,4);n.uniform4fv(this.addr,t)}function _1(n,e){let t=Ws(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function y1(n,e){let t=Ws(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function x1(n,e){let t=Ws(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function E1(n,e){n.uniform1iv(this.addr,e)}function S1(n,e){n.uniform2iv(this.addr,e)}function M1(n,e){n.uniform3iv(this.addr,e)}function b1(n,e){n.uniform4iv(this.addr,e)}function w1(n,e){n.uniform1uiv(this.addr,e)}function D1(n,e){n.uniform2uiv(this.addr,e)}function C1(n,e){n.uniform3uiv(this.addr,e)}function T1(n,e){n.uniform4uiv(this.addr,e)}function A1(n,e,t){let r=this.cache,i=e.length,o=_d(t,i);Vt(r,o)||(n.uniform1iv(this.addr,o),Ht(r,o));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||JM,o[s])}function I1(n,e,t){let r=this.cache,i=e.length,o=_d(t,i);Vt(r,o)||(n.uniform1iv(this.addr,o),Ht(r,o));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||tb,o[s])}function R1(n,e,t){let r=this.cache,i=e.length,o=_d(t,i);Vt(r,o)||(n.uniform1iv(this.addr,o),Ht(r,o));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||nb,o[s])}function N1(n,e,t){let r=this.cache,i=e.length,o=_d(t,i);Vt(r,o)||(n.uniform1iv(this.addr,o),Ht(r,o));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||eb,o[s])}function P1(n){switch(n){case 5126:return p1;case 35664:return m1;case 35665:return g1;case 35666:return v1;case 35674:return _1;case 35675:return y1;case 35676:return x1;case 5124:case 35670:return E1;case 35667:case 35671:return S1;case 35668:case 35672:return M1;case 35669:case 35673:return b1;case 5125:return w1;case 36294:return D1;case 36295:return C1;case 36296:return T1;case 35678:case 36198:case 36298:case 36306:case 35682:return A1;case 35679:case 36299:case 36307:return I1;case 35680:case 36300:case 36308:case 36293:return R1;case 36289:case 36303:case 36311:case 36292:return N1}}var mm=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=h1(t.type)}},gm=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=P1(t.type)}},vm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){let i=this.seq;for(let o=0,s=i.length;o!==s;++o){let a=i[o];a.setValue(e,t[a.id],r)}}},pm=/(\w+)(\])?(\[|\.)?/g;function QM(n,e){n.seq.push(e),n.map[e.id]=e}function L1(n,e,t){let r=n.name,i=r.length;for(pm.lastIndex=0;;){let o=pm.exec(r),s=pm.lastIndex,a=o[1],c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&s+2===i){QM(t,l===void 0?new mm(a,n,e):new gm(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new vm(a),QM(t,d)),t=d}}}var Di=class{constructor(e,t){this.seq=[],this.map={};let r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){let o=e.getActiveUniform(t,i),s=e.getUniformLocation(t,o.name);L1(o,s,this)}}setValue(e,t,r,i){let o=this.map[t];o!==void 0&&o.setValue(e,r,i)}setOptional(e,t,r){let i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let o=0,s=t.length;o!==s;++o){let a=t[o],c=r[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let r=[];for(let i=0,o=e.length;i!==o;++i){let s=e[i];s.id in t&&r.push(s)}return r}};function _m(n,e,t){let r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}var F1=37297,O1=0;function U1(n,e){let t=n.split(`
`),r=[],i=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=i;s<o;s++){let a=s+1;r.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return r.join(`
`)}var rb=new we;function k1(n){We._getMatrix(rb,We.workingColorSpace,n);let e=`mat3( ${rb.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(n)){case to:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ib(n,e,t){let r=n.getShaderParameter(e,n.COMPILE_STATUS),i=n.getShaderInfoLog(e).trim();if(r&&i==="")return"";let o=/ERROR: 0:(\d+)/.exec(i);if(o){let s=parseInt(o[1]);return t.toUpperCase()+`

`+i+`

`+U1(n.getShaderSource(e),s)}else return i}function B1(n,e){let t=k1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function V1(n,e){let t;switch(e){case nE:t="Linear";break;case rE:t="Reinhard";break;case iE:t="Cineon";break;case oE:t="ACESFilmic";break;case aE:t="AgX";break;case cE:t="Neutral";break;case sE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var yd=new F;function H1(){We.getLuminanceCoefficients(yd);let n=yd.x.toFixed(4),e=yd.y.toFixed(4),t=yd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tc).join(`
`)}function G1(n){let e=[];for(let t in n){let r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function j1(n,e){let t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let o=n.getActiveAttrib(e,i),s=o.name,a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function Tc(n){return n!==""}function ob(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sb(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var W1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ym(n){return n.replace(W1,q1)}var $1=new Map;function q1(n,e){let t=Be[e];if(t===void 0){let r=$1.get(e);if(r!==void 0)t=Be[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ym(t)}var X1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ab(n){return n.replace(X1,Y1)}function Y1(n,e,t,r){let i="";for(let o=parseInt(e);o<parseInt(t);o++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function cb(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Z1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===gu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Fx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===or&&(e="SHADOWMAP_TYPE_VSM"),e}function K1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case sr:case Tr:e="ENVMAP_TYPE_CUBE";break;case mi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Tr:e="ENVMAP_MODE_REFRACTION";break}return e}function J1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case bu:e="ENVMAP_BLENDING_MULTIPLY";break;case eE:e="ENVMAP_BLENDING_MIX";break;case tE:e="ENVMAP_BLENDING_ADD";break}return e}function eP(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function lb(n,e,t,r){let i=n.getContext(),o=t.defines,s=t.vertexShader,a=t.fragmentShader,c=Z1(t),l=K1(t),u=Q1(t),d=J1(t),f=eP(t),p=z1(t),g=G1(o),y=i.createProgram(),m,h,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Tc).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Tc).join(`
`),h.length>0&&(h+=`
`)):(m=[cb(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tc).join(`
`),h=[cb(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?Be.tonemapping_pars_fragment:"",t.toneMapping!==Wn?V1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,B1("linearToOutputTexel",t.outputColorSpace),H1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tc).join(`
`)),s=ym(s),s=ob(s,t),s=sb(s,t),a=ym(a),a=ob(a,t),a=sb(a,t),s=ab(s),a=ab(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Vp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let b=w+m+s,S=w+h+a,P=_m(i,i.VERTEX_SHADER,b),T=_m(i,i.FRAGMENT_SHADER,S);i.attachShader(y,P),i.attachShader(y,T),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function D(A){if(n.debug.checkShaderErrors){let V=i.getProgramInfoLog(y).trim(),B=i.getShaderInfoLog(P).trim(),j=i.getShaderInfoLog(T).trim(),Y=!0,G=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,y,P,T);else{let K=ib(i,P,"vertex"),z=ib(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+V+`
`+K+`
`+z)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||j==="")&&(G=!1);G&&(A.diagnostics={runnable:Y,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:j,prefix:h}})}i.deleteShader(P),i.deleteShader(T),N=new Di(i,y),E=j1(i,y)}let N;this.getUniforms=function(){return N===void 0&&D(this),N};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(y,F1)),x},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=O1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=T,this}var tP=0,xd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(t),o=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){let t=this.shaderCache,r=t.get(e);return r===void 0&&(r=new xm(e),t.set(e,r)),r}},xm=class{constructor(e){this.id=tP++,this.code=e,this.usedTimes=0}};function ub(n,e,t,r,i,o,s){let a=new Ts,c=new xd,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,x,A,V,B){let j=V.fog,Y=B.geometry,G=E.isMeshStandardMaterial?V.environment:null,K=(E.isMeshStandardMaterial?t:e).get(E.envMap||G),z=K&&K.mapping===mi?K.image.height:null,ie=g[E.type];E.precision!==null&&(p=i.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let de=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ee=de!==void 0?de.length:0,Ze=0;Y.morphAttributes.position!==void 0&&(Ze=1),Y.morphAttributes.normal!==void 0&&(Ze=2),Y.morphAttributes.color!==void 0&&(Ze=3);let gt,$,ee,ve;if(ie){let ht=Xn[ie];gt=ht.vertexShader,$=ht.fragmentShader}else gt=E.vertexShader,$=E.fragmentShader,c.update(E),ee=c.getVertexShaderID(E),ve=c.getFragmentShaderID(E);let oe=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),Fe=B.isInstancedMesh===!0,Ke=B.isBatchedMesh===!0,Mt=!!E.map,it=!!E.matcap,Rt=!!K,C=!!E.aoMap,Fn=!!E.lightMap,et=!!E.bumpMap,tt=!!E.normalMap,Se=!!E.displacementMap,xt=!!E.emissiveMap,ye=!!E.metalnessMap,M=!!E.roughnessMap,v=E.anisotropy>0,O=E.clearcoat>0,q=E.dispersion>0,Z=E.iridescence>0,W=E.sheen>0,_e=E.transmission>0,se=v&&!!E.anisotropyMap,fe=O&&!!E.clearcoatMap,ot=O&&!!E.clearcoatNormalMap,J=O&&!!E.clearcoatRoughnessMap,he=Z&&!!E.iridescenceMap,De=Z&&!!E.iridescenceThicknessMap,Ne=W&&!!E.sheenColorMap,pe=W&&!!E.sheenRoughnessMap,nt=!!E.specularMap,je=!!E.specularColorMap,_t=!!E.specularIntensityMap,I=_e&&!!E.transmissionMap,ne=_e&&!!E.thicknessMap,H=!!E.gradientMap,X=!!E.alphaMap,le=E.alphaTest>0,ce=!!E.alphaHash,Ve=!!E.extensions,Tt=Wn;E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Tt=n.toneMapping);let Xt={shaderID:ie,shaderType:E.type,shaderName:E.name,vertexShader:gt,fragmentShader:$,defines:E.defines,customVertexShaderID:ee,customFragmentShaderID:ve,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ke,batchingColor:Ke&&B._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&B.instanceColor!==null,instancingMorph:Fe&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ur,alphaToCoverage:!!E.alphaToCoverage,map:Mt,matcap:it,envMap:Rt,envMapMode:Rt&&K.mapping,envMapCubeUVHeight:z,aoMap:C,lightMap:Fn,bumpMap:et,normalMap:tt,displacementMap:f&&Se,emissiveMap:xt,normalMapObjectSpace:tt&&E.normalMapType===hE,normalMapTangentSpace:tt&&E.normalMapType===fE,metalnessMap:ye,roughnessMap:M,anisotropy:v,anisotropyMap:se,clearcoat:O,clearcoatMap:fe,clearcoatNormalMap:ot,clearcoatRoughnessMap:J,dispersion:q,iridescence:Z,iridescenceMap:he,iridescenceThicknessMap:De,sheen:W,sheenColorMap:Ne,sheenRoughnessMap:pe,specularMap:nt,specularColorMap:je,specularIntensityMap:_t,transmission:_e,transmissionMap:I,thicknessMap:ne,gradientMap:H,opaque:E.transparent===!1&&E.blending===jr&&E.alphaToCoverage===!1,alphaMap:X,alphaTest:le,alphaHash:ce,combine:E.combine,mapUv:Mt&&y(E.map.channel),aoMapUv:C&&y(E.aoMap.channel),lightMapUv:Fn&&y(E.lightMap.channel),bumpMapUv:et&&y(E.bumpMap.channel),normalMapUv:tt&&y(E.normalMap.channel),displacementMapUv:Se&&y(E.displacementMap.channel),emissiveMapUv:xt&&y(E.emissiveMap.channel),metalnessMapUv:ye&&y(E.metalnessMap.channel),roughnessMapUv:M&&y(E.roughnessMap.channel),anisotropyMapUv:se&&y(E.anisotropyMap.channel),clearcoatMapUv:fe&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:ot&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:De&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:pe&&y(E.sheenRoughnessMap.channel),specularMapUv:nt&&y(E.specularMap.channel),specularColorMapUv:je&&y(E.specularColorMap.channel),specularIntensityMapUv:_t&&y(E.specularIntensityMap.channel),transmissionMapUv:I&&y(E.transmissionMap.channel),thicknessMapUv:ne&&y(E.thicknessMap.channel),alphaMapUv:X&&y(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(tt||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(Mt||X),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ce,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ze,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Tt,decodeVideoTexture:Mt&&E.map.isVideoTexture===!0&&We.getTransfer(E.map.colorSpace)===rt,decodeVideoTextureEmissive:xt&&E.emissiveMap.isVideoTexture===!0&&We.getTransfer(E.emissiveMap.colorSpace)===rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Rn,flipSided:E.side===Ct,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ve&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&E.extensions.multiDraw===!0||Ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function h(E){let x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(let A in E.defines)x.push(A),x.push(E.defines[A]);return E.isRawShaderMaterial===!1&&(w(x,E),b(x,E),x.push(n.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function w(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function b(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),E.push(a.mask)}function S(E){let x=g[E.type],A;if(x){let V=Xn[x];A=zE.clone(V.uniforms)}else A=E.uniforms;return A}function P(E,x){let A;for(let V=0,B=u.length;V<B;V++){let j=u[V];if(j.cacheKey===x){A=j,++A.usedTimes;break}}return A===void 0&&(A=new lb(n,x,E,o),u.push(A)),A}function T(E){if(--E.usedTimes===0){let x=u.indexOf(E);u[x]=u[u.length-1],u.pop(),E.destroy()}}function D(E){c.remove(E)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:P,releaseProgram:T,releaseShaderCache:D,programs:u,dispose:N}}function db(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function r(s){n.delete(s)}function i(s,a,c){n.get(s)[a]=c}function o(){n=new WeakMap}return{has:e,get:t,remove:r,update:i,dispose:o}}function nP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function fb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function hb(){let n=[],e=0,t=[],r=[],i=[];function o(){e=0,t.length=0,r.length=0,i.length=0}function s(d,f,p,g,y,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=y,h.group=m),e++,h}function a(d,f,p,g,y,m){let h=s(d,f,p,g,y,m);p.transmission>0?r.push(h):p.transparent===!0?i.push(h):t.push(h)}function c(d,f,p,g,y,m){let h=s(d,f,p,g,y,m);p.transmission>0?r.unshift(h):p.transparent===!0?i.unshift(h):t.unshift(h)}function l(d,f){t.length>1&&t.sort(d||nP),r.length>1&&r.sort(f||fb),i.length>1&&i.sort(f||fb)}function u(){for(let d=e,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:r,transparent:i,init:o,push:a,unshift:c,finish:u,sort:l}}function pb(){let n=new WeakMap;function e(r,i){let o=n.get(r),s;return o===void 0?(s=new hb,n.set(r,[s])):i>=o.length?(s=new hb,o.push(s)):s=o[i],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function rP(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new ke};break;case"SpotLight":t={position:new F,direction:new F,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function iP(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var oP=0;function sP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function mb(n){let e=new rP,t=iP(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)r.probe.push(new F);let i=new F,o=new mt,s=new mt;function a(l){let u=0,d=0,f=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let p=0,g=0,y=0,m=0,h=0,w=0,b=0,S=0,P=0,T=0,D=0;l.sort(sP);for(let E=0,x=l.length;E<x;E++){let A=l[E],V=A.color,B=A.intensity,j=A.distance,Y=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=V.r*B,d+=V.g*B,f+=V.b*B;else if(A.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(A.sh.coefficients[G],B);D++}else if(A.isDirectionalLight){let G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let K=A.shadow,z=t.get(A);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,r.directionalShadow[p]=z,r.directionalShadowMap[p]=Y,r.directionalShadowMatrix[p]=A.shadow.matrix,w++}r.directional[p]=G,p++}else if(A.isSpotLight){let G=e.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(V).multiplyScalar(B),G.distance=j,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,r.spot[y]=G;let K=A.shadow;if(A.map&&(r.spotLightMap[P]=A.map,P++,K.updateMatrices(A),A.castShadow&&T++),r.spotLightMatrix[y]=K.matrix,A.castShadow){let z=t.get(A);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,r.spotShadow[y]=z,r.spotShadowMap[y]=Y,S++}y++}else if(A.isRectAreaLight){let G=e.get(A);G.color.copy(V).multiplyScalar(B),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),r.rectArea[m]=G,m++}else if(A.isPointLight){let G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),G.distance=A.distance,G.decay=A.decay,A.castShadow){let K=A.shadow,z=t.get(A);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,z.shadowCameraNear=K.camera.near,z.shadowCameraFar=K.camera.far,r.pointShadow[g]=z,r.pointShadowMap[g]=Y,r.pointShadowMatrix[g]=A.shadow.matrix,b++}r.point[g]=G,g++}else if(A.isHemisphereLight){let G=e.get(A);G.skyColor.copy(A.color).multiplyScalar(B),G.groundColor.copy(A.groundColor).multiplyScalar(B),r.hemi[h]=G,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=te.LTC_FLOAT_1,r.rectAreaLTC2=te.LTC_FLOAT_2):(r.rectAreaLTC1=te.LTC_HALF_1,r.rectAreaLTC2=te.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=d,r.ambient[2]=f;let N=r.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==y||N.rectAreaLength!==m||N.hemiLength!==h||N.numDirectionalShadows!==w||N.numPointShadows!==b||N.numSpotShadows!==S||N.numSpotMaps!==P||N.numLightProbes!==D)&&(r.directional.length=p,r.spot.length=y,r.rectArea.length=m,r.point.length=g,r.hemi.length=h,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=S+P-T,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=T,r.numLightProbes=D,N.directionalLength=p,N.pointLength=g,N.spotLength=y,N.rectAreaLength=m,N.hemiLength=h,N.numDirectionalShadows=w,N.numPointShadows=b,N.numSpotShadows=S,N.numSpotMaps=P,N.numLightProbes=D,r.version=oP++)}function c(l,u){let d=0,f=0,p=0,g=0,y=0,m=u.matrixWorldInverse;for(let h=0,w=l.length;h<w;h++){let b=l[h];if(b.isDirectionalLight){let S=r.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),d++}else if(b.isSpotLight){let S=r.spot[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let S=r.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),s.identity(),o.copy(b.matrixWorld),o.premultiply(m),s.extractRotation(o),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),g++}else if(b.isPointLight){let S=r.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let S=r.hemi[y];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:r}}function gb(n){let e=new mb(n),t=[],r=[];function i(u){l.camera=u,t.length=0,r.length=0}function o(u){t.push(u)}function s(u){r.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:s}}function vb(n){let e=new WeakMap;function t(i,o=0){let s=e.get(i),a;return s===void 0?(a=new gb(n),e.set(i,[a])):o>=s.length?(a=new gb(n),s.push(a)):a=s[o],a}function r(){e=new WeakMap}return{get:t,dispose:r}}var _b=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,yb=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`;function xb(n,e,t){let r=new Vs,i=new Ge,o=new Ge,s=new pt,a=new ud({depthPacking:dE}),c=new dd,l={},u=t.maxTextureSize,d={[In]:Ct,[Ct]:In,[Rn]:Rn},f=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:_b,fragmentShader:yb}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new En;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Bt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gu;let h=this.type;this.render=function(T,D,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let E=n.getRenderTarget(),x=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),V=n.state;V.setBlending(jn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let B=h!==or&&this.type===or,j=h===or&&this.type!==or;for(let Y=0,G=T.length;Y<G;Y++){let K=T[Y],z=K.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let ie=z.getFrameExtents();if(i.multiply(ie),o.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(o.x=Math.floor(u/ie.x),i.x=o.x*ie.x,z.mapSize.x=o.x),i.y>u&&(o.y=Math.floor(u/ie.y),i.y=o.y*ie.y,z.mapSize.y=o.y)),z.map===null||B===!0||j===!0){let Ee=this.type!==or?{minFilter:Jt,magFilter:Jt}:{};z.map!==null&&z.map.dispose(),z.map=new xn(i.x,i.y,Ee),z.map.texture.name=K.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();let de=z.getViewportCount();for(let Ee=0;Ee<de;Ee++){let Ze=z.getViewport(Ee);s.set(o.x*Ze.x,o.y*Ze.y,o.x*Ze.z,o.y*Ze.w),V.viewport(s),z.updateMatrices(K,Ee),r=z.getFrustum(),S(D,N,z.camera,K,this.type)}z.isPointLightShadow!==!0&&this.type===or&&w(z,N),z.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(E,x,A)};function w(T,D){let N=e.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new xn(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(D,null,N,f,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(D,null,N,p,y,null)}function b(T,D,N,E){let x=null,A=N.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)x=A;else if(x=N.isPointLight===!0?c:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let V=x.uuid,B=D.uuid,j=l[V];j===void 0&&(j={},l[V]=j);let Y=j[B];Y===void 0&&(Y=x.clone(),j[B]=Y,D.addEventListener("dispose",P)),x=Y}if(x.visible=D.visible,x.wireframe=D.wireframe,E===or?x.side=D.shadowSide!==null?D.shadowSide:D.side:x.side=D.shadowSide!==null?D.shadowSide:d[D.side],x.alphaMap=D.alphaMap,x.alphaTest=D.alphaTest,x.map=D.map,x.clipShadows=D.clipShadows,x.clippingPlanes=D.clippingPlanes,x.clipIntersection=D.clipIntersection,x.displacementMap=D.displacementMap,x.displacementScale=D.displacementScale,x.displacementBias=D.displacementBias,x.wireframeLinewidth=D.wireframeLinewidth,x.linewidth=D.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let V=n.properties.get(x);V.light=N}return x}function S(T,D,N,E,x){if(T.visible===!1)return;if(T.layers.test(D.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===or)&&(!T.frustumCulled||r.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,T.matrixWorld);let B=e.update(T),j=T.material;if(Array.isArray(j)){let Y=B.groups;for(let G=0,K=Y.length;G<K;G++){let z=Y[G],ie=j[z.materialIndex];if(ie&&ie.visible){let de=b(T,ie,E,x);T.onBeforeShadow(n,T,D,N,B,de,z),n.renderBufferDirect(N,null,B,de,T,z),T.onAfterShadow(n,T,D,N,B,de,z)}}}else if(j.visible){let Y=b(T,j,E,x);T.onBeforeShadow(n,T,D,N,B,Y,null),n.renderBufferDirect(N,null,B,Y,T,null),T.onAfterShadow(n,T,D,N,B,Y,null)}}let V=T.children;for(let B=0,j=V.length;B<j;B++)S(V[B],D,N,E,x)}function P(T){T.target.removeEventListener("dispose",P);for(let N in l){let E=l[N],x=T.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}var cP={[vu]:_u,[yu]:Su,[xu]:Mu,[pi]:Eu,[_u]:vu,[Su]:yu,[Mu]:xu,[Eu]:pi};function Eb(n,e){function t(){let I=!1,ne=new pt,H=null,X=new pt(0,0,0,0);return{setMask:function(le){H!==le&&!I&&(n.colorMask(le,le,le,le),H=le)},setLocked:function(le){I=le},setClear:function(le,ce,Ve,Tt,Xt){Xt===!0&&(le*=Tt,ce*=Tt,Ve*=Tt),ne.set(le,ce,Ve,Tt),X.equals(ne)===!1&&(n.clearColor(le,ce,Ve,Tt),X.copy(ne))},reset:function(){I=!1,H=null,X.set(-1,0,0,0)}}}function r(){let I=!1,ne=!1,H=null,X=null,le=null;return{setReversed:function(ce){if(ne!==ce){let Ve=e.get("EXT_clip_control");ne?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);let Tt=le;le=null,this.setClear(Tt)}ne=ce},getReversed:function(){return ne},setTest:function(ce){ce?oe(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(ce){H!==ce&&!I&&(n.depthMask(ce),H=ce)},setFunc:function(ce){if(ne&&(ce=cP[ce]),X!==ce){switch(ce){case vu:n.depthFunc(n.NEVER);break;case _u:n.depthFunc(n.ALWAYS);break;case yu:n.depthFunc(n.LESS);break;case pi:n.depthFunc(n.LEQUAL);break;case xu:n.depthFunc(n.EQUAL);break;case Eu:n.depthFunc(n.GEQUAL);break;case Su:n.depthFunc(n.GREATER);break;case Mu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}X=ce}},setLocked:function(ce){I=ce},setClear:function(ce){le!==ce&&(ne&&(ce=1-ce),n.clearDepth(ce),le=ce)},reset:function(){I=!1,H=null,X=null,le=null,ne=!1}}}function i(){let I=!1,ne=null,H=null,X=null,le=null,ce=null,Ve=null,Tt=null,Xt=null;return{setTest:function(ht){I||(ht?oe(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(ht){ne!==ht&&!I&&(n.stencilMask(ht),ne=ht)},setFunc:function(ht,Yn,Pr){(H!==ht||X!==Yn||le!==Pr)&&(n.stencilFunc(ht,Yn,Pr),H=ht,X=Yn,le=Pr)},setOp:function(ht,Yn,Pr){(ce!==ht||Ve!==Yn||Tt!==Pr)&&(n.stencilOp(ht,Yn,Pr),ce=ht,Ve=Yn,Tt=Pr)},setLocked:function(ht){I=ht},setClear:function(ht){Xt!==ht&&(n.clearStencil(ht),Xt=ht)},reset:function(){I=!1,ne=null,H=null,X=null,le=null,ce=null,Ve=null,Tt=null,Xt=null}}}let o=new t,s=new r,a=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],g=null,y=!1,m=null,h=null,w=null,b=null,S=null,P=null,T=null,D=new ke(0,0,0),N=0,E=!1,x=null,A=null,V=null,B=null,j=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,K=0,z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(z)[1]),G=K>=1):z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),G=K>=2);let ie=null,de={},Ee=n.getParameter(n.SCISSOR_BOX),Ze=n.getParameter(n.VIEWPORT),gt=new pt().fromArray(Ee),$=new pt().fromArray(Ze);function ee(I,ne,H,X){let le=new Uint8Array(4),ce=n.createTexture();n.bindTexture(I,ce),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<H;Ve++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,X,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(ne+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return ce}let ve={};ve[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),s.setFunc(pi),et(!1),tt(Pp),oe(n.CULL_FACE),C(jn);function oe(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function Ce(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Fe(I,ne){return d[I]!==ne?(n.bindFramebuffer(I,ne),d[I]=ne,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ne),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ke(I,ne){let H=p,X=!1;if(I){H=f.get(ne),H===void 0&&(H=[],f.set(ne,H));let le=I.textures;if(H.length!==le.length||H[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Ve=le.length;ce<Ve;ce++)H[ce]=n.COLOR_ATTACHMENT0+ce;H.length=le.length,X=!0}}else H[0]!==n.BACK&&(H[0]=n.BACK,X=!0);X&&n.drawBuffers(H)}function Mt(I){return g!==I?(n.useProgram(I),g=I,!0):!1}let it={[Wr]:n.FUNC_ADD,[Ux]:n.FUNC_SUBTRACT,[kx]:n.FUNC_REVERSE_SUBTRACT};it[Bx]=n.MIN,it[Vx]=n.MAX;let Rt={[Hx]:n.ZERO,[zx]:n.ONE,[Gx]:n.SRC_COLOR,[Ga]:n.SRC_ALPHA,[Yx]:n.SRC_ALPHA_SATURATE,[qx]:n.DST_COLOR,[Wx]:n.DST_ALPHA,[jx]:n.ONE_MINUS_SRC_COLOR,[ja]:n.ONE_MINUS_SRC_ALPHA,[Xx]:n.ONE_MINUS_DST_COLOR,[$x]:n.ONE_MINUS_DST_ALPHA,[Zx]:n.CONSTANT_COLOR,[Kx]:n.ONE_MINUS_CONSTANT_COLOR,[Qx]:n.CONSTANT_ALPHA,[Jx]:n.ONE_MINUS_CONSTANT_ALPHA};function C(I,ne,H,X,le,ce,Ve,Tt,Xt,ht){if(I===jn){y===!0&&(Ce(n.BLEND),y=!1);return}if(y===!1&&(oe(n.BLEND),y=!0),I!==Ox){if(I!==m||ht!==E){if((h!==Wr||S!==Wr)&&(n.blendEquation(n.FUNC_ADD),h=Wr,S=Wr),ht)switch(I){case jr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lp:n.blendFunc(n.ONE,n.ONE);break;case Fp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Op:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case jr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Fp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Op:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,b=null,P=null,T=null,D.set(0,0,0),N=0,m=I,E=ht}return}le=le||ne,ce=ce||H,Ve=Ve||X,(ne!==h||le!==S)&&(n.blendEquationSeparate(it[ne],it[le]),h=ne,S=le),(H!==w||X!==b||ce!==P||Ve!==T)&&(n.blendFuncSeparate(Rt[H],Rt[X],Rt[ce],Rt[Ve]),w=H,b=X,P=ce,T=Ve),(Tt.equals(D)===!1||Xt!==N)&&(n.blendColor(Tt.r,Tt.g,Tt.b,Xt),D.copy(Tt),N=Xt),m=I,E=!1}function Fn(I,ne){I.side===Rn?Ce(n.CULL_FACE):oe(n.CULL_FACE);let H=I.side===Ct;ne&&(H=!H),et(H),I.blending===jr&&I.transparent===!1?C(jn):C(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),o.setMask(I.colorWrite);let X=I.stencilWrite;a.setTest(X),X&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),xt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function et(I){x!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),x=I)}function tt(I){I!==Px?(oe(n.CULL_FACE),I!==A&&(I===Pp?n.cullFace(n.BACK):I===Lx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),A=I}function Se(I){I!==V&&(G&&n.lineWidth(I),V=I)}function xt(I,ne,H){I?(oe(n.POLYGON_OFFSET_FILL),(B!==ne||j!==H)&&(n.polygonOffset(ne,H),B=ne,j=H)):Ce(n.POLYGON_OFFSET_FILL)}function ye(I){I?oe(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function M(I){I===void 0&&(I=n.TEXTURE0+Y-1),ie!==I&&(n.activeTexture(I),ie=I)}function v(I,ne,H){H===void 0&&(ie===null?H=n.TEXTURE0+Y-1:H=ie);let X=de[H];X===void 0&&(X={type:void 0,texture:void 0},de[H]=X),(X.type!==I||X.texture!==ne)&&(ie!==H&&(n.activeTexture(H),ie=H),n.bindTexture(I,ne||ve[I]),X.type=I,X.texture=ne)}function O(){let I=de[ie];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(I){gt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),gt.copy(I))}function pe(I){$.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function nt(I,ne){let H=l.get(ne);H===void 0&&(H=new WeakMap,l.set(ne,H));let X=H.get(I);X===void 0&&(X=n.getUniformBlockIndex(ne,I.name),H.set(I,X))}function je(I,ne){let X=l.get(ne).get(I);c.get(ne)!==X&&(n.uniformBlockBinding(ne,X,I.__bindingPointIndex),c.set(ne,X))}function _t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ie=null,de={},d={},f=new WeakMap,p=[],g=null,y=!1,m=null,h=null,w=null,b=null,S=null,P=null,T=null,D=new ke(0,0,0),N=0,E=!1,x=null,A=null,V=null,B=null,j=null,gt.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:oe,disable:Ce,bindFramebuffer:Fe,drawBuffers:Ke,useProgram:Mt,setBlending:C,setMaterial:Fn,setFlipSided:et,setCullFace:tt,setLineWidth:Se,setPolygonOffset:xt,setScissorTest:ye,activeTexture:M,bindTexture:v,unbindTexture:O,compressedTexImage2D:q,compressedTexImage3D:Z,texImage2D:he,texImage3D:De,updateUBOMapping:nt,uniformBlockBinding:je,texStorage2D:ot,texStorage3D:J,texSubImage2D:W,texSubImage3D:_e,compressedTexSubImage2D:se,compressedTexSubImage3D:fe,scissor:Ne,viewport:pe,reset:_t}}function Sb(n,e,t,r,i,o,s){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,v){return p?new OffscreenCanvas(M,v):xs("canvas")}function y(M,v,O){let q=1,Z=ye(M);if((Z.width>O||Z.height>O)&&(q=O/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let W=Math.floor(q*Z.width),_e=Math.floor(q*Z.height);d===void 0&&(d=g(W,_e));let se=v?g(W,_e):d;return se.width=W,se.height=_e,se.getContext("2d").drawImage(M,0,0,W,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+W+"x"+_e+")."),se}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),M;return M}function m(M){return M.generateMipmaps}function h(M){n.generateMipmap(M)}function w(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(M,v,O,q,Z=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let W=v;if(v===n.RED&&(O===n.FLOAT&&(W=n.R32F),O===n.HALF_FLOAT&&(W=n.R16F),O===n.UNSIGNED_BYTE&&(W=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.R8UI),O===n.UNSIGNED_SHORT&&(W=n.R16UI),O===n.UNSIGNED_INT&&(W=n.R32UI),O===n.BYTE&&(W=n.R8I),O===n.SHORT&&(W=n.R16I),O===n.INT&&(W=n.R32I)),v===n.RG&&(O===n.FLOAT&&(W=n.RG32F),O===n.HALF_FLOAT&&(W=n.RG16F),O===n.UNSIGNED_BYTE&&(W=n.RG8)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RG8UI),O===n.UNSIGNED_SHORT&&(W=n.RG16UI),O===n.UNSIGNED_INT&&(W=n.RG32UI),O===n.BYTE&&(W=n.RG8I),O===n.SHORT&&(W=n.RG16I),O===n.INT&&(W=n.RG32I)),v===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGB8UI),O===n.UNSIGNED_SHORT&&(W=n.RGB16UI),O===n.UNSIGNED_INT&&(W=n.RGB32UI),O===n.BYTE&&(W=n.RGB8I),O===n.SHORT&&(W=n.RGB16I),O===n.INT&&(W=n.RGB32I)),v===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),O===n.UNSIGNED_INT&&(W=n.RGBA32UI),O===n.BYTE&&(W=n.RGBA8I),O===n.SHORT&&(W=n.RGBA16I),O===n.INT&&(W=n.RGBA32I)),v===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),v===n.RGBA){let _e=Z?to:We.getTransfer(q);O===n.FLOAT&&(W=n.RGBA32F),O===n.HALF_FLOAT&&(W=n.RGBA16F),O===n.UNSIGNED_BYTE&&(W=_e===rt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function S(M,v){let O;return M?v===null||v===Nn||v===lr?O=n.DEPTH24_STENCIL8:v===ln?O=n.DEPTH32F_STENCIL8:v===$r&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Nn||v===lr?O=n.DEPTH_COMPONENT24:v===ln?O=n.DEPTH_COMPONENT32F:v===$r&&(O=n.DEPTH_COMPONENT16),O}function P(M,v){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Jt&&M.minFilter!==cn?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function T(M){let v=M.target;v.removeEventListener("dispose",T),N(v),v.isVideoTexture&&u.delete(v)}function D(M){let v=M.target;v.removeEventListener("dispose",D),x(v)}function N(M){let v=r.get(M);if(v.__webglInit===void 0)return;let O=M.source,q=f.get(O);if(q){let Z=q[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(M),Object.keys(q).length===0&&f.delete(O)}r.remove(M)}function E(M){let v=r.get(M);n.deleteTexture(v.__webglTexture);let O=M.source,q=f.get(O);delete q[v.__cacheKey],s.memory.textures--}function x(M){let v=r.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),r.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let Z=0;Z<v.__webglFramebuffer[q].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[q][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)n.deleteFramebuffer(v.__webglFramebuffer[q]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=M.textures;for(let q=0,Z=O.length;q<Z;q++){let W=r.get(O[q]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),s.memory.textures--),r.remove(O[q])}r.remove(M)}let A=0;function V(){A=0}function B(){let M=A;return M>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+i.maxTextures),A+=1,M}function j(M){let v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function Y(M,v){let O=r.get(M);if(M.isVideoTexture&&Se(M),M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){let q=M.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,M,v);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function G(M,v){let O=r.get(M);if(M.version>0&&O.__version!==M.version){$(O,M,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function K(M,v){let O=r.get(M);if(M.version>0&&O.__version!==M.version){$(O,M,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function z(M,v){let O=r.get(M);if(M.version>0&&O.__version!==M.version){ee(O,M,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}let ie={[qa]:n.REPEAT,[ar]:n.CLAMP_TO_EDGE,[Xa]:n.MIRRORED_REPEAT},de={[Jt]:n.NEAREST,[lE]:n.NEAREST_MIPMAP_NEAREST,[Ya]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[wu]:n.LINEAR_MIPMAP_NEAREST,[cr]:n.LINEAR_MIPMAP_LINEAR},Ee={[pE]:n.NEVER,[xE]:n.ALWAYS,[mE]:n.LESS,[Ou]:n.LEQUAL,[gE]:n.EQUAL,[yE]:n.GEQUAL,[vE]:n.GREATER,[_E]:n.NOTEQUAL};function Ze(M,v){if(v.type===ln&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===cn||v.magFilter===wu||v.magFilter===Ya||v.magFilter===cr||v.minFilter===cn||v.minFilter===wu||v.minFilter===Ya||v.minFilter===cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,ie[v.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,ie[v.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,ie[v.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,de[v.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,de[v.minFilter]),v.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Ee[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Jt||v.minFilter!==Ya&&v.minFilter!==cr||v.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||r.get(v).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),r.get(v).__currentAnisotropy=v.anisotropy}}}function gt(M,v){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",T));let q=v.source,Z=f.get(q);Z===void 0&&(Z={},f.set(q,Z));let W=j(v);if(W!==M.__cacheKey){Z[W]===void 0&&(Z[W]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,O=!0),Z[W].usedTimes++;let _e=Z[M.__cacheKey];_e!==void 0&&(Z[M.__cacheKey].usedTimes--,_e.usedTimes===0&&E(v)),M.__cacheKey=W,M.__webglTexture=Z[W].texture}return O}function $(M,v,O){let q=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=n.TEXTURE_3D);let Z=gt(M,v),W=v.source;t.bindTexture(q,M.__webglTexture,n.TEXTURE0+O);let _e=r.get(W);if(W.version!==_e.__version||Z===!0){t.activeTexture(n.TEXTURE0+O);let se=We.getPrimaries(We.workingColorSpace),fe=v.colorSpace===$n?null:We.getPrimaries(v.colorSpace),ot=v.colorSpace===$n||se===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let J=y(v.image,!1,i.maxTextureSize);J=xt(v,J);let he=o.convert(v.format,v.colorSpace),De=o.convert(v.type),Ne=b(v.internalFormat,he,De,v.colorSpace,v.isVideoTexture);Ze(q,v);let pe,nt=v.mipmaps,je=v.isVideoTexture!==!0,_t=_e.__version===void 0||Z===!0,I=W.dataReady,ne=P(v,J);if(v.isDepthTexture)Ne=S(v.format===Rr,v.type),_t&&(je?t.texStorage2D(n.TEXTURE_2D,1,Ne,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Ne,J.width,J.height,0,he,De,null));else if(v.isDataTexture)if(nt.length>0){je&&_t&&t.texStorage2D(n.TEXTURE_2D,ne,Ne,nt[0].width,nt[0].height);for(let H=0,X=nt.length;H<X;H++)pe=nt[H],je?I&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,pe.width,pe.height,he,De,pe.data):t.texImage2D(n.TEXTURE_2D,H,Ne,pe.width,pe.height,0,he,De,pe.data);v.generateMipmaps=!1}else je?(_t&&t.texStorage2D(n.TEXTURE_2D,ne,Ne,J.width,J.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,he,De,J.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,J.width,J.height,0,he,De,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){je&&_t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,Ne,nt[0].width,nt[0].height,J.depth);for(let H=0,X=nt.length;H<X;H++)if(pe=nt[H],v.format!==Gt)if(he!==null)if(je){if(I)if(v.layerUpdates.size>0){let le=am(pe.width,pe.height,v.format,v.type);for(let ce of v.layerUpdates){let Ve=pe.data.subarray(ce*le/pe.data.BYTES_PER_ELEMENT,(ce+1)*le/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,ce,pe.width,pe.height,1,he,Ve)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,pe.width,pe.height,J.depth,he,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,H,Ne,pe.width,pe.height,J.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,pe.width,pe.height,J.depth,he,De,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,H,Ne,pe.width,pe.height,J.depth,0,he,De,pe.data)}else{je&&_t&&t.texStorage2D(n.TEXTURE_2D,ne,Ne,nt[0].width,nt[0].height);for(let H=0,X=nt.length;H<X;H++)pe=nt[H],v.format!==Gt?he!==null?je?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,H,0,0,pe.width,pe.height,he,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,H,Ne,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?I&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,pe.width,pe.height,he,De,pe.data):t.texImage2D(n.TEXTURE_2D,H,Ne,pe.width,pe.height,0,he,De,pe.data)}else if(v.isDataArrayTexture)if(je){if(_t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,Ne,J.width,J.height,J.depth),I)if(v.layerUpdates.size>0){let H=am(J.width,J.height,v.format,v.type);for(let X of v.layerUpdates){let le=J.data.subarray(X*H/J.data.BYTES_PER_ELEMENT,(X+1)*H/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,X,J.width,J.height,1,he,De,le)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,he,De,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,J.width,J.height,J.depth,0,he,De,J.data);else if(v.isData3DTexture)je?(_t&&t.texStorage3D(n.TEXTURE_3D,ne,Ne,J.width,J.height,J.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,he,De,J.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,J.width,J.height,J.depth,0,he,De,J.data);else if(v.isFramebufferTexture){if(_t)if(je)t.texStorage2D(n.TEXTURE_2D,ne,Ne,J.width,J.height);else{let H=J.width,X=J.height;for(let le=0;le<ne;le++)t.texImage2D(n.TEXTURE_2D,le,Ne,H,X,0,he,De,null),H>>=1,X>>=1}}else if(nt.length>0){if(je&&_t){let H=ye(nt[0]);t.texStorage2D(n.TEXTURE_2D,ne,Ne,H.width,H.height)}for(let H=0,X=nt.length;H<X;H++)pe=nt[H],je?I&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,he,De,pe):t.texImage2D(n.TEXTURE_2D,H,Ne,he,De,pe);v.generateMipmaps=!1}else if(je){if(_t){let H=ye(J);t.texStorage2D(n.TEXTURE_2D,ne,Ne,H.width,H.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,De,J)}else t.texImage2D(n.TEXTURE_2D,0,Ne,he,De,J);m(v)&&h(q),_e.__version=W.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ee(M,v,O){if(v.image.length!==6)return;let q=gt(M,v),Z=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+O);let W=r.get(Z);if(Z.version!==W.__version||q===!0){t.activeTexture(n.TEXTURE0+O);let _e=We.getPrimaries(We.workingColorSpace),se=v.colorSpace===$n?null:We.getPrimaries(v.colorSpace),fe=v.colorSpace===$n||_e===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let ot=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,he=[];for(let X=0;X<6;X++)!ot&&!J?he[X]=y(v.image[X],!0,i.maxCubemapSize):he[X]=J?v.image[X].image:v.image[X],he[X]=xt(v,he[X]);let De=he[0],Ne=o.convert(v.format,v.colorSpace),pe=o.convert(v.type),nt=b(v.internalFormat,Ne,pe,v.colorSpace),je=v.isVideoTexture!==!0,_t=W.__version===void 0||q===!0,I=Z.dataReady,ne=P(v,De);Ze(n.TEXTURE_CUBE_MAP,v);let H;if(ot){je&&_t&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ne,nt,De.width,De.height);for(let X=0;X<6;X++){H=he[X].mipmaps;for(let le=0;le<H.length;le++){let ce=H[le];v.format!==Gt?Ne!==null?je?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,le,0,0,ce.width,ce.height,Ne,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,le,nt,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,le,0,0,ce.width,ce.height,Ne,pe,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,le,nt,ce.width,ce.height,0,Ne,pe,ce.data)}}}else{if(H=v.mipmaps,je&&_t){H.length>0&&ne++;let X=ye(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ne,nt,X.width,X.height)}for(let X=0;X<6;X++)if(J){je?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,he[X].width,he[X].height,Ne,pe,he[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,nt,he[X].width,he[X].height,0,Ne,pe,he[X].data);for(let le=0;le<H.length;le++){let Ve=H[le].image[X].image;je?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,le+1,0,0,Ve.width,Ve.height,Ne,pe,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,le+1,nt,Ve.width,Ve.height,0,Ne,pe,Ve.data)}}else{je?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Ne,pe,he[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,nt,Ne,pe,he[X]);for(let le=0;le<H.length;le++){let ce=H[le];je?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,le+1,0,0,Ne,pe,ce.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,le+1,nt,Ne,pe,ce.image[X])}}}m(v)&&h(n.TEXTURE_CUBE_MAP),W.__version=Z.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ve(M,v,O,q,Z,W){let _e=o.convert(O.format,O.colorSpace),se=o.convert(O.type),fe=b(O.internalFormat,_e,se,O.colorSpace),ot=r.get(v),J=r.get(O);if(J.__renderTarget=v,!ot.__hasExternalTextures){let he=Math.max(1,v.width>>W),De=Math.max(1,v.height>>W);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,W,fe,he,De,v.depth,0,_e,se,null):t.texImage2D(Z,W,fe,he,De,0,_e,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),tt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Z,J.__webglTexture,0,et(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Z,J.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(M,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,M),v.depthBuffer){let q=v.depthTexture,Z=q&&q.isDepthTexture?q.type:null,W=S(v.stencilBuffer,Z),_e=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=et(v);tt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,W,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,W,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,W,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,M)}else{let q=v.textures;for(let Z=0;Z<q.length;Z++){let W=q[Z],_e=o.convert(W.format,W.colorSpace),se=o.convert(W.type),fe=b(W.internalFormat,_e,se,W.colorSpace),ot=et(v);O&&tt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,fe,v.width,v.height):tt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,fe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,fe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=r.get(v.depthTexture);q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);let Z=q.__webglTexture,W=et(v);if(v.depthTexture.format===Ir)tt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(v.depthTexture.format===Rr)tt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Fe(M){let v=r.get(M),O=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){let q=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){let Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=q}if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ce(v.__webglFramebuffer,M)}else if(O){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=n.createRenderbuffer(),oe(v.__webglDepthbuffer[q],M,!1);else{let Z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,W)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),oe(v.__webglDepthbuffer,M,!1);else{let q=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,Z)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(M,v,O){let q=r.get(M);v!==void 0&&ve(q.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Fe(M)}function Mt(M){let v=M.texture,O=r.get(M),q=r.get(v);M.addEventListener("dispose",D);let Z=M.textures,W=M.isWebGLCubeRenderTarget===!0,_e=Z.length>1;if(_e||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=v.version,s.memory.textures++),W){O.__webglFramebuffer=[];for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[se]=[];for(let fe=0;fe<v.mipmaps.length;fe++)O.__webglFramebuffer[se][fe]=n.createFramebuffer()}else O.__webglFramebuffer[se]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)O.__webglFramebuffer[se]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(_e)for(let se=0,fe=Z.length;se<fe;se++){let ot=r.get(Z[se]);ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture(),s.memory.textures++)}if(M.samples>0&&tt(M)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let se=0;se<Z.length;se++){let fe=Z[se];O.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[se]);let ot=o.convert(fe.format,fe.colorSpace),J=o.convert(fe.type),he=b(fe.internalFormat,ot,J,fe.colorSpace,M.isXRRenderTarget===!0),De=et(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,he,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,O.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(O.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ze(n.TEXTURE_CUBE_MAP,v);for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)ve(O.__webglFramebuffer[se][fe],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,fe);else ve(O.__webglFramebuffer[se],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(v)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let se=0,fe=Z.length;se<fe;se++){let ot=Z[se],J=r.get(ot);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),Ze(n.TEXTURE_2D,ot),ve(O.__webglFramebuffer,M,ot,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,0),m(ot)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(se=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,q.__webglTexture),Ze(se,v),v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)ve(O.__webglFramebuffer[fe],M,v,n.COLOR_ATTACHMENT0,se,fe);else ve(O.__webglFramebuffer,M,v,n.COLOR_ATTACHMENT0,se,0);m(v)&&h(se),t.unbindTexture()}M.depthBuffer&&Fe(M)}function it(M){let v=M.textures;for(let O=0,q=v.length;O<q;O++){let Z=v[O];if(m(Z)){let W=w(M),_e=r.get(Z).__webglTexture;t.bindTexture(W,_e),h(W),t.unbindTexture()}}}let Rt=[],C=[];function Fn(M){if(M.samples>0){if(tt(M)===!1){let v=M.textures,O=M.width,q=M.height,Z=n.COLOR_BUFFER_BIT,W=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=r.get(M),se=v.length>1;if(se)for(let fe=0;fe<v.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let fe=0;fe<v.length;fe++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[fe]);let ot=r.get(v[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ot,0)}n.blitFramebuffer(0,0,O,q,0,0,O,q,Z,n.NEAREST),c===!0&&(Rt.length=0,C.length=0,Rt.push(n.COLOR_ATTACHMENT0+fe),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Rt.push(W),C.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let fe=0;fe<v.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,_e.__webglColorRenderbuffer[fe]);let ot=r.get(v[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,ot,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){let v=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function et(M){return Math.min(i.maxSamples,M.samples)}function tt(M){let v=r.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Se(M){let v=s.render.frame;u.get(M)!==v&&(u.set(M,v),M.update())}function xt(M,v){let O=M.colorSpace,q=M.format,Z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||O!==ur&&O!==$n&&(We.getTransfer(O)===rt?(q!==Gt||Z!==en)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function ye(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.setTexture2D=Y,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=z,this.rebindTextures=Ke,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Fn,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=tt}function Mb(n,e){function t(r,i=$n){let o,s=We.getTransfer(i);if(r===en)return n.UNSIGNED_BYTE;if(r===us)return n.UNSIGNED_SHORT_4_4_4_4;if(r===ds)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Tu)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===Du)return n.BYTE;if(r===Cu)return n.SHORT;if(r===$r)return n.UNSIGNED_SHORT;if(r===ls)return n.INT;if(r===Nn)return n.UNSIGNED_INT;if(r===ln)return n.FLOAT;if(r===Ar)return n.HALF_FLOAT;if(r===Au)return n.ALPHA;if(r===Iu)return n.RGB;if(r===Gt)return n.RGBA;if(r===Ru)return n.LUMINANCE;if(r===Nu)return n.LUMINANCE_ALPHA;if(r===Ir)return n.DEPTH_COMPONENT;if(r===Rr)return n.DEPTH_STENCIL;if(r===Pu)return n.RED;if(r===fs)return n.RED_INTEGER;if(r===Lu)return n.RG;if(r===hs)return n.RG_INTEGER;if(r===ps)return n.RGBA_INTEGER;if(r===ms||r===gs||r===vs||r===_s)if(s===rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ms)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===gs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_s)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ms)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===gs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_s)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Za||r===Ka||r===Qa||r===Ja)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Za)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ka)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ja)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ec||r===tc||r===nc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ec||r===tc)return s===rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===nc)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rc||r===ic||r===oc||r===sc||r===ac||r===cc||r===lc||r===uc||r===dc||r===fc||r===hc||r===pc||r===mc||r===gc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===rc)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ic)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===oc)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sc)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ac)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===cc)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===lc)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uc)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dc)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fc)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hc)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===pc)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mc)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gc)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ys||r===vc||r===_c)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===ys)return s===rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_c)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Fu||r===yc||r===xc||r===Ec)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===ys)return o.COMPRESSED_RED_RGTC1_EXT;if(r===yc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ec)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===lr?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}var lP={type:"move"},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,o=null,s=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,r),h=this._getHandJoint(l,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,r),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,r),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lP)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let r=new lo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}};var uP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ed=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){let i=new yn,o=e.properties.get(i);o.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,r=new pn({vertexShader:uP,fragmentShader:dP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new zs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};var Sd=class extends _n{constructor(e,t){super();let r=this,i=null,o=1,s=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,p=null,g=null,y=new Ed,m=t.getContextAttributes(),h=null,w=null,b=[],S=[],P=new Ge,T=null,D=new Ft;D.viewport=new pt;let N=new Ft;N.viewport=new pt;let E=[D,N],x=new hd,A=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=b[$];return ee===void 0&&(ee=new $s,b[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=b[$];return ee===void 0&&(ee=new $s,b[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=b[$];return ee===void 0&&(ee=new $s,b[$]=ee),ee.getHandSpace()};function B($){let ee=S.indexOf($.inputSource);if(ee===-1)return;let ve=b[ee];ve!==void 0&&(ve.update($.inputSource,$.frame,l||s),ve.dispatchEvent({type:$.type,data:$.inputSource}))}function j(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",Y);for(let $=0;$<b.length;$++){let ee=S[$];ee!==null&&(S[$]=null,b[$].disconnect(ee))}A=null,V=null,y.reset(),e.setRenderTarget(h),p=null,f=null,d=null,i=null,w=null,gt.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=function($){return go(this,null,function*(){if(i=$,i!==null){if(h=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",j),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),T=e.getPixelRatio(),e.getSize(P),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let ve=null,oe=null,Ce=null;m.depth&&(Ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=m.stencil?Rr:Ir,oe=m.stencil?lr:Nn);let Fe={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:o};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(Fe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new xn(f.textureWidth,f.textureHeight,{format:Gt,type:en,depthTexture:new Hs(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{let ve={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(i,t,ve),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new xn(p.framebufferWidth,p.framebufferHeight,{format:Gt,type:en,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=yield i.requestReferenceSpace(a),gt.setContext(i),gt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y($){for(let ee=0;ee<$.removed.length;ee++){let ve=$.removed[ee],oe=S.indexOf(ve);oe>=0&&(S[oe]=null,b[oe].disconnect(ve))}for(let ee=0;ee<$.added.length;ee++){let ve=$.added[ee],oe=S.indexOf(ve);if(oe===-1){for(let Fe=0;Fe<b.length;Fe++)if(Fe>=S.length){S.push(ve),oe=Fe;break}else if(S[Fe]===null){S[Fe]=ve,oe=Fe;break}if(oe===-1)break}let Ce=b[oe];Ce&&Ce.connect(ve)}}let G=new F,K=new F;function z($,ee,ve){G.setFromMatrixPosition(ee.matrixWorld),K.setFromMatrixPosition(ve.matrixWorld);let oe=G.distanceTo(K),Ce=ee.projectionMatrix.elements,Fe=ve.projectionMatrix.elements,Ke=Ce[14]/(Ce[10]-1),Mt=Ce[14]/(Ce[10]+1),it=(Ce[9]+1)/Ce[5],Rt=(Ce[9]-1)/Ce[5],C=(Ce[8]-1)/Ce[0],Fn=(Fe[8]+1)/Fe[0],et=Ke*C,tt=Ke*Fn,Se=oe/(-C+Fn),xt=Se*-C;if(ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(xt),$.translateZ(Se),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ce[10]===-1)$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let ye=Ke+Se,M=Mt+Se,v=et-xt,O=tt+(oe-xt),q=it*Mt/M*ye,Z=Rt*Mt/M*ye;$.projectionMatrix.makePerspective(v,O,q,Z,ye,M),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ie($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ee=$.near,ve=$.far;y.texture!==null&&(y.depthNear>0&&(ee=y.depthNear),y.depthFar>0&&(ve=y.depthFar)),x.near=N.near=D.near=ee,x.far=N.far=D.far=ve,(A!==x.near||V!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,V=x.far),D.layers.mask=$.layers.mask|2,N.layers.mask=$.layers.mask|4,x.layers.mask=D.layers.mask|N.layers.mask;let oe=$.parent,Ce=x.cameras;ie(x,oe);for(let Fe=0;Fe<Ce.length;Fe++)ie(Ce[Fe],oe);Ce.length===2?z(x,D,N):x.projectionMatrix.copy(D.projectionMatrix),de($,x,oe)};function de($,ee,ve){ve===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(ve.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ha*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let Ee=null;function Ze($,ee){if(u=ee.getViewerPose(l||s),g=ee,u!==null){let ve=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let oe=!1;ve.length!==x.cameras.length&&(x.cameras.length=0,oe=!0);for(let Fe=0;Fe<ve.length;Fe++){let Ke=ve[Fe],Mt=null;if(p!==null)Mt=p.getViewport(Ke);else{let Rt=d.getViewSubImage(f,Ke);Mt=Rt.viewport,Fe===0&&(e.setRenderTargetTextures(w,Rt.colorTexture,f.ignoreDepthValues?void 0:Rt.depthStencilTexture),e.setRenderTarget(w))}let it=E[Fe];it===void 0&&(it=new Ft,it.layers.enable(Fe),it.viewport=new pt,E[Fe]=it),it.matrix.fromArray(Ke.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Ke.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),Fe===0&&(x.matrix.copy(it.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),oe===!0&&x.cameras.push(it)}let Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){let Fe=d.getDepthInformation(ve[0]);Fe&&Fe.isValid&&Fe.texture&&y.init(e,Fe,i.renderState)}}for(let ve=0;ve<b.length;ve++){let oe=S[ve],Ce=b[ve];oe!==null&&Ce!==void 0&&Ce.update(oe,ee,l||s)}Ee&&Ee($,ee),ee.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ee}),g=null}let gt=new md;gt.setAnimationLoop(Ze),this.setAnimationLoop=function($){Ee=$},this.dispose=function(){}}};var po=new pr,fP=new mt;function bb(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function r(m,h){h.color.getRGB(m.fogColor.value,id(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function i(m,h,w,b,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(m,h):h.isMeshToonMaterial?(o(m,h),d(m,h)):h.isMeshPhongMaterial?(o(m,h),u(m,h)):h.isMeshStandardMaterial?(o(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(o(m,h),g(m,h)):h.isMeshDepthMaterial?o(m,h):h.isMeshDistanceMaterial?(o(m,h),y(m,h)):h.isMeshNormalMaterial?o(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?c(m,h,w,b):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ct&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ct&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let w=e.get(h),b=w.envMap,S=w.envMapRotation;b&&(m.envMap.value=b,po.copy(S),po.x*=-1,po.y*=-1,po.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(po.y*=-1,po.z*=-1),m.envMapRotation.value.setFromMatrix4(fP.makeRotationFromEuler(po)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,w,b){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*w,m.scale.value=b*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,w){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ct&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){let w=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function wb(n,e,t,r){let i={},o={},s=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,b){let S=b.program;r.uniformBlockBinding(w,S)}function l(w,b){let S=i[w.id];S===void 0&&(g(w),S=u(w),i[w.id]=S,w.addEventListener("dispose",m));let P=b.program;r.updateUBOMapping(w,P);let T=e.render.frame;o[w.id]!==T&&(f(w),o[w.id]=T)}function u(w){let b=d();w.__bindingPointIndex=b;let S=n.createBuffer(),P=w.__size,T=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,P,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function d(){for(let w=0;w<a;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let b=i[w.id],S=w.uniforms,P=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,D=S.length;T<D;T++){let N=Array.isArray(S[T])?S[T]:[S[T]];for(let E=0,x=N.length;E<x;E++){let A=N[E];if(p(A,T,E,P)===!0){let V=A.__offset,B=Array.isArray(A.value)?A.value:[A.value],j=0;for(let Y=0;Y<B.length;Y++){let G=B[Y],K=y(G);typeof G=="number"||typeof G=="boolean"?(A.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,V+j,A.__data)):G.isMatrix3?(A.__data[0]=G.elements[0],A.__data[1]=G.elements[1],A.__data[2]=G.elements[2],A.__data[3]=0,A.__data[4]=G.elements[3],A.__data[5]=G.elements[4],A.__data[6]=G.elements[5],A.__data[7]=0,A.__data[8]=G.elements[6],A.__data[9]=G.elements[7],A.__data[10]=G.elements[8],A.__data[11]=0):(G.toArray(A.__data,j),j+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,b,S,P){let T=w.value,D=b+"_"+S;if(P[D]===void 0)return typeof T=="number"||typeof T=="boolean"?P[D]=T:P[D]=T.clone(),!0;{let N=P[D];if(typeof T=="number"||typeof T=="boolean"){if(N!==T)return P[D]=T,!0}else if(N.equals(T)===!1)return N.copy(T),!0}return!1}function g(w){let b=w.uniforms,S=0,P=16;for(let D=0,N=b.length;D<N;D++){let E=Array.isArray(b[D])?b[D]:[b[D]];for(let x=0,A=E.length;x<A;x++){let V=E[x],B=Array.isArray(V.value)?V.value:[V.value];for(let j=0,Y=B.length;j<Y;j++){let G=B[j],K=y(G),z=S%P,ie=z%K.boundary,de=z+ie;S+=ie,de!==0&&P-de<K.storage&&(S+=P-de),V.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=K.storage}}}let T=S%P;return T>0&&(S+=P-T),w.__size=S,w.__cache={},this}function y(w){let b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){let b=w.target;b.removeEventListener("dispose",m);let S=s.indexOf(b.__bindingPointIndex);s.splice(S,1),n.deleteBuffer(i[b.id]),delete i[b.id],delete o[b.id]}function h(){for(let w in i)n.deleteBuffer(i[w]);s=[],i={},o={}}return{bind:c,update:l,dispose:h}}var Ac=class{constructor(e={}){let{canvas:t=SE(),context:r=null,depth:i=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=r.getContextAttributes().alpha}else p=s;let g=new Uint32Array(4),y=new Int32Array(4),m=null,h=null,w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=Wn,this.toneMappingExposure=1;let S=this,P=!1,T=0,D=0,N=null,E=-1,x=null,A=new pt,V=new pt,B=null,j=new ke(0),Y=0,G=t.width,K=t.height,z=1,ie=null,de=null,Ee=new pt(0,0,G,K),Ze=new pt(0,0,G,K),gt=!1,$=new Vs,ee=!1,ve=!1;this.transmissionResolutionScale=1;let oe=new mt,Ce=new mt,Fe=new F,Ke=new pt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},it=!1;function Rt(){return N===null?z:1}let C=r;function Fn(_,R){return t.getContext(_,R)}try{let _={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${za}`),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ce,!1),C===null){let R="webgl2";if(C=Fn(R,_),C===null)throw Fn(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let et,tt,Se,xt,ye,M,v,O,q,Z,W,_e,se,fe,ot,J,he,De,Ne,pe,nt,je,_t,I;function ne(){et=new VM(C),et.init(),je=new Mb(C,et),tt=new IM(C,et,e,je),Se=new Eb(C,et),tt.reverseDepthBuffer&&f&&Se.buffers.depth.setReversed(!0),xt=new GM(C),ye=new db,M=new Sb(C,et,Se,ye,tt,je,xt),v=new NM(S),O=new BM(S),q=new qE(C),_t=new TM(C,q),Z=new HM(C,q,xt,_t),W=new WM(C,Z,q,xt),Ne=new jM(C,tt,M),J=new RM(ye),_e=new ub(S,v,O,et,tt,_t,J),se=new bb(S,ye),fe=new pb,ot=new vb(et),De=new CM(S,v,O,Se,W,p,c),he=new xb(S,W,tt),I=new wb(C,xt,tt,Se),pe=new AM(C,et,xt),nt=new zM(C,et,xt),xt.programs=_e.programs,S.capabilities=tt,S.extensions=et,S.properties=ye,S.renderLists=fe,S.shadowMap=he,S.state=Se,S.info=xt}ne();let H=new Sd(S,C);this.xr=H,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let _=et.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=et.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(_){_!==void 0&&(z=_,this.setSize(G,K,!1))},this.getSize=function(_){return _.set(G,K)},this.setSize=function(_,R,U=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=_,K=R,t.width=Math.floor(_*z),t.height=Math.floor(R*z),U===!0&&(t.style.width=_+"px",t.style.height=R+"px"),this.setViewport(0,0,_,R)},this.getDrawingBufferSize=function(_){return _.set(G*z,K*z).floor()},this.setDrawingBufferSize=function(_,R,U){G=_,K=R,z=U,t.width=Math.floor(_*U),t.height=Math.floor(R*U),this.setViewport(0,0,_,R)},this.getCurrentViewport=function(_){return _.copy(A)},this.getViewport=function(_){return _.copy(Ee)},this.setViewport=function(_,R,U,k){_.isVector4?Ee.set(_.x,_.y,_.z,_.w):Ee.set(_,R,U,k),Se.viewport(A.copy(Ee).multiplyScalar(z).round())},this.getScissor=function(_){return _.copy(Ze)},this.setScissor=function(_,R,U,k){_.isVector4?Ze.set(_.x,_.y,_.z,_.w):Ze.set(_,R,U,k),Se.scissor(V.copy(Ze).multiplyScalar(z).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(_){Se.setScissorTest(gt=_)},this.setOpaqueSort=function(_){ie=_},this.setTransparentSort=function(_){de=_},this.getClearColor=function(_){return _.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(_=!0,R=!0,U=!0){let k=0;if(_){let L=!1;if(N!==null){let Q=N.texture.format;L=Q===ps||Q===hs||Q===fs}if(L){let Q=N.texture.type,re=Q===en||Q===Nn||Q===$r||Q===lr||Q===us||Q===ds,ue=De.getClearColor(),me=De.getClearAlpha(),Pe=ue.r,Oe=ue.g,Me=ue.b;re?(g[0]=Pe,g[1]=Oe,g[2]=Me,g[3]=me,C.clearBufferuiv(C.COLOR,0,g)):(y[0]=Pe,y[1]=Oe,y[2]=Me,y[3]=me,C.clearBufferiv(C.COLOR,0,y))}else k|=C.COLOR_BUFFER_BIT}R&&(k|=C.DEPTH_BUFFER_BIT),U&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),De.dispose(),fe.dispose(),ot.dispose(),ye.dispose(),v.dispose(),O.dispose(),W.dispose(),_t.dispose(),I.dispose(),_e.dispose(),H.dispose(),H.removeEventListener("sessionstart",Em),H.removeEventListener("sessionend",Sm),Ci.stop()};function X(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let _=xt.autoReset,R=he.enabled,U=he.autoUpdate,k=he.needsUpdate,L=he.type;ne(),xt.autoReset=_,he.enabled=R,he.autoUpdate=U,he.needsUpdate=k,he.type=L}function ce(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Ve(_){let R=_.target;R.removeEventListener("dispose",Ve),Tt(R)}function Tt(_){Xt(_),ye.remove(_)}function Xt(_){let R=ye.get(_).programs;R!==void 0&&(R.forEach(function(U){_e.releaseProgram(U)}),_.isShaderMaterial&&_e.releaseShaderCache(_))}this.renderBufferDirect=function(_,R,U,k,L,Q){R===null&&(R=Mt);let re=L.isMesh&&L.matrixWorld.determinant()<0,ue=Tb(_,R,U,k,L);Se.setMaterial(k,re);let me=U.index,Pe=1;if(k.wireframe===!0){if(me=Z.getWireframeAttribute(U),me===void 0)return;Pe=2}let Oe=U.drawRange,Me=U.attributes.position,st=Oe.start*Pe,lt=(Oe.start+Oe.count)*Pe;Q!==null&&(st=Math.max(st,Q.start*Pe),lt=Math.min(lt,(Q.start+Q.count)*Pe)),me!==null?(st=Math.max(st,0),lt=Math.min(lt,me.count)):Me!=null&&(st=Math.max(st,0),lt=Math.min(lt,Me.count));let Pt=lt-st;if(Pt<0||Pt===1/0)return;_t.setup(L,k,ue,U,me);let At,at=pe;if(me!==null&&(At=q.get(me),at=nt,at.setIndex(At)),L.isMesh)k.wireframe===!0?(Se.setLineWidth(k.wireframeLinewidth*Rt()),at.setMode(C.LINES)):at.setMode(C.TRIANGLES);else if(L.isLine){let be=k.linewidth;be===void 0&&(be=1),Se.setLineWidth(be*Rt()),L.isLineSegments?at.setMode(C.LINES):L.isLineLoop?at.setMode(C.LINE_LOOP):at.setMode(C.LINE_STRIP)}else L.isPoints?at.setMode(C.POINTS):L.isSprite&&at.setMode(C.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)at.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))at.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let be=L._multiDrawStarts,Wt=L._multiDrawCounts,ut=L._multiDrawCount,Zn=me?q.get(me).bytesPerElement:1,mo=ye.get(k).currentProgram.getUniforms();for(let Sn=0;Sn<ut;Sn++)mo.setValue(C,"_gl_DrawID",Sn),at.render(be[Sn]/Zn,Wt[Sn])}else if(L.isInstancedMesh)at.renderInstances(st,Pt,L.count);else if(U.isInstancedBufferGeometry){let be=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,Wt=Math.min(U.instanceCount,be);at.renderInstances(st,Pt,Wt)}else at.render(st,Pt)};function ht(_,R,U){_.transparent===!0&&_.side===Rn&&_.forceSinglePass===!1?(_.side=Ct,_.needsUpdate=!0,Rc(_,R,U),_.side=In,_.needsUpdate=!0,Rc(_,R,U),_.side=Rn):Rc(_,R,U)}this.compile=function(_,R,U=null){U===null&&(U=_),h=ot.get(U),h.init(R),b.push(h),U.traverseVisible(function(L){L.isLight&&L.layers.test(R.layers)&&(h.pushLight(L),L.castShadow&&h.pushShadow(L))}),_!==U&&_.traverseVisible(function(L){L.isLight&&L.layers.test(R.layers)&&(h.pushLight(L),L.castShadow&&h.pushShadow(L))}),h.setupLights();let k=new Set;return _.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let Q=L.material;if(Q)if(Array.isArray(Q))for(let re=0;re<Q.length;re++){let ue=Q[re];ht(ue,U,L),k.add(ue)}else ht(Q,U,L),k.add(Q)}),b.pop(),h=null,k},this.compileAsync=function(_,R,U=null){let k=this.compile(_,R,U);return new Promise(L=>{function Q(){if(k.forEach(function(re){ye.get(re).currentProgram.isReady()&&k.delete(re)}),k.size===0){L(_);return}setTimeout(Q,10)}et.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Yn=null;function Pr(_){Yn&&Yn(_)}function Em(){Ci.stop()}function Sm(){Ci.start()}let Ci=new md;Ci.setAnimationLoop(Pr),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(_){Yn=_,H.setAnimationLoop(_),_===null?Ci.stop():Ci.start()},H.addEventListener("sessionstart",Em),H.addEventListener("sessionend",Sm),this.render=function(_,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(R),R=H.getCamera()),_.isScene===!0&&_.onBeforeRender(S,_,R,N),h=ot.get(_,b.length),h.init(R),b.push(h),Ce.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),$.setFromProjectionMatrix(Ce),ve=this.localClippingEnabled,ee=J.init(this.clippingPlanes,ve),m=fe.get(_,w.length),m.init(),w.push(m),H.enabled===!0&&H.isPresenting===!0){let Q=S.xr.getDepthSensingMesh();Q!==null&&Dd(Q,R,-1/0,S.sortObjects)}Dd(_,R,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ie,de),it=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,it&&De.addToRenderList(m,_),this.info.render.frame++,ee===!0&&J.beginShadows();let U=h.state.shadowsArray;he.render(U,_,R),ee===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=m.opaque,L=m.transmissive;if(h.setupLights(),R.isArrayCamera){let Q=R.cameras;if(L.length>0)for(let re=0,ue=Q.length;re<ue;re++){let me=Q[re];bm(k,L,_,me)}it&&De.render(_);for(let re=0,ue=Q.length;re<ue;re++){let me=Q[re];Mm(m,_,me,me.viewport)}}else L.length>0&&bm(k,L,_,R),it&&De.render(_),Mm(m,_,R);N!==null&&D===0&&(M.updateMultisampleRenderTarget(N),M.updateRenderTargetMipmap(N)),_.isScene===!0&&_.onAfterRender(S,_,R),_t.resetDefaultState(),E=-1,x=null,b.pop(),b.length>0?(h=b[b.length-1],ee===!0&&J.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Dd(_,R,U,k){if(_.visible===!1)return;if(_.layers.test(R.layers)){if(_.isGroup)U=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(R);else if(_.isLight)h.pushLight(_),_.castShadow&&h.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||$.intersectsSprite(_)){k&&Ke.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Ce);let re=W.update(_),ue=_.material;ue.visible&&m.push(_,re,ue,U,Ke.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||$.intersectsObject(_))){let re=W.update(_),ue=_.material;if(k&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ke.copy(_.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),Ke.copy(re.boundingSphere.center)),Ke.applyMatrix4(_.matrixWorld).applyMatrix4(Ce)),Array.isArray(ue)){let me=re.groups;for(let Pe=0,Oe=me.length;Pe<Oe;Pe++){let Me=me[Pe],st=ue[Me.materialIndex];st&&st.visible&&m.push(_,re,st,U,Ke.z,Me)}}else ue.visible&&m.push(_,re,ue,U,Ke.z,null)}}let Q=_.children;for(let re=0,ue=Q.length;re<ue;re++)Dd(Q[re],R,U,k)}function Mm(_,R,U,k){let L=_.opaque,Q=_.transmissive,re=_.transparent;h.setupLightsView(U),ee===!0&&J.setGlobalState(S.clippingPlanes,U),k&&Se.viewport(A.copy(k)),L.length>0&&Ic(L,R,U),Q.length>0&&Ic(Q,R,U),re.length>0&&Ic(re,R,U),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function bm(_,R,U,k){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[k.id]===void 0&&(h.state.transmissionRenderTarget[k.id]=new xn(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Ar:en,minFilter:cr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));let Q=h.state.transmissionRenderTarget[k.id],re=k.viewport||A;Q.setSize(re.z*S.transmissionResolutionScale,re.w*S.transmissionResolutionScale);let ue=S.getRenderTarget();S.setRenderTarget(Q),S.getClearColor(j),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear(),it&&De.render(U);let me=S.toneMapping;S.toneMapping=Wn;let Pe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),h.setupLightsView(k),ee===!0&&J.setGlobalState(S.clippingPlanes,k),Ic(_,U,k),M.updateMultisampleRenderTarget(Q),M.updateRenderTargetMipmap(Q),et.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Me=0,st=R.length;Me<st;Me++){let lt=R[Me],Pt=lt.object,At=lt.geometry,at=lt.material,be=lt.group;if(at.side===Rn&&Pt.layers.test(k.layers)){let Wt=at.side;at.side=Ct,at.needsUpdate=!0,wm(Pt,U,k,At,at,be),at.side=Wt,at.needsUpdate=!0,Oe=!0}}Oe===!0&&(M.updateMultisampleRenderTarget(Q),M.updateRenderTargetMipmap(Q))}S.setRenderTarget(ue),S.setClearColor(j,Y),Pe!==void 0&&(k.viewport=Pe),S.toneMapping=me}function Ic(_,R,U){let k=R.isScene===!0?R.overrideMaterial:null;for(let L=0,Q=_.length;L<Q;L++){let re=_[L],ue=re.object,me=re.geometry,Pe=k===null?re.material:k,Oe=re.group;ue.layers.test(U.layers)&&wm(ue,R,U,me,Pe,Oe)}}function wm(_,R,U,k,L,Q){_.onBeforeRender(S,R,U,k,L,Q),_.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),L.onBeforeRender(S,R,U,k,_,Q),L.transparent===!0&&L.side===Rn&&L.forceSinglePass===!1?(L.side=Ct,L.needsUpdate=!0,S.renderBufferDirect(U,R,k,L,_,Q),L.side=In,L.needsUpdate=!0,S.renderBufferDirect(U,R,k,L,_,Q),L.side=Rn):S.renderBufferDirect(U,R,k,L,_,Q),_.onAfterRender(S,R,U,k,L,Q)}function Rc(_,R,U){R.isScene!==!0&&(R=Mt);let k=ye.get(_),L=h.state.lights,Q=h.state.shadowsArray,re=L.state.version,ue=_e.getParameters(_,L.state,Q,R,U),me=_e.getProgramCacheKey(ue),Pe=k.programs;k.environment=_.isMeshStandardMaterial?R.environment:null,k.fog=R.fog,k.envMap=(_.isMeshStandardMaterial?O:v).get(_.envMap||k.environment),k.envMapRotation=k.environment!==null&&_.envMap===null?R.environmentRotation:_.envMapRotation,Pe===void 0&&(_.addEventListener("dispose",Ve),Pe=new Map,k.programs=Pe);let Oe=Pe.get(me);if(Oe!==void 0){if(k.currentProgram===Oe&&k.lightsStateVersion===re)return Cm(_,ue),Oe}else ue.uniforms=_e.getUniforms(_),_.onBeforeCompile(ue,S),Oe=_e.acquireProgram(ue,me),Pe.set(me,Oe),k.uniforms=ue.uniforms;let Me=k.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Me.clippingPlanes=J.uniform),Cm(_,ue),k.needsLights=Ib(_),k.lightsStateVersion=re,k.needsLights&&(Me.ambientLightColor.value=L.state.ambient,Me.lightProbe.value=L.state.probe,Me.directionalLights.value=L.state.directional,Me.directionalLightShadows.value=L.state.directionalShadow,Me.spotLights.value=L.state.spot,Me.spotLightShadows.value=L.state.spotShadow,Me.rectAreaLights.value=L.state.rectArea,Me.ltc_1.value=L.state.rectAreaLTC1,Me.ltc_2.value=L.state.rectAreaLTC2,Me.pointLights.value=L.state.point,Me.pointLightShadows.value=L.state.pointShadow,Me.hemisphereLights.value=L.state.hemi,Me.directionalShadowMap.value=L.state.directionalShadowMap,Me.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Me.spotShadowMap.value=L.state.spotShadowMap,Me.spotLightMatrix.value=L.state.spotLightMatrix,Me.spotLightMap.value=L.state.spotLightMap,Me.pointShadowMap.value=L.state.pointShadowMap,Me.pointShadowMatrix.value=L.state.pointShadowMatrix),k.currentProgram=Oe,k.uniformsList=null,Oe}function Dm(_){if(_.uniformsList===null){let R=_.currentProgram.getUniforms();_.uniformsList=Di.seqWithValue(R.seq,_.uniforms)}return _.uniformsList}function Cm(_,R){let U=ye.get(_);U.outputColorSpace=R.outputColorSpace,U.batching=R.batching,U.batchingColor=R.batchingColor,U.instancing=R.instancing,U.instancingColor=R.instancingColor,U.instancingMorph=R.instancingMorph,U.skinning=R.skinning,U.morphTargets=R.morphTargets,U.morphNormals=R.morphNormals,U.morphColors=R.morphColors,U.morphTargetsCount=R.morphTargetsCount,U.numClippingPlanes=R.numClippingPlanes,U.numIntersection=R.numClipIntersection,U.vertexAlphas=R.vertexAlphas,U.vertexTangents=R.vertexTangents,U.toneMapping=R.toneMapping}function Tb(_,R,U,k,L){R.isScene!==!0&&(R=Mt),M.resetTextureUnits();let Q=R.fog,re=k.isMeshStandardMaterial?R.environment:null,ue=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ur,me=(k.isMeshStandardMaterial?O:v).get(k.envMap||re),Pe=k.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Oe=!!U.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Me=!!U.morphAttributes.position,st=!!U.morphAttributes.normal,lt=!!U.morphAttributes.color,Pt=Wn;k.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Pt=S.toneMapping);let At=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,at=At!==void 0?At.length:0,be=ye.get(k),Wt=h.state.lights;if(ee===!0&&(ve===!0||_!==x)){let on=_===x&&k.id===E;J.setState(k,_,on)}let ut=!1;k.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Wt.state.version||be.outputColorSpace!==ue||L.isBatchedMesh&&be.batching===!1||!L.isBatchedMesh&&be.batching===!0||L.isBatchedMesh&&be.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&be.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&be.instancing===!1||!L.isInstancedMesh&&be.instancing===!0||L.isSkinnedMesh&&be.skinning===!1||!L.isSkinnedMesh&&be.skinning===!0||L.isInstancedMesh&&be.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&be.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&be.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&be.instancingMorph===!1&&L.morphTexture!==null||be.envMap!==me||k.fog===!0&&be.fog!==Q||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==J.numPlanes||be.numIntersection!==J.numIntersection)||be.vertexAlphas!==Pe||be.vertexTangents!==Oe||be.morphTargets!==Me||be.morphNormals!==st||be.morphColors!==lt||be.toneMapping!==Pt||be.morphTargetsCount!==at)&&(ut=!0):(ut=!0,be.__version=k.version);let Zn=be.currentProgram;ut===!0&&(Zn=Rc(k,R,L));let mo=!1,Sn=!1,Xs=!1,Et=Zn.getUniforms(),On=be.uniforms;if(Se.useProgram(Zn.program)&&(mo=!0,Sn=!0,Xs=!0),k.id!==E&&(E=k.id,Sn=!0),mo||x!==_){Se.buffers.depth.getReversed()?(oe.copy(_.projectionMatrix),bE(oe),wE(oe),Et.setValue(C,"projectionMatrix",oe)):Et.setValue(C,"projectionMatrix",_.projectionMatrix),Et.setValue(C,"viewMatrix",_.matrixWorldInverse);let mn=Et.map.cameraPosition;mn!==void 0&&mn.setValue(C,Fe.setFromMatrixPosition(_.matrixWorld)),tt.logarithmicDepthBuffer&&Et.setValue(C,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Et.setValue(C,"isOrthographic",_.isOrthographicCamera===!0),x!==_&&(x=_,Sn=!0,Xs=!0)}if(L.isSkinnedMesh){Et.setOptional(C,L,"bindMatrix"),Et.setOptional(C,L,"bindMatrixInverse");let on=L.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Et.setValue(C,"boneTexture",on.boneTexture,M))}L.isBatchedMesh&&(Et.setOptional(C,L,"batchingTexture"),Et.setValue(C,"batchingTexture",L._matricesTexture,M),Et.setOptional(C,L,"batchingIdTexture"),Et.setValue(C,"batchingIdTexture",L._indirectTexture,M),Et.setOptional(C,L,"batchingColorTexture"),L._colorsTexture!==null&&Et.setValue(C,"batchingColorTexture",L._colorsTexture,M));let Un=U.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Ne.update(L,U,Zn),(Sn||be.receiveShadow!==L.receiveShadow)&&(be.receiveShadow=L.receiveShadow,Et.setValue(C,"receiveShadow",L.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(On.envMap.value=me,On.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&R.environment!==null&&(On.envMapIntensity.value=R.environmentIntensity),Sn&&(Et.setValue(C,"toneMappingExposure",S.toneMappingExposure),be.needsLights&&Ab(On,Xs),Q&&k.fog===!0&&se.refreshFogUniforms(On,Q),se.refreshMaterialUniforms(On,k,z,K,h.state.transmissionRenderTarget[_.id]),Di.upload(C,Dm(be),On,M)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Di.upload(C,Dm(be),On,M),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Et.setValue(C,"center",L.center),Et.setValue(C,"modelViewMatrix",L.modelViewMatrix),Et.setValue(C,"normalMatrix",L.normalMatrix),Et.setValue(C,"modelMatrix",L.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let on=k.uniformsGroups;for(let mn=0,Cd=on.length;mn<Cd;mn++){let Ti=on[mn];I.update(Ti,Zn),I.bind(Ti,Zn)}}return Zn}function Ab(_,R){_.ambientLightColor.needsUpdate=R,_.lightProbe.needsUpdate=R,_.directionalLights.needsUpdate=R,_.directionalLightShadows.needsUpdate=R,_.pointLights.needsUpdate=R,_.pointLightShadows.needsUpdate=R,_.spotLights.needsUpdate=R,_.spotLightShadows.needsUpdate=R,_.rectAreaLights.needsUpdate=R,_.hemisphereLights.needsUpdate=R}function Ib(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(_,R,U){ye.get(_.texture).__webglTexture=R,ye.get(_.depthTexture).__webglTexture=U;let k=ye.get(_);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=U===void 0,k.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,R){let U=ye.get(_);U.__webglFramebuffer=R,U.__useDefaultFramebuffer=R===void 0};let Rb=C.createFramebuffer();this.setRenderTarget=function(_,R=0,U=0){N=_,T=R,D=U;let k=!0,L=null,Q=!1,re=!1;if(_){let me=ye.get(_);if(me.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(C.FRAMEBUFFER,null),k=!1;else if(me.__webglFramebuffer===void 0)M.setupRenderTarget(_);else if(me.__hasExternalTextures)M.rebindTextures(_,ye.get(_.texture).__webglTexture,ye.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Me=_.depthTexture;if(me.__boundDepthTexture!==Me){if(Me!==null&&ye.has(Me)&&(_.width!==Me.image.width||_.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(_)}}let Pe=_.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(re=!0);let Oe=ye.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Oe[R])?L=Oe[R][U]:L=Oe[R],Q=!0):_.samples>0&&M.useMultisampledRTT(_)===!1?L=ye.get(_).__webglMultisampledFramebuffer:Array.isArray(Oe)?L=Oe[U]:L=Oe,A.copy(_.viewport),V.copy(_.scissor),B=_.scissorTest}else A.copy(Ee).multiplyScalar(z).floor(),V.copy(Ze).multiplyScalar(z).floor(),B=gt;if(U!==0&&(L=Rb),Se.bindFramebuffer(C.FRAMEBUFFER,L)&&k&&Se.drawBuffers(_,L),Se.viewport(A),Se.scissor(V),Se.setScissorTest(B),Q){let me=ye.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+R,me.__webglTexture,U)}else if(re){let me=ye.get(_.texture),Pe=R;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,me.__webglTexture,U,Pe)}else if(_!==null&&U!==0){let me=ye.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,me.__webglTexture,U)}E=-1},this.readRenderTargetPixels=function(_,R,U,k,L,Q,re){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=ye.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&re!==void 0&&(ue=ue[re]),ue){Se.bindFramebuffer(C.FRAMEBUFFER,ue);try{let me=_.texture,Pe=me.format,Oe=me.type;if(!tt.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=_.width-k&&U>=0&&U<=_.height-L&&C.readPixels(R,U,k,L,je.convert(Pe),je.convert(Oe),Q)}finally{let me=N!==null?ye.get(N).__webglFramebuffer:null;Se.bindFramebuffer(C.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=function(_,R,U,k,L,Q,re){return go(this,null,function*(){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=ye.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&re!==void 0&&(ue=ue[re]),ue){let me=_.texture,Pe=me.format,Oe=me.type;if(!tt.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(R>=0&&R<=_.width-k&&U>=0&&U<=_.height-L){Se.bindFramebuffer(C.FRAMEBUFFER,ue);let Me=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Me),C.bufferData(C.PIXEL_PACK_BUFFER,Q.byteLength,C.STREAM_READ),C.readPixels(R,U,k,L,je.convert(Pe),je.convert(Oe),0);let st=N!==null?ye.get(N).__webglFramebuffer:null;Se.bindFramebuffer(C.FRAMEBUFFER,st);let lt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),yield ME(C,lt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Me),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Q),C.deleteBuffer(Me),C.deleteSync(lt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}})},this.copyFramebufferToTexture=function(_,R=null,U=0){_.isTexture!==!0&&(gi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),R=arguments[0]||null,_=arguments[1]);let k=Math.pow(2,-U),L=Math.floor(_.image.width*k),Q=Math.floor(_.image.height*k),re=R!==null?R.x:0,ue=R!==null?R.y:0;M.setTexture2D(_,0),C.copyTexSubImage2D(C.TEXTURE_2D,U,0,0,re,ue,L,Q),Se.unbindTexture()};let Nb=C.createFramebuffer(),Pb=C.createFramebuffer();this.copyTextureToTexture=function(_,R,U=null,k=null,L=0,Q=null){_.isTexture!==!0&&(gi("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,_=arguments[1],R=arguments[2],Q=arguments[3]||0,U=null),Q===null&&(L!==0?(gi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=L,L=0):Q=0);let re,ue,me,Pe,Oe,Me,st,lt,Pt,At=_.isCompressedTexture?_.mipmaps[Q]:_.image;if(U!==null)re=U.max.x-U.min.x,ue=U.max.y-U.min.y,me=U.isBox3?U.max.z-U.min.z:1,Pe=U.min.x,Oe=U.min.y,Me=U.isBox3?U.min.z:0;else{let Un=Math.pow(2,-L);re=Math.floor(At.width*Un),ue=Math.floor(At.height*Un),_.isDataArrayTexture?me=At.depth:_.isData3DTexture?me=Math.floor(At.depth*Un):me=1,Pe=0,Oe=0,Me=0}k!==null?(st=k.x,lt=k.y,Pt=k.z):(st=0,lt=0,Pt=0);let at=je.convert(R.format),be=je.convert(R.type),Wt;R.isData3DTexture?(M.setTexture3D(R,0),Wt=C.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(M.setTexture2DArray(R,0),Wt=C.TEXTURE_2D_ARRAY):(M.setTexture2D(R,0),Wt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,R.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,R.unpackAlignment);let ut=C.getParameter(C.UNPACK_ROW_LENGTH),Zn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),mo=C.getParameter(C.UNPACK_SKIP_PIXELS),Sn=C.getParameter(C.UNPACK_SKIP_ROWS),Xs=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,At.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,At.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Pe),C.pixelStorei(C.UNPACK_SKIP_ROWS,Oe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Me);let Et=_.isDataArrayTexture||_.isData3DTexture,On=R.isDataArrayTexture||R.isData3DTexture;if(_.isDepthTexture){let Un=ye.get(_),on=ye.get(R),mn=ye.get(Un.__renderTarget),Cd=ye.get(on.__renderTarget);Se.bindFramebuffer(C.READ_FRAMEBUFFER,mn.__webglFramebuffer),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,Cd.__webglFramebuffer);for(let Ti=0;Ti<me;Ti++)Et&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ye.get(_).__webglTexture,L,Me+Ti),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ye.get(R).__webglTexture,Q,Pt+Ti)),C.blitFramebuffer(Pe,Oe,re,ue,st,lt,re,ue,C.DEPTH_BUFFER_BIT,C.NEAREST);Se.bindFramebuffer(C.READ_FRAMEBUFFER,null),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(L!==0||_.isRenderTargetTexture||ye.has(_)){let Un=ye.get(_),on=ye.get(R);Se.bindFramebuffer(C.READ_FRAMEBUFFER,Nb),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,Pb);for(let mn=0;mn<me;mn++)Et?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Un.__webglTexture,L,Me+mn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Un.__webglTexture,L),On?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,on.__webglTexture,Q,Pt+mn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,on.__webglTexture,Q),L!==0?C.blitFramebuffer(Pe,Oe,re,ue,st,lt,re,ue,C.COLOR_BUFFER_BIT,C.NEAREST):On?C.copyTexSubImage3D(Wt,Q,st,lt,Pt+mn,Pe,Oe,re,ue):C.copyTexSubImage2D(Wt,Q,st,lt,Pe,Oe,re,ue);Se.bindFramebuffer(C.READ_FRAMEBUFFER,null),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else On?_.isDataTexture||_.isData3DTexture?C.texSubImage3D(Wt,Q,st,lt,Pt,re,ue,me,at,be,At.data):R.isCompressedArrayTexture?C.compressedTexSubImage3D(Wt,Q,st,lt,Pt,re,ue,me,at,At.data):C.texSubImage3D(Wt,Q,st,lt,Pt,re,ue,me,at,be,At):_.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Q,st,lt,re,ue,at,be,At.data):_.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Q,st,lt,At.width,At.height,at,At.data):C.texSubImage2D(C.TEXTURE_2D,Q,st,lt,re,ue,at,be,At);C.pixelStorei(C.UNPACK_ROW_LENGTH,ut),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Zn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,mo),C.pixelStorei(C.UNPACK_SKIP_ROWS,Sn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Xs),Q===0&&R.generateMipmaps&&C.generateMipmap(Wt),Se.unbindTexture()},this.copyTextureToTexture3D=function(_,R,U=null,k=null,L=0){return _.isTexture!==!0&&(gi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),U=arguments[0]||null,k=arguments[1]||null,_=arguments[2],R=arguments[3],L=arguments[4]||0),gi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,R,U,k,L)},this.initRenderTarget=function(_){ye.get(_).__webglFramebuffer===void 0&&M.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?M.setTextureCube(_,0):_.isData3DTexture?M.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?M.setTexture2DArray(_,0):M.setTexture2D(_,0),Se.unbindTexture()},this.resetState=function(){T=0,D=0,N=null,Se.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}};var qs=class n{boids=[];scene=new Dc;camera=new Ft(75,window.innerWidth/window.innerHeight,.1,1e3);renderer=new Ac;constructor(){for(let e=0;e<10;e++)this.addBoid();this.scene.background=new ke(ke.NAMES.lightblue),this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.position.z=10,this.renderer.setAnimationLoop(()=>{for(let e of this.boids)e.move(this.boids);this.renderer.render(this.scene,this.camera)})}addBoid(){return this.boids.push(new pd(this.scene)),this.boids.length}subtractBoid(){return this.boids[0].remove(this.scene),this.boids.shift(),this.boids.length}get numberOfBoids(){return this.boids.length}get getCamera(){return this.camera}get getRenderer(){return this.renderer}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})};var Md=class n{constructor(e){this.simulationService=e;this.numberOfBoids=e.numberOfBoids}numberOfBoids;addBoid(){this.numberOfBoids=this.simulationService.addBoid()}subtractBoid(){this.numberOfBoids=this.simulationService.subtractBoid()}static \u0275fac=function(t){return new(t||n)(qi(qs))};static \u0275cmp=di({type:n,selectors:[["app-controls"]],decls:6,vars:1,consts:[[1,"btn","btn-success",3,"click"],[1,"btn","btn-error",3,"click"],[1,"self-center","bg-base-200","p-2","text-center","text-xl","font-bold","text-primary"]],template:function(t,r){t&1&&(Xo(0,"button",0),Yi("click",function(){return r.addBoid()}),Wl(1,"Add Boid"),Yo(),Xo(2,"button",1),Yi("click",function(){return r.subtractBoid()}),Wl(3,"Subtract Boid"),Yo(),Xo(4,"p",2),Wl(5),Yo()),t&2&&(B_(5),Lh(" ",r.numberOfBoids,` Boids
`))},encapsulation:2})};var hP=["simulation"],bd=class n{constructor(e){this.simulationService=e}simulationDiv;ngAfterViewInit(){this.simulationDiv.nativeElement.appendChild(this.simulationService.getRenderer.domElement)}simulationResize(e){let t=e.target;this.simulationService.getCamera.aspect=t.innerWidth/t.innerHeight,this.simulationService.getRenderer.setSize(t.innerWidth,t.innerHeight)}static \u0275fac=function(t){return new(t||n)(qi(qs))};static \u0275cmp=di({type:n,selectors:[["app-simulation"]],viewQuery:function(t,r){if(t&1&&gy(hP,5),t&2){let i;Nh(i=Ph())&&(r.simulationDiv=i.first)}},hostBindings:function(t,r){t&1&&Yi("resize",function(o){return r.simulationResize(o)},!1,D_)},decls:2,vars:0,consts:[["simulation",""]],template:function(t,r){t&1&&Xi(0,"div",null,0)},encapsulation:2})};var wd=class n{title="boids";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=di({type:n,selectors:[["app-root"]],decls:2,vars:0,consts:[[1,"fixed","bottom-0","grid","w-screen","grid-flow-col","gap-5","p-5","opacity-50","transition-opacity","hover:opacity-100"]],template:function(t,r){t&1&&Xi(0,"app-controls",0)(1,"app-simulation")},dependencies:[Md,bd],encapsulation:2})};Hy(wd,Ix).catch(n=>console.error(n));
