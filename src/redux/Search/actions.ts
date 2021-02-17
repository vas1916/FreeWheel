export const actionTypes = {
  LOAD_DATA: "LOAD_DATA_Search",
  LOAD_DATA_SUCCESS: "LOAD_DATA_SUCCESS_Search",
  LOAD_DATA_FAILURE: "LOAD_DATA_FAILURE_Search"
};

export function loadData(search:string) {

  return {
    type: actionTypes.LOAD_DATA,
    payload: search
  };
}

export function loadDataSuccess(data: any) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    payload: {
      data: data
    }
  };
}

export function loadDataFailure(error: any) {
  return {
    type: actionTypes.LOAD_DATA_FAILURE,
    payload: {
      error: error
    }
  };
}
