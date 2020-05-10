var msg =  require('./data');
// console.log(msg.firstname+' '+msg.lastname);
console.log(msg);
// console.log(msg.simaplemessage);
// msg.log('babaurao');
// msg('my name is here');

var fs = require('fs');

fs.appendFile('mytext.txt', '\n Source code refactoring can improve the quality and maintainability of your project by restructuring your code while not modifying the runtime behavior. Visual Studio Code supports refactoring operations (refactorings) such as Extract Method and Extract Variable to improve your code base from within your editor.', function (err) { 
                        if (err)
        console.log(err);
                        else
        console.log('Write operation complete.');
});
var fs = require('fs');
var data = fs.readFileSync('mytext.txt', 'utf8');
console.log(data);
// fs.readFile('./mytext.txt', function (err, data) {
//                     if (err) throw err;

//     console.log(data);
// });