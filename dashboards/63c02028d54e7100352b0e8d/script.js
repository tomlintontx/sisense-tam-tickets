/*
Welcome to your Dashboard's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://sisense.dev/guides/js/extensions
*/


const domObserver = new MutationObserver((_mutationList, observer) => {
    const targetNode = $('.control-freak')[0]
  
    if (targetNode) {
		
      	targetNode.click()
		
    }
});

domObserver.observe(document.body, { childList: true, subtree: true });




$(window).ready(() => {
	
	console.log('window ran')
	
	window.addEventListener("message", function(event) {

		console.log('logic check passed')

		const scrollEle = $('#prism-mainview > div.prism-persistent-mainview-holder.slf-back-secondary > div > div.collapsible-pane.errvil-warpper > div > dashboard > div > div.content');

		scrollEle.scrollTop(scrollEle[0].scrollHeight)

	})
})
