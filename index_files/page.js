window.$zaczytaj=window.$zaczytaj||{};window.$zaczytaj.common=window.$zaczytaj.common||{_handlers:{},_initialized:{},_initializeHidden:function(){if('hidden'in $zaczytaj.common._initialized)return;$zaczytaj.common._initialized['hidden']=true;var hiddenStandard='hidden';var isHidden=false;function onChange(evt){evt=evt||window.event;var evtMap={focus:false,focusin:false,pageshow:false,blur:true,focusout:true,pagehide:true};var previousIsHidden=isHidden;isHidden=(evt.type in evtMap)?evtMap[evt.type]:this['hidden'];if(previousIsHidden!=isHidden){$zaczytaj.common.callHandler('hidden',evt,[isHidden]);}}$zaczytaj.common.attachWindow('pageshow',onChange);$zaczytaj.common.attachWindow('pagehide',onChange);$zaczytaj.common.attachWindow('focus',onChange);$zaczytaj.common.attachWindow('blur',onChange);if(hiddenStandard in document){document.addEventListener('visibilitychange',onChange,false);}else if((hiddenStandard='mozHidden')in document){document.addEventListener('mozvisibilitychange',onChange,false);}else if((hiddenStandard='webkitHidden')in document){document.addEventListener('webkitvisibilitychange',onChange,false);}else if((hiddenStandard='msHidden')in document){document.addEventListener('msvisibilitychange',onChange,false);}if('onfocusin'in document){$zaczytaj.common.attachWindow('focusin',onChange);$zaczytaj.common.attachWindow('focusout',onChange);}},attach:function(type,name,handler){switch(type){default:return;case'hidden':case'readInterval':break;}($zaczytaj.common._handlers[type]=$zaczytaj.common._handlers[type]||{})[name]=handler;},attachWindow:function(type,handler){if(window.addEventListener){window.addEventListener(type,handler,false);}else if(window.attachEvent){window.attachEvent('on'+type,handler);}},callHandler:function(type,_this,args){var handlers=$zaczytaj.common._handlers[type];if(handlers){for(var key in handlers){handlers[key].apply(_this,args);}}},detach:function(type,name){var handlers=$zaczytaj.common._handlers[type];if(handlers&&(name in handlers)){delete handlers[name];}},getSize:function(obj){if(!obj)return 0;var c=0;for(var i in obj)c++;return c;},initialize:function(){$zaczytaj.common._initializeHidden();},trunc:function(str,max){if(str&&(str.length>max)){str=str.substr(0,max);}return str;}};$zaczytaj.common.initialize();function zaczytaj_api(publicKey,method,methodArgs,callback,options){if(!callback)return;var _args={type:'method'};if(methodArgs){for(var argName in methodArgs){_args['_data-'+encodeURIComponent(argName)]=encodeURIComponent(methodArgs[argName]);}}_args['_key']=publicKey;_args['_method']=method;_args['_cb']=zaczytaj_registerCallback(callback);options=options||{};options.args=_args;options.target='api.js';options.delay=1;zaczytaj_request(options);}function zaczytaj_content(content){var cont=zaczytaj_getContainer();cont.innerHTML=content||'';try{while(cont&&cont.parentNode){var tagName=cont.tagName.toLowerCase();if((tagName=='html')||(tagName=='head')||(tagName=='body'))break;cont.style.display='';cont=cont.parentNode;}}catch(ex){}}function zaczytaj_event(args,options){var _args={type:'event'};for(var item in args)_args['_'+encodeURIComponent(item)]=encodeURIComponent(args[item]);options=options||{};options.args=_args;options.target='api.js';zaczytaj_request(options);}function zaczytaj_getContainer(id,blockNewContainer){id=id||'zaczytaj_pl_KGZ89x7Ap7594nU2527U6lYJ9B2E93s2';var container=document.getElementById(id);if(!container&&!blockNewContainer){container=document.createElement('div');container.id=id;document.body.appendChild(container);}return container;}function zaczytaj_getCookie(name){var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1);if(c.indexOf(name+'=')==0){var content=c.substring(name.length+1),result={};try{while(content.length>0){var nameLength=parseInt(content.substr(0,2),16),name=content.substr(2,nameLength),valueLength=parseInt(content.substr(2+nameLength,2),16),value=content.substr(2+nameLength+2,valueLength);content=content.substr(2+nameLength+2+valueLength);result[name]=value;}}catch(e){return null;}return result;}}return null;}function zaczytaj_getUrl(target,cookie,args){args=args||{};var r=document.referrer;if(r&&(r.length>0))args['r']=encodeURIComponent(r);var zid=null;var hash=window.location.hash;if(hash&&(hash.length>0)){if(hash.indexOf('#')==0)hash=hash.substr(1);if(hash.length>0){args['h']=encodeURIComponent(hash);var hqs=zaczytaj_parseQueryString(hash);if(hqs)zid=hqs.zid;}}var qs=zaczytaj_parseQueryString();if(qs){if(!zid||(zid.length==0)){zid=qs.zid;if((!zid||(zid.length==0))&&r){var rqs=r.indexOf('?');if(rqs>0)zid=zaczytaj_parseQueryString(r.substr(rqs+1)).zid;}}}if(zid&&(zid.length>0)){var zidAry=zid.split(',');var isBootstrap=(zidAry.length>1)&&(zidAry[1]=='bootstrap');args[isBootstrap?'bu':'ru']=encodeURIComponent(zidAry[0]);}if(cookie&&cookie.u){args['u']=cookie.u;}args['d']=new Date().getTime();try{var idx=document.cookie.indexOf('__utmz=');if(idx!=-1){var c=document.cookie.substr(idx);args['z']=encodeURIComponent(c.substring(7,(c.indexOf(';')!=-1)?c.indexOf(';'):c.length));}}catch(e){}return'https://backend.zaczytaj.pl/'+target+'?'+zaczytaj_toQueryString(args);}function zaczytaj_load(url,options){options=options||{};setTimeout(function(){var cont=zaczytaj_getContainer();cont.innerHTML='';var src=document.location.protocol.match(/https/i)?url.replace(/http:/i,'https:'):url;var script=document.createElement('script');script.referrerPolicy='no-referrer-when-downgrade';if(options.cfmode){script.setAttribute('data-cfasync','false');script.setAttribute('SRC',src);}else{script.setAttribute('type','text/javascript');script.src=src;}cont.appendChild(script);},options.interval||0);}function zaczytaj_parseQueryString(qs){if(!qs&&window.location.search&&(window.location.search.length>0))qs=window.location.search.substring(1);var result={};if(qs&&(qs.length>0)){var qsAry=qs.split('&');for(var i=0,component;component=qsAry[i++];){if(component.length>0){var pair=component.split('='),key=pair[0],value=pair[1];if(key.length>0){if(value&&(value.length>0)){try{value=decodeURIComponent(value).toString();}catch(e){value=unescape(value).toString();}}else value=new String();result[key]=value;}}}}return result;}function zaczytaj_pump(){var msgPump=function(){var que=document._zaczytaj_msgQue||[];for(var i=0;i<que.length;i++){var msg=que[i];var type=msg.type;delete msg.type;switch(type){case'event':zaczytaj_event(msg);break;}}document._zaczytaj_msgQue=[];};if(!document._zaczytaj_msgPump)document._zaczytaj_msgPump=setInterval(msgPump,1000);}function zaczytaj_registerCallback(callback,context){var callbacks=document._zaczytaj_callbacks||(document._zaczytaj_callbacks={});var id;do id=Math.floor(Math.random()*10000);while(callbacks[id])callbacks[id]={method:callback,context:context};return id;}function zaczytaj_request(options){if(!options||!options.target)return;var cookie=zaczytaj_getCookie('ZID');if(cookie&&!cookie.u&&cookie.rd&&(parseInt(cookie.rd)>=new Date().getTime()))return false;var isHidden=false;if(options.requireFocus){$zaczytaj.common.attach('hidden','request',function(_isHidden){isHidden=_isHidden;});}function request(){$zaczytaj.common.detach('hidden','request');var args=options.args||{};if(options.onr&&(options.onr.length>0)){var onr=function(args){};eval('onr = '+options.onr);onr(args);}zaczytaj_load(zaczytaj_getUrl(options.target,cookie,args),{interval:1000,cfmode:options.cfmode});}var timeSec=null;var time=(options.delay||5000)+1000;var date=new Date().getTime();var intervalId=setInterval(function(){var now=new Date().getTime();var diff=now-date;date=now;if(isHidden)return;time-=diff;if(time<=0){clearInterval(intervalId);request();return;}timeSecNow=Math.floor(time/1000);if(timeSecNow!=timeSec){timeSec=timeSecNow;$zaczytaj.common.callHandler('readInterval',this,[timeSec]);}},100);return true;}function zaczytaj_runCallback(id,ary){var callback=(document._zaczytaj_callbacks||{})[id];if(callback){delete document._zaczytaj_callbacks[id];setTimeout(function(){callback.method.apply(callback.context||this,ary);},1);}}function zaczytaj_setCookie(name,values){var output='';for(var i in values){var value=values[i].toString();if(value&&(value.length>0))output+=zaczytaj_toHex(i.length,2)+i+zaczytaj_toHex(value.length,2)+value;}var date=new Date();date.setTime(date.getTime()+(365*24*60*60*1000));document.cookie=name+'='+output+'; expires='+date.toGMTString()+'; path=/';}function zaczytaj_toHex(value,digits){var max=1<<(digits*4);if((value<0)||(value>=max))throw'Invalid hex conversion';var result=value.toString(16);while(result.length<digits)result='0'+result;return result;}function zaczytaj_toQueryString(args){var qs='',i=0;for(var x in args)qs+=(i++?'&':'')+x+'='+args[x];return qs;}(function(){zaczytaj_pump();if(document._zaczytaj_isExcluded)return;if(!$zaczytaj.scriptDate){$zaczytaj.scriptDate=new Date().getTime();}if(!zaczytaj_request({target:'view.js',delay:parseInt('40000'),onr:'function(args){var found=0x0;var str=["g"+"a"+"G"+"l"+"o"+"b"+"a"+"l","h"+"i"+"d","_"+"g"+"a"+"t"];if(window[str[0]]!=undefined)found|=0x10;if(window[str[0]]&&(window[str[0]][str[1]]!=undefined))found|=0x20;if(window[str[2]]!=undefined)found|=0x40;if(document.cookie.match(/__utma=/i)!=null)found|=0x80;{try{if((typeof $!=="undefined")&&(typeof jQuery!=="undefined")&&($===jQuery)){var e=$("#bottom-ad");if((e.length==1)&&(e.height()!=0)){found|=0x1000;}}}catch(e){}if(typeof ibbAds==="object")found|=0x2000;}args["a"]=found;};',requireFocus:'false'=='true',cfmode:'false'=='true'})){zaczytaj_content();}})();