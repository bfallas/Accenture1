var itenlist = document.getElementsByClassName('itenlist')[0];
var c = itenlist.children.length;
var index=0;

var previousBtn = document.getElementsByClassName('previousBtn')[0];
previousBtn.addEventListener('click',goPrev);
function goPrev () {
	console.log(index);
	index--
	if (index===-1) {
		index=2;
	}
	itenlist.style.left = (index*-800)+'px';
}
var nextBtn = document.getElementsByClassName('nextBtn')[0];
nextBtn.addEventListener('click', goNext)
function goNext () {
	
	console.log(index)
	index++
	if (index===c){
		index=0
		}
	 itenlist.style.left = (-index*800)+'px';
}	
