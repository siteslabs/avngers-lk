import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { pieChart, areasplineChart, columnChart } from "./data";

const Statistics: React.FC = (): JSX.Element => {
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={pieChart} />
      <HighchartsReact highcharts={Highcharts} options={areasplineChart} />
      <HighchartsReact highcharts={Highcharts} options={columnChart} />
    </>
  );
};

export default Statistics;
