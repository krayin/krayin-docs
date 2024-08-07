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
    "revision": "1257ef7b500849898b3a7376c14392fa"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "13af2743d171a3c6f75d2c16ab648868"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "ea1e7e32cdaf5279ddb9107f6b2c1e8e"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "f19b4501a42b64ae3a4afc66e328ca34"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "e50bd8ee432a7bf7a2e86af0aeabe537"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "224b3232636137db1a0aed8c4c5d675b"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "34ca26e6abd489a0c694b0d176cb7b8e"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "f9facc71aeac672be188749f911f5d79"
  },
  {
    "url": "1.x/architecture/index.html",
    "revision": "3c1be2a1a25493f5513f3d4bfd0433ef"
  },
  {
    "url": "1.x/architecture/modular-design.html",
    "revision": "866b017d6b662b678b1272e87e61ebaf"
  },
  {
    "url": "1.x/architecture/packages.html",
    "revision": "b2c85538438b61a76d9ad0cd968dedb5"
  },
  {
    "url": "1.x/architecture/repository-pattern.html",
    "revision": "5d0f09e6343e9b9734ab90cc9c9ee98a"
  },
  {
    "url": "1.x/architecture/theme.html",
    "revision": "f416ea135ee7f340858912fecc1ad976"
  },
  {
    "url": "1.x/custom-attributes/custom-attribute.html",
    "revision": "4b808ba0b6814acf237a02b0d9a9bd85"
  },
  {
    "url": "1.x/custom-attributes/index.html",
    "revision": "fad39a2b76559550c793ad776be5d09b"
  },
  {
    "url": "1.x/custom-attributes/uses.html",
    "revision": "3cc3737b95949e06283129c3f3d8b8f9"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "a99e22ccfd8b565fda12e3b19b19a2c6"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "42d31bda1aaddd0ed4381c4d3c8b9af3"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "68ec82e98d830f9bda9c540f83d2b03f"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "2b09ec0ba009bfaec317f2b2c85c021e"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "c0b412b01c1376ff60bdae400cd5b018"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "ec382e73b38f79c10d8e28b781315ae1"
  },
  {
    "url": "1.x/packages/assets.html",
    "revision": "81cf88e620e02336fe6d21fe725cf14b"
  },
  {
    "url": "1.x/packages/controllers.html",
    "revision": "a24c22a90d2b73ade664ae1a5f2d22bb"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "0960fafebf9a94d236805b2cbf9938b2"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "a2d5c8435a94c491dfe6a4e05b1182e6"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "5364836f458d4d821238b2942f3a8f87"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "b8339fb7bfb0cc3b3633ff08da86e0d2"
  },
  {
    "url": "1.x/packages/datagrid.html",
    "revision": "67eea16f9f4b0d7ec076eeec255e694d"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "aee384d98e5469c709559999c7b69e6b"
  },
  {
    "url": "1.x/packages/layouts.html",
    "revision": "8e7032dcbe62e847ff5cedc855a98d0e"
  },
  {
    "url": "1.x/packages/localization.html",
    "revision": "6dbe842eb3f6ba0cb384d49465b4c0d3"
  },
  {
    "url": "1.x/packages/routes.html",
    "revision": "830a4a12f1496ca9552797897aafeb38"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "89cf6ab712c40c479ad6edcbb3da79a5"
  },
  {
    "url": "1.x/packages/validation.html",
    "revision": "c260de8c3f65a19fc9459970122ab244"
  },
  {
    "url": "1.x/packages/views.html",
    "revision": "5a48977afe0ad5aff93ea319c9d7ec45"
  },
  {
    "url": "404.html",
    "revision": "491f6044b9089e24a6bbfef494abc8f7"
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
    "url": "assets/js/14.e72960fa.js",
    "revision": "715e8fa10a81268c3276a4c567becbd9"
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
    "url": "assets/js/21.5b6eadf2.js",
    "revision": "97752525ad73f72df4dd87db4c23416b"
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
    "url": "assets/js/25.b13100a3.js",
    "revision": "165f8c377aa45e3e8d58db8b3eaeb77e"
  },
  {
    "url": "assets/js/26.fdef7c6a.js",
    "revision": "3c0f9e8384aa51a05db8d0e56279b3dc"
  },
  {
    "url": "assets/js/27.53f5eed3.js",
    "revision": "d818b862242082ea28e449d21da819c4"
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
    "url": "assets/js/36.650631ed.js",
    "revision": "6d2295ef3a44cb51305878d7ddd7f6b6"
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
    "url": "assets/js/42.9745a024.js",
    "revision": "7a5887c6681b9b03847a5fe592fa94e1"
  },
  {
    "url": "assets/js/43.fd1dad19.js",
    "revision": "c2028379cf065d90dd5c4887c70a8f58"
  },
  {
    "url": "assets/js/44.aecf5f79.js",
    "revision": "6b5cc93347907ef75525d87649fa3139"
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
    "url": "assets/js/app.255df903.js",
    "revision": "6f66f2005003459faee06fc09dd7810e"
  },
  {
    "url": "assets/js/vendors~docsearch.df01eec3.js",
    "revision": "3ceb914979b3a4e2e67dd9ae920dd6fa"
  },
  {
    "url": "index.html",
    "revision": "5c14dcf07ab6a1662936b8c12eaae3ee"
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
