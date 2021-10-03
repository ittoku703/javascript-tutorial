window.onload = function () {
  const section = document.querySelector('section');
  const videos = [
    { 'name': 'crystal' },
    { 'name': 'elf' },
    { 'name': 'frog' },
    { 'name': 'monster' },
    { 'name': 'pig' },
    { 'name': 'rabbit' },
  ];

  let db;

  function init() {
    for (let i = 0; i < videos.length; i++) {
      let objectStore = db.transaction('videos').objectStore('videos');
      let request = objectStore.get(videos[i].name);
      request.onsuccess = function () {
        if (request.result) {
          console.log('taking videos from IDB');
          displayVideo(request.result.mp4, request.result.webm, request.result.name);
        } else {
          fetchVideoFromNetwork(videos[i]);
        }
      };
    }
  }

  function fetchVideoFromNetwork(video) {
    console.log('fetching videos from network');

    let mp4Blob = fetch(`videos/${video.name}.mp4`).then(response =>
      response.blob()
    );
    let webmBlob = fetch(`videos/${video.name}.webm`).then(response =>
      response.blob()
    );

    Promise.all([mp4Blob, webmBlob]).then(function (values) {
      displayVideo(values[0], values[1], video.name);
      storeVideo(values[0], values[1], video.name);
    });
  }

  function storeVideo(mp4Blob, webmBlob, name) {
    let objectStore = db.transaction(['videos'], 'readwrite').objectStore('videos');
    let record = {
      mp4: mp4Blob,
      webm: webmBlob,
      name: name
    }
    let request = objectStore.add(record);

    request.onsuccess = function () {
      console.log('Record addition attempt finished');
    }

    request.onerror = function () {
      console.log(request.error);
    }
  }

  function displayVideo(mp4Blob, webmBlob, title) {
    let mp4URL = URL.createObjectURL(mp4Blob);
    let webmURL = URL.createObjectURL(webmBlob);

    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const video = document.createElement('video');
    const source1 = document.createElement('source');
    const source2 = document.createElement('source');

    h2.textContent = title;
    video.controls = true;
    source1.src = mp4URL;
    source1.type = 'video/mp4';
    source2.src = webmBlob;
    source2.type = 'video/webm';

    video.appendChild(source1);
    video.appendChild(source2);
    article.appendChild(h2);
    article.appendChild(video);
    section.appendChild(article);
  }

  let request = window.indexedDB.open('videos', 1);

  request.onerror = function () {
    console.log('Database failed to open');
  };

  request.onsuccess = function () {
    console.log('Database opened succesfully');
    db = request.result;
    init();
  };

  request.onupgradeneeded = function (e) {
    let db = e.target.result;
    let objectStore = db.createObjectStore('videos', { keyPath: 'name' });

    objectStore.createIndex('mp4', 'mp4', { unique: false });
    objectStore.createIndex('webm', 'webm', { unique: false });

    console.log('Database setup complete');
  };

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('sw.js')
      .then(() => { console.log('Service Worker Registered'); })
  }
};
