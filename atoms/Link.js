import { useRouter } from 'next/router'

const Link = ({ children, href, className }) => {
  const router = useRouter()


  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}

export default Link