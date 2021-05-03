import * as React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react';
import Files, { File } from '.';

describe('Testing Files', () => {

    test('should be rendered',  async () => {
        await act( async () => render(<Files />));
        const button = screen.getByText("Sort Z-A");
        expect(button.textContent).toBe("Sort Z-A")
      });

    test('Sort Event',  async () => {
        await act( async () => render(<Files />));
        const button = screen.getByText("Sort Z-A");
        fireEvent.click(button);
        expect(button.textContent).toBe("Sort A-Z")
    })

});
describe('Testing File', () => {

    test('should be rendered',  async () => {
        const file =  {
            id: 'the-file-id-1',
            versions: [
              { id: 1, name: 'prueba.txt' },
            ],
          };
    
        render(<File file={file} />);
        const elements = screen.getAllByText(file.versions[0].name);
        expect(elements.length).toBe(2);
    }) 
});
