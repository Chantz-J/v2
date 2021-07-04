import styled from 'styled-components'
import mediaQueries from '../../styles/breakpoints'

export const StyledBanner = styled.div`
height: 84vh;
background-color: ${props => props.theme.colors.blue[1]};
.hero {
    visibility: hidden;
    height: 100vh;
    .container {
      margin: 0 auto;
      .hero-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 24px;
        height: 100vh;
        ${mediaQueries.desktop_small`
            flex-direction: column;
        `}
        .hero-content {
            width: 60%;
          .hero-content-inner {
            width: 400px;
            color: #323232;
            margin: 0 auto;
            h1 {
              font-weight: 500;
              font-size: 32px;
              margin-bottom: 24px;
              color: ${props => props.theme.colors.secondary};
              font-family: ${props => props.theme.fonts.head};
              .hero-content-line {
                margin: 0;
                height: 44px;
                overflow: hidden;
                .hero-content-line-inner {
                }
              }
            }
            p {
              font-size: 14px;
              line-height: 24px;
              font-weight: 300;
              padding-right: 48px;
              margin-bottom: 56px;
              color: ${props => props.theme.colors.secondary};
            }
            .btn-row {
              position: relative;
              &:before {
                position: absolute;
                content: "";
                width: 56px;
                height: 1px;
                background: ${props => props.theme.colors.lightGrey};
                top: 50%;
                left: -68px;
              }
              button {
                background: none;
                border: none;
                font-size: 12px;
                padding: 0;
                cursor: pointer;
                text-transform: uppercase;
                font-weight: 700;
                letter-spacing: 0.7px;
                display: flex;
                align-items: center;
                position: relative;
                &:focus {
                  outline: none;
                }
                .arrow-icon {
                  position: absolute;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background: #007fff;
                  height: 48px;
                  width: 48px;
                  border-radius: 100px;
                  margin-left: 16px;
                  left: 64px;
                  transform-origin: center center;
                }
              }
            }
          }
        }
        .hero-images {
          width: 100%;
          height: 100vh;
          position: relative;
          .hero-images-inner {
            .hero-image {
              position: absolute;
              overflow: hidden;
              &.girl {
                top: 0;
                right: 0px;
                width: 45%;
                height: 50%;
              }
              &.boy {
                bottom: 24px;
                left: 0px;
                width: 52%;
                height: 65%;
              }
              img {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100%;
              }
            }
          }
        }
      }
    }
  }


`