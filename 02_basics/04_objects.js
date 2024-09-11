// constructor, singleton

//const tinderUser = new Object() //singleton

const tinderUser = {}; // non singleton  empty object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggenIn = false;

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname:"choudhary",
        }
    }
}
console.log(regularUser.fullname.userfullname); //and so on

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}
//const obj3 = {obj1, obj2};
//const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4} 
console.log(obj3);

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        name: "anamika",
    }
]

users[1].email;
console.log(tinderUser);
console.log(object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "Js in hindi",
    price:"999",
    courseInstructor: "hitesh",
}

// course.courseInstructor

//const {courseInstructor} = course
//console.log(courseInstructor);
const {courseInstructor: instructor} = course;
console.log(instructor);

/* const navbar = ({company}) => {

}
navbar(company = "hitesh") */

// we get apis in form of json object, arrays
// randomuserme api, json formatter