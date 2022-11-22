import chalk from "chalk";
export let courses = [
    "Hacking",
    "SDE",
    "Web Development",
    "Metaverse",
    "Web3",
    "Blockchain",
];
export class StudentMSystem {
    studentList = [];
    addStudent(std) {
        let stdAdded = this.studentList.includes(std);
        if (!stdAdded) {
            this.studentList.push(std);
            console.log(chalk.bold.greenBright(`Congratulations! You have been registered.`));
        }
        else {
            console.log(chalk.bold.blue(`Hey! ${std.name} you are already registered`));
        }
    }
    enrollStd(enrollNo, course) {
        let courseEnrolled = this.studentList[enrollNo].coursesEnrolled.includes(course);
        if (!courseEnrolled) {
            let a = course;
            this.studentList[enrollNo].coursesEnrolled.push(a);
            this.studentList[enrollNo].balance += 200;
            console.log(chalk.bold.greenBright(`You have been successful enrolled in ${course}`));
        }
        else {
            console.log(chalk.bold.blue(`Hey! ${this.studentList[enrollNo].name} you are already registered in ${course}`));
        }
    }
    viewBalance(enrollNo) {
        console.log(chalk.bold.blue(`The total owed on your student account is ${this.studentList[enrollNo].balance}`));
    }
    payFee(enrollNo) {
        let paidF = this.studentList[enrollNo].paidFee;
        if (!paidF) {
            this.studentList[enrollNo].paidFee = true;
            this.studentList[enrollNo].balance -= this.studentList[enrollNo].balance;
            console.log(chalk.bold.green(`Payment done! Keep studying`));
        }
        else {
            console.log(chalk.bold.blue(`You have already paid!`));
        }
    }
    showStatus(enrollNo) {
        console.log(chalk.bold.blue(`Your name is: ${this.studentList[enrollNo].name}`));
        console.log(chalk.bold.blue(`Your StdID is: ${this.studentList[enrollNo].id}`));
        console.log(chalk.bold.blue(`Courses Enrolled: ${this.studentList[enrollNo].coursesEnrolled.toString()}`));
        console.log(chalk.bold.blue(`Balance: ${this.studentList[enrollNo].balance}`));
        console.log(chalk.bold.blue(`If your balance is 0 it means you have paid all your fees`));
    }
    logIn(enrNO, id) {
        if (this.studentList[enrNO].id == id) {
            console.log(chalk.bold.green(`Successfully Logged In`));
        }
        else {
            console.log(chalk.bold.redBright(`Invalid ID or enrollment number`));
        }
    }
}
//# sourceMappingURL=StudentSystem.js.map