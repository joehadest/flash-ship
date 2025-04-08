import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #252525;
  padding: 20px;
  border-radius: 8px;
`;

const FormTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #f8f9fa;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
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

const Select = styled.select`
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

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  
  button:last-child {
    margin-left: 10px;
    background-color: #6c757d;
    
    &:hover {
      background-color: #5a6268;
    }
  }
`;

const AddressForm = ({ address = {}, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        addressName: '',
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
        zipCode: '',
        isDefault: false,
        ...address
    });
    
    useEffect(() => {
        if (address.id) {
            setFormData({
                addressName: '',
                street: '',
                number: '',
                complement: '',
                neighborhood: '',
                city: '',
                state: '',
                zipCode: '',
                isDefault: false,
                ...address
            });
        }
    }, [address]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <FormTitle>{address.id ? 'Editar Endereço' : 'Novo Endereço'}</FormTitle>
                
                <FormGroup>
                    <Label htmlFor="addressName">Nome do Endereço</Label>
                    <Input
                        type="text"
                        id="addressName"
                        name="addressName"
                        value={formData.addressName}
                        onChange={handleChange}
                        placeholder="Ex: Casa, Trabalho"
                        required
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label htmlFor="zipCode">CEP</Label>
                    <Input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        placeholder="00000-000"
                        required
                    />
                </FormGroup>
                
                <FormRow>
                    <FormGroup>
                        <Label htmlFor="street">Rua</Label>
                        <Input
                            type="text"
                            id="street"
                            name="street"
                            value={formData.street}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label htmlFor="number">Número</Label>
                        <Input
                            type="text"
                            id="number"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                </FormRow>
                
                <FormGroup>
                    <Label htmlFor="complement">Complemento</Label>
                    <Input
                        type="text"
                        id="complement"
                        name="complement"
                        value={formData.complement}
                        onChange={handleChange}
                        placeholder="Apto, Bloco, etc (opcional)"
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label htmlFor="neighborhood">Bairro</Label>
                    <Input
                        type="text"
                        id="neighborhood"
                        name="neighborhood"
                        value={formData.neighborhood}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                
                <FormRow>
                    <FormGroup>
                        <Label htmlFor="city">Cidade</Label>
                        <Input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label htmlFor="state">Estado</Label>
                        <Select
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecione...</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </Select>
                    </FormGroup>
                </FormRow>
                
                <FormGroup>
                    <label style={{ display: 'flex', alignItems: 'center', color: '#f8f9fa' }}>
                        <input
                            type="checkbox"
                            name="isDefault"
                            checked={formData.isDefault}
                            onChange={handleChange}
                            style={{ marginRight: '8px' }}
                        />
                        Definir como endereço principal
                    </label>
                </FormGroup>
                
                <ButtonGroup>
                    <Button type="submit">
                        {address.id ? 'Salvar Alterações' : 'Adicionar Endereço'}
                    </Button>
                    {onCancel && (
                        <Button type="button" onClick={onCancel}>
                            Cancelar
                        </Button>
                    )}
                </ButtonGroup>
            </Form>
        </FormContainer>
    );
};

export default AddressForm;
