import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./index.css";

function Tracking() {
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
            />
          </div>
          <div className="button">
            <Button fullWidth variant="contained">
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
