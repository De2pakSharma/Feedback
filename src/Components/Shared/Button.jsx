import PropTypes  from 'prop-types'
function Button({ Children, version,type,isDisabled }) {

  return (  <button type = {type} disabled={isDisabled} className={`btn btn-${version}`}>
    {Children}Send </button>
  )
  }
  Button.defaultProps={
    version:'primary',
    type:'button',
    isDisabled: false
  }
 Button.propTypes ={
    children:PropTypes.node.isRequired,
    version:PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
 }
export default Button