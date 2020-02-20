// const { exec } = require('child_process');
const { exec } = require("shelljs");



// var child = exec('ng xi18n', {async:true});
// child.stdout.on('data', function(data) {
//     console.log('vlad:'+data);
//     console.log('=======');
// });

exec('ng xi18n',{shell: true}, function(code, stdout, stderr) {
  console.log('Exit code:', code);
  console.log('Program output:', stdout);
  console.log('Program stderr:', stderr);
      console.log('=======');
});


// const cmd = spawn("ng.cmd", ['xi18n'], {shell: true});

// cmd.stdout.on('data', function(data) {
//     var message = decoder.write(data);
//     console.log(message.trim());
//     console.log("Child data: " + data);
// });
// cmd.on('error', function () {
//   console.log("Failed to start child.");
// });
// cmd.on('close', function (code) {
//   console.log('Child process exited with code ' + code);
// });
// cmd.stdout.on('end', function () {
//   console.log('Finished collecting data chunks.');
// });