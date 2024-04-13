const person = {
    name: ["martin", "silungwe"],
    age: 25,
    bio: function() {
        console.log(`the users name ${this.name[0]} last name is ${this.name[1]} and the age is ${this.age}`);
    },
    introduction: function() {
        console.log(`hello there ${this.name[0]}`);
    }
};


// using the object into another object here
const profile = {
    profileName: {
        first_name: "martin",
        last_name: "silungwe"
    }
}

console.log(profile.profileName.first_name);
