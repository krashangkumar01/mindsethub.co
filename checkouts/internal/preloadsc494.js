
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.54d7c3dfcdca6de329a8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5835.baseline.en.70722fe0e0ebe2db3cd4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4708.baseline.en.46544a91b1d55d5f9af3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.baseline.en.4a76a447edee315e82bd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.9a82a036df4258686127.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.baseline.en.7ec3164fc01d10bbabc6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5019.baseline.en.723e311f4a05eaa581cf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/7617.baseline.en.7d06e83ab45cb8ff3699.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.baseline.en.4108502d9f2c1ca7f6c3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8933.baseline.en.44a434a7ccdea4d9e968.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9962.baseline.en.7d2f9cadca1e4ab83a5a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5137.baseline.en.4eb9e61fc6ba940f4a33.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2594.baseline.en.d331c9523269335e12ad.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5449.baseline.en.e64333d27b4d929d4c01.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.en.5dae7bbdc62fd20ac1bf.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/5835.baseline.en.5c2e43b6efa1c24a1276.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.44428467e736b1c925f1.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.baseline.en.b43fa0e7db0766e44946.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/montserrat/montserrat_n4.1d581f6d4bf1a97f4cbc0b88b933bc136d38d178.woff2?h1=bWluZHNldGh1Yi5jbw&hmac=aefd2ab078d4d35482bba97f4c0b5877f032e211d79d289496fb3d1b456f7ef5","https://fonts.shopifycdn.com/montserrat/montserrat_n7.c496e9cf2031deec4c4bca338faa81971c8631d4.woff2?h1=bWluZHNldGh1Yi5jbw&hmac=7460aeec0c1e3ba309f86e63bfb7dbb2def45706079e8642f55afa5afc9fd44f","https://fonts.shopifycdn.com/lato/lato_n4.c86cddcf8b15d564761aaa71b6201ea326f3648b.woff2?h1=bWluZHNldGh1Yi5jbw&hmac=af251e43f5791cc6fa25ef1dfd561866a73c1cc263c755565df9ecb82bd489aa","https://fonts.shopifycdn.com/lato/lato_n7.f0037142450bd729bdf6ba826f5fdcd80f2787ba.woff2?h1=bWluZHNldGh1Yi5jbw&hmac=3cfa972a402d43287ce4b640127d34b3796dc506202fe04de1b17837fa76c41d"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0875/7467/5730/files/Funnel_V3_Frame_3_1_x320.png?v=1719617064"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  