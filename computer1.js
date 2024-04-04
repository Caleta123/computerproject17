function openNav() {
	if (window.innerWidth <600) {
		document.getElementById("myNav").style.height = "100%";
		document.getElementById("overlayContent").style.display = "block";
		document.getElementById("overlayContent").classList.add("show-overlay");
	}
}

function closeNav() {
	if (window.innerWidth <600) {
		document.getElementById("myNav").style.height = "10%";
		document.getElementById("overlayContent").style.display = "none";
		document.getElementById("overlayContent").classList.remove("show-overlay");
	}
}