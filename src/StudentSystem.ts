import chalk from "chalk";

export let courses: string[] = [
  "Hacking",
  "SDE",
  "Web Development",
  "Metaverse",
  "Web3",
  "Blockchain",
];

export type StdInfo = {
  enrollNo: number;
  id: string;
  name: string;
  coursesEnrolled: string[];
  paidFee: boolean;
  balance: number;
};

export class StudentMSystem {
  public studentList: StdInfo[] = [];

  public addStudent(std: StdInfo): void {
    let stdAdded: boolean = this.studentList.includes(std);
    if (!stdAdded) {
      this.studentList.push(std);
      console.log(chalk.bold.greenBright(`Congratulations! You have been registered.`));
    } else {
      console.log(chalk.bold.blue(`Hey! ${std.name} you are already registered`));
    }
  }

  public enrollStd(enrollNo: number, course: string): void {
    let courseEnrolled: boolean =
      this.studentList[enrollNo].coursesEnrolled.includes(course);

    if (!courseEnrolled) {
      let a = course;
      this.studentList[enrollNo].coursesEnrolled.push(a);
      this.studentList[enrollNo].balance += 200;
      console.log(chalk.bold.greenBright(`You have been successful enrolled in ${course}`));
    } else {
      console.log(
        chalk.bold.blue(`Hey! ${this.studentList[enrollNo].name} you are already registered in ${course}`)
      );
    }
  }

  public viewBalance(enrollNo: number): void {
    console.log(
      chalk.bold.blue(`The total owed on your student account is ${this.studentList[enrollNo].balance}`)
    );
  }

  public payFee(enrollNo: number): void {
    let paidF: boolean = this.studentList[enrollNo].paidFee;

    if (!paidF) {
      this.studentList[enrollNo].paidFee = true;
      this.studentList[enrollNo].balance -= this.studentList[enrollNo].balance;
      console.log(chalk.bold.green(`Payment done! Keep studying`));
    } else {
      console.log(chalk.bold.blue(`You have already paid!`));
    }
  }

  public showStatus(enrollNo: number): void {
    console.log(chalk.bold.yellow(`\tYour name is: ${this.studentList[enrollNo].name}`));
    console.log(chalk.bold.yellow(`\tYour StdID is: ${this.studentList[enrollNo].id}`));
    console.log(
      chalk.bold.yellow(`\tCourses Enrolled: ${this.studentList[
        enrollNo
      ].coursesEnrolled.toString()}`)
    );
    console.log(chalk.bold.yellow(`\tBalance: ${this.studentList[enrollNo].balance}`));
    console.log(chalk.bold.yellow(`\t(If your balance is 0 it means you have paid all your fees)`));
  }

  public logIn(enrNO: number, id: string): void {
    if (this.studentList[enrNO].id == id) {
      console.log(chalk.bold.green(`Successfully Logged In`));
    } else {
      console.log(chalk.bold.redBright(`Invalid ID or enrollment number`));
    }
  }
}
