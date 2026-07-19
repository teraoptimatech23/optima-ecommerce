import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Logo from '../../../components/ui/Logo/Logo'
import Divider from '../../../components/ui/Divider/Divider'
import SocialButton from '../../../components/ui/SocialButton/SocialButton'
import { GoogleIcon, AppleIcon } from '../../../components/icons/BrandIcons'
import styles from './AuthLayout.module.less'

interface AuthLayoutProps {
  title: string
  subtitle: string
  /** The page's own <form> element. */
  children: ReactNode
  footerText: string
  footerLinkLabel: string
  footerLinkTo: string
}

/**
 * Shared shell for the auth screens (Login, Register): logo, intro copy,
 * social-login row, and footer nav link. Each page supplies its own form.
 */
const AuthLayout = ({
  title,
  subtitle,
  children,
  footerText,
  footerLinkLabel,
  footerLinkTo,
}: AuthLayoutProps) => (
  <motion.main
    className={styles.screen}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2, ease: 'easeOut' }}
  >
    <Logo className={styles.logo} />

    <header className={styles.intro}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </header>

    {children}

    <Divider label="or continue with" className={styles.divider} />

    <div className={styles.socials}>
      <SocialButton
        icon={<GoogleIcon />}
        label="Google"
        aria-label="Continue with Google"
      />
      <SocialButton
        icon={<AppleIcon />}
        label="Apple"
        aria-label="Continue with Apple"
      />
    </div>

    <p className={styles.footer}>
      {footerText}{' '}
      <Link to={footerLinkTo} className={styles.footerLink}>
        {footerLinkLabel}
      </Link>
    </p>
  </motion.main>
)

export default AuthLayout
