import React, { useState, useEffect } from "react";
import { shortenAddress } from "../Utils/index";

const UpdateAddress = ({
  detail,
  currency,
  setOpenUpdateAddress,
  UPDATE_TOKEN,
  ERC20,
  setLoader,
}) => {
  const [address, setAddress] = useState("");
  const [tokenDetails, setTokenDetails] = useState(null);
  const [transferToken, setTransferToken] = useState("");

  useEffect(() => {
    if (transferToken) {
      const loadToken = async () => {
        try {
          setLoader(true);
          const token = await ERC20(transferToken);
          if (!token) {
            console.log(
              "Invalid token address. Please provide a valid address."
            );
          } else {
            setTokenDetails(token);
            console.log("Token Details:", token);
          }
        } catch (error) {
          console.error("Error loading token details:", error);
        } finally {
          setLoader(false);
        }
      };
      loadToken();
    }
  }, [transferToken]);

  return (
    <section className="new-margin ico-contactpos-rel">
      <div className="container">
        <div className="ico-contact__wrap">
          <h2 className="title">
            Update Token Address
            <strong onClick={() => setOpenUpdateAddress(false)}> X</strong>
          </h2>
          <div>
            <div className="row">
              <div className="col-lg-12">
                {tokenDetails?.name ? (
                  <input
                    type="text"
                    value={`Name ${tokenDetails?.name} Balance: ${tokenDetails?.balance} ${tokenDetails?.symbol}`}
                    readOnly
                  />
                ) : (
                  <input
                    type="text"
                    placeholder="_tokenAddress"
                    onChange={(e) => {
                      setAddress(e.target.value);
                      setTransferToken(e.target.value);
                    }}
                  />
                )}
              </div>

              <p>
                <strong>Current Price: </strong>
                {detail?.tokenPrice || "N/A"} {currency || "N/A"} &nbsp; &nbsp;{" "}
                <strong>Token Balance: </strong>
                {detail?.tokenBal || "N/A"} {detail?.symbol || ""} &nbsp; &nbsp;{" "}
                <strong
                  onClick={() =>
                    detail?.tokenAddr &&
                    navigator.clipboard.writeText(detail?.tokenAddr)
                  }
                >
                  Current Address:
                </strong>{" "}
                {detail?.tokenAddr ? shortenAddress(detail?.tokenAddr) : "N/A"}
              </p>

              <div className="ico-contract__btn text-center mt-10">
                <button
                  onClick={() => UPDATE_TOKEN(address)}
                  className="thm-btn"
                >
                  UPDATE ADDRESS
                </button>
              </div>
            </div>
          </div>
          <div className="ico-contact__shape-img">
            <div className="shape shape--1">
              <div className="">
                <img src="assets/img/shape/c_shape1.png" alt="" />
              </div>
            </div>
            <div className="shape shape--2">
              <div className="">
                <img src="assets/img/shape/c_shape2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ico-contact__shape">
        <div className="shape shape--1">
          <img src="assets/img/shape/c_shape1.png" alt="" />
        </div>
        <div className="shape shape--2">
          <img src="assets/img/shape/c_shape2.png" alt="" />
        </div>
        <div className="shape shape--3">
          <img src="assets/img/shape/c_shape3.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default UpdateAddress;
