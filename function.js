// ========================================
// Problem-01: Fixing Weight Machine
// ========================================

function fixWeightMachine(array1) {
    if (Array.isArray(array1)) {
        let fixedArray = [];
        for (let item of array1) {
            if (typeof item === "number" && item > 0) {
                fixedArray.push(item);
            }
        }
        console.log(fixedArray);
    }
    else {
        console.log("\"Invalid Input\"");
    }
}

/* Uncomment below for trying inputs: */

// console.log("\"Function Name: fixWeightMachine\" \n");
// fixWeightMachine([50, -10, 0, 75, "a", null]);
// fixWeightMachine("Not an Array");
// fixWeightMachine([100, NaN, -5, 30, undefined]);
// fixWeightMachine([]);



// ========================================
// Problem-02: Count Number of Vowels
// ========================================

function countVowels(params) {
    let t = typeof (params);
    if (t === "string") {
        let vowels = "aeiouAEIOU";
        let count = 0;
        for (let c of params) {
            let result = vowels.includes(c);
            result === true ? count++ : count;
        }
        console.log(count);
    }
    else {
        console.log("\"Invalid Input\"");
    }
}

/* Uncomment below for trying inputs: */

// console.log("\"Function Name: countVowels\" \n");
// countVowels("hello");
// countVowels("Bangladesh");
// countVowels(12345);
// countVowels("rhythm");



// ========================================
// Problem-03: Evaluate/Grade Results
// ========================================

function evaluateResult(array2) {
    if (Array.isArray(array2)) {
        let gradedArray = [];
        for (let item of array2) {
            if (typeof item === "number" && item >= 0 && item <= 100) {
                item = Math.round(item);
                if (item >= 90) { gradedArray.push("A+"); }
                else if (item >= 80 && item < 90) { gradedArray.push("A"); }
                else if (item >= 70 && item < 80) { gradedArray.push("B"); }
                else if (item >= 60 && item < 70) { gradedArray.push("C"); }
                else if (item >= 50 && item < 60) { gradedArray.push("D"); }
                else { gradedArray.push("F"); }
            }
            else { gradedArray.push("Invalid"); }
        }
        console.log(gradedArray);
    }
    else {
        console.log("\"Invalid Input\"");
    }
}

/* Uncomment below for trying inputs: */

// console.log("\"Function Name: evaluateResult\" \n");
// evaluateResult([45, 67, 82, 95, "a", null]);
// evaluateResult([90, 80, 70, 60, 50, 40]);
// evaluateResult(100);



// ========================================
// Problem-04: Creating a Perfect Password
// ========================================

function createPerfectPassword(object1) {
    if (typeof object1 === "object" &&
        typeof object1.name === "string" &&
        /^[a-zA-Z]+([ .'-]+[a-zA-Z]+)*$/.test(object1.name) &&
        /* starts with letter + any name symbol + ends with letter */
        typeof object1.year === "number" &&
        Number.isInteger(object1.year) === true &&
        object1.year.toString().length === 4) {
        let string1, string2, string3 = "";
        string1 = object1.name.slice(0, 1).toUpperCase();
        string2 = object1.name.slice(1).split(/[ .'-]/).join('').toLowerCase();
        string3 = object1.year.toString();
        console.log("\"" + string1 + string2 + string3 + "\"");
    }
    else {
        console.log("\"Invalid Input\"");
    }
}

/* Uncomment below for trying inputs: */

// console.log("\"Function Name: createPerfectPassword\" \n");
// createPerfectPassword({ name: "salman", year: 1990 })
// createPerfectPassword({ name: "rahim", year: 200 })
// createPerfectPassword({ name: "karim", year: 2023, extra: "not required" })
// createPerfectPassword("Invalid Object")



// ========================================
// Problem-05: Calculate Monthly Expenses
// ========================================

function calculateMonthlyExpenses(incomeArray, expense) {
    if (Array.isArray(incomeArray) &&
        incomeArray.every(item => typeof item === "number") &&
        typeof expense === "number") {
        let income = 0;
        for (let x of incomeArray) {
            income = income + x;
        }
        let savings = income - expense;
        if (savings > 0) {
            console.log(savings);
        }
        else {
            console.log("\"Save more money\"");
        }
    }
    else {
        console.log("\"Invalid Input\"");
    }
}

/* Uncomment below for trying inputs: */

// console.log("\"Function Name: calculateMonthlyExpenses\" \n");
// calculateMonthlyExpenses([3000, 2000, 1500], 5000)
// calculateMonthlyExpenses([1000, 2000], 3500)
// calculateMonthlyExpenses("Invalid Array", 1000)
// calculateMonthlyExpenses([5000, 7000], "Invalid Living Cost")