import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Copy,
  Check,
} from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import CardSection from "./CardSection";
import toast from "react-hot-toast";
import { saveWishToFirebase, generateShareableLink } from "../lib/wishService";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    selectedCardId: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedLink, setGeneratedLink] = useState("");
  const [linkCopied, setLinkCopied] = useState(false);

  const handleImageSelect = (cardId) => {
    setFormData({ ...formData, selectedCardId: cardId });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.selectedCardId) {
      toast.error("Please select a card design!");
      return;
    }

    if (!formData.name.trim() || !formData.message.trim()) {
      toast.error("Please fill in all fields!");
      return;
    }

    setIsSubmitting(true);

    try {
      // Save wish data to Firebase
      const wishId = await saveWishToFirebase({
        name: formData.name.trim(),
        message: formData.message.trim(),
        cardId: formData.selectedCardId,
      });

      // Generate the shareable link
      const shareableLink = generateShareableLink(wishId);

      setGeneratedLink(shareableLink);
      toast.success("Link generated successfully!");
    } catch (error) {
      console.error("Error creating wish:", error);
      toast.error(
        error.message || "Failed to generate link. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink);
      setLinkCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setLinkCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy link");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      message: "",
      selectedCardId: null,
    });
    setGeneratedLink("");
    setLinkCopied(false);
  };
  return (
    <section id="contact" className="pt-34 lg:py-24 px-4 relative mt-15">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Fill the <span className="text-primary">Data</span>
        </h2>

        <div className="grid grid-cols-1 px-4 lg:px-30">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="bg-card rounded-lg p-8 shadow-xs">
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

            <CardSection
              handleImageSelect={handleImageSelect}
              selectedCardId={formData.selectedCardId}
            />

            {!generatedLink ? (
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 mb-7"
                )}
              >
                {isSubmitting
                  ? "Generating Link..."
                  : "Generate Shareable Link"}
                <Send size={16} />
              </button>
            ) : (
              <div className="space-y-4 mb-7">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    🎉 Your shareable link is ready!
                  </h3>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={generatedLink}
                      readOnly
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
                    />
                    <button
                      type="button"
                      onClick={copyToClipboard}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2"
                    >
                      {linkCopied ? <Check size={16} /> : <Copy size={16} />}
                      {linkCopied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <p className="text-sm text-green-600 mt-2">
                    Share this link with anyone to show them your personalized
                    birthday wish!
                  </p>
                </div>
                <button
                  type="button"
                  onClick={resetForm}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                >
                  Create Another Link
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
