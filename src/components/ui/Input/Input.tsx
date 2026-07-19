import { forwardRef, memo } from 'react'
import type { InputHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import Field from './Field'
import styles from './Input.module.less'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
  error?: string
  labelAction?: ReactNode
}

/** Labelled text input. Forwards its ref so react-hook-form can register it. */
const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(
    ({ id, label, error, labelAction, className, ...rest }, ref) => (
      <Field id={id} label={label} error={error} labelAction={labelAction}>
        <input
          id={id}
          ref={ref}
          className={clsx(styles.input, className)}
          aria-invalid={error ? true : undefined}
          {...rest}
        />
      </Field>
    ),
  ),
)

Input.displayName = 'Input'

export default Input
