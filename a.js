function _bodyLoop() {
    if(document.readyState === 'complete'){   
        const currencySwitch = document.querySelector('.block-order_position_book > div > div > div > div > div:nth-child(2) > div > div')
        currencySwitch.click()
        setTimeout(() => {
            const USDJPY = document.querySelector('.block-order_position_book > div > div > div > div > div:nth-child(2) > div > ul > li:nth-child(8) > button')
            USDJPY.click()
        }, 250);

        return;
    }

    // loop logic
    setTimeout(_bodyLoop, 750);
}

if(window.location.pathname === '/bvi-en/lab-education/tools/order-book-position-book-tool/'){
    setTimeout(_bodyLoop, 750);
}
