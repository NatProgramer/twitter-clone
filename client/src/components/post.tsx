import { parseTime } from '../utils/parseTime'
import './post.css'

interface Props {
  mainText: string
  createdAt: number
}

export default function Post ({ mainText, createdAt }: Props) {
  const timePosted = parseTime(createdAt)
  return (
    <article>
      <p>{mainText}</p>
      <span>{timePosted}</span>
    </article>
  )
}
