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
    "revision": "c8ab71eb3e1a36e353eeb92a81b8f33e"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "b2b1fe6cc79f862813f54f0917ecc6e6"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "9f4121876fc86fb6ff95b2a4de0ad900"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "4e4fd7e3ae2d5c2286c5906c3e173d74"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "f54a66e3e554732583f66cbe556c3318"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "c9eb4a2f8493c9bda3e6344862a69205"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f2e6351dbcd1c1a2378daf4ae86b4b0c"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "49e6452eb22d30a8f3b81c4b72b63ec5"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "ae81fe3711fd0f3664ce739544cd647e"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "90d288f50434ab197ada091510839aaa"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "d14c576827d5f0576b34a2ed827cac9c"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "9290a26e1e12e32b905d43f272eb2fd4"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "f4b30c7928d7186155fd8503872b6c43"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "e430626c93f0e2bb88b3f6c32a219b64"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "d39852d773b83298d1a24a02e2e77c6e"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "63b24049ab81f4e63ddd835493eaaed1"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "2b0bf17a13d0d9b5f731a098f06fb6a5"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "9db88c8a391fed26f78c4e077df27e44"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "f92e42d948bd11ee64ac8ccb93f90226"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "45c55a7553fbf4f244dcd6cd49f466b3"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "5553fcd1f5b281ef2d1fa44a679aea31"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "a169c6cd33dc67b64ce1d032ba038502"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "766fc0e25cd521e0af9dccfddde294c5"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "736065876941dd34b4fb8a18bff9ffe9"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "30508cb0d09fbe07c5f015d14d5fcafa"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "e28b477bed7141eaa2a8d487c43b22ae"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "44e565cbfa820b26f8c12fa2ed0ac6ad"
  },
  {
    "url": "1.x/custom-attributes/add-lookup.html",
    "revision": "db717831967373eb47e34dc0ec6ff69f"
  },
  {
    "url": "1.x/custom-attributes/index.html",
    "revision": "ca1cbf669554c3d6c908f7cc2e3d4ad1"
  },
  {
    "url": "1.x/custom-attributes/uses.html",
    "revision": "33de7dbaceef9cf969e7dbdadec54869"
  },
  {
    "url": "1.x/datagrid/create.html",
    "revision": "20b01dc4772a0588218bb090860dc28d"
  },
  {
    "url": "1.x/datagrid/index.html",
    "revision": "923ead60279b8037d1eadd5067cc0655"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "18edb9193d397f988661448e4adfd7b0"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "1879fb7cf31e39760f7cc657c5626905"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "a3b8f04c9190661170f35ce116c78ff1"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "24ba396a6225bffeac1afa8244179dda"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "411df72a88191c985f92b822957b3040"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "0277805c6a8c5630c4f7e5f21714eaf3"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "04303f299d3a7bee6d3875361509d009"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "944362bbe1c7d49d6d2d28135bf27e66"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "0a0a03ea6e71d6d02c3ee754da8d2103"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "0f29f1648a54a91010b3eabc2185e840"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "98db0365b98e9bcd3e4826d87d3a4f18"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "0b8013355c5e8a9d896aaf955b3f10ab"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "7cf23a417068d1f23fbfcc46a7494e3d"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "d495ebee75b30f9d343f099b6fb83ec7"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "3e21498bcebf79e0e141a507dffb4ae7"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "966b8ca98f2390361edde7d2fbd78c43"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "14a5d1631731b85cf72d60e8f419f927"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "1d9dde950c4e23a3388ebd707b7fcb70"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "be6741e7da6261a1773918a8706068a0"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "c25ccc9c5ba77f66b4926e75c14541b6"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "5287c0541ae53f6daad9a959d6c020c8"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "52af46245ddd7085b4fcfde6af41dd1a"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "19a46d38a7b8dbad366a7c9c0b011a87"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "72cbf468d9ac783154bfe9975f358fbd"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "8b9a040faa588b640d52348ec7ebb528"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "3733a911e313d34692452b1bffc70184"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "c23ec5e3a55d3e6ffb562c93f47a6f0d"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "a8513167837a92a4f80004d700077004"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "2c136a944f1cbe66fc05bd5d949582e1"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "23da0518caa00e44bea6a2882c3258b4"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "0ca446c7305e63331f0a2961e31377bf"
  },
  {
    "url": "1.x/packages/add-menu.html",
    "revision": "1a042ba063746a899bd01921443cdf8b"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "870c09d4e62df08f7dc1bff736062222"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "def547a5d1cfc95133ed753d8f6359e3"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "f6b6283d950efe53a7bcd219657d42ed"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "9e1c9b2dd0f7d3f33d51987854e04386"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "fb246a6e90a8a79a8b210ea8e24b472e"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "8019b9b2c47db0a9fe51282f5e0e7bb3"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "ff3af48a9d24a9b1ca0e906a7cc212e5"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "f3b18b901d7d39c83d46d2c6a6ca3074"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "7d80602163e3fbef96a8d5c0757faa13"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "725ea4e1921447bdd878b1ba0c092ac1"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "653f4ccc4959be4560de7e184aaf5a2e"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "86820a6971e2cae296d587099759541e"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "a3115d056e84b0fc153dc337063b50da"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "eb86ede9bd8856b14221e56ce2f61a57"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "6f62369aa59256430693c027d4b17018"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "db3bfc7c7d1292bd129bfa48d4b66f0a"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "51adc74c146b09171714370621cc0a13"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "99e31487bb788a7939d017c3b8d21804"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "6481cd98279ec437bec1e7d09659fff1"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "14a2ac7f88f7155b6f131bd12d16bc8e"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "822a396c277975865949116afb9e1761"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "601298a3024ab6952ba5e2ee62752f8e"
  },
  {
    "url": "404.html",
    "revision": "f9e3045b8533d2f3c7f2b4db60f88bf9"
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
    "url": "assets/js/10.871b4336.js",
    "revision": "d6408333ae75f3656fc2eb6a8a57f638"
  },
  {
    "url": "assets/js/11.4e8f6db7.js",
    "revision": "7e5a2e76dc636627e60b8c28e7e7b44f"
  },
  {
    "url": "assets/js/12.3003babd.js",
    "revision": "64baf1fd250b0312d6a40e880293ede6"
  },
  {
    "url": "assets/js/13.07f33144.js",
    "revision": "e125026db84482462e033da5e43db3fa"
  },
  {
    "url": "assets/js/14.27ff597e.js",
    "revision": "1c1e49a252c1a34ac7c4234ab3deccd5"
  },
  {
    "url": "assets/js/15.976ea028.js",
    "revision": "491da861eed36ddfc42cfdf9759dcbff"
  },
  {
    "url": "assets/js/16.c7f79e7d.js",
    "revision": "00ac271d9c6cf731b92bd62ae506d312"
  },
  {
    "url": "assets/js/17.fda1b3b0.js",
    "revision": "60b4251d622d6242516dffe97ba0f82a"
  },
  {
    "url": "assets/js/18.3559a993.js",
    "revision": "4b6bacf3bbce213db12b6673fe928274"
  },
  {
    "url": "assets/js/19.a1756b96.js",
    "revision": "084ef1814633afae23dfb3f0ce918ab7"
  },
  {
    "url": "assets/js/2.d2916b70.js",
    "revision": "5357f5aae3151d0b94b9b4a9424daba2"
  },
  {
    "url": "assets/js/20.bc7dd611.js",
    "revision": "db511c48cd67f0a8ce21db9970fc54b7"
  },
  {
    "url": "assets/js/21.c524164e.js",
    "revision": "ae0646b1d27a6356f0b349209d302510"
  },
  {
    "url": "assets/js/22.550b240c.js",
    "revision": "ac46d9a85225e7a0183e457fab9ada9b"
  },
  {
    "url": "assets/js/23.927cf373.js",
    "revision": "04de3ad6bde79c664ca641fb14d3edae"
  },
  {
    "url": "assets/js/24.7bc8c00a.js",
    "revision": "563b19a2972146f5271428580c570caf"
  },
  {
    "url": "assets/js/25.0221f415.js",
    "revision": "65874af79d2b6dc14a54d1f1a5b93bf5"
  },
  {
    "url": "assets/js/26.c1d30a93.js",
    "revision": "0e199997a4080cd63d3500c2b7ded49a"
  },
  {
    "url": "assets/js/27.676e0ca9.js",
    "revision": "7eaa2ebb9d6780e138df333598ff577a"
  },
  {
    "url": "assets/js/28.785dc7f4.js",
    "revision": "04e251e52cf465622d9d17cb16b8d07c"
  },
  {
    "url": "assets/js/29.b98955be.js",
    "revision": "49275fada0e3422a99c3fbe636e30cfe"
  },
  {
    "url": "assets/js/3.1f4c6ecf.js",
    "revision": "c725a99bde7c26166463ed06e906c7d5"
  },
  {
    "url": "assets/js/30.ccae047c.js",
    "revision": "0266c61e03849962f9311aed488dd977"
  },
  {
    "url": "assets/js/31.d7825093.js",
    "revision": "97b606359748426a5a0ec57608779d5f"
  },
  {
    "url": "assets/js/32.631b07a0.js",
    "revision": "1b38acdbf824e15c89acf05ca64aebec"
  },
  {
    "url": "assets/js/33.a2605a77.js",
    "revision": "36da16508f5f33b4b0c554d10c2e0a72"
  },
  {
    "url": "assets/js/34.2a348258.js",
    "revision": "3fa36631155c2f9da0b54cd732e30eea"
  },
  {
    "url": "assets/js/35.ab442723.js",
    "revision": "3fffdb724bbf5f27d41fbb5afb288cd2"
  },
  {
    "url": "assets/js/36.61f9f222.js",
    "revision": "aa7e443954a6684e9e5426885b469da9"
  },
  {
    "url": "assets/js/37.a5da084f.js",
    "revision": "d447c3d371e2f1d9d61da26dc0ca81bc"
  },
  {
    "url": "assets/js/38.3bc133b3.js",
    "revision": "fcb74a8f4bb6d2ca456d93e0ee2c70af"
  },
  {
    "url": "assets/js/39.d2022f1c.js",
    "revision": "8f72f8b99d196f0b10d716c375a000b1"
  },
  {
    "url": "assets/js/4.bec944ce.js",
    "revision": "8dec52824f10c9d29133000cd8ec78dc"
  },
  {
    "url": "assets/js/40.0e72a0a3.js",
    "revision": "1678f1fbbeaac457ee637b01125f1748"
  },
  {
    "url": "assets/js/41.cb115413.js",
    "revision": "850c2d61a88996168a36448beaad5a15"
  },
  {
    "url": "assets/js/42.e9bda4f5.js",
    "revision": "180cda39b48a9a8b8c18b13141550111"
  },
  {
    "url": "assets/js/43.af1ec130.js",
    "revision": "efb77510583cbb0f16d4f3e6571763fb"
  },
  {
    "url": "assets/js/44.1d8fb1bb.js",
    "revision": "1538d02563a025ac1d03095a35608850"
  },
  {
    "url": "assets/js/45.f913245f.js",
    "revision": "b0877869dd95b6efe06058c34ae449f0"
  },
  {
    "url": "assets/js/46.1fc22927.js",
    "revision": "58e9e6a8b538a5960ca16a1ca9a9a37d"
  },
  {
    "url": "assets/js/47.96fd178b.js",
    "revision": "45f7b9936688176a15a4e2ca6af02657"
  },
  {
    "url": "assets/js/48.ae7d85d9.js",
    "revision": "8954ddbec8110b541d0e6364ba25c42c"
  },
  {
    "url": "assets/js/49.a416c396.js",
    "revision": "0690da1a70f847af62722bbfe7590d42"
  },
  {
    "url": "assets/js/5.a85d4698.js",
    "revision": "151f5565c996bb9592cb15e4c1abec6e"
  },
  {
    "url": "assets/js/50.c3a3ae57.js",
    "revision": "bf3e46df77f5e7243204a306f51ee385"
  },
  {
    "url": "assets/js/51.de322df3.js",
    "revision": "6aa970528fe8831a074db179212d0199"
  },
  {
    "url": "assets/js/52.a6ae317b.js",
    "revision": "e996f18bfe2fc24e8b57216ca1acf3b2"
  },
  {
    "url": "assets/js/53.16f4c1ca.js",
    "revision": "8c736adecc8f730bae19393d35b213b6"
  },
  {
    "url": "assets/js/54.a0233bcd.js",
    "revision": "5f4c4087243775683463bf3c0a75f40b"
  },
  {
    "url": "assets/js/55.84b8990f.js",
    "revision": "b82093499ef57aa6a540f21962b0fb42"
  },
  {
    "url": "assets/js/56.746e89eb.js",
    "revision": "4fa0600e693e9e158ae1dfb026e340a3"
  },
  {
    "url": "assets/js/57.dc950b11.js",
    "revision": "38791dee6d1eb0e6c5ab877c093f6296"
  },
  {
    "url": "assets/js/58.394a821f.js",
    "revision": "07ca3faf96ba38e52a218fcd394ccb7a"
  },
  {
    "url": "assets/js/59.d43248b9.js",
    "revision": "02162f0d4523055bd16796149d39ce25"
  },
  {
    "url": "assets/js/6.e8e1be69.js",
    "revision": "bc9f39f2c6d10587e775b8def7111f8b"
  },
  {
    "url": "assets/js/60.810af611.js",
    "revision": "a1f279827f21fdfd968fda4d5b017c21"
  },
  {
    "url": "assets/js/61.75ff2947.js",
    "revision": "6413ea36993cdcb969a3899f26069874"
  },
  {
    "url": "assets/js/62.e5eb8da7.js",
    "revision": "8ac95229b00149e27ceaf6747cf622d3"
  },
  {
    "url": "assets/js/63.294ae051.js",
    "revision": "94379aad9e4480a2b4164f41070a58a9"
  },
  {
    "url": "assets/js/64.f93aaa24.js",
    "revision": "6e926b1553b21d3c97b793faebeec5eb"
  },
  {
    "url": "assets/js/65.d7fcb1fb.js",
    "revision": "47775c7ddd9b90f63dd1c2ef1e96f4a3"
  },
  {
    "url": "assets/js/66.78657d63.js",
    "revision": "fda5a078c6013e18dddac827903a563c"
  },
  {
    "url": "assets/js/67.a27ca1a4.js",
    "revision": "d09ae378fa35776654018c2b0b504c1b"
  },
  {
    "url": "assets/js/68.fed8b86a.js",
    "revision": "10330c94b6c36dc2ad53bf37b58e7e01"
  },
  {
    "url": "assets/js/69.c309fe0a.js",
    "revision": "ea34dcdd3f4725ed09c72069cd4becf1"
  },
  {
    "url": "assets/js/7.b8e0bc4c.js",
    "revision": "a3d9866f42e2e53c8562a520bfea40ce"
  },
  {
    "url": "assets/js/70.4fd2a3a7.js",
    "revision": "934b32845d5f50118d5ca7c0a7b9cb75"
  },
  {
    "url": "assets/js/71.ab8021bf.js",
    "revision": "8f0669cb25dc840d0fda2ef1cc5550b4"
  },
  {
    "url": "assets/js/72.06d0ea38.js",
    "revision": "563a3152f182a864d268dc4be89c4349"
  },
  {
    "url": "assets/js/73.dc5eb3c9.js",
    "revision": "52c3af159dd88bedf3143fcbcb7df4c8"
  },
  {
    "url": "assets/js/74.c3ee80b2.js",
    "revision": "032735a5d1333ea9c4c7659c6582e743"
  },
  {
    "url": "assets/js/75.30dcb7fa.js",
    "revision": "4e0661f892b525a97f9312a4198a6b80"
  },
  {
    "url": "assets/js/76.519e9a25.js",
    "revision": "c021e10f79b3ed0aabee3314528e245f"
  },
  {
    "url": "assets/js/77.a90878e5.js",
    "revision": "d28c8a627dc0c2dce2af646473bd800f"
  },
  {
    "url": "assets/js/78.c7edfc06.js",
    "revision": "bcaf3e08874cfde66d9ecb8741243f2a"
  },
  {
    "url": "assets/js/79.0fa2e7ce.js",
    "revision": "0ddc60965f58b12b2cb4fd936d28ccd6"
  },
  {
    "url": "assets/js/8.8c724248.js",
    "revision": "1bbf6279935b6c26b29b948734ebc5d8"
  },
  {
    "url": "assets/js/80.11c4d8aa.js",
    "revision": "a1dbc73173c8fe984bef456df475f099"
  },
  {
    "url": "assets/js/81.f71889d1.js",
    "revision": "16a5875e3ddb921490b3d59ec3349493"
  },
  {
    "url": "assets/js/82.940dfc4e.js",
    "revision": "0adeed3618fd326d5c14b05ebf61cbc3"
  },
  {
    "url": "assets/js/83.810ae418.js",
    "revision": "20380eb2a24a2df9786f4be91113d1c5"
  },
  {
    "url": "assets/js/84.d565e6ff.js",
    "revision": "1e09d38130d2b352b0e4a5cd69b8e49d"
  },
  {
    "url": "assets/js/85.689fa00f.js",
    "revision": "8a6e309b1c49a2f795904c8e2523ce31"
  },
  {
    "url": "assets/js/86.354fc59e.js",
    "revision": "cddf18425e4ae5e5aed1093997585843"
  },
  {
    "url": "assets/js/87.c2e612cd.js",
    "revision": "917b6e975af4a237f38a5a6b85b8bfa0"
  },
  {
    "url": "assets/js/88.1f36f998.js",
    "revision": "fb4dd143af640a08b714d2f5ce95cb30"
  },
  {
    "url": "assets/js/89.d8e2fbdd.js",
    "revision": "1761cc8cc5413a39d56a70cde08124aa"
  },
  {
    "url": "assets/js/9.25cf0c1b.js",
    "revision": "cef3c1aea05e3fcda8708d4503a38611"
  },
  {
    "url": "assets/js/90.7b1e4d61.js",
    "revision": "f127a0954286b94fb1fe775f1cd3357b"
  },
  {
    "url": "assets/js/91.ed9a696d.js",
    "revision": "1cf9b2f8191db84f2952a2d8f69d6e23"
  },
  {
    "url": "assets/js/92.2008de5a.js",
    "revision": "e36e68a4ab571b66f39eb61362fdfdd2"
  },
  {
    "url": "assets/js/app.5cafd3f9.js",
    "revision": "7a2c7ec70590489ed145a18fb7dab5d9"
  },
  {
    "url": "index.html",
    "revision": "6694990903d8e479eff0fa9f063a60dd"
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
