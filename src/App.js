import {Component} from 'react'
import TabItems from './components/TabItems'
import ImageItems from './components/ImageItems'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeTab: languageGreetingsList[0].id}

  onClickLanguage = tabId => {
    this.setState({activeTab: tabId})
  }

  render() {
    const {activeTab} = this.state
    const imageDetails = languageGreetingsList.filter(
      item => item.id === activeTab,
    )
    console.log(imageDetails)
    return (
      <div className="app-container">
        <div className="greeting-container">
          <h1 className="heading">Multilingual Greetings</h1>
          <ul className="tabs-container">
            {languageGreetingsList.map(items => (
              <TabItems
                itemDetail={items}
                key={items.id}
                onClickLanguage={this.onClickLanguage}
                isActive={items.id === activeTab}
              />
            ))}
          </ul>
          {imageDetails.map(details => (
            <ImageItems key={details.id} imgDetails={details} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
