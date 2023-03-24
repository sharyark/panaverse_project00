var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from "inquirer";
console.log("..swelcome to kidd calculator...");
function askQuestion() {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log("..swelcome to kidd calculator...")
        yield inquirer.prompt([
            /* Pass your questions in here */
            {
                type: "list",
                name: "operator",
                message: "what operation you want to perform\n",
                choices: ["Addition", "multiplication", "subtraction", "division"]
            },
            {
                type: "number",
                name: "num1",
                message: "enter number 1:"
            },
            {
                type: "number",
                name: "num2",
                message: "enter number 2:"
            }
        ])
            .then((answers) => {
            if (answers.operator == "Addition") {
                console.log(`${answers.num1} + ${answers.num2} = `, answers.num1 + answers.num2);
            }
            else if (answers.operator == "multiplication") {
                console.log('multiplication');
                console.log(`${answers.num1} x ${answers.num2} = `, answers.num1 * answers.num2);
            }
            else if (answers.operator == "subtraction") {
                console.log("subtraction");
                console.log(`${answers.num1} - ${answers.num2} = `, answers.num1 - answers.num2);
            }
            else if (answers.operator == "division") {
                console.log("division");
                console.log(`${answers.num1} / ${answers.num2} = `, answers.num1 / answers.num2);
            }
        });
    });
}
// askQuestion()
function startCalculator() {
    return __awaiter(this, void 0, void 0, function* () {
        var again = yield inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "y continue n stop "
        });
        while (again.restart == 'y' || again.restart == 'Y') {
            yield askQuestion();
            var again = yield inquirer
                .prompt({
                type: "input",
                name: "restart",
                message: "y continue n stop "
            });
        }
    });
}
startCalculator();
