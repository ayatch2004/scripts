if(window.location.pathname === '/bvi-en/lab-education/tools/order-book-position-book-tool/'){
    setTimeout(() => {
        const currencySwitch = document.querySelector('.block-order_position_book > div > div > div > div > div.lw-mb-6.lw-mt-12.lw-w-full > div > div')
        currencySwitch.click()
        setTimeout(() => {
            const USDJPY = document.querySelector('.block-order_position_book > div > div > div > div > div.lw-mb-6.lw-mt-12.lw-w-full > div > ul > li:nth-child(8) > button')
            USDJPY.click()
        }, 250);
    }, 1250);
}
