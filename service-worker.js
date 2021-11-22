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
    "revision": "ff7a2b9cdf5e894072d64b21a5a57b54"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "2b44cf466ffa107d7b550e1ad9768815"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "401fc73f44e54c19c08f2149b284abd3"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "108edf5417389c7a8a1b49a7bcdd1314"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "2279cc8fa983e8e194f9879d1811eca9"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "1d06a72da26809e93f84d370dee47d1a"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "5c4ce62229bd35f27b2a5a4a8e73af20"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "a3256f768e63e5ddcf0a05390c455504"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "6c2dabd42de0b3a34c6a80e10e9e2b0a"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "958118b90736e0061fb13918064992f6"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "2f8132fefcba9727b69b9aa9a8492698"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "0b91c2a12620d0d7334c7d3758e3013b"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "046da9af5757f117551aeeb0964b297a"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "416fc312bb298ab09ed9402f74361d22"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "32e73a47639a46aff5edc353e269ccca"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "048b12d0904881613c9a3b83ff7aedde"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "aa13051d3e5673c8b600b81f02c290ed"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "9926d11f0657a430019c2bb729d9c772"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "64c35f6710ce60b998eb7a5dd5336d79"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "05366f6b7a3b8adfc28a2f01c8bb82a7"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "e687f8a12284ff0f9ed81fd70c568092"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "18f514c4cfe9a3f6dccdfc3fb05af891"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "9886cb6321b45c121472610ce70e54bd"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "52927de68c876fa471121abd4c445c89"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "5e709556da037568736770d8f6870774"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "78aaa536bc3614ee42d3474c3ffce8f9"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "10ab2ed1ad26056e1d58a3b85bbc22d5"
  },
  {
    "url": "1.x/custom-attributes/add-lookup.html",
    "revision": "803b74fc49ec812f1014331e464db536"
  },
  {
    "url": "1.x/custom-attributes/index.html",
    "revision": "35614c70b3cab8f652084071b7361cd4"
  },
  {
    "url": "1.x/custom-attributes/uses.html",
    "revision": "b3738eecaabffc8fdb6124e6a9932b10"
  },
  {
    "url": "1.x/datagrid/create.html",
    "revision": "51512ceee594f700161272231198fdb2"
  },
  {
    "url": "1.x/datagrid/index.html",
    "revision": "6d81c1f3b5a214e435e3258b82fb37c7"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "4a61e1d1b0b8e43b0965f4d6dc5f2dc7"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "1ffc8e3db1800a8c07f1342ea63c0c6d"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "d939b57b5c66ca49f164f8bd257f29ac"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "613b6fc390131a2ff3909cc4e9787c37"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "e14209d5adff8fca4259bc10b8cb2076"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "be03e1629da86fb13f39bdb03ce6278b"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "b69673273b0028652218925d4a344149"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "fc7723f95f0b8301395b4184ba77e2f7"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "9f7547664c2e2f24187c2951b0111233"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "029e9c231b538f1cd9c1f6dc20298d04"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "07edc52438d72bab6e09837f07ab241a"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "d6f43224cf43c024a825b37512368713"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "bb31dab5e264624860de07b15489009e"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "094d57c5f9ce0afd4cc02ec2d34f8e48"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "abeeac7df4714c5daf38a637ec932b88"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "b3b684bb5b4160eba3b63ff2c9934e68"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "de3c8c1a8921b43ff9a81d92087714ed"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "6873e3720e69b334834a8b03d1009d6a"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "e495b2b9d8e10550c32c397f01f2fdcd"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "83876ab7bf0bc65352e933618892a2ca"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "243a541881d826ab7437120cc27efe78"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "e7641e9d20d9802ef4fc865b186c2a2b"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "efb597e32fed708a40c4d408377f60c8"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "9dcc93fbd0dbc911575ec89358c13ac8"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "e42a1e0f34c41da957d17e5e6eef2118"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "bb601e336515f709a98db6a103795c8a"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "658f7d56c8845e1fec52e217726e2d78"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "e9233306a139201d5e18da42dd4a6bcc"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "86c4896537ef8d8a6c3631828f3e6a04"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "9bb971382736172226ad9bb5ab5959dc"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "c7a1782695733c34573bf5cfbbf38df3"
  },
  {
    "url": "1.x/packages/add-menu.html",
    "revision": "74c92062f5888763a21e96165f727ec3"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "496492ab7c04a151ea12dae9b094fc09"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "08e0cfcb1b39fa43d758e07d26cc4f30"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "70edde9fcf5b0896cd8e7cd0763e5162"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "a77cf4f5014e3a35bd1668a4761123d1"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "8c357180437471993d8cbd059ce77ae2"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "79d8b164c70aab0465512bb2271a0abf"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "9f8ba5b5dd7a53c05b4bb9c467ae6c52"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "ff750bd456d173f20b756b7e8763e9e2"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "ea2870cbb17bc667b3070534f839ea13"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "54c2e7673ea38ae5862969c20df9fa86"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "864df5549a347f4e232b168b662baea0"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "ce0c8f4f0ea5586ee765bcb2c940ae2d"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "0ed512c86884696c06fffa13e9d6e7c6"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "f5919be779f7396f8e8114b9af36a7ed"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "c171f08af32b1c1af92acd52d676bca2"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "46faf4cfcc67a765254aa18032a69409"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "632c42171558f038460c77315d1aaf09"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "17611bd496439af06e92a72dfbd1151e"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "59e4c270b451369a72be545c1109438f"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "17163efd27e7e441717e280db6272d7c"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "d007bd62e6683fe066393d929d77bfe4"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "39f6b803021a3123c668da4ba053313f"
  },
  {
    "url": "404.html",
    "revision": "45d655a149c4babfc6e971fd45c672f9"
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
    "url": "assets/js/69.f8bd22fd.js",
    "revision": "8faf2ed08f05b5bb58b8156cce578ee6"
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
    "url": "assets/js/app.0a70dff9.js",
    "revision": "bf13a03a3c8b90d30aa891329a61d3af"
  },
  {
    "url": "index.html",
    "revision": "2e0de35d00258131967a007114e809e8"
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
