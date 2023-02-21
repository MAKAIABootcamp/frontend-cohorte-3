import React, { useEffect, useState } from "react";
import { getSeats } from "../../services/getSeats";
import "./seats.css";

const Seats = ({ data = 3 }) => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState({});
  // const [numberPass, setNumberPass] = useState([]);
  


  const handleSelectedSeats = (seat) => {
    setSelectedSeats({
      ...selectedSeats,
      [seat.code]: !selectedSeats[seat.code],
    });
    // const cont = numberPass - 1;
    // setNumberPass(cont);
    const arrayKeys = Object.keys(selectedSeats);
    const trueKeys = arrayKeys.filter((key) => selectedSeats[key]);
    if (trueKeys.includes(seat.code) && trueKeys.length === data) {
      setSelectedSeats({
        ...selectedSeats,
        [seat.code]: !selectedSeats[seat.code],
      });
    }
    if (trueKeys.length === data && !trueKeys.includes(seat.code)) {
      setSelectedSeats({
        ...selectedSeats,
        [trueKeys[0]]: false,
        [seat.code]: !selectedSeats[seat.code],
      });
    }
    // else {
    //   setSelectedSeats({
    //     ...selectedSeats,
    //     [seat.code]: !selectedSeats[seat.code],
    //   });
    // }
    // if (cont < 0) {
    //   const arrayKeys = Object.keys(selectedSeats);
    //   const trueKeys = arrayKeys.filter((key) => selectedSeats[key]);
    //   if (trueKeys.length === data) {
    //     setSelectedSeats({
    //       ...selectedSeats,
    //       [trueKeys[0]]: false,
    //       [seat.code]: !selectedSeats[seat.code],
    //     });
    //   } else {
    //     setSelectedSeats({
    //       ...selectedSeats,
    //       [seat.code]: !selectedSeats[seat.code],
    //     });
    //   }
    // }
  };

  //   const validateSeats = () => {
  //     const cont = numberPass;
  //     setNumberPass(cont - 1);
  //     if (cont - 1 < 0) {
  //       const arregloKeys = Object.keys(selectedSeats);
  //       const trueKeys = arregloKeys.filter((key) => selectedSeats[key]);
  //       console.log(trueKeys);
  //       //   if (selectedSeats[arregloKeys[0]]) {
  //       //     selectedSeats[arregloKeys[0]] = false;
  //       //   }
  //     }
  //   };

  useEffect(() => {
    getSeats()
      .then((response) => {
        setSeats(response);
      })
      .catch((error) => console.log(error));
  }, []);

  //   useEffect(() => {
  //     //   validateSeats();
  //     const cont = numberPass - 1;
  //     setNumberPass(cont);
  //     if (cont === 0) {
  //       const arregloKeys = Object.keys(selectedSeats);
  //       const trueKeys = arregloKeys.filter((key) => selectedSeats[key]);
  //       selectedSeats[trueKeys[0]] = false;
  //       setNumberPass(numberPass + 1);
  //       //   if (selectedSeats[arregloKeys[0]]) {
  //       //     selectedSeats[arregloKeys[0]] = false;
  //       //   }
  //     }
  //     console.log(selectedSeats);
  //   }, [selectedSeats]);

  return (
    <div className="buttons">
      {seats.length &&
        seats.map((seat) => (
          <button
            key={seat.id}
            disabled={!seat.isAvailable}
            className={
              selectedSeats[seat.code] ? "button button--selected" : "button"
            }
            onClick={() => handleSelectedSeats(seat)}
          >
            {seat.code}
          </button>
        ))}
    </div>
  );
};

export default Seats;
