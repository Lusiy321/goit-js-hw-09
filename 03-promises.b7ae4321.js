!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire4c75;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire4c75=o);var i=o("h6c0i");function r(e,t){return new Promise((function(n,o){var i=Math.random()>.3;setTimeout((function(){i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault();for(var t=e.target.elements,n=t.delay,o=t.amount,a=t.step,c=Number(n.value),l=0;l<o.value;l+=1)r(l,c).then((function(e){var t=e.position,n=e.delay;i.Notify.success("✅ Fulfilled Promise ".concat(t," in ").concat(n,"ms"),{opacity:.8,timeout:500,position:"center-center",cssAnimationDuration:500,backOverlay:!0,backOverlayColor:"rgba(50,220,130,0.2)"})})).catch((function(e){var t=e.position,n=e.delay;i.Notify.failure("❌ Rejected Promise ".concat(t," in ").concat(n,"ms"),{opacity:.8,position:"center-center",timeout:500,backOverlay:!0,cssAnimationDuration:500,backOverlayColor:"rgba(255,85,73,0.2)"})})),c+=Number(a.value);e.target.reset()}))}();
//# sourceMappingURL=03-promises.b7ae4321.js.map