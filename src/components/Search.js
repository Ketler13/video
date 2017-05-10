import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { loadVideos, setInputValue, clearResults } from '../AC'
import Form from 'react-bootstrap/lib/Form'
import Button from 'react-bootstrap/lib/Button'
import FormControl from 'react-bootstrap/lib/FormControl'

class Search extends Component {
  static propTypes = {
    value: PropTypes.string
  }

  handleChange = field => ev => {
    this.props.setInputValue(field, ev.target.value)
  }

  handleClick = ev => {
    this.props.phrase && this.props.loadVideos(this.props.phrase)
  }

  handleClear = ev => {
    this.props.clearResults()
  }

  render() {
    const {loading, loaded, phrase} = this.props
    return (
      <div>
        <p>Поиск:</p>
        <Form inline>
          <FormControl
            type="text"
            value={phrase}
            placeholder="Enter text"
            onChange={this.handleChange('phrase')}
          />
          <Button
            bsStyle="primary"
            disabled={loading}
            onClick={!loading ? this.handleClick : null}
          >
            {loading ? 'Загрузка' : 'Поиск'}
          </Button>
          {
            loaded ?
            <Button
              bsStyle="danger"
              onClick={this.handleClear}
            >
              {'Очистить'}
            </Button> :
            null
          }
        </Form>
      </div>
    )
  }
}

export default connect(store => {
  return {
    phrase: store.video.phrase,
    loading: store.video.loading,
    loaded: store.video.loaded
  }
}, {loadVideos, setInputValue, clearResults})(Search)
