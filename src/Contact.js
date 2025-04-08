import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Adicionando os imports necessários para o Leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Corrigindo o problema de ícones do Leaflet em React
// Isso é necessário porque o webpack processa os arquivos de forma diferente
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 15px;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  background-color: #1c1c1c;
  color: #f8f9fa;
  
  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const ContactTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: #f8f9fa;
`;

const ContactSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #adb5bd;
  margin-bottom: 40px;
`;

const ContactLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
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
  background-color: #252525;
  color: #f8f9fa;
  
  &:focus {
    outline: none;
    border-color: #e63946;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #333;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  background-color: #252525;
  color: #f8f9fa;
  
  &:focus {
    outline: none;
    border-color: #e63946;
  }
`;

const SubmitButton = styled.button`
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
  
  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InfoBlock = styled.div`
  display: flex;
  align-items: flex-start;
`;

const InfoIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 15px;
  color: #e63946;
`;

const InfoContent = styled.div``;

const InfoTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #f8f9fa;
`;

const InfoText = styled.p`
  color: #adb5bd;
  line-height: 1.5;
`;

// Estilizando o container do mapa
const MapContainer2 = styled.div`
  margin-top: 40px;
  border-radius: 8px;
  overflow: hidden;
  height: 400px;
  grid-column: 1 / -1;
  border: 1px solid #333;

  /* Estilos para o mapa real do Leaflet */
  .leaflet-container {
    height: 100%;
    width: 100%;
  }
`;

const SuccessMessage = styled.div`
  background-color: #1e4620;
  color: #a3cfbb;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  border: 1px solid #2a623d;
`;

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mapLoaded, setMapLoaded] = useState(false);

    // Localização da empresa (exemplo: Av. Paulista, São Paulo)
    const position = [-23.5632, -46.6542];

    // Verificar se estamos no navegador antes de renderizar o mapa
    useEffect(() => {
        setMapLoaded(true);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulando envio de mensagem
        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccess(true);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            // Ocultar mensagem de sucesso após 5 segundos
            setTimeout(() => {
                setShowSuccess(false);
            }, 5000);
        }, 1500);
    };

    return (
        <ContactContainer>
            <ContactTitle>Entre em Contato</ContactTitle>
            <ContactSubtitle>
                Estamos aqui para ajudar. Envie sua mensagem e responderemos o mais breve possível.
            </ContactSubtitle>

            <ContactLayout>
                <ContactForm onSubmit={handleSubmit}>
                    {showSuccess && (
                        <SuccessMessage>
                            Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.
                        </SuccessMessage>
                    )}

                    <FormGroup>
                        <Label htmlFor="name">Nome</Label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>

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
                        <Label htmlFor="subject">Assunto</Label>
                        <Input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="message">Mensagem</Label>
                        <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>

                    <SubmitButton type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                    </SubmitButton>
                </ContactForm>

                <ContactInfo>
                    <InfoBlock>
                        <InfoIcon>📍</InfoIcon>
                        <InfoContent>
                            <InfoTitle>Endereço</InfoTitle>
                            <InfoText>
                                Av. Paulista, 1000<br />
                                Bela Vista, São Paulo - SP<br />
                                CEP: 01310-100
                            </InfoText>
                        </InfoContent>
                    </InfoBlock>

                    <InfoBlock>
                        <InfoIcon>📞</InfoIcon>
                        <InfoContent>
                            <InfoTitle>Telefone</InfoTitle>
                            <InfoText>
                                +55 (11) 1234-5678<br />
                                +55 (11) 8765-4321
                            </InfoText>
                        </InfoContent>
                    </InfoBlock>

                    <InfoBlock>
                        <InfoIcon>📧</InfoIcon>
                        <InfoContent>
                            <InfoTitle>E-mail</InfoTitle>
                            <InfoText>
                                contato@shippin.com<br />
                                suporte@shippin.com
                            </InfoText>
                        </InfoContent>
                    </InfoBlock>

                    <InfoBlock>
                        <InfoIcon>⏰</InfoIcon>
                        <InfoContent>
                            <InfoTitle>Horário de Atendimento</InfoTitle>
                            <InfoText>
                                Segunda a Sexta: 9h às 18h<br />
                                Sábado: 9h às 13h
                            </InfoText>
                        </InfoContent>
                    </InfoBlock>
                </ContactInfo>

                <MapContainer2>
                    {mapLoaded && (
                        <MapContainer 
                            center={position} 
                            zoom={15} 
                            style={{ height: '100%', width: '100%' }}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                                <Popup>
                                    Shippin<br />
                                    Av. Paulista, 1000<br />
                                    Bela Vista, São Paulo - SP
                                </Popup>
                            </Marker>
                        </MapContainer>
                    )}
                </MapContainer2>
            </ContactLayout>
        </ContactContainer>
    );
};

export default Contact;
