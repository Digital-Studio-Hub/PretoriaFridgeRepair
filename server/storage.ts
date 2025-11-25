// This website doesn't require database storage
// All data is static content served from the frontend
// Contact form submissions are sent via email through ZeptoMail

export interface IStorage {
  // No storage operations needed for this static website
}

export class MemStorage implements IStorage {
  constructor() {
    // No initialization needed
  }
}

export const storage = new MemStorage();
