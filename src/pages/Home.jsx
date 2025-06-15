import Spline from "@splinetool/react-spline";
import React from "react";
import Hero from "../components/Hero";
import Form from "../components/Form";


const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <Spline scene="https://prod.spline.design/aghu3MMtgk-8grMu/scene.splinecode" />
      </div>
      {/* main content */}
      <main>
       <Hero />
       <Form />
      </main>
    </div>
  );
};

export default Home;
