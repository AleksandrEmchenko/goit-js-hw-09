!function(){var e,t=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),d=document.querySelector("body");t.addEventListener("click",(function(){if(!0===t.disabled)return;t.disabled=!0,e=setInterval((function(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),n.addEventListener("click",(function(){if(!1===t.disabled)return;clearInterval(e),t.disabled=!1})),t.disabled=!1}();
//# sourceMappingURL=01-color-switcher.25f0d21a.js.map