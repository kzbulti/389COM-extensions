// contentScript.js

// Get all the paragraphs on the page
const paragraphs = document.querySelectorAll('p');

// Iterate over each paragraph and add content
paragraphs.forEach((paragraph) => {
  paragraph.textContent += 'Nya.';
});
