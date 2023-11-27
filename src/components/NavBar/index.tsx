// React
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { IoMdCodeWorking, IoIosArrowDown } from "react-icons/io";
// Styles
import * as S from "./styles";
import Gap from "../../utils/gap";

const NavBar = () => {
  return (
    <S.NavBarContainer>
      <S.NavBarMain>
        <Gap height="1.2rem" width="0" />

        <S.IconContainer>
          <S.Icon>
            <FontAwesomeIcon icon={faHome} className="FaIcon" />
            <p>Home</p>
          </S.Icon>
          <S.Icon>
            <FontAwesomeIcon icon={faUser} className="FaIcon" />
            <p>About Me</p>
          </S.Icon>
          <S.Icon>
            <IoMdCodeWorking className="Icon" />
            <p>Skills</p>
          </S.Icon>
          <S.Icon>
            <FontAwesomeIcon icon={faEnvelope} className="FaIcon" />
            <p>Contact</p>
          </S.Icon>
        </S.IconContainer>

        <S.LanguageContainer>
          PT <Gap width="0.8rem" height="0" /> <IoIosArrowDown />
        </S.LanguageContainer>
        <Gap height="0.8rem" width="0" />
      </S.NavBarMain>
    </S.NavBarContainer>
  );
};

export default NavBar;
