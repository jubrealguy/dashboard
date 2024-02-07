const getFullYear = () => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    return currentYear
}

const getFooterCopy = isIndex => isIndex ? "Holberton School" : "Holberton School main dashboard"
export {getFullYear, getFooterCopy}