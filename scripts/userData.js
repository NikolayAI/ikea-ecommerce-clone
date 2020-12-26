import {getLocalStorage, setLocalStorage} from './storage.js'

export const userData = {
    _wishListData: getLocalStorage('wishlist'),
    _cartListData: getLocalStorage('cartList'),
    get wishList() {
        return this._wishListData
    },
    set wishList(id) {
        if (this._wishListData.includes(id)) {
            const index = this._wishListData.indexOf(id)
            this._wishListData.splice(index, 1)
        } else {
            this._wishListData.push(id)
        }
        setLocalStorage('wishlist', this.wishList)
        console.log(this.wishList)
    },
    get cartList() {
        return this._cartListData
    },
    set cartList(id) {
        let obj = this._cartListData.find(item => item.id === id)
        if (obj) {
            obj.count++
        } else {
            obj = {
                id,
                count: 1
            }
            this._cartListData.push(obj)
        }
        setLocalStorage('cartList', this.cartList)
        console.log(this.cartList)

    }
}