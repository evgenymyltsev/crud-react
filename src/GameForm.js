import React, { Component }     from 'react';
import classnames               from 'classnames';

class GameForm extends Component {
    state= {
        _id:        this.props.game ? this.props.game._id : null,
        title:      this.props.game ? this.props.game.title : '',
        cover:      this.props.game ? this.props.game.cover : '',
        errors:     {},
        loading:    false
    };



    handleChange = (e) => {
        if(!!this.state.errors[e.target.name]){
            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState({
                [e.target.name]: e.target.value,
                errors
            });
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();

        let errors = {};
        if (this.state.title === '') errors.title = "Can't not be empty";
        if (this.state.cover === '') errors.cover = "Can't not be empty";
        this.setState({errors});
        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            const { title, cover, _id } = this.state;
            this.setState({ loading: true });
            this.props.addGame({ title, cover, _id });
            this.setState({ done: true });
            this.props.saveGame({ _id, title, cover })
              .catch((err) => err.response.json().then(({errors}) => this.setState({ errors, loading: false })));
        }

    };

    render() {
        const form = (
            <form className={classnames('ui', 'form', { loading: this.state.loading })} onSubmit={this.handleSubmit}>
                <h1>Add new game</h1>

                {!!this.state.errors.global && <div className="ui negative message">{this.state.errors.global}</div>}

                <div className={classnames('field', { error: !!this.state.errors.title })}>
                    <label htmlFor="title">Title</label>
                    <input
                        name="title"
                        value={this.state.title}
                        id="title"
                        onChange={this.handleChange}
                    />
                    <span>{this.state.errors.title}</span>
                </div>

                <div className={classnames('field', { error: !!this.state.errors.cover })}>
                    <label htmlFor="cover">Cover URL</label>
                    <input
                        name="cover"
                        value={this.state.cover}
                        id="cover"
                        onChange={this.handleChange}
                    />
                    <span>{this.state.errors.cover}</span>
                </div>

                <div className="filed">
                    {this.state.cover !== '' && <img src={this.state.cover} alt="" className="ui small bordered image"/>}
                </div>

                <div className="field">
                    <button className="ui button primary">Save</button>
                </div>
            </form>
        );
        return (
            <div>
                { form }
            </div>
        );
    }
}

export default GameForm;