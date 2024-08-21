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
    "revision": "d9b5f1fd3df4103ec5a91ff0e55a50aa"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "3a2bb0d923c464e0fef583f397ff7fa5"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "14e186b67a40894e71231e52b0cd1efd"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "8cd658176e9666f7cf76b013e47a210a"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "a7dbcbf66b9bc7988931c91f16ec0079"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "566c5690aa603d85f152e9c5acbfec46"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "ce183bfea6b18ce7686c01b068f5187f"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "ce90a41368ba8fada390870736bbdbf9"
  },
  {
    "url": "1.x/architecture/index.html",
    "revision": "a061f2127c16158a1ae694591681482f"
  },
  {
    "url": "1.x/architecture/modular-design.html",
    "revision": "e5664f7ba84376f86325a449e97f3701"
  },
  {
    "url": "1.x/architecture/packages.html",
    "revision": "be4804cf689c4efe325860dc4dfb259e"
  },
  {
    "url": "1.x/architecture/repository-pattern.html",
    "revision": "860792b36225986a54e00ef34cdccc97"
  },
  {
    "url": "1.x/architecture/theme.html",
    "revision": "9b3ce21cb8fd12b2f0d7ab26cad0914d"
  },
  {
    "url": "1.x/custom-attributes/custom-attribute.html",
    "revision": "5d4217b520806dacafa8e30bb56c741d"
  },
  {
    "url": "1.x/custom-attributes/index.html",
    "revision": "0ac3852927e4df6264a3c49a9a849c8c"
  },
  {
    "url": "1.x/custom-attributes/uses.html",
    "revision": "84e2f378935ffb3ac980f6a211269bb8"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "e203fc397c2816edc9a6c98db6740ded"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "96c867047e7a7c51466275c16b5c1c4d"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "a1ea648519215c9c82bfaede21cee471"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "bf19b98e06639f059108aa37aba3924d"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "30bdd9024c6e5c4f660ae2349c0fbf3b"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "1c7343cfd64d25398b2178ea675738f0"
  },
  {
    "url": "1.x/packages/assets.html",
    "revision": "3d4e7bbef95e9f5c5ace88e38edd4baa"
  },
  {
    "url": "1.x/packages/controllers.html",
    "revision": "bc3f3441c10dcf735e70311346b47661"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "7fbd6947e3aba1cb1b5005ffde5ee53f"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "e7f5aaf8ae45cca8023105c1a36f175d"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "4fb0c70ba4b68892fe8aba1c2ce26c66"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "1cded7cc2c44a4b10eb706a8d216b2bd"
  },
  {
    "url": "1.x/packages/datagrid.html",
    "revision": "a4c97b16a0b1a9151868111b0e11b784"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "e1549ad639760052bb3585e36e1a1b8b"
  },
  {
    "url": "1.x/packages/layouts.html",
    "revision": "65c9bf2982784e9fa2062a0945ffe132"
  },
  {
    "url": "1.x/packages/localization.html",
    "revision": "c513b972fdafbc10147084a5900d2603"
  },
  {
    "url": "1.x/packages/routes.html",
    "revision": "e3684ef11fceaa4052b27e0966267dee"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "50e880cb6c4665d8d45d6d972dcb4be6"
  },
  {
    "url": "1.x/packages/validation.html",
    "revision": "cbf1fb1f114a8dfe44b6ed4303d5517a"
  },
  {
    "url": "1.x/packages/views.html",
    "revision": "e901d79ecc01954c5ff6c7b635ef0af7"
  },
  {
    "url": "404.html",
    "revision": "af14e3577e37044b70004bb9b68d9289"
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
    "url": "assets/js/21.eeed2733.js",
    "revision": "ab4c65b162812c75ccb4251402e898d3"
  },
  {
    "url": "assets/js/22.53075cde.js",
    "revision": "b939dcbfd4aa784a85b643f6291af834"
  },
  {
    "url": "assets/js/23.82174da6.js",
    "revision": "c5943af66b0e71f10e288112f17f2f32"
  },
  {
    "url": "assets/js/24.f663eee6.js",
    "revision": "5d93635482cbeab18537bad1c9ccf2ff"
  },
  {
    "url": "assets/js/25.ab4e4db5.js",
    "revision": "f45c07b58d4c219a42f47de7aaf904e7"
  },
  {
    "url": "assets/js/26.3955f253.js",
    "revision": "0ef5c31ad6a8b1044106a4f38a37d192"
  },
  {
    "url": "assets/js/27.5887633f.js",
    "revision": "8b318b76c9504548ded928011cff13c4"
  },
  {
    "url": "assets/js/28.f9d5b92f.js",
    "revision": "cdd0f20c55a4ab09bd404616ea97eb92"
  },
  {
    "url": "assets/js/29.192a8672.js",
    "revision": "023020b1df8b5e76541b9fc5e2c5d315"
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
    "url": "assets/js/33.b3c0de1f.js",
    "revision": "579a6267f4779412c8450664686a06b6"
  },
  {
    "url": "assets/js/34.6cb9f5e1.js",
    "revision": "27e57b160da8f075b3e07bdd5d3bb302"
  },
  {
    "url": "assets/js/35.c544496e.js",
    "revision": "91df73aa227d13926e80364e71edacce"
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
    "url": "assets/js/38.28d0520f.js",
    "revision": "87a5339de5a94ffd68954ae082353266"
  },
  {
    "url": "assets/js/39.6f2f06d0.js",
    "revision": "0349ce1e4a606ea83bbb80a177c8cb1d"
  },
  {
    "url": "assets/js/4.cc6092b9.js",
    "revision": "a663fb5c0a6a178c54e85505ff4d911c"
  },
  {
    "url": "assets/js/40.3c777840.js",
    "revision": "036862490bbe705cc84deaea08fe04eb"
  },
  {
    "url": "assets/js/41.7c677cd8.js",
    "revision": "0e59c0439c8150f169c23411eb202a7b"
  },
  {
    "url": "assets/js/42.f7743943.js",
    "revision": "723476f5648b52ec53d9d15f31ef38e8"
  },
  {
    "url": "assets/js/43.a4fb3446.js",
    "revision": "9da832131515946612869e50e8ddb50a"
  },
  {
    "url": "assets/js/44.e663f3fd.js",
    "revision": "d102413f701a29f97fbb5b9bdf54e14c"
  },
  {
    "url": "assets/js/45.c454c599.js",
    "revision": "76e54d808c56bbc2d112dc4209947a85"
  },
  {
    "url": "assets/js/46.2e18ea85.js",
    "revision": "1a7490ff7c5c7fb1dc53d9b7c469d72f"
  },
  {
    "url": "assets/js/47.1ec640e9.js",
    "revision": "067088b2b384585ac08e1e71fb2cc988"
  },
  {
    "url": "assets/js/48.3c2c2812.js",
    "revision": "b4bea400c8a6caa96efab89636a8fefb"
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
    "url": "assets/js/50.2b41a9d1.js",
    "revision": "be11aa49c7def98d181af6e53cd88caa"
  },
  {
    "url": "assets/js/51.a9e7d144.js",
    "revision": "920fc04d4ec187c373628fa1da5cfdbd"
  },
  {
    "url": "assets/js/52.2a1bd0f1.js",
    "revision": "9ec62e3a489924faa3ae51eb9a5f45f3"
  },
  {
    "url": "assets/js/53.1229fcc2.js",
    "revision": "26b6fdef1795ee1434cc7d44b7efd76c"
  },
  {
    "url": "assets/js/54.8856cb22.js",
    "revision": "7331348c3b9e54ab2f523c35c92c6437"
  },
  {
    "url": "assets/js/55.f410a510.js",
    "revision": "306d971f1cf9d5459dd0b05e3056ce1b"
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
    "url": "assets/js/app.34d78214.js",
    "revision": "1c2d5fe6c50cc1e6dcd473b828ef8d26"
  },
  {
    "url": "assets/js/vendors~docsearch.df01eec3.js",
    "revision": "3ceb914979b3a4e2e67dd9ae920dd6fa"
  },
  {
    "url": "index.html",
    "revision": "7b9a9a5b33a05456275532f2c5ec9186"
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
