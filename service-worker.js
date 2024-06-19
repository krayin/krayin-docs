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
    "revision": "f8c5fa37c4ac41a045b36be483669a87"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "0fdfbafaf9805c604ecac258a2b74b13"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "41762b5893b46d295348c2495cee9250"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "62d7595930a5fc494b89a209336fb455"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "6494dd9258c92dc37e4b4067e2dfba56"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "0d5c83a2efb9e60d5fbd917935d2a760"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "9bfe561b660f486c2770f057aa4c0591"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "53cd789c02317d66574ce9e0561340dd"
  },
  {
    "url": "1.x/architecture/frontend.html",
    "revision": "34be48a3209486d6cd9837a6cc7e2b56"
  },
  {
    "url": "1.x/architecture/index.html",
    "revision": "2d6f056c942d64f19ee448f858a8af11"
  },
  {
    "url": "1.x/architecture/modular-design.html",
    "revision": "4d3232313dec6773a5fe027eaf30ff83"
  },
  {
    "url": "1.x/architecture/packages.html",
    "revision": "eddf7d0f72ae41be0ab431015efdfca7"
  },
  {
    "url": "1.x/architecture/repository-pattern.html",
    "revision": "f6081ac7fc1252f88e512b3584badb12"
  },
  {
    "url": "1.x/architecture/theme.html",
    "revision": "c39f73887234996b171b2bbe0c96dff0"
  },
  {
    "url": "1.x/custom-attributes/custom-attribute.html",
    "revision": "ba5bd67d131aa5e3189da4aa29b86afb"
  },
  {
    "url": "1.x/custom-attributes/index.html",
    "revision": "36ce077c0c66bbd34902b9e5c14e277d"
  },
  {
    "url": "1.x/custom-attributes/uses.html",
    "revision": "aa6de825e08195d53b8d304b9d91bd89"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "bcbf144dea105ef811dd2cf535397bf1"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "e734829b8ccbe613816f3ba1d3f31235"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "e2b72a118c52d714d83690208d17cc9e"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "1516f7c0f91414e276f20b12f221b85c"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "8adfbf888357bdaf03cc2d88ef92a1bd"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "8b568a65aefc5abf969162f762b791f3"
  },
  {
    "url": "1.x/packages/assets.html",
    "revision": "a7b8bb9700bfc954be83e297022e2683"
  },
  {
    "url": "1.x/packages/controllers.html",
    "revision": "199d929b7d490f1de3db3e86485b258d"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "d3d7294c855a65cd46085189b92405f7"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "2f765749552ef5eba991ccd33b92f0be"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "2f4408cd45ec19397aba56a8852d796d"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "30f917dabde27d42c6cf8b9584ee8336"
  },
  {
    "url": "1.x/packages/datagrid.html",
    "revision": "dbd8ddd613bd9d5a98c0532bff9a20c9"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "4684a3a69e4911985d76a92a1d86388e"
  },
  {
    "url": "1.x/packages/layouts.html",
    "revision": "b1c887ab793abd0d44f4ebeae61313b1"
  },
  {
    "url": "1.x/packages/localization.html",
    "revision": "0b4127f715c804ae70591523f6b1f9d4"
  },
  {
    "url": "1.x/packages/routes.html",
    "revision": "8a2d9b30ad016a9d016409728da08a68"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "b541cc68c7cb8446cd89e98c5fd9190e"
  },
  {
    "url": "1.x/packages/validation.html",
    "revision": "e224882f45535b7e5dabbd4c73f1c402"
  },
  {
    "url": "1.x/packages/views.html",
    "revision": "c1900f7207be1ef0e81f337866fe1a68"
  },
  {
    "url": "404.html",
    "revision": "a4aea5fe5ac401771d732504e946a77b"
  },
  {
    "url": "assets/css/0.styles.2104eaab.css",
    "revision": "e973c5743bbac7e27333c230e5fb1046"
  },
  {
    "url": "assets/img/admin-acl.2c9417f5.png",
    "revision": "2c9417f5d740a394f74270dd1a6ef098"
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
    "url": "assets/img/category-package-output.5fb1d937.png",
    "revision": "5fb1d93735e9dae8ea9f318f88ff5ca4"
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
    "url": "assets/js/1.d9ff6c9f.js",
    "revision": "fac9aede228000c96e342f28f1f147fb"
  },
  {
    "url": "assets/js/10.ba067d93.js",
    "revision": "c654b8779674fe414a618332f00381ea"
  },
  {
    "url": "assets/js/11.7ffce9e0.js",
    "revision": "fa67b105d73cbae7d6a214382bea321d"
  },
  {
    "url": "assets/js/12.240d8bfd.js",
    "revision": "cf8e392bf820243e9e3182c0c6e7dd80"
  },
  {
    "url": "assets/js/13.c801f3cc.js",
    "revision": "2dddbf838d1599a7e67635eb9779c62e"
  },
  {
    "url": "assets/js/14.7ff45313.js",
    "revision": "02feae6872607c9da827033d30b23258"
  },
  {
    "url": "assets/js/15.a6fd06d5.js",
    "revision": "19de336ab53233c1f2aded8235683ba2"
  },
  {
    "url": "assets/js/16.052ed216.js",
    "revision": "bb702924db277ff53f113175bb3f05c5"
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
    "url": "assets/js/19.d58a4ae4.js",
    "revision": "19d4d7f9a507b3c3b6594fc3ee2bb983"
  },
  {
    "url": "assets/js/2.a84fc54c.js",
    "revision": "ccc7743085d678932216995b7eada4f5"
  },
  {
    "url": "assets/js/20.18134eb5.js",
    "revision": "a5fdf0314c6f81bc378bbf0b0ebf9c7a"
  },
  {
    "url": "assets/js/21.e58d59c5.js",
    "revision": "07ebb1ccb11f0834187574fe303e991f"
  },
  {
    "url": "assets/js/22.22d975be.js",
    "revision": "4e7eab8cdfd51041963beccc46b9c33a"
  },
  {
    "url": "assets/js/23.6ebf4a72.js",
    "revision": "3d80c17c71977b622a9b103ecd7b0d77"
  },
  {
    "url": "assets/js/24.38ca4f68.js",
    "revision": "08259da953c285becd12a7baad3c64e8"
  },
  {
    "url": "assets/js/25.4841c198.js",
    "revision": "db6ce4751dbe058acf8282ee5fd179dd"
  },
  {
    "url": "assets/js/26.1d5bc314.js",
    "revision": "447350a5e44b90b90ce711158a4f0271"
  },
  {
    "url": "assets/js/27.cf994e57.js",
    "revision": "caae2713240c47a93a43bea8d4563a6c"
  },
  {
    "url": "assets/js/28.8b0b73c3.js",
    "revision": "2191c500d32373fee08dec176615f241"
  },
  {
    "url": "assets/js/29.f9c494df.js",
    "revision": "279aa02c4560e827ecf2d02fb302de5b"
  },
  {
    "url": "assets/js/3.c3d3b13f.js",
    "revision": "8c84feabaf7a73d6f1ff0f1a0b53a2e0"
  },
  {
    "url": "assets/js/30.9e9b1e40.js",
    "revision": "ab898b5e3be8d28ce5ce27277ed559cf"
  },
  {
    "url": "assets/js/31.df7be907.js",
    "revision": "59a5071d6caced38497204a8d86298d6"
  },
  {
    "url": "assets/js/32.b01ad21c.js",
    "revision": "ded8219b9fc242efc8dcc6eb09a0e323"
  },
  {
    "url": "assets/js/33.2bc34f66.js",
    "revision": "0c386dc653a694f3064c551f6c2d8dc6"
  },
  {
    "url": "assets/js/34.aa6c0c40.js",
    "revision": "8c1fe14bb0a0c4efae16de5733033465"
  },
  {
    "url": "assets/js/35.4da0342d.js",
    "revision": "e2af6bb096f4889fe0048bedfdd5d3b7"
  },
  {
    "url": "assets/js/36.246a77b6.js",
    "revision": "ded822abae9e5b92ea85ab9763c999d0"
  },
  {
    "url": "assets/js/37.36a4288b.js",
    "revision": "0381906dd7124dfeb64a1ed131e10894"
  },
  {
    "url": "assets/js/38.1a89eb00.js",
    "revision": "f9e23b7e779fda73c0a358d0e03f11fc"
  },
  {
    "url": "assets/js/39.6bb8f0a9.js",
    "revision": "87a56991aca913e9ca5d94f6ee28596e"
  },
  {
    "url": "assets/js/4.489d92f7.js",
    "revision": "ff17ec563b947e3df32a7f380888e38d"
  },
  {
    "url": "assets/js/40.b9a0c4a6.js",
    "revision": "6b3c775e0520611a3b99b390f6cc82b2"
  },
  {
    "url": "assets/js/41.e7691912.js",
    "revision": "387f31cc8d4e0a7a54e2ba8109bbee1d"
  },
  {
    "url": "assets/js/42.00f38ca3.js",
    "revision": "eea9c0e9d0aa140a190ab33c91ec6b16"
  },
  {
    "url": "assets/js/43.c1990384.js",
    "revision": "bcaa129006c39a5be140f4cf03f9fdeb"
  },
  {
    "url": "assets/js/44.b7db83db.js",
    "revision": "ada47bbabebd28b5644230fa1e68e7ee"
  },
  {
    "url": "assets/js/45.5984e009.js",
    "revision": "8961066b3d37479f2cbeb1a61976d47c"
  },
  {
    "url": "assets/js/46.22e5a506.js",
    "revision": "1c29381fb0194d59878ce21e8b929408"
  },
  {
    "url": "assets/js/47.33235db7.js",
    "revision": "e8048ba61dac6f33d2399ee3cddd5a97"
  },
  {
    "url": "assets/js/48.94fb93fb.js",
    "revision": "160342384491d4e9ce0d33c996dee87d"
  },
  {
    "url": "assets/js/49.b7ef9b56.js",
    "revision": "fd210de86cb4e4eaf38c85fd5c50107c"
  },
  {
    "url": "assets/js/5.6645c8c1.js",
    "revision": "9587875876dc9d878d555f20de2e59b1"
  },
  {
    "url": "assets/js/50.eb1eeca3.js",
    "revision": "5931173add4b7d561e049fe93e83a459"
  },
  {
    "url": "assets/js/51.5b41db28.js",
    "revision": "7a39a0bb219dd2ea65976ab4633f71a8"
  },
  {
    "url": "assets/js/52.b29d2c14.js",
    "revision": "3658be66f4bdefe0dae00bff5a0f4325"
  },
  {
    "url": "assets/js/53.ecfa2cc2.js",
    "revision": "d101a6e1f0d0f5fc8a8d32c22eb563e2"
  },
  {
    "url": "assets/js/54.004783fc.js",
    "revision": "f346a8f73e5ce9505f000cef4db6f4ca"
  },
  {
    "url": "assets/js/55.26265076.js",
    "revision": "336a0757f923903108d4d2e947b567d5"
  },
  {
    "url": "assets/js/56.567c848a.js",
    "revision": "358ce711386c636992b2899cb82151f1"
  },
  {
    "url": "assets/js/57.1ae658eb.js",
    "revision": "02b256a52aae7d3bf75b5128d72edc59"
  },
  {
    "url": "assets/js/58.ac3c7cbe.js",
    "revision": "844755a8131378146ed2cecfeb859c8b"
  },
  {
    "url": "assets/js/8.a6063929.js",
    "revision": "9b4985ba9fe0283a0204e6a0c4346362"
  },
  {
    "url": "assets/js/9.e068db4a.js",
    "revision": "4ca554f40c7b8d440fd3e7fec50d47d9"
  },
  {
    "url": "assets/js/app.7cad34e0.js",
    "revision": "5a47ff2db8bccf40e34bdf5e35b444ba"
  },
  {
    "url": "assets/js/vendors~docsearch.d1cc44a3.js",
    "revision": "b26ca72edb7a1371570df6b3fb3fabfa"
  },
  {
    "url": "index.html",
    "revision": "5e88e7dda4826944ce390484ea999b65"
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
