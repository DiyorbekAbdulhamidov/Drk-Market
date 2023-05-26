// const fs = require('fs');
// const path = require('path');

// // fs.mkdir(path.join(__dirname, "templates"), err => {
// //   if(err) throw new Error();

// //   console.log("Folder was created succesfully");
// // }); 

// // fs.mkdir(path.join(__dirname, "notes"), err => {
// //   if(err) throw new Error();

// //   console.log('Folder was created succesfully');
// // });

// fs.writeFile(path.join(__dirname, 'notes', 'december.txt'), 'Create new Course', err => {
//   if(err) throw new Error();

//   console.log('File created succesfully');

//   fs.appendFile(path.join(__dirname, 'notes', 'december.txt'), 'and microservice project', err => {
//   if(err) throw new Error();

//   console.log('File was changed successfully');
  
//   });
// });

// fs.readFile(path.join(__dirname, 'notes', 'december.txt'), (err,data) => {
//   if(err) throw new Error();

//   console.log(Buffer.from(data).toString());
// });