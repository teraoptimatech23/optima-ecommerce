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
