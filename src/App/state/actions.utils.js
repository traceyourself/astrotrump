import { removeSpaces } from '../../utils.rendering'

export const convertBirthDate = (birthDate) => {
  const monthMap = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  const [month, day, year] = birthDate.split('/')
  return `${monthMap[month - 1]} ${Number(day)} ${year}`
}

export const convertBirthPlace = removeSpaces
export const setGender = (gender) => (gender === 'male') ? 'Male' : 'Female'
export const formatName = (fullName) => {
  const [firstName, lastName] = fullName.split(' ')
  return `${firstName}/${lastName}`
}

/**
 * string, object -> string
 */
export const buildCreateIndividualQueryParams = (sessionId, {fullName, birthday, location, gender}) => ({
  SessionId: sessionId,
  Name: formatName(fullName),
  Gender: setGender(gender),
  BirthDate: convertBirthDate(birthday),
  BirthPlace: convertBirthPlace(location)
})