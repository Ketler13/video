import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setInputValue} from '../AC'
import {Link} from 'react-router'
import Form from 'react-bootstrap/lib/Form'
import Button from 'react-bootstrap/lib/Button'
import FormControl from 'react-bootstrap/lib/FormControl'

class VideoPageHeader extends Component {
  static propTypes = {
    video: PropTypes.object
  }

  handleChange = field => ev => {
    this.props.setInputValue(field, ev.target.value)
  }

  render() {
    return (
      <div>
        <p>Введите id ролика:</p>
        <Form inline>
          <FormControl
            type="text"
            value={this.props.vidId}
            placeholder="id"
            onChange={this.handleChange('vidId')}
          />
          <Button bsStyle='success'>
            <Link to={`/video/${this.props.vidId}`}>
              <p>Смотреть</p>
            </Link>
          </Button>
        </Form>
      </div>
    )
  }
}

export default connect(store => {
  return {
    vidId: store.video.vidId
  }
}, {setInputValue})(VideoPageHeader)
