//@flow
import fs from 'fs';
import util from 'util';
import path from 'path';
//$FlowFixMe composeP existe
import {invoker, composeP} from 'ramda';

import firebase from '../src/models/firebase';

const locales_file = path.join(__dirname, '..', 'src', 'i18n.json');

const fetchLocales = () =>
    firebase.database().ref('locales').once('value')
    .then(invoker(0, 'val'));

const formatJSON = object => JSON.stringify(object, null, 2);

const writeFile = file_path => contents =>
    util.promisify(fs.writeFile)(file_path, contents, 'utf8');

const pull = composeP(
    writeFile(locales_file),
    formatJSON,
    fetchLocales,
);

const exit = code => () => process.exit(code);

if (!module.parent) {
    pull()
    .then(exit(0))
    .catch(exit(1));
}
