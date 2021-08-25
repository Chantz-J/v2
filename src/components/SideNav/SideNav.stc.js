import styled from 'styled-components'




export const SideWrapper = styled.aside`
    background-color: rgba(14, 30, 43, 0.8);
    backdrop-filter: saturate(180%) blur(20px);
    height: 100%; 
    width: 160px;
    position: fixed; 
    z-index: 10; 
    top: 0; 
    left: 0;
    padding-top: 20px;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-right: 1px solid ${({ theme }) => theme.colors.lightGrey};
    transition: 0.30s ease-in-out;
`;