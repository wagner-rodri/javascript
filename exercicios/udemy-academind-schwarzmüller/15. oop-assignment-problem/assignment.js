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



      