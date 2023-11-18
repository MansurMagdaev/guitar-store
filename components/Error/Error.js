class Error {
    
    render() {
        const html = `
            <div class="error__container">
                <div class="error-message">
                    <h3>Нет доступа!</h3>
                    <p>Попрубуйте позже.</p>
                </div>
            </div>    
        `;
        
        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();