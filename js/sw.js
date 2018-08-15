console.log("Service worker working");
//version 1 cacche
var cacheVersion = 'v1';

//array of all caches
var cacheAssets = [
  '../index.html',
  '../restaurant.html',
  '../restaurant.html',
  '/css/styles.css',
  '/css/hover-min.css',
  '/js/main.js',
  '/js/dbhelper.js',
  '/js/restaurant_info.js',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
];


//call install event
//store cache
self.addEventListener('install', function(e){
  console.log('service worker installed');
  e.waitUntil(
    caches.open(cacheVersion).then(function(cache){
      console.log('Service worker: Caching Files');
      cache.addAll(cacheAssets);
    }).then(function(){
      self.skipWaiting()
    })
  );
});


// call activate event
//clean up old cache
self.addEventListener('activate', function(e){
  console.log('service worker activated');
  //remove unwanted caches.
  e.waitUntil(
    caches.keys().then(function(cacheVersion){
      return Promise.all(cacheVersion.map(function(cache){
        if(cache != cacheVersion){
            console.log("Service worker: Clearing old cache");
            return caches.delete(cache)
        }
    })
  );
    })
  )
})


//// TODO: fix file cache fetching file patch.
