import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import CardSection from "./CardSection";



const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
console.log(formData)
    setIsSubmitting(true);
  };
  return (
    <section id="contact" className="pt-34 lg:py-24 px-4 relative mt-15">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Fill the <span className="text-primary">Data</span>
        </h2>
        

        <div className="grid grid-cols-1 px-4 lg:px-30">
          <form className="space-y-6">
          <div
            className="bg-card rounded-lg p-8 shadow-xs"
            onSubmit={handleSubmit}
          >
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">
          Then Share them the Generated Link 😊
        </p>

            
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Their Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Zayn Malik..."
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Wishing Msg
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="What would u like to talk about??.."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
          </div>

          <CardSection handleImageselect={() => console.log("Image selected")} />
           <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 mb-7",
                )}
              >
                {isSubmitting ? "Generating Link..." : "Send Message"}
                <Send size={16} />
              </button>
           </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
