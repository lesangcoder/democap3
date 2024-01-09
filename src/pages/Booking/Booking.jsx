import React, { Component } from "react";
import SeatInfo from "./SeatInfo";
import SeatRow from "./SeatRow";
import "./Style-Booking.css";
import danhSachGheData from "./danhSachGhe.json";

class Booking extends Component {
  renderSeatLayout = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <SeatRow hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="py-20">
        <div className="flex w-full container">
          <div className="pl-64 w-3/4">
            <h3 className="m-0 p-0 text-3xl font-bold text-center"> ĐẶT VÉ XEM PHIM</h3>
            <p className="text-center">
              Vui Lòng chọn ghế theo sơ đồ sau:
            </p>
            <br />
            <br />
            <h5 className="text-center text-3xl font-bold">MÀN HÌNH</h5>
            <div className="screen"></div>
            <div className="text-left fs-ghe">
              {this.renderSeatLayout()}
            </div>
            <div className="mt-3 text-left">
              <ul className="mt-5 confirmSeat">
                <li>
                  <button className="gheDuocChon align-middle" id="resSeat"></button>
                  <span>Ghế đã chọn</span>
                </li>
                <li>
                  <button className="gheDangChon align-middle bg-blue-500" id="seleSeat"></button>
                  <span>Ghế bạn chọn</span>
                </li>
                <li>
                  <button className="gheTrong align-middle" id="empSeat"></button>
                  <span>Ghế trống </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-38 w-1/4 text-left">
            <SeatInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default Booking;
