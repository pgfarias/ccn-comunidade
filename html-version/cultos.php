<?php
$pageTitle = 'Cultos & Ao Vivo — CCN';
$pageDescription = 'Assista aos cultos da CCN. Sexta 20h e domingo 9h30 (presencial e online). Domingo 18h30 (online). Confira as últimas mensagens.';
require __DIR__ . '/includes/header.php';
?>
<section class="page-hero">
  <div class="container-app">
    <p class="eyebrow"><?php include __DIR__.'/includes/fish-svg.php'; ?> Cultos & Ao Vivo</p>
    <h1>Adore com a gente, presencialmente ou online.</h1>
    <p>Estamos juntos toda semana. Escolha o horário que melhor se encaixa e venha adorar.</p>
    <div class="hero-actions">
      <a class="btn-live" href="https://www.youtube.com/@comunidadeccn" target="_blank" rel="noreferrer"><span class="live-dot"></span> Assista no YouTube</a>
      <a class="btn-outline" href="https://instagram.com/comunidadeccn" target="_blank" rel="noreferrer">Ao vivo no Instagram</a>
    </div>
  </div>
</section>

<section class="section container-app">
  <div class="grid-3">
    <?php foreach ([
      ['Sexta • 20h','Culto de Ensino','Ambiente para aprofundar na Palavra e ser edificado. Presencial e online.'],
      ['Domingo • 9h30','Escola Bíblica','Classes para todas as idades — do berçário aos adultos. Presencial e online.'],
      ['Domingo • 18h30','Culto da Família','Celebração central da semana, com louvor e mensagem. Transmitido online.'],
    ] as $c): ?>
      <div class="card-soft tile">
        <p class="eyebrow"><?= e($c[0]) ?></p>
        <h3 class="mt-3"><?= e($c[1]) ?></h3>
        <p><?= e($c[2]) ?></p>
      </div>
    <?php endforeach; ?>
  </div>
</section>

<section class="bg-surface">
  <div class="section container-app">
    <h2 class="section-title center">Mensagens recentes</h2>
    <div class="grid-3 mt-10">
      <?php foreach ([
        ['A cultura do Reino em tempos de incerteza','28 Set 2025','preaching.jpg'],
        ['Discernimento espiritual no cotidiano','24 Set 2025','worship-band.jpg'],
        ['Famílias que servem juntas','18 Set 2025','family.jpg'],
      ] as $m): ?>
        <article class="card-soft article-card">
          <div class="thumb"><img src="assets/img/<?= e($m[2]) ?>" alt="" loading="lazy"></div>
          <div class="body">
            <div class="tag-row"><span class="tag">Mensagem</span><span class="date"><?= e($m[1]) ?></span></div>
            <h3><?= e($m[0]) ?></h3>
            <a class="link-arrow" href="https://www.youtube.com/@comunidadeccn" target="_blank" rel="noreferrer">Assistir →</a>
          </div>
        </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php require __DIR__ . '/includes/footer.php'; ?>
