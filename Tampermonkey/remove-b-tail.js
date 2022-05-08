// ==UserScript==
// @name         remove-b-tail
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.bilibili.com/read/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hibbard.eu
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    HTMLDivElement.prototype.realAddEventListener = HTMLAnchorElement.prototype.addEventListener;
    HTMLDivElement.prototype.addEventListener = function(a,b,c){
        if(a =="copy") return;
        return this.realAddEventListener(a,b,c);
    };
})();