import { forwardRef, memo, useCallback, useState } from 'react'
import type { InputHTMLAttributes, ReactNode } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import clsx from 'clsx'
import Field from './Field'
import styles from './PasswordInput.module.less'

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
  error?: string
  labelAction?: ReactNode
}

/**
 * Password field with a keyboard-accessible show/hide toggle.
 * Forwards its ref so react-hook-form can register it.
 */
const PasswordInput = memo(
  forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ id, label, error, labelAction, className, ...rest }, ref) => {
      const [visible, setVisible] = useState(false)
      const toggle = useCallback(() => setVisible((prev) => !prev), [])

      return (
        <Field id={id} label={label} error={error} labelAction={labelAction}>
          <div className={styles.wrap}>
            <input
              id={id}
              ref={ref}
              type={visible ? 'text' : 'password'}
              className={clsx(styles.input, className)}
              aria-invalid={error ? true : undefined}
              {...rest}
            />
            <button
              type="button"
              className={styles.toggle}
              onClick={toggle}
              aria-label={visible ? 'Hide password' : 'Show password'}
              aria-pressed={visible}
            >
              {visible ? (
                <Eye size={20} strokeWidth={2} />
              ) : (
                <EyeOff size={20} strokeWidth={2} />
              )}
            </button>
          </div>
        </Field>
      )
    },
  ),
)

PasswordInput.displayName = 'PasswordInput'

export default PasswordInput
