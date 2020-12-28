import {
  CONFIG,
  APIURLs,
  getMockJsonFileName,
} from '../../../config';
import genericFetch from '../../../utility/genericFetch';

export function getCategoryList(data) {
  const options = {};
  options.method = 'get';
  const urlName = APIURLs.category.categoryList;
  let url = `${CONFIG.baseURL + urlName}`;
  if (CONFIG.MOCK_API) {
    options.method = 'GET';
    url = getMockJsonFileName(urlName);
    options.body = null;
  }
  return genericFetch(url, options, undefined, false);
}

export function createCategoryApi(data) {
  const options = {};
  options.method = 'post';
  const urlName = APIURLs.category.addCategory;
  let url = `${CONFIG.baseURL + urlName}`;
  options.body = {
    name: data.data.name,
  }
  if (CONFIG.MOCK_API) {
    options.method = 'GET';
    url = getMockJsonFileName(urlName);
    options.body = null;
  }
  return genericFetch(url, options, undefined, false);
}

export function updateCategoryApi(data) {
  const options = {};
  options.method = 'post';
  const urlName = APIURLs.category.updatecategory;
  let url = `${CONFIG.baseURL + urlName}`;
  options.body = {
    name: data.data.name,
    cat_id: data.data.cat_id
  }
  if (CONFIG.MOCK_API) {
    options.method = 'GET';
    url = getMockJsonFileName(urlName);
    options.body = null;
  }
  return genericFetch(url, options, undefined, false);
}

export function deleteCategory(data) {
  const options = {};
  options.method = 'delete';
  const urlName = APIURLs.category.deleteCategory;
  let url = `${CONFIG.baseURL + urlName}`;
  options.body = {
    cat_id: data.data.cat_id
  }
  if (CONFIG.MOCK_API) {
    options.method = 'GET';
    url = getMockJsonFileName(urlName);
    options.body = null;
  }
  return genericFetch(url, options, undefined, false);
}

export function createSubCategory(data) {
  const options = {};
  options.method = 'post';
  const urlName = APIURLs.category.addSubCategory;
  let url = `${CONFIG.baseURL + urlName}`;
  options.body = {
    cat_id: data.data.cat_id,
    name: data.data.name
  }
  if (CONFIG.MOCK_API) {
    options.method = 'GET';
    url = getMockJsonFileName(urlName);
    options.body = null;
  }
  return genericFetch(url, options, undefined, false);
}

export function updateSubCategory(data) {
  const options = {};
  options.method = 'post';
  const urlName = APIURLs.category.updateSubCategory;
  let url = `${CONFIG.baseURL + urlName}`;
  options.body = {
    sub_cat_id: data.data.sub_cat_id,
    name: data.data.name
  }
  if (CONFIG.MOCK_API) {
    options.method = 'GET';
    url = getMockJsonFileName(urlName);
    options.body = null;
  }
  return genericFetch(url, options, undefined, false);
}

export function deleteSubCategory(data) {
  const options = {};
  options.method = 'delete';
  const urlName = APIURLs.category.deleteSubCategory;
  let url = `${CONFIG.baseURL + urlName}`;
  options.body = {
    sub_cat_id: data.data.sub_cat_id
  }
  if (CONFIG.MOCK_API) {
    options.method = 'GET';
    url = getMockJsonFileName(urlName);
    options.body = null;
  }
  return genericFetch(url, options, undefined, false);
}

export function loadDefaultValues(data) {
  const options = {};
  options.method = 'post';
  const urlName = APIURLs.category.loadDefaulltValues;
  let url = `${CONFIG.baseURL + urlName}`;
  if (CONFIG.MOCK_API) {
    options.method = 'GET';
    url = getMockJsonFileName(urlName);
    options.body = null;
  }
  return genericFetch(url, options, undefined, false);
}

