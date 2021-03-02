import { createApi, OrderBy } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.REACT_APP_ACCESS_KEY as string,
});

class PhotoAPI {
  async getPhotos() {
    const data = await unsplash.photos.list({ page: 1, perPage: 10, orderBy: OrderBy.LATEST });
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return data.response!.results;
  }
}

export default new PhotoAPI();
