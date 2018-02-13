/* doT.js */
!function(){"use strict";function e(n,t,r){return("string"==typeof t?t:t.toString()).replace(n.define||c,function(e,t,o,a){return 0===t.indexOf("def.")&&(t=t.substring(4)),t in r||(":"===o?(n.defineParams&&a.replace(n.defineParams,function(e,n,o){r[t]={arg:n,text:o}}),t in r||(r[t]=a)):new Function("def","def['"+t+"']="+a)(r)),""}).replace(n.use||c,function(t,o){n.useParams&&(o=o.replace(n.useParams,function(e,n,t,o){if(r[t]&&r[t].arg&&o){var a=(t+":"+o).replace(/'|\\/g,"_");return r.__exp=r.__exp||{},r.__exp[a]=r[t].text.replace(new RegExp("(^|[^\\w$])"+r[t].arg+"([^\\w$])","g"),"$1"+o+"$2"),n+"def.__exp['"+a+"']"}}));var a=new Function("def","return "+o)(r);return a?e(n,a,r):a})}function n(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}var t,r={name:"doT",version:"1.1.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0,log:!0};r.encodeHTMLSource=function(e){var n={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},t=e?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g;return function(e){return e?e.toString().replace(t,function(e){return n[e]||e}):""}},t=function(){return this||(0,eval)("this")}(),"undefined"!=typeof module&&module.exports?module.exports=r:"function"==typeof define&&define.amd?define(function(){return r}):t.doT=r;var o={start:"'+(",end:")+'",startencode:"'+encodeHTML("},a={start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("},c=/$^/;r.template=function(u,i,d){var s,l,p=(i=i||r.templateSettings).append?o:a,f=0,g=i.use||i.define?e(i,u,d||{}):u;g=("var out='"+(i.strip?g.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):g).replace(/'|\\/g,"\\$&").replace(i.interpolate||c,function(e,t){return p.start+n(t)+p.end}).replace(i.encode||c,function(e,t){return s=!0,p.startencode+n(t)+p.end}).replace(i.conditional||c,function(e,t,r){return t?r?"';}else if("+n(r)+"){out+='":"';}else{out+='":r?"';if("+n(r)+"){out+='":"';}out+='"}).replace(i.iterate||c,function(e,t,r,o){return t?(f+=1,l=o||"i"+f,t=n(t),"';var arr"+f+"="+t+";if(arr"+f+"){var "+r+","+l+"=-1,l"+f+"=arr"+f+".length-1;while("+l+"<l"+f+"){"+r+"=arr"+f+"["+l+"+=1];out+='"):"';} } out+='"}).replace(i.evaluate||c,function(e,t){return"';"+n(t)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,""),s&&(i.selfcontained||!t||t._encodeHTML||(t._encodeHTML=r.encodeHTMLSource(i.doNotSkipEncoded)),g="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+r.encodeHTMLSource.toString()+"("+(i.doNotSkipEncoded||"")+"));"+g);try{return new Function(i.varname,g)}catch(e){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+g),e}},r.compile=function(e,n){return r.template(e,null,n)}}();



! function() {

    /* debounced resize event */
    function debounce(func, wait) {
        var timeout;
        return function() {
            var context = this;
            var args = arguments;
            var later = function() {
                timeout = null;
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    var debounceClassName = debounce(function() {
        //document.documentElement.classList.add("loaded");
    }, 100);

    include = function(theUrl, target, arr) {
        var wW = window.innerWidth;
        var _url = theUrl;
        var url = theUrl;
        var i = 0;
        var j = 0;
        if (arr) {
            j = arr.length;
        }
        while (i < j) {
            if (wW > arr[i]) {

                var mime = _url.lastIndexOf('.');
                var url = _url.substring(0, mime+1) + arr[i] + _url.substr(mime);
            }
            i++;
        }

        var _target = document.querySelector("script[jm-name=" + target + "]:not(.accounted)");

        _target.style.display = "block";
        _target.style.color = "transparent";
        _target.style.height = "100vh";


        if (_target.hasAttribute("jm-lazy")) {
            var offset = _target.getAttribute("jm-lazy") || 100;
            var wH = window.innerHeight;
            var ps = _target.getBoundingClientRect().top - wH - offset;

            function qwqw(targ, position, windowOffset, windowHeight) {
                if (position <= 0) {
                    var xmlhttp = new XMLHttpRequest();
                    xmlhttp.onreadystatechange = function() {
                        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                            bob(targ, xmlhttp.responseText, url);

                        }
                    }
                    xmlhttp.open("GET", url, true);
                    xmlhttp.send();
                } else {


                    window.addEventListener("scroll", function vvv(e) {
                        newPS = targ.getBoundingClientRect().top - windowHeight - windowOffset;
                        if (newPS <= 0) {
                            window.removeEventListener("scroll", vvv);
                            var xmlhttp = new XMLHttpRequest();
                            xmlhttp.onreadystatechange = function() {
                                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                                    bob(targ, xmlhttp.responseText, url);

                                }
                            }
                            xmlhttp.open("GET", url, true);
                            xmlhttp.send();
                        }
                    })

                }
            }
            qwqw(_target, ps, offset, wH);

        } else if (_target.hasAttribute("jm-hash")) {

            _target.style.display = "none";

            var _hash = _target.getAttribute("jm-name");

            // get matching anchor

            var matchingAnchor = document.querySelectorAll("a[jm-hash=" + _hash + "]");

            // attach listener

            matchingAnchor.forEach(function(element) {
                element.addEventListener("click", function xxx(e) {

                    // remove event listener

                    element.removeEventListener("click", xxx);

                    // load on click

                    var xmlhttp = new XMLHttpRequest();
                    xmlhttp.onreadystatechange = function() {
                        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                            bob(_target, xmlhttp.responseText, url, element);
                        }
                    }
                    xmlhttp.open("GET", url, true);
                    xmlhttp.send();


                })
            });


        } else {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                    bob(_target, xmlhttp.responseText, url);

                }
            }
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        }
    }

    function scriptCheck() {
        var scripts = document.querySelectorAll("script:not(.accounted)");
        scripts.forEach(function(element) {
            element.classList.add('accounted');
        });
    }



    function scriptAdd(youarell) {
        var addScripts = document.querySelectorAll("script:not(.accounted)");
        addScripts.forEach(function(element) {
            var newScript = document.createElement("SCRIPT");
            newScript.innerHTML = element.innerHTML;
            if (element.hasAttribute("src")) {
                newScript.setAttribute("src", element.getAttribute("src"));
            }
            //newScript.setAttribute("data-jxy-injected-script-from", youarell);
            document.head.appendChild(newScript);
        });
    }


    function bob(outer, res, lru, eleme) {
        /* json data */

        if (outer.hasAttribute("jm-data")) {

            var jsonData = outer.getAttribute("jm-data");
            if (jsonData.indexOf("{") != -1) {
                var dotted = doT.template(res);
                res = dotted(JSON.parse(jsonData));
                scriptCheck();

                outer.outerHTML = res;

                scriptAdd(lru);
                debounceClassName();
            } else {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        var dotted = doT.template(res);
                        res = dotted(JSON.parse(xmlhttp.responseText));

                        scriptCheck();

                        outer.outerHTML = res;

                        scriptAdd(lru);
                        debounceClassName();

                    }
                }
                xmlhttp.open("GET", jsonData, true);
                xmlhttp.send();
            }
        } else {

            scriptCheck();

            outer.outerHTML = res;

            scriptAdd(lru);
            debounceClassName();
        }

    }

    function fullReplace(theUrl) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                document.documentElement.innerHTML = xmlhttp.responseText;
                var addScripts = document.querySelectorAll("script:not([src$='jam.js']):not([src$='jam.min.js'])");
                addScripts.forEach(function(element) {
                    var newScript = document.createElement("SCRIPT");
                    newScript.innerHTML = element.innerHTML;
                    if (element.hasAttribute("src")) {
                        newScript.setAttribute("src", element.getAttribute("src"));
                    }
                    document.head.appendChild(newScript);
                });
            }
        }
        xmlhttp.open("GET", theUrl, true);
        xmlhttp.send();
    }

    function clickedOn (el) {
        while (el) {
            if (el.tagName === 'A') {
                return el.href;
            }
            el = el.parentElement;
        }
    }

    /*
        var anchs = document.querySelectorAll("a");
        anchs.forEach(function(ele) {
            ele.addEventListener("click", function(e) {
                e.preventDefault();
                e = e || window.event;
                var targ = e.target || e.srcElement;
                if (targ.href && targ.href.indexOf("#") == -1) {
                    var page = targ.href;
                    fullReplace(page);
                    history.pushState(null, null, targ.href);
                }
            })
        })

      */


    window.addEventListener("click", function(e) {
        var _this = clickedOn(e.target);
        if (_this){
            e.preventDefault();
        }
        if (_this && _this.indexOf("#") == -1) {
            //document.documentElement.classList.remove("loaded");
            //document.documentElement.classList.add("loading");
            fullReplace(_this);
            history.pushState(null, null, _this);
        }
    });



    // turned off reload-on-resize for now

    // function debouncedResize(a,b){
    // return window.addEventListener("resize",function(){
    //   clearTimeout(b),
    //   b = setTimeout(a,250)
    // }),a
    // }
    // debouncedResize(function(){
    //     // TODO
    //     // fullreplace only if a breakpoint is crossed
    //     fullReplace(window.location.href);
    // });


    // back/forward button functionality

    window.addEventListener("popstate", function(e) {
        //document.documentElement.classList.remove("loaded");
        //document.documentElement.classList.add("loading");
        fullReplace(window.location.href);
    });

}();
