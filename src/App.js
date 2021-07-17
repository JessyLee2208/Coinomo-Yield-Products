import React from 'react';
import styled from 'styled-components';
import useDataCheck from './hook/useGetData';
import Product from './components/Product';
import Loader from './components/Loader';

const PageBox = styled.div`
  width: 1000px;
  margin: 18px auto;
`;

const PageTitle = styled.div`
  font-family: Roboto, 'Noto Sans TC', Arial, sans-serif;
  font-size: 32px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: black;
  margin: 40px 8px 14px 8px;
`;

const Subtitle = styled.div`
  font-family: Roboto, 'Noto Sans TC', Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #1a1a1a;
  margin: 4px 8px;
`;

const Container = styled.div`
  width: 940px;
  display: grid;
  grid-template-columns: 220px 160px 160px 160px 100px auto;
  grid-gap: 20px;

  border-radius: 4px;
  padding-top: 40px;
  margin: 0px auto;
`;

const BodyItem = styled.div`
  color: #343434;
  text-align: center;
  font-family: Roboto, 'Noto Sans TC', Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
`;

function App() {
  const data = useDataCheck();
  // console.log(data.data.en);
  return (
    <PageBox>
      <PageTitle>Coinomo Yield Products</PageTitle>
      <Subtitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </Subtitle>
      <div>
        <Container>
          <BodyItem>Name</BodyItem>
          <BodyItem>Type</BodyItem>
          <BodyItem>Flexible</BodyItem>
          <BodyItem>Minimum</BodyItem>
          <BodyItem>APY</BodyItem>
          <BodyItem></BodyItem>
        </Container>
      </div>
      {data?.data ? data.data.en.map((data) => <Product data={data}></Product>) : <Loader></Loader>}
    </PageBox>
  );
}

export default App;
