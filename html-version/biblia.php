<?php
$pageTitle = 'Bíblia Online — CCN';
$pageDescription = 'Leia a Bíblia online com a CCN. Ferramentas e leituras diárias para toda a família.';
require __DIR__ . '/includes/header.php';
?>
<section class="page-hero">
  <div class="container-app">
    <p class="eyebrow"><?php include __DIR__.'/includes/fish-svg.php'; ?> Bíblia Online</p>
    <h1>Toda a Escritura, inspirada por Deus.</h1>
    <p>Ferramentas rápidas para você ler, meditar e estudar a Palavra durante a semana.</p>
  </div>
</section>

<section class="section container-app">
  <div class="grid-3">
    <a class="card-soft tile" href="https://www.bible.com/pt/bible" target="_blank" rel="noreferrer">
      <h3>Bíblia YouVersion</h3>
      <p>Leia em várias traduções e crie planos de leitura.</p>
      <span class="link-arrow">Abrir →</span>
    </a>
    <a class="card-soft tile" href="https://www.bibliaonline.com.br/" target="_blank" rel="noreferrer">
      <h3>Bíblia Online</h3>
      <p>Pesquisa, comentários e planos devocionais.</p>
      <span class="link-arrow">Abrir →</span>
    </a>
    <a class="card-soft tile" href="https://www.bible.com/pt/reading-plans" target="_blank" rel="noreferrer">
      <h3>Planos de leitura</h3>
      <p>Comece um plano hoje e cresça na fé.</p>
      <span class="link-arrow">Abrir →</span>
    </a>
  </div>

  <div class="mt-12 card-soft" style="padding:2rem">
    <p class="eyebrow">Versículo do dia</p>
    <blockquote style="margin-top:1rem;font-family:var(--font-display);font-size:1.5rem;font-style:italic;color:var(--primary-deep)">"Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento."</blockquote>
    <cite style="display:block;margin-top:.75rem;font-size:.75rem;text-transform:uppercase;letter-spacing:.15em;color:var(--muted-foreground);font-style:normal">Provérbios 3:5</cite>
  </div>
</section>

<?php require __DIR__ . '/includes/footer.php'; ?>
