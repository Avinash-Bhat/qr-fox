(function() {
	var img = document.getElementsByTagName("img")[0],
		loading = "";
		
	self.port.emit("init", function(data) {
		loading = data.loading;
	});
	
	self.port.on("load-qr", function(content) {
		var url = "http://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=" + content;
		if(img.src !== url) {
			img.style.backgroundImage = loading;
			img.src = url;
		}
	});
}());
