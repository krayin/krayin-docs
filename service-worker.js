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
    "revision": "8e3ee5a2eacef3e1e55a9888c0fee950"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "c73b757f106c49a10fba7f198d79dabc"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "09176b9bf96da48fba8d9512a1e9eb44"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "94d0db869634a6df595fc68799c5bb9a"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "3d4c6f34816f317641928a4263676d0d"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "13a5db6cf12488e694b58bb3e2ca3b05"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "cd10271384de243454df1bc207ca097f"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "4b644f5b97f99872d77d47d466cc0a58"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "57f1c682e7c60e613b2a475d823da0ff"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "d0586e92c0f59e2b2ba5ce3761aeaf8a"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "de09a336f37e3d44b3fbf8357300e6e7"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "2eb0d92131cdc8b49fee3e2a280982f7"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "959a60dc04088b0b91ed209e16c245a9"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "c3733ebcf78f33c33269ccbcd21b2ac5"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "f4c6d0007265512125215be15c110791"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "38852ef5a59f2173619bd22c8ff969d9"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "6e29eef32801d32f2c4f8702ab24a2e5"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "2a8c21ad5f0648d44318f7fb54996add"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "51718a9bdfd19d2cdf53ae693a21d65c"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "19bd9c853c1fd2096f9bed62e3759a2f"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "c49058f250e0944c9a356f3573e44756"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "2462d2005693a9e45f88eb5043814954"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "18edbd1a54abfa153aaabd8f0b31a033"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "19181a17efa204eea9a1e7c7cf817d41"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "c59229ae88914508eb9873e488407541"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "5b53fc0dfb397fbf02d9b8f8212f48cc"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "ed08c30c7d5c18b003eb79f27bc7e99d"
  },
  {
    "url": "1.x/custom-attributes/add-lookup.html",
    "revision": "6a91ee595d45449ee86eeb4f61ded0f7"
  },
  {
    "url": "1.x/custom-attributes/index.html",
    "revision": "0a3a9e2b68ee2b94a6f5697f36f93e3c"
  },
  {
    "url": "1.x/custom-attributes/uses.html",
    "revision": "4076ab889345a9b9059dc97b2c1f00b2"
  },
  {
    "url": "1.x/datagrid/create.html",
    "revision": "fed7511d28710e5f7fedbdda9920fcbf"
  },
  {
    "url": "1.x/datagrid/index.html",
    "revision": "309e43391def7d71e4d7c57a4bc5eddb"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "1363ae95d723989be49534241949c22e"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "3956e64da2042b9bd5697ec7c5a929b9"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "cbe519a0cd01b1a7bbc60079efff6f18"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "aa57b3e473d9ffb4f8f47f972e030387"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "48ebec66e6efb3f9724f4a9a5864c575"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "f0e1dd5de41bd3a950e4bf721de15b63"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "164e3bf7cbf4768040649a17f90c7b92"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "753cfbeb629d4013833745fabaf2aae3"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "79745172dedbe3fce1a518774ae0feeb"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "cb6b5739836b314c33a6f3c92229e91c"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "5df8a86ace42950ea63d25127a03261b"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "43bf3ea886f0a4d82a9318995b65e70c"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "c1095c2ae9a8585efeb010de69b9ebc0"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "01c9d9bda71b81050624eff207ed989d"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "fe3825ade4274584dfd119c14d3b8c6c"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "a1b6489ddc0604b398e2be3d0aa5c915"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "832695da3b395dd87cae01f7a2f3d0c8"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "69c42ac269054ca56fb402b63253f57b"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "19ab16ff1b8d75624f132e10bc9786eb"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "89b6ed4e44b52a584559b0e5249df8ec"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "b0c034dfa72fcb5cc8adacf848945566"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "cafe2ad29339f7213a2009b875db94a2"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "7c8408b5339e04174f09f2908a5bfe26"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "3b9cf6a27962197aa1807122d5a860c8"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "9bcaa40621e540f10f4ba48b6ce5cd87"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "be19e1fc1dd85fe5fa6099289bf56b81"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "a8aca9d14526af45aaadacf27be47389"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "aefc5692c796946bfd9e2ca8f759a2e9"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "9d16e4e0c18770e2ff5ec44061c5ff3b"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "2f6c4b4168f862fa15ab35be665d1059"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "a20c66e0cfbe88a3a5c71a41e1c6c31b"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "73e6358049a8334f978dbba3a59236f3"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "a90389c09ac720809363e2f9266f6879"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "5f478753d6c6c33aaf2bd8d674413847"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "c14aba2764c9b1d4c5fa64608db57b38"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "39e34d76065030decea44e2db37ea4f9"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "ce922d6f6e648ef0a27987de07bc9dc7"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "9f6bfa874205f500d81b01517725ca8b"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "8666fc968fc2336895196929b79d5177"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "981fa71ebb917b6b20930bbcb6247c4f"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "d73869cc4a2a8a8383ba940faebc273d"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "ec7504ac52c9a004d15a358eae99c770"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "4588b676aefcca34043fe33c53125ddb"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "10e6df6abf37a20f286cc379796e8ac7"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "894fae9998715e99aa93860be45d2b1e"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "4f37f1308e40aff78923b1dcbcb12173"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "f85f8926f8c66fc8456ffdd4470b960b"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "1fb761644a822b7cb4703915b3948d1f"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "7d5277a547a25d14b1fb3697a2bb8bb3"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "ec80eb79fc0ff3985aeefde9a9a5427a"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "2f3067888331c1c350ccaaee73c5ff4f"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "0b0447546eaf81680700833aa2f29091"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "aefcaeddc2ddccc1f23097b630e35819"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "8656d114843162453417afe7c3c45493"
  },
  {
    "url": "404.html",
    "revision": "f34a72a45584aaf6f0e6d2594ef496ce"
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
    "url": "assets/img/admin-acl-output.33cbb854.png",
    "revision": "33cbb8542307d97dce7e411f4e1ffee2"
  },
  {
    "url": "assets/img/admin-custom-config-output.ad6536ab.png",
    "revision": "ad6536ab0b05048c23992f08943b6d1d"
  },
  {
    "url": "assets/img/admin-menu-output.a5949c80.png",
    "revision": "a5949c80bf47f4a37c0f8d330f1f139c"
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
    "url": "assets/img/translation.96b21cfa.png",
    "revision": "96b21cfa473af2e88086d0ccdebb40e4"
  },
  {
    "url": "assets/js/10.8cab4b6e.js",
    "revision": "761e1bd4f295dd325752cb2d0cd8693f"
  },
  {
    "url": "assets/js/11.4f281b62.js",
    "revision": "f13da93128e12010fba2060f956844c5"
  },
  {
    "url": "assets/js/12.5a40d0d8.js",
    "revision": "32ebd388aee84f81cd8257a997f4ca65"
  },
  {
    "url": "assets/js/13.5c0ee923.js",
    "revision": "a9e05324dde2acb3dea0bf456dbd3559"
  },
  {
    "url": "assets/js/14.2282aadc.js",
    "revision": "ca488d3b5a5ab54c5c526f663eecfc5c"
  },
  {
    "url": "assets/js/15.4db3cc42.js",
    "revision": "75cf07d6ee33f110e0dd06aa66d918e1"
  },
  {
    "url": "assets/js/16.888cbd2f.js",
    "revision": "1d78ee6b862b3c470069be63b4c02973"
  },
  {
    "url": "assets/js/17.8a985666.js",
    "revision": "59c09b779bda7782870d48b40b02da24"
  },
  {
    "url": "assets/js/18.61d26662.js",
    "revision": "394eafa1ff24d87965484d14d0d6e7ec"
  },
  {
    "url": "assets/js/19.2f573399.js",
    "revision": "bbb9444c7e8a9be05ff7d9b8a87d67c8"
  },
  {
    "url": "assets/js/2.d530cad3.js",
    "revision": "7f810f9f0c99b689548df192fef9889c"
  },
  {
    "url": "assets/js/20.c0bbfbd5.js",
    "revision": "938d0c80c8eaa44ab37609e387d60c6e"
  },
  {
    "url": "assets/js/21.6af1f269.js",
    "revision": "4939438073103a0c68c4ec8606c79c68"
  },
  {
    "url": "assets/js/22.96500ba3.js",
    "revision": "632eab8bae512fac6b876143a20bee29"
  },
  {
    "url": "assets/js/23.f12b926b.js",
    "revision": "533a4e4f934dbeb6bf38a73728e58a00"
  },
  {
    "url": "assets/js/24.c3a6a588.js",
    "revision": "6c8327d14d5ee5ef9d7ccc12ed0632fe"
  },
  {
    "url": "assets/js/25.85e7f506.js",
    "revision": "a6d03bf169b20630f95dc8c083a9bfbe"
  },
  {
    "url": "assets/js/26.6cc3d8a5.js",
    "revision": "bd768bef937a1286a987fade11f41d87"
  },
  {
    "url": "assets/js/27.90cd5707.js",
    "revision": "b87991b47320be0bed7b90112ba4c28a"
  },
  {
    "url": "assets/js/28.800e2510.js",
    "revision": "7cb052883904ad8912dd2703b651ab10"
  },
  {
    "url": "assets/js/29.6d0fd8f4.js",
    "revision": "9dc7fb1971cd1942a043c4d01ed5246b"
  },
  {
    "url": "assets/js/3.f92e252e.js",
    "revision": "724c74ea7501e6fb477eb408ce136e98"
  },
  {
    "url": "assets/js/30.6b9acc58.js",
    "revision": "a9d5edd8a401085b9fa7f925584555e9"
  },
  {
    "url": "assets/js/31.1d870f94.js",
    "revision": "38493516634e1d1571a869d67e2a235a"
  },
  {
    "url": "assets/js/32.4a78490b.js",
    "revision": "8fb07f6329e17e7473993ee4a24785a1"
  },
  {
    "url": "assets/js/33.dac304d5.js",
    "revision": "60a1d60406f4ba922475cd5a79b27be7"
  },
  {
    "url": "assets/js/34.9e8ba84b.js",
    "revision": "dc1ca9b80d1a611d7a88ba9857669f8b"
  },
  {
    "url": "assets/js/35.36678915.js",
    "revision": "13b76d48a5b4172cda4de44450e09744"
  },
  {
    "url": "assets/js/36.38d7b18c.js",
    "revision": "b7058253de570cac7594846a58d08e79"
  },
  {
    "url": "assets/js/37.10312aba.js",
    "revision": "37b1bac4481dac51fea3fb834a50e748"
  },
  {
    "url": "assets/js/38.c9f03215.js",
    "revision": "42bf453f7cb0ece2314efb586660694b"
  },
  {
    "url": "assets/js/39.b804d931.js",
    "revision": "b88a5fee067441e6844aa96f59d7bd1f"
  },
  {
    "url": "assets/js/4.cc99b832.js",
    "revision": "4c6567fa5622352b40a5ac58aa52ff5d"
  },
  {
    "url": "assets/js/40.d1c82262.js",
    "revision": "5cf6f7bc32720866b5c1e0943648332c"
  },
  {
    "url": "assets/js/41.67008104.js",
    "revision": "eb0f7e5f22436aa6b638fff821543458"
  },
  {
    "url": "assets/js/42.e380c962.js",
    "revision": "09b2372bf999876bb7c3f4196505cd37"
  },
  {
    "url": "assets/js/43.2b28650a.js",
    "revision": "d77c369d2aa66807e73a617e39eae852"
  },
  {
    "url": "assets/js/44.acba3fd2.js",
    "revision": "11af8469bd5d1348dd6b43f73e0f4e99"
  },
  {
    "url": "assets/js/45.be6a0569.js",
    "revision": "dd860366569ffdc7c7d4111e4577aadc"
  },
  {
    "url": "assets/js/46.d82b378b.js",
    "revision": "da26e428dd325696e8cf8248e2f37eb8"
  },
  {
    "url": "assets/js/47.46901543.js",
    "revision": "0458a6f92640d1022b5544566fe8e6c8"
  },
  {
    "url": "assets/js/48.51b409bf.js",
    "revision": "97093b23e834097c4ad105f0e867799e"
  },
  {
    "url": "assets/js/49.73aee9be.js",
    "revision": "ace144a5e80b2129153e4ada2b398c0b"
  },
  {
    "url": "assets/js/5.79517842.js",
    "revision": "f70dcb529bb6d8316e01ba98881cb802"
  },
  {
    "url": "assets/js/50.fe416cd0.js",
    "revision": "3465bc3b7d12707ec57693704d49ca2e"
  },
  {
    "url": "assets/js/51.70d89d0b.js",
    "revision": "e2f94828ec364ac8b281630137049ef4"
  },
  {
    "url": "assets/js/52.18086cb9.js",
    "revision": "7d1475e9fb11182844da76996be7e37b"
  },
  {
    "url": "assets/js/53.af0e61a2.js",
    "revision": "1310518878071e2eeb02ae17bf6312a2"
  },
  {
    "url": "assets/js/54.b6c07e4f.js",
    "revision": "26a5571338ce246933e1d0f9cbdcd911"
  },
  {
    "url": "assets/js/55.55eae2fe.js",
    "revision": "c5ac949138d99d8ab0ae22f111ba2afc"
  },
  {
    "url": "assets/js/56.8847b8df.js",
    "revision": "83a27f022dacc0f9bfb9c17c54fa796e"
  },
  {
    "url": "assets/js/57.775a14d6.js",
    "revision": "f2927c2f893a8f9b1e945069227ab37b"
  },
  {
    "url": "assets/js/58.a85550c6.js",
    "revision": "22e873a79f0bc718a33bcd657e6eade9"
  },
  {
    "url": "assets/js/59.8652ad97.js",
    "revision": "5f289e50c510ae82a21c38f725e0e9a9"
  },
  {
    "url": "assets/js/6.24736215.js",
    "revision": "ebdd933d3e333686d7a72dea01ceaa13"
  },
  {
    "url": "assets/js/60.6e71bbb4.js",
    "revision": "0a5f4918c42447b5041d078399aa5e22"
  },
  {
    "url": "assets/js/61.122f48f2.js",
    "revision": "aa67f836a71c1dc3a8350a7a797d52fe"
  },
  {
    "url": "assets/js/62.b2834953.js",
    "revision": "a5e52c47b14cd3354c312687bafe8f3c"
  },
  {
    "url": "assets/js/63.d836e79a.js",
    "revision": "7d2392235eb8177395acb3abfe8c4fa0"
  },
  {
    "url": "assets/js/64.ba11d11a.js",
    "revision": "3c9a630e834b90599a54fe9f10f2eaa7"
  },
  {
    "url": "assets/js/65.06190da5.js",
    "revision": "a13419b34e679b11241ece18d8e7d6bb"
  },
  {
    "url": "assets/js/66.59da1d53.js",
    "revision": "ff23fbeb5750572ba6be893592bec0af"
  },
  {
    "url": "assets/js/67.8a2b004c.js",
    "revision": "071d4463dd07ab8b444eb0cda48a8623"
  },
  {
    "url": "assets/js/68.f6938215.js",
    "revision": "9d17bba976033752638bca27f75c24ec"
  },
  {
    "url": "assets/js/69.2701ce9a.js",
    "revision": "a844ad76967c908dfebf0c064cee1f95"
  },
  {
    "url": "assets/js/7.b3db6669.js",
    "revision": "67036db1229fd873ae2c744aabe76345"
  },
  {
    "url": "assets/js/70.ad8650c2.js",
    "revision": "92dd673373cc74301140051e6d296fb4"
  },
  {
    "url": "assets/js/71.b06525f8.js",
    "revision": "fda70d20f700f59e3845434638c1c161"
  },
  {
    "url": "assets/js/72.ab2deeb7.js",
    "revision": "3aa00df0a770537a3585d7baad8b318b"
  },
  {
    "url": "assets/js/73.5eaab064.js",
    "revision": "76adfd13af16d615d6e5192beaafc141"
  },
  {
    "url": "assets/js/74.1b24071e.js",
    "revision": "2cc83c20505d8707f60b95d9b2540b46"
  },
  {
    "url": "assets/js/75.65187de4.js",
    "revision": "a6e8fd457f7ef631855296f8e1e64dd8"
  },
  {
    "url": "assets/js/76.b9bb34b4.js",
    "revision": "db0c61f1d63a6e88b95488cafde91d05"
  },
  {
    "url": "assets/js/77.3ff80830.js",
    "revision": "e2a459b3d48e1a2d2a64e029536c765e"
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
    "url": "assets/js/8.507f6b18.js",
    "revision": "c9bba8b37e1c04e0c778db20eb99a15e"
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
    "url": "assets/js/9.446d6bca.js",
    "revision": "5bfa9221350c30634c52146504a529b8"
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
    "url": "assets/js/app.75b67cb2.js",
    "revision": "a8da9cd856a214d16bf679716e4c8c02"
  },
  {
    "url": "index.html",
    "revision": "cfa765cbc79537eac205debd9c8d25ce"
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
