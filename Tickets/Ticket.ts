class Ticket {
    private destination: String;
    private price: number;
    private status: String;

    constructor(destination: String, price: number, status: String) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function tickets(input: string[], criteria: string) {
    const destinations = input
        .map(string => string.split('|'))
        .map(([destination, price, status]) => new Ticket(destination, Number(price), status))
        .sort((a, b) => a[criteria].localeCompare(b[criteria]));

    console.log(destinations);
    return destinations;
}

tickets(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'
)

tickets(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'
)

