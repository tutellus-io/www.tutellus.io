//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';
import {Link} from 'react-router-dom';
/*::
type HeaderLogoProps = {|
    className?: string,
    logo: string,
    title: string,
|}
*/
export const HeaderLogo/*:ComponentType<HeaderLogoProps>*/ = styled((props/*:HeaderLogoProps*/) =>
    <Link to="/" className={ props.className }>
        <img src={ props.logo } alt={ props.title } />
    </Link>
)`
    display: block;
    max-width: 7em;
`;
