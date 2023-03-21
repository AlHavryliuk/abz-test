import { CustomCard, CustomCardText, CustomPhotoCard, CustomUserName } from './Cards,styled'
import PropTypes from 'prop-types'

const Cards = ({ user: { photo, phone, position, name, email } }) => {
    return (
        <CustomCard>
            <CustomPhotoCard src={photo} alt="photo_card" />
            <CustomUserName>{name.length > 26 ? name.slice(1, 26).concat('...') : name}</CustomUserName>
            <CustomCardText>
                {position.length > 26 ? position.slice(1, 26).concat('...') : position}
                <br />
                {email.length > 26 ? email.slice(1, 26).concat('...') : email}
                <br />
                {phone}
            </CustomCardText>

        </CustomCard>
    )
}

Cards.propTypes = {
    user: PropTypes.shape({
        photo: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    }).isRequired
};

export default Cards