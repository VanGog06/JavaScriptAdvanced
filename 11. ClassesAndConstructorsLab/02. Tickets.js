function ticketDatabase(input, sorting) {
    let tickets = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    for (let line of input) {
        let splittedLine = line.split('|');
        let ticket = new Ticket(splittedLine[0], splittedLine[1], splittedLine[2]);
        tickets.push(ticket);
    }

    switch(sorting) {
        case 'destination':
            tickets = tickets.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            tickets = tickets.sort((a, b) => Number(a.price) - Number(b.price));
            break;
        case 'status':
            tickets = tickets.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }

    return tickets;
}