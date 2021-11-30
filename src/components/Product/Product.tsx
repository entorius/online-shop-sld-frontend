import React from 'react';

//Styles
import './Product.scss';

//Material UI components
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';


//Icons
import FavoriteIcon from '@material-ui/icons/Favorite';

//Colors

//Images
import computerImage from '../../assets/images/d2af25bb6e5d113d48909f8ebabe5656.jpg';

const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);

type HomeItemProps = {};

type HomeItemState = {
    ratingValue: number,
    price: number
}



class Product extends React.Component<HomeItemProps, HomeItemState> {
    constructor(props: HomeItemProps) {
        super(props);
        this.state = {
            ratingValue: 2,
            price: 1200.99
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt: any) {

        // check it out: we get the evt.target.name (which will be either "email" or "password")
        // and use it to target the key on our `state` object with the same name, using bracket syntax
        this.setState({ ratingValue: evt.target.value });
    }

    render() {
        return (
            <Box className="itemContainer" >
                <img className="productImage" src={computerImage} alt="ComputerImage" />
                <div className="productItemDescription">
                    ASUS Flip C436 14" 2 in 1 Chromebook - Intel® Core™ i5, 256 GB SSD, White
                </div>
                <Box className= "ratingBox">
                    <StyledRating
                        name="customized-color"
                        defaultValue={2}
                        getLabelText={(value) => `${this.state.ratingValue} Heart${value !== 1 ? 's' : ''}`}
                        precision={0.5}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        onChange={this.handleChange}
                        size='large'
                    />
                    <div>
                        ({this.state.ratingValue})
                    </div>
                </Box> 
                <Button className="itemButton" variant="contained" color="primary">
                    Į Krepšelį
                </Button>
                <Divider variant="middle" />

                <div className="itemPrice">
                    {this.state.price} €
                </div>
            </Box>
        );
    }
}

export default Product;