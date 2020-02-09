export const validateItem = (itemName) => {
    if (itemName.length < 1 || itemName.match(/^\s+$/)) {
        return 'Cannot be empty.'
    }
    if (itemName.length > 15) {
        return 'Cannot be longer than 15 characters'
    }
    return null
}
