import { creds_s3Uploads } from "../credentials/credentials_s3.mjs";

export const getBucketName = () => {
  // console.log('bucketName: ', bucketName);
  return creds_s3Uploads.s3BucketName;
};

const getBucketRegion = () => {
  return creds_s3Uploads.region;
};

const getBucketIdentityPoolId = () => {
  return creds_s3Uploads.IdentityPoolId;
};

// top level doesn't include user uuid + avatar || resume
export const rootBucketName = getBucketName();
export const bucketRegion = getBucketRegion();
export const identityPoolId = getBucketIdentityPoolId();
