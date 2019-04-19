import imageUrlBuilder from '@sanity/image-url';

import client from './client';

const builder = imageUrlBuilder(client);

function imageBuilder(source) {
  return builder.image(source);
}

export default imageBuilder;
