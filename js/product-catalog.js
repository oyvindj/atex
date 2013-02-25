var overtrekksjakker = [
{	
	name: "Overtrekksjakke Carbon", 
	image: 'images/overtrekksjakke.jpg',
	price: '12.10'
},
{	
	name: "Overtrekksjakke", 
	image: 'images/overtrekksjakke.jpg',
	price: '12.10'
},
{	
	name: "Overtrekksjakke", 
	image: 'images/overtrekksjakke.jpg',
	price: '12.10'
}
];

var overtrekksbukser = [
{
	name: "Overtrekksbukse Carbon", 
	image: 'images/overtrekksbukse.jpg',
	price: '14.10'
},
{
	name: "Overtrekksbukse", 
	image: 'images/overtrekksbukse.jpg',
	price: '14.10'
},
{
	name: "Overtrekksbukse", 
	image: 'images/overtrekksbukse.jpg',
	price: '14.10'
}
];

var onCreate = function( event, ui) {
	var panel = ui.panel;
	if(panel == null) {
		// if the event is an activate event
		panel = ui.newPanel;
	}
	panel.empty();
	var panelId = panel.attr('id');
	var products = overtrekksjakker;
	if(panelId == 'overtrekksjakker') {
		products = overtrekksjakker;
	} else if(panelId = 'overtrekksbukser') {
		products = overtrekksbukser;
	} 

	console.log('on activate...');
	that.template = _.template($('#product').html());
	var div = $(document.createElement('div')).attr({'class':'productrow'}).appendTo(panel);
	var count = 0;
	console.log(products.length + ' products...');
	$.each(products, function(i) {
		if(count == 4) {
			div = $(document.createElement('div')).attr({'class':'productrow'}).appendTo(panel);
			count = 0;
		}
		div.append(that.template(products[i]));
		count++;
	});
	accordion.accordion("refresh");
}

require_template("product");
var that = this;

var accordion = $("#categories");
//var accordionInit = 
accordion.accordion({
  create: onCreate,
  activate: onCreate
});

