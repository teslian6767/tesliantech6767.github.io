'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "63314e437b03331594c6c59c2731d009",
"assets/AssetManifest.json": "697c816da7400605481f7c0711828fbd",
"assets/FontManifest.json": "a0a3437493bda9ea6dd0975490a2e100",
"assets/fonts/MaterialIcons-Regular.otf": "063a07c85497870a6a830d8c9b4b1093",
"assets/images/socialv/backgroundImage.png": "ead53bc055d36b859d462f33e0de8e22",
"assets/images/socialv/faces/face_1.png": "99d0c2fc28f5b00890d033f08e09ef2d",
"assets/images/socialv/faces/face_2.png": "e6c511e1b0b40031c87c5ba44752ccf6",
"assets/images/socialv/faces/face_3.png": "61fa1e1f9411c15b54127eacb97f6ea3",
"assets/images/socialv/faces/face_4.png": "801b7161e8e5e4c0136dfd6b747c001f",
"assets/images/socialv/faces/face_5.png": "749feaaed082856be3dabcb9346d24f5",
"assets/images/socialv/faces/face_6.png": "192ed8708a424573dcb9f9824473006d",
"assets/images/socialv/gifs/success_tickmark.gif": "fbd364ae335760ee4badb56500b9f606",
"assets/images/socialv/icons/ic_2User.png": "7acb390c9a7a835854274b1be34123c4",
"assets/images/socialv/icons/ic_3User.png": "4189c0aad3a1ca347299d10bb47b25ae",
"assets/images/socialv/icons/ic_Cake.png": "b90d35e330043e9fbb320aca276cf35a",
"assets/images/socialv/icons/ic_Calendar.png": "3db07b26b210d3d61ded40daad53b489",
"assets/images/socialv/icons/ic_Camera.png": "3cdfab29095bce72e7ec8112bf1766f4",
"assets/images/socialv/icons/ic_CameraPost.png": "5659af5f9d5910b16e0c506868f8ad5f",
"assets/images/socialv/icons/ic_Chat.png": "f37b8273c3490c29865490fa048ebfc0",
"assets/images/socialv/icons/ic_CloseSquare.png": "b95e525e1f0b38807049bfe678590caa",
"assets/images/socialv/icons/ic_Document.png": "ea5f105d3571cd060d27141d52fb626b",
"assets/images/socialv/icons/ic_Facebook.png": "03c3adf6ffcb6c0e3825aa635bd3cbac",
"assets/images/socialv/icons/ic_Folder.png": "18eeccf05c12d860285da0ed049da882",
"assets/images/socialv/icons/ic_GlobeAntarctic.png": "53dd9197212fd43f85acd7edde52244e",
"assets/images/socialv/icons/ic_Google.png": "ca2f7db280e9c773e341589a81c15082",
"assets/images/socialv/icons/ic_Heart.png": "0fd292c9c019737b062c07c656112724",
"assets/images/socialv/icons/ic_HeartFilled.png": "9304ad3e5c4cde745084752689c83083",
"assets/images/socialv/icons/ic_Hide.png": "ea2710a68193d307a1e0d5403e4f9f90",
"assets/images/socialv/icons/ic_Home.png": "9d2452e4b3671f34a4ccde504f47c7ed",
"assets/images/socialv/icons/ic_HomeSelected.png": "2d1bba16b292e08404a48e79c32a517c",
"assets/images/socialv/icons/ic_Image.png": "fd1ba8d2c61ff1cf1857b74c38b6fdd2",
"assets/images/socialv/icons/ic_Location.png": "358bc9e35a89cd6403bee1d226877804",
"assets/images/socialv/icons/ic_Logout.png": "ff3487459b54cbb88de7208814f3b039",
"assets/images/socialv/icons/ic_More.png": "0dcd755878b326754172e0505ab23197",
"assets/images/socialv/icons/ic_Notification.png": "2ed3329656094ca096a0e6e7f50a0006",
"assets/images/socialv/icons/ic_NotificationSelected.png": "0e9afb5dda74dcae536ba87f8d6452c0",
"assets/images/socialv/icons/ic_Paper.png": "e890cd41a0b47ff65b166a98d2dd1f54",
"assets/images/socialv/icons/ic_Plus.png": "ead0427ca0e8b975145773e72a3d8d2a",
"assets/images/socialv/icons/ic_PlusSelected.png": "ebbac6b7263609056bd15aa033763150",
"assets/images/socialv/icons/ic_Profile.png": "c6980d98f0cf2dc5e077d751380c80b8",
"assets/images/socialv/icons/ic_Search.png": "0fb7495289dda40b6dd36348a2044834",
"assets/images/socialv/icons/ic_SearchSelected.png": "96cd8a4b4fadfca23c33e5b40949a168",
"assets/images/socialv/icons/ic_Send.png": "bbfa592eb065d72ff48db27093aba8cb",
"assets/images/socialv/icons/ic_Star.png": "aaf1abea4ec92985e2cd5ec6ff4ca7ff",
"assets/images/socialv/icons/ic_TickSquare.png": "83ba737a0f6bee23b4362515c648d560",
"assets/images/socialv/icons/ic_TimeSquare.png": "a563ad914ed3d68fbded78161339ed5e",
"assets/images/socialv/icons/ic_Twitter.png": "0251d8ee95aa6d1f3400faa3b46b4bcf",
"assets/images/socialv/icons/ic_User.png": "4a8b72594f0885f452c377f4b45a14b3",
"assets/images/socialv/icons/ic_UserSelected.png": "e4c8d75c9b80bd59128dbf1f37a9f0a4",
"assets/images/socialv/icons/ic_Video.png": "10ea3ea52a01804f5d89cb378058addf",
"assets/images/socialv/icons/ic_Voice.png": "dbb49130e3117083a44f6ddfc3ca4ffc",
"assets/images/socialv/postImage.png": "6acb20ec89046d51ec0f8b923058d379",
"assets/images/socialv/posts/post_one.png": "4f5573fbf1c82785acec94108b20264e",
"assets/images/socialv/posts/post_three.png": "3583005bc3cfd92eb293c5f0872ca576",
"assets/images/socialv/posts/post_two.png": "8240224ac74ad22aafac66889add3548",
"assets/images/socialv/storyImage.png": "b621cdb74614960a5a58df208c7bceef",
"assets/images/socialv/svAppIcon.png": "31712072442b47ae6173728f0f314a6f",
"assets/images/socialv/svSplashImage.jpg": "d0626d28aa17450990123b8a27934f73",
"assets/NOTICES": "31c2489fc5c6ad6878c4509bf3333a16",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/packages/nb_utils/assets/icons/ic_beautify.png": "a680304f89d7cf2de6ebaabcb05e6947",
"assets/packages/nb_utils/assets/lottie/typing.json": "e5cad2457b51962714dfde13e0931a9d",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "4fe1928e582fd2e3316275954fc92e86",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "800cfb740d03a0c8f33b7443e54d829d",
"/": "800cfb740d03a0c8f33b7443e54d829d",
"main.dart.js": "a99189b2a6de32d19b950b49d21a950c",
"manifest.json": "ae1e13b5a33b6da7eaa688da9f61dbbe",
"version.json": "0f82c502b39d1041884b46427631d9db"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
