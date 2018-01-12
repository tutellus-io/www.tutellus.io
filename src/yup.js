import Yup from 'yup';
import passwordMeter from 'passwordmeter';
import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider);

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
        if (value && value.match(/^0x[a-fA-F0-9]{40}$/)) {
            return web3.utils.checkAddressChecksum(value);
        }
        return false;
    });
});

export default Yup;
