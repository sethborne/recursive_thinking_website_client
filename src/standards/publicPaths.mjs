import { rootBucketName } from '../functions/funcs_s3.mjs';

export const PUBLIC_S3_URL = `https://s3-us-west-2.amazonaws.com/${rootBucketName}/`;

export const PATH_FOR_IMG = process.env.PUBLIC_URL + '/img';
export const PATH_FOR_IMG_AVATARS = `${PATH_FOR_IMG}/avatars`;
