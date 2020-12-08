import { RESTDataSource } from 'apollo-datasource-rest'

export class ExternalApi extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://api.football-data.org/'
  }

  async getMatches<T>(): Promise<T> {
    const data = await this.get('v2/matches', undefined, {
      headers: { 'X-Auth-Token': '1b39af646ba543d48677355695a6f3b0' }
    })
    return data
  }
}
