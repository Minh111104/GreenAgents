import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import axios from "../lib/api";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    axios.get("/spots").then(res => setSpots(res.data));
  }, []);

  return (
    <div className="h-screen w-screen">
      <Map spots={spots} />
    </div>
  );
}
