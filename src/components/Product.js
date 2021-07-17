import React, { useState } from 'react';
import styled from 'styled-components';

const ProductBox = styled.div`
  width: 940px;
  display: flex;

  padding: 10px;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  padding: 20px;
  margin: 18px auto;
  flex-direction: column;
`;

const Container = styled.div`
  width: 940px;
  display: grid;
  grid-template-columns: 210px 160px 160px 160px 100px auto;
  grid-gap: 20px;
  padding: 10px;
  border-radius: 4px;
`;

const BodyItem = styled.div`
  color: #1a1a1a;
  text-align: center;
  font-weight: 400;

  span {
    i {
      color: #1a1a1a;
    }
  }
`;

const ContentItem = styled.div`
  border-top: 0.5px dashed #d4d4d4;
  margin: 16px 8px 0 8px;
  transition: all 0.2s ease;
  overflow: auto;
  opacity: 1;
`;

const ContentTitle = styled.div`
  font-family: Roboto, 'Noto Sans TC', Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #1a1a1a;
  margin: 20px 0 12px 0;
`;

const SubContent = styled.div`
  font-family: Roboto, 'Noto Sans TC', Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #1a1a1a;
  margin: 12px 0;
`;

const SubContentOverflow = styled(SubContent)`
  // width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 12px 12px 12px 0;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 200px 210px 210px 210px;
  grid-gap: 23px;
`;

function Product(data) {
  const [isOpen, setIsOpen] = useState(false);

  console.log(data.data);

  function handleTable() {
    setIsOpen(!isOpen);
  }

  return (
    <ProductBox>
      <Container onClick={handleTable}>
        <BodyItem>{data.data.name}</BodyItem>
        <BodyItem>{data.data.type}</BodyItem>
        <BodyItem>Flexible</BodyItem>
        <BodyItem>100USDC</BodyItem>
        <BodyItem>{data.data.apr}</BodyItem>
        <BodyItem>
          <span>
            <i
              className="fas fa-chevron-down"
              style={isOpen ? { transform: 'rotate(-90deg)', transition: ' all 0.2s ease' } : {}}
            ></i>
          </span>
        </BodyItem>
      </Container>
      {/* {isOpen ? ( */}
      <ContentItem
        style={!isOpen ? { overflow: 'hidden', opacity: 0, maxHeight: 0, padding: 0, margin: '0 8px ' } : {}}
      >
        <ContentTitle>Introduction</ContentTitle>
        <SubContent>{data.data.introduction}</SubContent>
        <ContentContainer>
          <div>
            <ContentTitle>Issuer</ContentTitle>
            <SubContentOverflow>{data.data.issuer}</SubContentOverflow>
          </div>
          <div>
            <ContentTitle>Issuer Website</ContentTitle>
            <SubContentOverflow>{data.data.websiteUrl}</SubContentOverflow>
          </div>
        </ContentContainer>
        <ContentContainer>
          <div>
            <ContentTitle>Start Date</ContentTitle>
            <SubContentOverflow>{data.data.startDate}</SubContentOverflow>
          </div>
          <div>
            <ContentTitle>Total Value Locked</ContentTitle>
            <SubContentOverflow>{data.data.volumn}</SubContentOverflow>
          </div>
          <div>
            <ContentTitle>Contract Address</ContentTitle>
            <SubContentOverflow>{data.data.contractAddress}</SubContentOverflow>
          </div>
          <div>
            <ContentTitle>Risk Level</ContentTitle>
            <SubContentOverflow>{data.data.riskLevel}</SubContentOverflow>
          </div>
        </ContentContainer>
      </ContentItem>
      {/* ) */}
    </ProductBox>
  );
}

export default Product;
