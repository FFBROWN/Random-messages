const books =["John","Peter","Acts","Luke"];
const chapter =["one","two","three","four"];
const verse = [1,2,3,4]

const randomMessage =()=>{

    const randomBooks =books[Math.floor(Math.random()* books.length)]
    const randomChapter =chapter[Math.floor(Math.random()* chapter.length)]
    const randomVerse =verse[Math.floor(Math.random()* verse.length)]
   return `${randomBooks},${randomChapter},${randomVerse}`

};
console.log(randomMessage())

const rm = randomMessage();
console.log(rm)





