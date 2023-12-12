export const compareSanitizedStrings = (str1: string, str2: string) => {
  if (typeof str1 === 'string' && typeof str2 === 'string') {
    //in case someone changes default userName in state from '' to null
    const sanitizedStr1 = str1.trim().toLowerCase()
    const sanitizedStr2 = str2.trim().toLowerCase()

    return (
      sanitizedStr1.includes(sanitizedStr2) ||
      sanitizedStr2.includes(sanitizedStr1)
    )
  }
  return false
}
