interface IProps {
  inView: boolean
}
const TVs = ({ inView }: IProps) => {
  if (!inView) return null
  return <div>TVs</div>
}

export default TVs
