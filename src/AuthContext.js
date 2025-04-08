import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Verificar se há um usuário salvo no localStorage
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            setCurrentUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    // Salvar usuário no localStorage sempre que mudar
    useEffect(() => {
        if (currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        } else {
            localStorage.removeItem('currentUser');
        }
    }, [currentUser]);

    const register = (userData) => {
        // Simulando um registro - em um app real, isso seria uma chamada de API
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        // Verificar se o e-mail já está em uso
        const existingUser = users.find(user => user.email === userData.email);
        if (existingUser) {
            throw new Error('E-mail já está sendo utilizado');
        }
        
        // Criar novo usuário com ID único
        const newUser = {
            ...userData,
            id: Date.now().toString(),
            addresses: [],
            createdAt: new Date().toISOString()
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        setCurrentUser(newUser);
        
        return newUser;
    };

    const login = (email, password) => {
        // Simulando um login - em um app real, isso seria uma chamada de API
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        
        if (!user) {
            throw new Error('E-mail ou senha incorretos');
        }
        
        setCurrentUser(user);
        return user;
    };

    const logout = () => {
        setCurrentUser(null);
    };

    const updateUserProfile = (userData) => {
        // Atualizar no array de usuários
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const updatedUsers = users.map(user => {
            if (user.id === currentUser.id) {
                return { ...user, ...userData };
            }
            return user;
        });
        
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        
        // Atualizar usuário atual
        setCurrentUser({ ...currentUser, ...userData });
    };

    const addAddress = (address) => {
        const newAddress = {
            ...address,
            id: Date.now().toString()
        };
        
        const updatedAddresses = [...(currentUser.addresses || []), newAddress];
        updateUserProfile({ addresses: updatedAddresses });
        
        return newAddress;
    };

    const updateAddress = (addressId, addressData) => {
        const updatedAddresses = currentUser.addresses.map(addr => {
            if (addr.id === addressId) {
                return { ...addr, ...addressData };
            }
            return addr;
        });
        
        updateUserProfile({ addresses: updatedAddresses });
    };

    const removeAddress = (addressId) => {
        const updatedAddresses = currentUser.addresses.filter(addr => addr.id !== addressId);
        updateUserProfile({ addresses: updatedAddresses });
    };

    const value = {
        currentUser,
        loading,
        register,
        login,
        logout,
        updateUserProfile,
        addAddress,
        updateAddress,
        removeAddress
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
