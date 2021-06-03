function textNodesUnder(el) {
	var node, nodes = [], walk=document.createTreeWalker(
		el,
		NodeFilter.SHOW_TEXT,
		{ acceptNode: function(node) {
			if (["SCRIPT", "STYLE"].includes(node.parentNode.nodeName)) {
				return NodeFilter.FILTER_REJECT;
			}
			return NodeFilter.FILTER_ACCEPT;
		} },
		false
	);
	while(node = walk.nextNode()) nodes.push(node);
	return nodes;
}

let elements = textNodesUnder(document.body);
elements.forEach(function(el) {
	el.textContent = el.textContent.replace(/ck/g, "gg");
	el.textContent = el.textContent.replace(/ig/g, "isch");
	el.textContent = el.textContent.replace(/ich/g, "isch");
	el.textContent = el.textContent.replace(/ei/g, "ee");
	el.textContent = el.textContent.replace(/k/g, "g");
	el.textContent = el.textContent.replace(/p/g, "b");
	el.textContent = el.textContent.replace(/t/g, "d");

	el.textContent = el.textContent.replace(/CK/g, "GG");
	el.textContent = el.textContent.replace(/IG/g, "ISCH");
	el.textContent = el.textContent.replace(/ICH/g, "ISCH");
	el.textContent = el.textContent.replace(/EI/g, "EE");
	el.textContent = el.textContent.replace(/K/g, "G");
	el.textContent = el.textContent.replace(/P/g, "B");
	el.textContent = el.textContent.replace(/T/g, "D");

	el.textContent = el.textContent.replace(/Ei/g, "Ee");
});