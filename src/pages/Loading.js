//@flow
import styled, {keyframes, css} from 'styled-components';

const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const loading_global = (width, margin, millis) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-left-color: rgba(0, 0, 0, 0.7);
    border-radius: 999px;
    margin: ${ margin } 0 0 ${ margin };
    height: ${ width };
    width: ${ width };
    animation: ${ rotate360 } ${ millis } linear infinite;
`;

export const Loading = styled.div`
    ${ loading_global('100px', '-50px', '500ms') }

    &:before {
        content: "";
        ${ loading_global('74px', '-39px', '1000ms') }
    }

    &:after {
        content: "";
        ${ loading_global('118px', '-61px', '1500ms') }
    }
`;
