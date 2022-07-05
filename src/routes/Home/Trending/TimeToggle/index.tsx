import { useSearchParams } from 'react-router-dom'
import { cx } from 'styles'
import styles from './timeToggle.module.scss'

const TimeToggle = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const time = searchParams.get('time') || 'day'

  const handleClickDay = () => setSearchParams({ time: 'day' })
  const handleClickWeek = () => setSearchParams({ time: 'week' })

  return (
    <div className={styles.wrapper}>
      <button type='button' onClick={handleClickDay} className={cx(styles.time, { [styles.current]: time === 'day' })}>
        Today
      </button>
      <button
        type='button'
        onClick={handleClickWeek}
        className={cx(styles.time, { [styles.current]: time === 'week' })}
      >
        Week
      </button>
      <div className={cx(styles.item, { [styles.isWeek]: time === 'week' })} />
    </div>
  )
}

export default TimeToggle
