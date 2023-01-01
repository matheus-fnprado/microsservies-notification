import { Content } from "./content";
import { Notification } from "./notification";

describe('Notification', () =>{
    test('Deve ser possível criar uma notificação', () =>{
        const notification = new Notification({
            content: new Content('Solicitação de amizade'),
            category: 'social',
            recipientId: 'id-exemplo',
        });
    
        expect(notification).toBeTruthy();
    });
})