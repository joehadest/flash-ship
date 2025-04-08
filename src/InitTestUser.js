import { useEffect } from 'react';
import { toast } from 'react-toastify';

// Função que cria um usuário de teste caso não exista
const InitTestUser = () => {
    useEffect(() => {
        // Verifica se já existe usuário de teste
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const testUserExists = users.some(user => user.email === 'teste@exemplo.com');
        
        if (!testUserExists) {
            // Criar usuário de teste
            const testUser = {
                id: 'test-user-1',
                firstName: 'Usuário',
                lastName: 'Teste',
                email: 'teste@exemplo.com',
                password: '123456',
                phone: '(11) 98765-4321',
                addresses: [
                    {
                        id: 'address-1',
                        addressName: 'Casa',
                        street: 'Av. Paulista',
                        number: '1000',
                        complement: 'Apto 123',
                        neighborhood: 'Bela Vista',
                        city: 'São Paulo',
                        state: 'SP',
                        zipCode: '01310-100',
                        isDefault: true
                    }
                ],
                createdAt: new Date().toISOString()
            };
            
            users.push(testUser);
            localStorage.setItem('users', JSON.stringify(users));
            
            // Notificar que o usuário de teste foi criado
            toast.info(
                <div>
                    <p><strong>Usuário de teste criado!</strong></p>
                    <p>Email: teste@exemplo.com</p>
                    <p>Senha: 123456</p>
                </div>, 
                {
                    autoClose: 8000,
                    position: "top-center"
                }
            );
        }
    }, []);

    // Este componente não renderiza nada
    return null;
};

export default InitTestUser;
