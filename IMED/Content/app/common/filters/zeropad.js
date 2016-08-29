function zeropad() {
    return (input,pad) => {
        if (typeof input === "undefined") {
            return pad;
        }
        return (pad + input).slice(-pad.length);
    };
}

export default zeropad;