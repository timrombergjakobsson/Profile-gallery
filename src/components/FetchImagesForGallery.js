import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

class FetchImages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: []
        };
    }
    

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=100')
        .then(res => res.data.results)
        .then(images => this.setState({ images: images }))
    }

    randomChoice = (array) => {
        return array[Math.floor(Math.random() * array.length)];
    }

    render() { 
        const randomImage = this.randomChoice(this.state.images);
        const randomDob = randomImage ? randomImage.dob.date : undefined;
        return (
            <>
                { this.state.images.map(image => {
                    return ( 
                        <article key={image.id}>
                            <figure className="c-image-gallery__container">
                                <img className="c-image-gallery__image" src={image.picture.large} />
                                <span className="c-image-gallery__info">{image.name.first} </span>
                                <span className="c-image-gallery__info">{image.name.last} </span>
                            </figure>
                        </article>
                    );
                })}
                <span className="c-image-gallery__date">{moment(randomDob).format('YYYY-MM-DD')}</span>        
            </>
        )  
    }
}

export default FetchImages;
