export default ({ env }) => ({
  upload: env('UPLOAD_PROVIDER', '') === 's3'
    ? {
        config: {
          provider: 'aws-s3',
          providerOptions: {
            baseUrl: env('S3_BASE_URL', undefined),
            s3Options: {
              accessKeyId: env('S3_ACCESS_KEY'),
              secretAccessKey: env('S3_SECRET'),
              region: env('S3_REGION'),
              params: {
                Bucket: env('S3_BUCKET'),
              },
            },
          },
        },
      }
    : {},
});
