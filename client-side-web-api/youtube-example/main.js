// Get references to DOM elements we need to manipulate
const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

const section = document.querySelector('section');

// When the window (tab) finished loading, run onClientLoad() to get
// It all started
window.onload = onClientLoad;

function onClientLoad() {
  gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Attach your key to the API
function onYouTubeApiLoad() {
  // To get a key for your own application:
  // 1. Go to https://console.cloud.google.com/apis/dashboard
  // 2. Create a new project if you've not already got one
  // 3. Click the Enable API button
  // 4. Choose YouTube Data API
  // 5. Click the Enable button
  // 6. Click create credentials
  // 7. Select "Web browser (JavaScript)" from the second dropdown
  // 8. Click the "Public data" radio button
  // 9. Click the "What credentials do I need?" button
  // 10. Copy your API key and paste it in below
  gapi.client.setApiKey(config.GOOGLE_API_KEY);

  // Attach an event listener to the form so that a search is carried out
  // when it is submitted - the search() function
  searchForm.addEventListener('submit', search);
}

function search(e) {
  // use preventDefault() to stop form actually submitting
  e.preventDefault();

  // create a search request using the Data API;
  let request = gapi.client.youtube.search.list({
    // set what kind of data the response will include
    part: 'snippet',
    // set the number of results that will be returned
    maxResults: 10,
    // set the search query to search for
    q: searchTerm.value
  });

  // send the request, and specify a function to tur when the response returns
  request.execute(onSearchResponse);
}

function onSearchResponse(response) {
  // Empty the <section> element
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }

  // Store the actual results of the search in a variable
  let results = response.items;

  // loop through the results and run displayVideo() on each
  for (var i = 0; i < results.length; i++) {
    displayVideo(results[i], i);
  }
}

function displayVideo(result, i) {
  // Create a div with a unique ID for each video, and append it to the <section>
  // The YouTube Iframe Player API will replace each one with
  // an <iframe> containing the corresponding video
  let vid = document.createElement('div');
  vidId = 'vid' + i;
  vid.id = vidId;
  section.appendChild(vid);

  // Use the YT.Player() constructor to create a new video player object,
  // Specifying the ID of the element to be replaced by it (the <div>)
  // A height and width, and an event handler to handle the custom onReady event
  let player = new YT.Player(vidId, {
    height: '360',
    width: '480',
    videoId: result.id.videoId,
    events: {
      'onReady': onPlayerReady
    }
  });

  // The onPlayerReady() hendler grabs the ID of each video, and checks its duration
  // If the duration is 0, the video can't be played, so we just delete it
  function onPlayerReady(e) {
    let myId = e.target.h.id;
    let duration = e.target.getDuration();
    if (duration === 0) {
      console.log(`Video ${myId} cannot be played, so it was deleted`);
      section.removeChild(e.target.h);
    } else {
      let myId = e.target.h.id;
      console.log(`Video ${myId} ready to play.`);
    }
  }
}
