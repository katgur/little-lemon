const delay = (ms, mock) => {
    return new Promise(resolve => setTimeout(() => resolve(JSON.stringify(mock)), ms));
}

export async function fetchAPI(date) {
    const length = Math.random() * 5;
    const res = [];
    for (var i = 0; i < length; i++) {
        var hours = Math.round((Math.random() * 8)) + 1;
        res.push(`${hours}:00 pm`)
    }
    return delay(1000, { availableTimes: res.sort() });
}

export async function submitAPI(formData) {
    const bookings = localStorage.getItem("bookings");
    let newBookings;
    if (!bookings) {
        newBookings = [formData];
    } else {
        newBookings = [...JSON.parse(bookings), formData];
    }
    localStorage.setItem("bookings", JSON.stringify(newBookings));
    return delay(1000, { status: "success" })
}