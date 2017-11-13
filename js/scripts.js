// Łąńcuchy znaków
var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
	dinosaur = 'triceratops';
	dinosaurUpperCased = dinosaur.toUpperCase();
	textCharsAfter = text.replace('Velociraptor', dinosaurUpperCased);
	textShortened = text.substr(0, text.length/2);
console.log(textShortened);