const coding = ["js", "ruby", "java", "python", "cpp"]
//foreach and callback function(doesn't have a name)
coding.forEach(  function (item) {
    console.log(item);
})

coding.forEach( (item) => {
    console.log(item);
} )

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

coding.forEach ( (item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "python",
        languageFileName: "py",
    }
    {
        languageName: "java",
        languageFileName: "java",
    }
    {
        languageName: "javascript",
        languageFileName: "js",
    }
]

myCoding.forEach ( {item} => {
    console.log(item.languageName);
})