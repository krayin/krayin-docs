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
    "revision": "c70861a01d61cfb69cfa7edce45034fe"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "4c1e6b713a4118395af93055242bbd7b"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "5e610fe45be24a052c08fbcfcd67727b"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "3861cfd265d954e0c7676b8cc5a5dc2d"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "0cf75fae703952070e81f864e793a3dd"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "df23dd3d4e66033a80f720cd080c5472"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "94c9dccf36f1e6cb42f8bd16767663db"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "1c8384a0002e84fff9bf40d431ea84ab"
  },
  {
    "url": "1.x/architecture/index.html",
    "revision": "bdab9057a620e1f28123b1b9f2d8894a"
  },
  {
    "url": "1.x/architecture/modular-design.html",
    "revision": "9ff441765d569b258d0804a5e405a82a"
  },
  {
    "url": "1.x/architecture/packages.html",
    "revision": "a151eda20a1a6c10370b2550c2d43be9"
  },
  {
    "url": "1.x/architecture/repository-pattern.html",
    "revision": "e8726eb8be392331955e46012dd6ffdd"
  },
  {
    "url": "1.x/architecture/theme.html",
    "revision": "2617dd1f6ed197961cc4749672eaaf05"
  },
  {
    "url": "1.x/custom-attributes/custom-attribute.html",
    "revision": "7a02b9a15cdbf1e75852825263b1eeb9"
  },
  {
    "url": "1.x/custom-attributes/index.html",
    "revision": "800665b7c2da308b1f100f894e7fc30c"
  },
  {
    "url": "1.x/custom-attributes/uses.html",
    "revision": "096cbdf4fa25288dbdad12f6165a7902"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "563377f8fe7782aa1ef064455ccb550b"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "615cc1fa33c0e96aafda6bdd166a8963"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "9e3e20cc075e88502dd9d6443ff857d8"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "c53502859eb1e036b57ff030ccfd238e"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "b916e55991cd60e52892ee7c43bfe34d"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "615e5bec9fec06daf7c0e6ef05f10cac"
  },
  {
    "url": "1.x/packages/assets.html",
    "revision": "b5321d02449d4442d39957090dc5360e"
  },
  {
    "url": "1.x/packages/controllers.html",
    "revision": "60096463e4240172b5c26c4e6957d273"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "44b4b7380f52585839db7e1463bf2642"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "65062f68135d193d586622243f05f9d4"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "42f78aa280b25d0b6183f519a732aad1"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "757216212c66e1742c7f2850425521fb"
  },
  {
    "url": "1.x/packages/datagrid.html",
    "revision": "df0089bc9cb8168cdce0cab4f834f375"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "3343afb3c306de711abb94cb1f684a9b"
  },
  {
    "url": "1.x/packages/layouts.html",
    "revision": "6260c54211d4c31cb02698151eb4e94e"
  },
  {
    "url": "1.x/packages/localization.html",
    "revision": "e772c6be9bac9bf6405d8b67a06ee166"
  },
  {
    "url": "1.x/packages/routes.html",
    "revision": "c39f6c5207729f455f52f6e94e71fa8f"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "b28fcd6dc55eb535cc4fe6ff5d5e8a38"
  },
  {
    "url": "1.x/packages/validation.html",
    "revision": "70026ffeca798ff8294c35036f0d6262"
  },
  {
    "url": "1.x/packages/views.html",
    "revision": "d5eb76d361ab9b565d44684261100b72"
  },
  {
    "url": "404.html",
    "revision": "4514b00140dbdf75025e55f2096c5c5d"
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
    "url": "assets/js/14.9bc4762b.js",
    "revision": "84dca3b314ed0697619170c55e3f0d06"
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
    "url": "assets/js/21.fdbf014a.js",
    "revision": "9b5b2ecf67aabda18fd512906f09c6e8"
  },
  {
    "url": "assets/js/22.53075cde.js",
    "revision": "b939dcbfd4aa784a85b643f6291af834"
  },
  {
    "url": "assets/js/23.89816441.js",
    "revision": "3ceedc5a47be7697a3b495424d38cf0f"
  },
  {
    "url": "assets/js/24.2f8ac67d.js",
    "revision": "65f310bdc354e9a5809a48e9bb4be2e2"
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
    "url": "assets/js/29.126b2b89.js",
    "revision": "7ae2a63d6b8127b9e9b4cb3ea64600ad"
  },
  {
    "url": "assets/js/3.7b074b0f.js",
    "revision": "a43c3f332e6b46b6a5d270ff2f76b65d"
  },
  {
    "url": "assets/js/30.73ef8a1f.js",
    "revision": "bd7f50cb7df252014915c44334a3c10b"
  },
  {
    "url": "assets/js/31.e612ee89.js",
    "revision": "905eea30c2a72bbe7a35d5ea0c4ad8f4"
  },
  {
    "url": "assets/js/32.968a8ade.js",
    "revision": "b2c7b2158f7938fe5a90c67af4c36324"
  },
  {
    "url": "assets/js/33.b3c0de1f.js",
    "revision": "579a6267f4779412c8450664686a06b6"
  },
  {
    "url": "assets/js/34.2309d0b3.js",
    "revision": "3076ecd8d7b776ffe9cb3bf30d4fc505"
  },
  {
    "url": "assets/js/35.f28b0b80.js",
    "revision": "c5d35ca03efa1525bf1d4f2b1aba6c95"
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
    "url": "assets/js/38.3bbdeecf.js",
    "revision": "19463e6d4694718bcb257eb2ca518588"
  },
  {
    "url": "assets/js/39.6bf1725f.js",
    "revision": "7ee1a3b60e0f7d1802ba551800f4b6b0"
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
    "url": "assets/js/41.8c28b478.js",
    "revision": "69276e0f4dbadbdf3b06adfcd907413c"
  },
  {
    "url": "assets/js/42.9745a024.js",
    "revision": "7a5887c6681b9b03847a5fe592fa94e1"
  },
  {
    "url": "assets/js/43.fb975f24.js",
    "revision": "34f5cdaa0c628266cf6c97031f7eb81b"
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
    "url": "assets/js/46.709a3041.js",
    "revision": "f5586250ab7500bc91bf7d53b5826a11"
  },
  {
    "url": "assets/js/47.1ec640e9.js",
    "revision": "067088b2b384585ac08e1e71fb2cc988"
  },
  {
    "url": "assets/js/48.fabb7629.js",
    "revision": "8d8a8093855bfc14d128c2f5421eb7ec"
  },
  {
    "url": "assets/js/49.4787fee0.js",
    "revision": "9968cb5f9dcd877ecf9d83dda77efd53"
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
    "url": "assets/js/51.551531a2.js",
    "revision": "88064f0fcb4de51d254cfd39ed6ebb50"
  },
  {
    "url": "assets/js/52.c4db90f6.js",
    "revision": "96b9af61d411afe9b57cfd4bb64c4752"
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
    "url": "assets/js/55.fb5ba6ab.js",
    "revision": "ef7d60f6f94b4580730d3882f8a928d8"
  },
  {
    "url": "assets/js/56.f5780b89.js",
    "revision": "1da7326e8b1d2a9a5100df17d58bc9b1"
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
    "url": "assets/js/app.3c5d77d8.js",
    "revision": "99d5288c7f0e24d3339964f7bd67363f"
  },
  {
    "url": "assets/js/vendors~docsearch.df01eec3.js",
    "revision": "3ceb914979b3a4e2e67dd9ae920dd6fa"
  },
  {
    "url": "index.html",
    "revision": "86092e6527f6735605f36b3cb46c41d1"
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
