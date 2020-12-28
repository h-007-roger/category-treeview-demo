/* eslint-env jest */

import mockAxios from "../../../__mocks__/axios";
import * as api from "./api";
import categoryListApiResoponse from "../../../../public/mock/categoryListApiResponse.json";


import {
  CONFIG,
} from "../../../config";

describe("api-calls", () => {
  beforeEach(() => {
    CONFIG.MOCK_API = true;
  });

  afterAll(() => {
    CONFIG.MOCK_API = false;
    mockAxios.mockReset();
  });

  test("fetch category list api call", async () => {
    mockAxios.mockImplementationOnce(() => Promise.resolve(categoryListApiResoponse));
    const response = expect(await api.getCategoryList());
    response.toEqual(categoryListApiResoponse.data);
  });

});
