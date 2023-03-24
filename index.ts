import inquirer from "inquirer";
console.log("..swelcome to kidd calculator...")

async function askQuestion()
{
// console.log("..swelcome to kidd calculator...")
 await inquirer.prompt([
  /* Pass your questions in here */
  {
    type:"list",
    name:"operator",
    message:"what operation you want to perform\n",
    choices:["Addition","multiplication","subtraction","division"]
  },
  {
    type:"number",
    name:"num1",
    message:"enter number 1:"
  },

  {
    type:"number",
    name:"num2",
    message:"enter number 2:"
  }
])
.then((answers) => {
  if(answers.operator == "Addition")
  {
    console.log(`${answers.num1} + ${answers.num2} = `,answers.num1+answers.num2)
  }
  else if(answers.operator == "multiplication")
  {
    console.log('multiplication')
    console.log(`${answers.num1} x ${answers.num2} = `,answers.num1*answers.num2)

  }
  else if(answers.operator == "subtraction")
  {
    console.log("subtraction")
    console.log(`${answers.num1} - ${answers.num2} = `,answers.num1-answers.num2)

  }
  else if(answers.operator == "division")
  {
    console.log("division")
    console.log(`${answers.num1} / ${answers.num2} = `,answers.num1/answers.num2)

  }
})
}
// askQuestion()

async function startCalculator() {
  var again = await inquirer
  .prompt({
    type:"input",
    name:"restart",
    message:"y continue n stop "
  })
  while(again.restart == 'y' || again.restart == 'Y' )
  {
   await askQuestion()
    var again = await inquirer
    .prompt({
    type:"input",
    name:"restart",
    message:"y continue n stop "
  })
  }
}

startCalculator()