/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import EntranceAnimation from 'components/EntranceAnimation';
import messages from './messages';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  color: #FFF;
`;

const Title = styled.h1`
  font-size: 3em;
  line-height: 50px;
  font-weight: 200;
`;

const Subtitle = styled.h2`
  font-size: 2em;
  line-height: 40px;
  font-weight: 200;
`;

const Name = styled.h5`
  font-size: 1.4em;
  line-height: 28px;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.5);
`;

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.setState({
      show: false,
    });

    setTimeout(() => this.setState({ show: true }), 500);
  }

  render() {
    return (
      <EntranceAnimation startAnimation={this.state.show}>
        <ContentWrapper>
          <Title>Practical React tutorials</Title>
          <Subtitle>Entrance Animation with React and React Motion</Subtitle>
          <Name>
            Kareem Mohamed
          </Name>
        </ContentWrapper>
      </EntranceAnimation>
    );
  }
}
