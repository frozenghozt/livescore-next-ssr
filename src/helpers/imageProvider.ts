import championship from '../assets/championship.webp'
import champions from '../assets/champions.webp'
import serieabr from '../assets/serieabr.webp'

export const imageProvider = (league: string): string => {
  switch (league) {
    case 'Championship':
      return championship
    case 'UEFA Champions League':
      return champions
    case 'Série A':
      return serieabr
    default:
      return 'default'
  }
}
