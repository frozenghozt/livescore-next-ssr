import championship from '../assets/championship.webp'
import champions from '../assets/champions.webp'
import serieabr from '../assets/serieabr.webp'
import serieait from '../assets/seriea.webp'
import laliga from '../assets/laliga.webp'
import bundesliga from '../assets/bundesliga.webp'
import eredivisie from '../assets/eredivisie.webp'
import premiere from '../assets/premiere.webp'
import ligue1 from '../assets/ligue1.webp'

export const imageProvider = (league: string): string => {
  switch (league) {
    case 'Championship':
      return championship
    case 'UEFA Champions League':
      return champions
    case 'Série A':
      return serieabr
    case 'Serie A':
      return serieait
    case 'Primera Division':
      return laliga
    case 'Bundesliga':
      return bundesliga
    case 'Eredivisie':
      return eredivisie
    case 'Premier League':
      return premiere
    case 'Ligue 1':
      return ligue1
    default:
      return 'default'
  }
}
