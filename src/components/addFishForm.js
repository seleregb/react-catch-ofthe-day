import React from 'react';

export class AddFishForm extends React.Component {

    constructor() {
        super();
        this.createFish = this.createFish.bind(this);
    }

    createFish(event) {
        event.preventDefault();
        const fish = {
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            desc: this.desc.value,
            image: this.image.value
        };
        console.log(`fish: ${fish}`);
        this.props.addFish(fish);
        this.fishForm.reset();
    }

    render() {
        return (
            <div>
                <h2>Add Fish Form</h2>
                <form ref={(input) => this.fishForm = input} className="fish-edit" onSubmit={this.createFish}>
                    <input ref={(input) => this.name} type="text" placeholder="Fish Name"/>
                    <input ref={(input) => this.price} type="text" placeholder="Fish Price"/>
                    <select ref={(input) => this.status}>
                        <option value="available">Fresh!</option>
                        <option value="unavailable">Sold Out</option>
                    </select>
                    <textarea ref={(input) => this.desc} type="text" placeholder="Fish Desc"></textarea>
                    <input ref={(input) => this.image} type="text" placeholder="Fish Image"/>
                    <button type="submit">+ Add Item</button>
                </form>
            </div>
            
        )
    }
}

AddFishForm.propTypes = {
    addFish: React.PropTypes.func.isRequired
}

export default AddFishForm;