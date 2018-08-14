console.log("Service worker working");

var cacheName = 'v1';
var cacheAssets = [
  'index.html',
  'restaurant.html'
];


//call install event
self.addEventListener('install', function(e){
  console.log('service worker installed');

  e.waitUntil(
    caches.open(cacheName).then(function(cache){
      console.log('Service worker: Caching Files');
      cache.addAll(cacheAssets);
    }).then(function(){
      self.skipWaiting()
    })
  );
});


// call activate event

self.addEventListener('activate', function(e){
  console.log('service worker activated');
})


//// TODO: fix file cache fetching file patch.
