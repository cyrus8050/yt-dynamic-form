import { CHANGE_STATE } from '../types'

export const getFieldChanges = (id, event) => {
  console.log(id, event)
  return {
    type: CHANGE_STATE,
    payload: {
      id,
      event,
    },
  }
}
