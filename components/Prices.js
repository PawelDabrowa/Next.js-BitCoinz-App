class Prices extends React.Component {

  render() {
    return (
    <> 
      <div className={'flex flex-row'}>
          <h2 className={'sm:text-lg p-4 text-blue-700'}> Bitcoin rate for: {this.props.bpi.bpi.USD.description}</h2>
          <ul>
            <li className={'sm:text-lg p-4 text-sm  text-black'}><span className={'text-white-700 px-2 bg-red-400'}>{this.props.bpi.bpi.USD.code}
              {' '} {this.props.bpi.bpi.USD.rate}</span>
            </li>
          </ul>
      </div>

      <div className={'flex text-left flex-row'}>
          <h2 className={'sm:text-lg p-4 text-blue-700'}> Bitcoin rate for: {this.props.bpi.bpi.GBP.description}</h2>
          <ul>
            <li className={'sm:text-lg p-4 text-sm  text-black'}><span className={'text-white-700 px-2 bg-purple-400'}>{this.props.bpi.bpi.GBP.code}
              {' '} {this.props.bpi.bpi.GBP.rate}</span>
            </li>
          </ul>
      </div>

      <div className={'flex flex-row'}>
          <h2 className={'sm:text-lg p-4 text-blue-700'}> Bitcoin rate for: {this.props.bpi.bpi.EUR.description}</h2>
          <ul>
            <li className={'sm:text-lg p-4 text-sm  text-black'}><span className={'text-white-700 px-2 bg-yellow-400'}>{this.props.bpi.bpi.EUR.code}
              {' '} {this.props.bpi.bpi.EUR.rate}</span>
            </li>
          </ul>
      </div>
    </>
    );
  };
}

export default Prices;