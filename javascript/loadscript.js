
const SCRIPT_PATH = "/blog/javascript/"

var scriptList = [
	"click_to",
	"event_util"
]

function loadScript(scriptList) {
	let i
	let len = scriptList.length;
	for (i=0; i<len; i++) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src =  SCRIPT_PATH + scriptList[i] + ".js";
	document.head.appendChild(script);
	}
}

console.log("loading");
loadScript(scriptList);





	
