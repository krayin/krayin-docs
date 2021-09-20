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
    "revision": "89baddb8e45e56da7b14d1b726549b32"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "344cc31e2d42703f33ad737667e9c115"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "7eb8334923bb7b60099df157e0b22996"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "0ebe471cb433d2bf1288a828b2bcc9f6"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "4575b7173858c60a16a3967084104b50"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "ed3ccc3b660ea6d54b673285cf84a89c"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "b37fc0fbb063096da02b1f574d131d68"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "ada95efe8a6ee0056e9eb2d369ee3f12"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "aaef368bd494dcede0855dacd6d2a14a"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "4a0a5a8d4b33dbbcd781c76563ea18dd"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "5297b0645840199f785f1c693b9626dc"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "ee134601548294588f5d5dfa9bd7b169"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "ddef0c02976f74821f370a781b3fb38c"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "02f5837ee800d80dcc1bea12df691c37"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "49ee7d43b75f015fb3e3bdfea24cb734"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "3fd6abe7e24bbd099867b2c693dd43c6"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "62fedc856d3e93e83741684d651f47ee"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "108dc734ac8ff9b556d94bb52dc1c77a"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "1bdbaecedfc1295675ecb1aaddd08569"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "49718538d2b1631fc5a4aec139a4a5a3"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "31990c3a29e831bb93ec8f7ca32482f8"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "f87e9c07bb0a3fd25cc48a1b1629fc8b"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "d83e89ee36df6397149d45c275157275"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "f5737e0ee9f935903e7cc7ea7e6b1376"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "2a82082e21c79e10cbb311212035bcad"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "fc467c352e038280d8a553d08c4a287e"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "0b86096a95ae20077bc7e9e42d70f9a2"
  },
  {
    "url": "1.x/custom-attributes/add-lookup.html",
    "revision": "26b67ce8c87621f275efa24bbccee6e2"
  },
  {
    "url": "1.x/custom-attributes/index.html",
    "revision": "1941bcef9b45cafad727371d2bd5291e"
  },
  {
    "url": "1.x/custom-attributes/uses.html",
    "revision": "2f80e9248de361597f839b6e9b1486d0"
  },
  {
    "url": "1.x/datagrid/create.html",
    "revision": "c2ba001171300532d8e0739172c04c2f"
  },
  {
    "url": "1.x/datagrid/index.html",
    "revision": "4fb304fa814240d81e4fb86ac144a17b"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "00bcf7158c95ec4608ee57decd2a1b7a"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "85b24438d513eb9e0b263f2e6795ba73"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "f55c1c65495694bacbd80dc51ac46ec5"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "54de00e13c2e9a3aa8c638c9e86ed65e"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "11fbac88f7fefd78cd19a80ede949374"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "508586f6fde376ed64ad2c4c7c66afb0"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "f50ffaefdd34c2c31886c1ac4b20c394"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "54f0517e387c129cd786fff5b3aabdda"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "8480f30f6282d4f352951c95dbaa2009"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "bf5ddb5f168da3db88fb8da824eb135b"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "adf4081fe2d54114416e015e79ee7f51"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "8a057f9117879c3841552379550f4f15"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "d0325b1792ecd833f8c33045194c9571"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "2c69e3e2bd19bb4835def6e8441a56d9"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "d24b50b3d4efe98ed884737eaf81bfcc"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "1b34c6ead118842f16910efa8db863ea"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "4d7babaff08e5c11e5b244132b905252"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "e34b860d6f7556a8ea36866e88ef5a9a"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "1c24ebe2350e4d58f302c03bd9fa3ffd"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "be8a1201eaebb643bfb9e0e16e3467d3"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "0567b268dbe68bcf128f3bb5ab8691cb"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "25b29f19ba6e0df16c98d9ebde4efbac"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "ef2b2e070703c8d1ce411650fb0fd550"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "ed49f04a97d40ca165e0e18de33959ad"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "d7f3ae7387fc4debadea7e41b1a1d14d"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "9afc0f4f01ac266f7771b8a5f8eae95e"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "dbfacfbee7acd51fd28dde9cc1f2025d"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "91a8fb0b9f22cd29e64aba1e441a283b"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "40c852845c685e22dcf5840eb8ee67e3"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "5d82a79ebf989ad61f81c642ce5e2064"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "e5237526864d2f203df03e6932683088"
  },
  {
    "url": "1.x/packages/add-menu.html",
    "revision": "aee4934a8272bbed63eac18042f5f893"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "57a84973151aeeee4792792a47f62c43"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "cccab074af85d5a63f7539093f7391a9"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "b6dab3652e2151da501d87775e57a52a"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "d6c0608bd80151a72e662c119c2163e8"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "21a635aa022d698ca90428b53d0bca38"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "46b78937efbfd5a4eb5cc1338209ff8f"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "761b63bcf48c1b0f55e190ed0711a1d5"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "581f54b7547e2e170037f33c4fbf53f2"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "1a55c455837dd52af8cce0db0ec651f3"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "a776fac2ec0ffa8947d3db4d1838e018"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "9dc58f815a387a879cc647e0f0daa64f"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "3e23c95dfccee283ceb387f49e461034"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "b8c41aca1d10a86ac1be2c39d891326d"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "3136613edcb301ba19016349e233f76f"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "39861f607ac4e8217ddfe4f4e3a62ac6"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "e2c01a651a186c24890127747c8008cc"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "a543ba99e4f6c638f2953cb8aabdce9b"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "49de3b662d60868b3c10c64eb557f1d4"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "c6a4f1541fbea8e470ebbe209c76ab96"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "83e7c332e1a046c634fc7ef41717293d"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "551bdf123f15fa52acb7a81b775973cb"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "05a1c2f990d2a3071b3b141158b59f4e"
  },
  {
    "url": "404.html",
    "revision": "2d709efbe899941c9e35ab322dd5ef99"
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
    "url": "assets/js/11.aa08d86f.js",
    "revision": "14bc3d5085da834e3a0b8f98bb81386a"
  },
  {
    "url": "assets/js/12.73591cfd.js",
    "revision": "b8a731143925aa7a9239547c8f19065f"
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
    "url": "assets/js/16.d69a6490.js",
    "revision": "51d1d6c2022c5c109af743b6f8ac4959"
  },
  {
    "url": "assets/js/17.45f75b96.js",
    "revision": "db053b994cd96f20a39386b586ae549a"
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
    "url": "assets/js/22.d37feb7b.js",
    "revision": "cfdfa4d141ccc370a07e3ef7ed1f2a40"
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
    "url": "assets/js/39.52cbd3c8.js",
    "revision": "0e90d632883e4bf43da9a795d4f6b562"
  },
  {
    "url": "assets/js/4.cc99b832.js",
    "revision": "4c6567fa5622352b40a5ac58aa52ff5d"
  },
  {
    "url": "assets/js/40.e77568a0.js",
    "revision": "800101e4e246ea220ea7e2a8a463bee5"
  },
  {
    "url": "assets/js/41.00210a13.js",
    "revision": "4ec574954426cb761240b5e7dd4174fe"
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
    "url": "assets/js/6.24736215.js",
    "revision": "ebdd933d3e333686d7a72dea01ceaa13"
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
    "url": "assets/js/69.b32c85e7.js",
    "revision": "95bf99d2ff5b74bb2bad5ed9e90cca30"
  },
  {
    "url": "assets/js/7.85179b91.js",
    "revision": "97692b779585d7623c42dab0b850e580"
  },
  {
    "url": "assets/js/70.ff0c3661.js",
    "revision": "1ceed8092b777c5f5d67728b809f9146"
  },
  {
    "url": "assets/js/71.efcce820.js",
    "revision": "2a58aa0becbc5ec96de8271fd526cbb8"
  },
  {
    "url": "assets/js/72.34c11e91.js",
    "revision": "c1cc50b61bdcfc3646a2b3171ad91927"
  },
  {
    "url": "assets/js/73.564fe433.js",
    "revision": "5e410852ede52161772c9d0e70114717"
  },
  {
    "url": "assets/js/74.70c9ddff.js",
    "revision": "7f6faafa71cae3fe014398d91f11ea8c"
  },
  {
    "url": "assets/js/75.80fb5ee4.js",
    "revision": "a89087e7fc506919ad48bc16d815d57f"
  },
  {
    "url": "assets/js/76.f29b37d2.js",
    "revision": "76cfc322a68a8e130be0af4d8b5371aa"
  },
  {
    "url": "assets/js/77.db811ef4.js",
    "revision": "6ac99192f4c9cbef0a736c52dc29390e"
  },
  {
    "url": "assets/js/78.350882da.js",
    "revision": "defdabc22f219e50c99df911e4718f39"
  },
  {
    "url": "assets/js/79.31db28df.js",
    "revision": "91f4c38df9ebd2520e1709061bfdffd4"
  },
  {
    "url": "assets/js/8.58494e0c.js",
    "revision": "4d405de3d478b1b7fc18ad4062226955"
  },
  {
    "url": "assets/js/80.a0bc0e59.js",
    "revision": "4d4f275ab0d58da3a9bdbb967f189c2f"
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
    "url": "assets/js/app.8f02ef79.js",
    "revision": "aa0ae4ab3c71baccc22c28f08591d2e4"
  },
  {
    "url": "index.html",
    "revision": "227a4e3d6a88aced8f6351545df2c985"
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
