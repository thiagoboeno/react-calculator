import styled from 'styled-components';

export const Button = styled.button`
    font-size: 1.4em;
    background-color: ${props => (props.operation ? '#fa8231' : '#f0f0f0')};
    border: none;
    border-right: solid 1px #888;
    border-right: solid 1px #888;
    grid-column: ${props => (props.double ? 'span 2' : props.triple ? 'span 3' : '')};
    outline: none;
    color: ${props => (props.operation ? '#fff' : '')};

    &:active {
        background-color: ${props => (props.operation ? '#fa8231cc' : '#ccc')};
    }
`
