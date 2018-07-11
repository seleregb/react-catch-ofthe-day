// let's go!
import React from 'react';
import { getFunName } from '../helpers';
class StorePicker extends React.Component {

    constructor() {
        super();
        this.goToStore = this.goToStore.bind(this);
    }

    goToStore(event) {
        event.preventDefault();
        console.log("You changed the URL!");
        // first grab the text from the box
        const storeId = this.storeInput.value;
        console.log(`Going to ${storeId}`);
        // transition to /store/:storeId
        this.context.router.transitionTo(`/store/${storeId}`)
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input type="text" placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} required/>
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;