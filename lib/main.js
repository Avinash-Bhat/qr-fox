(function() {
	var widgets = require("widget");
	var panels = require("panel");
	var tabs = require("tabs");
	var data = require("self").data;

	var qrPanel = panels.Panel({
		width: 170,
		height: 170,
		contentURL: data.url("QR.html"),
		contentScriptFile: data.url("qr.js")
	});

	widgets.Widget({
		id: "open-clock-btn",
		label: "See Qr",
		contentURL: data.url("icon.png"),
		panel: qrPanel
	});

	qrPanel.on("show",function() {
		qrPanel.port.emit("load-qr", tabs.activeTab.url);
	});
}());
