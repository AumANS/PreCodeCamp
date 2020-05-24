class UserTemplate {

    constructor(date, name, password, age) {
        this.date = date
        this.name = name
        this.password = password
        this.age = age
        this.connected = false
    }

    login() {
        this.connected = true
        console.log('your login status :', this.connected)
    }

    logout() {
        this.connected = false
        console.log('your login status :', this.connected)
    }

    checkStatus() {
        if (this.connected = true) {
            console.log('your login status : Online')
        }
        else {
            console.log('your login status : Offline')
        }

    }

}