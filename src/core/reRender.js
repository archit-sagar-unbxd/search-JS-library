import { events } from "../common/constants";

const reRender = function () {
    const {
        onEvent,
        spellCheck,
        pagination,
        productType,
        searchBoxEl,
        loader,
        breadcrumb,
        productView,
        noResults,
        products
    } = this.options;
    
    const paginationType = this.getPaginationType();
    
    const {
        beforeRender,
        beforeNoResultRender,
        afterNoResultRender,
        afterRender
    } = this.events;
    
    try{
        onEvent(this, beforeRender);
    }catch(error){
        this.onError("reRender", error, events.runtimeError);
    }
    

    if (loader.el) {
        loader.el.innerHTML = ``;
    }
    const results = this.getSearchResults();
    const qParams = this.getQueryParams() || {};
    const query = this.getSearchQuery();
    const noResultCss = "UNX-no-results-wrap";
    const {
        lastAction
    } = this.viewState;

    if (productType === "SEARCH" && searchBoxEl) {
        searchBoxEl.value = this.state.userInput;
    }

    if (productType !== "SEARCH" && searchBoxEl) {
        searchBoxEl.value = "";
    }
    const {
        searchResultsWrapper,
        paginationWrappers,
        breadcrumbWrapper
    } = this;
    
    if (results && results.numberOfProducts === 0) {
       this.handleNoResults();
    } else {
        this.renderProducts();
        
    }
    this.renderFacets();
    this.renderSelectedFacets();
    this.renderBannerUI();
    if (productView.enabled) {
        this.renderProductViewTypeUI();
    }
    this.renderPageSize();
    this.renderSort();

    if (breadcrumb.enabled) {
        breadcrumbWrapper.innerHTML = this.renderBreadCrumbs();
    }
    const suggestion = this.getSpellCheckSuggested();
    if (spellCheck.el) {
        this.renderDidYouMean(suggestion);
    }

    if (lastAction === "pagination") {
        pagination.onPaginate.bind(this)(this.getPaginationInfo());
    }

    if (paginationType !== "INFINITE_SCROLL") {
        paginationWrappers.forEach((pagination) => {
            pagination.innerHTML = this.renderPagination();
        });
    }

    try{
        onEvent(this, afterRender);
    }catch(error){
        this.onError("reRender", error, events.runtimeError);
    }
   


};
export default reRender;
