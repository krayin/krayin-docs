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
    "url": "1.x/advanced/events.html",
    "revision": "9a6f9957b8cc4d1c15be36d26b306049"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "b75402a8bf07b91f20c0ff71f635fbf9"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "36675be4d5936f949ce897698e9fd271"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "aac4917d518ef52c83e0949cdc0197be"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "abaef788a2c6b98534caa772491b4d8e"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "045f9e119830aebd7b6e64785e50d95d"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "30b7d6ef16f4bdd34b094c96c9c4688e"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "8795e435fdd5f138b8dc76264cba7bdb"
  },
  {
    "url": "1.x/architecture/index.html",
    "revision": "39f022a877035952cd01a08ad674be37"
  },
  {
    "url": "1.x/architecture/modular-design.html",
    "revision": "37e399305f0446d04dc6a2a4ddcf3ca2"
  },
  {
    "url": "1.x/architecture/packages.html",
    "revision": "9e762a1dfac5aa945bf2f4c6cc5b109d"
  },
  {
    "url": "1.x/architecture/repository-pattern.html",
    "revision": "95fba3857565dff7eb3a813262a54490"
  },
  {
    "url": "1.x/architecture/theme.html",
    "revision": "d2bc35f26d6d2f742591c67be985a660"
  },
  {
    "url": "1.x/custom-attributes/custom-attribute.html",
    "revision": "d53a279b2f50e3afb7f0b0601e2f3440"
  },
  {
    "url": "1.x/custom-attributes/index.html",
    "revision": "7b9235dfc3a490d6438eb2fd977c45c1"
  },
  {
    "url": "1.x/custom-attributes/uses.html",
    "revision": "55c8ea38070eb5e7ed0f6dc1f5e7cb23"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "5a7d884529c9af04f7aa915694535a5d"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "2ddac9688d919bc30825bdb169b0b318"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "d5719df7eaa048423334ec6661950b1e"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "1e52edc3f14998734b3584ea1b057776"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "00ae37d0975bdc5dfeb19164e03944a2"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "a0632409db5ea4d4016f33364b3fa481"
  },
  {
    "url": "1.x/packages/assets.html",
    "revision": "647fbf9b4ff8ae209b82948c329f8223"
  },
  {
    "url": "1.x/packages/controllers.html",
    "revision": "81cdc3f00ed8db6b8a17bd4611d79c24"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "86aec942c0e646d89f62e2de8a37ec4a"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "7822ac20cf31ea265c9e38ccf3578c2c"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "c7a060b54112e65eb712a965d3db33f9"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "6363e27d459d2879cc6d261fce797d02"
  },
  {
    "url": "1.x/packages/datagrid.html",
    "revision": "b6359827a1796ef42616433b838cd429"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "66716bd053ac3835f9cf0718c0b4fb1d"
  },
  {
    "url": "1.x/packages/layouts.html",
    "revision": "4532fba3d8f4396d71d54c5dff47d089"
  },
  {
    "url": "1.x/packages/localization.html",
    "revision": "3abd3254c94a989e65facdb809b0071d"
  },
  {
    "url": "1.x/packages/routes.html",
    "revision": "f4bce100908ecb1806d905abee66dcdd"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "5ad1521f1ae594c9649f54bb20196038"
  },
  {
    "url": "1.x/packages/validation.html",
    "revision": "3e76a3d348ae070fbf29183c19fefa86"
  },
  {
    "url": "1.x/packages/views.html",
    "revision": "19930ac67bbb4fa933c240633a4f5ab1"
  },
  {
    "url": "404.html",
    "revision": "1de175be67a003d59a0b3b47066775ae"
  },
  {
    "url": "assets/css/0.styles.a79998da.css",
    "revision": "1096b8b01cf4cddbf21e4a3dc83e2859"
  },
  {
    "url": "assets/img/attribute-list.89e3b2c1.png",
    "revision": "89e3b2c136dec328544517950692af85"
  },
  {
    "url": "assets/img/attribute-step-1.6974bd2d.png",
    "revision": "6974bd2d2913a869d45ff668d7c859cd"
  },
  {
    "url": "assets/img/attribute-step-2.dc4d7a75.png",
    "revision": "dc4d7a75711e1198f8d6b21f524ca905"
  },
  {
    "url": "assets/img/attribute-step-3.c8ca7729.png",
    "revision": "c8ca772907148ab6f2387ba16b8490d0"
  },
  {
    "url": "assets/img/attribute-step-4.95b43fb7.png",
    "revision": "95b43fb77b71b17828c0963bc345ed4f"
  },
  {
    "url": "assets/img/limiting-error-messages.36e9c79d.jpg",
    "revision": "36e9c79d66b821706509f4c1d12bfd7c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.48df4328.js",
    "revision": "71807a31e31bb1ae32792356df0d9b99"
  },
  {
    "url": "assets/js/10.1dba64eb.js",
    "revision": "72f7408ea808478e63fc8e43b7ead204"
  },
  {
    "url": "assets/js/11.c800de4e.js",
    "revision": "d50fa0882ee680542de6be434140d724"
  },
  {
    "url": "assets/js/12.240d8bfd.js",
    "revision": "cf8e392bf820243e9e3182c0c6e7dd80"
  },
  {
    "url": "assets/js/13.f7263ce6.js",
    "revision": "c0da7c230039ffc31d602accceac17c8"
  },
  {
    "url": "assets/js/14.9fe61dd3.js",
    "revision": "ffa0ebd4441572f94344e2570c3e2fee"
  },
  {
    "url": "assets/js/15.2636a4e7.js",
    "revision": "896cdd4ebd4b2c580a6b44062cec1dd7"
  },
  {
    "url": "assets/js/16.58335ce6.js",
    "revision": "74d291aee8ca1a0896bcb0deda5c6955"
  },
  {
    "url": "assets/js/17.23200551.js",
    "revision": "ba2d528afbbda53f9c09cf63076abc10"
  },
  {
    "url": "assets/js/18.21248741.js",
    "revision": "3dd4e4c310a9d8efc05afe55f35dce64"
  },
  {
    "url": "assets/js/19.78e96951.js",
    "revision": "f22a8fb0e7e8f524070d33baac4db3c8"
  },
  {
    "url": "assets/js/2.c7e1a4cb.js",
    "revision": "df686695227324a65d3c6aba2808e148"
  },
  {
    "url": "assets/js/20.18134eb5.js",
    "revision": "a5fdf0314c6f81bc378bbf0b0ebf9c7a"
  },
  {
    "url": "assets/js/21.22b0536d.js",
    "revision": "d76ef05f8d304f7b678fb95af09c5c3f"
  },
  {
    "url": "assets/js/22.53075cde.js",
    "revision": "b939dcbfd4aa784a85b643f6291af834"
  },
  {
    "url": "assets/js/23.828fb928.js",
    "revision": "de78f070d7d3accf744555dfe9b1dece"
  },
  {
    "url": "assets/js/24.f663eee6.js",
    "revision": "5d93635482cbeab18537bad1c9ccf2ff"
  },
  {
    "url": "assets/js/25.3abc1e83.js",
    "revision": "223ef9e8997a50f1b01dcd29415bcb30"
  },
  {
    "url": "assets/js/26.fa7a70ef.js",
    "revision": "2dd00b2447b149ab5bf2b8bb2af9edaa"
  },
  {
    "url": "assets/js/27.5887633f.js",
    "revision": "8b318b76c9504548ded928011cff13c4"
  },
  {
    "url": "assets/js/28.bdd80b37.js",
    "revision": "1ea61d49755b583285e7b1a2a2ec32dc"
  },
  {
    "url": "assets/js/29.4b08399e.js",
    "revision": "2a55f29e5bf5bdaf4f96b723a5f216f8"
  },
  {
    "url": "assets/js/3.7b074b0f.js",
    "revision": "a43c3f332e6b46b6a5d270ff2f76b65d"
  },
  {
    "url": "assets/js/30.bb77d9a2.js",
    "revision": "cda0d19f3d3d9ced5ac987c23b84b43c"
  },
  {
    "url": "assets/js/31.33f4821f.js",
    "revision": "f030b0d737934242668a68c822cb7834"
  },
  {
    "url": "assets/js/32.aa57d6f0.js",
    "revision": "521e91a1819c581254626b2a25005f4d"
  },
  {
    "url": "assets/js/33.9816133b.js",
    "revision": "05ec6ce3252b92ee1a3549b40a2a0e39"
  },
  {
    "url": "assets/js/34.e36dc895.js",
    "revision": "255b781969813c67bad73c276514bedc"
  },
  {
    "url": "assets/js/35.54f27612.js",
    "revision": "112f9019728ccab6e8c7ebd5e5fe88be"
  },
  {
    "url": "assets/js/36.7999bc44.js",
    "revision": "c847662dceb7b964a1210f03e4c3219e"
  },
  {
    "url": "assets/js/37.b5a49134.js",
    "revision": "72379b0c88f34e744e054b09fc8456f4"
  },
  {
    "url": "assets/js/38.804ded6f.js",
    "revision": "51758c4a91d710093e39e1e5be040ecc"
  },
  {
    "url": "assets/js/39.f2e156ac.js",
    "revision": "324d3eee9b09db4bed8516e3351ac3e5"
  },
  {
    "url": "assets/js/4.cc6092b9.js",
    "revision": "a663fb5c0a6a178c54e85505ff4d911c"
  },
  {
    "url": "assets/js/40.bad1cd62.js",
    "revision": "41e93b6375b77259648232b639ce4e48"
  },
  {
    "url": "assets/js/41.528a517a.js",
    "revision": "526d871c38e1cd2d578e9f00e1f8258a"
  },
  {
    "url": "assets/js/42.1fbc1407.js",
    "revision": "d2273b8fafd9cffef9361131e66cf2da"
  },
  {
    "url": "assets/js/43.bb5be4b5.js",
    "revision": "7a05a5075c5f12d5198c282f47325ad8"
  },
  {
    "url": "assets/js/44.84e2eb55.js",
    "revision": "4f3ff62cf53b8a99ce7f438a58d23369"
  },
  {
    "url": "assets/js/45.04f52ffa.js",
    "revision": "57b0e44afae7c4d8be2ca752d041ab1a"
  },
  {
    "url": "assets/js/46.8385a633.js",
    "revision": "80a64dcd619db0bb7cd6d6a9e30e223f"
  },
  {
    "url": "assets/js/47.6a8acc46.js",
    "revision": "ceb2f32ce724f7a555c35611185ddfc9"
  },
  {
    "url": "assets/js/48.60a37f0b.js",
    "revision": "b606fc1a97f30ede31e29a935b2eea9d"
  },
  {
    "url": "assets/js/49.0ce5ac3f.js",
    "revision": "e9f7797c950e800728e1c0061ddc973f"
  },
  {
    "url": "assets/js/5.0e6a8629.js",
    "revision": "bfb01344556403d704af1c51ff761cff"
  },
  {
    "url": "assets/js/50.cc24846d.js",
    "revision": "d0a5baa7d49667d5a965e4992e9ee0da"
  },
  {
    "url": "assets/js/51.529357c2.js",
    "revision": "3ed669c4701c5048e09f25d13f388a2c"
  },
  {
    "url": "assets/js/52.da80d54a.js",
    "revision": "f0b3b8d06ec2206699f77f6f563792e8"
  },
  {
    "url": "assets/js/53.7aad71f2.js",
    "revision": "30b0ceaecf7a02809761d945ef1615ac"
  },
  {
    "url": "assets/js/54.8856cb22.js",
    "revision": "7331348c3b9e54ab2f523c35c92c6437"
  },
  {
    "url": "assets/js/55.2a96f054.js",
    "revision": "40a16be93a7d281c31c9b760a2ce366c"
  },
  {
    "url": "assets/js/56.6a018368.js",
    "revision": "8540ab2c08e865c973f033d2c3816c6d"
  },
  {
    "url": "assets/js/57.9467add1.js",
    "revision": "23aa5856ed3eded207196b07a2094f0b"
  },
  {
    "url": "assets/js/8.7c07cf4b.js",
    "revision": "b3ab52ca4f6f4e905038e74c27fdd6a4"
  },
  {
    "url": "assets/js/9.b6ae50ed.js",
    "revision": "4ccf1071a6c887660c5ed167472f0b4a"
  },
  {
    "url": "assets/js/app.6fd5b9b0.js",
    "revision": "dff854906e60d545b8330ae010e34050"
  },
  {
    "url": "assets/js/vendors~docsearch.df01eec3.js",
    "revision": "3ceb914979b3a4e2e67dd9ae920dd6fa"
  },
  {
    "url": "index.html",
    "revision": "4eab8741cca9858368e87597281520f4"
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
