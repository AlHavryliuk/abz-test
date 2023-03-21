import Cards from 'components/Cards/Cards'
import CustomContainer from 'components/Custom/CustomContainer/CustomContainer'
import { MainTitle } from 'components/Custom/MainTitle/MainTitle.styled'
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { select } from 'store/selectors/selectors'
import { getUsers } from 'store/usersReducer/usersOperations'
import { CustomCardsGallery, GallerySection } from './CardsGallery.styled'

const CardsGallery = () => {
    const dispatch = useDispatch()
    const users = useSelector(select.users)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])


    return (
        <CustomContainer>
            <GallerySection>
                <MainTitle>Working with GET request</MainTitle>
                <CustomCardsGallery>
                    {users ? users.map(user => <Cards key={user.id} user={user} />) : <h1>Waiting...</h1>}
                </CustomCardsGallery>
                <LoadMoreBtn />
            </GallerySection>
        </CustomContainer>
    )
}

export default CardsGallery