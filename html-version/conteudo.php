<?php
$pageTitle = 'Conteúdo — Mensagens e Devocionais | CCN';
$pageDescription = 'Mensagens, devocionais, esboços e estudos bíblicos da Comunidade Cristo para as Nações.';
require __DIR__ . '/includes/header.php';
?>
<section class="page-hero">
  <div class="container-app">
    <p class="eyebrow"><?php include __DIR__.'/includes/fish-svg.php'; ?> Conteúdo</p>
    <h1>Mensagens, devocionais e estudos para caminhar durante a semana.</h1>
    <p>Alimente sua fé a qualquer hora, em qualquer lugar.</p>
  </div>
</section>

<section class="section container-app">
  <div class="grid-3">
    <?php foreach ([
      // Adicionamos o nome do arquivo .php como o 5º índice (posição [5]) de cada linha:
      ['Mensagem','28 Set 2025','E sereis minhas testemunhas','O poder do Espírito Santo enviado para nos alinhar ao verdadeiro foco da igreja de Cristo.','preaching.jpg', 'msg-sereis-minhas-testemunhas.php'],
      ['Devocional','24 Set 2025','Obediência gera relacionamento','Deus nos exorta a crescer e florescer com esperança, mesmo em terra de sofrimento e dor.','worship-band.jpg', 'msg-obediencia-gera-relacionamento.php'],
      ['Mensagem', '18 Set 2025', 'Decisões', 'Quais decisões você tomou essa semana? Uma reflexão sobre as escolhas de Davi e o impacto de colocar a fé no Deus vivo.', 'family.jpg', 'msg-decisoes.php'],
    <!--  ['Mensagem','11 Set 2025','O caminho da bonança','A bondade prática como marca do povo de Deus.','community-1.jpg', 'msg-caminho-da-bonanca.php'], -->
    <!--  ['Devocional','07 Set 2025','A mente renovada','Transformar-se pela renovação do entendimento.','preaching.jpg', 'msg-mente-renovada.php'], -->
    <!-- ['Estudo','02 Set 2025','Fundamentos da fé','Uma trilha para novos convertidos.','youth.jpg', 'msg-fundamentos-da-fe.php'], -->
    ] as $m): ?>
      <article class="card-soft article-card">
        <div class="thumb"><img src="assets/img/<?= e($m[4]) ?>" alt="" loading="lazy"></div>
        <div class="body">
          <div class="tag-row"><span class="tag"><?= e($m[0]) ?></span><span class="date"><?= e($m[1]) ?></span></div>
          <h3><?= e($m[2]) ?></h3>
          <p><?= e($m[3]) ?></p>
          <a href="<?= e($m[5]) ?>" class="link-arrow">Ler mais →</a>
        </div>
      </article>
    <?php endforeach; ?>
  </div>
</section>

<?php require __DIR__ . '/includes/footer.php'; ?>
