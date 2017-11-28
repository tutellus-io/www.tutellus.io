//@flow
import styled from 'styled-components';

export const Layers = styled.div`
    max-width: 90%;
    margin: 0 auto;
    font-size: 1.25em;
    margin-bottom: 2em;
`;
export const Layer = styled.div`
    background: white;
    padding: 1em;
    text-align: center;
    margin-bottom: 0.5em;
`;
export const TechIcon = styled.img`
    display: inline-block;
    margin: 0.5em;
    height: 1.5em;
    & + span {
        position: relative;
        bottom: .3em;
    }
`;
