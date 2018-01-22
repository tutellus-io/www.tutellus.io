//@flow
import R from 'ramda';
//$FlowFixMe
const mapKeys = R.curry((fn, obj) =>
    R.fromPairs(R.map(R.adjust(fn, 0), R.toPairs(obj))));

export const cfg = mapKeys(R.replace(/^REACT_APP_/, ''), process.env);

export const social_links = {
    telegram: 'https://t.me/tutellus',
    medium: 'https://medium.com/tutellus-io',
    bitcoin: 'https://bitcointalk.org/index.php?topic=2571779.0',
    twitter: 'https://twitter.com/tutellusico',
    facebook: 'https://www.facebook.com/tutellusio/',
    github: 'https://github.com/tutellus-io',
    youtube: 'https://www.youtube.com/channel/UCocRxY2k1Oxsh5cn9bKmoLw',
    linkedin: 'https://www.linkedin.com/company/27141306/',
    reddit: 'https://www.reddit.com/r/Tutellus/',
};
export const S3 = 'https://lib.tutellus.com/ico';
