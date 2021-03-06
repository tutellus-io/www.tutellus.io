//@flow
import reset from 'styled-reset';
import Color from 'color';

const helpers = {
    clearfix: `
        &:after {
            content: "";
            display: table;
            clear: both;
        }
    `,
};
const media = {
    tablet: '(min-width: 768px)',
    laptop: '(min-width: 960px)',
    desktop: '(min-width: 1140px)',
};

export const colors = {
    athens: '#E6E6E6',
    blacksea: '#3B4F58',
    bluegrey: '#CED3D9',
    caribbean: '#21b3a7',
    darkblack: '#42474D',
    darkblue: '#202933',
    dark: '#283542',
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
    midgrey: '#BABABA',
    paypal: '#179bd7',
    pumpkin: '#F48C37',
    seablue: '#3C444B',
    softblack: '#555C63',
    softgrey: '#DFE2E6',
    twitter: '#00ADF0',
    watergrey: '#F7F9FA',
    white: '#FFFFFF',
    modify: (color/*:string*/) =>
        Color(color),
    settings: {
        //Diferencia entre el color y el efecto :hover
        hover_gap: 0.2, //eslint-disable-line no-magic-numbers
    },
};

const icons = `
    [class*='icon-']:before{
       display: inline-block;
       font-family: 'socialIcons';
       font-style: normal;
       font-weight: normal;
       line-height: 1;
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale
    }

	.icon-facebook:before{content:'\\0041';}
	.icon-github:before{content:'\\0042';}
	.icon-linkedin:before{content:'\\0043';}
	.icon-bitcoin:before{content:'\\0044';}
	.icon-medium:before{content:'\\0045';}
	.icon-reddit:before{content:'\\0046';}
	.icon-telegram:before{content:'\\0047';}
	.icon-twitter:before{content:'\\0048';}
    .icon-youtube:before{
        content:'\\0049';
        font-size: 2em;
        position: relative;
        top: -.2em;
        padding-right: 4px;
    }
    .icon-map:before{content:'\\004a';}
    .icon-mas:before{content:'\\004b';}
`;
export const styles = {
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
        *, html {
            font-family: "Lato", sans-serif;
            font-weight: 300;
        }
        * {
            box-sizing: border-box;
            text-rendering: optimizelegibility;
        }
        body {
            font-size: 18px;
            background-color: ${ colors.white };
            color: ${ colors.softblack };
        }
        main {
            overflow: hidden;
        }
        a {
            color: inherit;
            text-decoration: none;
        }
        strong {
            font-weight: bold;
        }
        details > summary {
            list-style-type: none;
            &::-webkit-details-marker { display: none; }
            &:focus {outline: none;}
        }
        ${ icons }
    `,
    helpers,
    media,
};

export default styles;
