const SELECTORS = {
    VIEW_CART_ANDROID: '//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView',
    EMPTY_CART_ANDROID: '//android.widget.TextView[@text="Go Shopping"]',
    VIEW_CART_IOS: '//xyz',
    EMPTY_CART_IOS: '//XYZ',
};


const cartScreen = {
    get cartButton() {        
        //This will check the platform and based on that it will fetch the appropriate selector
        return $(driver.isAndroid ? SELECTORS.VIEW_CART_ANDROID: SELECTORS.VIEW_CART_IOS);
    },

    get goShopping() {
        return $(driver.isAndroid ? SELECTORS.EMPTY_CART_ANDROID: SELECTORS.VIEW_CART_IOS);
    }
}

module.exports = {cartScreen}