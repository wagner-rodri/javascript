
// Create a "Course" class which has three properties: "title", "length"
// and "price" (all set up in the constructor). Instantiate the class twice
// (two dummy courses of your choice). Output the objects to the console.

// Add two methods to the "Course" class: A method which calculates the
// length/price value ("how much length do you get for the amount paid")
// and one method that outputs a nice course summary (including title,
// length and price). Call these methods thereafter (and output the result
// to the console).

// class TheoreticalCourse extends Course {
//     publish() {

//     }
// }


// class PracticalCourse extends Courses {
//     numOfExercises = 10;
// }

// Create two new, more specialized, classes: "PracticalCourse" and
// "TheoreticalCourse". Both should be based on the "Course" class but
// "PracticalCourse" should also have a "numOfExercises" property,
// "TheoreticalCourse" should have a "publish()" method (which just prints
// something to the console). Instantiate both and use the new AND old
// properties and methods.

// Use getters and setters to ensure that the "price" property can only be
// set to a positive value and is returned with a "$" in front of it.


// Use private fields to harden the getter/ setter approach from before.
        
class Course {
    #price;
    
    get price() {
        return '$' + this.#price + ',00';
    }

    set price(value) {
        if (value < 0) {
            throw 'Invalid value!';
        } else {
            this.#price = value;
        }
    }

    // title;
    // length;
    // price;

    courseSummary() {
        return `The course ${this.title} has length of ${this.length} hrs and it costs ${this.price}!`
    }

    lengthPrice() {
        return this.length/this.#price
    }

    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }
};

const course1 = new Course('Javascript', 5, 35);
const course2 = new Course('Web Development', 6, 35);
const lengthPrice1 = course1.lengthPrice();
const lengthPrice2 = course2.lengthPrice();
const courseSummary1 = course1.courseSummary();
const courseSummary2 = course2.courseSummary();

console.log(course1);
console.log(lengthPrice1);
console.log(courseSummary1);
console.log(course2);
console.log(lengthPrice2);
console.log(courseSummary2);

class PracticalCourse extends Course {
    constructor(title, length, price, numOfExercises) {
        super(title, length, price);
        this.numOfExercises = numOfExercises;
    }
}


const angularCourse = new PracticalCourse('Angular', 36, 50, 25)

console.log(angularCourse.courseSummary());

class TheoreticalCourse extends Course {
    publish() {
        console.log('Publishing...')
    }
}

const flutter = new TheoreticalCourse('React', 25, 50);
console.log(flutter.courseSummary());
flutter.publish();



      