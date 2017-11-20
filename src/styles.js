//@flow
import reset from 'styled-reset';

const helpers = {
    clearfix: `
        &:after {
            content: "";
            display: table;
            clear: both;
        }
    `,
};

const colors = {
    athens: '#EDF1F5',
    blacksea: '#3B4F58',
    bluegrey: '#CED3D9',
    caribbean: '#21b3a7',
    darkblack: '#42474D',
    darkblue: '#26323F',
    darkgrey: '#7F8A94',
    emerald: '#33c17a',
    facebook: '#3C599B',
    flamingo: '#c85649',
    fog: '#CDD4DB',
    googleplus: '#C03A2A',
    grey: '#E8EBED',
    hysteria: '#965EA6',
    instagram: '#517fa4',
    lemonade: '#efba50',
    lightblue: '#24a9bd',
    linkedin: '#007bb6',
    midgrey: '#A2AAB3',
    paypal: '#179bd7',
    pumpkin: '#F48C37',
    seablue: '#34495E',
    softblack: '#555C63',
    softgrey: '#DFE2E6',
    twitter: '#00ADF0',
    watergrey: '#F7F9FA',
    white: '#FFFFFF',
};

//TODO mover a S3?
const fonts = `
    @font-face {
            font-family: 'Lato';
            src: url("/fonts/lato/lato-bold.eot");
            src: local("Lato Bold"),local("Lato-Bold"),url("/fonts/lato/lato-bold.eot?#iefix") format("embedded-opentype"),url("/fonts/lato/lato-bold.woff") format("woff"),url("/fonts/lato/lato-bold.ttf") format("truetype"),url("/fonts/lato/lato-bold.svg#lato") format("svg");
            font-weight: 700;
            font-style: normal
    }

    @font-face {
            font-family: 'Lato';
            src: url("/fonts/lato/lato-bolditalic.eot");
            src: local("Lato Bold Italic"),local("Lato-BoldItalic"),url("/fonts/lato/lato-bolditalic.eot?#iefix") format("embedded-opentype"),url("/fonts/lato/lato-bolditalic.woff") format("woff"),url("/fonts/lato/lato-bolditalic.ttf") format("truetype"),url("/fonts/lato/lato-bolditalic.svg#lato") format("svg");
            font-weight: 700;
            font-style: italic
    }

    @font-face {
            font-family: 'Lato';
            src: url("/fonts/lato/lato-italic.eot");
            src: local("Lato Italic"),local("Lato-Italic"),url("/fonts/lato/lato-italic.eot?#iefix") format("embedded-opentype"),url("/fonts/lato/lato-italic.woff") format("woff"),url("/fonts/lato/lato-italic.ttf") format("truetype"),url("/fonts/lato/lato-italic.svg#lato") format("svg");
            font-weight: 400;
            font-style: italic
    }

    @font-face {
            font-family: 'Lato';
            src: url("/fonts/lato/lato-regular.eot");
            src: local("Lato Regular"),local("Lato-Regular"),url("/fonts/lato/lato-regular.eot?#iefix") format("embedded-opentype"),url("/fonts/lato/lato-regular.woff") format("woff"),url("/fonts/lato/lato-regular.ttf") format("truetype"),url("/fonts/lato/lato-regular.svg#lato") format("svg");
            font-weight: 400;
            font-style: normal
    }

    @font-face {
            font-family: 'Lato';
            src: url("/fonts/lato/lato-light.eot");
            src: local("Lato Light"),local("Lato-Light"),url("/fonts/lato/lato-light.eot?#iefix") format("embedded-opentype"),url("/fonts/lato/lato-light.woff") format("woff"),url("/fonts/lato/lato-light.ttf") format("truetype"),url("/fonts/lato/lato-light.svg#lato") format("svg");
            font-weight: 300;
            font-style: normal
    }
`;
export const styles = {
    font: {
        weight: {
            normal: 300,
        },
    },
    text: {
        medium: `
			font-size: 1.143em;
			line-height: 1.251rem;`,
        large: `
			font-size: 1.286em;
			line-height: 1.457rem;`,
        xlarge: `
            font-size: 1.571em;
            line-height: 1.85rem;`,
        huge: `
			font-size: 2.357em;
			line-height: 2.557rem;`,
    },
    margin: {
        small: `10px`,
        medium: `20px`,
    },
    padding: {
        small: `10px`,
        medium: `20px`,
        large: `30px`,
    },
    border: {
        small: `1px`,
        radius: {
            small: `3px`,
        },
    },
    colors,
    global: `
        ${ reset }
        ${ fonts }
        *, html {
            font-family: "Lato", sans-serif;
            font-weight: 300;
        }
        * {
            box-sizing: border-box;
        }
        body {
            font-size: 14px;
            line-height: 1.2;
            background-color: ${ colors.white };
            color: ${ colors.softblack };
        }
        a {
            color: inherit;
        }
        strong {
            font-weight: bold;
        }
        details > summary {
            list-style-type: none;
            &::-webkit-details-marker { display: none; }
            &:focus {outline: none;}
        }
    `,
    helpers,
};

export default styles;
