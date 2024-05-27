function skillsMember() {
  var member = {
    name: 'John Doe',
    age: 30,
    skills: ['JavaScript', 'HTML', 'CSS'],
    greet: function() {
      console.log('Hello, my name is ' + this.name);
    }
  };
  return member;
}   // Export the module    
