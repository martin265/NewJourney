// working with strings here ==========/
const string = "all revolutionary things will not be televised";
console.log(string);

let firstName = "martin";
let lastName = "Silungwe";

const fullName = firstName;
console.log(fullName);

// ========= single qoute, double qoute and backsticks ========== //
const single = 'single qoute string';
const double  = "double qoute string";
const backstick = `backstick string will be like this`;

console.log(single);
console.log(double);
console.log(backstick);


// =========== joining two strings together also called concatenation ======= //
let greetings = "martin silungwe";
console.log(`hello there, ${greetings}`);

const profileFirstName = "martin";
const profileLastName = "silungwe";

console.log(`${profileFirstName} ${profileLastName}`);


const song = "God is good all the time";
const score = 90;
const playback = 87;

const message = `i like the song called ${song} which has a score of ${score} and a play back of ${(score / playback)*100}%`;


console.log(message);


// ============== using leterals for multiline capabilities ============= //
const messageWorld = `alo of things are happening in the world at the moment
but with God being our protector everything is possible`;
console.log(messageWorld);


let profileAge = 90;
let profileName = "Martin";

let finalMessage = Number(profileAge) + profileName;
console.log(typeof(finalMessage));

// converting numbers to strings and strings to numbers ==========//
let profileNumber = 982783;
let newProfileNumber = String(profileNumber);
console.log(typeof(newProfileNumber));

let profileString = "martin silungwe";
let newProfileString = Number(profileString);

console.log(typeof(newProfileString));





