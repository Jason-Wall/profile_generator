// IMPORTS
const readline = require('readline');

// MAIN THREAD
const runSurvey = (survey) => {
  const keys = Object.keys(survey);

  const questionCount = keys.length;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const askQuestion = (i) => {
    if (i < questionCount) {

      rl.question(`${survey[keys[i]].q}   `, (answer) => {
        survey[keys[i]].a = answer;
        askQuestion(i+1);
      });

    } else {
      rl.close();
      output();
    }
  }
  askQuestion(0);
  

};

// INPUTS
let survey = {
  name: { q: `What's your name? Nicknames are also acceptable :)`, a: undefined },
  activity: { q: `What's an activity you like doing?`, a: undefined },
  music: { q: `What do you listen to while doing that?`, a: undefined },
  meal: { q: `Which meal is your favourite (eg: dinner, brunch, etc.)`, a: undefined },
  food: { q: `What's your favourite thing to eat for that meal?`, a: undefined },
  sport: { q: `Which sport is your absolute favourite?`, a: undefined },
  super: { q: `What is your superpower? In a few words, tell us what you are amazing at!`, a: undefined }
};

const output = () => {
    console.log(`${survey.name.a} loves listening to ${survey.music.a} while ${survey.activity.a}, devouring ${survey.food.a} for ${survey.meal.a}, prefers ${survey.sport.a} over any other sport, and is amazing at ${survey.super.a}.`)
  };

runSurvey(survey,output);



