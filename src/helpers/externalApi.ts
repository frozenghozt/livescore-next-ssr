import { RESTDataSource } from 'apollo-datasource-rest'

export class ExternalApi extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://api.football-data.org/'
  }

  async getMatches<T>(): Promise<T> {
    const data = await this.get('v2/matches', undefined, {
      headers: { 'X-Auth-Token': process.env.EXTERNAL_API_SECRET }
    })
    return data
  }
}
