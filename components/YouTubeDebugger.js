import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor() {
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
    this.resolution = this.resolution.bind(this)
    this.settingsBitrate = this.settingsBitrate.bind(this)

  }
  settingsBitrate() {
    debugger
    this.setState({
      settings: Object.assign({}, this.state.settings, {bitrate: 12})
    })
  }

  resolution() {
    debugger
    this.setState({
      settings: Object.assign({}, this.state.settings, {video: {resolution: '720p'}})
    })
  }
  render () {
    return(
      <div>
        <button className='resolution' onClick={this.resolution}>Change Res</button>
        <button className='bitrate' onClick={this.settingsBitrate}>Change Bitrate</button>
      </div>
    )
  }
}


module.exports = YouTubeDebugger
