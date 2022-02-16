import styled from 'styled-components';

const Grid = styled.div`
    height: 100vh;
    align-content: center;
    display: grid;
    grid-template-columns: 36px repeat(12, minmax(72px, auto)) 36px;
    grid-template-rows: max-content;
    column-gap: ${(props) => (props.gapDefault ? props.gapDefault : "24px")};
    row-gap: 60px;

    @media ${(props) => props.theme.breakpoints.md} {
        grid-template-columns: 28px repeat(8, minmax(72px, auto)) 28px;
        gap: ${(props) => (props.gapmdall ? props.gapmdall : "16px")};
        margin: ${(props) => (props.marginmdall ? props.marginmdall : 0)};
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        grid-template-columns: 12px repeat(4, minmax(72px, auto)) 12px;
        gap: ${(props) => (props.gapXmdall ? props.gapXmdall : "16px")};
        margin: ${(props) => (props.marginXmdall ? props.marginXmdall : 0)};
    }
`

export default Grid;