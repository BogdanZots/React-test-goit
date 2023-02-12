import s from "styled-components";
import { IRepositoryItem } from "../../models/models";

interface ICardProps {
  item: IRepositoryItem;
}

const StyledCardContainer = s.div`
display : flex;
flex-direction:row;
width:100%;
margin-bottom : 36px;
padding:40px;
background-color:white;
border-radius: 16px;
`;

const StyledImg = s.img``;

const StyledIcon = s.img`width:22px;`;

const StyledAuthorContainer = s.div`
display: flex;
flex-direction:column;
margin-left : 36px;
align-items:flex-start;
`;

const StyledUserAchievements = s.div`
display : flex;
flex-direction:column;
margin-left : auto;
align-self:flex-end;
`;

const StyledUserAchievementsContainer = s.div`
display:flex;
flex-direction:row;
margin-bottom:25px;
`;

const StyledText = s.span<{ bold?: boolean }>`
font-family: 'Open Sans';
font-style: normal;
font-weight: ${props => (props.bold ? "600" : "400")};
font-size: 16px;
line-height: 25px;
margin-left:13px;
`;

const StyledAuthorDescription = s.small<{ isBold?: boolean; isBlack?: boolean; fontSize: string }>`
font-weight: ${props => (props.isBold ? "bold" : "normal")};
color: ${props => (props.isBlack ? "black" : "#A5ADBB")};
margin-bottom:4px;
font-family: 'Open Sans';
font-style: normal;
font-size: ${props => props.fontSize};;
line-height: 25px;`;

export default function Card({ item }: ICardProps) {
  const { owner, language, description, name, watchers, stargazers_count } = item;
  return (
    <StyledCardContainer>
      <StyledImg src={require("../../static/reactImg.png")} />
      <StyledAuthorContainer>
        <StyledAuthorDescription isBold={true} isBlack={true} fontSize="16px">
          Repo name : {name}
        </StyledAuthorDescription>
        <StyledAuthorDescription fontSize="14px">Author : {owner.login} </StyledAuthorDescription>
        <StyledAuthorDescription fontSize="14px">Language : {language}</StyledAuthorDescription>
        <StyledAuthorDescription fontSize="14px">
          Description : {description}
        </StyledAuthorDescription>
      </StyledAuthorContainer>
      <StyledUserAchievements>
        <StyledUserAchievementsContainer>
          <StyledIcon src={require("../../static/star.png")} />
          <StyledText bold={true}>{stargazers_count ? stargazers_count : "0"}</StyledText>
          <StyledText bold={false}>stars</StyledText>
        </StyledUserAchievementsContainer>
        <StyledUserAchievementsContainer>
          <StyledIcon src={require("../../static/person.png")} />
          <StyledText bold={true}>{watchers ? watchers : "0"}</StyledText>
          <StyledText bold={true}> watchers </StyledText>
        </StyledUserAchievementsContainer>
      </StyledUserAchievements>
    </StyledCardContainer>
  );
}
