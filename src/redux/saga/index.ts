import { put } from 'redux-saga/effects'
import { ActionCountries } from '../actions/countriesAction';

async function apiCountries() {
    const request = await fetch('https://restcountries.com/v2/all');
    const json = await request.json();
    return json;
}


function* rootSaga(): any {
    const data = yield apiCountries()
    yield put({
        type: ActionCountries.FETCH,
        payload:data
    })
}

export default rootSaga