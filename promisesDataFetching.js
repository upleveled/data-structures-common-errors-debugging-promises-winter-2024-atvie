import { fakeFetch } from './util/fakeFetch.js';

// Create an array with 2 elements the array will be in the correct order
const responses = [];

// Path YouTube: youtube is faster
// Path Google: google is faster

// Path YouTube: 1
// Path Google: 1
console.log('start fetching youtube');
fakeFetch('https://example.com/youtube')
  .then((youtubeResponse) => {
    console.log('done fetching youtube');
    // Path YouTube: 3
    // Path Google: 4
    responses[0] = youtubeResponse;
    // If both are done, log both responses
    if (responses[0] && responses[1]) {
      console.log(responses);
    }
  })
  .catch((error) => {
    console.log(error);
  });

// Path YouTube: 2
// Path Google: 2
console.log('start fetching google');
fakeFetch('https://example.com/google')
  .then((googleResponse) => {
    console.log('done fetching google');
    // Path YouTube: 4
    // Path Google: 3
    responses[1] = googleResponse;
    // If both are done, log both responses
    if (responses[0] && responses[1]) {
      console.log(responses);
    }
  })
  .catch((error) => {
    console.log(error);
  });

// Await example, if you could use async/await
// const youtubeResponse = await fakeFetch('https://example.com/youtube');
// const googleResponse = await fakeFetch('https://example.com/google');
// console.log(youtubeResponse, googleResponse);

// Await + Promise.all example, if you could use async/await
// const [youtubeResponse, googleResponse] = await Promise.all([
//   fakeFetch('https://example.com/youtube'),
//   fakeFetch('https://example.com/google'),
// ]);
// console.log(youtubeResponse, googleResponse);
