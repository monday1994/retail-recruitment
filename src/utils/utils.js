export const isNotEmptyArray = (arr) => {
    return Array.isArray(arr) && !!arr.length;
};

export const isNotEmptyObject = (obj) => {
    return !!(obj && Object.keys(obj)?.length);
};

export const isNumber = (value) => {
    return typeof value === 'number' && !isNaN(Number(value));
}

export const formatDate = (date) => {
    if(date) {
        const dateToFormat = new Date(date);
        const year = dateToFormat.getFullYear();
        const month = String(dateToFormat.getMonth() + 1).padStart(2, '0');
        const day = String(dateToFormat.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    return '';
}
