import type { ComponentType, ReactNode } from 'react'
import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  WhatsAppIcon,
} from '../components/icons/BrandIcons'

export interface ShareOption {
  id: string
  name: string
  icon: ReactNode
  /**
   * Placeholder action — currently just logs. Swap this per platform for
   * navigator.share(), a deep link, or a social SDK call later without
   * touching ShareProductSheet's rendering.
   */
  share: (url: string) => void
}

const PLATFORMS: { id: string; name: string; Icon: ComponentType<{ size?: number }> }[] = [
  { id: 'whatsapp', name: 'WhatsApp', Icon: WhatsAppIcon },
  { id: 'facebook', name: 'Facebook', Icon: FacebookIcon },
  { id: 'instagram', name: 'Instagram', Icon: InstagramIcon },
  { id: 'telegram', name: 'Telegram', Icon: TelegramIcon },
]

export const SHARE_OPTIONS: ShareOption[] = PLATFORMS.map(({ id, name, Icon }) => ({
  id,
  name,
  icon: <Icon size={26} />,
  share: (url: string) => console.log(`Share to ${name}`, url),
}))
