if(window.location.pathname === '/bvi-en/lab-education/tools/order-book-position-book-tool/'){
    setTimeout(() => {
        const currencySwitch = document.querySelector('.block-order_position_book > div > div > div > div > div:nth-child(2) > div > div')
        currencySwitch.click()
        setTimeout(() => {
            const USDJPY = document.querySelector('.block-order_position_book > div > div > div > div > div:nth-child(2) > div > ul > li:nth-child(8) > button')
            USDJPY.click()
        }, 250);
    }, 1500);
}