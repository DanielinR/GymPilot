export function calculateDaysInMonth(month: number) {
    return new Date(2023, month + 1, 0).getDate();
};