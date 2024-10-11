import './index.css'

const TabItems = props => {
  const {itemDetail, isActive, onClickLanguage} = props
  const {id, buttonText} = itemDetail
  const activeTabClassName = isActive ? 'activeTabBtn' : ''

  const onClickLanguageBtn = () => {
    onClickLanguage(id)
  }

  return (
    <li>
      <button
        onClick={onClickLanguageBtn}
        className={`button ${activeTabClassName}`}
        type="button"
      >
        {buttonText}
      </button>
    </li>
  )
}

export default TabItems
