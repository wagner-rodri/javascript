        // In the attached code <code>assignment.js</code>, you find a variable
        // that holds a random number between 0 and 1. Write code that shows an
        // alert (with any message) when that number is greater than 0.7.

        let greaterThan = true

        while (greaterThan) {
            const randomNumber = Math.random();
            if (randomNumber > 0.7) {
                greaterThan = false
                console.log(randomNumber)
                alert('Number greater than 0.7!')
            } else {
                console.log(randomNumber)
            }
        }

        // Create an array of numbers (any numbers of your choice) and loop through
        // the array in two different ways - outputting the numbers inside of the
        // loop.

        const arrayChallenge = [1, 'a', 3, 4, 5]

        for (let i = 0; i < arrayChallenge.length; i++) {
            console.log(arrayChallenge[i])
        }

        for (const i of arrayChallenge) {
            console.log(i)
        }

        // Adjust one of the loops from the last task such that it actually starts
        // at the end (last element) of the array and loops to the first element.

        for (let i = arrayChallenge.length-1; i >= 0; i--) {
            console.log(arrayChallenge[i])
        }

        // Create another random number (in a separate constant) and show an alert
        // in two different scenarios: Both are greater 0.7 OR at least one of the two is
        // NOT greater than 0.2.

        let greaterThan = true

        while (greaterThan) {
            const randomNumber1 = Math.random();
            const randomNumber2 = Math.random();
            if (randomNumber2 > 0.7 && randomNumber1 > 0.7) {
                greaterThan = false
                console.log(randomNumber1)
                console.log(randomNumber2)
                alert('Both numbers are greater than 0.7!')
            } else if (randomNumber2 < 0.2 || randomNumber1 < 0.2) {
                greaterThan = false
                console.log(randomNumber1)
                console.log(randomNumber2)
                alert('At least one of the numbers is smaller than 0.2!')
            } else {
                console.log(randomNumber1)
                console.log(randomNumber2)
            }
        }


