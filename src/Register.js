import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from './AuthContext';
import { toast } from 'react-toastify';

const RegisterContainer = styled.div`
  max-width: 500px;
  margin: 60px auto;
  padding: 30px;
  background-color: #252525;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 30px;
  color: #f8f9fa;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media (max-width: 600px) {
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
  width: 100%;
  padding: 12px;
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
  
  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`;

const LinkText = styled.p`
  text-align: center;
  margin-top: 20px;
  color: #adb5bd;
  
  a {
    color: #e63946;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ErrorMessage = styled.div`
  color: #e63946;
  margin-bottom: 15px;
  font-size: 0.9rem;
`;

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: ''
    });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        // Validações
        if (formData.password !== formData.confirmPassword) {
            setError('As senhas não coincidem');
            return;
        }
        
        if (formData.password.length < 6) {
            setError('A senha deve ter pelo menos 6 caracteres');
            return;
        }
        
        setIsSubmitting(true);
        
        try {
            await register({
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password,
                phone: formData.phone
            });
            
            toast.success('Conta criada com sucesso!');
            navigate('/profile');
        } catch (error) {
            setError(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <RegisterContainer>
            <Title>Criar Conta</Title>
            
            <Form onSubmit={handleSubmit}>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                
                <FormRow>
                    <FormGroup>
                        <Label htmlFor="firstName">Nome</Label>
                        <Input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label htmlFor="lastName">Sobrenome</Label>
                        <Input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                </FormRow>
                
                <FormGroup>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label htmlFor="password">Senha</Label>
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                    <Input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Criando conta...' : 'Criar Conta'}
                </Button>
            </Form>
            
            <LinkText>
                Já possui uma conta? <Link to="/login">Entrar</Link>
            </LinkText>
        </RegisterContainer>
    );
};

export default Register;
