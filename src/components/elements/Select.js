import { connect } from 'react-redux'
import { getFieldChanges } from '../../store/actions'

const Select = (props) => {
  const {
    field_id,
    field_label,
    field_placeholder,
    field_value,
    field_options,
    getFieldChanges,
  } = props

  return (
    <>
      <label className='form-label'>{field_label}</label>
      <select
        className='form-select'
        aria-label='Default select example'
        onChange={(event) => getFieldChanges(field_id, event)}
      >
        <option>Open this select menu</option>
        {field_options.length > 0 &&
          field_options.map((option, i) => (
            <option value={option.option_label} key={i}>
              {option.option_label}
            </option>
          ))}
      </select>
    </>
  )
}

const mapDispatchToProps = {
  getFieldChanges,
}
export default connect(null, mapDispatchToProps)(Select)
