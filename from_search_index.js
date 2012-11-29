/*cookie operation
*
* you can operqte the cookie information 
* in php or javascript ,it is very easy.
*
*/
//set the cookie infromation
function setCookie(name,value,days){
	if(days == 0)
	{
		document.cookie = name + "="+ escape (value);
	}
	else
	{
		var exp = new Date(); 
		exp.setTime(exp.getTime() + days*24*60*60*1000);
		document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
	}
}
// get the cookie information
function getCookie(name)      
{
	var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
	if(arr != null) return unescape(arr[2]); return null;
}
//del the cookie information
//take care of the paramer of the "path",the cookie of js is different depend on domain
// so you have better to delete the cookie as what you have set it ,if the domain is the 
// same you should use the "/" which means the current path
function delCookie(name,value,days){
	var exp = new Date(); 
	exp.setTime(exp.getTime() + days*24*60*60*1000);
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+"; path=/"
}
//delay event function 
// can be used like this 
/* 
	var taskSendMsg 	= new DelayedTask(function () {});
	taskSendMsg.delay(time, function () {

	})	
*/
function DelayedTask (fn, scope, args) {
	var me = this, id, call = function () {
		clearInterval(id);
		id = null;
		fn.apply(scope, args || []);
	};
	me.delay = function (delay, newFn, newScope, newArgs) {
		me.cancel();
		fn = newFn || fn;
		scope = newScope || scope;
		args = newArgs || args;
		id = setInterval(call, delay);
	};
	/**  * Cancel the last queued timeout 	 */
	me.cancel = function () {
		if (id) {
			clearInterval(id);
			id = null;
		}
	};
};
// to compatible the ie ,you should deal with the attribute of javascript
function specialDeal()
{
	//key 13 endter 
	//key 38/40 up down 
	// key 32 blank space 
	var key =  (window.event) ? e.which : e.keyCode;

}
 /* prevent the event bubble
 if the function has the arguments 
 you can use like this 
 
	var oEvent = dzhsingleSel.caller.arguments[0];
	stopBubble(oEvent);
 the other scene is that the DOM you traggle the event cause 
 the event parent for example the onchange event if first change 
 and then the click ,and now you can use the following to distinguish:
	var oEvent = chs.caller.arguments[0];
	var ev     =  oEvent  ||  window.event; // 事件 
	var target =  ev.target  ||  ev.srcElement; 
	var dragObj=  target.getAttribute('name');
	 */
function stopBubble(event)
{
	var e = event || window.event;
	if(e.stopPropagation) { 
        e.stopPropagation();
    } else {
        e.cancelBubble = true; 
    }
}
