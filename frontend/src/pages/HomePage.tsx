import ReceivePage from "./ReceivePage";
import SendPage from "./SendPage";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="card w-96">
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          Send files, folders, or text to host machine
        </h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => navigate("/send")}>
            Send!
          </button>
        </div>
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          Receive files, folders, or text to host machine
        </h2>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/receive")}
          >
            Receive!
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
