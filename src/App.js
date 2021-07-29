import formJSON from './formElement.json'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getFieldChanges } from './store/actions'
import Element from './components/Element'
import { FormContext } from './FormContext'
function App(props) {
  // console.log(props.)
  console.log(props.element)
  const [elements, setElements] = useState(null)
  const [fieldVisibility, setFieldVisibility] = 'A'
  useEffect(() => {
    setElements(formJSON[0])
  }, [])
  const { fields, page_label } = elements ?? {}
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    
          <>
      <div className='App container'>
        <h3>{page_label}</h3>
        <form>
          {fields
            ? fields.map((field, i) => <Element key={i} field={field} />)
            : null}
          <button
            type='submit'
            className='btn btn-primary'
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </form>
        <pre>{JSON.stringify(fields && fields.map(el => el.field_value), null, 2)}</pre>
      </div></>
  )
}
const mapStateToProps = ({ fieldChangeReducer: { element } }) => {
  return {
    element,
  }
}
const mapDispatchToProps = {
  getFieldChanges,
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
