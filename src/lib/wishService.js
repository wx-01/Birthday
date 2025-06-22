import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

// Collection name in Firestore
const WISHES_COLLECTION = "Wishes";

/**
 * Save wish data to Firebase
 * @param {Object} wishData - The wish data to save
 * @param {string} wishData.name - Recipient's name
 * @param {string} wishData.message - The wish message
 * @param {number} wishData.cardId - Selected card ID
 * @returns {Promise<string>} - The document ID
 */
export const saveWishToFirebase = async (wishData) => {
  try {
    const docRef = await addDoc(collection(db, WISHES_COLLECTION), {
      ...wishData,
      createdAt: new Date(),
      views: 0, // Track how many times the wish has been viewed
    });

    console.log("Wish saved with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error saving wish: ", error);
    throw new Error("Failed to save wish. Please try again.");
  }
};

/**
 * Get wish data from Firebase by ID
 * @param {string} wishId - The document ID
 * @returns {Promise<Object|null>} - The wish data or null if not found
 */
export const getWishFromFirebase = async (wishId) => {
  try {
    const docRef = doc(db, WISHES_COLLECTION, wishId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();

      // Optionally increment view count
      // You can uncomment this if you want to track views
      // await updateDoc(docRef, {
      //   views: (data.views || 0) + 1
      // });

      return {
        id: docSnap.id,
        ...data,
      };
    } else {
      console.log("No such wish found!");
      return null;
    }
  } catch (error) {
    console.error("Error getting wish: ", error);
    throw new Error("Failed to load wish. Please check the link.");
  }
};

/**
 * Generate a shareable link for a wish
 * @param {string} wishId - The document ID
 * @returns {string} - The shareable URL
 */
export const generateShareableLink = (wishId) => {
  const baseUrl = window.location.origin;
  return `${baseUrl}/shared-wish/${wishId}`;
};
