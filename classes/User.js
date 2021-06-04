class User {
  constructor(id, name, socket) {
    this.id = id
    this.name = name
    this.socket = socket
  }

  getId() {
    return this.id
  }

  getName() {
    return this.name
  }

  getSocket() {
    return this.socket
  }
}

module.exports = User