import { createGlobalStyle } from 'styled-components'

import NeutrifStudioRegular from './NeutrifStudio-Regular.woff'
import NeutrifStudioRegular2 from './NeutrifStudio-Regular.woff2'
import RobotoMonoRegular from './RobotoMono-Regular.ttf'

const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'Neutrif Studio';
        src: local('Neutrif Studio'), local('NeutrifStudio'),
        url(${NeutrifStudioRegular}) format('woff2'),
        url(${NeutrifStudioRegular2}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto Mono';
        src: local('Roboto Mono'), local('RobotoMono'),
        url(${RobotoMonoRegular}) format('tff'),
        font-weight: 300;
        font-style: normal;
    }
`

export default GlobalFonts