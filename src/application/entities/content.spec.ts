import { Content } from "./content"

describe('Notification content', () =>{
    test('Deve ser possível criar o conteúdo de uma notificação', () =>{
        const content = new Content('Você recebeu uma nova notificação');
    
        expect(content).toBeTruthy();
    });
    
    test('Não deve ser possível criar o conteúdo de uma notificação com menos de 5 caracteres', () =>{
        expect(() => new Content('aaa')).toThrow();
    });
    
    test('Não deve ser possível criar o conteúdo de uma notificação com mais de 240 caracteres', () =>{
        expect(() => new Content('a'.repeat(241))).toThrow();
    });
})