import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  client: {
    NEXT_PUBLIC_SPOTIFY_CLIENT_ID: z.string(),
    NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET: z.string(),
    NEXT_PUBLIC_SPOTIFY_AUTH_URL: z.string().url(),
    NEXT_PUBLIC_SPOTIFY_BASE_URL: z.string().url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_SPOTIFY_CLIENT_ID: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
    NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET:
      process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
    NEXT_PUBLIC_SPOTIFY_AUTH_URL: process.env.NEXT_PUBLIC_SPOTIFY_AUTH_URL,
    NEXT_PUBLIC_SPOTIFY_BASE_URL: process.env.NEXT_PUBLIC_SPOTIFY_BASE_URL,
  },
})
