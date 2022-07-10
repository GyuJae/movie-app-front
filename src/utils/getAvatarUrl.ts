interface IProps {
  path: string
  variant?: 'avatar' | 'public'
}

export const getAvatarUrl = ({ path, variant = 'avatar' }: IProps): string =>
  `https://imagedelivery.net/ZYLViq3IecpAakTgPse5sg/${path}/${variant}`
