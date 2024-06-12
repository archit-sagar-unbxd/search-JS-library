import { events } from "../../common/constants";

const setUpInfiniteScroll = function () {
    try {
        return new Promise(() => {

            let {
                url: {
                    pageNoParam: {
                        usePageNo = false
                    } = {},
                } = {},
                pagination: {
                    infiniteScrollTriggerEl
                },
                products: {
                    productItemClass
                }
            } = this.options;

            const paginationType = this.getPaginationType();

            let productsContainer = window;
            if (paginationType === "INFINITE_SCROLL") {
                productsContainer = infiniteScrollTriggerEl
            } else if (paginationType === "CLICK_N_SCROLL") {
                productsContainer = this.options.products.el
            }
            const postLoader = document.querySelector('.UNX-post-loader');
            const preLoader = document.querySelector('.UNX-pre-loader');

            this.individualProductObserver = new IntersectionObserver(entries => {
                debugger
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                            const productIndex = parseInt(entry.target.dataset.prank);

                            let currentUrlPage = this.getCurrentUrlPage();
                            let productsPerPage = this.getProductsPerPage();
                            const currentPage = Math.ceil(productIndex / productsPerPage);
                            if (currentPage !== currentUrlPage) {
                                if (usePageNo) {
                                    this.setPageNoParam(currentPage);
                                } else {
                                    this.setPageNoParam((currentPage - 1) * productsPerPage);
                                }
                        
                            }
                        }
                        })
            }, {
                threshold: [ 0.5, 0.75, 1 ]
            });

            this.preLoaderObserver = new IntersectionObserver(entries => {
                let currentUrlPage = this.getCurrentUrlPage();
                entries.forEach(entry => {
                    if (entry.isIntersecting && !this.state.isLoading && !this.viewState.isInfiniteStarted) {
                        const isPrevPagePresent = usePageNo ? currentUrlPage > 1 : this.getFirstPrank() !== 1;
                        if(isPrevPagePresent){
                            this.preLoaderObserver.disconnect()
                            let productsPerPage = this.getProductsPerPage();
                            this.viewState.isInfiniteStarted = true;
                            let prevPrank;
                            if (usePageNo) {
                                prevPrank = parseInt((currentUrlPage - 2) * productsPerPage, 10);
                            } else {
                                let startPrank = this.getFirstPrank() - productsPerPage - 1;
                                if (startPrank <0) { startPrank = 0}
                                prevPrank = parseInt(startPrank, 10);
                            }
                            this.setPageStart(prevPrank);
                            this.getResults("", true, 'prev');
                        }
                    }
                });
            }, {
                threshold: 0, // Trigger when the element is fully visible in the viewport
                rootMargin: `0px 0px 0px 0px`, // Offset the root margin by the height of the products container
            });

            this.postLoaderObserver = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting && !this.state.isLoading && !this.viewState.isInfiniteStarted ) {
                    const { numberOfProducts } = this.getPaginationInfo() || {};
                    const lastPrank = this.getLastPrank();
                    if (lastPrank < numberOfProducts){
                        this.postLoaderObserver.disconnect();//change - add this
                        this.viewState.isInfiniteStarted = true;
                        this.setPageStart(lastPrank);
                        this.getResults("", true, 'next');
                    }
                }
            }, {
                threshold: 0,
                rootMargin: `0px 0px 0px 0px`
            });


            this.preLoaderObserver.observe(preLoader);
            if (paginationType === 'INFINITE_SCROLL') {
                this.postLoaderObserver.observe(postLoader);
            }
        })
    } catch (err) {
        this.onError('infiniteScroller.js', err, events.runtimeError);
    }

}

export default setUpInfiniteScroll;