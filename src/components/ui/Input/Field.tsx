import type { ReactNode } from 'react'
import styles from './Field.module.less'

interface FieldProps {
  /** Must match the control's id for the label association. */
  id: string
  label: string
  /** Optional right-aligned slot in the label row (e.g. "Forgot password?"). */
  labelAction?: ReactNode
  error?: string
  children: ReactNode
}

/**
 * Shared label-row + error shell for form controls. Keeps Input and
 * PasswordInput from duplicating the same markup.
 */
const Field = ({ id, label, labelAction, error, children }: FieldProps) => (
  <div className={styles.field}>
    <div className={styles.labelRow}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {labelAction}
    </div>
    {children}
    {error ? (
      <span className={styles.error} role="alert">
        {error}
      </span>
    ) : null}
  </div>
)

export default Field
