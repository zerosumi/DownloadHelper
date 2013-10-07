var htmls = document.body.innerHTML.match(/[tT]hunder:\/\/[^\s<>,]*\b/g);
var finals = new Array();
var finalstring = "";
var count = 0;
//alert(htmls.length);
for ( var i = 0; i < htmls.length; i++) {
	if (finals.indexOf(htmls[i]) == -1) {
		finals[count] = htmls[i];
		finalstring = finalstring + "\n" + finals[count];
		count++;
	}
}
//alert(finalstring);
chrome.extension.sendRequest({
	text : finalstring
});

