const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  rl.question('What\'s an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (listen) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal? ',  (dish) => {
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              
              console.log(`Hi, my name is ${name}. I like to listen to ${listen} while doing this ${activity}. My favourite meal of the day is ${meal}. I like to eat ${dish}. My favourite sport is ${sport}. If i had a superpower it would be ${superpower}.`)

              rl.close();
            })
          })
        })
      })
    })
  })
});

      
            
