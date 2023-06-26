import styled from 'styled-components';

import { Report } from 'notiflix/build/notiflix-report-aio';

const Container = styled.div`
  width: 100%;

  margin: 0 auto;
  margin-top: 30px;
  padding: 30px 15px;

  max-width: 480px;

  border: 1px solid #e5eaf1;
  border-radius: 8px;
  overflow: hidden;

  background-color: #f3f6f9;
  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

const MainTitle = styled.h2`
  margin-bottom: 30px;

  text-align: center;

  font-size: 28px;
  font-weight: bold;
  color: #112236;
`;

const Title = styled.h2`
  margin-bottom: 30px;

  text-align: center;

  font-size: 24px;
  font-weight: bold;
  color: #112236;
`;

Report.init({
  backgroundColor: '#e5eaf1',
  titleFontSize: '24px',
  messageFontSize: '18px',
  info: {
    svgColor: '#112236',
    titleColor: '#112236',
    messageColor: '#112236',
    buttonBackground: '#768696',
    buttonColor: '#112236',
    backOverlayColor: 'rgb(118, 134, 150, 0.8)',
  },
});

export { Container, MainTitle, Title };
