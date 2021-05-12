const User = require('./user.js');

class Email extends User{
    constructor(name, email){
        super(name);
        this.email = email;
    }

    getInfo(){
        return this.getNameInfo() + `, My Email is ${this.email}`;
    }
}

module.exports = Email;