import { BiUpArrowAlt } from "react-icons/bi";
import "./index.scss";
import TripleCharts from "../../components/Triple-charts/Chart";

export const Card = ({
  chartNumber,
  percentage,
  chartColor,
  data,
  className,
}) => {
  return (
    <div className={`card3 ${className}`}>
      <div className="left">
        <p className="text">CHART TITLE</p>
        <p className="numbers">{chartNumber}</p>
        <p className="percent">
          <span>
            <BiUpArrowAlt />
          </span>
          {percentage}% Since yesterday
        </p>
      </div>
      <div className="right">
        <TripleCharts chartColor={chartColor} data={data} />
      </div>
    </div>
  );
};
