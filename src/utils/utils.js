const getFullYear = () => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    return currentYear
}

const getFooterCopy = isIndex => isIndex ? "Holberton School" : "Holberton School main dashboard"

const getLatestNotification = () => {
    return ("<strong>Urgent requirement</strong> - complete by EOD")
}

module.exports = {
    getFullYear,
    getLatestNotification,
    getFooterCopy,
};