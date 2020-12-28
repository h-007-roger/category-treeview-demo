import { call, takeEvery, put } from 'redux-saga/effects';
import * as actions from '../actions/actions';
import * as loaderActions from '../../App/actions/actions';
import * as api from '../api/api';
import {
  ErrorMessages,
} from '../../../constants/globalConstants';

export function* getCategoryListApi(data) {
  yield put({ type: loaderActions.SHOW_LOADER });
  try {
    yield put(actions.CATEGORY_LIST_API_CALL.request());
    const mainResponse = yield call(
      api.getCategoryList,
      data,
    );
    let objResponse = mainResponse;
    let dataResult = objResponse.data.map(obj => {
     return {
       ...obj,
      showSubCategory: false
     }
    })
    if (Object.keys(objResponse.errors).length === 0) {
      objResponse = {
        data: dataResult,
        // ...objResponse,
        message: "Successfully fetched data",
        isSuccess: true,
      };

      yield put(actions.CATEGORY_LIST_API_CALL.success(objResponse));
      // if (data.data.listCallBack) {
      //   data.data.listCallBack(objResponse);
      // }
    } else {
      objResponse = {
        ...objResponse,
        message: objResponse.errors ? mainResponse.errors.message
          : ErrorMessages.API_GENERAL_MESSAGE.SOMETHING_WENT_WRONG,
        isSuccess: false,
      };
      yield put(actions.CATEGORY_LIST_API_CALL.failure(objResponse));
      // if (data.data.listCallBack) {
      //   data.data.listCallBack(objResponse);
      // }
    }
    yield put({ type: loaderActions.HIDE_LOADER });
    return objResponse;
  } catch (err) {
    const error = {
      ...err,
      message: err.errorMessage || ErrorMessages.API_GENERAL_MESSAGE.SOMETHING_WENT_WRONG,
      isSuccess: false,
    };
    // if (data.data.listCallBack) {
    //   data.data.listCallBack(error);
    // }
    // yield call(handleError, err);
    yield put(actions.CATEGORY_LIST_API_CALL.failure(error));
    yield put({ type: loaderActions.HIDE_LOADER });
    return error;
  }
}

export function* createCategoryApi(data) {
  try {
    yield put(actions.CREATE_CATEGORY_API_CALL.request());
    const mainResponse = yield call(
      api.createCategoryApi,
      data,
    );
    let objResponse = mainResponse;
    console.log(mainResponse)
    if (Object.keys(objResponse.errors).length === 0) {
      objResponse = {
        ...objResponse,
        message: "Category created successfully.",
        isSuccess: true,
      };

      yield put(actions.CREATE_CATEGORY_API_CALL.success(objResponse));
      if (data.data.createCategoryCallBack) {
        data.data.createCategoryCallBack(objResponse);
      }
    } else {
      objResponse = {
        ...objResponse,
        message: objResponse.errors ? mainResponse.errors.message
          : ErrorMessages.API_GENERAL_MESSAGE.SOMETHING_WENT_WRONG,
        isSuccess: false,
      };
      yield put(actions.CREATE_CATEGORY_API_CALL.failure(objResponse));
      if (data.data.createCategoryCallBack) {
        data.data.createCategoryCallBack(objResponse);
      }
    }
    return objResponse;
  } catch (err) {
    const error = {
      ...err,
      message: err.errorMessage || ErrorMessages.API_GENERAL_MESSAGE.SOMETHING_WENT_WRONG,
      isSuccess: false,
    };
    if (data.data.createCategoryCallBack) {
      data.data.createCategoryCallBack(error);
    }
    yield put(actions.CREATE_CATEGORY_API_CALL.failure(error));
    return error;
  }
}

export function* updateCategoryApi(data) {
  try {
    yield put(actions.UPDATE_CATEGORY_API_CALL.request());
    const mainResponse = yield call(
      api.updateCategoryApi,
      data,
    );
    let objResponse = mainResponse;
    console.log(mainResponse)
    if (Object.keys(objResponse.errors).length === 0) {
      objResponse = {
        ...objResponse,
        message: "Category updated successfully.",
        isSuccess: true,
      };

      yield put(actions.UPDATE_CATEGORY_API_CALL.success(objResponse));
      if (data.data.updateCategoryCallBack) {
        data.data.updateCategoryCallBack(objResponse);
      }
    } else {
      objResponse = {
        ...objResponse,
        message: objResponse.errors ? mainResponse.errors.message
          : ErrorMessages.API_GENERAL_MESSAGE.SOMETHING_WENT_WRONG,
        isSuccess: false,
      };
      yield put(actions.UPDATE_CATEGORY_API_CALL.failure(objResponse));
      if (data.data.updateCategoryCallBack) {
        data.data.updateCategoryCallBack(objResponse);
      }
    }
    return objResponse;
  } catch (err) {
    const error = {
      ...err,
      message: err.errorMessage || ErrorMessages.API_GENERAL_MESSAGE.SOMETHING_WENT_WRONG,
      isSuccess: false,
    };
    if (data.data.updateCategoryCallBack) {
      data.data.updateCategoryCallBack(error);
    }
    yield put(actions.UPDATE_CATEGORY_API_CALL.failure(error));
    return error;
  }
}

export function* deleteCategoryApi(data) {
  try {
    yield put(actions.DELETE_CATEGORY_API_CALL.request());
    const mainResponse = yield call(
      api.deleteCategory,
      data,
    );
    let objResponse = mainResponse;
    console.log(mainResponse)
    if (Object.keys(objResponse.errors).length === 0) {
      objResponse = {
        ...objResponse,
        message: "Category deleted successfully.",
        isSuccess: true,
      };

      yield put(actions.DELETE_CATEGORY_API_CALL.success(objResponse));
      if (data.data.deleteCategoryCallBack) {
        data.data.deleteCategoryCallBack(objResponse);
      }
    } else {
      objResponse = {
        ...objResponse,
        message: objResponse.errors ? mainResponse.errors.message
          : ErrorMessages.API_GENERAL_MESSAGE.SOMETHING_WENT_WRONG,
        isSuccess: false,
      };
      yield put(actions.DELETE_CATEGORY_API_CALL.failure(objResponse));
      if (data.data.deleteCategoryCallBack) {
        data.data.deleteCategoryCallBack(objResponse);
      }
    }
    return objResponse;
  } catch (err) {
    const error = {
      ...err,
      message: err.errorMessage || ErrorMessages.API_GENERAL_MESSAGE.SOMETHING_WENT_WRONG,
      isSuccess: false,
    };
    if (data.data.deleteCategoryCallBack) {
      data.data.deleteCategoryCallBack(error);
    }
    yield put(actions.DELETE_CATEGORY_API_CALL.failure(error));
    return error;
  }
}

export function* createSubCategoryApi(data) {
  try {
    yield put(actions.CREATE_SUB_CATEGORY_API_CALL.request());
    const mainResponse = yield call(
      api.createSubCategory,
      data,
    );
    let objResponse = mainResponse;
    console.log(mainResponse)
    if (Object.keys(objResponse.errors).length === 0) {
      objResponse = {
        ...objResponse,
        message: "Sub Category created successfully.",
        isSuccess: true,
      };

      yield put(actions.CREATE_SUB_CATEGORY_API_CALL.success(objResponse));
      if (data.data.createSubCategoryCallBack) {
        data.data.createSubCategoryCallBack(objResponse);
      }
    } else {
      objResponse = {
        ...objResponse,
        message: objResponse.errors ? mainResponse.errors.message
          : ErrorMessages.API_GENERAL_MESSAGE.SOMETHING_WENT_WRONG,
        isSuccess: false,
      };
      yield put(actions.CREATE_SUB_CATEGORY_API_CALL.failure(objResponse));
      if (data.data.createSubCategoryCallBack) {
        data.data.createSubCategoryCallBack(objResponse);
      }
    }
    return objResponse;
  } catch (err) {
    const error = {
      ...err,
      message: err.errorMessage || ErrorMessages.API_GENERAL_MESSAGE.SOMETHING_WENT_WRONG,
      isSuccess: false,
    };
    if (data.data.createSubCategoryCallBack) {
      data.data.createSubCategoryCallBack(error);
    }
    yield put(actions.CREATE_SUB_CATEGORY_API_CALL.failure(error));
    return error;
  }
}

export function* updateSubCategoryApi(data) {
  try {
    yield put(actions.UPDATE_SUB_CATEGORY_API_CALL.request());
    const mainResponse = yield call(
      api.updateSubCategory,
      data,
    );
    let objResponse = mainResponse;
    console.log(mainResponse)
    if (Object.keys(objResponse.errors).length === 0) {
      objResponse = {
        ...objResponse,
        message: "Sub Category updated successfully.",
        isSuccess: true,
      };

      yield put(actions.UPDATE_SUB_CATEGORY_API_CALL.success(objResponse));
      if (data.data.updateSubCategoryCallBack) {
        data.data.updateSubCategoryCallBack(objResponse);
      }
    } else {
      objResponse = {
        ...objResponse,
        message: objResponse.errors ? mainResponse.errors.message
          : ErrorMessages.API_GENERAL_MESSAGE.SOMETHING_WENT_WRONG,
        isSuccess: false,
      };
      yield put(actions.UPDATE_SUB_CATEGORY_API_CALL.failure(objResponse));
      if (data.data.updateSubCategoryCallBack) {
        data.data.updateSubCategoryCallBack(objResponse);
      }
    }
    return objResponse;
  } catch (err) {
    const error = {
      ...err,
      message: err.errorMessage || ErrorMessages.API_GENERAL_MESSAGE.SOMETHING_WENT_WRONG,
      isSuccess: false,
    };
    if (data.data.updateSubCategoryCallBack) {
      data.data.updateSubCategoryCallBack(error);
    }
    yield put(actions.UPDATE_SUB_CATEGORY_API_CALL.failure(error));
    return error;
  }
}

export function* deleteSubCategoryApi(data) {
  try {
    yield put(actions.DELETE_SUB_CATEGORY_API_CALL.request());
    const mainResponse = yield call(
      api.deleteSubCategory,
      data,
    );
    let objResponse = mainResponse;
    console.log(mainResponse)
    if (Object.keys(objResponse.errors).length === 0) {
      objResponse = {
        ...objResponse,
        message: "Sub Category deleted successfully.",
        isSuccess: true,
      };

      yield put(actions.DELETE_SUB_CATEGORY_API_CALL.success(objResponse));
      if (data.data.deleteSubCategoryCallBack) {
        data.data.deleteSubCategoryCallBack(objResponse);
      }
    } else {
      objResponse = {
        ...objResponse,
        message: objResponse.errors ? mainResponse.errors.message
          : ErrorMessages.API_GENERAL_MESSAGE.SOMETHING_WENT_WRONG,
        isSuccess: false,
      };
      yield put(actions.DELETE_SUB_CATEGORY_API_CALL.failure(objResponse));
      if (data.data.deleteSubCategoryCallBack) {
        data.data.deleteSubCategoryCallBack(objResponse);
      }
    }
    return objResponse;
  } catch (err) {
    const error = {
      ...err,
      message: err.errorMessage || ErrorMessages.API_GENERAL_MESSAGE.SOMETHING_WENT_WRONG,
      isSuccess: false,
    };
    if (data.data.deleteSubCategoryCallBack) {
      data.data.deleteSubCategoryCallBack(error);
    }
    yield put(actions.DELETE_SUB_CATEGORY_API_CALL.failure(error));
    return error;
  }
}

export function* loadDefaultCategoryApi(data) {
  yield put({ type: loaderActions.SHOW_LOADER });
  try {
    yield put(actions.DEFAULT_CATEGORY_LIST_API_CALL.request());
    const mainResponse = yield call(
      api.loadDefaultValues,
      data,
    );
    let objResponse = mainResponse;
    let dataResult = objResponse.data.map(obj => {
     return {
       ...obj,
      showSubCategory: false
     }
    })
    console.log(mainResponse)
    if (Object.keys(objResponse.errors).length === 0) {
      objResponse = {
        data: dataResult,
        message: "Successfully fetched data",
        isSuccess: true,
      };
      yield put(actions.CATEGORY_LIST_API_CALL.success( JSON.parse(JSON.stringify(objResponse))));
      yield put(actions.DEFAULT_CATEGORY_LIST_API_CALL.success(objResponse));
      
    } else {
      objResponse = {
        ...objResponse,
        message: objResponse.errors ? mainResponse.errors.message
          : ErrorMessages.API_GENERAL_MESSAGE.SOMETHING_WENT_WRONG,
        isSuccess: false,
      };
      yield put(actions.DEFAULT_CATEGORY_LIST_API_CALL.failure(objResponse));
    
    }
    yield put({ type: loaderActions.HIDE_LOADER });
    return objResponse;
  } catch (err) {
    const error = {
      ...err,
      message: err.errorMessage || ErrorMessages.API_GENERAL_MESSAGE.SOMETHING_WENT_WRONG,
      isSuccess: false,
    };
  
    yield put(actions.DEFAULT_CATEGORY_LIST_API_CALL.failure(error));
    yield put({ type: loaderActions.HIDE_LOADER });
    return error;
  }
}

export function* createCategoryWithReloadApi(data){
  yield put({ type: loaderActions.SHOW_LOADER });
  const obj = yield call(createCategoryApi, data);
  if(obj.isSuccess){
    yield call(getCategoryListApi,data);
  }
  yield put({ type: loaderActions.HIDE_LOADER });
}

export function* updateCategoryWithReloadApi(data){
  yield put({ type: loaderActions.SHOW_LOADER });
  const obj = yield call(updateCategoryApi, data);
  if(obj.isSuccess){
    yield call(getCategoryListApi,data);
  }
  yield put({ type: loaderActions.HIDE_LOADER });
}

export function* deleteCategoryWithReloadApi(data){
  yield put({ type: loaderActions.SHOW_LOADER });
  const obj = yield call(deleteCategoryApi, data);
  if(obj.isSuccess){
    yield call(getCategoryListApi,data);
  }
  yield put({ type: loaderActions.HIDE_LOADER });
}

export function* createSubCategoryWithReloadApi(data){
  yield put({ type: loaderActions.SHOW_LOADER });
  const obj = yield call(createSubCategoryApi, data);
  if(obj.isSuccess){
    yield call(getCategoryListApi,data);
  }
  yield put({ type: loaderActions.HIDE_LOADER });
}

export function* hideShowData(data){
  yield put(actions.CATEGORY_LIST_API_CALL.success( JSON.parse(JSON.stringify(data))));
}

export function* updateSubCategoryWithReloadApi(data){
  yield put({ type: loaderActions.SHOW_LOADER });
  const obj = yield call(updateSubCategoryApi, data);
  if(obj.isSuccess){
    yield call(getCategoryListApi,data);
  }
  yield put({ type: loaderActions.HIDE_LOADER });
}

export function* deleteSubCategoryWithReloadApi(data){
  yield put({ type: loaderActions.SHOW_LOADER });
  const obj = yield call(deleteSubCategoryApi, data);
  if(obj.isSuccess){
    yield call(getCategoryListApi,data);
  }
  yield put({ type: loaderActions.HIDE_LOADER });
}

export default function* watchers() {
  yield takeEvery(actions.GET_CATEGORY_LIST_API_CALL, getCategoryListApi);
  yield takeEvery(actions.GET_CREATE_CATEGORY_API_CALL, createCategoryWithReloadApi);
  yield takeEvery(actions.GET_UPDATE_CATEGORY_API_CALL, updateCategoryWithReloadApi);
  yield takeEvery(actions.GET_DELETE_CATEGORY_API_CALL, deleteCategoryWithReloadApi);
  yield takeEvery(actions.GET_CREATE_SUB_CATEGORY_API_CALL, createSubCategoryWithReloadApi);
  yield takeEvery(actions.GET_UPDATE_SUB_CATEGORY_API_CALL, updateSubCategoryWithReloadApi);
  yield takeEvery(actions.GET_DELETE_SUB_CATEGORY_API_CALL, deleteSubCategoryWithReloadApi);
  yield takeEvery(actions.GET_DEFAULT_CATEGORY_LIST_API_CALL, loadDefaultCategoryApi);
  yield takeEvery(actions.GET_HIDE_SHOW_SUB_CATEGORY, hideShowData);
}
