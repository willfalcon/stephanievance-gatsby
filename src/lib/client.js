import sanityClient from '@sanity/client';
import cloudinary from 'cloudinary-core';

const client = sanityClient({
  projectId: 'ub50splo',
  dataset: 'dev',
  useCdn: false,
});

const cl = new cloudinary.Cloudinary({
  cloud_name: 'creative-distillery1',
  secure: true,
});

export { cl };
export default client;
