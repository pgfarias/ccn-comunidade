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
      ['Mensagem','28 Set 2025','A cultura do Reino em tempos de incerteza','O evangelho responde às grandes questões da nossa geração com esperança e liberdade.','preaching.jpg'],
      ['Devocional','24 Set 2025','Discernimento espiritual no cotidiano','Voltar a mente para a verdade do evangelho é um exercício diário.','worship-band.jpg'],
      ['Esboço','18 Set 2025','Famílias que servem juntas','O legado da fé atravessa o tempo.','family.jpg'],
      ['Mensagem','11 Set 2025','O caminho da bonança','A bondade prática como marca do povo de Deus.','community-1.jpg'],
      ['Devocional','07 Set 2025','A mente renovada','Transformar-se pela renovação do entendimento.','preaching.jpg'],
      ['Estudo','02 Set 2025','Fundamentos da fé','Uma trilha para novos convertidos.','youth.jpg'],
    ] as $m): ?>
      <article class="card-soft article-card">
        <div class="thumb"><img src="assets/img/<?= e($m[4]) ?>" alt="" loading="lazy"></div>
        <div class="body">
          <div class="tag-row"><span class="tag"><?= e($m[0]) ?></span><span class="date"><?= e($m[1]) ?></span></div>
          <h3><?= e($m[2]) ?></h3>
          <p><?= e($m[3]) ?></p>
          <a href="#" class="link-arrow">Ler mais →</a>
        </div>
      </article>
    <?php endforeach; ?>
  </div>
</section>

<?php require __DIR__ . '/includes/footer.php'; ?>
