class MailBox {
    constructor() {
        this.mailbox = [];
    }

    addMessage(subject, text) {
        this.mailbox.push({subject: subject, text: text});
        return this;
    }

    get messageCount() {
        return this.mailbox.length;
    }

    deleteAllMessages() {
        this.mailbox = [];
    }

    findBySubject(substr) {
        let result = [];

        for (let mailbox of this.mailbox) {
            if (mailbox.subject.toString().indexOf(substr) !== -1) {
                result.push(mailbox);
            }
        }

        return result;
    }

    toString() {
        let result = '';

        if (this.mailbox.length == 0) {
            result += ` * (empty mailbox)`;
        } else {
            for (let mailbox of this.mailbox) {
                result += `\n * [${mailbox.subject}] ${mailbox.text}`;
            }
        }

        return result;
    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());
