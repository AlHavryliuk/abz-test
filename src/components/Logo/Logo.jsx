import svg from '../../images/sprite.svg'
import { LogoWrapper } from './Logo.styled'

const Logo = () => {
    return (
        <LogoWrapper>
            <svg width="38.11" height="26">
                <use href={`${svg}#icon-cat`}></use>
            </svg>
            <svg width="63.91" height="10.52">
                <use href={`${svg}#icon-title`}></use>
            </svg>
        </LogoWrapper>
    )
}

export default Logo