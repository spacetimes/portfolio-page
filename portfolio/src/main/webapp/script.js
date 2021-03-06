// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
* IDs of Spotify songs.
 */
 const IDS =
	['2uHMTG5xr9Xk7MrXIWrVUH', '0WSTInLqMrT9po0LAHpZCJ', '0TR8KRs0PwLQk1aG21aUW7', 
	'0BVRfqRHpYnXnv9t5yp9ai', '0yfFGJt1oeODR9VZYv12sT', '6GHoddehRDGxilfWRzksix'];

/**
* Picks a Spotify song to display.
 */
function pickSpotifySong() {
	let id = IDS[Math.floor(Math.random() * ids.length)];
	let url = 'https://open.spotify.com/embed/track/'
	createIframe(url.concat(id))
}

/**
* Create iframe with source as src.
 */
function createIframe(source) {
	let iframe = document.createElement('iframe');
	iframe.src = source; 
	iframe.style.width = '300px';
	iframe.style.height = '80px';
	document.getElementById('song-container').appendChild(iframe);
}

/**
* Get data from DataServlet.
 */
function getDataServlet() {
	const commentsContainer = document.getElementById('comments-container');
	fetch('/data')
	.then((response) => response.json())
	.then((comments) => {
		comments.forEach(commentObj => {
		commentsContainer.appendChild(displayComment(commentObj));
		});
	});
}

 /**
 * Display a comment 
  */
function displayComment(commentObj) {
	let divElement = document.createElement('div');
	divElement.textContent = commentObj.comment;
	return divElement;
}

/**
* Main function for when the page first loads.
 */
function onLoad() {
	pickSpotifySong();
	getDataServlet();
}