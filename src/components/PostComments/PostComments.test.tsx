import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test ('Deve acicionar 2 comentarios' , () => {        
        render(<PostComment />)

        const botao = screen.getByTestId('btn-comentar')
        fireEvent.click(botao)

        expect(screen.getAllByTestId('campo-comentario')).toHaveLength(2)
        })        
    })
