const fs = require('fs')
const path = require('path')

class Student {
    constructor(firstName, lastName, groupTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.groupTitle = groupTitle;
        this.id = 33;
    }

    toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            groupTitle: this.groupTitle,
            id: this.id
        }
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '..', 'data', 'student.json'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(JSON.parse(content))
                    }
                }
            )
        })
    }
}

module.exports = Student;