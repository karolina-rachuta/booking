import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";

import "./reserve.css";

function Reserve({ setOpenModal, hoteid }) {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`/hotels/room/${hoteid}`);
  const { dates } = useContext(SearchContext);

  const getDatesFromRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    let dates = [];
    while (date <= end) {
      dates.push(new Date(date).getTime());
      //getTime() gives time stamps
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };

  const allDates = getDatesFromRange(dates[0].startDate, dates[0].endDate);
  console.log(allDates);

  const isAvaiable = (roomNumber) => {
    //to mark unavaiable rooms
    const isFound = [];
  }

  const handleSelectedRooms = (e) => {
    const checked = e.target.checked;
    const roomIdValue = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, roomIdValue]
        : selectedRooms.filter((roomId) => roomId !== roomIdValue)
    );
  };

  const handleReserveRoom = () => {
    //to reserve avaiable dates and after clicking removing those dates from avaiable dates
  };

  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpenModal(false)}
        />
        <span>Select your rooms:</span>
        {data.map((item) => (
          <div className="rItem">
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDescription">{item.desc}</div>
              <div className="rMax">
                {" "}
                Max people <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">${item.price}</div>
            </div>

            {item.roomNumbers.map((roomNumber) => (
              <div className="room">
                <label>{roomNumber.number}</label>
                <input
                  type="checkbox"
                  value={roomNumber._id}
                  onChange={handleSelectedRooms}
                />
              </div>
            ))}
          </div>
        ))}
        <button onClick={handleReserveRoom} className="rButtons">
          Reserve now!
        </button>
      </div>
    </div>
  );
}

export default Reserve;
