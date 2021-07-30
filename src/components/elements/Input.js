import { connect } from 'react-redux'
import { getFieldChanges } from '../../store/actions'

const Input = (props) => {
    const { field_id, field_label, field_placeholder, field_value ,getFieldChanges} = props
  return (
    <div className='mb-3'>
      <label htmlFor='exampleInputEmail1' className='form-label'>
        {field_label}
      </label>
      <input
        type='text'
        className='form-control'
        id='exampleInputEmail1'
        aria-describedby='emailHelp'
        placeholder={field_placeholder ? field_placeholder : ''}
        value={field_value}
        onChange={(event) => getFieldChanges(field_id, event)}
      />
      <div id='emailHelp' className='form-text'>
        We'll never share your email with anyone else.
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  getFieldChanges,
}
export default connect(null, mapDispatchToProps)(Input)
