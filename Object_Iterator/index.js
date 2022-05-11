var obj = {
    fname:"sambit",
    lname:"Nayak",
    age:22,
gender:"male"
};
//One way to iterate object property by using for/in loop
for(var propt in obj){
    console.log(propt+":"+obj[propt]);
}
console.log("_________________________")
//Second way to iterate object property by using predifed method
Object.entries(obj).forEach(([key,value]) => console.log(`${key}:${value}`));