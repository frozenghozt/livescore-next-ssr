import Prismic from 'prismic-javascript'

// env
export const apiEndpoint = 'https://livescore.cdn.prismic.io/api/v2'
export const accessToken =
  'MC5YOWI4bVJJQUFDa0EzZlZM.77-9aXYiDEsm77-9OO-_ve-_ve-_ve-_ve-_ve-_vTDvv73vv71H77-977-9EO-_vUTvv701HVDvv73vv71H77-9'

// Client method to query documents from the Prismic repo
export const ClientPrismic = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {}
  return {
    ...reqOption,
    ...accessTokenOption
  }
}
