import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api/';
import styles from './App.css';
import image from './images/virus2.png';


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <>

      <div className={styles.container}>
        {/* <img className="image" src={image} alt="COVID-19" /> */}


        <div class="logo">
              <h3>Covid-19 
               <img className="image" src={image} alt="COVID-19" />
              </h3> 
        </div>


        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
      </>
    );
  }
}

export default App;