import { useState, useEffect } from "react";
import { useGeolocated } from "react-geolocated";
import "../Styles/Pages/compass.css";

export default function Compass() {
  
  const {
    coords,
    isGeolocationAvailable,
    isGeolocationEnabled
  } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false
    },
    userDecisionTimeout: 5000
  });

  const [pointDegree, setPointDegree] = useState(0);
  const [compassCircleTransformStyle, setCompassCircleTransform] = useState(
    "translate(-50%, -50%)"
  );
  const [myPointStyle, setMypointStyle] = useState(0);

  const locationHandler = (coords) => {
    const { latitude, longitude } = coords;
    const resP = calcDegreeToPoint(latitude, longitude);
    if (resP < 0) {
      setPointDegree(resP + 360);
    } else {
      setPointDegree(resP);
    }
  };

  useEffect(() => {
    if (!isGeolocationAvailable) {
      alert("Your browser does not support Geolocation");
    } else if (!isGeolocationEnabled) {
      alert(
        "Geolocation is not enabled. Please allow location services in your settings."
      );
    } else if (coords) {
      locationHandler(coords);
    }
  }, [coords, isGeolocationAvailable, isGeolocationEnabled]);

  useEffect(() => {
    startCompass(); // Automatically start the compass when the component mounts
  }, []);

  const isIOS = () => {
    return (
      navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
      navigator.userAgent.match(/AppleWebKit/)
    );
  };

  const calcDegreeToPoint = (latitude, longitude) => {
    const point = {
      lat: 21.422487,
      lng: 39.826206
    };

    const phiK = (point.lat * Math.PI) / 180.0;
    const lambdaK = (point.lng * Math.PI) / 180.0;
    const phi = (latitude * Math.PI) / 180.0;
    const lambda = (longitude * Math.PI) / 180.0;
    const psi =
      (180.0 / Math.PI) *
      Math.atan2(
        Math.sin(lambdaK - lambda),
        Math.cos(phi) * Math.tan(phiK) -
          Math.sin(phi) * Math.cos(lambdaK - lambda)
      );
    return Math.round(psi);
  };

  const startCompass = async () => {
    const checkIos = isIOS();
    if (checkIos) {
      DeviceOrientationEvent.requestPermission()
        .then((response) => {
          if (response === "granted") {
            window.addEventListener("deviceorientation", handler, true);
          } else {
            alert("Permission to access orientation is required!");
          }
        })
        .catch(() => alert("Device orientation not supported on this device"));
    } else {
      window.addEventListener("deviceorientationabsolute", handler, true);
    }
  };

  const handler = (e) => {
    const compass = e.webkitCompassHeading || Math.abs(e.alpha - 360);
    const compassCircleTransform = `translate(-50%, -50%) rotate(${-compass}deg)`;
    setCompassCircleTransform(compassCircleTransform);

    if (
      (pointDegree < Math.abs(compass) &&
        pointDegree + 15 > Math.abs(compass)) ||
      pointDegree > Math.abs(compass + 15) ||
      pointDegree < Math.abs(compass)
    ) {
      setMypointStyle(0);
    } else if (pointDegree) {
      setMypointStyle(1);
    }
  };

  return (
    <div className="center">
    <div className="App ">
      <div className="compass">
        <div className="arrow" />
        <div
          className="compass-circle"
          style={{ transform: compassCircleTransformStyle }}
        />
        <div className="my-point" style={{ opacity: myPointStyle }} />
      </div>
    </div>
    </div>
  );
}
