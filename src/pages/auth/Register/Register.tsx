import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import AuthLayout from '../AuthLayout/AuthLayout'
import Input from '../../../components/ui/Input/Input'
import PasswordInput from '../../../components/ui/Input/PasswordInput'
import PrimaryButton from '../../../components/ui/Button/PrimaryButton'
import { registerSchema, type RegisterFormValues } from '../../../schemas/auth'
import styles from './Register.module.less'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
    defaultValues: { fullName: '', email: '', password: '' },
  })

  // UI only — no authentication logic and no API calls (per TASK-002).
  const onSubmit = () => {}

  return (
    <AuthLayout
      title="Create account"
      subtitle="Join us and start shopping!"
      footerText="Already have an account?"
      footerLinkLabel="Login"
      footerLinkTo="/login"
    >
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Input
          id="fullName"
          label="Full Name"
          placeholder="Enter your full name"
          autoComplete="name"
          inputMode="text"
          aria-label="Full name"
          error={errors.fullName?.message}
          {...register('fullName')}
        />

        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
          inputMode="email"
          aria-label="Email address"
          error={errors.email?.message}
          {...register('email')}
        />

        <PasswordInput
          id="password"
          label="Password"
          placeholder="Create a password"
          autoComplete="new-password"
          aria-label="Password"
          error={errors.password?.message}
          {...register('password')}
        />

        <PrimaryButton
          type="submit"
          aria-label="Register"
          loading={isSubmitting}
        >
          Register
        </PrimaryButton>
      </form>
    </AuthLayout>
  )
}

export default Register
