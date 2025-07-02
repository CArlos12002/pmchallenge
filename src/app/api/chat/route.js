// src/app/api/chat/route.js (Google Gemini CORREGIDO)
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { message, systemPrompt, temperature, maxTokens } = await request.json();

    console.log('✅ Enviando a Gemini:', message);

    // Construir el prompt completo
    const fullPrompt = `${systemPrompt || 'Eres un asistente útil y amigable. Responde siempre en español de forma clara y natural.'}\n\nUsuario: ${message}\n\nResponde de manera útil y natural:`;

    // URL corregida para Gemini
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GOOGLE_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: fullPrompt
              }
            ]
          }
        ],
        generationConfig: {
          temperature: temperature || 0.7,
          maxOutputTokens: maxTokens || 400,
          topP: 0.9,
          topK: 40
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      }),
    });

    console.log('Status Gemini:', response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error Gemini:', errorData);
      throw new Error(errorData.error?.message || `HTTP ${response.status}: Error en Gemini`);
    }

    const data = await response.json();
    console.log('✅ Respuesta Gemini recibida');

    // Extraer la respuesta
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!aiResponse) {
      throw new Error('No se pudo obtener respuesta de Gemini');
    }

    return NextResponse.json({
      success: true,
      response: aiResponse.trim()
    });

  } catch (error) {
    console.error('❌ Error completo:', error);
    
    // Si Gemini falla, dar una respuesta inteligente
    const fallbackResponse = getFallbackResponse(await request.json());
    
    return NextResponse.json({
      success: true,
      response: `🤖 (Modo offline) ${fallbackResponse}`,
      note: 'Gemini temporalmente no disponible'
    });
  }
}

function getFallbackResponse(requestData) {
  const message = requestData?.message?.toLowerCase() || '';
  
  if (message.includes('hola') || message.includes('hiola')) {
    return '¡Hola! ¿En qué puedo ayudarte hoy?';
  }
  if (message.includes('cómo') && message.includes('está')) {
    return 'Muy bien, gracias por preguntar. ¿Cómo estás tú?';
  }
  if (message.includes('gracias')) {
    return '¡De nada! Siempre es un placer ayudar.';
  }
  return 'Disculpa, tengo problemas para conectarme a Gemini en este momento. ¿Podrías intentar de nuevo?';
}

export async function GET() {
  return NextResponse.json(
    { 
      message: '✅ Gemini Chat API funcionando',
      model: 'gemini-1.5-flash-latest',
      status: 'OK'
    },
    { status: 200 }
  );
}