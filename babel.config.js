// Utilizing the following package "npm install babel-plugin-macros"
// This allows for dynamically utilizing font awesome icons so individual icons 
// do not need to be declared and imported 

module.exports = function (api) {
    return {
      plugins: ['macros'],
    }
  }
  