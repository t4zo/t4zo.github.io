import { create } from 'zustand'
import { Contact } from 'types/contact.type';

type ContactStoreState = {
  contact: Contact;
  name: string;
  email: string;
  message: string;
  setContact(contact: Contact): void;
  setName(name: string): void;
  setEmail(email: string): void;
  setMessage(message: string): void;
}

export const useContactStore = create<ContactStoreState>(set => ({
  contact: {
    name: '',
    email: '',
    message: '',
  },
  name: '',
  email: '',
  message: '',
  setContact: (contact: Contact) => set(_ => ({ contact })),
  setName: (name: string) => set(_ => ({ name })),
  setEmail: (email: string) => set(_ => ({ email })),
  setMessage: (message: string) => set(_ => ({ message })),
}))