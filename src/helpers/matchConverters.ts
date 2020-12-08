export const statusConverter = (oldStatus: string): string => {
  switch (oldStatus) {
    case 'IN_PLAY':
      return 'Live'
    default:
      return oldStatus
  }
}
