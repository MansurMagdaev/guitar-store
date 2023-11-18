class Shoping {
    
    handleClear() {
        ROOT_SHOPING.innerHTML = '';
    }
    render() {
        
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog  = '';
        let sumCatalog  = 0;
        
        CATALOG.forEach(({id, name, price}) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shoping__element-name">⚡️ ${name}</td>
                        <td class="shoping__element-price">${price.toLocaleString()}</td>
                    </tr>
                `;
                sumCatalog += price;
            }
            
        });
            

        
        const html = `
            <div class="shoping__container">
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shoping__element-name">💥 Сумма:</td>
                        <td class="shoping__element-price">${sumCatalog.toLocaleString()}</td>
                    </tr>
                </table>
                <div class="shoping__close" onclick="shopingPage.handleClear();"></div>
            </div>

        `
        
        ROOT_SHOPING.innerHTML = html;
    }
}

const shopingPage = new Shoping;