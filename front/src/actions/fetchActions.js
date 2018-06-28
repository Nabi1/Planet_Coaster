export function fetchDatas() {
    return dispatch => {
        dispatch(fetchProductsBegin());
        return fetch("https://rawgit.com/Nabi1/Planet_Coaster/createJson/front/src/data.json")
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
            dispatch(fetchProductsSuccess(json));
            return json;
            })
            .catch(error => dispatch(fetchProductsError(error)));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
if (!response.ok) {
    throw Error(response.statusText);
}
return response;
}

export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = datas => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: { datas }
});

export const fetchProductsError = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: { error }
});