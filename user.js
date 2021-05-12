class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getNameInfo() {
    return `My Name is ${this.name}`;
  }
}

module.exports = User;
