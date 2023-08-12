const delay = (ms, mock) => {
    return new Promise(resolve => setTimeout(() => resolve(JSON.stringify(mock)), ms));
}

export async function fetchAPI(date) {
    const length = Math.random() * 10;
    const res = [];
    for (var i = 0; i < length; i++) {
        var hours = Math.round((Math.random() * 8)) + 1;
        var minutes = Math.round((Math.random() * 59));
        res.push(`${hours}:${minutes} pm`)
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