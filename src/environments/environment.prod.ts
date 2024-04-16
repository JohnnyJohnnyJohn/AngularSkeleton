const baseUrl = `${window.location.origin}`;

export const environment = {
  production: true,
  baseUrl,
  apiUrl: baseUrl + '/api/v1'
};
