<?php
require __DIR__ . '/includes/config.php';

$sent = false; $error = null; $data = ['nome'=>'','email'=>'','telefone'=>'','assunto'=>'','mensagem'=>''];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  foreach ($data as $k => $_) $data[$k] = trim($_POST[$k] ?? '');
  if ($data['nome'] === '' || $data['email'] === '' || $data['mensagem'] === '') {
    $error = 'Preencha nome, e-mail e mensagem.';
  } elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $error = 'Informe um e-mail válido.';
  } else {
    $to = $SITE['email'];
    $subject = '[Site CCN] ' . ($data['assunto'] !== '' ? $data['assunto'] : 'Contato via site');
    $body = "Nome: {$data['nome']}\nE-mail: {$data['email']}\nTelefone: {$data['telefone']}\n\nMensagem:\n{$data['mensagem']}\n";
    $headers = "From: no-reply@" . ($_SERVER['HTTP_HOST'] ?? 'localhost') . "\r\n";
    $headers .= "Reply-To: {$data['email']}\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    @mail($to, $subject, $body, $headers);
    $sent = true;
    $data = ['nome'=>'','email'=>'','telefone'=>'','assunto'=>'','mensagem'=>''];
  }
}

$pageTitle = 'Contato — CCN';
$pageDescription = 'Fale com a Comunidade Cristo para as Nações. WhatsApp, e-mail e endereço no Jd. Umarizal.';
require __DIR__ . '/includes/header.php';
?>
<section class="page-hero">
  <div class="container-app">
    <p class="eyebrow"><?php include __DIR__.'/includes/fish-svg.php'; ?> Contato</p>
    <h1>Nossa porta está aberta. Fale com a gente.</h1>
    <p>Dúvidas, pedidos de oração ou vontade de nos visitar? Escolha o melhor canal para você.</p>
  </div>
</section>

<section class="section container-app">
  <div class="grid-2">
    <div>
      <h2 class="section-title">Envie sua mensagem</h2>
      <p class="mt-3 text-muted">Respondemos com carinho, geralmente em até 48h.</p>

      <?php if ($sent): ?>
        <div class="form-msg ok" style="margin-top:1.5rem">Mensagem enviada! Em breve entraremos em contato.</div>
      <?php elseif ($error): ?>
        <div class="form-msg err" style="margin-top:1.5rem"><?= e($error) ?></div>
      <?php endif; ?>

      <form method="post" class="mt-6" novalidate>
        <div class="form-field"><label for="nome">Nome *</label><input id="nome" name="nome" type="text" required value="<?= e($data['nome']) ?>"></div>
        <div class="form-field"><label for="email">E-mail *</label><input id="email" name="email" type="email" required value="<?= e($data['email']) ?>"></div>
        <div class="form-field"><label for="telefone">Telefone / WhatsApp</label><input id="telefone" name="telefone" type="tel" value="<?= e($data['telefone']) ?>"></div>
        <div class="form-field"><label for="assunto">Assunto</label>
          <select id="assunto" name="assunto">
            <option value="">Selecione…</option>
            <option>Quero conhecer a igreja</option>
            <option>Pedido de oração</option>
            <option>Aconselhamento pastoral</option>
            <option>Servir em um ministério</option>
            <option>Outro assunto</option>
          </select>
        </div>
        <div class="form-field"><label for="mensagem">Mensagem *</label><textarea id="mensagem" name="mensagem" rows="6" required><?= e($data['mensagem']) ?></textarea></div>
        <button type="submit" class="btn-primary">Enviar mensagem</button>
      </form>
    </div>

    <div>
      <div class="card-soft info-block">
        <h3>Endereço</h3>
        <p><?= e($SITE['address']) ?></p>
        <a class="link-arrow" href="https://maps.google.com/?q=R.+Itamanduaba,+36+-+Jardim+Umarizal,+São+Paulo" target="_blank" rel="noreferrer">Ver no mapa →</a>
      </div>
      <div class="card-soft info-block" style="margin-top:1rem">
        <h3>Telefone</h3>
        <p><a href="tel:<?= e($SITE['phone_raw']) ?>"><?= e($SITE['phone']) ?></a></p>
      </div>
      <div class="card-soft info-block" style="margin-top:1rem">
        <h3>WhatsApp</h3>
        <p><a href="https://wa.me/<?= e($SITE['whatsapp']) ?>" target="_blank" rel="noreferrer"><?= e($SITE['whatsapp_display']) ?></a></p>
      </div>
      <div class="card-soft info-block" style="margin-top:1rem">
        <h3>E-mail</h3>
        <p><a href="mailto:<?= e($SITE['email']) ?>" style="word-break:break-all"><?= e($SITE['email']) ?></a></p>
      </div>
      <div class="card-soft info-block" style="margin-top:1rem">
        <h3>Instagram</h3>
        <p><a href="https://instagram.com/<?= e($SITE['instagram']) ?>" target="_blank" rel="noreferrer">@<?= e($SITE['instagram']) ?></a></p>
      </div>
    </div>
  </div>
</section>

<?php require __DIR__ . '/includes/footer.php'; ?>
