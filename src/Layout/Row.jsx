import styled from 'styled-components';

const Row = styled.div`
    grid-column-start: ${(props) => (props.sd ? props.sd : '2')};
    grid-column-end: ${(props) => (props.ed ? props.ed : '14')};

    @media ${(props) => props.theme.breakpoints.md} {
        grid-column-start: ${(props) => (props.smd ? props.smd : '2')};
        grid-column-end: ${(props) => (props.emd ? props.emd : '10')};
        display: ${(props) => (props.hide ? 'none' : 'relative')}; 
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        grid-column-start: ${(props) => (props.ssm ? props.ssm : '2')};
        grid-column-end: ${(props) => (props.esm ? props.esm : '6')};
    }
`

export default Row;