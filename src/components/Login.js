import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    pseudo: '',
    goToChat: false,
  }

  // au changement du pseudo
  handleChange = event => {
    const pseudo = event.target.value

    this.setState({ pseudo })
  }

  // au click sur le submit
  handleSubmit = event => {
    //arret du processus et action manuel
    event.preventDefault()
    //renvoie goToChat a true
    this.setState({ goToChat: true })
  }

  render() {
    // si gotochat est egal a true alors ca me redirige vers le path
    if (this.state.goToChat) {
      return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
    }
    return (
      <div className='connexionBox'>
        <form className='connexion' onSubmit={this.handleSubmit}>
          <input
            type='text'
            onChange={this.handleChange}
            value={this.state.pseudo}
            name=''
            id=''
            required
          />
          <button type='submit'>GO</button>
        </form>
      </div>
    )
  }
}

export default Login