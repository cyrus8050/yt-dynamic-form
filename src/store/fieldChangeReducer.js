import { CHANGE_STATE } from './types'
import formJSON from '../formElement.json'

const initialState = {
  element: formJSON[0],
}
export const fieldChangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATE:
      let element = { ...state.element }
      let { id, event } = action.payload
      element.fields.forEach((field) => {
        const { field_type, field_id } = field
        if (id === field_id) {
          switch (field_type) {
            case 'checkbox':
              field['field_value'] = event.target.checked
              break

            default:
              field['field_value'] = event.target.value
              break
          }
        }
      })
      return { ...state, element }
    default:
      return state
  }
}
