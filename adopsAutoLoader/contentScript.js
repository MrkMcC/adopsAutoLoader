let adopsAutoLoader = function(){
	if ($('div.page-items-container').length && $('a.see-more-items').length) {
		
		let TryLoadingMoreItems = function(){	
			let btnsSeeMore = $('a.see-more-items').filter(function () {
				return this.style.display != 'none'
			});
			
			if (btnsSeeMore.length){
				btnsSeeMore[0].click();
			}
		};
	
		$('.agile-board').bind("DOMSubtreeModified", function() {
			setTimeout(TryLoadingMoreItems, 10);
		});
		
		TryLoadingMoreItems();
	}
};

setTimeout(adopsAutoLoader, 5000);