export function formatDate(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}
export function formatDateTime(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
}
export function formatTime(date) {
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()

    return `${date.getHours()}:${minutes}`
}