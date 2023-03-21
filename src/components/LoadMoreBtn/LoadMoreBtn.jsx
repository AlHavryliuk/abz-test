import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementPage } from 'store/paginationReducer/paginationSlice';
import { select } from 'store/selectors/selectors';
import { getUsers } from 'store/usersReducer/usersOperations';
import { CustomLoadMore } from './LaadMoreBtn.styled';

const LoadMoreBtn = () => {
    const currentPage = useSelector(select.currentPage)
    const totalPages = useSelector(select.totalPages)
    const dispatch = useDispatch()

    const handleLoadMore = () => {
        dispatch(incrementPage())
    }

    useEffect(() => {
        if (currentPage === 1) return
        dispatch(getUsers(currentPage))   // Load new users when the page is incremented
    }, [currentPage, dispatch])


    return (
        <>
            {currentPage < totalPages && <CustomLoadMore onClick={handleLoadMore}>Show more</CustomLoadMore>}
        </>
    )
}

export default LoadMoreBtn