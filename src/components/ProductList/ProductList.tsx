import React from 'react';

//Styles
import './ProductList.scss';

//Components
import Product from '../Product';

//Material UI components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

type ProductListProps = {};


class ProductList extends React.Component<ProductListProps> {
    render() {
        return (
            <Paper className="container" >
                <Grid className="content">
                    <Grid className="header">
                        Nešiojami Kompiuteriai
                    </Grid>
                    <Grid className="items">
                        <Product>
                        </Product>
                        <Product>
                        </Product>
                        <Product>
                        </Product>
                        <Product>
                        </Product>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default ProductList;