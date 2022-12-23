import { useEffect } from "react";
import { connect } from "react-redux";
const url = "https://dummyjson.com/products?limit=100";
const Countries = (props) => {
  console.log("countries.props", props);
  const fetchCountries = async (api) => {
    const response = await fetch(api);
    const { products } = await response.json();
    console.log(products.slice(0, 21));
    props.dispatch({
      type: "FETCH_COUNTRIES",
      payload: products.slice(0, 21)
    });
  };
  useEffect(() => {
    fetchCountries(url);
  }, [props.item]);
  return (
    <div className="App">
      <h4> Countries details by fetching Api</h4>
      <div className="phone-container">
        {props.product.products.map((item) => {
          const { id, title, description, images } = item;
          return (
            <div key={id} className="phones">
              <h3>{title} </h3>
              <img alt={title} src={images[0]} width={200} />
              <p> {description} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default connect(function (store) {
  return store;
})(Countries);
