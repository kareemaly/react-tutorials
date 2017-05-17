import React from 'react';
import { StaggeredMotion, spring } from 'react-motion';
import styled from 'styled-components';

const colors = [
  '#B3E5FC',
  '#81D4FA',
  '#4FC3F7',
  '#29B6F6',
  '#03A9F4',
  '#039BE5',
  '#0288D1',
];

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
`;

const Box = styled.div`
  flex-basis: ${(props) => props.width}%;
  background: ${(props) => props.bgColor};
`;

const ContentWrapper = styled.div`
  background: ${(props) => props.bgColor};
  flex-basis: 100%;
`;

class EntranceAnimation extends React.Component {
  render() {
    const {
      children,
      startAnimation,
    } = this.props;

    return (
      <StaggeredMotion
        defaultStyles={[
          { width: 100 },
          { width: 100 },
          { width: 100 },
          { width: 100 },
          { width: 100 },
          { width: 100 },
        ]}
        styles={(prevStyles) => [
          { width: spring(startAnimation ? 0 : 100) },
          { width: spring(prevStyles[0].width) },
          { width: spring(prevStyles[1].width) },
          { width: spring(prevStyles[2].width) },
          { width: spring(prevStyles[3].width) },
          { width: spring(prevStyles[4].width) },
        ]}
      >
        {(styles) => (
          <Wrapper>
            <Box bgColor={colors[0]} width={styles[0].width} />
            <Box bgColor={colors[1]} width={styles[1].width} />
            <Box bgColor={colors[2]} width={styles[2].width} />
            <Box bgColor={colors[3]} width={styles[3].width} />
            <Box bgColor={colors[4]} width={styles[4].width} />
            <Box bgColor={colors[5]} width={styles[5].width} />
            <ContentWrapper bgColor={colors[6]}>
              {styles[3].width < 25 && children}
            </ContentWrapper>
          </Wrapper>
        )}
      </StaggeredMotion>
    );
  }
}

export default EntranceAnimation;
