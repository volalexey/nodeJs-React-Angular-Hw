const fs = require('fs')
const path = require('path')

class Group {
    constructor(title, amountOfStudents, curator) {
        this.title = title;
        this.amountOfStudents = amountOfStudents;
        this.curator = curator;
        this.id = 2;
    }

    toJSON() {
        return {
            title: this.title,
            amountOfStudents: this.amountOfStudents,
            curator: this.curator,
            id: this.id
        }
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '..', 'data', 'group.json'),
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

module.exports = Group;