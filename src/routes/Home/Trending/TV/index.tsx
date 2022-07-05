interface IProps {
  inView: boolean
}

const TV = ({ inView }: IProps) => {
  if (!inView) return null
  return <div>TV</div>
}

export default TV
