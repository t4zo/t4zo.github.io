import { Contact } from 'types/contact.type';
import { create } from 'zustand';

type ContactStoreState = {
  contact: Contact;
  setContact(contact: Contact): void;
}

export const useContactStore = create<ContactStoreState>(set => ({
  contact: {
    name: '',
    email: '',
    message: '',
  },
  setContact: (contact: Contact) => set(_ => ({ contact })),
}))