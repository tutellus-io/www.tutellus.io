//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import {
    HeaderLogo,
} from './';
import {
    SectionContent,
    MobileMenu,
} from '../';
import {TOP_HEADER_HEIGHT} from './styles';
import styles from '../../styles';

const small_header_styles = `
    height: ${ TOP_HEADER_HEIGHT.SMALL }px;
    background-color: black;
`;

const Header = styled.header`
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
    padding: 0 1em;
    font-size: 1em;
    color: white;
    transition: all .5s linear;
    ${ small_header_styles }

    @media ${ styles.media.tablet } {
        height: ${ TOP_HEADER_HEIGHT.SMALL }px;
        background: linear-gradient(black, transparent);
        ${ props => props.small && small_header_styles }
    }

    @media ${ styles.media.laptop } {
        padding: 0 2em;
    }
`;

/*::
type TopHeaderProps = {|
    className?: string,
    logo: string,
    title: string,
    small?: bool,
    children?: React.Node,
|}
*/
export const TopHeader/*:ComponentType<TopHeaderProps>*/ = styled(({className, small, logo, title, children}/*:TopHeaderProps*/) =>
    <Header className={ className } small={ small }>
        <SectionContent>
            <HeaderLogo logo={ logo } title={ title } />
            <MediaQuery query="(min-width: 768px)">
                { children }
            </MediaQuery>
            <MediaQuery query="(max-width: 767px)">
                <MobileMenu top_margin={ TOP_HEADER_HEIGHT.SMALL }>
                    {children}
                </MobileMenu>
            </MediaQuery>
        </SectionContent>
    </Header>
)`
    & > div {
        display: grid;
        grid-template-columns: 7fr 4fr;
        grid-column-gap: 1em;
        align-items: center;
        justify-items: start;
        height: ${ TOP_HEADER_HEIGHT.SMALL }px;

        @media ${ styles.media.tablet } {
            grid-template-columns: auto 1fr auto;
        };

        @media ${ styles.media.laptop } {
            grid-column-gap: 1.2em;
        }

        & > div:nth-child(2) {
            justify-self: end;
        }
    }
`;
TopHeader.displayName = 'TopHeader';
