import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Call a API and data return', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    getData('https://example.com')
      .then((response) => {
        expect(response.data).toEqual('12345');
      });

    expect(fetch.mock.calls[0][0]).toEqual('https://example.com');
  });
});
