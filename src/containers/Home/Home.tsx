import React from 'react';

//Styles
import './Home.scss'

//Project Components
import ProductList from '../../components/ProductList';
//Material UI components
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';

//Icons
import SearchIcon from '@material-ui/icons/Search';

export type HomeProps = {
    user: any,
    getUser: any
};

type HomeState = {};

class Home extends React.Component<HomeProps, HomeState> {
    
    componentDidMount() {
        const { getUser } = this.props;
        getUser();
    }

    render() {
        return (
            <div className="mainPage" >
                <Grid className="topBar">
                    <Grid key={0} item className="topBarButtonGrid">
                        <Paper className="separatorPaperStyle">Pristatymas</Paper>
                    </Grid>
                    <Grid key={1} item className="topBarButtonGrid">
                        <Paper className="separatorPaperStyle">Apmokėjimas</Paper>
                    </Grid>
                </Grid>
                <Grid className="headerInner">
                    <Grid key={0} item className="headerInnerLogoGrid">
                        <Paper className="separatorPaperStyle">Logo</Paper>
                    </Grid>
                    <Grid key={1} item className="headerInnerSearchBarGrid">
                        <Paper className="separatorPaperStyle searchBarBox">
                            <Paper className="searchBar">
                                <InputBase
                                    className="searchBarInput"
                                    placeholder="Ieškokite prekių..."
                                    inputProps={{ 'aria-label': 'search for items...' }}
                                />
                                <IconButton type="submit" aria-label="search" className="searchBarIconButton">
                                    <SearchIcon className="searchBarIcon"/>
                                </IconButton>
                            </Paper>
                        </Paper>
                    </Grid>
                    <Grid key={2} item className="headerInnerItemsBasketGrid">
                        <Paper className="separatorPaperStyle">
                            Basket
                        </Paper>
                    </Grid>
                    <Grid key={3} item className="headerInnerItemsLoginRegisterGrid">
                        <Paper className="separatorPaperStyle">
                            <Grid className="loginRegisterButtonGrid">
                                <Button variant="contained" className="loginButton">Prisijungti</Button>
                            </Grid>
                            <Grid className="loginRegisterButtonGrid">
                                <Button variant="outlined" className="registerButton">Registruotis</Button>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid className="mainBar">
                    <Grid key={0} item className="mainBarAllItems">
                        <Paper className="separatorPaperStyle">Visos prekes</Paper>
                    </Grid>
                    <Grid key={1} item className="mainBarMainBar">
                        <Paper className="separatorPaperStyle">Main Bar</Paper>
                    </Grid>
                </Grid>
                <Grid className="anoucementsRow">
                    <Grid key={0} item className="anoucementsRowAnoucement">
                        <Paper className="separatorPaperStyle">Reklamos</Paper>
                    </Grid>
                </Grid>
                <Grid className="deliveyInformationRow">
                    <Grid key={0} item className="deliveyInformationRowInformation">
                        <Paper className="separatorPaperStyle">Pristatymas</Paper>
                    </Grid>
                    <Grid key={1} item className="deliveyInformationRowInformation">
                        <Paper className="separatorPaperStyle">Pristatymas</Paper>
                    </Grid>
                    <Grid key={3} item className="deliveyInformationRowInformation">
                        <Paper className="separatorPaperStyle">Pristatymas</Paper>
                    </Grid>
                    <Grid key={4} item className="deliveyInformationRowInformation">
                        <Paper className="separatorPaperStyle">Pristatymas</Paper>
                    </Grid>
                    <Grid key={5} item className="deliveyInformationRowInformation">
                        <Paper className="separatorPaperStyle">Pristatymas</Paper>
                    </Grid>
                </Grid>
                <Grid className="itemsContainer">
                    <ProductList>
                    </ProductList>
                </Grid>
            </div>
        );
    }
}

export default Home;