import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

export default function Home({ allPostsData }) {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };
  return (
    <Layout home>
      <Head>
        <script
          type="text/javascript"
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCNG-9D8-Hrw0EsaY8Ln-GZ74xd8-fxuxI&libraries=places"
        ></script>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi <strong>Divyansh here !!</strong>. Welcome to my blog{" "}
        </p>
      </section>
      <Link href="/posts/1">
        <li>
          <a>Data Fetching : Post</a>
        </li>
      </Link>
      {/* <Link href="/CssButton">
        <li>
          <a>CSS Support : Button</a>
        </li>
      </Link> */}
      <li>
        <a>Static File Serving : Image </a>
      </li>
      <Link href="/todoapp">
        <li>
          <a>Redux : Todo App</a>
        </li>
      </Link>
      <Link href="/form_1">
        <li>
          <a>Formik and Yup : Form</a>
        </li>
      </Link>

      <div>
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <p>Latitude: {coordinates.lat}</p>
              <p>Longitude: {coordinates.lng}</p>

              <input {...getInputProps({ placeholder: "Type address" })} />

              <div>
                {loading ? <div>...loading</div> : null}

                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                  };

                  return (
                    <div {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    </Layout>
  );
}
