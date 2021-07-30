/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "8fb46b8147bb82167c46dcfa964b9a77"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "3cc5e4e6d777cfca21c47b161e6e3674"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "28d17cc175989b5b1b5f779d7d0f41cd"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "99dbe0882618d313b71128ee2ee46889"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "9cae4aab78d0333355c887a16528501c"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "35b33a3584a22375a2b017df4581f06a"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "6c96b16330431dcc47128a398f2af80c"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "2e899fec3a6f6392ad5dee9cdc72440f"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "de2ceab3eaf505a66a8eb7b9a385e5af"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "8750aba96f8236544dff1858ee33b470"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "876132c7d3e7ea93f6aa585074df331d"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "d8929d7fe732337c0872f8076a8c9aa2"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "0955b5eb48c558daa82dc8c48ba412b6"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "c7cbb7bc952d83dc77a1a6d0c05d6754"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "aea2046bed9f3a0bf4439877724d8c8a"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "b7398f1644ffda2cb6fd2dd64ad220e8"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "2d94b25434f12bf5cd4365e4ae731e9d"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "5ee2291e9b7fa64e00c63fbc8b3f7b7d"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "945cb2d33daa2bd565e28250ad68ab2a"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "02dd08ab07b1bac80de63d9daa278ecd"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "51063d3a5b23bac41e79fc18798670f9"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "78b549193f127232e9af757606985dab"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "39083a6965eae42dbe100d7ab52cb02c"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "5c4eec3580d11f31c210ff6ee04fbf20"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "dd7ce55790e63e931ab9ef1061e4d377"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "6b3ed64dd16ea208939acde6588cdd0e"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "b1bf4c4fc4a33c84ee22fe18dff52daf"
  },
  {
    "url": "1.x/custom-attributes/add-lookup.html",
    "revision": "a1b6df22c44a24e9fc446432fcb289db"
  },
  {
    "url": "1.x/custom-attributes/index.html",
    "revision": "504d2c6d6c136d8c584d072c48379b64"
  },
  {
    "url": "1.x/custom-attributes/uses.html",
    "revision": "9008bdf7aaad307fb1013591ce8ebe8c"
  },
  {
    "url": "1.x/datagrid/create.html",
    "revision": "e38aa40a8914da3ebc108082f895576a"
  },
  {
    "url": "1.x/datagrid/index.html",
    "revision": "4b775aa1af1133aabdead1b44d22f3d3"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "a64ea945f068170dc5fef2c29404c9f0"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "e3f6bcfa3be40c33c529c12ecb2ce89b"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "5949ea9b3c79400dd0204766cb00fa59"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "138446a60c1d5d8acecf30344ef907d5"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "6420ec39084a3b79f791820d67c2857e"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "11721400c1c891415580a5cb4eb23028"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "5a79e1857b4496bb8313683d0af74f76"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "7eb89604764fe7e9b8b7d0cc7e6729ab"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "c8cd0803969e057835d30e4ea699dcec"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "bc8611cee76b38f47ebe78973cfa53bb"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "db1abaad8c786b81670c6eb77334c156"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "078e189680b295777ff4c1c3f5ef0ef5"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "af83007aca502fa1f32d78fd4dd3cad0"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "80f9b682235e5254cc810d075c2e0775"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "a86b9947518e29ce542a492c97ca3d57"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "7e221d4df63054bcc8c6e609979ae624"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "6a68840dd4a97cc7452222473d55e35b"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "c483b9f1794c58d60b7b29cdb6c9cefa"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "b19e734066ee5fa9ea7ac55001f02731"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "039ec61d386c56a98d3e3caf5274e304"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "70b78d962b59ece994b5ce96a5160be3"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "8ca335ae030ea9ef72e541aa2e8b70e4"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "7a7594df19415b17625144a924d3a56b"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "901deddea569455a5e406d5bd9b6b9f4"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "397b20104c5784b15f87840a1ecf6f6f"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "e836af11b4c366973e2ddf2447999c6f"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "a602c18254ad899209af72ce6ea5eeaf"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "ff32504f70e8a6e8f44e05d66b2ac0e3"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "b72a155851d5e3591c39efb840f834d2"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "b9515e42915680603d582d723cc5632f"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "20d4498272e2e1effd73fa15e48cc8a2"
  },
  {
    "url": "1.x/packages/add-menu.html",
    "revision": "62026248f3fc65c893525b663cd0872a"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "8a1aca7c4496d860fde74b8b9183a2bf"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "626cbe110d2850b9101c37c93fb7a2c5"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "a900301922f359a92e14cd3bdd3852f9"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "7073cfef857a2437cef2a0ed06ffe493"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "494829b24e98ccc03db0391ffea27bc3"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "1f877770eac60e9f402510d96bf4d137"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "4a77cd19d38cb387100be86ee0c37104"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "501165959cb6ab883a7a92ee561108be"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "284ce5b1e50eef620f27d0a17ac706f9"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "a129d4a51ea22d0c62ef673a2cba8fe9"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "85c247a20d6efe8b4f3c078d99dfa05d"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "baad0c8041cfb7eaf32f0f5c1882f92c"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "fb638b0ffe36a9521987e5b4ad66c009"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "10d0ea0f284e9c2d5f2a01a247fb7e85"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "b1c3d4870f0bc80834bba18872eda16b"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "454be163190e3e089df9b5a0845a1c01"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "ac14dda67f038f016b1b8cc719bbc553"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "197295b1a61fd784cfec5bf3539b693b"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "70f156eece1532b3c01e195ece08b28b"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "ed11521674deac81dd47417482e27bd6"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "c08a897659faf721883c967ad7a264a0"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "7d9d3d8577c34e566f579631f5995340"
  },
  {
    "url": "404.html",
    "revision": "911dc4f25037e9c2db2d331196351232"
  },
  {
    "url": "assets/css/0.styles.7e612dfc.css",
    "revision": "229436dddc5541cc57d9d271908e7d30"
  },
  {
    "url": "assets/img/add-attribute.63dfa8ec.png",
    "revision": "63dfa8ec02bbf87ec94cdc20b4790661"
  },
  {
    "url": "assets/img/add-locale-bagisto.b2e2cfb9.png",
    "revision": "b2e2cfb94cf27c4c873e38113fa70aaf"
  },
  {
    "url": "assets/img/admin_social_auth.1f906bf7.png",
    "revision": "1f906bf7aaadd3d1ffa9d1f2a1ecb564"
  },
  {
    "url": "assets/img/arrabic-attribute.4d7a4275.png",
    "revision": "4d7a4275690cfe606cdb2f1babf87cc5"
  },
  {
    "url": "assets/img/bagisto_add_info.78af382e.jpg",
    "revision": "78af382e00c5ed610f08e7dcb25de296"
  },
  {
    "url": "assets/img/bagisto_attribute.a6fc572b.jpg",
    "revision": "a6fc572b5095c9086b4b9594c7627dbb"
  },
  {
    "url": "assets/img/bagisto_cart_add.63562e08.jpg",
    "revision": "63562e08b02018b7b6a8826f9bb124f6"
  },
  {
    "url": "assets/img/bagisto_cart_guest.d853001d.jpg",
    "revision": "d853001da175e958725f6cf956e31e84"
  },
  {
    "url": "assets/img/bagisto_cart_remove_item.3b5df823.jpg",
    "revision": "3b5df82328f5369892e46b182c1fb326"
  },
  {
    "url": "assets/img/bagisto_cart_update.3b860220.jpg",
    "revision": "3b860220a366af90e600fd35c087d67b"
  },
  {
    "url": "assets/img/bagisto_cart.3cc30a8b.jpg",
    "revision": "3cc30a8be1ec377e6a4aa9c4bb1cc4d5"
  },
  {
    "url": "assets/img/bagisto_config_attr.83af48dd.jpg",
    "revision": "83af48ddf4fc985007f39acec9cc37e3"
  },
  {
    "url": "assets/img/bagisto_config.325d4e50.jpg",
    "revision": "325d4e50a5fd49d4ec8a9c447f21a6e6"
  },
  {
    "url": "assets/img/bagisto_move_to_wishlist.092fc8ae.jpg",
    "revision": "092fc8ae6b7ce543f91fcbcb840ebd82"
  },
  {
    "url": "assets/img/bagisto_orders_id.47d67a0d.jpg",
    "revision": "47d67a0d48c7eb4471788608a266ebd0"
  },
  {
    "url": "assets/img/bagisto_orders_no_pag.eb8fd609.jpg",
    "revision": "eb8fd6090b445f1a375c41d22bdb9405"
  },
  {
    "url": "assets/img/bagisto_prod_color.54846a87.jpg",
    "revision": "54846a878f4e58126066ca83a1f698e4"
  },
  {
    "url": "assets/img/bagisto_prod_price_config.1c3285d1.jpg",
    "revision": "1c3285d10a818abb2dca20a777b79258"
  },
  {
    "url": "assets/img/bagisto_prod_price_simple.78ef8f5a.jpg",
    "revision": "78ef8f5ac73bae616e5e0794dfeb7f42"
  },
  {
    "url": "assets/img/bagisto_prod_size.2fdc1d32.jpg",
    "revision": "2fdc1d32ecc5200a7a65d99b44e600fb"
  },
  {
    "url": "assets/img/bagisto_save_address.633cf573.jpg",
    "revision": "633cf57391403cf1df62f8dfe80d6661"
  },
  {
    "url": "assets/img/bagisto_save_order.c2fab81f.jpg",
    "revision": "c2fab81f906b0dda24ab128e2100f0e3"
  },
  {
    "url": "assets/img/bagisto_save_payment.99edb31c.jpg",
    "revision": "99edb31ca6dbf31d3261d528d48f120f"
  },
  {
    "url": "assets/img/bagisto_save_shipping.6c8d23d1.jpg",
    "revision": "6c8d23d1f29b3905c0742e6fe9dc2a03"
  },
  {
    "url": "assets/img/bagisto_ship_order_id.367b77a9.jpg",
    "revision": "367b77a9b47802107f443338b7ff1cfe"
  },
  {
    "url": "assets/img/bagisto_shipments.e6134a4b.jpg",
    "revision": "e6134a4b8b604b1756ab3ef108884406"
  },
  {
    "url": "assets/img/bagisto_wishlist_page.de525699.jpg",
    "revision": "de5256999417cca7f6ab7503a5b109d1"
  },
  {
    "url": "assets/img/catageory-in-arabic.4b55c745.png",
    "revision": "4b55c745b858c4aac3044fa348caf6a7"
  },
  {
    "url": "assets/img/channel-setting-in-bagisto.a7a72cb5.png",
    "revision": "a7a72cb5af650f7e582f8deae80e4f99"
  },
  {
    "url": "assets/img/default-location-calculation-config.ea4a469a.png",
    "revision": "ea4a469a4371daea67d8d9dc060dc002"
  },
  {
    "url": "assets/img/front-end-in-arabic.f7c759e0.png",
    "revision": "f7c759e055265bf9ebd9df156e22c9ab"
  },
  {
    "url": "assets/img/front-end.9aaeb0de.png",
    "revision": "9aaeb0de8e5707aa4afa1845e2fa1f4d"
  },
  {
    "url": "assets/img/github-OAuth-step1.e74d8be1.png",
    "revision": "e74d8be18d45562391def8eabc3f9f05"
  },
  {
    "url": "assets/img/github-OAuth-step3.1c5347e7.png",
    "revision": "1c5347e798d2d4e9f232e821b30a0d71"
  },
  {
    "url": "assets/img/google-OAuth-step1.cdeb34e7.png",
    "revision": "cdeb34e75d4109dc8c732cb2a41f7149"
  },
  {
    "url": "assets/img/google-OAuth-step10.7cf440b2.png",
    "revision": "7cf440b27afcc28b91d0569d0e0574dd"
  },
  {
    "url": "assets/img/google-OAuth-step2.33d3b5d7.png",
    "revision": "33d3b5d7d306652f9ad8145885649684"
  },
  {
    "url": "assets/img/google-OAuth-step3.7cfab527.png",
    "revision": "7cfab527afc801407b13bb1c0080502c"
  },
  {
    "url": "assets/img/google-OAuth-step4.58f07d86.png",
    "revision": "58f07d861b92fdf12e966ef8ec0a2f7d"
  },
  {
    "url": "assets/img/google-OAuth-step6.feabd47b.png",
    "revision": "feabd47b9a5af05843c2bb60b8226e37"
  },
  {
    "url": "assets/img/google-OAuth-step7.21f7d9f6.png",
    "revision": "21f7d9f6ff6babc41c0e032cf963356c"
  },
  {
    "url": "assets/img/google-OAuth-step8.c2178472.png",
    "revision": "c21784723f5897170c0780d4307dbbb1"
  },
  {
    "url": "assets/img/google-OAuth-step9.83e7862b.png",
    "revision": "83e7862bd3d9aa050b4dbd2bded3fec7"
  },
  {
    "url": "assets/img/helloworld-admin-browser-output.58d525cb.png",
    "revision": "58d525cbaf78c5763ac8f557cdd31e9f"
  },
  {
    "url": "assets/img/helloworld-shop-browser-output.036ed5d9.png",
    "revision": "036ed5d98b58f5887a0cde7d6a874bd5"
  },
  {
    "url": "assets/img/hide-item-per-page.0957751e.png",
    "revision": "0957751ed007d6d41ac3b823abc1c8de"
  },
  {
    "url": "assets/img/hide-search.8a46a3b1.png",
    "revision": "8a46a3b123df58c575cbdff854f7e4ef"
  },
  {
    "url": "assets/img/installed-elastic-info.46e47fde.png",
    "revision": "46e47fde533d4982324a07b091943503"
  },
  {
    "url": "assets/img/language-changes.a799195d.png",
    "revision": "a799195df5c2def1f7798b6296eb0659"
  },
  {
    "url": "assets/img/limiting-error-messages.5887bc7c.png",
    "revision": "5887bc7c25f56a6e4e03ead32f873720"
  },
  {
    "url": "assets/img/locale-setup.a0047ee5.png",
    "revision": "a0047ee598bf517ca89e565539e444cc"
  },
  {
    "url": "assets/img/locale-trans.eed57105.png",
    "revision": "eed57105bf11bb1ad460c9e09ec9e207"
  },
  {
    "url": "assets/img/locale.b190a2d4.png",
    "revision": "b190a2d4e2ed61a1a75b829f6af4bdcf"
  },
  {
    "url": "assets/img/lookup-attribute.fc6edb86.png",
    "revision": "fc6edb86b28ea2fdaa0838b639c6f591"
  },
  {
    "url": "assets/img/mail-sample.6aa3d730.png",
    "revision": "6aa3d7304bd852564b76860b7117bdb7"
  },
  {
    "url": "assets/img/product-attributes.0a70e6f9.png",
    "revision": "0a70e6f9379c8319a988f61132055748"
  },
  {
    "url": "assets/img/product-in-arabic.e634c43f.png",
    "revision": "e634c43ff0331dcf5ff91211017c6f1f"
  },
  {
    "url": "assets/img/product-index.a45ce729.png",
    "revision": "a45ce7297692b3170774154331aa5911"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/tab-filters.6a6f9076.png",
    "revision": "6a6f9076e81c04612eaea84c10f0b4c8"
  },
  {
    "url": "assets/img/translation.96b21cfa.png",
    "revision": "96b21cfa473af2e88086d0ccdebb40e4"
  },
  {
    "url": "assets/js/10.32aab1bd.js",
    "revision": "b9860bc9efbed9851b1f09597c9d1e1e"
  },
  {
    "url": "assets/js/11.ae633aa1.js",
    "revision": "689dfc9356252ccb2a42790ce61cb427"
  },
  {
    "url": "assets/js/12.63a756ab.js",
    "revision": "6bc635d70dbe274717aeeb716b10a9e0"
  },
  {
    "url": "assets/js/13.1bd888a9.js",
    "revision": "e42c239de7ddc448c31fa9f07809d0da"
  },
  {
    "url": "assets/js/14.d0e6dddd.js",
    "revision": "c453d7920a021f810138407a3c306f0a"
  },
  {
    "url": "assets/js/15.722c864e.js",
    "revision": "8ce8b16ae5241795cf024f5ec0b80eb1"
  },
  {
    "url": "assets/js/16.9ac2a76b.js",
    "revision": "937665b05cd6ad868e2428162937113b"
  },
  {
    "url": "assets/js/17.60f5b440.js",
    "revision": "d3ae285a8b2eb00e77077ffc8e22e333"
  },
  {
    "url": "assets/js/18.9adb8516.js",
    "revision": "179f2ebd796b45d8ccc88dd77195ecb9"
  },
  {
    "url": "assets/js/19.828215a4.js",
    "revision": "0b1018def18d8f9b8bd1718909e454e7"
  },
  {
    "url": "assets/js/2.d530cad3.js",
    "revision": "7f810f9f0c99b689548df192fef9889c"
  },
  {
    "url": "assets/js/20.5a19eb77.js",
    "revision": "9410cfbb49799dddc7118e818e520f59"
  },
  {
    "url": "assets/js/21.e2f08b60.js",
    "revision": "17d67efb66d71d84782f82c70753ee3d"
  },
  {
    "url": "assets/js/22.cea7bee5.js",
    "revision": "b4fe4f7cbacdbe1297ce69c29c73c2db"
  },
  {
    "url": "assets/js/23.e61e5309.js",
    "revision": "9fc261b9c3fa81fdbba0eddbe742c19c"
  },
  {
    "url": "assets/js/24.7812ad22.js",
    "revision": "c907ba8e4f696c33f848a0fd3f5f1719"
  },
  {
    "url": "assets/js/25.d7cdf3d8.js",
    "revision": "f6fc07f7efedd1682d1c4b25f45f22a4"
  },
  {
    "url": "assets/js/26.27e8c914.js",
    "revision": "0db5a1f44202cdfdf2eea7755e13bfe7"
  },
  {
    "url": "assets/js/27.9f9cdc4d.js",
    "revision": "d2b239f6ccbfa5f10271069e145e9bb1"
  },
  {
    "url": "assets/js/28.bda19e0a.js",
    "revision": "f731d3a8200a1bcb798aa426f988e13e"
  },
  {
    "url": "assets/js/29.756ac005.js",
    "revision": "db0f5eddfa124bb28ac046c8963e3764"
  },
  {
    "url": "assets/js/3.f92e252e.js",
    "revision": "724c74ea7501e6fb477eb408ce136e98"
  },
  {
    "url": "assets/js/30.6cecb75b.js",
    "revision": "234b7687fddc448b5e59177860f8b8c3"
  },
  {
    "url": "assets/js/31.be6cbca2.js",
    "revision": "a5145292f7fd151c4edf43d1365dbc4a"
  },
  {
    "url": "assets/js/32.5a594b32.js",
    "revision": "30285157d0eee531cd2fa11e8946846b"
  },
  {
    "url": "assets/js/33.31bd53ca.js",
    "revision": "549014459889d453106c7b0a44f00499"
  },
  {
    "url": "assets/js/34.4b96eda2.js",
    "revision": "85f709ee91648ed4b637eed287a7b360"
  },
  {
    "url": "assets/js/35.e545a8f5.js",
    "revision": "046c50492d6ef3e7f12987bfdfba9ac6"
  },
  {
    "url": "assets/js/36.cf9e7051.js",
    "revision": "e93b2018acad490de7877ab7f5633617"
  },
  {
    "url": "assets/js/37.6cf3167d.js",
    "revision": "74831f599642ef78f01c789a4e4313a0"
  },
  {
    "url": "assets/js/38.6c68472d.js",
    "revision": "8936d54281fcc3951e5f2139db0d42d0"
  },
  {
    "url": "assets/js/39.64bdd36e.js",
    "revision": "b0e91d742f9d9357ced43cabc9ecf70d"
  },
  {
    "url": "assets/js/4.cc99b832.js",
    "revision": "4c6567fa5622352b40a5ac58aa52ff5d"
  },
  {
    "url": "assets/js/40.75c4d04a.js",
    "revision": "a767989e5a56759bdab580a5624c9e8d"
  },
  {
    "url": "assets/js/41.725d2ee9.js",
    "revision": "dadd9b97821da2e8f8ceafc0a2586dd4"
  },
  {
    "url": "assets/js/42.e7fd0c10.js",
    "revision": "1358d45d2d1ad028840c7eadf7c47bf4"
  },
  {
    "url": "assets/js/43.f3ad1626.js",
    "revision": "e4355e8a72ee2a210ed6ad9ae57f670b"
  },
  {
    "url": "assets/js/44.68ad87c5.js",
    "revision": "b43c5ccdb348d3c8adc1d51d711733a6"
  },
  {
    "url": "assets/js/45.cc57c75b.js",
    "revision": "db7a9739766c0c017095da20b9c95382"
  },
  {
    "url": "assets/js/46.6cedf55c.js",
    "revision": "25a862d2f8ff4bedd0ec6e8b847b64ee"
  },
  {
    "url": "assets/js/47.b1eea64a.js",
    "revision": "de1bc2153f32d212293ee3b696f375ac"
  },
  {
    "url": "assets/js/48.3d8bcea5.js",
    "revision": "0b040fdae671e22f108a75ead01b2345"
  },
  {
    "url": "assets/js/49.ab9e0421.js",
    "revision": "9b8bf0d00d0049e3f8987c927028b695"
  },
  {
    "url": "assets/js/5.79517842.js",
    "revision": "f70dcb529bb6d8316e01ba98881cb802"
  },
  {
    "url": "assets/js/50.777919c2.js",
    "revision": "00ffd4af99c0c2d21fa823d8344371e9"
  },
  {
    "url": "assets/js/51.8000f69e.js",
    "revision": "5b252eed3c9a9405bfc754c41256ccb1"
  },
  {
    "url": "assets/js/52.fec850b0.js",
    "revision": "28e03f6e09781da7c8fcb565173efe77"
  },
  {
    "url": "assets/js/53.e7a49418.js",
    "revision": "a67e4d738d2daff94704ead49bd8767e"
  },
  {
    "url": "assets/js/54.c9a3d2ae.js",
    "revision": "e09e139bdca8e1dacd1294f85ca63a1a"
  },
  {
    "url": "assets/js/55.8340ad55.js",
    "revision": "efc10642f3d2c543cad2ff4dcc63b8fb"
  },
  {
    "url": "assets/js/56.420eb83f.js",
    "revision": "fac45e2f43037e74b8269a9031b4e0c2"
  },
  {
    "url": "assets/js/57.2cc43475.js",
    "revision": "228187514ae9340e05ad880fb76176ca"
  },
  {
    "url": "assets/js/58.d4bc3c85.js",
    "revision": "60ef2d8ede7fe27bc4ff27c0d2010f27"
  },
  {
    "url": "assets/js/59.d51e351a.js",
    "revision": "4f4b8d3cdc810cc5d2f13d5d33007b42"
  },
  {
    "url": "assets/js/6.ba9ae1b3.js",
    "revision": "a8f739d7922ab2030f777871ef45f511"
  },
  {
    "url": "assets/js/60.acc41874.js",
    "revision": "31db3d5245c5e48c7378ce9a885f001a"
  },
  {
    "url": "assets/js/61.8159bfb9.js",
    "revision": "95731eb25f2359347da8bd20fc1760e0"
  },
  {
    "url": "assets/js/62.c5c6db0c.js",
    "revision": "b9290410ca0556d2ea6fad292f722f97"
  },
  {
    "url": "assets/js/63.6bf120eb.js",
    "revision": "fa1ca32ecaf61f269b32be61f46a6b23"
  },
  {
    "url": "assets/js/64.86e3da29.js",
    "revision": "eda0fd70320949ba92a7fc10e224d41a"
  },
  {
    "url": "assets/js/65.63465f7e.js",
    "revision": "ab2be8cf5b269e407ee6de0a54f346dc"
  },
  {
    "url": "assets/js/66.cbd520ed.js",
    "revision": "79e64ad1ed7b0e697d562afa52641c25"
  },
  {
    "url": "assets/js/67.dbea9d3f.js",
    "revision": "8a5e97fd56dcc78d3af33fe14bdb8400"
  },
  {
    "url": "assets/js/68.c05f1fb8.js",
    "revision": "92949a403e9c30883817384252940fd8"
  },
  {
    "url": "assets/js/69.c4097943.js",
    "revision": "dddb98fdb4d6eb381614de23a6bb5120"
  },
  {
    "url": "assets/js/7.b3db6669.js",
    "revision": "67036db1229fd873ae2c744aabe76345"
  },
  {
    "url": "assets/js/70.ff0c3661.js",
    "revision": "1ceed8092b777c5f5d67728b809f9146"
  },
  {
    "url": "assets/js/71.feb354b4.js",
    "revision": "210edc00ccc3e80ae9f6d6cc0869b400"
  },
  {
    "url": "assets/js/72.7ecedc34.js",
    "revision": "5b27fdf467e92a083f84e4ad249f2dc6"
  },
  {
    "url": "assets/js/73.564fe433.js",
    "revision": "5e410852ede52161772c9d0e70114717"
  },
  {
    "url": "assets/js/74.446bc7a5.js",
    "revision": "7acd0ac1c0241368bba63053ed3a6207"
  },
  {
    "url": "assets/js/75.80fb5ee4.js",
    "revision": "a89087e7fc506919ad48bc16d815d57f"
  },
  {
    "url": "assets/js/76.ad6699a4.js",
    "revision": "6d0440670d33648b884c9fe495b18145"
  },
  {
    "url": "assets/js/77.65e64864.js",
    "revision": "c3e7d9c42fd8828822353bc03ded75fe"
  },
  {
    "url": "assets/js/78.e14b8ebb.js",
    "revision": "737ac3a8049f9fbf8226a2af7450aa98"
  },
  {
    "url": "assets/js/79.15dc0f3f.js",
    "revision": "a79c30418b4d5a98e699855f04db8573"
  },
  {
    "url": "assets/js/8.58494e0c.js",
    "revision": "4d405de3d478b1b7fc18ad4062226955"
  },
  {
    "url": "assets/js/80.7473d316.js",
    "revision": "5e9233d041acd7012c66e8ba34bf996f"
  },
  {
    "url": "assets/js/81.9e72e2ec.js",
    "revision": "3680baa904d6718de78d827d26bd8f92"
  },
  {
    "url": "assets/js/82.6167bb9f.js",
    "revision": "c965300035f04f7eff00e42d901bd7bf"
  },
  {
    "url": "assets/js/83.89f9071f.js",
    "revision": "117d928b2566ca9edae34230e5d5bfd7"
  },
  {
    "url": "assets/js/84.638af48b.js",
    "revision": "4944327afb830177e8da99a2655193ac"
  },
  {
    "url": "assets/js/85.e5c6a009.js",
    "revision": "e551a75fa740ac2f4a39b1666b7ec6a1"
  },
  {
    "url": "assets/js/86.0525fd44.js",
    "revision": "31a6b9b0a3494641b754178a0fb4eb5f"
  },
  {
    "url": "assets/js/87.1d4b576d.js",
    "revision": "d6bec2e0b1144a70718af4740dd4c980"
  },
  {
    "url": "assets/js/88.0a48102f.js",
    "revision": "32b67b0e89f28c022465c7f0f1656283"
  },
  {
    "url": "assets/js/89.172ce88d.js",
    "revision": "efd60c119a5814171f47f6bd214d9479"
  },
  {
    "url": "assets/js/9.6eae704b.js",
    "revision": "b021f018a66e400011480f10c7f2bc31"
  },
  {
    "url": "assets/js/90.e97a1732.js",
    "revision": "a4ba8eb98ee31faee74b34ffa8929358"
  },
  {
    "url": "assets/js/91.f21f654b.js",
    "revision": "b3846511a8a7f6ac71a7ab9d7978f2ff"
  },
  {
    "url": "assets/js/92.737d9dc7.js",
    "revision": "cc55bbc7e60f50683e976b64fc1b6a33"
  },
  {
    "url": "assets/js/app.1d9d1db8.js",
    "revision": "f9cca8466b27f90d971cfea742fb045d"
  },
  {
    "url": "index.html",
    "revision": "94841dc47b541ceb8e051b27ad256f5d"
  },
  {
    "url": "logo.svg",
    "revision": "2ed2c72263ceb5866aed4a015f18ce0f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
