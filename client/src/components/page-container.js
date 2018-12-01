import React, { Fragment } from 'react';
import styled from 'react-emotion';

export default function PageContainer(props) {
  return (
    <Fragment>
      <Container>{props.children}</Container>
    </Fragment>
  );
}

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  width: '100%',
  maxWidth: 600,
  margin: '0 auto',
  padding: 10,
  paddingBottom: 10,
});