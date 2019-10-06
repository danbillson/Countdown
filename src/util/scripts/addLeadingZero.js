export default value => {
    value = String(value);
    while (value.length < 2) {
        value = '0' + value;
    }
    return value;
};
