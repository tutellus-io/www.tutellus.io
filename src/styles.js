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
    settings: {
        //Diferencia entre el color y el efecto :hover
        hover_gap: 0.2, //eslint-disable-line no-magic-numbers
    },
};

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

    @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        src: url(/fonts/material-icon/MaterialIcons-Regular.eot); /* For IE6-8 */
        src: local('Material Icons'),
          local('MaterialIcons-Regular'),
          url(/fonts/material-icon/MaterialIcons-Regular.woff2) format('woff2'),
          url(/fonts/material-icon/MaterialIcons-Regular.woff) format('woff'),
          url(/fonts/material-icon/MaterialIcons-Regular.ttf) format('truetype');
      }
    @font-face {
        font-family: 'socialIcons';
        src: url('/fonts/socialIcons.eot');
        src: url('/fonts/socialIcons.eot?#iefix') format('embedded-opentype'),
             url('/fonts/socialIcons.woff') format('woff'),
             url('/fonts/socialIcons.ttf') format('truetype'),
             url('/fonts/socialIcons.svg#socialIcons') format('svg');
        font-weight: normal;
        font-style: normal;
    }
`;
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
        top: .25em;
    }
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
        ${ fonts }
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
