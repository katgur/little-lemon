const delay = (ms, mock) => {
    return new Promise(resolve => setTimeout(() => resolve(JSON.stringify(mock)), ms));
}

const cache = {};

export async function fetchAPI(date) {
    const cached = cache[date];
    if (cached) {
        return delay(1000, { availableTimes: cached });
    }
    const res = [];
    for (var i = 0; i < 9; i++) {
        if (Math.random() < 0.5) {
            res.push(`${i + 1}:00 pm`)
        }
    }
    res.sort();
    cache[date] = res;
    return delay(1000, { availableTimes: res });
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