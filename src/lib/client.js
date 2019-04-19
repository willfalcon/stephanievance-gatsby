import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'ub50splo',
  dataset: 'dev',
  useCdn: false,
});

export default client;
