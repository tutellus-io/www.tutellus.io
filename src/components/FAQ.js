//@flow
import * as React from 'react';
import styled from 'styled-components';

import styles from '../styles';
const {margin, padding, border, colors} = styles;

/*:: type FAQAttrs = {className: string, title: string, children: React.Node} */
export const FAQ = styled((props/*: FAQAttrs */) =>
    <div className={ props.className }>
        {/* TODO: imágenes desde S3 */}
        <img src="https://www.tutellus.com/bower_components/tutellus.css/images/careers/small-question-icon.svg" alt="" />
        <strong>{ props.title }</strong>
        <div>{ props.children }</div>
    </div>
)`
	padding-bottom: ${ padding.medium };
	margin-bottom: ${ margin.medium };
	border-bottom: solid ${ border.small } ${ colors.grey };

	& > img {
		margin-right: ${ margin.small };
		display: inline-block;
		vertical-align: middle;
	}

    & > strong {
        margin-bottom: ${ margin.small };
		vertical-align: middle;
        font-weigth: ${ styles.font.weight.normal };
        ${ styles.text.xlarge }
        color: ${ colors.darkblack };
    }
    & > div {
        margin-top: ${ margin.small };
    }
`;
