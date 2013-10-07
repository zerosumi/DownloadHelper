chrome.extension.onRequest.addListener(function(msg, sender, sendResponse) {
	if(msg.text) {
	
		var textarea = document.getElementById("tmp-clipboard");

		// now we put the message in the textarea
		textarea.value = msg.text;

		// and copy the text from the textarea
		textarea.select();
		document.execCommand("copy", false, null);
	
		alert("批量下载链接已复制入剪切板");
	}
	else {
		alert("没有任何下载链接！");
	}
	// finally, cleanup / close the connection
	sendResponse({});
});
