const SELECTORS = {
    VIEW_CART_ANDROID: '"//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView"',
    EMPTY_CART_ANDROID: '//android.widget.TextView[@text="Go Shopping"]',
};


class cartScreen {
    get cartButton() {
        return $(SELECTORS.VIEW_CART_ANDROID);
    }

    get goShopping() {
        return $(SELECTORS.EMPTY_CART_ANDROID);
    }
}

//export default new cartScreen();
module.exports = class cartScreen {
}

