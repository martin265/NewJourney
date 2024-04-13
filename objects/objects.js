const person = {
    name: ["martin", "silungwe"],
    age: 25,
    bio: function() {
        console.log(`the users name ${this.name[0]} last name is ${this.name[1]} and the age is ${this.age}`);
    }
};

