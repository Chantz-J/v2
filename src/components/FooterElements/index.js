import styled from 'styled-components'
import mediaQueries from '../../styles/breakpoints'

export const FooterWrapper = styled.footer`
    grid-column: 2 / span 12;
    min-height: 11.25rem;
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    ${mediaQueries.desktop_medium`
      padding: 0 5rem;
   `}
   ${mediaQueries.desktop`
      padding: 0 3rem;
   `}
   ${mediaQueries.tablet`
      margin-left: 0;
      padding: 0 1rem;
      grid-column: 2 / span 6;

   `}
   ${mediaQueries.phablet`
      padding: 1rem;
   `}

`

export const FooterSocialWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;

     p {
        text-align: center;
        flex: 0 0 100%;
    }

`

export const FooterSocialIcons = styled.div`
    flex: 0 0 100%;
    margin-bottom: 2rem;

    img {
        padding: 0 1rem;
        transitiom: filter 0.3s ease;

        &:hover, &:focus {
            filter: brightness(50%);
        }
    }

`