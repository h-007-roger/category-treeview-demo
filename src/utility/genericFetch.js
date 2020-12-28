import axios from 'axios';

axios.defaults.timeout = 60000;
const timeout = 30000;

/**
* Checks if a network request came back fine, and throws an error if not
*/
export function validateStatus(status) {
  if ((status >= 200 && status < 300) || status === 403) {
    return true;
  }
  return false;
}

export function addPOSTHeaders(options = {}) {
  return {
    ...options,
    headers: {
      ...options.headers,
      'Content-Type':
        (options.headers && options.headers['Content-Type'])
        || 'application/json; charset=UTF-8',
    },
  };
}

export const rawGenericFetch = (options) => axios(options)
  .then((response) => response.data).catch((err) => {
    const newError = JSON.parse(JSON.stringify(err));
    const error = {
      errorCode: 'apiDown',
      errorMessage: (newError.response && newError.response.data
        && newError.response.data.message)
        || 'Service not reachable. Please check your internet connection.',
    };

    if (newError.code && newError.code === 'ECONNABORTED') {
      error.errorCode = 'timeout';
      error.errorMessage = 'Connection Timeout';
    }
    throw error;
  });

/**
* Requests a URL, returning a promise
*
* @param {string} url The URL we want to request
* @param {object} [options] The options we want to pass to "fetch"
*
* @return {object} The response data
*/
export default function genericFetch(
  url,
  options,
  formData,
  isNeededToAddAuthorisation = true,
) {
  console.log(url);
  const optionsWithHeaders = addPOSTHeaders(options);
  const parsedOptions = optionsWithHeaders;
  parsedOptions.timeout = timeout;


  parsedOptions.url = url;
  parsedOptions.data = parsedOptions.body;
  if (formData) {
    delete parsedOptions.body;
  }

  parsedOptions.validateStatus = validateStatus;
  parsedOptions.onUploadProgress = options.onUploadProgress;
  return rawGenericFetch(parsedOptions);
}

export function genericFetchWithCancel(
  url,
  options,
  formData,
  isCancelable = false,
  isNeededToAddAuthorisation = true,
) {
  const { CancelToken } = axios;
  var source = CancelToken.source();
  if (isCancelable) {
    source.cancel('Operation canceled by the new request.');
    source = CancelToken.source();
    options.cancelToken = source.token;
  }
  const optionsWithHeaders = addPOSTHeaders(options, isNeededToAddAuthorisation);
  const parsedOptions = optionsWithHeaders;
  parsedOptions.timeout = timeout;

  parsedOptions.url = url;
  parsedOptions.data = parsedOptions.body;
  if (formData) {
    delete parsedOptions.body;
  }

  parsedOptions.validateStatus = validateStatus;
  parsedOptions.onUploadProgress = options.onUploadProgress;
  return rawGenericFetch(parsedOptions);
}
