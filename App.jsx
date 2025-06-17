import React from "react";
import Header from "./Header";

export default function AssemblyEndgame() {
  return (
    <main>
      <Header />
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
    </main>
  );
}
