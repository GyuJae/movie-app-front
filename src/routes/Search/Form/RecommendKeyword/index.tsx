import { useSearchKeyword } from 'hooks/movies'
import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import NoResult from './NoResult'
import styles from './recommendKeyword.module.scss'

interface IProps {
  keyword: string
  inView: boolean
  keywordFormClean: () => void
}
const RecommendKeyword = ({ inView, keyword, keywordFormClean }: IProps) => {
  const { data } = useSearchKeyword(keyword)
  const [, setSearchParams] = useSearchParams()
  const handleClickKeyword = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const {
        currentTarget: { value },
      } = e
      setSearchParams({ keyword: value })
      keywordFormClean()
    },
    [keywordFormClean, setSearchParams]
  )

  const keywordList = useMemo(
    () => (
      <ul className={styles.keywordList}>
        {data?.results.map((result) => (
          <li key={`${result.id}-${result.name}`}>
            <button type='button' onClick={handleClickKeyword} value={result.name}>
              {result.name}
            </button>
          </li>
        ))}
      </ul>
    ),
    [data?.results, handleClickKeyword]
  )
  if (!inView) return null
  if (data && data.results.length === 0) return <NoResult />
  return (
    <div className={styles.wrapper}>
      <h3>Recommend Keyword</h3>
      {keywordList}
    </div>
  )
}

export default RecommendKeyword
