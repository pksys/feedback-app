

function Button({ type, isDisabled, version, children }) {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  isDisabled: false,
  version: 'primary'
}

export default Button
