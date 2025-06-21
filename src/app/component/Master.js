"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "next/navigation";
import GameSelectModal from "./GameSelectModal";

const Master = ({ children }) => {
  const params = useParams();

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const hasShownModal = localStorage.getItem("gameModalShown");

    if (!hasShownModal) {
      setModalOpen(true);
      localStorage.setItem("gameModalShown", "true");
    }
  }, []);

  const handleGameSelect = (game) => {
    console.log("Selected Game:", game);
    // Do something with game
    setModalOpen(false);
  };

  return (
    <div>
      <Header />
      <div className="pt-28 md:my-5 min-h-[44.5vh]">{children}</div>
      <Footer />

      {/* Game Modal - only shows once */}
      <GameSelectModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSelect={handleGameSelect}
      />
    </div>
  );
};

export default Master;
