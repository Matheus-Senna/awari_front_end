const posts = [
    {
        title:"O que são forças intermoleculares?",
        content: "Forças intermoleculares são forças de natureza elétrica existentes nas interações intermoleculares. Tais interações são responsáveis por propriedades físicas das substâncias, como o ponto de ebulição, e são mais fracas que as forças intramoleculares, também conhecidas como ligações químicas."
    },
    {
        title:"Interações Iônicas",
        content: "São interações eletrostáticas fortes que ocorrem entre um cátion e um ânion. Esse tipo de interação é predominante em compostos iônicos, como em sais inorgânicos (como NaCl) e orgânicos (como no CH3COONa, acetato de sódio). Matematicamente, essa interação pode ser descrita pela lei de Coulomb."
    },
    {
        title:"Ligação dipolo-dipolo",
        content: "Essa modalidade de interação ocorre entre moléculas polares. Tais moléculas apresentam, por consequência das diferenças de eletronegatividades dos átomos presentes, um dipolo elétrico permanente, com uma de carga parcial positiva (δ+) e uma carga parcial negativa (δ–)."
    }
];

const wrapper = document.getElementById('posts');

for (var i = 0; i < posts.length; i ++) {
    const postData = posts[i];
    console.log(postData);

    const article = document.createElement('article');
    article.classList.add('article');

    const title = document.createElement('h2');
    title.classList.add('article-title');
    const titleText = document.createTextNode(postData.title);
    title.appendChild(titleText)
    article.appendChild(title);

    const content = document.createElement('p');
    const contentText = document.createTextNode(postData.content)
    content.appendChild(contentText);
    article.appendChild(content);

    wrapper.appendChild(article);
}