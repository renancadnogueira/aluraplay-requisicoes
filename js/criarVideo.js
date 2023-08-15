import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    evento.preventDefault(); //Prevenir a ação de carregamento

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();
    try {
        await conectaApi.criaVideo(titulo, descricao, url, imagem);

        window.location.href = "../pages/envio-concluido.html";
    } catch (e) {
        alert(e); // pega a mensagem do throw e imprime esse alerta
    }
}

formulario.addEventListener("submit", evento => criarVideo(evento));