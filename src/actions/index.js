import jsonPlaceHolder from '../api/jsonPlaceHolder';

export const fetchPost = () => {
    return async dispatch => {
        const response = await jsonPlaceHolder.get('/posts');
        console.log(response)
    
    dispatch({ type: 'FETCH_POST', payload: response})

    };
};