import { connect } from 'react-redux'
import { getFieldChanges } from '../../store/actions'

const Checkbox = (props) => {
  const { field_id, field_label, field_value , getFieldChanges} = props
  return (
    <div className='mb-3 form-check'>
      <input
        type='checkbox'
        className='form-check-input'
        id='exampleCheck1'
        checked={field_value}
        onChange={(event) => getFieldChanges(field_id, event)}
      />
      <label className='form-check-label' htmlFor='exampleCheck1'>
        {field_label}
      </label>
    </div>
  )
}

const mapDispatchToProps = {
  getFieldChanges,
}
export default connect(null, mapDispatchToProps)(Checkbox)
