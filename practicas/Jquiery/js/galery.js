
var slider = function(itemList) {
	this.i = 0;
	this.itemList = itemList;
	this.itemList_Elements = this.itemList.children().length;
	this.itemList = $('.itemList')
	this.previousBtn = $('.previousBtn');
	this.nextBtn = $('.nextBtn')
}


slider.prototype = {
	constructor: slider,
	goPrev: function  () {
		console.log(this.i);
		this.i--;
		if (this.i===-1) {
			this.i=3;
		};
		this.itemList.css({
			'left': (this.i*-800)+'px'
		});
	},

	goNext: function () {
		console.log(this.i);
		this.i++
		if (this.i===this.itemList_Elements){	
		this.i= 0;
		};
		this.itemList.css({
			'left': (this.i*-800)+'px'
		});
	}
};


var ob_slider = new slider ($('.itemList'));
ob_slider.nextBtn.click(function(){
	ob_slider.goNext();
})	
ob_slider.previousBtn.click(function(){
	ob_slider.goPrev();
})
