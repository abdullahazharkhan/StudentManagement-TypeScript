import chalk from "chalk";
import figlet from "figlet";
import { createPromptModule } from "inquirer";
import { StudentMSystem, StdInfo, courses } from "./StudentSystem.js";
const prompt = createPromptModule();

const sms: StudentMSystem = new StudentMSystem();
let enrollmentNo: number = 0;
let enrollmentnumbers: number[] = [];
// to generate random ID
let uniqueID = (): string => {
  let numx = Date.now().toString().substring(7, 12);
  let num = parseInt(numx);
  return `ID${num}`;
};
const uniID: string = uniqueID();

function main(): void {
  prompt({
    type: "list",
    name: "userChoice",
    message: chalk.bold.blue("Register Yourself"),
    choices: ["Register"],
  }).then((ans) => {
    register();
  });
}

function register(): void {
  prompt([
    {
      type: "input",
      name: "name",
      message: chalk.bold.blue("Enter your name here: "),
    },
    {
      type: "list",
      name: "course",
      message: chalk.bold.blue("In which course you want to be enrolled?"),
      choices: courses,
    },
  ]).then((ans) => {
    if (ans["name"] != "") {
      let stdObj = {
        enrollNo: enrollmentNo,
        id: uniID,
        name: ans["name"],
        coursesEnrolled: [ans["course"]],
        paidFee: false,
        balance: 200,
      };
      sms.addStudent(stdObj);

      console.log(
        chalk.bold.green(`Your enrollemnt number is ${enrollmentNo}. (SSH!! Keep it private)`)
      );
      sms.showStatus(enrollmentNo);
      enrollmentnumbers.push(enrollmentNo);
      enrollmentNo++;
      actions();
    } else {
      console.log(chalk.bold.redBright("invalid operation"));
      register();
    }
  });
}
function actions(): void {
  prompt([
    {
      type: "list",
      name: "action",
      message: chalk.bold.blue("What do you want to do?"),
      choices: [
        "Enroll",
        "View Balance",
        "Pay Fee(all at once)",
        "Show Status",
        "Sign Out",
        "Register",
      ],
    },
  ]).then((ans) => {
    switch (ans["action"]) {
      case "Enroll":
        enroll();
        break;
      case "View Balance":
        viewBalance();
        break;
      case "Pay Fee(all at once)":
        payFee();
        break;
      case "Show Status":
        showStatus();
        break;
      case "Sign Out":
        console.log(chalk.bold.blue(`Bye! 👋`));
        break;
      case "Register":
        register();
        break;
      default:
        console.log(`err`);
        break;
    }
  });
}

function enroll(): void {
  prompt([
    {
      type: "list",
      name: "enr",
      choices: enrollmentnumbers,
      message: chalk.bold.blue("Select your enrollment Number: "),
    },
    {
      type: "list",
      name: "course",
      message: chalk.bold.blue("Select Course: "),
      choices: courses,
    },
  ]).then((ans) => {
      sms.enrollStd(ans["enr"], ans["course"]);
      actions();
  });
}

function viewBalance(): void {
  prompt([
    {
      type: "list",
      name: "enr",
      choices: enrollmentnumbers,
      message: chalk.bold.blue("Select your enrollment Number: "),
    },
  ]).then((ans) => {
      sms.viewBalance(ans["enr"]);
      actions();
  });
}

function payFee(): void {
  prompt([
    {
      type: "list",
      name: "enr",
      choices: enrollmentnumbers,
      message: chalk.bold.blue("Select your enrollment Number: "),
    },
  ]).then((ans) => {
      sms.payFee(ans["enr"]);
      actions();
  });
}

function showStatus(): void {
  prompt([
    {
      type: "list",
      name: "enr",
      choices: enrollmentnumbers,
      message: chalk.bold.blue("Select your enrollment Number: "),
    },
  ]).then((ans) => {
      sms.showStatus(ans["enr"]);
      actions();
  });
}
console.log( 
  chalk.cyan(
    figlet.textSync("\t\t e-Studies", {
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 70,
      whitespaceBreak: true,
    })
  )
);
main();
