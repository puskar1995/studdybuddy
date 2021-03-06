// enum constants
export const DISLIKED = 'DISLIKED'
export const CONFIRMED = 'CONFIRMED'
export const LIKED = 'LIKED'
export const NOT_DECIDED = 'NOT_DECIDED'

// action constants
export const LEAVE_GROUP = 'LEAVE_GROUP'
export const CONNECT_WITH_USER = 'CONNECT_WITH_USER'
export const DISLIKED_USER = 'DISLIKED_USER'
export const ADDED_CLASS = 'ADDED_CLASS'
export const JOIN_GROUP = 'JOIN_GROUP'
export const BADGE_OFF = 'BADGE_OFF'

// user profile pics
export const fullPicPath = image => {
  const base_url = "https://react.semantic-ui.com/images/avatar/large/"
  return base_url + image
}
