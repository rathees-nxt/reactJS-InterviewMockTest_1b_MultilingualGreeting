import './index.css'

const ImageItems = props => {
  const {imgDetails} = props
  const {imageAltText, imageUrl} = imgDetails
  return (
    <li>
      <img src={imageUrl} alt={imageAltText} className="image" />
    </li>
  )
}

export default ImageItems
