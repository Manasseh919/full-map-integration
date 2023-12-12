import React, { useContext } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import MapViewStyle from "./../../utils/MapViewStyle.json";
import { UserLocationContext } from "../../Context/UserLocationCOntext";

const AppMapView = () => {
  const { location, setLocation } = useContext(UserLocationContext);

  return (
    location?.latitude && (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          customMapStyle={MapViewStyle}
          region={{
            latitude: location?.latitude,
            longitude: location?.longitude,
            locationDelta:0.0422,
            longitudeDelta:0.0421
          }}
        />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default AppMapView;
