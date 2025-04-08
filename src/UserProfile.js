import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from './AuthContext';
import AddressForm from './AddressForm';
import { toast } from 'react-toastify';

const ProfileContainer = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
`;

const ProfileHeader = styled.div`
  margin-bottom: 30px;
`;

const ProfileTitle = styled.h1`
  font-size: 2.2rem;
  color: #f8f9fa;
  margin-bottom: 10px;
`;

const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid #333;
  margin-bottom: 30px;
`;

const Tab = styled.button`
  padding: 12px 20px;
  background-color: ${props => props.active ? '#252525' : 'transparent'};
  color: ${props => props.active ? '#f8f9fa' : '#adb5bd'};
  border: none;
  border-bottom: 2px solid ${props => props.active ? '#e63946' : 'transparent'};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 10px;
  
  &:hover {
    color: #f8f9fa;
  }
`;

const Card = styled.div`
  background-color: #252525;
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #f8f9fa;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #e63946;
    margin-top: 8px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #f8f9fa;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #333;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #333;
  color: #f8f9fa;
  
  &:focus {
    outline: none;
    border-color: #e63946;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #e63946;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #c1121f;
  }
`;

const LogoutButton = styled(Button)`
  background-color: #6c757d;
  
  &:hover {
    background-color: #5a6268;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const AddressesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const AddressCard = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  border: 1px solid ${props => props.isDefault ? '#e63946' : '#444'};
`;

const AddressName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #f8f9fa;
`;

const AddressText = styled.p`
  color: #adb5bd;
  margin-bottom: 5px;
  line-height: 1.5;
`;

const AddressDefault = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #e63946;
  color: white;
  padding: 3px 8px;
  font-size: 0.7rem;
  border-radius: 4px;
`;

const AddressActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
  gap: 10px;
`;

const ActionButton = styled.button`
  padding: 8px 12px;
  background-color: ${props => props.danger ? '#dc3545' : '#6c757d'};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.danger ? '#c82333' : '#5a6268'};
  }
`;

const AddButton = styled(Button)`
  margin-bottom: 20px;
`;

const UserProfile = () => {
    const { currentUser, updateUserProfile, logout, addAddress, updateAddress, removeAddress } = useAuth();
    const navigate = useNavigate();
    
    const [activeTab, setActiveTab] = useState('profile');
    const [profileData, setProfileData] = useState({
        firstName: currentUser?.firstName || '',
        lastName: currentUser?.lastName || '',
        email: currentUser?.email || '',
        phone: currentUser?.phone || ''
    });
    
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [editingAddress, setEditingAddress] = useState(null);
    
    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleProfileSubmit = (e) => {
        e.preventDefault();
        updateUserProfile(profileData);
        toast.success('Perfil atualizado com sucesso!');
    };
    
    const handleLogout = () => {
        logout();
        navigate('/');
        toast.info('Você saiu da sua conta.');
    };
    
    const handleSaveAddress = (addressData) => {
        if (editingAddress) {
            updateAddress(editingAddress.id, addressData);
            toast.success('Endereço atualizado com sucesso!');
        } else {
            addAddress(addressData);
            toast.success('Endereço adicionado com sucesso!');
        }
        setShowAddressForm(false);
        setEditingAddress(null);
    };
    
    const handleEditAddress = (address) => {
        setEditingAddress(address);
        setShowAddressForm(true);
    };
    
    const handleDeleteAddress = (addressId) => {
        removeAddress(addressId);
        toast.info('Endereço removido.');
    };

    return (
        <ProfileContainer>
            <ProfileHeader>
                <ProfileTitle>Minha Conta</ProfileTitle>
            </ProfileHeader>
            
            <Tabs>
                <Tab 
                    active={activeTab === 'profile'} 
                    onClick={() => setActiveTab('profile')}
                >
                    Meu Perfil
                </Tab>
                <Tab 
                    active={activeTab === 'addresses'} 
                    onClick={() => setActiveTab('addresses')}
                >
                    Meus Endereços
                </Tab>
                <Tab 
                    active={activeTab === 'orders'} 
                    onClick={() => setActiveTab('orders')}
                >
                    Meus Pedidos
                </Tab>
            </Tabs>
            
            {activeTab === 'profile' && (
                <Card>
                    <CardTitle>Informações Pessoais</CardTitle>
                    
                    <form onSubmit={handleProfileSubmit}>
                        <FormRow>
                            <FormGroup>
                                <Label htmlFor="firstName">Nome</Label>
                                <Input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={profileData.firstName}
                                    onChange={handleProfileChange}
                                />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label htmlFor="lastName">Sobrenome</Label>
                                <Input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={profileData.lastName}
                                    onChange={handleProfileChange}
                                />
                            </FormGroup>
                        </FormRow>
                        
                        <FormGroup>
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                value={profileData.email}
                                onChange={handleProfileChange}
                                disabled
                            />
                        </FormGroup>
                        
                        <FormGroup>
                            <Label htmlFor="phone">Telefone</Label>
                            <Input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={profileData.phone}
                                onChange={handleProfileChange}
                            />
                        </FormGroup>
                        
                        <ButtonContainer>
                            <Button type="submit">Salvar Alterações</Button>
                            <LogoutButton type="button" onClick={handleLogout}>
                                Sair da Conta
                            </LogoutButton>
                        </ButtonContainer>
                    </form>
                </Card>
            )}
            
            {activeTab === 'addresses' && (
                <div>
                    <Card>
                        <CardTitle>Meus Endereços</CardTitle>
                        
                        {!showAddressForm && (
                            <AddButton 
                                onClick={() => {
                                    setEditingAddress(null);
                                    setShowAddressForm(true);
                                }}
                            >
                                Adicionar Novo Endereço
                            </AddButton>
                        )}
                        
                        {showAddressForm && (
                            <AddressForm 
                                address={editingAddress}
                                onSave={handleSaveAddress}
                                onCancel={() => {
                                    setShowAddressForm(false);
                                    setEditingAddress(null);
                                }}
                            />
                        )}
                        
                        {!showAddressForm && (
                            <AddressesContainer>
                                {currentUser?.addresses?.length > 0 ? (
                                    currentUser.addresses.map(address => (
                                        <AddressCard key={address.id} isDefault={address.isDefault}>
                                            {address.isDefault && <AddressDefault>Principal</AddressDefault>}
                                            <AddressName>{address.addressName}</AddressName>
                                            <AddressText>
                                                {address.street}, {address.number}
                                                {address.complement && `, ${address.complement}`}
                                            </AddressText>
                                            <AddressText>
                                                {address.neighborhood}
                                            </AddressText>
                                            <AddressText>
                                                {address.city} - {address.state}, {address.zipCode}
                                            </AddressText>
                                            
                                            <AddressActions>
                                                <ActionButton 
                                                    onClick={() => handleEditAddress(address)}
                                                >
                                                    Editar
                                                </ActionButton>
                                                <ActionButton 
                                                    danger
                                                    onClick={() => handleDeleteAddress(address.id)}
                                                >
                                                    Excluir
                                                </ActionButton>
                                            </AddressActions>
                                        </AddressCard>
                                    ))
                                ) : (
                                    <p style={{ color: '#adb5bd' }}>Você ainda não possui endereços cadastrados.</p>
                                )}
                            </AddressesContainer>
                        )}
                    </Card>
                </div>
            )}
            
            {activeTab === 'orders' && (
                <Card>
                    <CardTitle>Meus Pedidos</CardTitle>
                    <p style={{ color: '#adb5bd' }}>Você ainda não possui pedidos.</p>
                </Card>
            )}
        </ProfileContainer>
    );
};

export default UserProfile;
