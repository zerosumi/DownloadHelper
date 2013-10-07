$(function() {

	$("#115Bulk").click(function() {
		chrome.tabs.executeScript(null, {
			file : "script/script115.js"
		});
	})
	$("#xunleiBulk").click(function() {
		chrome.tabs.executeScript(null, {
			file : "script/scriptXunlei.js"
		});
	})
	$("#emuleBulk").click(function() {
		chrome.tabs.executeScript(null, {
			file : "script/scriptEmule.js"
		});
	})
	$("#magnetBulk").click(function() {
		chrome.tabs.executeScript(null, {
			file : "script/scriptMagnet.js"
		});
	})
	$("#flashgetBulk").click(function() {
		chrome.tabs.executeScript(null, {
			file : "script/scriptFlashget.js"
		});
	})
	$("#qqdlBulk").click(function() {
		chrome.tabs.executeScript(null, {
			file : "script/scriptQqdl.js"
		});
	})
})

