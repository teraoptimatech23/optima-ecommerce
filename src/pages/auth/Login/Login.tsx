import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import AuthLayout from '../AuthLayout/AuthLayout'
import Input from '../../../components/ui/Input/Input'
import PasswordInput from '../../../components/ui/Input/PasswordInput'
import PrimaryButton from '../../../components/ui/Button/PrimaryButton'
import { loginSchema, type LoginFormValues } from '../../../schemas/auth'
import { login } from '../../../services/auth.service'
import { useAuthStore } from '../../../store/auth.store'
import styles from './Login.module.less'

const Login = () => {
  const navigate = useNavigate()
  const setAuthenticated = useAuthStore((state) => state.login)
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched',
    defaultValues: { identifier: '', password: '' },
  })

  const onSubmit = async ({ identifier, password }: LoginFormValues) => {
    const result = await login(identifier, password)

    if (result.success && result.user) {
      setAuthenticated(result.user)
      navigate('/home', { replace: true })
      return
    }

    setError('root', {
      message: result.message ?? 'Nomor telepon atau password salah.',
    })
  }

  return (
    <AuthLayout
      title="Welcome back!"
      subtitle="Please login to your account"
      footerText="Don't have an account?"
      footerLinkLabel="Register"
      footerLinkTo="/register"
    >
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Input
          id="identifier"
          label="Email or Phone"
          placeholder="Enter your email or phone number"
          autoComplete="username"
          inputMode="text"
          aria-label="Email or phone number"
          error={errors.identifier?.message}
          {...register('identifier')}
        />

        <PasswordInput
          id="password"
          label="Password"
          placeholder="Enter your password"
          autoComplete="current-password"
          aria-label="Password"
          error={errors.password?.message}
          labelAction={
            <a href="#" className={styles.forgot}>
              Forgot password?
            </a>
          }
          {...register('password')}
        />

        {errors.root?.message ? (
          <p className={styles.formError} role="alert">
            {errors.root.message}
          </p>
        ) : null}

        <PrimaryButton type="submit" aria-label="Login" loading={isSubmitting}>
          Login
        </PrimaryButton>
      </form>
    </AuthLayout>
  )
}

export default Login
