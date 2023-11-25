const apiKey = 'TuClaveDeAcceso';
const apiUrl = 'https://api.thedogapi.com/v1/images/search';

async function fetchDogImage() {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
    });

    if (!response.ok) {
      throw new Error('Error al obtener la imagen del perro');
    }

    const data = await response.json();
    const imageUrl = data[0].url;

    
    document.getElementById('dogImage').src = imageUrl;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Llama a la función cuando la página se carga inicialmente
window.onload = fetchDogImage;
