import React from 'react';
import styled from 'styled-components';
import useDataCheck from './hook/useGetData';
import Product from './components/Product';
import Loader from './components/Loader';

const PageBox = styled.div`
  max-width: 1000px;
  width: auto;
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
  width: 100%;
  display: flex;

  border-radius: 4px;

  padding: 40px 20px 0 20px;
  justify-content: space-between;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const BodyItem = styled.div`
  color: #343434;
  text-align: center;
  font-family: Roboto, 'Noto Sans TC', Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;

  max-width: 120px;
  width: 100%;
`;

const BodyItemName = styled(BodyItem)`
  max-width: 180px;
  width: 100%;
  min-width: 120px;
`;

const BodyItemIcon = styled(BodyItem)`
  max-width: 40px;
  width: 100%;
`;

function App() {
  const data = useDataCheck();

  return (
    <PageBox>
      <PageTitle>Coinomo Yield Products</PageTitle>
      <Subtitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </Subtitle>

      <Container>
        <BodyItemName>Name</BodyItemName>
        <BodyItem>Type</BodyItem>
        <BodyItem>Flexible</BodyItem>
        <BodyItem>Minimum</BodyItem>
        <BodyItem>APY</BodyItem>
        <BodyItemIcon></BodyItemIcon>
      </Container>

      {data?.data ? data.data.en.map((data, index) => <Product data={data} key={index}></Product>) : <Loader></Loader>}
    </PageBox>
  );
}

export default App;
