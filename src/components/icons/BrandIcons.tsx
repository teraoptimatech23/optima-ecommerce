// Brand marks as inline SVG. lucide-react ships no brand logos and
// mixing icon libraries is disallowed (docs/UI_GUIDELINES.md), so the
// Google and Apple marks live here as self-contained components.

interface BrandIconProps {
  size?: number
}

export const GoogleIcon = ({ size = 20 }: BrandIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    role="presentation"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    />
    <path
      fill="#FF3D00"
      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
    />
  </svg>
)

export const AppleIcon = ({ size = 20 }: BrandIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    role="presentation"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M17.05 12.04c-.03-2.63 2.15-3.89 2.25-3.95-1.23-1.8-3.14-2.05-3.82-2.08-1.62-.16-3.17.95-3.99.95-.83 0-2.09-.93-3.44-.9-1.77.03-3.4 1.03-4.31 2.61-1.84 3.19-.47 7.9 1.32 10.48.87 1.27 1.91 2.69 3.28 2.64 1.32-.05 1.82-.85 3.41-.85 1.58 0 2.03.85 3.42.82 1.41-.02 2.31-1.29 3.17-2.56.99-1.47 1.4-2.89 1.42-2.96-.03-.01-2.73-1.05-2.76-4.15zM14.54 4.4c.73-.89 1.22-2.11 1.08-3.34-1.05.04-2.32.7-3.07 1.58-.67.78-1.26 2.03-1.1 3.22 1.17.09 2.36-.59 3.09-1.46z" />
  </svg>
)

/** Card-brand wordmark, e.g. next to a masked card number in order history. */
export const VisaIcon = ({ size = 20 }: BrandIconProps) => (
  <svg
    width={size}
    height={size * 0.32}
    viewBox="0 0 48 16"
    role="presentation"
    aria-hidden="true"
    focusable="false"
  >
    <text
      x="0"
      y="13"
      fontFamily="Arial, sans-serif"
      fontSize="16"
      fontWeight="800"
      fontStyle="italic"
      fill="#1434CB"
    >
      VISA
    </text>
  </svg>
)

/** Card-brand mark, e.g. next to a masked card number in order history. */
export const MastercardIcon = ({ size = 20 }: BrandIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    role="presentation"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="9" cy="12" r="7" fill="#EB001B" />
    <circle cx="15" cy="12" r="7" fill="#F79E1B" />
    <path d="M12 6.35a7 7 0 0 0 0 11.3 7 7 0 0 0 0-11.3z" fill="#FF5F00" />
  </svg>
)

/** Social share mark, brand color circle background. */
export const WhatsAppIcon = ({ size = 26 }: BrandIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    role="presentation"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="16" cy="16" r="16" fill="#25D366" />
    <path
      d="M16 7c-4.97 0-9 4.03-9 9 0 1.6.42 3.1 1.16 4.4L7 25l4.75-1.14A8.96 8.96 0 0 0 16 25c4.97 0 9-4.03 9-9s-4.03-9-9-9Zm5.02 12.68c-.21.6-1.23 1.15-1.7 1.2-.44.05-.99.07-1.6-.1-.37-.1-.84-.27-1.45-.53-2.55-1.1-4.22-3.67-4.35-3.84-.13-.17-1.04-1.38-1.04-2.64 0-1.25.66-1.87.9-2.12.23-.25.5-.31.67-.31h.48c.15 0 .36-.06.56.43.21.5.71 1.74.77 1.87.06.13.1.28.02.45-.08.17-.13.28-.25.43-.13.15-.27.34-.38.46-.13.13-.26.27-.11.53.15.26.68 1.12 1.46 1.82 1 .9 1.85 1.18 2.11 1.31.26.13.41.11.56-.07.15-.17.65-.76.82-1.02.17-.26.34-.21.56-.13.23.09 1.45.68 1.7.81.26.13.43.19.49.3.06.11.06.62-.15 1.22Z"
      fill="#fff"
    />
  </svg>
)

/** Social share mark, brand color circle background. */
export const FacebookIcon = ({ size = 26 }: BrandIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    role="presentation"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="16" cy="16" r="16" fill="#1877F2" />
    <path
      d="M20.2 16.5h-2.9V25h-3.5v-8.5h-2v-3h2v-2.2c0-2.15 1.02-3.8 3.9-3.8h2.65v3h-1.85c-.5 0-1 .3-1 1.05v1.95h2.9l-.2 3Z"
      fill="#fff"
    />
  </svg>
)

/** Social share mark, official gradient circle background. */
export const InstagramIcon = ({ size = 26 }: BrandIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    role="presentation"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <radialGradient id="instagramGradient" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#FED576" />
        <stop offset="26%" stopColor="#F47133" />
        <stop offset="61%" stopColor="#BC3081" />
        <stop offset="100%" stopColor="#4C63D2" />
      </radialGradient>
    </defs>
    <circle cx="16" cy="16" r="16" fill="url(#instagramGradient)" />
    <rect
      x="9.5"
      y="9.5"
      width="13"
      height="13"
      rx="3.8"
      fill="none"
      stroke="#fff"
      strokeWidth="1.6"
    />
    <circle cx="16" cy="16" r="3.4" fill="none" stroke="#fff" strokeWidth="1.6" />
    <circle cx="20.3" cy="11.7" r="0.9" fill="#fff" />
  </svg>
)

/** Social share mark, brand color circle background. */
export const TelegramIcon = ({ size = 26 }: BrandIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    role="presentation"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="16" cy="16" r="16" fill="#26A5E4" />
    <path
      d="M22.9 10.3 20.7 22c-.17.75-.6.93-1.22.58l-3.38-2.5-1.63 1.57c-.18.18-.33.33-.68.33l.24-3.44 6.27-5.67c.27-.24-.06-.38-.42-.14l-7.75 4.88-3.34-1.04c-.72-.23-.74-.72.15-1.06l13.06-5.04c.6-.22 1.13.14.94 1.13Z"
      fill="#fff"
    />
  </svg>
)
