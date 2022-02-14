var books = [
  {
    title: 'This is my book',
    isbn: '1345-223-233',
    author: 'authors'
  },
  {
    title1: 'diary of a wimpy kid',
    isbn: '2333-444-555',
    author: 'jk wrowling'
  },
  {
    title: 'my title',
    isbn: '344-555-55',
    author: 'Me'
  }
];
console.log('arr type:', typeof books);
console.log('JSON result:', typeof JSON.stringify(books));

var studentJSON = '{ "id": 1, "name": "David"}';

console.log('studentJSON:', studentJSON);
console.log('typeof studentJSON:', typeof studentJSON);

var student = JSON.parse(studentJSON);

console.log('student:', student);
console.log('typeof student:', typeof student);
