import { render, screen } from "@testing-library/react";
import BookingForm from "../component/BookingForm";

test('Renders the BookingForm inputs with labels', () => {
    render(<BookingForm booking={{ date: new Date() }} />);

    const inputs = [
        screen.getByLabelText("Date"),
        screen.getByLabelText("Time"),
        screen.getByLabelText("Place"),
        screen.getByLabelText("Number of guests"),
        screen.getByLabelText("Occasion")
    ];

    inputs.forEach(input => {
        expect(input).toBeDefined();
    })
})

test('Inputs have correct types', () => {
    render(<BookingForm booking={{ date: new Date() }} />);

    const inputs = [
        screen.getByLabelText("Date"),
        screen.getByLabelText("Number of guests"),
    ];

    const expectedTypes = ["date", "number"];

    inputs.forEach((input, index) => {
        expect(input.getAttribute("type")).toEqual(expectedTypes[index]);
    })
})

test('Number of guests is between 1 and 50', () => {
    render(<BookingForm booking={{ date: new Date() }} />);
    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput.getAttribute("min")).toEqual("1");
    expect(guestsInput.getAttribute("max")).toEqual("50");
})

test('Minimum date is today', () => {
    render(<BookingForm booking={{ date: new Date() }} />);
    const dateInput = screen.getByLabelText("Date");
    const todayDate = new Date().toISOString().split("T")[0];
    expect(dateInput.getAttribute("min")).toEqual(todayDate);
})