class Products {
    constructor() {
        this.classNameActive = 'products__element-btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }
    
    handSetLocationStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);
        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }
        headerPage.render(products.length);
    }
    
    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog  = '';
        
        CATALOG.forEach(({id, name, img, price }) => {
            let activeClass = '',
                activeText = '';
            
            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' ' +this.classNameActive;
                activeText = this.labelRemove;
            }
            
            htmlCatalog += `
                <li class="products__element">
                    <span class="products__element-name">${name}</span>
                    <img class="products__element-img" src="${img}">
                    <span class="products__element-price">
                        ⚡️ ${price.toLocaleString()} RUB
                    </span>
                    <button class="products__element-btn${activeClass}" onclick="productsPage.handSetLocationStorage(this, '${id}')">
                        ${activeText}
                    </button>
                </li>  
            `;
        });
    const html = `
        <ul class="products__container">
            ${htmlCatalog}
        </ul>
    `;
    
    ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();


