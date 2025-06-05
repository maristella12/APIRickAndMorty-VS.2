/*const characterId = document.getElementById('characterId');
const goButton = document.getElementById('goButton');
const content = document.getElementById('content');
const image = document.getElementById('image');


const fetchApi = (value) => {
const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)

.then((res) => res.json())
.then((data) => {
console.log(data)
return data;
});

return result;

}

goButton.addEventListener('click', async (event) => {
event.preventDefault();
const result = await fetchApi(characterId.value);
content.textContent = `${JSON.stringify(result,undefined,2)}`;
image.src=`${result.image}`;
});
*/

const characterId = document.getElementById('characterId');
const goButton = document.getElementById('goButton');
const content = document.getElementById('content');
const image = document.getElementById('image');

const fetchApi = (value) => {
    return fetch(`https://rickandmortyapi.com/api/character/${value}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Personagem não encontrado.");
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            return data;
        });
}

goButton.addEventListener('click', async (event) => {
    event.preventDefault();

    const id = characterId.value.trim();

    if (id === '') {
        alert('Por favor, digite um número!');
        return;
    }

    try {
        const result = await fetchApi(id);
        content.textContent = JSON.stringify(result, undefined, 2);
        image.src = result.image;
    } catch (error) {
        content.textContent = 'Erro: ' + error.message;
        // Opcional: colocar uma imagem de erro ou restaurar a imagem inicial
        image.src = './assets/Design sem nome (1).png'; 
    }
});
