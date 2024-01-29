import { render } from '@testing-library/react';
import Contact from './index';

describe('Contact Page', () => {
  describe('Form inputs', () => {
    it('should render name input', () => {
      const { getByPlaceholderText } = render(<Contact />);
    
      expect(getByPlaceholderText('Nome')).toBeInTheDocument();
    });
    
    it('should render email input', () => {
      const { getByPlaceholderText } = render(<Contact />);
    
      expect(getByPlaceholderText('Email')).toBeInTheDocument();
    });
    
    it('should render message input', () => {
      const { getByPlaceholderText } = render(<Contact />);
    
      expect(getByPlaceholderText('Mensagem')).toBeInTheDocument();
    });
  });
});
