import DetailView from "../views/DetailView";
import Model from "../models/DetailModel";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DetailController = () => {
  const [coin, setCoin] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    Model.getCoinDetails(id).then((data) => setCoin(data));
  }, []);

  const model = new Model(coin);

  return <DetailView model={model} />;
};

export default DetailController;
