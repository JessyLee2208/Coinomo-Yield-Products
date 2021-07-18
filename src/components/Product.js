import React, { useState } from 'react';
import styled from 'styled-components';

const ProductBox = styled.div`
  width: 100%;
  display: flex;

  padding: 10px;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  padding: 20px;
  margin: 18px auto;
  flex-direction: column;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  border-radius: 4px;
  justify-content: space-between;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const BodyItem = styled.div`
  color: #1a1a1a;
  text-align: center;
  font-weight: 400;
  flex-grow: 1;

  max-width: 120px;

  @media screen and (max-width: 768px) {
    text-align: left;
  }
`;

const BodyItemName = styled(BodyItem)`
  flex-grow: 1.5;
  max-width: 180px;
  min-width: 120px;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    text-align: left;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const SubItem = styled(BodyItem)`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    color: #9f9f9f;
    font-size: 14px;
    fint-wight: 500;
  }
`;

const BodyItemIcon = styled(BodyItem)`
  max-width: 40px;
  margin-right: 0;

  span {
    i {
      color: #1a1a1a;
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 20px;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 12px 12px 12px 0;
  width: 100%;
  a {
    text-decoration: none;
    color: #1a1a1a;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const SubBox = styled.div`
  margin-right: 50px;
  max-width: 180px;
  width: 100%;
`;

function Product(data) {
  const [isOpen, setIsOpen] = useState(false);

  function handleTable() {
    setIsOpen(!isOpen);
  }

  return (
    <ProductBox>
      <Container onClick={handleTable}>
        <BodyItemName>{data.data.name}</BodyItemName>
        <BodyItem>
          <SubItem>Type</SubItem>
          <BodyItem>{data.data.type}</BodyItem>
        </BodyItem>
        <BodyItem>
          <SubItem>Flexible</SubItem>
          <BodyItem>Flexible</BodyItem>
        </BodyItem>
        <BodyItem>
          <SubItem>Minimum</SubItem>
          <BodyItem>100USDC</BodyItem>
        </BodyItem>
        <BodyItem>
          <SubItem>APY</SubItem>
          <BodyItem>{data.data.apr}</BodyItem>
        </BodyItem>

        <BodyItemIcon>
          <span>
            <i
              className="fas fa-chevron-down"
              style={isOpen ? { transform: 'rotate(-90deg)', transition: ' all 0.2s ease' } : {}}
            ></i>
          </span>
        </BodyItemIcon>
      </Container>

      <ContentItem
        style={!isOpen ? { overflow: 'hidden', opacity: 0, maxHeight: 0, padding: 0, margin: '0 8px ' } : {}}
      >
        <ContentTitle>Introduction</ContentTitle>
        <SubContent>{data.data.introduction}</SubContent>
        <ContentContainer>
          <SubBox>
            <ContentTitle>Issuer</ContentTitle>
            <SubContentOverflow>{data.data.issuer}</SubContentOverflow>
          </SubBox>
          <SubBox>
            <ContentTitle>Issuer Website</ContentTitle>
            <SubContentOverflow>
              <a href={data.data.websiteUrl}>{data.data.websiteUrl}</a>
            </SubContentOverflow>
          </SubBox>
        </ContentContainer>
        <ContentContainer>
          <SubBox>
            <ContentTitle>Start Date</ContentTitle>
            <SubContentOverflow>{data.data.startDate}</SubContentOverflow>
          </SubBox>
          <SubBox>
            <ContentTitle>Total Value Locked</ContentTitle>
            <SubContentOverflow>{data.data.volumn}</SubContentOverflow>
          </SubBox>
          <SubBox>
            <ContentTitle>Contract Address</ContentTitle>
            <SubContentOverflow>
              <a href={data.data.contractAddress}>{data.data.contractAddress}</a>
            </SubContentOverflow>
          </SubBox>
          <SubBox>
            <ContentTitle>Risk Level</ContentTitle>
            <SubContentOverflow>{data.data.riskLevel}</SubContentOverflow>
          </SubBox>
        </ContentContainer>
      </ContentItem>
    </ProductBox>
  );
}

export default Product;
