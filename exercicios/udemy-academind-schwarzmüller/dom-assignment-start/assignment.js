
// Select this task (in two different ways at least!) and change the
// background-color to black, text-color to white.

// #1
const li = document.querySelector('li');
li.style.backgroundColor = 'black';

// #2
const li2 = document.getElementById('task-1');
li2.style.color = 'white';

// Change the document title (in <code>&lt;head&gt;&lt;/head&gt;</code>) to
// "Assignment - Solved!". Use two different ways for getting access to the
// <code>&lt;title&gt;</code> element: Via <code>querySelector</code> on
// document and via <code>querySelector</code> on the certain property you
// find in <code>document</code>.

// #1
const title = document.querySelector('title');
title.textContent = 'Assignment - Solved!';

// #2
document.title = 'Assignment - Solved!'

// Select the <code>&lt;h1&gt;</code> element on this page and change its
// text to "Assignment - Solved!".

const h1 = document.querySelector('h1');
h1.textContent = 'Assignment - Solved!';
