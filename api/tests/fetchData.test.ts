import fetchMock from 'jest-fetch-mock';
import mockResponse from './mockResponse.json';
import { getMovements } from '@api/resolvers';
import { API_URL } from '@constants/EnvVars';
describe('fetchData', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('fetches data from the API', async () => {
    const mock = mockResponse;
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const result = await getMovements();

    expect(fetchMock).toHaveBeenCalledWith(API_URL);
    expect(result[0]).toEqual(mock);
  });
});
