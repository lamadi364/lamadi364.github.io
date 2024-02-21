/*
* this js file is used to support event across the broswer
*/
var EventUtil = {
	appendEvent: function(element, type, handler) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent) {
			element.attachEvent(type, handler);
		} else {
			element["on" + type] = handler;
		}
	},
	
	removeEvent: function(element, type, handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if (element.attachEvent) {
			element.detachEvent(type, handler);
		} else {
			element["on" + type] = null;
		}
	},
	
	getEvent: function(event) {
		return event ? event : window.event;
	},
	
	getTarget: function(evet) {
		return event.target || event.srcElement;
	},
	
	preventDefault: function(event) {
		if (event.preventDefault) {
			return event.preventDefault;
		}
		else {
			return event.returnValue = false;
		}
	},
	
	stopPropagation: function(event) {
		if (event.stopPropagation) {
			return event.stopPropagation;
		}
		else {
			return event.cancelBubble = true;
		}
	},
	
	getRelatedTarget: function(event) {
		if (event.relatedTarget) {
			event.relatedTarget;
		} else if (event.fromElement) {
			event.fromElement;
		}
	},
	
	getTarget: function(event) {
		if (event.target) {
			event.target;
		} else if (event.toElement) {
			event.toElement;
		}
	}
	
};

var ClickEvent = {
	clickOpen: function(cssqueory, url) {
		var targetDiv = document.querySelectorAll(cssqueory);
		EventUtil.appendEvent(targetDiv, "click", function () {
			window.open(url);
		});
	}
};

ClickEvent.clickOpen(".notes", "");