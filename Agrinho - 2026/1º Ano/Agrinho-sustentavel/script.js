/* =====================================================
   PROJETO: AGROTECH SUSTENTÁVEL

   RUBRICA OBRIGATÓRIA: Complexidade / Dificuldade
   Este arquivo usa JavaScript básico para criar uma
   interação funcional no site.

   O aluno aprende:
   - pegar elementos do HTML;
   - verificar checkbox marcado;
   - somar pontos;
   - usar if / else;
   - alterar texto e estilo na tela.
   ===================================================== */

function calcularSustentabilidade() {

  /* =====================================================
     ETAPA 1 - COMEÇAR A PONTUAÇÃO EM ZERO
     ===================================================== */

  let pontos = 0;

  /* =====================================================
     ETAPA 2 - PEGAR AS OPÇÕES DO HTML
     Cada checkbox representa uma atitude sustentável.
     ===================================================== */

  const agua = document.getElementById("agua");
  const energia = document.getElementById("energia");
  const reciclagem = document.getElementById("reciclagem");
  const arvores = document.getElementById("arvores");

  const resultado = document.getElementById("resultado");

  /* =====================================================
     ETAPA 3 - SOMAR PONTOS
     Cada opção marcada vale 25 pontos.
     Total máximo: 100 pontos.
     ===================================================== */

  if (agua.checked) {
    pontos = pontos + 25;
  }

  if (energia.checked) {
    pontos = pontos + 25;
  }

  if (reciclagem.checked) {
    pontos = pontos + 25;
  }

  if (arvores.checked) {
    pontos = pontos + 25;
  }

  /* =====================================================
     ETAPA 4 - LIMPAR CLASSES ANTIGAS
     Isso evita que o resultado fique com cores erradas.
     ===================================================== */

  resultado.classList.remove("baixo");
  resultado.classList.remove("medio");
  resultado.classList.remove("alto");

  /* =====================================================
     ETAPA 5 - MOSTRAR RESULTADO
     RUBRICA OBRIGATÓRIA: Relevância e impacto

     O resultado não é só número.
     Ele orienta o usuário sobre sustentabilidade.
     ===================================================== */

  if (pontos <= 25) {
    resultado.textContent =
      "Resultado: " + pontos + "% sustentável. A propriedade precisa melhorar suas práticas ambientais.";

    resultado.classList.add("baixo");
  }

  else if (pontos <= 50) {
    resultado.textContent =
      "Resultado: " + pontos + "% sustentável. A propriedade está começando, mas ainda pode evoluir.";

    resultado.classList.add("medio");
  }

  else if (pontos <= 75) {
    resultado.textContent =
      "Resultado: " + pontos + "% sustentável. Muito bom! A propriedade já utiliza várias práticas conscientes.";

    resultado.classList.add("alto");
  }

  else {
    resultado.textContent =
      "Resultado: " + pontos + "% sustentável. Excelente! Tecnologia e meio ambiente estão trabalhando juntos.";

    resultado.classList.add("alto");
  }
}