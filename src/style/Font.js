import { createGlobalStyle } from 'styled-components';

export const Font = createGlobalStyle`
    body{
        @import url('https://fonts.googleapis.com/earlyaccess/notosanskr.css, https://fonts.googleapis.com/earlyaccess/notosansjp.css, https://fonts.googleapis.com/earlyaccess/notosanssc.css');
        font-family: 'Noto Sans SC', 'Noto Sans TC', 'Noto Sans KR', 'Noto Sans JP', sans-serif;
    }
`;