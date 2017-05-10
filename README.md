# Vue JS Cookie

A Vue plugin for managing cookies.

## Installation

**NPM:**

```
npm install vue-js-cookie
```

Include in the `body` after loading Vue.js and it will automatically hook into Vue.

```
<script src="/node_modules/vue-js-cookie/vue-js-cookie.min.js'"></script>
```

## Usage

You can access this plugin either with `this.$cookie` or `Vue.cookie`.

This package uses the very impressive [JS-Cookie](https://github.com/js-cookie/js-cookie/) package.

```js
// Create a cookie that will expire in 7 days
this.$cookie.set('name', 'value', 7)

// Get a cookie
this.$cookie.get('name') // -> value

// Remove a cookie
this.$cookie.remove('name')
```

# License

Blue Bay Travel Vue JS Cookie is licensed under [The MIT License (MIT)](/LICENSE).
