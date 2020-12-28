export const CONFIG = {
  MOCK_API: false,
  MOCK_API_BASE_URL: 'http://localhost:3000/mock/jsons/',
  SUB_DIRECTORY_NAME: '',
  baseURL: "http://localhost:3001/",
  mockURL: '',
};

export const APIURLs = {
  category: {
    categoryList:       'category/getCategoriesList',
    addCategory:        'category/createCategory',
    updatecategory:     'category/updateCategory',
    deleteCategory:     'category/deleteCategory',
    addSubCategory:     'category/createSubCategory',
    updateSubCategory:  'category/updateSubCategory',
    deleteSubCategory:  'category/deleteSubCategory',
    loadDefaulltValues: 'category/defaultEntriesWithTable'
  },
};

export function getMockJsonFileName(url) {
  const jsonPath = CONFIG.MOCK_API_BASE_URL;
  switch (url) {
    case APIURLs.category.categoryList:
      return `${jsonPath}login_response.json`;
    default:
      return '';
  }
}
