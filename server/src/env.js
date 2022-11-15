export const dbOptions = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  name: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
}

export const AWS_S3_CONNECTION_OPTIONS = {
  accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  region: process.env.AWS_S3_REGION
}

export const esAPI = {
  host: 'elastic-search',
  port: process.env.ES_PORT
}

export const {
  NODE_ENV,
  APP_PORT,
  PLATFORM_NAME,
  AWS_S3_BUCKET_NAME,
  GMAIL_USER,
  GMAIL_PASSWORD,
  GOOGLE_MAPS_API_KEY,
  TEST_EMAIL_RECIEVER
} = process.env

export const socketIoOptions = {
  path: '/sockets',
  transports: ['websocket', 'polling'],
  allowEIO3: true,
}

export const limiterOptions = {
  windowMs: 15 * 60 * 1000,
  max: 100
}

export const corsOptions = {
  origin: '*',
  methods: ['GET', 'PATCH', 'POST', 'PUT', 'OPTIONS', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin'],
  optionsSuccessStatus: 200,
  preflightContinue: true,
  credentials: true
}

export const minioClientOptions = {
  endPoint: 'minio',
  port: process.env.MINIO_PORT,
  useSSL: false,
  accessKey: 'minio',
  secretKey: 'minio123'
}
