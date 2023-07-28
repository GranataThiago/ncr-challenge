import PropTypes from 'prop-types'
import styles from 'Button.module.css'

export const Button = (props) => {
  return (
    <button className={styles.button} {...props}>
        {props.children}
    </button>
  )
}

Button.propTypes = {
    children: PropTypes.node,
}