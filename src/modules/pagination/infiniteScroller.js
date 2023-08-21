// function getScrollXY() {
//     var scrOfX = 0;
//     var scrOfY = 0;
//     if (typeof (window.pageYOffset) == 'number') {
//         //Netscape compliant
//         scrOfY = window.pageYOffset;
//         scrOfX = window.pageXOffset;
//     } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
//         //DOM compliant
//         scrOfY = document.body.scrollTop;
//         scrOfX = document.body.scrollLeft;
//     } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
//         //IE6 standards compliant mode
//         scrOfY = document.documentElement.scrollTop;
//         scrOfX = document.documentElement.scrollLeft;
//     }
//     return [ scrOfX, scrOfY ];
// }

// // update the start position in the URL
// const updatePageStart = function (context, page) {
//     const autoScrollParams = context.getAutoScrollParams();
//     const rows = context.options.pagination.usePageAndCount? parseInt(autoScrollParams.get('count')) : parseInt(autoScrollParams.get('rows'));
//     context.setPageStart((page - 1) * rows);
//     if(context.options.pagination.usePageAndCount){
//         autoScrollParams.set('page', page);
//     } else {
//         autoScrollParams.set('start', (page - 1) * rows);
//     }
    
//     history.replaceState(null, null, context.urlSearchParamsToStr(autoScrollParams));
// }

// // callback on page scroll 
// const onInfiniteScroll = function () {
//     const scrollTop = getScrollXY()[ 1 ];
//     const rect = this.options.pagination.infiniteScrollTriggerEl.getBoundingClientRect();
//     // check if the products container is visible in the viewport and height is initialized
//     if (this.productContainerHeight != 0 && (rect.bottom > 0 || rect.top < window.innerHeight)) {
//         const autoScrollParams = this.getAutoScrollParams();
//         const page = Math.ceil(scrollTop / this.productContainerHeight) + this.initialPage - 1;
//         let start = 0, rows = 0;

//         if(this.options.pagination.usePageAndCount){
//             start = (parseInt(autoScrollParams.get('page')) - 1) * parseInt(autoScrollParams.get('count'));
//             rows = parseInt(autoScrollParams.get('count'));
//         }else {
//             start = parseInt(autoScrollParams.get('start'));
//             rows = parseInt(autoScrollParams.get('rows'));
//         }
//         // const start = parseInt(autoScrollParams.get('start')) || 0;
//         // // const rows = parseInt(autoScrollParams.get('rows')) || 0;
//         // const rows = this.options.pagination.usePageAndCount? parseInt(autoScrollParams.get('count')) : parseInt(autoScrollParams.get('rows'));
//         const elHeight = document.getElementById('searchResultsWrapper').clientHeight || 0;
//         let currentProducts = 0;
//         let totalProducts = 0;
//         const productResponse = window.unbxdSearch.state.responseObj.response || {};
//         if(productResponse){
//             currentProducts = (productResponse.products) ? productResponse.products.length : 0;
//             totalProducts = productResponse.numberOfProducts || 0;
//         }

//         if (scrollTop + window.innerHeight >= elHeight - this.options.pagination.heightDiffToTriggerNextPage &&
//             scrollTop + window.innerHeight < elHeight &&
//             currentProducts < totalProducts &&
//             !this.state.loading) {
//             // fetch next page when user scrolls to the bottom of threshold zone
//             updatePageStart(this, page + 1);
//             this.viewState.lastAction = "next_page_loaded";
//             this.renderNewResults('next');
//         } else if (scrollTop <= 0 && page < this.initialPage && !(page < 1) && !this.state.loading) {
//             // fetch previous page
//             updatePageStart(this, page)
//             this.viewState.lastAction = "prev_page_loaded";
//             this.initialPage = this.initialPage - 1;
//             this.renderNewResults('prev');
//         }

//         if ((start / rows) + 1 != page && page != 0) {
//             // update page number in the URL as user scrolls up and down
//             updatePageStart(this, page);
//         }
//     }
// }
// export default onInfiniteScroll;
