import CustomContainer from 'components/Custom/CustomContainer/CustomContainer'
import { MainTitle } from 'components/Custom/MainTitle/MainTitle.styled'
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn'
import { Suspense } from 'react'
import { lazy, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { select } from 'store/selectors/selectors'
import { getUsers } from 'store/usersReducer/usersOperations'
import { CustomCardsGallery, GallerySection } from './CardsGallery.styled'

const CardsGallery = () => {
    const dispatch = useDispatch()
    const users = useSelector(select.users)
    const LazyUserCard = lazy(() => import('../Cards/Cards'));

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])


    return (
        <CustomContainer>
            <GallerySection>
                <MainTitle>Working with GET request</MainTitle>
                <CustomCardsGallery>
                    <Suspense    >
                        {users ? users.map(user => <LazyUserCard key={user.id} user={user} />) : <h1>Waiting...</h1>}
                    </Suspense>
                </CustomCardsGallery>
                <LoadMoreBtn />
            </GallerySection>
        </CustomContainer>
    )
}

export default CardsGallery