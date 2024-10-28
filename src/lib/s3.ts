import { S3Client } from "@aws-sdk/client-s3"


const s3Client = new S3Client({
    region: process.env.AWS_BUCKET_REGION as string,
    credentials: {
        accessKeyId: process.env.AWS_PUBLIC_KEY as string,
        secretAccessKey: process.env.AWS_SECRET_KEY as string
    }
})

export default s3Client;