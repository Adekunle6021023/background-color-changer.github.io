
var body = document.getElementsByTagName('body');
var button = document.getElementById('btn');

var color = ['White', 'Yellow', 'Blue', 'Red', 'Green', 'Black', 'Brown','Azure','Ivory','Teal','Silver','Purple','antiquewhite','firebrick','Gray','Orange','Maroon','Charcoal','Aquamarine','Coral','Fuchsia','Wheat','Lime','Crimson','Khaki','Hotpink','Magenta','Olden','Plum','Olive','Cyan']

function colorChange () {
    var randColor = color[Math.floor(Math.random() * color.length)]
    document.body.style.backgroundColor = randColor;
}

button.addEventListener('click', colorChange, false);