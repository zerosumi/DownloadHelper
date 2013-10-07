var htmls = document.body.innerHTML.match(/http:\/\/[^\s<>]*\b/g);
var finals = new Array();
var finalstring = "";
var count = 0;
//alert(htmls.length);
for ( var i = 0; i < htmls.length; i++) {
	var webdom = htmls[i].split("\/")[2].toLowerCase();
	var getcode = htmls[i].split("\/")[4];
	if (webdom == "u.115.com" || webdom == "115.com") {
		if (finals.indexOf(getcode) == -1) {
			finals[count] = getcode;
			finalstring = finalstring + "\n" + finals[count];
			count++;
		}
	}
}
//alert(finalstring);
chrome.extension.sendRequest({
	text : finalstring
});

