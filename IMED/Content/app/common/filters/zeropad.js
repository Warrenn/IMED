function zeropad() {
    return (input, pad) => {
        if ((typeof input === "undefined") || (input == null)) {
            return pad;
        }
        return ((input + '').length > pad.length) ? input : (pad + input).slice(-pad.length);
    };
}

export default zeropad;