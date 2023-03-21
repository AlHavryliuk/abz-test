import { AuthButton, AutorizationWrapper } from './Autorization.styled'

const Autorization = () => {
    return (
        <AutorizationWrapper>
            <AuthButton>Users</AuthButton>
            <AuthButton>Sign up</AuthButton>
        </AutorizationWrapper>
    )
}

export default Autorization