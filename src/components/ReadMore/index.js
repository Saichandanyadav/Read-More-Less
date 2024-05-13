import {useState} from 'react'
import {
  BgContainer,
  CardContainer,
  MainHeading,
  Paragraph,
  Image,
  Description,
  Button,
} from './styledComponents'

const ReadMore = ({reactHooksDescription}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpansion = () => {
    setIsExpanded(prevState => !prevState)
  }

  return (
    <BgContainer>
      <CardContainer>
        <MainHeading>React Hooks</MainHeading>
        <Paragraph>Hooks are a new addition to React</Paragraph>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>
          {isExpanded
            ? reactHooksDescription
            : reactHooksDescription.slice(0, 170)}
        </Description>
        <Button onClick={toggleExpansion}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </Button>
      </CardContainer>
    </BgContainer>
  )
}

export default ReadMore
