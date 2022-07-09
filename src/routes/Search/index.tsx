import { opacityVariants } from 'animations'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import Form from './Form'
import Result from './Result'

const Search = () => {
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('keyword')
  return (
    <motion.div variants={opacityVariants} initial='initial' animate='animate' exit='exit'>
      <Form />
      <Result inView={!!keyword} />
    </motion.div>
  )
}

export default Search
