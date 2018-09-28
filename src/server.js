const path = require('path');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(helmet());
app.use(compression());

app.use(express.static(path.join(__dirname, '..', 'build')));

app.listen(PORT, err => {
    if (err) {
        // eslint-disable-next-line no-console
        console.error('Error - ', err);
        process.exit(-1);
    }
    // eslint-disable-next-line no-console
    console.log('ico-web port:', PORT);
});
