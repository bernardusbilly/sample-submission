import {Button, Card} from 'react-bootstrap';
import {deletedSwal} from '../helpers/sweetalert';

export default function CurrencyConverterCard({currency, setShownCurrencies, shownCurrencies}) {

  const onDeleteCurrencyConverter = () => {
    const filteredShownCurrencies = shownCurrencies.filter(shownCurrency => shownCurrency.code !== currency.code)
    setShownCurrencies(filteredShownCurrencies)
    deletedSwal(currency.code)
  }

  return (
    <Card className="my-2">
      <Card.Header className="d-flex flex-row justify-content-between">
        <Card.Title style={{marginTop: 5, marginBottom: 0}}>{currency.code} - {currency.name}</Card.Title>
        <Button onClick={onDeleteCurrencyConverter} variant="outline-danger">Remove</Button>
      </Card.Header>
      <Card.Body>
        <Card.Text style={{marginTop: -10, marginBottom: 0}}>
          <strong>Current Rate:</strong> 1 IDR = {currency.rate} {currency.code}
        </Card.Text>
        <Card.Text style={{marginTop: 0, marginBottom: -10}}>
          <strong>Result:</strong> {currency.value.toFixed(2)}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
