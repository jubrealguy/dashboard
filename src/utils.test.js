const { getFullYear, getFooterCopy, getLatestNotification } = require("./utils");

test("returns the current year", () => {
    expect(getFullYear()).toBe(2024)
})

test("returns footer copy", () => {
    expect(getFooterCopy(true)).toBe("Holberton School")
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard")
})

test("returns latest notification", () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD")
})