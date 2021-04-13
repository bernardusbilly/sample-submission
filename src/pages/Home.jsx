import {Container, Form, FormControl, InputGroup, Button, Col, Row} from 'react-bootstrap';
import CurrencyConverterCard from '../components/CurrencyConverterCard';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {addedSwal, addSwal} from '../helpers/sweetalert';

// hardcode requirement currency
const requirementCurrency = ['CAD', 'CZK', 'DKK', 'GBP', 'HKD', 'HUF', 'IDR', 'ISK', 'JPY', 'EUR', 'PHP', 'USD', 'SGD'];

export default function Home() {

  const [currencies, setCurrencies] = useState([]);
  const [shownCurrencies, setShownCurrencies] = useState([]);
  const [currencyCodeToAdd, setCurrencyCodeToAdd] = useState(requirementCurrency[0]);

  // hardcode initial currency
  const [initialCurrency, setInitialCurrency] = useState({
    value: 200,
    code: 'EUR',
    name: 'Euro'
  });

  // fetch only on first render
  useEffect(() => {
    fetchCurrencies();
  }, [])

  const fetchCurrencies = async () => {
    const currenciesData = [];
    const [{data: fetchedCurrenciesData}, {data: currenciesRate}] = await Promise.all([
      axios.get('http://openexchangerates.org/api/currencies.json'),
      axios.get('http://api.exchangeratesapi.io/latest?base=EUR&access_key=[ACCESS_KEY_HERE]')
    ])
    Object.keys(fetchedCurrenciesData).forEach(currencyCode => {
      // assign the currency data to currenciesData when currency code its on requirement
      if(requirementCurrency.includes(currencyCode)) {
        currenciesData.push({
          code: currencyCode,
          name: fetchedCurrenciesData[currencyCode],
          rate: currenciesRate.rates[currencyCode],
          value: initialCurrency.value * currenciesRate.rates[currencyCode]
        })
      }
    })

    setCurrencies(currenciesData)

    // this is for hardcode initial currency exchange card
    const filteredShownCurrency = currenciesData.filter(currency => currency.code === 'USD' || currency.code === 'SGD')
    setShownCurrencies(filteredShownCurrency)
  }


  useEffect(() => {

    // if the initialCurrency value change, it will change all of value in shownCurrencies
    const newShownCurrencies = shownCurrencies.map(shownCurrency => {
      return {
        ...shownCurrency,
        value: initialCurrency.value * shownCurrency.rate
      }
    });
    setShownCurrencies(newShownCurrencies);
  }, [initialCurrency])

  const onChangeCurrencyValue = ({target}) => {
    const currencyValue = target.value;

    // check if input currency is number or not using regex
    if(!currencyValue.match(/\D+/)) {
      setInitialCurrency({
        ...initialCurrency,
        value: Number(currencyValue)
      })
    }
  }

  const onAddCurrencyConverter = (e) => {
    e.preventDefault();
    const clonedShownCurrencies = JSON.parse(JSON.stringify(shownCurrencies)); // deep-clone to prevent side effect
    const isAlreadyOnList = clonedShownCurrencies.find(currency => currency.code === currencyCodeToAdd);

    // validate whether is currency converter on list or not, and shown message by sweetalert
    if(isAlreadyOnList) {
      addedSwal(currencyCodeToAdd);
    } else {
      const addedCurrencyConverter = currencies.find(currency => currency.code === currencyCodeToAdd);
      setShownCurrencies([
        {
          ...addedCurrencyConverter,
          value: initialCurrency.value * addedCurrencyConverter.rate
        },
        ...clonedShownCurrencies
      ]);
      addSwal(currencyCodeToAdd);
    }
  }

  return (
    <Row>
      <Col xl={{span: 4, offset: 4}} lg={{span: 6, offset: 3}} md={{span: 8, offset: 2}} sm={12}>
        <Container className="rounded mt-5 pb-2" style={{backgroundColor: 'ghostwhite'}}>
          <h2 className="text-center my-3">CURRENCY EXCHANGE</h2>
          <Form.Group controlId="inputCurrencyForm">
            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>{initialCurrency.code} - {initialCurrency.name}</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl placeholder="Currency value" value={initialCurrency.value} onChange={onChangeCurrencyValue} />
            </InputGroup>
          </Form.Group>
          <Form onSubmit={onAddCurrencyConverter}>
            <Form.Group className="row">
              <Form.Control className="offset-1 col-7"
                            as="select"
                            defaultValue={currencyCodeToAdd}
                            onChange={({target}) => setCurrencyCodeToAdd(target.value)}>
                {requirementCurrency.map(currencyCode => <option value={currencyCode} key={currencyCode}>{currencyCode}</option>)}
              </Form.Control>
              <Button type="submit" variant="outline-primary offset-1 col-2">Add</Button>
            </Form.Group>
          </Form>
          {shownCurrencies.length > 0
            ?(
              shownCurrencies.length > 0 && shownCurrencies.map(currency => (
                <CurrencyConverterCard currency={currency}
                                       key={currency.code}
                                       shownCurrencies={shownCurrencies}
                                       setShownCurrencies={setShownCurrencies}/>
              ))
            )
            :(
              <div className="d-flex py-5 justify-content-center align-items-center">
                <h2>There is no currency converter</h2>
              </div>
            )}
        </Container>
      </Col>
    </Row>
  )
}
