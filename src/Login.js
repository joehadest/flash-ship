import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from './AuthContext';
import { toast } from 'react-toastify';

const LoginContainer = styled.div`
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

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);
        
        try {
            await login(email, password);
            toast.success('Login realizado com sucesso!');
            navigate('/profile');
        } catch (error) {
            setError(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <LoginContainer>
            <Title>Entrar</Title>
            
            <Form onSubmit={handleSubmit}>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                
                <FormGroup>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label htmlFor="password">Senha</Label>
                    <Input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </FormGroup>
                
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Entrando...' : 'Entrar'}
                </Button>
            </Form>
            
            <LinkText>
                Não possui uma conta? <Link to="/register">Registre-se</Link>
            </LinkText>
        </LoginContainer>
    );
};

export default Login;
