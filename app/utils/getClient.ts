import PicoSanity from "picosanity";
import { sanityConfig } from "./sanityConfig";

// Standard client for fetching data
export const sanityClient = new PicoSanity(sanityConfig);

// Authenticated client for fetching draft documents
export const previewClient = new PicoSanity({
	...sanityConfig,
	token: process.env.SANITY_API_TOKEN ?? ``,
});

// Helper function to choose the correct client
export const getClient = (usePreview = false) =>
	usePreview ? previewClient : sanityClient;