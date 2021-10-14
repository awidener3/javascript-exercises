const helloWorld = function() {
  return 'Hello, World!';
};

// this is how to export the function so it can be imported with require() in the spec file
module.exports = helloWorld;
