let courses = {
  web: ["HTML", "CSS", "JavaScript"],
  mobile: ["React Native", "Flutter"],
  backend: ["Node.js", "Express.js", "MongoDB"],
};

let { web, mobile, backend } = courses;

console.log(web); // ["HTML", "CSS", "JavaScript"]

function hello(...rest) {
  console.log(rest);
}

hello(...web);

console.log("hello");

hello({ web, mobile, backend });

function tagged_template([first, ...strings], ...values) {
  return values.reduce((first, value) => {
    return first + value + strings.shift();
  }, first);
}

let _name = "tagged_template";
let desc = "a function";

let html = tagged_template`day la ${_name} va la ${desc}!`;

console.log(html); // "day la tagged_template va la a function!"

const person = { name: "Mark" };

// Nếu person là undefined hoặc null thì sẽ ném ra lỗi
console.log(person?.address?.city); // undefined
