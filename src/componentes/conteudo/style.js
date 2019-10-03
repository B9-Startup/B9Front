import styled from 'styled-components';

export const Main = styled.div`
    background-color: #FFF;
    position: absolute;
    left: 295px;
    top: 69px;
    right: 3px;
    bottom: 0;
    padding: 15px;

    @media (max-width: 768px) {
        position: relative;
        left: 0;
        top: 5px;
    }
`;