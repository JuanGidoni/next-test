import { useRouter } from 'next/router'

const Link = ({ children, href, className, back }) => {
  const router = useRouter()

  const Back = back === 'true' ? true : false
  const Href = href ? href : false
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={Href ? Href : '#'} onClick={Back ? router.back(): handleClick} className={className}>
      {children}
    </a>
  )
}

export default Link