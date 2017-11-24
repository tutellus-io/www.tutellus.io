import Yup from 'yup';
import passwordMeter from 'passwordmeter';

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

export default Yup;
