/* eslint-env jest */

const mockAxios = jest.fn(() => Promise.resolve({ data: {} }));
mockAxios.defaults = jest.fn(() => Promise.resolve({ timeout: 60000 }));
mockAxios.CancelToken = { source: jest.fn() };
mockAxios.CancelToken.source.mockReturnValue({ cancel: jest.fn() });
export default mockAxios;
