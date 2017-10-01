;(function () {
    var Cookies = typeof require === 'function' ? require('js-cookie') : window.Cookies

    if (!Cookies) {
        throw new Error('[vue-js-cookie] cannot locate js-cookies')
    }

    var VueCookie = {
        install: function (Vue) {
            Vue.prototype.$cookie = this
            Vue.cookie = this
        },
        set: function (name, value, daysOrOptions) {
            var opts = daysOrOptions

            if (typeof daysOrOptions !== 'object') {
                opts = { expires: daysOrOptions }
            }

            return Cookies.set(name, value, opts)
        },
        get: function (name) {
            return Cookies.get(name)
        },
        getJSON: function (name) {
            return Cookies.getJSON(name)
        },
        remove: function (name, opts) {
            Cookies.remove(name, opts)
        }
    }

    if (typeof exports === 'object') {
        module.exports = VueCookie
    } else if (typeof define === 'function') {
        define([], function () {
            return VueCookie
        })
    } else if (window.Vue) {
        window.VueCookie = VueCookie
        Vue.use(VueCookie)
    }
})()
