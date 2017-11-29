import Yup from 'yup';
import passwordMeter from 'passwordmeter';
import createKeccakHash from 'keccak';

Yup.addMethod(Yup.string, 'passwdStrength', function(level, message) {
    return this.test('passwdStrength', message, value => {
        const result = passwordMeter.checkPass(value);
        return result >= level;
    });
});

Yup.addMethod(Yup.mixed, 'sameAs', function(ref, message) {
    return this.test('sameAs', message, function(value) {
        if (value) {
            const other = this.resolve(ref);
            return !other || value === other;
        }
        return !value;
    });
});

Yup.addMethod(Yup.string, 'ethWallet', function(message) {
    return this.test('ethWallet', message, value => {
        if (value.match(/^0x[a-fA-F0-9]{40}$/)) {
            const checksumed = toChecksumAddress(value);
            return checksumed === value;
        }
        return false;
    });
});

// Copied from https://github.com/ethereum/EIPs/blob/master/EIPS/eip-55.md
function toChecksumAddress(address_in) {
    const address = address_in.toLowerCase().replace('0x', '');
    const hash = createKeccakHash('keccak256').update(address).digest('hex');
    let ret = '0x';

    for (let i = 0; i < address.length; i++) {
        if (parseInt(hash[i], 16) >= 8) { //eslint-disable-line no-magic-numbers
            ret += address[i].toUpperCase();
        } else {
            ret += address[i];
        }
    }

    return ret;
}


export default Yup;
