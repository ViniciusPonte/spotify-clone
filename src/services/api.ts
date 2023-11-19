import { env } from '@/env'

export async function api(path: string, init?: RequestInit) {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        btoa(
          env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID +
            ':' +
            env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
        ),
    },
    body: 'grant_type=client_credentials&code=AQAOQD96LJhUm5Wct8Qtxh3n_tqK_4xskUjP_UacQ3ykQxSGVPcAnRLVrrlK1icHUGl5_3zT9bj-ReY8UzKZWxh7NMBCbaKFEyL5GAVUaiOD1ixHywzj46tp1z1zKngYDh5Y4Zp3Zg0LW6aFqWjnkSufb9Aa5B2NWnK1Gz2nmAURCxkRAWy0liLYSMiTwuItfvWqK8wNTAL9UN4OGpv-uIyvdqwHQYEsIfeCBCb4w-Ro8RB8xRhA3KaYa1oaLXrWKdvWuzOMOQFkiyDpbbNVucXKsCcHXT2Dsyg&redirect_uri=https://developer.spotify.com',
    next: {
      revalidate: false,
    },
  })

  const accessToken = await response.json()

  const baseUrl = env.NEXT_PUBLIC_SPOTIFY_BASE_URL
  const url = new URL(path, baseUrl)

  return fetch(url, {
    ...init,
    headers: {
      Authorization: 'Bearer ' + accessToken.access_token,
    },
  })
}
