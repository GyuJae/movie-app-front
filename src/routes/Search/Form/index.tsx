import { useDebounce } from 'hooks/useDebounce'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import styles from './form.module.scss'
import RecommendKeyword from './RecommendKeyword'

interface IForm {
  keyword: string
}

const Form = () => {
  const { register, handleSubmit, watch, setValue } = useForm<IForm>()
  const [, setSearchParams] = useSearchParams()
  const keywordFormClean = () => setValue('keyword', '')
  const onSubmit: SubmitHandler<IForm> = ({ keyword }) => {
    setSearchParams({ keyword })
    keywordFormClean()
  }
  const debounceKeyword = useDebounce(watch('keyword'))
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Search...' {...register('keyword', { required: true })} autoComplete='off' />
      </form>
      <RecommendKeyword keyword={debounceKeyword} inView={!!debounceKeyword} keywordFormClean={keywordFormClean} />
    </div>
  )
}

export default Form
