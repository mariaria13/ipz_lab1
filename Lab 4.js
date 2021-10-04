$.ajax({
	url: 'https://random.dog/woof.json',
	success: function (data){
		const tex = document.createTextNode(data.url);
		document.querySelector('#block1').appendChild(tex);
	}
});

$.ajax({
	url: 'https://random.dog/woof.json',
	success: function (data){
		const img = document.createElement('img');
		img.src = data.url;
		img.height = "300";
		document.querySelector('#block2').appendChild(img);
	}//something
});