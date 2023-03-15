import { ChangeEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./index.css";

function Tracking() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length === 0) {
      setError("");
    } else if (!value.match(/^\d+$/)) {
      setError("Please enter numbers only");
    } else {
      setError("");
    }
    setValue(value);
  };
  const handleClick = () => {
    if (value.length !== 16) {
      return setError("Please enter 16 symbols");
    } else if (!value.match(/^\d+$/)) {
      return setError("Please enter numbers only");
    }

    if (!error) {
      const body = {
        apiKey: "e7df4acb5b2b8512c189a4d185780f9f",
        modelName: "TrackingDocument",
        calledMethod: "getStatusDocuments",
        methodProperties: {
          Documents: [
            {
              DocumentNumber: value ? value : "59000941816430",
              // Phone: "380939480841", *option
            },
          ],
        },
      };
      fetch("https://api.novaposhta.ua/v2.0/json/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    }
  };
  return (
    <div className="wrapper">
      <div className="content-container">
        <div className="input-area">
          <div className="input">
            <TextField
              id="outlined-search"
              fullWidth
              label="Введіть номер накладної"
              size="small"
              type="search"
              value={value}
              onChange={handleChangeInput}
              error={Boolean(error)}
            />
            {error ? <span style={{ color: "#d32f2f" }}>{error}</span> : null}
          </div>

          <div className="button">
            <Button fullWidth variant="contained" onClick={handleClick}>
              get status
            </Button>
          </div>
        </div>
        <div className="details">
          <span className="details-item">статус</span>
          <span className="details-item">відправлено</span>
          <span className="details-item">одержано</span>
        </div>
      </div>
      <div className="history-wrapper">
        <div className="history">
          <h3>Історія</h3>
          <span className="history-item">12233234454543</span>
          <span className="history-item">32233234454543</span>
          <span className="history-item">12233234454543</span>
          <span className="history-item">222332344545431</span>
        </div>
      </div>
    </div>
  );
}
export default Tracking;
