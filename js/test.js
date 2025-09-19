function testReview() { console.log('This is a test for PR review'); }

function testReview(input) {
  if (typeof input === 'string') {
    console.log('Test passed with input: ' + input);
  } else {
    console.log('Test failed: No input');
  }
}