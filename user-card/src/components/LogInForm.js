import React from 'react';
import axios from 'axios';

class LogInForm extends React.Component {
    state = {
        gitHubData: {},
        input: 'RemyVila'
      }

    componentDidMount() {
        axios.get('https://api.github.com/users/RemyVila')
            .then((res) => {
                console.log(res.data);
                this.setState({
                    gitHubData: res.data
                });
            })
            .catch(err => console.log('componentDidMount Error', err));
    }
    
    onChange = (e) => {
        this.setState({
            input:e.target.value
        });
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.input);
        
        axios.get(`https://api.github.com/users/${this.state.input}`)
            .then((res)=> {
                console.log(res.data);
                this.setState({
                    gitHubData: res.data
                });
            })
            .catch(err => console.log('oS Error', err));
    }

    render() {
        return(
            <div>
                <h1>GitHub User</h1>
                <form onSubmit={this.onSubmit}>
                    <label>
                        Search a GitHub User:&nbsp;
                        <input
                            value={this.state.input}
                            placeholder='Valid GitHub User'
                            onChange={this.onChange}
                        />&nbsp;
                    </label>
                    <button>Search</button>
                </form>
                <div>
                    <img width='55%' src={this.state.gitHubData.avatar_url} alt='profile avatar' />
                </div>
                <div>
                    Username: &nbsp;
                    {this.state.gitHubData.login}
                </div>
                <div>
                    Github Link: &nbsp;
                    {this.state.gitHubData.url}
                </div>
                <div>
                    Followers: &nbsp;
                    {this.state.gitHubData.followers}
                </div>
                <div>
                    Following: &nbsp;
                    {this.state.gitHubData.following}
                </div>
            </div>
        )
    }
}

export default LogInForm;