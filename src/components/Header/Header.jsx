import Autorization from "components/Authorization/Autorization"
import CustomContainer from "components/Custom/CustomContainer/CustomContainer"
import Logo from "components/Logo/Logo"
import { HeaderStyled } from "./Header.styled"



const Header = () => {
    return (
        <HeaderStyled>
            <CustomContainer>
                <Logo />
                <Autorization />
            </CustomContainer>
        </HeaderStyled>
    )
}

export default Header