function render() {
    const productsStore = localStorageUtil.getProducts();
    headerPage.render(productsStore.length);
    
    productsPage.render();

}

spinnerPage.render()

setTimeout(() => {
    spinnerPage.handleClear()
    render()
}, 1000)

